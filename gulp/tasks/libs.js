/* eslint-disable */
var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    header       = require('gulp-header'),
    sourcemap    = require('gulp-sourcemaps'),
    runSequence  = require('run-sequence'),
    paths        = require('../configs/paths.js'),
    headerConfig = require('../configs/header.js');

gulp.task('libs', function( callback ) {

  runSequence(
    'libs.javascripts',
    'libs.stylesheets',
    callback
  )

});

gulp.task('libs.javascripts', function() {
  return gulp.src(paths.libraries.jsFiles)
  .pipe(sourcemap.init())
  .pipe(concat('libs.min.js'))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(sourcemap.write())
  .pipe(gulp.dest(paths.public + '/javascripts'));
});

gulp.task('libs.stylesheets', function() {
  return gulp.src(paths.libraries.cssFiles)
  .pipe(sourcemap.init())
  .pipe(concat('libs.css'))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(sourcemap.write())
  .pipe(gulp.dest(paths.public + '/assets/stylesheets'));
});