const path = require("path"),
    gulp = require('gulp'),
    // 接收外部引數
    gutil = require('gulp-util'),
    // LESS compiler
    less = require('gulp-less'),
    // browser-sync
    bs = require("browser-sync").create();
let root = process.cwd();
let file = {
    "less": "style.less"
};

// 確認變數
gulp.task("cwd", () => {
    console.log(path.join(root, file.less));
});

// 轉換less為css
gulp.task("less", () => {
    gulp.src(path.join(root, file.less))
        .pipe(less())
        .pipe(gulp.dest(root));
});

// 檔案監測
gulp.task("watch", function () {
    console.log('gulp-watch');
    // 當less有更動時自動轉存為css
    gulp.watch("./*.less", ["less"]);
    // 自動重刷頁面
    bs.init({
        'files':['./**'],
        'server':{
            'baseDir':'./'
        },
        'port':8080
    });
});


// 預設
gulp.task("default", ["watch"]);