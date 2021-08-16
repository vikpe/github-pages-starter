// http://www.browsersync.io/docs/options/

module.exports = {
  ui: false,
  files: ["public/assets/**/*"],
  server: "public",
  open: false,
  reloadOnRestart: true,
  notify: false,
  reloadDelay: 0,
  reloadDebounce: 250,
  reloadThrottle: 0,
  plugins: [
    {
      module: "bs-html-injector",
      options: {
        files: "public/**/*.html",
      },
    },
  ],
  minify: false,
};
