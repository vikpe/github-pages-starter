"use strict";

const autoprefixer = require("autoprefixer");
const changed = require("gulp-changed");
const clean = require("gulp-clean");
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
let gulpSrcOptions = { read: false };
let gulpCleanOptions = { force: true };

function catchError(e) {
  fancyLog.error(e);
  this.emit("end");
}

// styles
gulp.task("clean:styles:prod", function() {
  return gulp.src(paths.dist.cssFilesGlob, gulpSrcOptions).
    pipe(clean(gulpCleanOptions));
});

gulp.task("build:styles:dev", function() {
  return gulp.src(paths.src.stylesDir + "*.scss").
    pipe(
      sass({
        importer: tildeImporter,
        outputStyle: "compressed"
      }).on("error", catchError)
    ).
    pipe(concat("styles.min.css")).
    pipe(gulp.dest(paths.site.stylesDir)).
    on("error", catchError);
});

gulp.task("build:styles:prod", function() {
  let cssPostProcessors = [
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
    pipe(gulp.dest(paths.dist.stylesDir)).
    pipe(rev.manifest()).
    pipe(gulp.dest(paths.dist.dataDir)).
    on("error", fancyLog.error);
});

gulp.task(
  "rebuild:styles:prod",
  gulp.series("clean:styles:prod", "build:styles:prod")
);

// images
gulp.task("clean:images", function() {
  return gulp.src(paths.dist.imageFilesGlob, gulpSrcOptions).
    pipe(clean(gulpCleanOptions));
});

gulp.task("build:images", function() {
  const dest_dir = paths.dist.imagesDir;

  return gulp.src(paths.src.imageFilesGlob).
    pipe(imagemin()).
    pipe(changed(dest_dir, { hasChanged: changed.compareContents })).
    pipe(gulp.dest(dest_dir));
});

gulp.task("rebuild:images", gulp.series("clean:images", "build:images"));

gulp.task("watch", function() {
  gulp.watch(paths.src.imageFilesGlob, gulp.series("build:images"));
  gulp.watch(paths.src.sassFilesGlob, gulp.series("build:styles:dev"));
});

// composite and default task
gulp.task("build", gulp.parallel("rebuild:images", "rebuild:styles:prod"));
gulp.task("dev", gulp.series("rebuild:images", "build:styles:dev", "watch"));
gulp.task("default", gulp.series("dev"));
