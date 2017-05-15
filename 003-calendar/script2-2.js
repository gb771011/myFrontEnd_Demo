/*
<table>
    <caption id="month">00</caption>
    <tbody>
        <tr id="week">
            <th>日</th>
            ~~~
        </tr>
        <tr id="day">
            <td></td>
            ~~~
        </tr>
        ~~~
    </tbody>
</table>
*/
// 每次直接插入一列(含資料)


function array2row() {

}

var myCalendar = document.getElementById("myCalendar");
// 在#myCalendar裡新增<table>
var newTable = document.createElement("table");
myCalendar.appendChild(newTable);

// 將#myCalender內的新<table>設定變數為container"
var container = myCalendar.childNodes[0];

// 加入新列(<tr>)
var ceTr = document.createElement("tr");
container.appendChild(ceTr);

var week = 5;
// 根據本月的周數增加列數
// 列數:n(本周周數)+1(抬頭列)"
console.log("week:" + week);
for (var i = 0; i < week; i++) {
    var clTemp = container.childNodes[0].cloneNode(false),
        testText = document.createTextNode("Row" + (1 + i));
    clTemp.appendChild(testText);
    container.appendChild(clTemp);
}

console.log(container.childNodes);
// 在第一列插入第一個<th>(header)
var weekTitle = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];
var nodeTh = document.createElement("th");
var ctn = document.createTextNode(weekTitle[0]);
nodeTh.appendChild(ctn);
container.childNodes[0].appendChild(nodeTh);

// 插入剩下的<th>
for (var i = 1; i < weekTitle.length; i++) {

}
