const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-screen");

keys.addEventListener("click", e => {
    if(e.target.matches("button")){

        // key here refer to button pressed in calculator
        const key = e.target;               
        const action = key.dataset.action;
        const keyContent = key.innerHTML;

        const displayedNumber = display.innerHTML;
        const previousKeyType = calculator.dataset.prevKeyType;
        
        
        if(!action){
            
            if(displayedNumber === '0' || previousKeyType === "operator"){
                display.textContent = keyContent;
                calculator.dataset.prevKeyType = "";
                Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'));
            }
            else
            display.textContent = displayedNumber + keyContent;
            
        }
        
        else if(action === "add" || action === "subtract" || action === "multiply" || action === "divide"){
                
            // if(calculator.dataset.firstValue){

                key.classList.add('is-depressed');
                calculator.dataset.prevKeyType = "operator";
                calculator.dataset.firstValue = displayedNumber;
                calculator.dataset.operator = action;
            // }
        }

        else if(action === "decimal"){
            
            if(previousKeyType === "operator"){
                
            }

            if(!display.textContent.includes("."))
            display.textContent = displayedNumber + ".";
        }
        
        else if(action === "clear")
        display.textContent = "0";

        else{

            const firstValue = calculator.dataset.firstValue;
            const secondValue = displayedNumber;
            const operator = calculator.dataset.operator;

            display.textContent = calculate(firstValue,operator,secondValue);
        }
    }
})

const calculate = (n1,operator,n2) => {
    let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
    return result;
}