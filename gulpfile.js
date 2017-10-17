'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    ghPages = require('gulp-gh-pages'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber');

var config = require('./gulp_config.json');
var b4_config = require('/usr/local/bin/postcss');

function errorAlert(error) {
  gutil.log(error.messageFormatted ? error.messageFormatted : error.message);
  this.emit('end');
}

gulp.task('default', ['build']);


// generate complete bootstrap theme in `dist` directory
gulp.task('build', ['scripts', 'styles', 'ovv-bootstrap']);
gulp.task('styles', function() {
  return gulp.src(config.complete_theme)
    .pipe(plumber({ errorHandler: errorAlert }))
    .pipe(postcss([
      require('autoprefixer')(config.autoprefixer)
    ]))
    .pipe(sass({
      precision: 6,
      sourceComments: false,
      sourceMap: true,
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(nano())
    .pipe(rename(function(path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest(config.dist  + 'css'));
});

// copy bootstrap js to `dist` directory
gulp.task('scripts', function() {
  return gulp.src(config.scripts)
    .pipe(gulp.dest(config.dist + 'js'));
});

// copy variables file to `dist` directory
gulp.task('ovv-bootstrap', function() {
  return gulp.src(config.variables)
    .pipe(concat('ovv-bootstrap-variables.scss'))
    .pipe(gulp.dest(config.dist + 'scss'));
});

// deploy `gh-pages`
gulp.task('deploy', ['build'], function() {
  return gulp.src(config.dist + '/**/*')
    .pipe(ghPages());
});

// serve the `gh-pages` directory and watch all files (for dev)
gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: config.dist,
    open: false
  });

  gulp.watch('assets/**/*.scss', ['styles-watch']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});

gulp.task('styles-watch', ['styles'], function(done) {
  browserSync.reload();
  done();
});
