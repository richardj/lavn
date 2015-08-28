'use strict';

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var concat        = require('gulp-concat');
var rename        = require('gulp-rename');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');


var sassSrc     = './src/sass';
var cssDest     = './public/css';
var jsDest      = './public/scripts';

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
  gulp.src('./src/views/*.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(sassSrc + '/**/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.html', ['copyhtml']);
});

gulp.task('default', ['watch']);
