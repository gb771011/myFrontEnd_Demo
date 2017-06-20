# reference
[配色網站:coolors.co](https://coolors.co/)
[配色網站:colorsupplyyy](http://colorsupplyyy.com/app/)


# note

* (css)display:inline-block之間會有4px的間距存在，且無法透過設margin/padding的方式消除該間距

### Method 1 : display:inline-block

* child:**display:inline-block**

    優點:
    * 方便，不用連Parent一起調整

    缺點:
    * 各區塊間會有4~8px不等的空隙，且不容易消除

---

### Method 2: float:left

* Parent: **overflow**
* child: **display:block** + **float:left**

    優點:
    * 傳統作法，不用擔心太舊的瀏覽器不支援

    缺點:
    * Child內容一但超出Parent範圍就麻煩

---

### Method3 : Flexbox