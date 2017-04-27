function clock(){
    setInterval(function() {
        var date=new Date();
        var localeTime=date.toLocaleString();
        var stringTime=date.toString();

        var localeSpilt=localeTime.split(" ");
        var stringSpilt=stringTime.split(" ");


        document.getElementById("clock").innerHTML="toLocaleString(): "+localeTime;
        document.getElementById("clock2").innerHTML="toString(): "+stringTime;
<<<<<<< HEAD
        // console.log(localeSpilt[1]);
        // console.log(stringSpilt[4]);
        
    }, 1000);
}
clock();

var divt1=document.getElementById("t1");
for (i in divt1){
    console.log(i+" = "+divt1[i]);
}
=======

        console.log(localeSpilt[1]);
        console.log(stringSpilt[4]);

        document.title="Now:"+localeSpilt[1];
        
    }, 1000);
}
window.onload=clock();
>>>>>>> a685da879abe697888928b7825c56efe2dc651b2
