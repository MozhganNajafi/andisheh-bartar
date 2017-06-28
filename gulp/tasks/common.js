/* eslint-disable */
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  header = require('gulp-header'),
  sourcemap = require('gulp-sourcemaps'),
  runSequence = require('run-sequence'),
  addStream = require('add-stream'),
  rename = require('gulp-rename'),
  templateCache = require('gulp-angular-templatecache'),
  gif = require('gulp-if'),
  env = require('../configs/environment.js'),
  paths = require('../configs/paths.js'),
  headerConfig = require('../configs/header.js');


gulp.task('common', function (callback) {

  runSequence(
    'common.javascripts',
    callback
  )

});

gulp.task('common.javascripts', function () {

  function templates() {
    return gulp.src(paths.src + '/common/directives/**/*.pug')
      .pipe(pug())
      .pipe(templateCache({
        module: 'CommonApplication',
        root: 'common'
      }));
  }

  return gulp.src([
      paths.src + '/common/common.application.js',
      // paths.src + '/common/common.controller.js',
      paths.src + '/common/configs/**/*.js',
      paths.src + '/common/services/**/*.js',
      paths.src + '/common/filters/**/*.js',
      paths.src + '/common/**/*.routes.js',
      paths.src + '/common/directives/*.js'
    ])
    .pipe(sourcemap.init())
    .pipe(addStream.obj(templates()))
    .pipe(concat('common.js'))
    .pipe(gif(
      env.production,
      uglify({
        preserveComments: 'some',
        noSource: true,
        ext: {
          min: '.js'
        },
        mangle: true,
        ignoreFiles: ['.min.js', '-min.js']
      })))
    .pipe(header(headerConfig.banner, {
      pkg: headerConfig.pkg
    }))
    .pipe(sourcemap.write())
    .pipe(gulp.dest(paths.public + '/javascripts'));

});