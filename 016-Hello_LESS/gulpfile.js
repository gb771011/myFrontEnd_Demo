// 載入 package
var gulp = require('gulp'),
    less = require('gulp-less');// gulp plugin:LESS compiler

    // 設定任務:LESS >> CSS
gulp.task('less-compiler', function () {
    gulp.src('style.less') // 目標檔案
        // .pipe(string):指定動作流程
        .pipe(less())// 1. 用gulp-less將.less轉換成.css
        .pipe(gulp.dest(""));// 2.將轉換過的檔案放在同目錄下
        // .dest(string):指定成品位置
});
/* 
設定預設任務:透過cmd執行gulp時若後面未加引數，則會自動執行task:default
會以陣列的順序執行前面設定好的任務
*/

gulp.task("default", ["less-compiler"]);