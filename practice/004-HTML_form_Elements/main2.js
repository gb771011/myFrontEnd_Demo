/*

var i, ceNode, ceAttr, ceText;
var inputType = ["text", "password", "radio", "checkbox", "button",
    "submit", "reset"];
var idForm = document.getElementById("formInput");
//在<form>裡面依序添加inputType裡的<input> 

function name() {
    for (i = 0; i < inputType.length; i++) {
        ceNode = document.createElement("input");
        ceAttr = document.createAttribute("type");
        ceAttr.value = inputType[i];
        ceNode.setAttributeNode(ceAttr);

        ceAttr = document.createAttribute("value");
        ceAttr.value = "test";
        ceNode.setAttributeNode(ceAttr);

        idForm.appendChild(ceNode);

        ceNode = document.createElement("span");
        ceText = document.createTextNode("Type = " + inputType[i] + " : ");
        ceNode.appendChild(ceText);
        idForm.insertBefore(ceNode, idForm.lastChild);

        ceNode = document.createElement("br");
        idForm.appendChild(ceNode);
    }
}

function TestObj(color, age, isSave) {
    this.color = color;
    this.age = age;
    this.isSave = isSave;
}

var item1 = new TestObj("red", 16, false);
var item2 = new TestObj("blue", 32, true);
function showProperty(Obj) {
    for (var p in Obj) {
        console.log(p, ":", Obj[p]);
    }
}
showProperty(item1);

var arr = [];
arr[0] = item1;
arr[1] = item2;
console.log(arr);*/