[home]:https://gb771011.github.io/myFrontEnd/ 

[test](practice/src)

# Library/framework
* [jQuery](https://jquery.com/) : 最多人用的JS-Library

    匯入:

    1. 從官網下載js檔，再匯入到html內
    2. 從CDN匯入:

        ```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        ```
    
    [W3C-jQuery Tutorial](https://www.w3schools.com/jquery/default.asp)

* [google-code-prettify](https://github.com/google/code-prettify): 可以在網頁上顯示程式碼     

使用方法 :      
1. 從CDN匯入: 

    ```
        <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    ```

2. 將要嵌入程式碼的位置用 &lt;pre&gt;包起來，並加上class="prettyprint"
    ```
    <pre class="prettyprint">
        <!--code here-->
    </pre>
    ```

1. 若為程式碼格式為html，需將程式碼內的```<```用```&lt;```取代，這樣才能在程式碼內正確顯示tag，否則.prettyprint內的程式碼還是會被轉為網頁
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