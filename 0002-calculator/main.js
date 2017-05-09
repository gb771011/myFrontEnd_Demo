var ans = document.getElementById("ans"),
    keyClean = document.getElementById("clean"),
    keyBackSpace = document.getElementById("backSpace"),
    keyCalculate = document.getElementById("calculate"),
    keyEqual = document.getElementById("equal");
var keyNum = document.getElementsByClassName("num"),
    keyCalculate = document.getElementsByClassName("calculate");

var i, key, last, temp = {}, isEqual = false, input = "", output = 0,c1,c2;
var ansNum, ansClean, ansBackSpace, ansCalculate;

ansNum = function () {
    input = this.innerText;

    // div#ans為"0"時執行下列檢查
    /**
    key=1~9 => ans=1~9(首位不為0)
    key="." => ans=0.
     */
    c1=ans.innerText === "0" && input != ".";
    c2=isEqual;
    if (ans.innerText.length < 9) { //  限制div#ans的字數
        console.log(isEqual);
        if (c1 || c2) {
            ans.innerText = input;
            isEqual = false;
            console.log("Return isEqual=false");
        } else {
            ans.innerText += input;
        }
    }
    console.log("numKey(" + input + ") onclick");
};
for (i = 0; i < keyNum.length; i++) {
    keyNum[i].addEventListener("click", ansNum);
}

ansClean = function () {
    ans.innerText = "0";
    console.log("ansClean() onclick");
};
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

ansEqual = function () {
    temp.val2 = ans.innerText;
    console.log(temp);
    switch (temp.opt) {
        case "add":
            output = Number(temp.val1) + Number(temp.val2);
            break;
        case "minus":
            output = Number(temp.val1) - Number(temp.val2);
            break;
        case "times":
            output = Number(temp.val1) * Number(temp.val2);
            break;
        case "divide":
            output = Number(temp.val1) / Number(temp.val2);
            break;
        default:
            break;
    }
    // if (toString(output).length > 10) {
    //     output = toString(output).slice(0, 8);
    // }

    ans.innerText = output.toPrecision(9);

    isEqual = true;
    temp = {};
    console.log("ansEqual() onclick", temp,isEqual);
};
keyEqual.addEventListener("click", ansEqual);

ansCalculate = function () {
    temp.val1 = ans.innerText;
    temp.opt = this.value;
    ans.innerText = "0";
    console.log("ansAdd() onclick");
    // console.dir(this.value);
    console.log(temp);
};
for (i = 0; i < keyCalculate.length; i++) {
    keyCalculate[i].addEventListener("click", ansCalculate);
}

