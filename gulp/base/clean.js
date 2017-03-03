/* eslint-disable */
var gulp  = require('gulp'),
    del   = require('del'),
    glob  = require('glob'),
    paths = require('../configs/paths.js');

gulp.task('clean', function() {
  glob(paths.public + '/**/*', {
    'ignore': [ paths.public + '/bower_components/**' ]
  }, function (err, files) {
    return del.sync(files);
  });
});

gulp.task('clean.javascripts', function () {
  glob(paths.public + '/**/*.js', {
    'ignore': [ paths.public + '/bower_components/**' ]
  }, function (err, files) {
    return del.sync(files);
  });
});

gulp.task('clean.stylesheets', function () {
  glob(paths.public + '/**/*.css', {
    'ignore': [paths.public + '/bower_components/**']
  }, function (err, files) {
    return del.sync(files);
  });
});

gulp.task('clean.templates', function () {
  return del.sync([
    paths.public + '/components/**/*.html',
    paths.public + '/modules/**/*.html'
  ]);
});