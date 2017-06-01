
//將.prettyprint裡的程式碼的"<"更改為"&lt;"
function codeHtmlReedit() {
    var cp = document.getElementsByClassName("lang-html");
    for (var i = 0; i < cp.length; i++) {
        cp[i].innerHTML = cp[i].innerHTML.replace(/</g, "&lt;");
    }
}
codeHtmlReedit();
/*        
jQuary套用宣告:
所有jQuary的程式碼外層都必須包一個$(document).ready(function () { ~~code here~~});
或是省略"document).ready"，簡寫為$(function () { ~~code here~~ });
*/
//按下按鈕讓<p>顯示/消失(use jQuary)--6 line

//按下按鈕讓<p>顯示/消失(ECMAscript)--14 lines
/*
function show(targetElement) {
    var target = document.getElementsByTagName(targetElement);
    for (var i = 0; i < target.length; i++) {
        target[i].style.visibility = "visible";
    }
}
function hide(targetElement) {
    var target = document.getElementsByTagName(targetElement);
    for (var i = 0; i < target.length; i++) {
        target[i].style.visibility = "hidden";
    }
}
document.getElementById("show").addEventListener("click", function () { show("p"); });
document.getElementById("hide").addEventListener("click", function () { hide("p"); });
*/

