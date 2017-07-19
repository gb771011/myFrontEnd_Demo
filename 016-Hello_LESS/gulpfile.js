// 載入 package
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('less', function () {
    gulp.src('style.less')
        .pipe(less())
        .pipe(gulp.dest(""));
});

gulp.task("echoo",function () { 
    console.log("echoo active");
});

gulp.task("default", ["less"]);