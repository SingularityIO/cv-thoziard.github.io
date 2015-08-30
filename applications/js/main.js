(function ($) {
	function replacePlaceholdersBySpans(content) {
		/*
		 * The following placeholders are being used:
		 * {game-name}
		 * {forum-name}
		 * {hots-battle-tag}
		 * {lol-region}
		 * {hots-region}
		 * {ts-id}
		 * {link-application}
 		 * {start-trial-date-short}
 		 * {end-trial-date-short}
 		 * {start-trial-date-long}
		 * {end-trial-date-long}
		 */

		return content.replace(/{game-name}/g, '<span class="game-name-placeholder"></span>')
			.replace(/{forum-name}/g, '<span class="forum-name-placeholder"></span>')
			.replace(/{hots-battle-tag}/g, '<span class="hots-battle-tag-placeholder"></span>')
			.replace(/{lol-region}/g, '<span class="lol-region-placeholder"></span>')
			.replace(/{hots-region}/g, '<span class="hots-region-placeholder"></span>')
			.replace(/{ts-id}/g, '<span class="ts-id-placeholder"></span>')
			.replace(/{link-application}/g, '<span class="link-application-placeholder"></span>')
			/*.replace(/{start-trial-date-short}/g, '<span class="start-trial-date-short-placeholder"></span>')
			.replace(/{end-trial-date-short}/g, '<span class="end-trial-date-short-placeholder"></span>')
			.replace(/{start-trial-date-long}/g, '<span class="start-trial-date-long-placeholder"></span>')
			.replace(/'{end-trial-date-long}/g, '<span class="end-trial-date-long-placeholder"></span>');*/
	}

	function updateTextInPlaceholderSpans($blockContext) {
		$('span.game-name-placeholder', $blockContext).text($('#game-select option:selected').text());
		$('span.forum-name-placeholder', $blockContext).text($('#new-forum-name-input').val());
		$('span.hots-battle-tag-placeholder', $blockContext).text($('#new-battle-tag-input').val());
		$('span.lol-region-placeholder', $blockContext).text($('#new-lol-region-select').val());
		$('span.hots-region-placeholder', $blockContext).text($('#new-hots-region-select').val());
		$('span.ts-id-placeholder', $blockContext).text($('#ts-id-input').val());
		$('span.link-application-placeholder', $blockContext).text($('#application-url-input').val());
		/*$('span.start-trial-date-short-placeholder', $blockContext).text('');
		$('span.end-trial-date-short-placeholder', $blockContext).text('');
		$('span.start-trial-date-long-placeholder', $blockContext).text('');
		$('span.end-trial-date-long-placeholder', $blockContext).text('');*/
	}

	function addContentWithValuesToBlock($contentBlock, content) {
		content = replacePlaceholdersBySpans(content);
		$contentBlock.html(content);
		updateTextInPlaceholderSpans($contentBlock);
	}
	
	function newUserDetailsControlsChangeEventHandler () {
		$('.async-content-block').each(function () {
			updateTextInPlaceholderSpans($(this));
		});
	}

	$(function () {
		$('#game-select').change(function () {
			var $gameSelect = $(this);
			var selectedGame = $gameSelect.val();
			
			$('.new-user-details-control').each(function () {
				var $detailsControl = $(this);
				var showControlForGame = $detailsControl.data('show-for-game');
				
				if (showControlForGame === selectedGame || showControlForGame === 'all') {
					$detailsControl.parent('.form-group').show();
				} else {
					$detailsControl.parent('.form-group').hide();
				}
			});

			$('.async-content-block').each(function () {
				var $asyncContentBlock = $(this);
				var contentToLoadFileName = $asyncContentBlock.data('content') + '.html';

				$.ajax({
					method: 'GET',
					url: 'content/' + selectedGame + '/' + contentToLoadFileName,
					cache: false,
					success: function (specificContent) {
						if (specificContent !== undefined && specificContent !== null && specificContent !== '') {
							addContentWithValuesToBlock($asyncContentBlock, specificContent);
						} else {

							$.ajax({
								method: 'GET',
								url: 'content/' + contentToLoadFileName,
								cache: false,
								success: function (defaultContent) {
									if (defaultContent !== undefined && defaultContent !== null && defaultContent !== '') {
										addContentWithValuesToBlock($asyncContentBlock, defaultContent);
									} else {
										$asyncContentBlock.html('<strong>No content has been found.</strong>');
									}
								}
							});
						}
					}
				});
			});
		}).change();
		
		$('input.new-user-details-control').on('input', newUserDetailsControlsChangeEventHandler);
		$('select.new-user-details-control').change(newUserDetailsControlsChangeEventHandler);
	});
})(jQuery);