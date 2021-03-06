# Link
[Github page](https://gb771011.github.io/myFrontEnd/)

# Log
date | description
--|--
17/7/15 | 將practice與project分成兩個repo`*1`，避免搞混

`*1`       
>**practice** : 單一功能 or API驗證練習用檔案  
**project** : 多功能，可獨立使用完整的作品

---

# list

* todoList(前端)
* 使用jQuery重做日曆&計算機
* HTML5 API
    * Canvas
    * web socket
    * ...etc
* 小遊戲
    * OOXX      
    * 走迷宮   
    * ...etc    
* babel(JS預處理器:ES6 轉 ES5)
* layout練習  
    * 公司表單（工單，FAI，樣品報告）     
    * github page homepage
* JS library
    * UI Library:
        * jQueryUI
        * vue
        * react
        * angular
    * LESS(js-based css預處理器)    
* HTML Template
    * EJS(JS-based)  
    * markdown 
* 後端
    * node
    * 資料庫   
* electron : 桌面程式開發

---

# Library
## CDN
Name|Usage|CDN
--|--|--
[jQuery](https://jquery.com/)|DOM操作|`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`
[google-code-prettify](https://github.com/google/code-prettify)|網頁端程式碼高亮|`<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>`
[highlight.js](https://highlightjs.org/)|網頁端程式碼高亮|`<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">`  `<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>`
[LESS](http://lesscss.org/#getting-started) | JS-based CSS processor|`<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>`

---
## 使用筆記

* [LESS](./@library_note/less.md)
* [google-code-prettify](./@library_note/google-code-prettify.md)

# What is MVC?
[wiki](https://zh.wikipedia.org/wiki/MVC)       
MVC分別代表 **Model**, **View**, **Controller**     
分別的工作如下:
* **Model**: 處理透過V or C傳遞的資料(演算/儲存)
* **View**: 顯示**Model**的資料 or 接收要求
* **Controller**:  負責轉發請求，控制程式流程

以網站的架構來說的話:
* **model**==**伺服器**: 處理網頁傳回來的請求&回傳資料
* **view**==**網頁的HTML/CSS**: 讓資料有系統的顯示於畫面上
* **Controller**==**網頁的JS**: 針對不同的動作設置事件監聽器

### 連結