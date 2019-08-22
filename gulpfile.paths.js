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
jekyll.baseDir = "jekyll/";
jekyll.dataDir = jekyll.baseDir + "_data/";
jekyll.stylesDir = jekyll.baseDir + "assets/css/";
jekyll.imagesDir = jekyll.baseDir + "assets/img/";

const pub = {};
pub.baseDir = "public/";
pub.stylesDir = pub.baseDir + "assets/css/";
pub.imagesDir = pub.baseDir + "assets/img/";

// All
const paths = {
  src,
  public: pub,
  jekyll
};

module.exports = paths;
