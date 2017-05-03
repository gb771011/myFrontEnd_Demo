//function clockLocale():顯示當前本地時間
function showTimeLocale() {
    //建立一date()物件
    var date = new Date();
    // 在網頁的#clock裡顯示date.toLocaleTimeString()
    document.getElementById("clockL").innerHTML = date.toLocaleTimeString();
}

//function clock():顯示當前標準時間
function showTimeStanard() {
    var date = new Date();
    // 在網頁的#clock2裡顯示date.toTimeString()
    document.getElementById("clockS").innerHTML = date.toTimeString();

    // 注意兩個method的輸出格式不同
}


var clockL;
var clockS;

function clockLSwitch(bln){
    // true=Run,false=stop    
    if(bln){
        clockL=setInterval(showTimeLocale,1000);
        console.log("TimeLocale on");
    }
    else{
        window.clearInterval(clockL);
        console.log("TimeLocale off");
    }
}

function clockSSwitch(bln){
    // true=Run,false=stop
    if(bln){
        clockS=setInterval(showTimeStanard,1000);
        console.log("TimeStandard on");
    }
    else{
        window.clearInterval(clockS);
        console.log("TimeStandard off");
    }
}
