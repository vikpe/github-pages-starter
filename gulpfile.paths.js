/**
 * Define paths for gulpfile.
 */

const fileGlobs = {
  images: '**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)',
  sass: '**/*.scss'
};

const frameworkSrc = '../src/';

const src = {};
src.baseDir = 'src/';
src.imagesDir = src.baseDir + 'img/';
src.stylesDir = src.baseDir + 'styles/';
src.sassFilesGlob = [
  src.stylesDir + fileGlobs.sass,
  frameworkSrc + fileGlobs.sass
];
src.imageFilesGlob = src.imagesDir + fileGlobs.images;

const dist = {};
dist.baseDir = '';
dist.stylesDir = dist.baseDir + 'assets/css/';
dist.imagesDir = dist.baseDir + 'assets/img/';
dist.includesDir = dist.baseDir + '_includes/';
dist.imageFilesGlob = dist.imagesDir + fileGlobs.images;

// All
const paths = {
  src,
  dist
};

module.exports = paths;
