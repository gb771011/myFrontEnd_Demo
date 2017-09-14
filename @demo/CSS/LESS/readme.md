# mixin
翻譯過來為混和，類似JS中的函式
## 語法
```
// 定義
.mixin_name(@arr1,@arr2,...){
    // some css declaration here...
}
// 使用
h2{
    .mixin_name()
}
```
## Note
* mixin前會加 **"."** ，類似HTML的Class
* 代入mixin的變數名稱都要加上 **@**
* 參數可做計算，若參數有加上單位，計算後的數值也會保持同樣單位，不用轉換

## Demo
```
// 漸層
.bg_gradients(@color1,@color2){
    background: linear-gradient(@color1,@color2);
}
// 區塊尺寸/被景色/文字色 快捷設定
.block(@w,@bgcolor){
    width:@w;
    height: @w;
    background-color:@bgcolor; 
    color:255 - @bgcolor;
}
```