let a = "";
let b = "";
let action = "";

// Function to show data and calculation on screen

let display = z => {

    let key = z.innerHTML;
    defaultScreen();

    if(key === '+' || key === '-' || key === 'x' || key ==='/'){

            if(b != ""){

                if(a != ""){
                    let x = answer();
                    action = key;
                    a = x;
                    document.getElementById("screen").innerHTML = a.toString() + key;
                }
                else{
                    action = key;
                    document.getElementById("screen").innerHTML += key;
                    a = b;
                }
                b = "";
            }

    }
    else{
        document.getElementById("screen").innerHTML += key;
        b += key;
    }
}   

//  Clearing the screen of calculator

let clearScreen = () => {
    document.getElementById("screen").innerHTML = "0";
    a = "";
    b = "";
    action = "";
}

// Function for calculating the answer

let answer = () => {
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

    action = "";
    return z;    
}   

// Function for showing the answer

let showAnswer = () => {
    let z = answer();
    document.getElementById("screen").innerHTML = z;
}


// Function for clearing the default zero on sreen

let defaultScreen = () => {
    
    let screenDisplay = document.getElementById("screen").innerHTML;

    if(screenDisplay === '0')
    document.getElementById("screen").innerHTML = "";

}