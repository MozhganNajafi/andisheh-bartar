/* eslint-disable */
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    header       = require('gulp-header'),
    sourcemap    = require('gulp-sourcemaps'),
    rename       = require('gulp-rename'),
    paths        = require('../configs/paths.js'),
    headerConfig = require('../configs/header.js');

// Compile Sass Files
gulp.task('foundation', function() {
  return gulp.src(paths.src + '/assets/sass/foundation/foundation.sass')
  .pipe(sourcemap.init())
  .pipe(sass({
    includePaths: [
      paths.bower + '/foundation-sites/scss/'
    ]}).on('error', sass.logError))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(sourcemap.write())
  .pipe(rename('foundation.css'))
  .pipe(gulp.dest(paths.public + '/assets/stylesheets'));
});