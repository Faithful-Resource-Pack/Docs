---
title: "The Faithful Contributor's Handbook"
type: "Textures"
date: "23/03/2022"
deprecated: false
---

<style>
  li, p {
    text-align: justify;
  }
</style>

# The Faithful Contributor's Handbook
#### *A step-by-step guide on how to create and submit textures for Faithful, and vote on them afterwards*

*If you’re reading this, you’ve most likely decided to help Faithful out and make a texture! For that, we sincerely thank you. Faithful is a fully community-run pack, and wouldn’t be able to exist without volunteers like yourself!*

Now, let's get started.

___
## Creating Textures
Before you begin, we highly recommend reading our guidelines [here](https://docs.faithfulpack.net/pages/textures/texturing-guidelines) (for Faithful 32x) or [here](https://docs.faithfulpack.net/pages/classicfaithful/32x-texturing-guidelines) (for Classic Faithful 32x), as every texture in Faithful needs to follow them. The Guidelines also contain a lot of handy texturing tips that you might find useful later down the path.
If you’re looking for a good program for pixel art, here’s what some of our best artists use:
- **Aseprite (paid, but free if you compile it from source yourself – [useful tool](https://github.com/TheLiteCrafter/AsepriteTool/releases/), [video tutorial](https://youtu.be/4amv2bAWJAA))** – Made specifically for pixel art. Offers useful options like several tiling modes and easy palette manipulation.
- **Paint.net (also known as PDN; free)** – An all-purpose image manipulation program, easy to learn, but only works on Windows.
- **GIMP (free)** – More capable than Paint.net, doesn't require Windows, but harder to learn for beginners.
- **Photoshop (paid)** – Expensive without an already existing license, however this works for basically everything.

To help you choose a texture to make, use the `/missing` command in [#bot-commands](https://ptb.discord.com/channels/773983706582482946/794137845408595978) to list textures that Faithful is lacking for a given version. Those are needed the most, but you can, of course, edit or re-make an existing texture as well if you so please.

Finally, during the creation of your texture, it’s recommended that you share your progress in [#texture-discussion](https://ptb.discord.com/channels/773983706582482946/773987767989305385). This will allow for others to give feedback and help you improve your texture.

## Submitting Textures
Once you’re done with your texture, submit it by uploading a PNG file whose name is identical to the vanilla texture’s in the proper channel ([#32x-submit-textures](https://ptb.discord.com/channels/773983706582482946/773987409993793546) for 32x and [#64x-submit-textures](https://ptb.discord.com/channels/773983706582482946/931887174977208370) for 64x). **Do not upload multiple images in a single message!**
If you’re submitting a texture with a name that is present more than once in the vanilla files (such as `acacia.png`, which is both a sign texture and a boat texture), please hold for a bit after sending your message – the bot will ask you to clarify which texture you’re submitting. Choose the correct one by reacting to the bot message.
You can attach a comment to your submission by sending a text message with the texture.

If you use ANY part of an existing Faithful texture in your submission, credit EVERYBODY who made the texture by pinging them in the submission comment! (This includes `[author name redacted]`! This is a former Faithful contributor who asked to have their name redacted, but it’s still necessary for us to have them registered in our database.) You can find out exactly who made which texture by searching for it using the `/texture` command or by using our web app gallery. If you see a string of numbers in place of the author name in the `/texture` embed, contact a Manager to find out who that is. Most of the time these are people who have left the server – to credit those, mention them in the comment without pinging. This won’t add them as authors automatically, but provides a note for the Managers so they can fix it manually later.
If credits for a texture are missing, don’t worry about any of this.
Additionally, if you’ve collaborated with someone else while making the texture, credit the co-author(s) as well.

You can delete your submission at any time by clicking the arrow icon below your submission, waiting for the bot to finish reacting, then click the trash bin icon. Additionally, if you ever want your texture removed from Faithful after it has passed voting and been added, message the Managers and they will remove your texture.

Finally, please know that by submitting a texture, you agree to allow:
- The texture to be used in any public or development version of Faithful.
- The texture to be used directly or in a modified state in other projects under the Faithful project. (Classic Faithful, Faithful Tweaks/Add-ons etc.)
- The texture to be used in/as a base for other textures meant for Faithful.
- Others to edit your texture without any required prior notice, and allow them to submit the edited texture to Faithful, with appropriate credit.

## Voting on Textures and the Texture Approval Process
Whether a texture makes it into Faithful or not is determined by a voting process. It consists of two stages:
1. **Public Voting**
This period lasts for 3 days and is open to everybody. To vote on a submission, simply click on the check mark (✓) or cross (X) button depending on whether you like the texture or not. Before you vote however, keep in mind that you should do the following:
    - **Clearly view the texture**
    You should always get a clear look at the texture before voting on it. The size of the texture you see in submissions can sometimes be too small and compressed to actually view. Thankfully, the bot is equipped with tools that you can use to get a better view of the texture. Clicking the third button next to the voting buttons should pop open a tool menu. To magnify the texture and see it better, click the magnifying glass. You should now be able to see the texture up close. This button is also a command in the form of `/magnify`.

    - **Compare different resolutions**
    When evaluating, you shouldn’t just look at the texture that was submitted. Of course, with this being a higher resolution resource pack of the base textures, it’s important that the texture is consistent to the original. Always compare textures with their vanilla equivalents when evaluating them.
    The bot has another tool dedicated to comparing textures to other resolutions in submissions. This tool is called the `/compare` command. When clicking on the white arrow next to the voting icons, find the symbol of 2 arrows stacked on top of each other. An image should pop up with textures side by side. When comparing, try to look for consistency issues such as incorrect color placement, incorrect shape sizes, and even detail not present in the original.
    
    - **Communicate issues to the author**
    Communication to the author is a crucial part of the evaluation process. If at any point, you find issues through your evaluation of a texture, try to explain to the original author what issues the texture has, and try to give advice on how to fix it. Remember, constructive criticism is key – simply saying that “a texture is bad” is no help whatsoever.
    
        **REMEMBER: Never vote based on how many votes a texture already has! You’ve got your own opinion, vote based on that.**

2. **Art Director Council Voting**
When a submission has passed public voting (determined as getting more or the same amount of upvotes than downvotes after a 3-day period), it enters a 1-day phase of council voting, during which the council talk about the submission in private, and vote to determine whether the texture fits the stylistic direction of Faithful. 
A texture passes council voting if its got more upvotes than downvotes after one day. The council’s decision is final – if the council rejects a texture, it will never be added to the pack and the same, unmodified one cannot be submitted again.

Besides the upvote and downvote options regular users get, there are 2 other options that the council and Managers have:
1. **Instapass**
An instapass is when a texture immediately gets added into the pack without needing to go through the voting process. These textures usually get instapassed for reasons such as being recolours of another texture, consistency fixes for textures that are outdated, or even bugs that needed fixing.

2. **Invalidation**
An invalidation is given when textures break the guidelines.





