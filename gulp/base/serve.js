/* eslint-disable */
var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    open    = require('gulp-open'),
    url     = require('url'),
    paths   = require('../configs/paths.js');


gulp.task('connect', function() {
  connect.server({
    root: ['./public'],
    port: 8082,
    livereload: true
  });
});

gulp.task('openbrowser', function () {
  return gulp.src(paths.public + '/index.html')
    .pipe(open({
      uri: 'http://localhost:8082/index.html'
    }));
});

gulp.task('reload', function() {
  gulp.src('*')
    .pipe(connect.reload());
});