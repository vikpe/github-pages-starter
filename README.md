# GitHub Pages starter
> Fast builds, live reload, GitHub Pages ready

* **GitHub Pages ready** (safe mode enabled)
* **Fast site generation** - Using Jekyll to only generate HTML speeds up generation time
* **Fast SCSS compilations** - High performance gulp task compiles SCSS to CSS
* **Live reload** - Changes to HTML, CSS and images are instantly injected into the browser.
* **Asset pipline** - CSS is minified and images are loselessy compressed

## Install
1. Clone/download repo
2. `yarn install`
3. Edit `_config.yml`, change values for `url` and `custom_settings`.

## Usage
**Development**

Open 3 terminals and run the following commands (run in parallel).

1. `yarn run jekyll-dev` - Generates site on changes to `/_site`.
2. `gulp watch` - Compiles SASS and images on changes to `/_site/assets`.
3. `yarn run browser-sync` - Hosts content from `/_site` at `http://localhost:3000` and injects asset changes.

**Production**

`gulp build` - Cleans, builds and minifies assets to `/assets`.
