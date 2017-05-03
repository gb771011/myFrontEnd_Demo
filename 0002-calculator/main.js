// main javascript sourse for \0002-calculator\index.html

var numKey = function () {
    var last = document.getElementById("ans").innerText;
    var key = this.innerText;
    var result;

    // 檢查第一位是不是0
    if (last == "0") {
        if (key != ".") {
            result = key;
        }
        else{
            result = last + key;
        }
    }
    else {
        result = last + key;
    }
    document.getElementById("ans").innerText = result;
    console.log(result.length);
};

var ansClean = function () {
    document.getElementById("ans").innerText = 0;
};

var numDot = function () {
    var last = document.getElementById("ans").innerText;

    document.getElementById("ans").innerHTML = last + ".";
};

window.onload = function () {
    //給所有div.num添加onclick event listener:numKey
    i = 0;
    var numList = document.getElementsByClassName("num");
    for (i = 0; i < numList.length; i++) {
        numList[i].onclick = numKey;
    }
    console.log("Add numKey() to each div.num`s onclick event");

    //給div#clean添加onclick event listener:ansClean
    document.getElementById("ansClean").onclick = ansClean;
    console.log("Add ansClean() to div#ansClean onclick event");

};