# Gulp 
# Reference
* [Gulp API](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
* [Tutorial:OXXOstudio](http://www.oxxostudio.tw/articles/201503/gulp-install-webserver.html)
* [Other Tutorial1](http://www.ydcss.com/archives/34)
* [What is Glob?](https://amobiz.github.io/2015/11/14/gulp-glob/)
* [What is Glob?2](http://www.jianshu.com/p/fbf9871dc47a)

# Module
* Less轉css: [gulp-less](https://www.npmjs.com/package/gulp-less)
* 檔案監測: [browser-sync](https://www.browsersync.io/docs)

# 如何在vscode裡跨資料夾執行gulp(17/9/21更新)
**vscode**的**task**的預設工作目錄為/.vscode的所在資料夾(workplace)

假設資料夾與檔案的結構如下:

```
+--/my_workspace
| `--/.vscode 
| `--/demo01 
|   +--style.less (要轉換的檔案)
|   `--index.html
|--gulpfile.js
```

如上，要處裡的檔案都在`my_workspace/demo01`裡面，但`gulpfile.js`卻是在`/my_workspace`下

若不修改`gulpfile.js`的路徑而直接執行gulp，gulp會因為找不到要處理的檔案而報錯

## 改善方法1. 使用gulp原生參數`--env`切換當前工作目錄(17/9/21更新)

透過CLI執行gulp時可藉由設定引數(argument/flag)來改變原始設定，[Github:Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md)

其中`--cwd`引數可改變gulp執行時的工作資料夾，搭配vscode task的`${fileDirname}`變數，就可以在執行Gulp時根據當前檔案的位置修改CWD了

### 設定步驟
1. 在vscode的`task.json`裡新建gulp的任務
1. 在gulp任務裡`args`裡加入`'--cwd','${fileDirname}`兩個引數
```
{
    "taskName": "gulp-locale",
    "command": "gulp",
    "args": [
        "--cwd","${fileDirname}"
    ]
}
```
1. 若專案有特殊需求，可在當前資料夾下準備好`gulpfile.js`

### 結果
1. 透過vscode執行gulp時，透過--cwd引數，gulp會將CWD從 **工作目錄** 轉變為 **當前檔案的資料夾**(`${fileDirname}`)
1. 執行當前資料夾下的`gulpfile.js`
1. 若當前資料夾沒有`gulpfile.js`，gulp會自動繼續往上找`gulpfile.js`並執行



## 方法2. 使用gulp-util模組

### 設定步驟

1. 在工作區的gulpfile.js裡引入`gulp-util`模組(透過npm安裝gulp時會一併安裝，不用另外安裝)  

        var gutil = require("gulp-util");

1. 在gulpfile.js裡設定引數名稱

    // sytnex:gutil.env.[引數名稱]
    let root=gutil.env.ucwd
    let file=gutil.env.ufile

    注意盡可能不要與gulp的原生引數同名，避免造成錯誤

1. 開啟task.json，在該任務的"args"裡加上對應的 **--引數名稱** 與 **回傳值**

        {
            "taskName": "gulp-use_gulp_util",
            "command": "gulp",
            "args": [
                // --ucwd=>當前檔案目錄=>"${fileDirname}"
                // --ufile=>當前檔案名稱=>"${fileBasename}"
                "--ucwd","${fileDirname}","--ufile","${fileBasename"
            ],
            "type": "shell",
            "problemMatcher": [
                "$gulp-tsc"
            ]
        }

1. 全部完成之後，就可以在 `gulpfile.js` 內透過引用變數的方式來設定路徑了

### 優點
* 在工作區下就可以處裡其他資料夾裡的檔案

### 缺點
* 只能處裡共用的任務(檔案轉換...etc)，無法按個別專案需要做處裡

