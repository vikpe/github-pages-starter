<header id="app-site-header">
    <nav>

        <a href="{{ '/' | prepend: site.url}}">
            <img src="{{'/assets/img/github.svg' | prepend: site.url}}" alt="" width="24" height="24" />
            {{site.custom_settings.name}}
        </a>

        {% assign pages = site.pages | where_exp:"p",
        "p.custom_menu_order > 0" | sort:"custom_menu_order" %}
        {% for p in pages } %}
        |
        <a href="{{p.url | prepend: site.url}}" class="dh-topnav-item {% if p.url== page.url %}dh-active{% endif %}">
            {{p.title}}
        </a>
        {% endfor %}

    </nav>
</header>
