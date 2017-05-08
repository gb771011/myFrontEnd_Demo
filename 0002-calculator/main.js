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