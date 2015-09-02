# The Chaos Vanguard Utilities

## Applications/Content

This folder contains all and only the content that is loaded into the different boxes
on the applications tool (apart from this README.md).

#### How are the files loaded into the boxes?

When loading in the content from an HTML file, the script first looks if
there is content in the HTML file being loaded in the specific folder
for the game that has been selected in the dropdownlist.
When there isn't any content in it,
it will try to get the content from the HTML file in this 'content' folder.

For example, when Warframe has been selected in the dropdownlist
and the script is loading in the ted-content.html file,
it will first look if there is content in
[/applications/content/warframe/ted-content.html](https://github.com/CV-Thoziard/cv-thoziard.github.io/blob/master/applications/content/warframe/ted-content.html).
When there is text in that HTML file, it will load that into the corresponding box
and the script will move on.
If it's empty however, it will look at 
[the 'default' ted-content.html file in this folder](https://github.com/CV-Thoziard/cv-thoziard.github.io/blob/master/applications/content/ted-content.html).
When this file has content, it will be loaded into the box.
When it would also be empty, a generic *"No content has been found."* will be shown.

#### What files can I edit?

You can edit any file that resides in this 'content' folder (or subfolders)
with the README.md as an exception (it's the file you're currently reading).
Also, you probably don't want to edit the interview-general.html and
interview-specific.html files.
They probably have more 'makeup' with links and lists in them.
Much more HTML is being used in these files than in the other ones.

If you still would like to edit them however,
you probably only want to update the interview-general.html file in the default 'content' folder
and the interview-specific.html file in the game specific folders.

The following table specifies which HTML file corresponds with which box on the page.

Content Block Name | HTML File Name
------------------ | --------------
Interview - General | interview-general.html
Interview - Game Specific | interview-specific.html
Application - Accepted | application-accepted.html
Application - On Trial | application-on-trial.html
TED - Title | ted-title.html
TED - Content | ted-content.html

#### How should I edit the files?

Choose your file and click on the pencil icon in the header on the right that says *'Edit this file'*.
After that, just add, remove or update the content you like.
You can preview your changes by going to the *'Preview changes'* tab.
In the *'Commit changes'* box right under the textbox where you edit the content, 
you can optionally enter a description.
When you don't, a default description will be used.
Make sure that the *'Commit directly to the `master` branch'* option has been selected
before you click the *'Commit changes'* button.

**You will be able to break things!**
Everything you commit will be online right away.
When you did something wrong and broke the website but are not able to revert it yourself,
please contact me as soon as possible and I will revert the change

#### What should the content look like?

You can write normal HTML in the different files.
So for those who know (a bit of) HTML: feel free to use it.
If you would like to style your HTML a bit: 
[the Bootstrap library](http://getbootstrap.com/) is included.

When you don't know HTML: writing normal text is no problem at all.
However, there are some points you need to look out for:
* You should end every line but the last one with a `<br />`.
When you don't do that, a space will be used instead between the lines.
* `<` is a reserved character in HTML. Use `&lt;` instead.
* `>` is a reserved character in HTML. Use `&gt;` instead.

Like you may notice, I also you placeholders in `{` `}`.
These placeholders are used to fill in the dates or the content
that the user has filled into the form fields near the top of the page.
The following placeholders are being used:
* **{game-name}** - The name of the game, selected in the first dropdownlist
* **{forum-name}** - The forum name of the new trialist, filled into the corresponding text box
* **{hots-battle-tag}** - The Battle.net tag for Heroes of the Storm, filled in the corresponding text box
* **{lol-region}** - The region in League of Legends, selected in the corresponding dropdownlist
* **{hots-region}** - The region in Heroes of the Storm, selected in the corresponding dropdownlist
* **{ts-id}** - The TeamSpeak ID of the new trialist
* **{link-application}** - The link to the application thread
* **{start-trial-date-short}** - The start date of the trial in dd/mm/yyyy
* **{end-trial-date-short}** - The end date of the trail in dd/mm/yyyy
* **{start-trial-date-long}** - The start date of the trial in [day] [full month name]
* **{end-trial-date-long}** - The end date of the trial in [day] [full month name]