// add function

function add(){
let a = parseInt(document.getElementById("num-1").value)
let b = parseInt(document.getElementById("num-2").value)

console.log(a);
console.log(b);

let result_1= a+b
return document.getElementById("output").innerHTML=("Addition of two number is-->"+result_1);

}

//sub function
function sub(){
let a = parseInt(document.getElementById("num-1").value)
let b = parseInt(document.getElementById("num-2").value)

let result_2= a-b;
document.getElementById("output").innerHTML=("Subtraction of two number is-->"+result_2);
    return a-b
}

//div functon
function div(){
let a = parseInt(document.getElementById("num-1").value)
let b = parseInt(document.getElementById("num-2").value)

let result_3= a/b;
document.getElementById("output").innerHTML=("Division of two number is-->"+result_3);
    return a/b
}

//mul function
function mul(){
    let a = parseInt(document.getElementById("num-1").value)
    let b = parseInt(document.getElementById("num-2").value)
    
    let result_4= a*b;
    document.getElementById("output").innerHTML=("Multiplication of two number is-->"+result_4);
    return a*b
}
function refresh(){
 document.getElementById("output").innerHTML= "Output:";
 document.getElementById("num-1").value=null
 document.getElementById("num-2").value=null

    
}

