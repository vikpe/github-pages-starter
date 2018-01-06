# GitHub Pages starter
> Rapid development for GitHub pages

* **Live reload** - Changes to HTML and CSS (SASS) are instantly reflected in the browser.
* **Fast renders** - High performance Gulp tasks compile SASS and minify assets. Jekyll generates HTML.
* **Asset minification** - CSS and images are losslessly minified.

## Installation
1. Clone/download repo
2. `yarn` / `npm install`
3. Edit `_config.yml`, set your values.

## Development
* `gulp` - Starts gulp default tasks (compile SASS, minify images) to `/assets`.
* `npm run jekyll-dev` - Generate site on file changes (output to `/_site`) and copies `/assets` to `/_site/assets`.
* `npm run browser-sync` - Start Browsersync, hosting contents in `/_site` @ `http://localhost:3000`.

## Production
* Run `gulp build` to clean up images/assets.
