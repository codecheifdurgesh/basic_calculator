var operand1=0;
var operand2=null;
var result=null;
var operator=null;


document.addEventListener('keypress',function(event){
    console.log(event.keyCode);
    if(event.keyCode==61 || event.keyCode==13){
        var display=document.getElementById("value");
        operand2=display.innerText;
        display.innerText="";
       
        result=eval(`${operand1}${operator}${operand2}`);
        console.log(typeof(result));
        if(isNaN(result) || !isFinite(result)){
            display.style.color="Red";
            display.innerText="Error !";
            operand1=null;
            operand2=null;
            operator=null
        }
        else{
        display.innerText=result;
        operand1=result;
    }
        }
    
    else if(event.keyCode==43){
        var display=document.getElementById("value");
        operand1=display.innerText;
        display.innerText="";
        operator=String.fromCharCode(event.keyCode);
    }
    else if(event.keyCode==45){
        var display=document.getElementById("value");
        operand1=display.innerText;
        display.innerText="";
        operator=String.fromCharCode(event.keyCode);
    }
    else if(event.keyCode==47){
        var display=document.getElementById("value");
        operand1=display.innerText;
        display.innerText="";
        operator=String.fromCharCode(event.keyCode);
    }
    else if(event.keyCode==42){
        var display=document.getElementById("value");
        operand1=display.innerText;
        display.innerText="";
        operator=String.fromCharCode(event.keyCode);
    }
    else if(event.keyCode==37){
        var display=document.getElementById("value");
        operand1=display.innerText;
        display.innerText="";
        operator=String.fromCharCode(event.keyCode);
    }
   
   
     else{
        if(event.keyCode>=48 && event.keyCode<=57){
    var display=document.getElementById("value");
    display.innerText+=String.fromCharCode(event.keyCode);
        }
    }   

})

var btn=document.getElementsByClassName("button");
console.log(btn);
for(let i=0;i<btn.length;i++){

    btn[i].addEventListener('click',function(){
        if(btn[i].innerText=="="){
            var display=document.getElementById("value");
            operand2=display.innerText;
            display.innerText="";
           
            result=eval(`${operand1}${operator}${operand2}`);
            console.log(typeof(result));
            if(isNaN(result) || !isFinite(result)){
                display.style.color="Red";
                display.innerText="Error !";
                operand1=null;
                operand2=null;
                operator=null
            }
            else{
            display.innerText=result;
            operand1=result;
        }
            }
        
        else if(btn[i].innerText=="+"){
            var display=document.getElementById("value");
            operand1=display.innerText;
            display.innerText="";
            operator=btn[i].innerText;
        }
        else if(btn[i].innerText=="-"){
            var display=document.getElementById("value");
            operand1=display.innerText;
            display.innerText="";
            operator=btn[i].innerText;
        }
        else if(btn[i].innerText=="/"){
            var display=document.getElementById("value");
            operand1=display.innerText;
            display.innerText="";
            operator=btn[i].innerText;
        }
        else if(btn[i].innerText=="*"){
            var display=document.getElementById("value");
            operand1=display.innerText;
            display.innerText="";
            operator=btn[i].innerText;
        }
        else if(btn[i].innerText=="%"){
            var display=document.getElementById("value");
            operand1=display.innerText;
            display.innerText="";
            operator=btn[i].innerText;
        }
        else if(btn[i].innerText=="+/-"){
            var display=document.getElementById("value");
            operand1=display.innerText;
operand1=operand1*-1;
            display.innerText=operand1;
            
        }
        else if(btn[i].innerText=="AC"){
            var display=document.getElementById("value");
            display.innerText="";
            operand1=0;
            operand2=null;
            operator=null;
        }
         else{
        var display=document.getElementById("value");
        display.innerText+=btn[i].innerText;
        }   
    });
}
