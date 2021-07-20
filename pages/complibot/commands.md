---
title: "Commands"
type: "CompliBot"
date: "20/07/2021"

list:
- about:
  description: Displays the list of texture that you, or the given Discord user, made.
  use: Anyone can use this command.
  status: <span class="new-badge">DISABLED FOR MAINTENANCE</span>
  syntax: 
    - /about (me): Return all the textures that you made.
    - /about <DiscordUsername#DiscordUserTag>: Return all the textures that the target made.
- animate:
  description: Animate a Minecraft atlas texture.
  use: Anyone can use this command.
  aliases: [ play ]
  status: <span class="deprecated-badge">DEPRECATED</span>
  syntax: 
  - /animate + an image file attached: The image needs to respect default Minecraft texture animation sizes.
  result: <img class="center" height="512" src="../../images/pages/complibot/commands/animate_with_file_attached.png">
- color:
  description: Use this command to show information about a color.
  use: Anyone can use this command.
  aliases: [ color, colour, c ]
  status: <span class="green-badge">EVERYTHING IS OK</span>
  syntax: 
    - /color <#HEX>: Using a HEX value, the HEX value must be **3**, **6** or **8** bits long. (# is optional)
    - /color rgb(<R[0-255]>,<G[0-255]>,<B[0-255]>): Using RGB values, they are integer between 0 & 255.
    - /color rgba(<R[0-255]>,<G[0-255]>,<B[0-255]>,<a[0-1]>): Using RGB values, alpha is a floating number between 0 & 1.
    - /color hsl(<H[0-360]>,<S[0-100]>,<L[0-100]>): Using HSL values, H is an integer between 0 & 360 while S & L are integer between 0 & 100.
    - /color hsv(<H[0-360]>,<S[0-100]>,<V[0-100]>): Using HSV values, H is an integer between 0 & 360 while S & V are integer between 0 & 100.
    - /color cmyk(<C[0-100]>,<Y[0-100]>,<M[0-100]>,<K[0-100]>): Using CMYK values, all values are integer within 0 & 100.
  example: 
  - /color cmyk(0,50,85,0): <img src="../../images/pages/complibot/commands/color_result.png">
- compare:
  description: Allows Vanilla & Compliance Packs comparaison side by side.
  use: Anyone can use this command.
  aliases: [ cmp ]
  status: <span class="green-badge">EVERYTHING IS OK</span>
  syntax: 
    - /compare <texture_name> <-res{[16j|32j|64j|16b|32b|64b]}> (-scale[1-10]): <p>If multiple texture have the same name, a choice embed will pop-up. The scale parameter is optional.  <strong>Parameters aliases:</strong><ul><li><code class="language-plaintext">-res</code>, <code class="language-plaintext">-r</code>, <code class="language-plaintext">-resolution</code></li><li><code class="language-plaintext">-scale</code>, <code class="language-plaintext">-s</code></li></ul></p>
  example:
    - /compare bucket -res 16j 32j: "> Compare buckets texture from x16 Java & x32 Java."
    - /compare bucket -res 16j 32j -scale 10: "> The scale will magnify the result depending on the given factor."
  result: <img class="center" width="512" src="../../images/pages/complibot/commands/compare_result.png">
  
---

# CompliBot commands

<div class="table-of-content">
<h2>Table of Contents</h2>

<ul>
  {% for command in page.list %}
    <li><a href='{{ page.url | remove: ".html" }}#{{ command | first }}'>/{{ command | first }}</a></li>
    <ul>
      <li><a href='{{ page.url | remove: ".html" }}#{{ command | first }}-syntax'>Syntax</a></li>
      {% if command.example %}<li><a href='{{ page.url | remove: ".html" }}#{{ command | first }}-example'>Example</a></li>{% endif %}
      {% if command.result %}<li><a href='{{ page.url | remove: ".html" }}#{{ command | first }}-result'>Result</a></li>{% endif %}
    </ul>
  {% endfor %}
</ul>

</div>

{% for command in page.list %}

<h2 id="{{ command | first }}"><code class="language-plaintext">/{{ command | first }}</code>:</h2>

<table>
  <tr>
    <th>Description</th>
    <td>{{ command.description }}</td>
  </tr>
  <tr>
    <th>Use </th>
    <td>{{ command.use }}</td>
  </tr>
  <tr>
    <th>Aliases</th>
    <td>{% if command.aliases %}{% for alias in command.aliases %}<code class="language-plaintext">/{{ alias }}</code>&nbsp;{% endfor %}{% else %}None.{% endif %}</td>
  </tr>
  <tr>
    <th>Status</th>
    <td>{{ command.status }}</td>
  </tr>
</table>

<h3 id="{{ command | first }}-syntax">Syntax</h3>

{% for syntaxes in command.syntax %}
{% for syntax in syntaxes %}

<code class="language-plaintext">{{ syntax[0] }}</code>
> {{ syntax[1] }}

{% endfor %}
{% endfor %}

{% if command.example %}
<h3 id="{{ command | first }}-example">Example</h3>

{% for examples in command.example %}
{% for example in examples %}

<code class="language-plaintext">{{ example[0] }}</code>:  
{{ example[1] }}

{% endfor %}
{% endfor %}

{% endif %}

{% if command.result %}
<h3 id="{{ command | first }}-result">Results</h3>
{{ command.result }}
{% endif %}


---

{% endfor %}