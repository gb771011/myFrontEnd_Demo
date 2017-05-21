var date = new Date();
console.log("refeach Time:"+date.toString());

//在指定的id裡批次添加指定的元素&賦予指定的屬性
function addElements(parent, newNode, data) {
    var tempNode = document.createElement(newNode),
        tempText = document.createTextNode(data);

    tempNode.appendChild(tempText);
    parent.appendChild(tempNode);
}

function addElement(parent_id, str_node, str_text, obj_attr) {
    // 批次建立有不同內容與屬性的單一元素
    // element output:<newNode attr(0) attr(1) ~ attr(n)>text</newNode>
    var parent, node, text, attr;
    node = document.createElement(str_node);
    text = document.createTextNode(str_text);
    node.appendChild(text);

    for (var i in obj_attr) {
        attr = document.createAttribute(i);
        attr.value = obj_attr[i];
        node.setAttributeNode(attr);
    }

    parent = document.getElementById(parent_id);
    parent.appendChild(node);

    console.log("parent id:"+parent_id, "\nnode : <"+str_node+">", "\ntext:"+str_text, "\nattr:",obj_attr);
}

addElement("formInput", "p", "Hello", { class: "c1", value: "123" });
addElement("formInput", "input", "123", { type:"checkbox"});
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