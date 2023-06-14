let b = "";
let action = "";
let a = "";



function display(z){
    document.getElementById("screen").innerHTML += z.innerHTML;
    b += z.innerHTML;
}

function fillAction(z){
    if(b){
        action += z.innerHTML;
        document.getElementById("screen").innerHTML += z.innerHTML;
        a = b;
        b = "";
    }
}

function empty(){
    document.getElementById("screen").innerHTML = "";
    a = "";
    b = "";
    action = "";
}

function answer(){
    let x = Number(a);
    let y = Number(b);
    let z;

    if(action === '+')
    z = x + y;
    else if(action === '-')
    z = x - y;
    else if(action === 'x')
    z = x * y;
    else if(action === '/')
    z = x / y;

    document.getElementById("screen").innerHTML = "";
    document.getElementById("screen").innerHTML = z;

    setInterval(empty,500);
    
    
}   