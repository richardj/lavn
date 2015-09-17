'use strict';

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var concat        = require('gulp-concat');
var rename        = require('gulp-rename');
var merge         = require('merge-stream');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var wiredep       = require('wiredep');
var plugins       = require('gulp-load-plugins')();

var sassSrc     = './src/sass';
var cssDest     = './public/css';
var jsDest      = './public/scripts';


/*
gulp.task('vendor-scripts', ['install'], function() {
  return gulp.src(wiredep().js)
    .pipe(gulp.dest('build/vendor'));
});


gulp.task('vendor-css', ['install'], function() {
  return gulp.src(wiredep().css)
    .pipe(gulp.dest('build/vendor'));
});
*/






gulp.task('sass', function() {
  gulp.src('./src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({
    //indentedSyntax: true,
    includePaths: './src/sass/*',
    sourceComments: 'normal'
    // outputStyle: 'compressed'
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('copyhtml', function() {
  gulp.src('./src/views/**/*.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('copyscripts', function() {
  var angular = gulp.src('./bower_components/angular/angular.min.js')
    .pipe(gulp.dest('./public/scripts'));

  var timer = gulp.src('./bower_components/angular-timer/dist/angular-timer.min.js')
    .pipe(gulp.dest('./public/scripts'));

  var jquery = gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./public/scripts'));

  var vex = gulp.src('./bower_components/vex/js/vex.combined.min.js')
    .pipe(gulp.dest('./public/scripts'));

  var moment = gulp.src('./bower_components/moment/min/moment.min.js')
    .pipe(gulp.dest('./public/scripts'));

  var countdown = gulp.src('./bower_components/countdownjs/countdown.min.js')
    .pipe(gulp.dest('./public/scripts'));

  var layout = gulp.src('./src/scripts/layout.js')
    .pipe(gulp.dest('./public/scripts'));

  var project = gulp.src('./src/scripts/project.js')
    .pipe(gulp.dest('./public/scripts'));

  return merge(angular, jquery, vex, moment, countdown, layout, project);
});


/*
 * Compress and uglify scripts
 */
/*
*/

gulp.task('watch', function() {
  gulp.watch(sassSrc + '/**/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.html', ['copyhtml']);
  gulp.watch('./src/scripts/**/*.js', ['copyscripts']);
});

gulp.task('default', ['watch']);
