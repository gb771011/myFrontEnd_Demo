// 載入 package
var process = require("process"),
    path = require("path"),
    // gulp & gulp plugin
    gulp = require('gulp'),
    gulpUtil = require('gulp-util'),// 接收外部引數
    less = require('gulp-less');// LESS compiler

console.log("cwd path:", gulpUtil.env.utilCwd);

function pathCwd(files) {
    return path.join(gulpUtil.env.utilCwd, (files === undefined) ? "" : files);
}


/* 
// 確認cwd路徑為何
gulp.task("cwdCheck", function () {
    console.log("cwd path:", pathCwd("style.less"));
});
 */

// 手動轉換LESS成CSS
gulp.task('less', function () {
    gulp.src(pathCwd("style.less")) // 指定目標檔案
        // .pipe(string):node原生指令，用以指定動作流程
        .pipe(less())// 1. 用gulp-less將.less轉換成.css
        .pipe(gulp.dest(pathCwd()));// 2.將轉換過的檔案放在同目錄下
    // .dest(string):指定成品位置
});

// 自動轉換LESS成CSS
// gulp.task("lessSync", function () {});

/* 
設定預設任務:透過cmd執行gulp時若後面未加引數，則會自動執行task:default
會以陣列的順序執行前面設定好的任務
*/

gulp.task("default", ["less"]);