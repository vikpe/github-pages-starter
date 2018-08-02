<!DOCTYPE html>
<html lang="{{site.custom_settings.language_code}}" dir="ltr">
    <head>
        {% if site.custom_settings.is_published == false or page.url == '/404.html' %}
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
        <title>{% if page.url == '/' %} {{site.custom_settings.name}} - {{site.custom_settings.description}}{% else %}{{page.title}} - {{site.custom_settings.name}}{% endif %}</title>

        {% if site.custom_settings.is_development %}
        <link rel="stylesheet" type="text/css" href="{{'/assets/css/styles.min.css' | prepend: site.url}}">
        {% else %}
        <style type="text/css">{% include styles.min.css %}</style>
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

        {% include google_analytics.md %}

    </body>
</html>

{% include jekyll_info.md %}
