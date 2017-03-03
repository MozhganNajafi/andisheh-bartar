/* eslint-disable */
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    header       = require('gulp-header'),
    sourcemap    = require('gulp-sourcemaps'),
    rename       = require('gulp-rename'),
    runSequence  = require('run-sequence'),
    paths        = require('../configs/paths.js'),
    headerConfig = require('../configs/header.js');


gulp.task('icons', function( callback ) {
  runSequence(
    'icons.sass',
    'icons.fonts',
    callback
  )
})

gulp.task('icons.sass', function() {
  return gulp.src(paths.src + '/assets/sass/icons/icons.sass')
  .pipe(sourcemap.init())
  .pipe(sass({}).on('error', sass.logError))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(sourcemap.write())
  .pipe(rename('icons.css'))
  .pipe(gulp.dest(paths.public + '/assets/stylesheets'));
});

gulp.task('icons.fonts', function() {
  return gulp.src(paths.src + '/assets/fonts/icons/fonts/*.*')
  .pipe(gulp.dest(paths.public + '/assets/fonts/icons'))
});