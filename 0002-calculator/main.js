<<<<<<< HEAD
// main javascript sourse for \0002-calculator\index.html

// 若將變數設置在副程式外，html的script必須放在最下面，或是將所有程式碼都放到window.onload裡
window.onload = function () {
    var ans = document.getElementById("ans");

    var numKey = function () {
        /*    若變數設成"document.getElementById("ans").innerText"，只會得到呼叫當下的div#ans的文字內容(string)而非div#ans
            因後續還需要修改div#ans裡的文字，故變數必須設成"document.getElementById("ans")"，再以呼叫property的方式修改文字
        */
        var key = this.innerText;

        // 在ans.innerText ="0"時執行下列檢查
        if (ans.innerText == "0" && key != ".") { ans.innerText = key; }
        else { ans.innerText += key; }
    };

    // 清除ans
    var ansClean = function () {
        ans.innerText = 0;
    };

    //
    var ansBackSpace=function(){
        var len=ans.innerText.length - 1 ;
        console.log(ans.innerText[len]);
        ans.innerText[len]="";

    };

    //給所有div.num添加onclick event listener:numKey
    var numList = document.getElementsByClassName("num");
    for (i = 0; i < numList.length; i++) {
        numList[i].onclick = numKey;
    }
    console.log("Add numKey() to each div.num`s onclick event");

    //給div#clean添加onclick event listener:ansClean
    document.getElementById("ansClean").onclick = ansClean;
    console.log("Add ansClean() to div#ansClean onclick event");

    document.getElementById("ansBackSpace").onclick = ansBackSpace;
    console.log("Add ansBackSpace() to div#ansBackSpace onclick event");

};
=======
var ans = document.getElementById("ans"),
    keyClean = document.getElementById("clean"),
    keyBackSpace = document.getElementById("backSpace"),
    keyNum = document.getElementsByClassName("num");
var i, key, last, ansNum, ansClean, ansBackSpace;

ansNum = function () {
    input = this.innerText;

    // div#ans為"0"時執行下列檢查
    /**
    key=1~9 => ans=1~9(首位不為0)
    key="." => ans=0.
     */
    if (ans.innerText.length < 10) { //  限制div#ans的字數
        if (ans.innerText === "0" && key != ".") {
            ans.innerText = input;
        } else {
            ans.innerText += input;
        }
    }
    console.log("numKey(" + input + ") onclick");
};
//給所有div.num添加onclick event:numKey()
for (i = 0; i < keyNum.length; i++) {
    keyNum[i].addEventListener("click", ansNum);
}

ansClean = function () {
    ans.innerText = 0;
    console.log("ansClean() onclick");
};
//給div#clean添加onclick event:ansClean()
keyClean.addEventListener("click", ansClean);

ansBackSpace = function () {
    last = ans.innerText.length - 1;
    if (ans.innerText.length > 1) {
        ans.innerText = ans.innerText.substring(0, last);
        console.log("ansBackSpace() onclick:BackSpace");
    } else {
        ans.innerText = "0";
        console.log("ansBackSpace() onclick:return to Zero");
    }
};
keyBackSpace.addEventListener("click", ansBackSpace);
>>>>>>> 6b0efcded8341067f52436e32b5913f17ff629c0
