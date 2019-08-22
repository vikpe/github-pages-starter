<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        {% if page.url == '/404.html' %}
        <meta name="robots" content="noindex, nofollow">
        {% endif %}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        {% if page.url == '/' %}
        <meta name="description" content="{{ site.custom_settings.description }}">
        {% endif %}
        <link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.url }}">
        <link rel="shortcut icon" type="image/x-icon" href="{{site.url}}/favicon.ico">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
        <title>{% if page.url == '/' %}{{site.custom_settings.name}} - {{site.custom_settings.description}}{% else %}{{page.title}} - {{site.custom_settings.name}}{% endif %}</title>

        {% if site.custom_settings.is_development %}
        <link rel="stylesheet" type="text/css" href="{{site.url | append: '/assets/css/styles.css'}}">
        {% else %}
        <link rel="stylesheet" type="text/css" href="{{site.url | append: '/assets/css/' | append: site.data.rev-manifest['styles.min.css']}}">
        {% endif %}

    </head>
    <body id="top">

        <div class="app-center-wrapper">

            {% include header.md %}

            <main id="app-site-main">
                <article>
                    {{ content }}
                </article>
            </main>

            {% include footer.md %}

        </div>

    </body>
</html>

<!-- Generated with Jeykll {{site.github.versions.jekyll}} at {{ 'now' | date: '%F %T' }} -->
