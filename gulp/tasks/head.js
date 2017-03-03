/* eslint-disable */
var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    header       = require('gulp-header'),
    paths        = require('../configs/paths.js'),
    headerConfig = require('../configs/header.js');

gulp.task('head.javascripts', function() {
  return gulp.src(paths.libraries.headJsFiles)
  .pipe(concat('head.min.js'))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(gulp.dest(paths.public + '/javascripts'));
});