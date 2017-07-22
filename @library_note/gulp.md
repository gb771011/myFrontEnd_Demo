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
在vscode下透過task執行gulp的話，因為工作區路徑位置與目前檔案路徑不同，導致工作區下的gulp會無法抓取目標檔案而發生錯誤

### 資料夾結構
```
+--workspace (vscode的工作區目錄)
| `--src (目標檔案目錄)
|   +--style.less
|   `--index.html
|-gulpfile.js
```

### 重點
**在工作區之下執行Task:gulp時，gulpfile.js必須要可以接收cwd**

* note     
    1. **C**urrent **W**ork **D**irectory = 當前工作目錄

### 方法
1. 使用gulp原生參數`--env`切換cwd

    在該任務下的`"args"`裡加入`--env`跟 `${fileDirname}`兩個引數即可
        
        {
            "taskName": "gulp-change_cwd",
            "command": "gulp",
            "args": [
                "--cwd","${fileDirname}"
            ]
        }

    執行時，gulp在執行時便會自動將cwd修改為目前檔案的路徑(`${fileDirname}`)，並執行該路徑下的gulpfile.js

    **優點**
    * 不用切換工作區即可在各目錄裡使用gulp

    **缺點**
    * 須在該目錄下先準備好gulpfile.js


1. 使用gulp-util模組

    **作法**      

    1. 開啟task.json，在該任務的"args"裡加上 **"--引數名稱"** 與 **引數值** 兩個引數

            {
                "taskName": "gulp-use_gulp_util",
                "command": "gulp",
                "args": [
                    // 引數名稱="--ucwd",引數值="${fileDirname}"
                    "--ucwd","${fileDirname}"
                ],
                "type": "shell",
                "problemMatcher": [
                    "$gulp-tsc"
                ]
            }

        **注意:**  
        * 不要用到gulp原生的引數

    1. 在工作區的gulpfile.js裡引入`gulp-util`模組(透過npm安裝gulp時會一併安裝該模組)  

            var gulpUtil = require("gulp-util");

    3. 此時就可在gulpfile.js裡透過`console.log(gulpUtil.env.ucwd`)`確認是否有接收到該引數的值    

        **注意:**      
        * gulpUtil.env.**ucwd** <-- 這裡的**變數名稱**需跟任務中的**引數名稱**一致 

    4. 確認無誤後，在gulpfile.js裡所有需要輸入路徑的地方都加上該變數即可

            gulp.src(console.log(gulpUtil.env.ucwd+"/style.less")

        function:搭配path模組來組合路徑

            var path = require("path);
            function pathCwd(files) {
                return path.join(gulpUtil.env.ucwd, (files === undefined) ? "" : files);
            }
            pathCwd(123.txt) // return (cwd path)/123.txt

    **優點**
    * 在工作區下就可以處裡其他資料夾裡的檔案

    **缺點**
    * 只能處裡共用的任務(檔案轉換...etc)，無法按個別專案需要做處裡