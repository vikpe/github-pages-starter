---
layout: default
title: GitHub Pages Starter
permalink: /
---


<h1>{{site.custom_settings.name}}</h1>
<p class="lead mb-2">{{site.custom_settings.description}}</p>

<hr>

{% for feature in site.data.features %}

<div class="mb-2">
    <h2>{{feature.title}}</h2>
    {{feature.description}}
</div>

{% endfor %}

