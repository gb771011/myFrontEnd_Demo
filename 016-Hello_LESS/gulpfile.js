// 載入 package
var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src('style.less')
        .pipe(less())
        .pipe(gulp.dest(""));
});

gulp.task("default", ["testLess"]);