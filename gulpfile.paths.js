/**
 * Define paths for gulpfile.
 */

const fileGlobs = {
  images: '**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)',
  sass: '**/*.scss',
  css: '**/*.css',
};

const src = {};
src.baseDir = 'src/';
src.imagesDir = src.baseDir + 'img/';
src.stylesDir = src.baseDir + 'styles/';
src.sassFilesGlob = [
  src.stylesDir + fileGlobs.sass,
  '../node_modules/devheart-sass/' + fileGlobs.sass
];
src.imageFilesGlob = src.imagesDir + fileGlobs.images;

const dist = {};
dist.baseDir = '';
dist.stylesDir = dist.baseDir + 'assets/css/';
dist.imagesDir = dist.baseDir + 'assets/img/';
dist.includesDir = dist.baseDir + '_includes/';
dist.dataDir = dist.baseDir + '_data/';
dist.imageFilesGlob = dist.imagesDir + fileGlobs.images;
dist.cssFilesGlob = dist.stylesDir + fileGlobs.css;

const site = {};
site.baseDir = '_site/';
site.stylesDir = site.baseDir + 'assets/css/';
site.imagesDir = site.baseDir + 'assets/img/';
site.imageFilesGlob = site.imagesDir + fileGlobs.images;
site.cssFilesGlob = site.stylesDir + fileGlobs.css;

// All
const paths = {
  src,
  dist,
  site
};

module.exports = paths;
