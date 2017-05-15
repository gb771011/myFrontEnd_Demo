var myCalendar=document.getElementById("myCalendar");
/*
<table>
    <caption id="month">00</caption>
    <tbody>
        <tr id="week">
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
        </tr>
        <tr id="day">
            <td></td>
        </tr>
    </tbody>
</table>
*/

// 建立新日曆的基本架構:先將所有會用到的元素用innerHTML的方式先加到#myCalendar裡
myCalendar.innerHTML=
    '<table><caption id="month">00</caption>'+
    '<tbody>'+
    '<tr id="week"><th></th></tr>'+
    '<tr id="day"><td></td></tr>'+
    '</tbody></table>';

// #week
// add first header in table
var weekTitle=["Sun","Mon","Tus","Wed","Thu","Fri","Sat"];
var idWeek=document.getElementById("week");
var ceTh=document.createElement("th");

idWeek.lastChild.cloneNode(false);
