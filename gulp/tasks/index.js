/* eslint-disable */
var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    pug           = require('gulp-pug'),
    runSequence   = require('run-sequence'),
    paths         = require('../configs/paths.js');

gulp.task('index', function( callback ) {

  runSequence(
    'index.template',
    callback
  )

});

gulp.task('index.template', function() {
  return gulp.src(paths.src + '/index.pug')
  .pipe(pug())
  .pipe(gulp.dest(paths.public));
});