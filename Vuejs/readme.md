# Reference
* [vue官網](https://cn.vuejs.org/v2/guide/)
* [30天學會Vue.js](http://ithelp.ithome.com.tw/users/20103396/ironman/1030)

# 何謂Vue.js
為一種可以動態改變頁面資料的JS框架      
基本概念與ReactJS相似，但是其大小比ReactJS小，也比ReactJS好上手       


# 初始化




```
<!-- html -->
<p v-bind:title="time">hover me</p>
<p v-if="seen">You See Me Now</p>
<ul>
    <li v-for="item in list">
        {{item.title}}:{{item.text}}
    </li>
</ul>
<item v-for="item in list" v-bind:todo="item" v-bind:key="item.id"></item>

<!-- script -->
Vue.component("item", {
    props: ['todo'],
    template: '<p>{{todo.text}}</p>'
});
let app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue',
        time: new Date(),
        seen: true,
        list: [
            { id: 0, text: "cotent001", title: "title001" },
            { id: 1, text: "cotent001", title: "title001" },
            { id: 2, text: "cotent001", title: "title001" },
        ]
    }
})
```