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

const docs = {};
docs.baseDir = "docs/";
docs.dataDir = docs.baseDir + "_data/";
docs.stylesDir = docs.baseDir + "assets/css/";
docs.imagesDir = docs.baseDir + "assets/img/";

const pub = {};
pub.baseDir = "public/";
pub.stylesDir = pub.baseDir + "assets/css/";
pub.imagesDir = pub.baseDir + "assets/img/";

// All
const paths = {
  src,
  public: pub,
  docs
};

module.exports = paths;
