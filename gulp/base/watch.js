/* eslint-disable */
var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    paths       = require('../configs/paths.js');

// Watch files for changes
gulp.task('watch', function() {
  
  // This line makes gulp watch all files of libraries and sources
  // and once anything change inside them it will start to run Build task
  gulp.watch([
    paths.src + '/**/*.js',
    paths.src + '/**/*.pug',
    '!' + paths.src + '/modules/**/node_modules/**'
  ], function () {
    runSequence(
      'javascripts',
      'reload'
    );
  });

  gulp.watch(paths.src + '/index.pug', function () {
    runSequence(
      'index',
      'reload'
    );
  });

  gulp.watch([
    paths.src + '/**/*.sass',
    '!' + paths.src + '/modules/**/node_modules/**'
  ], function () {
    runSequence(
      'stylesheets',
      'reload'
    );
  });

});