# Gulp 
## Reference
### offical Doc
* [Gulp API](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
### Tutorial
* [Tutorial:OXXOstudio](http://www.oxxostudio.tw/articles/201503/gulp-install-webserver.html)
* [Other Tutorial1](http://www.ydcss.com/archives/34)
### Other
* [What is Glob?](https://amobiz.github.io/2015/11/14/gulp-glob/)
/  [What is Glob?2](http://www.jianshu.com/p/fbf9871dc47a)


## 如何在vscode裡跨資料夾執行gulp
### 問題
vscode的task只會執行工作目錄下的gulpfile.js       
但要轉換的檔案通常都是放在個別資料夾中(如下)

```
+--(workspace) (vscode的工作區目錄)
| `--demo01 
|   +--style.less (要轉換的檔案)
|   `--index.html
|-gulpfile.js
```

因位置不同，若直接執行會因為找不到指定檔案而發生錯誤

故要讓 _vscode task_ 或是 _gulp_ 有可以判斷 **當前工作目錄(CWD)** 的能力


### 方法1. 使用gulp原生參數`--env`切換當前工作目錄

#### 步驟
1. 在gulp的任務裡加入`"args":'--env','${fileDirname}`兩個引數

        {
            "taskName": "gulp-change_cwd",
            "command": "gulp",
            "args": [
                "--cwd","${fileDirname}"
            ]
        }
2. 在當前目錄下準備好`gulpfile.js`(任務依需求自訂)

#### 執行結果
1. task執行時，透過--cwd引數，gulp會自動將CWD從 **工作目錄** 暫時轉變為 **當前檔案的資料夾**(`${fileDirname}`)
2. 執行該路徑下的gulpfile.js做轉換

#### 分析

**優點**
* 不用花時間在處裡路徑問題上
* 可針對個別資料夾需求設定gulpfile.js
* 可讓vscode偵測gulpfile.js裡的任務並單獨執行

**缺點**
* 須在該目錄下先準備好gulpfile.js


### 方法2. 使用gulp-util模組

#### 作法

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

#### 分析

**優點**
* 在工作區下就可以處裡其他資料夾裡的檔案

**缺點**
* 只能處裡共用的任務(檔案轉換...etc)，無法按個別專案需要做處裡