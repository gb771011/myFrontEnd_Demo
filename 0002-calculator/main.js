// main javascript sourse for \0002-calculator\index.html

 function keyIn1(input){
    //  將#ans的數字*10後，再加上點選的數字
    // key:被點擊的div的innerHTML
    var last=Number(document.getElementById("ans").innerText);
    var key=Number(input);
    
    var result=10*last+key;
    document.getElementById("ans").innerHTML=result;

/*    console.log("last number : "+last);
    console.log("Key in number : "+key);
    console.log("Result : "+result);*/
}

function object(){
        var input=document.getElementsByClassName("num");
        input.onclose=function(){
            console.log("123");
        };
        console.log(input);
        // for(i in input){console.log(i+" : "+input[i]);}
}

var numKey=function(){
    console.log(this.innerText);
};

window.onload=function(){
    //給所有div.num添加onclick的event listener
   var numList=document.getElementsByClassName("num");
   for(i=0;i<numList.length;i++){
       numList[i].onclick=numKey;
   }
   console.log("Add numKey() to each div.num`s onclick event");
};