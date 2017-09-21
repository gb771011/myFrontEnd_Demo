# Usage 
* HTML
    * 新增任務
    * 表示任務已完成
    * 刪除任務
* js
    * 將所有任務的資訊(id,content,isDone)以json的形式儲存
    * HTML在新增/修改狀態/刪除任務時，同時修改json的的內容

# Note
## 讓EsLint支援jQuery語法:
Eslint預設是不支援jQuery的語法( **$(selector).method** )的，若在`*.js`中使用jQuery語法，Eslint會因為無法辨識而顯示報錯

若要讓Eslint可以正確辨識jQuery語法，只要在`eslintrc.js`的`env`區塊中添加`'jquery':true`即可:
```
// eslintrc.js
"env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        'jquery':true
    },
```

## `<label>`: attr[for]
[MDN:HTML `<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)   

`<label>`可以與特定id的表單元素連結連動，當使用者點擊`<label>`的內容時候，與之連動的元素會有`onfocus`或是`checked`的效果

設定的方法有兩種:

1. 設置`for`屬性
```
<!-- 
    點擊label的文字時，讓文字輸入框獲得焦點
    <input id="el1" type="text" name="" value="">
    <label for="el1">Click me</label>
-->
<!-- 
    點擊label的文字時，讓文字輸入框獲得焦點
    <input id="el2" type="radio" name="" value="">
    <label for="el2">Click me</label>
-->
```

2. 把要連動的元素放到`<label>`裡面也會獲得同樣的效果，但要注意
```
<!-- 
    <label>Click me<input type="text" name="" value=""></label>
 -->
```

上述方法只能擇其一，且優先度是**1.**>**2.**

也就是說，一旦設置了`for`屬性，不論其是否有對應的對象，都不會與`<label>`裡的元素連動