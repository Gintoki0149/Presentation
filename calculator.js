let a = null;
let b =null;
let bufferstr = "";
let operator = null;
let multiply = null;
let divide = null;
let exponent = null;
let mod = null;
let root = null;
let screen;
let equalclicked = false;
function buttonClick(num){
    screen = document.getElementById("scr");
    multiply = document.getElementById("mult").innerHTML;
    divide = document.getElementById("div").innerHTML;
    exponent = document.getElementById("exp").innerHTML;
    modulo = document.getElementById("modulo").innerHTML;
    root = document.getElementById("sqrt").innerHTML
    let str = num.toString();
    if(equalclicked){
        bufferstr = "";
        screen.innerHTML = bufferstr;
        equalclicked = false;
    } 
    if(str === multiply){
        str = "*";
    }
    else if(str === divide){
        str = "/";
    }
    else if(str === exp){
        str = "**";
    }
    bufferstr+=str;
    screen.innerHTML=bufferstr;
    console.log(bufferstr);
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
        bufferstr = "";
        let screen = document.getElementById("scr");
        screen.innerHTML = bufferstr;
    }
}

function equal(){
    screen = document.getElementById("scr");
    let result = screen.innerHTML.toString().replace(root,"math.sqrt");
    result = result.replace(exponent,"**");
    console.log(result);
    result = result.replace("log","math.log10");
    screen.innerHTML = eval(result);
    equalclicked = true;
}

function clearFull(){
    bufferstr = "";
    let screen = document.getElementById("scr");
    screen.innerHTML = "";
}
