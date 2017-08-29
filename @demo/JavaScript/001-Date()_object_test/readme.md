## 前端的href/urc的相對路徑說明: 

注意事項:   
* **html,css,js均適用**
* **以編輯中檔案為基準點(簡稱基準)**
* **要嵌入的目標檔案(簡稱目標)**
* **/(資料夾)**

#### case1.目標與本檔在同一資料夾下
```
└page  
    └index.html
    └style.css
```
#### result: href/urc直接輸入目標檔名

```
    <link rel="stylesheet" type="text/css" href="style.css">
```

#### case2.目標在下一層資料夾中
```
└page  
    └index.html
    └css   
        └style.css
```
#### result:href/urc輸入  [資料夾/目標檔名 ] 

```
<link rel="stylesheet" type="text/css" href="css/style.css">
```

#### case3.目標在上一層資料夾or其他資料夾中
```
└page  
    └index.html
└css   
    └style.css
```       

#### result:href/urc輸入 [../資料夾/目標檔名]
```
<link rel="stylesheet" type="text/css" href="../css/style.css">  
```
