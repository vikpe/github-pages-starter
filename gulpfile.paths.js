/**
 * Define paths for gulpfile.
 */

const fileGlobs = {
  images: "**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)",
  sass: "**/*.scss",
  css: "**/*.css"
};

const src = {};
src.baseDir = "src/";
src.imagesDir = src.baseDir + "img/";
src.stylesDir = src.baseDir + "styles/";
src.sassFilesGlob = [
  src.stylesDir + fileGlobs.sass
];
src.imageFilesGlob = src.imagesDir + fileGlobs.images;

const jekyll = {};
jekyll.baseDir = "/";
jekyll.dataDir = jekyll.baseDir + "_data/";

const site = {};
site.baseDir = "_site/";
site.stylesDir = site.baseDir + "assets/css/";
site.imagesDir = site.baseDir + "assets/img/";

// All
const paths = {
  src,
  site,
  jekyll
};

module.exports = paths;
