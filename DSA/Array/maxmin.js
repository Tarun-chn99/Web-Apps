const arr = [3,5,2,1,6,7];

const findElement = (arr,logic) => {

    logic = logic.toLowerCase();
    let element = (logic === 'max' ? -Infinity : Infinity);

    for(let i=0; i<arr.length; ++i)
        if(logic === "max"){
            if(element < arr[i])
            element = arr[i];
        }else
            if(element > arr[i])
            element = arr[i];                
            
    return element;
}

console.log(findElement(arr,'max'));
console.log(findElement(arr,'min'));

