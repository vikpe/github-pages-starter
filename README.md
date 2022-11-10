## DEPRECATED
This project is no longer maintined, please consider using any of the following projects instead:
* [Astro](https://astro.build)
* [Hugo](https://gohugo.io)
* [Vite](https://vitejs.dev)
* [VitePress](https://vitepress.vuejs.org)
* [Gatsby](https://www.gatsbyjs.com)

---

# GitHub Pages starter
> Fast builds, live reload, GitHub Pages ready

* **GitHub Pages ready** (safe mode enabled)
* **Fast site generation** - Using Jekyll to only generate HTML speeds up generation time
* **Fast SCSS compilations** - High performance gulp task compiles SCSS to CSS
* **Live reload** - Changes to HTML, CSS and images are instantly injected into the browser.
* **Asset pipline** - CSS is minified and images are loselessy compressed

---

## Install
1. Clone/download repo
2. `yarn install`
3. `cd docs && bundle install`
4. Edit `jekyll/_config.yml`, change values for `url` and `custom`.
5. Set your GitHub Pages source to `master branch /docs folder` in your repository settings.

---

## Development
```shell
yarn watch
```

Site is served @ **`http://localhost:3000`**

---

## Production
```shell
yarn build
```
Build site to `/public`

---

## Commands
Command | Stage | Description
---|---|---
`dev` | `dev` | Build site (Jekyll, assets)
`dev:jekyll` | `dev` | Build Jekyll
`dev:assets` | `dev` | Build assets (images, stylesheets)
`watch` | `dev` | Build site on changes and serve @ http://localhost:3000
||
`build` | `prod` | Build site (Jekyll, assets)
`build:jekyll` | `prod` | Build Jekyll
`build:assets` | `prod` | Build assets (images, stylesheets)
||
`clean` | - | Delete `/public` and clear Jekyll caches
`start` | - | Serve `/public` @ http://localhost:3000


## See also
* [Astro](https://astro.build)
* [Hugo](https://gohugo.io)
* [Vite](https://vitejs.dev)
* [VitePress](https://vitepress.vuejs.org)
* [Gatsby](https://www.gatsbyjs.com)
