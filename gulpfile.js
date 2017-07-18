// 載入 package
var gulp = require('gulp'),
    path = require('path');

console.log(process);

// 預設 gulp task
gulp.task("test", function () {
    // gulp.src()
    console.log(process.argv);
});

gulp.task('gulpDefault', function () {
    console.log(process.argv);
});

gulp.task("default", ["test"]);