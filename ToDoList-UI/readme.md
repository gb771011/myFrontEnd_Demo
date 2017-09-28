# Features
* HTML
    * 新增任務
    * 任務狀態變更
        * 未完成: 黑字
        * 完成: 灰字+刪除線
    * 刪除任務
* js
    * 將所有任務的資訊(id,content,isDone)以json的形式儲存
    * HTML在新增/修改狀態/刪除任務時，同時修改json的的內容

# worlflow
### 顯示資料
1. 開啟頁面&讀取JS
1. 讀取已儲存的任務清單(json)
1. 渲染頁面，將現有的任務顯示於頁面上

### 新增資料
1. 在`input#msg`輸入任務名稱
1. 按確定新增任務
1. 在任務列表裡新增任務   
    內容:
    * id(str): 建立當下的毫秒數(`new Date().valueOf`)
    * msg(str):`input#msg` 的值 
    * isDone(bln): 紀錄任務是否完成，預設值為`false` 
1. 重新渲染頁面，在頁面上新增該筆資料

### 修改任務狀態


### 刪除資料
1. 點擊任務旁的刪除鈕
1. 讀取該任務的id
1. 從清單中刪除該ID的資料
1. 重新渲染頁面，從頁面上移除該筆資料


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