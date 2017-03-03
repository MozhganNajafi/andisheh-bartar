/* eslint-disable */
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    header       = require('gulp-header'),
    sourcemap    = require('gulp-sourcemaps'),
    rename       = require('gulp-rename'),
    runSequence  = require('run-sequence'),
    paths        = require('../configs/paths.js'),
    headerConfig = require('../configs/header.js');


gulp.task('tinymce', function( callback ) {
  runSequence(
    'tinymce.themes',
    'tinymce.skins',
    callback
  )
})

gulp.task('tinymce.skins', function() {
  return gulp.src(paths.bower + '/tinymce/skins/lightgray/**/*.*')
  .pipe(gulp.dest(paths.public + '/assets/tinymce/skins/lightgray'))
});

gulp.task('tinymce.themes', function() {
  return gulp.src(paths.bower + '/tinymce/themes/modern/*.*')
  .pipe(gulp.dest(paths.public + '/assets/tinymce/themes/modern'))
});