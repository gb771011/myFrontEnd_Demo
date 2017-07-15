[Github page](https://gb771011.github.io/myFrontEnd/)

# Log
date | description
--|--
17/7/15 | 將practice與project分成兩個repo`*1`，避免搞混

>`*1`       
**practice** : 單一功能 or API之自學用作業  
**project** : 功能完整的作品


# Idea list

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
* ES6(javascript預處理器：ES6 轉 ES5)
* LESS(js-based css預處理器)
* 把vue,react 跟angular都試過一遍
* layout練習  
    * 公司表單（工單，FAI，樣品報告）     
    * github page homepage
* JS libraty
    * jQueryUI
    * ...etc
* HTML Template
    * EJS(JS-based)
    * markdown
* 後端
    * node  
    * 資料庫   
* electron : 桌面程式開發

---

# Library
## [jQuery](https://jquery.com/)

### CDN:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

---

## [google-code-prettify](https://github.com/google/code-prettify)

程式碼高亮工具#1

### CDN

    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>

### How to Use:

匯入google-code-prettify後，將程式碼放到 &lt;pre&gt;裡即可

        <pre class="prettyprint">
            <!--code here-->
        </pre>

### Note:

若為程式碼格式為html，需將所有標籤的`<`用`&lt;`取代，這樣才能在程式碼內正確顯示tag，否則`<pre>`內的程式碼還是會被轉為網頁


        <pre class="prettyprint">
        &lt;div>
            &lt;h3>&lt;/h3>
            &lt;button id="show" type="button">Click me to Show&lt;/button>
            &lt;button id="hide" type="button">Click me to hide&lt;/button>
            &lt;p>I am 001 p&lt;/p>
            &lt;p>I am 001 p&lt;/p>
        &lt;/div>
        </pre>

亦可以在頁面里寫script做自動轉換

流程:
    
1. 取得`<pre>`裡的innerText
2. 使用 _string_ .replace()將所有的`<`替換成`&lt;`

    >.replace()預設只會換掉"第一個被找到"的目標，若要一次全部換掉，需使用正規表達式`/</g`
    
3. 若使用CDN載入，則轉換的script盡量不要用到其他函式庫的語法(ex:jQuery)

    >因CDN會在讀取完畢後自動轉換`<pre>`裡的程式碼，轉換用script若用到其他函式庫的語法會"來不及"轉換


---
## [LESS](http://lesscss.org/#getting-started)
### CDN
```
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
```