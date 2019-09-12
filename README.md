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
3. `cd docs && bundle install`
4. Edit `_config.yml`, change values for `url` and `custom_settings`.
5. Set your GitHub Pages source to `master branch /docs folder` in your repository settings.

## Usage
**Development** (local)

Open 3 terminals and run the following commands (run in parallel).

1. `yarn run jekyll-dev` - Generates site on changes to `/public`.
2. `yarn run watch-assets` - Compiles SASS and images on changes to `/public/assets`.
3. `yarn run browser-sync` - Starts web server hosting content from `/public` at `http://localhost:3000` and injects changes.

Your site is now available at **`http://localhost:3000`**

**Production**

1. `yarn run build-assets` - Cleans, builds and minifies assets to `/docs/assets`.
2. Push changes to GitHub


## See also
* [Gatsby](https://github.com/gatsbyjs/gatsby) - Build blazing fast, modern apps and websites with React
* [Next.js](https://github.com/zeit/next.js) - React based framework with server side rendering (SSR)
