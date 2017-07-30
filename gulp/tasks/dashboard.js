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

gulp.task('dashboard', function( callback ) {

  runSequence(
    'dashboard.javascripts',
    'dashboard.stylesheets',
    callback
  )

});

gulp.task('dashboard.javascripts', function() {

  function templates() {
    return gulp.src(paths.src + '/dashboard/**/*.pug')
    .pipe(pug())
    .pipe(templateCache({
      module: 'DashboardApplication',
      root: 'dashboard'
    }));
  }

  return gulp.src([
    paths.src + '/dashboard/dashboard.application.js',
    paths.src + '/dashboard/dashboard.controller.js',
    paths.src + '/dashboard/dashboard.routes.js',
    paths.src + '/dashboard/configs/**/*.js',
    // paths.src + '/dashboard/models/**/*.js',
    paths.src + '/dashboard/services/**/*.js',
    paths.src + '/dashboard/components/**/**/*.js',
    paths.src + '/dashboard/directives/**/*.js'
  ])
  .pipe(sourcemap.init())
  .pipe(addStream.obj(templates()))
  .pipe(concat('dashboard.js'))
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

gulp.task('dashboard.stylesheets', function() {
  return gulp.src(paths.src + '/dashboard/dashboard.sass')
  .pipe(sourcemap.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(header(headerConfig.banner, {
    pkg: headerConfig.pkg
  }))
  .pipe(sourcemap.write())
  .pipe(rename('dashboard.css'))
  .pipe(gulp.dest(paths.public + '/assets/stylesheets'));
});