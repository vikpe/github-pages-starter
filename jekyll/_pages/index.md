---
layout: default
title: GitHub Pages Starter
permalink: /
---


<h1>{{site.custom_settings.name}}</h1>
<p>{{site.custom_settings.description}}</p>

<hr>

{% for feature in site.data.features %}

<div>
    <h2>{{feature.title}}</h2>
    {{feature.description}}
</div>

{% endfor %}

