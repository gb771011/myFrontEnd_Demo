

/**


for (i = 0; i < nP.length; i++) {
    if (nP[i].parentElement.nodeName === "FORM") {
        iValue=nP[i].children[0].attributes[0].value;

        tpContent = document.createTextNode(iValue+" : ");
        tpSpan = document.createElement("span");
        tpSpan.appendChild(tpContent);
        // console.log(tpSpan);
        nP[i].insertBefore(tpSpan,nP[i].firstChild);
    }
}

 */
var i, tpContent, tpSpan,iValue,
    tagInput = document.getElementsByTagName("input");
//在所有<input>前面加上type

// console.log(tagInput);
console.dir(tagInput[0]);
console.dir(tagInput[1]);

tpContent=document.createTextNode("addtest");
tpSpan=document.createElement("span");

tpSpan.appendChild(tpContent);
