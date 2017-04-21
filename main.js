function clock(){
    setInterval(function() {
        var date=new Date();
        var localeTime=date.toLocaleString();
        var stringTime=date.toString();

        var localeSpilt=localeTime.split(" ");
        var stringSpilt=stringTime.split(" ");


        document.getElementById("clock").innerHTML="toLocaleString(): "+localeTime;
        document.getElementById("clock2").innerHTML="toString(): "+stringTime;

        console.log(localeSpilt[1]);
        console.log(stringSpilt[4]);

        document.title=localeSpilt[1];
        
    }, 1000);
}
window.onload=clock();