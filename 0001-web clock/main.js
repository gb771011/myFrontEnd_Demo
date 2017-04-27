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





function clock_run() {    
    clock_on=setInterval(clock,1000);
    console.log("clock_on");
}

function clock_pause() {    
    window.clearInterval(clock_on);
    console.log("clock_off");
}







function clock_console(){
    // 在console裡檢查輸出時間的陣列內容
    // [str].spilt(" ")，以" "為分隔符號，將[str]分解為陣列
    var localeSpilt = localeTime.split(" ");
    var stringSpilt = stringTime.split(" ");
    // 使用console.log顯示陣列結果
    console.log(stringSpilt);
    console.log(localeSpilt);

    // 修改網頁的標題
    document.title = localeSpilt[1];
}

var clock_on;

function clock_run() {
    
    clock_on=setInterval(clock,1000);
    console.log("clock_on");
}

function clock_pause() {
    
    window.clearInterval(clock_on);
    console.log("clock_off");
}


// 在網頁完成讀取時執行clock()
// window.onload = clock();