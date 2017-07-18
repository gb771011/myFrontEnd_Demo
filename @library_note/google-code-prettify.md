# gcp
## How to use:

匯入google-code-prettify後，將程式碼放到 &lt;pre&gt;裡即可

        <pre class="prettyprint">
            <!--code here-->
        </pre>

## Note:

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