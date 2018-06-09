'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// SCSS
var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

// Compile SCSS
gulp.task('compile_sass', function() {
    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        //.pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
});

// Detect changes in SCSS
gulp.task('watch', function(){
   gulp.watch(SCSS_SRC, ['compile_sass']);
});

// Run tasks
gulp.task('default', ['compile_sass']);
