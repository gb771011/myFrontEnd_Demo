# 參考
[CSS“隐藏”元素的几种方法的对比](http://luopq.com/2016/02/15/css-tricks-of-hide-element/)

 <a href="https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwigvfjmn_TUAhWGEpQKHb32CusQFgglMAA&url=http%3A%2F%2Fzh-tw.learnlayout.com%2Fflexbox.html&usg=AFQjCNG8h108yYloRgR2f98EauF1-u7atA"
                    target="_blank">Flexbox1 reference</a>

<a href=" http://www.oxxostudio.tw/articles/201501/css-flexbox.html" target="_blank">Flexbox1 reference2</a>

<a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar" target="_blank">sample</a>

# 設計

1. html主選單一律使用ul>(li+a)*n
2. ul設定display:flex，方便後續做排版
1. li不做設定，一切設定都加到裏頭的&lt;a>上
2. a:hover時，選項的底色皆改變
4. 下拉式次選單同樣做ul>li+a，但是這裡的&lt;ul>會加上class=dropdown
1. 次選單平時保持消失狀態，但因為要做轉場(transition)，故並非設定成display:none，而是
4. 有次選單的話，當游標再次選單裡:hover時，主選單的選項依舊保持:hover的效果

# Code
## 主選單
### CSS
```
<style>
:root {
<!--將所有會用到的顏色設成全域變數，方便日後調整-->
    --color_bg: darkred;
    --color_font: white;
    --color_font_hover: blue;
}

<!--navbar背景設定-->
.nav {
    display: flex;
    list-style-type: none;
    padding-left: 0;
    background-color: var(--color_bg);
}

<!--navbar <a>設定-->
.nav a {
    display: block;
    text-decoration: none;
    padding: 12px;
    color: var(--color_font);
    transition: all 0.2s;
}

.nav a:hover {
    background-color: tomato;
    color: var(--color_font);
}

<!--靠右選項設定-->
.nav .right {
    margin-left: auto;
}
</style>
```

### html
```
<nav>
    <ul class="nav">
        <li><a href="">item1</a></li>
        <li><a href="">item5</a></li>
        <li><a href="">item6</a></li>
        <li class="right"><a href="">item last</a></li>
    </ul>
</nav>
```
## 下拉式選單

### css
```
<style>
.nav .dropdown {
    position: relative;
}

.nav .drop-content {
    padding: 0;
    list-style-type: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background-color: var(--color_bg);
    transition: all .3s;
}

.nav .drop-content a {
    white-space: nowrap;
    padding-left: 24px;
}

.nav .dropdown:hover>.drop-content {
    visibility: visible;
    opacity: 1;
</style>
```

### html
```
<nav>
    <ul class="nav">
    <!--在內有下拉式選單的選項上加.dropdown-->
        <li class="dropdown">
            <a href="#">Menu-right</a>
            <!--選單上加.drop-content-->
            <ul class="drop-content">
                <li><a href="">sub-item1sub-item1</a></li>
                <li><a href="">sub-item1</a></li>
                <li><a href="">sub-item1</a></li>
            </ul>
        </li>
    </ul>
</nav>
        
```
### note
此設計目前無法做到第三層(選單中再一層選單)，定位錯誤

