//設定副程式clock顯示當前時間
function clock(){
    setInterval(function() {
        var date=new Date();
        var localeTime=date.toLocaleString();
        var stringTime=date.toString();

        var localeSpilt=localeTime.split(" ");
        var stringSpilt=stringTime.split(" ");

        document.getElementById("clock").innerHTML="toLocaleString(): "+localeTime;
        document.getElementById("clock2").innerHTML="toString(): "+stringTime;

        console.log(stringSpilt);
        console.log(localeSpilt);

        document.title="Now:"+localeSpilt[1];
        
    }, 1000);
}

//在網頁完成讀取時執行clock()
window.onload=clock();