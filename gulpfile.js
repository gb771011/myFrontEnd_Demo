const path = require('path'),
    gulp = require('gulp'),
    // 接收外部引數
    gutil = require('gulp-util'),
    // LESS compiler
    less = require('gulp-less'),
    // browser-sync
    bs = require('browser-sync').create();
let root = process.cwd();
let file = {
    'less': 'style.less'
};

// 確認變數
gulp.task('cwd', () => {
    console.log(path.join(root, file.less));
});

// 轉換less為css
gulp.task('less', () => {
    gulp.src(path.join(root, file.less))
        .pipe(less())
        .pipe(gulp.dest(root));
});

// 檔案監測
gulp.task('browerSync', () => {
    // console.log('gulp-watch');
    // 自動重刷頁面
    bs.init({
        // 'files': ['./*.css','./*.html'],
        'server': true,
        'port': 8080,
        'reloadDelay':1000,
    });
    // *.less更動時自動轉換並刷新頁面
    gulp.watch('./*.less', ['less']);

    // *.html /*.css / *.js 異動時: 自動刷新
    gulp.watch(['*.html','*.css','*.js'],() => {
        bs.reload();
    });
});

// 預設
gulp.task('default', ['browerSync']);