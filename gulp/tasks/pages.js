/* eslint-disable */
var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    sass         = require('gulp-sass'),
    pug          = require('gulp-pug'),
    uglify       = require('gulp-uglify'),
    header       = require('gulp-header'),
    sourcemap    = require('gulp-sourcemaps'),
    runSequence  = require('run-sequence'),
    paths        = require('../configs/paths.js'),
    headerConfig = require('../configs/header.js');

gulp.task('pages', function( callback ) {
  runSequence(
    'pages.javascripts',
    'pages.stylesheets',
    'pages.templates',
    callback
  )
});

gulp.task('pages.javascripts', function() {
  return gulp.src([ 
    paths.src + '/**/pages/**/*.js',
    paths.src + '/**/pages/**/**/*.js',
    '!' + paths.src + '/**/pages/*.routes.js'
  ])
  .pipe(sourcemap.init())
  // .pipe(uglify())
  .pipe(sourcemap.write())
  .pipe(gulp.dest(paths.public))

});

gulp.task('pages.stylesheets', function() {
  return gulp.src([
    paths.src + '/**/pages/**/*.sass',
    paths.src + '/**/pages/**/**/*.sass'])
  .pipe(sourcemap.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemap.write())
  .pipe(gulp.dest(paths.public));
});

gulp.task('pages.templates', function() {
  return gulp.src([
    paths.src + '/**/pages/**/*.pug',
    paths.src + '/**/pages/**/**/*.pug'])
  .pipe(pug( { pretty: true } ))
  .pipe(gulp.dest(paths.public));
});