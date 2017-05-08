
var ans = document.getElementById("ans"),
    keyClean = document.getElementById("clean"),
    keyBackSpace = document.getElementById("backSpace"),
    keyAdd = document.getElementById("add"),
    keyEqual = document.getElementById("equal");
var keyNum = document.getElementsByClassName("num");

var i, key, last, temp=[],isEqual=false,c1,c2;
var ansNum, ansClean, ansBackSpace, ansAdd;

ansNum = function () {
    input = this.innerText;

    // div#ans為"0"時執行下列檢查
    /**
    key=1~9 => ans=1~9(首位不為0)
    key="." => ans=0.
     */
    if (ans.innerText.length < 10) { //  限制div#ans的字數
        if (ans.innerText === "0" && key != "." || isEqual) {
            ans.innerText = input;
            isEqual=false;
            console.log("Return isEqual=false");
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

ansEqual=function(){
    temp[2]=ans.innerText;
    console.log(temp);
    switch (temp[1]) {
        case 0:
            ans.innerText=Number(temp[0])+Number(temp[2]);
            break;
    
        default:
            break;
    }
    isEqual=true;
    temp=[];
    console.log("ansEqual() onclick",temp);
};
keyEqual.addEventListener("click", ansEqual);

ansAdd = function () {
    temp[0]=ans.innerText;
    temp[1]=0;
    ans.innerText="0";
    console.log("ansAdd() onclick");
    console.log(temp);
};
keyAdd.addEventListener("click", ansAdd);
