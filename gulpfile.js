const path = require("path"),
    gulp = require('gulp'),
    gutil = require('gulp-util'),// 接收外部引數
    less = require('gulp-less');// LESS compiler

let root = gutil.env.newcwd;
let file = path.parse(gutil.env.file);

// 確認變數
gulp.task("cwd", () => {
    console.log(path.join(root, file.base));
});

// 轉換less為css
gulp.task("less", () => {
    gulp.src(path.join(root, file.base))
        .pipe(less())
        .pipe(gulp.dest(root));
});

// 預設
gulp.task("default", ["less"]);