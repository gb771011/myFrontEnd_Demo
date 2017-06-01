## 練習題內容

1. 時間物件練習   
2. 簡單計算機 
3. 當月日曆 

---

## 更新紀錄

* 17/5/11-完成001 & 002
* 17/5/11-新增[GitHub Page](https://gb771011.github.io/myFrontEnd/)功能
* 17/5/18-完成003

---

## 外部函式庫
* jQuary    

cdn:
    ```
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="main.js"></script>
    ```

* [google-code-prettify](https://github.com/google/code-prettify)  

功能 : 可以在網頁上顯示程式碼     

使用方法 :      
1. 在html的head裡匯入該js 

    ```
        <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    ```

2. 將要嵌入程式碼的位置用 &lt;pre&gt;包起來，並加上class="prettyprint"
    ```
    <pre class="prettyprint">
        <!--code here-->
    </pre>
    ```

1. 若為程式碼格式為html，則需將程式碼內的"<"用```&lt;```取代，這樣才能在程式碼內正確顯示tag，否則.prettyprint內的程式碼還是會被轉為網頁
    ```
        <pre class="prettyprint">
        &lt;div>
            &lt;h3>&lt;/h3>
            &lt;button id="show" type="button">Click me to Show&lt;/button>
            &lt;button id="hide" type="button">Click me to hide&lt;/button>
            &lt;p>I am 001 p&lt;/p>
            &lt;p>I am 001 p&lt;/p>
        &lt;/div>
        </pre>

    ```

---