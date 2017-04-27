//設定副程式clock顯示當前時間
function clock(){
    setInterval(function() {//讓下列程式碼每隔固定時間就執行一次
        
        var date=new Date();//建立一date()物件
        var localeTime=date.toLocaleString();//使用toLocaleString()顯示時間
        var stringTime=date.toString();//使用toString()顯示時間
        // 注意上述兩個method的輸出會不同

        document.getElementById("clock").innerHTML="toLocaleString(): "+localeTime;//在網頁的#clock裡顯示localeTime
        document.getElementById("clock2").innerHTML="toString(): "+stringTime;//在網頁的#clock2裡顯示stringTime
        
        // 在console裡檢查輸出時間的陣列內容
        // [str].spilt(" ")，以" "為分隔符號，將[str]分解為陣列
        var localeSpilt=localeTime.split(" "); 
        var stringSpilt=stringTime.split(" ");
        // 使用console.log顯示陣列結果
        console.log(stringSpilt);
        console.log(localeSpilt);

        // 修改網頁的標題
        document.title=localeSpilt[1];
        
    }, 1000);//讓上述程式碼每隔1000ms(1s)就執行一次
}

//在網頁完成讀取時執行clock()
window.onload=clock();