---
title: "commands"
type: "CompliBot"
date: "20/07/2021"
---

# CompliBot commands

<div class="table-of-content">
<h2>Table of Contents</h2>

<ul>
  <li><a href="{{ page.url }}#about">/about</a></li>
  <ul>
    <li><a href="{{ page.url }}#syntax">Syntax</a></li>
  </ul>
  <li><a href="{{ page.url }}#animate">/animate</a></li>
  <ul>
    <li><a href="{{ page.url }}#syntax-1">Syntax</a></li>
  </ul>
  <li><a href="{{ page.url }}#color">/color</a></li>
  <ul>
    <li><a href="{{ page.url }}#syntax-2">Syntax</a></li>
    <li><a href="{{ page.url }}#example">Example</a></li>
  </ul>
</ul>
</div>

## ``/about``:

<table>
  <tr>
    <th>Description</th>
    <td>Displays the list of texture that you, or the given Discord user, made.</td>
  </tr>
  <tr>
    <th>Use </th>
    <td>Anyone can use this command.</td>
  </tr>
  <tr>
    <th>Aliases</th>
    <td>None.</td>
  </tr>
  <tr>
    <th>Status</th>
    <td><span class="new-badge">DISABLED FOR MAINTENANCE</span></td>
  </tr>
</table>

<a href="https://github.com/Compliance-Resource-Pack/Discord-Bot/issues/new?assignees=&labels=/animate,bug&template=bug_report.md" class="new-issue-btn">Report Issue</a>

### Syntax:

- `/about (me)`  
  Return all the textures that you made.  

- `/about <DiscordUsername + # + DiscordUserTag>`  
  Return all the textures that the target made.  

---

## ``/animate``:

<table>
  <tr>
    <th>Description</th>
    <td>Animate a texture.</td>
  </tr>
  <tr>
    <th>Use </th>
    <td>Anyone can use this command.</td>
  </tr>
  <tr>
    <th>Aliases</th>
    <td><code class="language-plaintext">/play</code></td>
  </tr>
  <tr>
    <th>Status</th>
    <td><span class="deprecated-badge">DEPRECATED</span></td>
  </tr>
</table>

<a href="https://github.com/Compliance-Resource-Pack/Discord-Bot/issues/new?assignees=&labels=/animate,bug&template=bug_report.md" class="new-issue-btn">Report Issue</a>

### Syntax:
- `/animate` + an image file attached. The image needs to respect default Minecraft texture animation sizes.
  <img class="center" height="512" src="{{ page.baseurl }}/images/pages/complibot/commands/animate_with_file_attached.png">

---

## ``/color``:

<table>
  <tr>
    <th>Description</th>
    <td>Use this command to show information about a color.</td>
  </tr>
  <tr>
    <th>Use </th>
    <td>Anyone can use this command.</td>
  </tr>
  <tr>
    <th>Aliases</th>
    <td><code class="language-plaintext">/color</code>&nbsp;<code class="language-plaintext">/colour</code>&nbsp;<code class="language-plaintext">/c</code></td>
  </tr>
  <tr>
    <th>Status</th>
    <td><span class="green-badge">EVERYTHING IS OK</span></td>
  </tr>
</table>

<a href="https://github.com/Compliance-Resource-Pack/Discord-Bot/issues/new?assignees=&labels=/color,bug&template=bug_report.md" class="new-issue-btn">Report Issue</a>

### Syntax:
- `/color #<HEX>`  
    Using a HEX value, the HEX value must be **3**, **6** or **8** bits long.  

- `/color rgb(<R[0-255]>,<G[0-255]>,<B[0-255]>)`  
    Using RGB values, they are integer between 0 & 255.  

- `/color rgba(<R[0-255]>,<G[0-255]>,<B[0-255]>,<a[0-1]>)`  
    Using RGB values, alpha is a floating number between 0 & 1.  

- `/color hsl(<H[0-360]>,<S[0-100]>,<L[0-100]>)`  
    Using HSL values, H is an integer between 0 & 360 while S & L are integer between 0 & 100.

- `/color hsv(<H[0-360]>,<S[0-100]>,<V[0-100]>)`  
    Using HSV values, H is an integer between 0 & 360 while S & V are integer between 0 & 100.

- `/color cmyk(<C[0-100]>,<Y[0-100]>,<M[0-100]>,<K[0-100]>)`  
    Using CMYK values, all values are integer within 0 & 100.  

### Example:

- `/color cmyk(0,50,85,0)`
    <img class="center" src="{{ site.baseurl }}/images/pages/complibot/commands/color_result.png">
