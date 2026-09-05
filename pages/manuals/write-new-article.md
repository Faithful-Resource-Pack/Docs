---
title: "Writing a New Article"
category: "Manuals"
date: "2021-07-19"
---

# Writing a New Documentation Article

If you're seeing this article, thank you for your interest in contributing to our website! We've tried to make this process as simple as possible for non-technical users, so feel free to skip around if you know what you're doing.

## Creating a Fork

This website is built using [VitePress](https://vitepress.dev), which uses a combination of Markdown and YAML to format articles. Each doc is stored as a `.md` file on the project's GitHub repository.

Adding a new article is as simple as creating a new file in the `pages/` folder in the project repository and rebuilding the website. To do this without write-level access, fork the repository on GitHub at https://github.com/Faithful-Resource-Pack/Docs/fork.

Leaving the default options in most cases should be fine, although you can rename your repository copy to be more verbose if necessary.

## Writing Your Article

The `pages/` folder is further broken up into categories by folder, which are used to generate the category of the finished article, and the path and filename of the article will form the URL slug. Avoid creating new categories unless your article genuinely does not fit into any existing folder.

After creating your text file, you can begin writing your article using Markdown. Markdown is a lightweight markup language with plain-text-formatting syntax, used by many platforms including Discord and GitHub.

::: tip Useful Markdown Resources
- Markdown reference: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
- Online editor with live preview: https://markdownlivepreview.com/.
:::

If your article contains images, put them in the `images/` folder, which follows the same categorization as the `pages/` folder. Try and keep image filenames short and descriptive, and use an image compressor like https://compressor.io or [Oxipng](https://github.com/oxipng/oxipng).

Some general guidelines to keep in mind:

- Split information up into logical paragraphs and groups: You're writing documentation, not a novel. Try to make it easier for users to search and skip to the section they need rather than have to read through dense paragraphs of information.
- Keep the tone similar to existing articles: Articles usually maintain a fairly neutral and encyclopedic tone.
- Avoid nested lists and excessive formatting: Simpler text is usually easier to read, so use _italics_, **bolding**, and other noisy text formatting features sparingly.
- Try to keep your headers in descending order: Skipping levels can cause accessibility issues and mess up table of content generation.

Note that this is not an exhaustive list, and you should always follow the formatting of similar articles when possible.

## Writing Article Metadata

Docs also must contain [YAML](https://yaml.org/) frontmatter, which specifies metadata like the formatted article title, category, and creation date. If this is omitted or malformed, the article won't show up in the sidebar or navigation.

You can copy and paste this template to the top of your Markdown file, and change each value as necessary. Lines starting with `#` are ignored.

```yaml
---
# shows in navigation and external links
title: "Your title here"
# optional, falls back to folder name
category: "Manuals"
# new articles get pushed to the top
date: "YYYY-MM-DD"
# optional, adds a deprecated badge to the sidebar
deprecated: false
# optional, excludes from navigation bar and collapses sidebar
archived: false
---
```

## Submitting Your Article

After writing your article and its corresponding metadata, you can submit it for review using a GitHub pull request. A developer or manager will review your doc contents and formatting, and either merge it into the main website or sent it back for edits.

Any questions? Ask a developer or manager on our [Discord server](https://discord.gg/sN9YRQbBv7) for more information.

## Advanced Features

If you want to test your article locally, follow the instructions in the project README to install the required dependencies and build the project.

While we recommend only using Markdown, other languages can be used for special cases:
- HTML
- CSS (using the `<style>` HTML tag)
- JavaScript (using the `<script>` HTML tag)
- [Vue components](https://vitepress.dev/guide/using-vue)
