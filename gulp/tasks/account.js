/* eslint-disable */
var gulp          = require('gulp'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    sass          = require('gulp-sass'),
    pug           = require('gulp-pug'),
    header        = require('gulp-header'),
    sourcemap     = require('gulp-sourcemaps'),
    runSequence   = require('run-sequence'),
    addStream     = require('add-stream'),
    rename        = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    gif           = require('gulp-if'),
    env           = require('../configs/environment.js'),
    paths         = require('../configs/paths.js'),
    headerConfig  = require('../configs/header.js');

gulp.task('account', function( callback ) {

  runSequence(
    'account.javascripts',
    'account.stylesheets',
    callback
  )

});

gulp.task('account.javascripts', function() {

  function templates() {
    return gulp.src(paths.src + '/account/**/*.pug')
    .pipe(pug())
    .pipe(templateCache({
      module: 'AccountApplication',
      root: 'account'
    }));
  }

  return gulp.src([ 
    paths.src + '/account/account.application.js',
    paths.src + '/account/account.controller.js',
    paths.src + '/account/**/*.routes.js'
  ])
  .pipe(sourcemap.init())
  .pipe(addStream.obj(templates()))
  .pipe(concat('account.js'))
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

gulp.task('account.stylesheets', function() {
  return gulp.src(paths.src + '/stylesheets/sass/account/account.sass')
  .pipe(sourcemap.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(sourcemap.write())
  .pipe(rename('account.css'))
  .pipe(gulp.dest(paths.public + '/assets/stylesheets'));
});