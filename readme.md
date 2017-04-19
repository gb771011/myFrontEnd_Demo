# 語法說明

## 參考

[MDN(最新)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript)  
[W3C School-Javascript(舊版)](https://www.w3schools.com/js/js_intro.asp)

## 變數

一般的變數宣告長這樣:

    var 變數名稱 = 變數值 ;
如上所示，包含了宣告方式(var)，變數名稱與變數值

#### 宣告方式  

JS的變數宣告有3種:

* **var**:可修改值的全域變數  
* **let**:可修改值的區域變數  
* **const**:不可修改值的全域常數    

#### 變數名稱

JS的變數名稱需符合下列原則:
* 開頭可使用下底線(_)，錢號($)或是英文字母
* 後面可接大小寫字母(A-Z)或數字(0-9)
* 變數名稱有區分大小寫，所以**Cat**與**cat**會是兩個不同的變數 

#### 變數值

變數值可為下列型態:

1. 數值(integer)

        var var1=1.234

1. 字串(string)

        var var2="Hello World"

1. 布林值(boolean)

        var var3=true;

1. 陣列(array)

       var var4=["apple",1.234,False]; 

1. 物件(object)

        var var5={
            name:"Gary",
            age:18
        }
---

## 迴圈