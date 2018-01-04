<header id="dh-site-header">
    <div class="container">
        <nav id="dh-topnav">

            <a href="{{ '/' | prepend: site.url}}" class="dh-topnav-link dh-topnav-logo-link">
                <img src="{{'/assets/img/github.svg' | prepend: site.url}}" /> {{site.custom_settings.name}}
            </a>

            <a href="#" class="dh-topnav-link px-0" id="dh-topnav-toggler">
                <label for="dh-topnav-toggle-checkbox"></label>
            </a>

            <input type="checkbox" id="dh-topnav-toggle-checkbox">

            <div id="dh-topnav-collapse">
                {% assign pages = site.pages | where_exp:"p",
                "p.custom_menu_order > 0" | sort:"custom_menu_order" %}
                {% for p in pages } %}
                <a href="{{p.url | prepend: site.url}}" class="dh-topnav-link {% if p.url== page.url %}dh-active{% endif %}">
                    {{p.title}}
                </a>
                {% endfor %}
            </div>

        </nav>

    </div>
</header>
