/* eslint-disable */
var gulp           = require ('gulp'),
    install        = require('gulp-install'),
    mainBowerFiles = require('gulp-main-bower-files');

gulp.task('bower.install', function(){
  return gulp.src('./bower.json')
  .pipe(install())
  .pipe(gulp.dest('./public/bower_components'));
});

gulp.task('bower.mainfiles',['bower.install'], function() {
  return gulp.src('./bower.json')
  .pipe(mainBowerFiles())
  .pipe(gulp.dest('./public/bower_components'));
});

