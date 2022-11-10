var operand1=0;
var operand2=null;
var result=null;



var btn=document.getElementsByClassName("button");
console.log(btn);
for(let i=0;i<btn.length;i++){

    btn[i].addEventListener('click',function(){
        if(btn[i].innerText=="="){
            var display=document.getElementById("value");
            operand1=display.innerText;
            display.innerText="";
            display.innerText+=btn[i].innerText;
            display.innerText="";
            console.log("equals find");
        }
        else{
        var display=document.getElementById("value");
        display.innerText+=btn[i].innerText;
        }   
    });
}
