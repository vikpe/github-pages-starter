"use strict";

const autoprefixer = require("autoprefixer");
const changed = require("gulp-changed");
const concat = require("gulp-concat");
const fancyLog = require("fancy-log");
const flexbugsFixes = require("postcss-flexbugs-fixes");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const postcss = require("gulp-postcss");
const rev = require("gulp-rev");
const sass = require("gulp-sass");
const tildeImporter = require("node-sass-tilde-importer");

const paths = require("./gulpfile.paths");

function catchError(e) {
  fancyLog.error(e);
  this.emit("end");
}

// styles
gulp.task("build:styles:dev", function() {
  return gulp.src(paths.src.stylesDir + "*.scss").
    pipe(
      sass({
        importer: tildeImporter,
        outputStyle: "expanded"
      }).on("error", catchError)
    ).
    pipe(concat("styles.css")).
    pipe(gulp.dest(paths.public.stylesDir)).
    on("error", catchError);
});

gulp.task("build:styles:prod", function() {
  const cssPostProcessors = [
    flexbugsFixes,
    autoprefixer()
  ];

  return gulp.src(paths.src.stylesDir + "*.scss").
    pipe(
      sass({
        importer: tildeImporter,
        outputStyle: "compressed"
      }).on("error", catchError)
    ).
    pipe(postcss(cssPostProcessors)).
    pipe(concat("styles.min.css")).
    pipe(rev()).
    pipe(gulp.dest(paths.docs.stylesDir)).
    pipe(rev.manifest()).
    pipe(gulp.dest(paths.docs.dataDir)).
    on("error", fancyLog.error);
});

const buildImages = destDir => {
  return gulp.src(paths.src.imageFilesGlob).
    pipe(imagemin()).
    pipe(changed(destDir, { hasChanged: changed.compareContents })).
    pipe(gulp.dest(destDir));
};

gulp.task("build:images:dev", function() {
  return buildImages(paths.public.imagesDir);
});

gulp.task("build:images:prod", function() {
  return buildImages(paths.docs.imagesDir);
});

gulp.task("watch:assets", function() {
  gulp.watch(paths.src.imageFilesGlob, gulp.series("build:images:dev"));
  gulp.watch(paths.src.sassFilesGlob, gulp.series("build:styles:dev"));
});

// composite and default task
gulp.task("build",
  gulp.series("build:images:prod", "build:styles:prod"));
gulp.task("dev",
  gulp.series("build:images:dev", "build:styles:dev", "watch:assets"));
gulp.task("default", gulp.series("dev"));
