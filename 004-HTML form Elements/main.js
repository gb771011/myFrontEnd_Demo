var date = new Date();
console.log("refeach Time:" + date.toString());


function addElement(parent_id, str_node, str_textNode, obj_attr) {
    // 批次建立有不同內容與屬性的單一元素
    // element output:<newNode attr(0) attr(1) ~ attr(n)>text</newNode>
    var parent, node, text, attr, log = "";
    parent = document.getElementById(parent_id);

    node = document.createElement(str_node);

    if (str_textNode !== undefined) {
        text = document.createTextNode(str_textNode);
        node.appendChild(text);
    }

    if (obj_attr !== undefined) {
        for (var i in obj_attr) {
            attr = document.createAttribute(i);
            attr.value = obj_attr[i];
            node.setAttributeNode(attr);
        }
        console.log(obj_attr);
    }

    parent.appendChild(node);

    console.log("\nnode : <" + str_node + ">", "\nparent id : " + parent_id, "\nText : " + str_textNode, "\nattr:", obj_attr);
}

function addElementByArray(parent_id, data) {
    for (var i in data) {
        var attr = { type: data[i] };
        if (data[i] === "button") { attr.value = data[i]; }
        addElement(parent_id, "span", data[i].toUpperCase());
        addElement(parent_id, "input", "", attr);
        addElement(parent_id, "br");
    }
}
//  ["text", "password", "submit", "reset", "radio", "checkbox", "button"] ["number", "range", "search", "color"]
addElementByArray(""

);

addElementByArray("input_old_text",
    ["text", "password"]
);

addElementByArray("input_old_option",
    ["radio", "checkbox", "button"]
);

addElementByArray("input_old_action",
    ["submit", "reset"]
);

addElementByArray("input_new",
    ["time", "date", "datetime-local", "week", "color"]
);

addElementByArray("input_new_mobile",
    ["email", "tel", "url"]
);