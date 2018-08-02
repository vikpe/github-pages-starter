# GitHub Pages starter
> Rapid development for GitHub pages

* **Live reload** - Changes to HTML and CSS (SASS) are instantly reflected in the browser.
* **Fast renders** - High performance Gulp tasks compile SASS and minify assets. Jekyll generates HTML.
* **Asset minification** - CSS and images are losslessly minified.

## Installation
1. Clone/download repo
2. `yarn install`
3. Edit `_config.yml`, set your values.

## Development
Open 3 terminals and run the following commands simultaneously.

* `gulp` - Starts gulp default tasks (compile SASS, minify images) to `/assets`.
* `yarn run jekyll-dev` - Generate site on file changes (output to `/_site`) and copies `/assets` to `/_site/assets`.
* `yarn run browser-sync` - Start Browsersync, hosting contents in `/_site` @ `http://localhost:3000`.

## Production
1. `gulp build` - Clean up `/assets` (removes obsolete files).
2. Push changes to `master`.
