# 語法說明

## 參考

[MDN(最新)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript)  
[W3C School-Javascript](https://www.w3schools.com/js/js_intro.asp)  
[W3C School-Javascript-Reference](https://www.w3schools.com/jsref/default.asp)  
[codecademy-javascript](https://www.codecademy.com/learn/javascript)    
[Markdown語法(中文)](http://markdown.tw/)

## 變數

JS的變數宣告長這樣:

    var 變數名稱 = 變數值 ;

如上所示，包含了宣告方式(var)，變數名稱與變數值

#### 宣告方式  

JS的變數宣告有3種:

* **var**:可修改值的全域變數  
* **let**:可修改值的區域變數(ES6新增)  
* **const**:不可修改值的全域常數(ES6新增)    

#### 變數名稱

JS的變數名稱需符合下列原則:
* 開頭可使用下底線(_)，錢號($)或是英文字母
* 後面可接大小寫字母(A-Z)或數字(0-9)
* 變數名稱有區分大小寫，所以**Cat**與**cat**會是兩個不同的變數 

#### 變數值

1. 數值(integer)

        var varInt=1.234;

1. 字串(string)

        var varStr="Hello World";

1. 布林值(boolean)

        var varBln=true;

1. 陣列(array)

       var varArray=["apple",1.234,False]; 

1. 物件(object)

        var varObject={
            name:"Gary",
            age:18
        };

1. 函式(function)

        var varFun=function(arg){
                ..code
        }
---

## 函式

可用下面語法建立函式

        function 函式名稱(參數){
               //程式碼 
        }

或是

        var 函式名稱=function(參數){
                //程式碼
        }
---
