const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-screen");

calculator.dataset.firstValue = "";
// calculator.dataset.sameNumber = "";

keys.addEventListener("click", e => {
    if(e.target.matches("button")){

        // key here refer to button pressed in calculator
        const key = e.target;               
        const action = key.dataset.action;
        const keyContent = key.innerHTML;

        const displayedNumber = display.innerHTML;
        const previousKeyType = calculator.dataset.previousKeyType;
        
        
        if(!action){
            
            if(displayedNumber === '0' || previousKeyType === "operator" || previousKeyType === 'calculate'){
                
                if(display.textContent === "0.")
                display.textContent = "0." + keyContent;
                else
                display.textContent = keyContent;

                calculator.dataset.previousKeyType = "";
                // Array.from(key.parentNode.children)
                // .forEach(k => k.classList.remove('is-depressed'));
            }
            else{
              display.textContent = displayedNumber + keyContent;
              calculator.dataset.previousKeyType = "number";
            }
            
        }
        
        else if(action === "add" || action === "subtract" || action === "multiply" || action === "divide"){
          
          // if(calculator.dataset.previousKeyType != "calculate")
          if(calculator.dataset.previousKeyType != "operator" && calculator.dataset.previousKeyType != "calculate"){

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNumber;

            if (firstValue != "") {
              // document.getElementById("print").innerHTML = firstValue + " and " + secondValue;
              display.textContent = calculate(firstValue, operator, secondValue)
            }

          }


          if(calculator.dataset.previousKeyType != "operator" || action != calculator.dataset.operator){
              
              calculator.dataset.previousKeyType = "operator";
              calculator.dataset.operator = action;
              calculator.dataset.firstValue = display.textContent;
            }
            
        }

        else if(action === "decimal"){
            
          if(previousKeyType === "operator" || previousKeyType === "calculate"){
            display.textContent = "0."
          }
          
          if(!display.textContent.includes("."))
          display.textContent = displayedNumber + ".";

          calculator.dataset.previousKeyType = "decimal";
        }
        
        else if(action === "clear"){
          display.textContent = "0";
          calculator.dataset.firstValue = "";
          calculator.dataset.operator = "";
          calculator.dataset.previousKeyType = "clear";
        }
                          

        else{

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue;
            
            if(previousKeyType != "calculate"){
              secondValue = displayedNumber;
              calculator.dataset.sameNumber = secondValue;
            }
            else{
              secondValue = calculator.dataset.sameNumber;
            }

            if(firstValue != ""){
              display.textContent = calculate(firstValue,operator,secondValue);
              calculator.dataset.firstValue = display.textContent;
            }

            calculator.dataset.previousKeyType = "calculate";
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