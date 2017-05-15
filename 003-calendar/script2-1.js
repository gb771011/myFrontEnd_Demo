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
var myCalendar = document.getElementById("myCalendar");

// 建立新日曆的基本架構:先將所有會用到的元素用innerHTML的方式先加到#myCalendar裡
myCalendar.innerHTML =
    '<table id="day"><caption id="month">00</caption>' +
    '<tr id="week"></tr>' +
    '</table>';

// #week
// add first table header

var idWeek = document.getElementById("week");
var ceTh = document.createElement("th");
var cont = document.createTextNode(weekTitle[0]);

ceTh.appendChild(cont);
idWeek.appendChild(ceTh);

// add other table header

for (var i = 1; i < 7; i++) {
    var clTh = idWeek.lastChild.cloneNode(false);
    cont = document.createTextNode(weekTitle[i]);
    clTh.appendChild(cont);
    idWeek.appendChild(clTh);
}

console.log(idWeek.childNodes);

//#day
var week = [
    [" ", " ", " ", "1", "2", "3", "4"],
    ["5", "6", "7", "8", "9", "10", "11"]
];

console.log(myCalendar);



// add first row in table


/*
var ceTr = document.createElement("tr");
idDay.appendChild(ceTr);
    
idDay.appendChild(ceTr);

//add first data in new row
var ceTd = document.createElement("td");
cont = document.createTextNode(week[0][0]);
ceTd.appendChild(cont);
idDay.lastChild.appendChild(ceTd);

 */





// var ceTd = document.createElement("th");

// var idDay = document.getElementById("day");
// cont=document.createTextNode(week.1[0]);
// ceTd.appendChild(cont);
// ceTr.
