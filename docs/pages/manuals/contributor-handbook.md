---
title: "The Faithful Contributor's Handbook"
type: "Manuals"
date: "23/03/2022"
deprecated: false
---

<script>
    const Author = "{Author}"; // this is literally the only way it works
</script>

# The Faithful Contributor's Handbook
#### *A step-by-step guide on how to create and submit textures for Faithful, and vote on them afterwards*

*If you’re reading this, you’ve most likely decided to help Faithful out and make a texture! For that, we sincerely thank you. Faithful is a fully community-run project, and wouldn’t be able to exist without volunteers like yourself!*

Now, let's get started.

___
## Creating Textures
Before you begin, we highly recommend reading our guidelines [here](/pages/textures/f32-texturing-guidelines) (for Faithful 32x) or [here](/pages/textures/cf32-texturing-guidelines) (for Classic Faithful 32x), as every texture in Faithful needs to follow them. The guidelines also contain a lot of handy texturing tips that you might find useful later down the path.
If you’re looking for a good program for pixel art, here’s what some of our best artists use:
- **Aseprite (paid, but free if you compile it from source yourself – [useful tool](https://github.com/TheLiteCrafter/AsepriteTool/releases/), [video tutorial](https://youtu.be/4amv2bAWJAA))** – Made specifically for pixel art. Offers useful options like several tiling modes and easy palette manipulation.
- **Paint.net (also known as PDN; free)** – An all-purpose image manipulation program, easy to learn, but only works on Windows.
- **GIMP (free)** – More capable than Paint.net, doesn't require Windows, but harder to learn for beginners.
- **Photoshop (paid)** – Expensive without an already existing license, however this works for basically everything.

To help you choose a texture to make, use the `/missing` command in [#bot-commands](https://ptb.discord.com/channels/773983706582482946/794137845408595978) to list textures that Faithful is lacking for a given version. Those are needed the most, but you can, of course, edit or re-make an existing texture as well if you so please.

Finally, during the creation of your texture, we recommend that you share your progress in [#texture-discussion](https://ptb.discord.com/channels/773983706582482946/773987767989305385). This will allow for others to give feedback and help you improve your texture before submission.

## Formatting a Submission
Once you’re done with your texture, submit it by uploading a PNG file in the proper channel. Make sure the file name is exactly the same as the name of the texture in the game files! If you're looking for which channel submits to which project, here's a handy guide:

- [#32x-submit-textures](https://discord.com/channels/773983706582482946/773987409993793546) – Faithful 32x
- [#64x-submit-textures](https://discord.com/channels/773983706582482946/931887174977208370) – Faithful 64x
- [#32x-submit-jappa](https://discord.com/channels/814198513847631944/814201529032114226) – Classic Faithful 32x Jappa
- [#32x-submit-progart](https://discord.com/channels/814198513847631944/909503944118648883) – Classic Faithful 32x PA
- [#64x-submit-jappa](https://discord.com/channels/814198513847631944/814209343502286899) – Classic Faithful 64x

The former two are on the [main Discord](https://discord.gg/sN9YRQbBv7), and the last three channels are on the [Classic Faithful Discord](https://discord.gg/KSEhCVtg4J).

You can additionally upload multiple textures in one message if you made an entire set of textures, such as wool or planks, and attach a comment to your submission by sending a text message with the texture.

If you’re submitting a texture with a name that is present more than once in the vanilla files (such as `acacia.png`, which is both a sign texture and a boat texture), please hold for a bit after sending your message – the bot will ask you to clarify which texture you’re submitting. Choose the correct one by reacting to the bot message.

## Crediting Co-authors

ANY reused part of an existing Faithful texture should be credited in your submission. Additionally, if you’ve collaborated with someone else while making the texture, credit the co-author(s) as well. Ping all co-authors in your submission comment for the bot to add them automatically. If you're simply tweaking an existing texture, start your submission description with a plus sign (+) to add all the previous co-authors to the texture automatically.

Alternatively, you can find out exactly who made which texture by searching for it using the `/texture` command or by using our web app gallery. If you see plain text rather than a Discord ping in the `/texture` embed, this is a user who is no longer in the Discord server. To credit them, you can surround their name in curly brackets, so the bot can detect you're trying to add this user as a co-author. For example, "Fixed a false line. Credit to {Author} for the original texture." would credit Author. This syntax also works for users who are in the server, but it's usually easier to just directly ping them (if credits for a texture are missing, you don’t need to worry about any of this).

You can delete your submission at any time by clicking the arrow icon below your submission, waiting for the bot to finish reacting, then click the trash bin icon. Additionally, if you ever want your texture removed from Faithful after it has passed voting and been added, message the Managers and they will remove your texture.

Finally, please know that by submitting a texture, you agree to allow:
- The texture to be used in any public or development version of Faithful.
- The texture to be used directly or in a modified state in other projects under the Faithful project. (Classic Faithful, Faithful Tweaks/Add-ons etc.)
- The texture to be used in/as a base for other textures meant for Faithful.
- Others to edit your texture without any required prior notice, and allow them to submit the edited texture to Faithful, with appropriate credit.

## Voting on Textures and the Texture Approval Process
Whether a texture makes it into Faithful or not is determined by a voting process. It consists of two stages:
1. **Community Voting:**
    On the main Discord, this period lasts for 2 days and is open to everybody. For Classic Faithful, this period lasts one day. To vote on a submission, simply click on the check mark ✅ or cross ❌ button depending on whether you like the texture or not. Before you vote however, keep in mind that you should do the following:
    - **Clearly view the texture:** You should always get a clear look at the texture before voting on it. The size of the texture you see in submissions can sometimes be too small and compressed to actually view. Thankfully, the bot is equipped with tools that you can use to get a better view of the texture. You can click on the magnifying glass button to view the texture more closely (this button is also a command in the form of `/magnify`).

    - **Compare different resolutions:** When evaluating, you shouldn’t just look at the texture that was submitted. Of course, with this being a higher resolution resource pack of the base textures, it’s important that the texture is consistent to the original. Using the comparison image inside the submission embed, try to look for consistency issues such as incorrect color placement, incorrect shape sizes, and even detail not present in the original.

    - **Communicate issues to the author:** Communication to the author is a crucial part of the evaluation process. If at any point, you find issues through your evaluation of a texture, try to explain to the original author what issues the texture has, and try to give advice on how to fix it. Remember, constructive criticism is key – simply saying that “a texture is bad” is no help whatsoever.

    **REMEMBER: Never vote based on how many votes a texture already has! Always vote based on your own individual opinion.**

2. **Art Director Council Voting**: When a submission has passed public voting (determined as getting more or the same amount of upvotes than downvotes after a 2 day period), it enters a 1-day phase of council voting. During this phase, council members talk about the submission in private and vote to determine whether the texture fits the stylistic direction of Faithful. For Classic Faithful, the results from community voting directly go to results, without a council phase.

    A texture passes council voting if it has more upvotes than downvotes after one day. The council’s decision is final – if the council rejects a texture, it will never be added to the pack and the same, unmodified one cannot be submitted again.

Besides the upvote and downvote options regular users get, there are 2 other options that the council and Managers have:

1. **Instapass**: An instapass is when a texture immediately gets added into the pack without needing to go through the voting process. These textures usually get instapassed for reasons such as being recolours of another texture, consistency fixes for textures that are outdated, or even bugs that needed fixing.

2. **Invalidation**: An invalidation is given when textures break the guidelines.





