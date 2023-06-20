let buffer = 0;
let bufferstr = "";
let operator = "";
let multiply = null;
let divide = null;
let exponent = null;
let mod = null;

function buttonClick(num){
    let screen = document.getElementById("scr");
    if(screen.innerHTML === "00") screen.innerHTML="";
    bufferstr+=(num.toString());
    screen.innerHTML=bufferstr;
    console.log(bufferstr);
    multiply = document.getElementById("mult").innerHTML;
    divide = document.getElementById("div").innerHTML;
    exponent = document.getElementById("exp").innerHTML;
    modulo = document.getElementById("modulo").innerHTML;
}

function operatorClick(op){
    if(buffer<0){
        bufferstr = "";
        document.getElementById("scr").innerHTML = bufferstr;
        return;
    } 
    buffer = parseFloat(bufferstr);
    bufferstr = "";
    let screen = document.getElementById("scr");
    screen.innerHTML = "";
    console.log(buffer);
    operator = op;
    console.log(operator);
}

function unaryClick(op){
    buffer = parseFloat(bufferstr);
    bufferstr = "";
    if(buffer!=0) buffer = -buffer;
    console.log(buffer);
}

function erase(){
    if(bufferstr.length>1){
        let newbufferstr = bufferstr.substring(0,bufferstr.length-1);
        bufferstr = newbufferstr;
        console.log(bufferstr);
        let screen = document.getElementById("scr");
        screen.innerHTML = bufferstr;
    }
    else if(bufferstr.length == 1){
        bufferstr = "0";
        let screen = document.getElementById("scr");
        screen.innerHTML = bufferstr;
    }
}

function equal(){
    if(operator === "+"){
        buffer+=parseFloat(bufferstr);
        bufferstr = "";
    }
    else if(operator === "-"){
        buffer-=parseFloat(bufferstr);
        bufferstr = "";
    }
    else if(operator === multiply){
        buffer*=parseFloat(bufferstr);
        bufferstr = "";
    }
    else if(operator === divide){
        buffer/=parseFloat(bufferstr);
        bufferstr = "";
    }
    else if(operator === mod){
        buffer%=parseFloat(bufferstr);
        bufferstr = "";
    }
    else if(operator === exponent){
        buffer**=parseFloat(bufferstr);
        bufferstr = "";
    }
    let screen = document.getElementById("scr");
    screen.innerHTML = buffer.toString();
}

function clearFull(){
    bufferstr = "";
    let screen = document.getElementById("scr");
    screen.innerHTML = "";
}