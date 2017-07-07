# 設計

1. 主選單選項使用ul>li排版，再透過display:flex修改顯示方式
3. 選項裡可放單純連結or+下拉式次選單
2. 主選項:hover時，選項的底色與文字色皆改變
4. 有次選單的話，當游標再次選單裡:hover時，主選單的選項依舊保持:hover的效果

# css套用
```
<nav class="navbar">
        <ul>
        <!--選項-->
            <li><a href="#">option</a></li>
            <li><a href="#">option</a></li>
        
        <!--複選單-->
            <li class="drop">
                <a href="#">Menu</a>
                <div class="drop-list">
                    <a href="">item1</a>
                </div>
            </li>
        
        <!--靠右選項-->
            <li class="btn-right"><a href="#">Contact Us</a></li>
            <li class="drop">
                <a href="#">Menu-right</a>
                <div class="drop-list list-reverse">
                    <a href="">item1</a>
                </div>
        </ul>
    </nav>
        
```

1. 在最外層`<nav>`加上`.navbar`
3. 次選單區塊的父元素須加上`.drop`，且次選單區塊須加上`.drop-list`
4. 要靠右的選項要加上`.rightFirst`   
    **注意在.rightFirst之後的元素也會跟著靠右**
4. 123