/* eslint-disable */
var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    requireDir  = require('require-dir');

requireDir('./gulp', {
  recurse: true
});

gulp.task('javascripts', function( callback ) {
  runSequence(
    'libs.javascripts',
    'head.javascripts',
    'account.javascripts',
    'common.javascripts',
    'dashboard.javascripts',
    'pages.javascripts',
    'tinymce.themes',
    'tinymce.plugins',
    callback
  );
});

gulp.task('stylesheets', function( callback ) {
  runSequence(
    'libs.stylesheets',
    'account.stylesheets',
    'dashboard.stylesheets',
    'fontawesome',
    'icons',
    'foundation',
    'pages.stylesheets',
    'tinymce.skins',
    callback
  );
});

// Build task
gulp.task('build', function( callback ) {
  runSequence(
    'clean',
    'bower.mainfiles',
    'assets',
    'index',
    'javascripts',
    'stylesheets',
    'reload',
    callback
  );
});

// default task to run
gulp.task('default', function( callback ) {
  runSequence(
    'build',
    'watch',
    'connect',
    'openbrowser',
    callback
  );
});