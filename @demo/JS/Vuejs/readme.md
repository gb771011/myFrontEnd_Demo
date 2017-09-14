# Reference
* [vue官網](https://cn.vuejs.org/v2/guide/)
* [30天學會Vue.js](http://ithelp.ithome.com.tw/users/20103396/ironman/1030)

# 何謂Vue.js
為一種可以動態改變頁面資料的JS框架      
基本概念與ReactJS相同(只改變view)，但相較之下Vue還有下列優點:
* 不強制使用JSX
* 核心文件容量較小      

# CDN
`<script src="https://unpkg.com/vue"></script>`

# Demo
## 起手式
1. 在`<script>`中建立vue物件
    ```
    let vv = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue',
        tle: 'v-bind: hello vue',
        list: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
            ]
        }
    })
    ```
    Key:
    * el: 要讓Vue作用的標籤ID
    * data: 資料

1. 在要引入Vue的標籤上加上對應的ID(不可使用class)
```
<div id='app'></div>
```
1. 在需要代換的內容使用雙大括號+變數名稱(變數需在Vue的data裡)
```
<div id='app'>
    {{msg}}
</div>
```

