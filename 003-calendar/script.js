// 顯示最後一次更新的時間
function update() {
    var time = document.getElementById("time"),
        date = document.getElementById("date"),
        now = new Date();

    time.innerText = "Last update : " + now.toLocaleTimeString();
    date.innerText = "Today : " + now.toDateString();

}
window.onload = update();

var date = new Date();

//取得當月第一天是星期幾
date.setDate(1);
var dayFirst = 0;
dayFirst = date.getDay();
console.log("First day:", dayFirst);

//取得當月天數
date.setMonth(date.getMonth() + 1, 0);
var dayCount = "";
dayCount = date.toString().split(" ")[2];
console.log("dayCount:", dayCount);

var allDay = [];
//排序
dayFirst = 1;
dayCount = 31;
for (var j = 0; j < 6; j++) {
    var week = [];
    for (var i = 0; i < 7; i++) {
        var val = (i + j * 7) - dayFirst +1;
        if (val > dayCount || val < 1) {
            val = " ";
        }
        week[i] = val;
    }
    allDay[j] = week;
}
console.log(allDay.length);

var str="";
for (var i = 0; i < allDay.length; i++) {
    str="";
    for (var a in allDay[i]) {
       str += allDay[i][a]+" ";        
    }
    console.log(str);
}



// console.log(allDay);

/*
console.log("Use JS Date Method");
// JS Date Method使用方法:
// 1.建立一時間物件
var date=new Date();
// 2.對時間物件直接使用方法(.setDate)
date.setDate(31);
// 3.使用方法後再輸出即可，不用設變數(設變數會得到毫秒值)
console.log(date.toString());
console.log("/Use JS Date Method");
 */

/*
// 當月第一天
var nowMonth=date.getMonth(),
    nowDay=date.getDay();

console.log("nowMonth : " + (nowMonth+1));
console.log("nowDay : " + (nowDay+1));
*/

