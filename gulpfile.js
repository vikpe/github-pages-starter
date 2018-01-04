'use strict';

const gulp = require('gulp');
const paths = require('./gulpfile.paths');

const autoprefixer = require('autoprefixer');
const changed = require('gulp-changed');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const tildeImporter = require('node-sass-tilde-importer');

let gulpSrcOptions = { read: false };
let gulpCleanOptions = { force: true };

gulp.task('build:styles', function() {
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
    .pipe(gulp.dest(paths.dist.stylesDir))
    .pipe(gulp.dest(paths.dist.includesDir))
    .on('error', gutil.log);
});

// images
gulp.task('build:images', function() {
  const DEST = paths.dist.imagesDir;

  return gulp
    .src(paths.src.imageFilesGlob)
    .pipe(changed(DEST, { hasChanged: changed.compareContents }))
    .pipe(imagemin())
    .pipe(gulp.dest(DEST));
});

gulp.task('clean:images', function() {
  return gulp
    .src(paths.dist.imageFilesGlob, gulpSrcOptions)
    .pipe(clean(gulpCleanOptions));
});

gulp.task('watch', ['build'], function() {
  gulp.watch(paths.src.sassFilesGlob, ['build:styles']);
  gulp.watch(paths.src.imageFilesGlob, ['build:images']);
});

gulp.task('dev', ['watch']);
gulp.task('build', ['build:styles', 'clean:images', 'build:images']);
gulp.task('default', ['dev']);
