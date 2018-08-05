'use strict';

const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const changed = require('gulp-changed');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const fancyLog = require('fancy-log');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const rev = require('gulp-rev');
const sass = require('gulp-sass');
const tildeImporter = require('node-sass-tilde-importer');

const paths = require('./gulpfile.paths');
let gulpSrcOptions = { read: false };
let gulpCleanOptions = { force: true };

// styles
gulp.task('clean:styles:prod', function() {
  return gulp
    .src(paths.dist.cssFilesGlob, gulpSrcOptions)
    .pipe(clean(gulpCleanOptions));
});

gulp.task('build:styles:dev', function() {
  return gulp
    .src(paths.src.stylesDir + '*.scss')
    .pipe(sass({
      importer: tildeImporter,
      outputStyle: 'compressed'
    }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(paths.site.stylesDir))
    .on('error', fancyLog.error);
});

gulp.task('build:styles:prod', function() {
  let cssPostProcessors = [
    flexbugsFixes,
    autoprefixer({ browsers: ['last 5 versions', '> 5%'] })
  ];

  return gulp
    .src(paths.src.stylesDir + '*.scss')
    .pipe(sass({
      importer: tildeImporter,
      outputStyle: 'compressed'
    }))
    .pipe(postcss(cssPostProcessors))
    .pipe(concat('styles.min.css'))
    .pipe(rev())
    .pipe(gulp.dest(paths.dist.stylesDir))
    .pipe(rev.manifest())
    .pipe(gulp.dest(paths.dist.dataDir))
    .on('error', fancyLog.error);
});

// images
gulp.task('clean:images', function() {
  return gulp
    .src(paths.dist.imageFilesGlob, gulpSrcOptions)
    .pipe(clean(gulpCleanOptions));
});

gulp.task('build:images', function() {
  const dest_dir = paths.dist.imagesDir;

  return gulp
    .src(paths.src.imageFilesGlob)
    .pipe(changed(dest_dir, { hasChanged: changed.compareContents }))
    .pipe(imagemin())
    .pipe(gulp.dest(dest_dir));
});

gulp.task('watch', ['clean:images', 'build:images', 'build:styles:dev'], function() {
  gulp.watch(paths.src.imageFilesGlob, ['build:images']);
  gulp.watch(paths.src.sassFilesGlob, ['build:styles:dev']);
});

// composite and default task
gulp.task('build', [
  'clean:images', 'build:images',
  'clean:styles:prod', 'build:styles:prod'
]);
gulp.task('default', ['watch']);
