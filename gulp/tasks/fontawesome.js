/* eslint-disable */
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    header       = require('gulp-header'),
    sourcemap    = require('gulp-sourcemaps'),
    rename       = require('gulp-rename'),
    runSequence  = require('run-sequence'),
    paths        = require('../configs/paths.js'),
    headerConfig = require('../configs/header.js');


gulp.task('fontawesome', function( callback ) {
  runSequence(
    'fontawesome.sass',
    'fontawesome.fonts',
    callback
  )
})

gulp.task('fontawesome.sass', function() {
  return gulp.src(paths.src + '/assets/sass/fontawesome/fontawesome.sass')
  .pipe(sourcemap.init())
  .pipe(sass({
    includePaths: [
      paths.bower + '/font-awesome/scss/'
    ]}).on('error', sass.logError))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(sourcemap.write())
  .pipe(rename('fontawesome.css'))
  .pipe(gulp.dest(paths.public + '/assets/stylesheets'));
});

gulp.task('fontawesome.fonts', function() {
  return gulp.src(paths.bower + '/font-awesome/fonts/*.*')
  .pipe(gulp.dest(paths.public + '/assets/fonts/fontawesome'))
});