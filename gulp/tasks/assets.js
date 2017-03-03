/* eslint-disable */
var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    paths       = require('../configs/paths.js');

gulp.task('assets', function( callback ) {

  runSequence(
    'assets.fonts',
    'assets.images',
    callback
  )

});

gulp.task('assets.fonts', function() {
  return gulp.src(paths.src + '/assets/fonts/**')
  .pipe(gulp.dest(paths.public + '/assets/fonts'));
});

gulp.task('assets.images', function() {
  return gulp.src(paths.src + '/assets/images/**')
  .pipe(gulp.dest(paths.public + '/assets/images'));
});
