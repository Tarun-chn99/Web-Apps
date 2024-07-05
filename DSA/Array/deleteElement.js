import {findIndex} from './findIndex.js'

const arr = [1,2,9,3,4,6];

function deleteFromEnd(arr,length){
    
    const deletedElement = arr[arr.length-1];
    arr.length -= 1;

    return deletedElement;
}

function deleteFromStart(arr){

    let deletedElement = arr[0];
    
    for(let i=0; i+1<arr.length; ++i)
        arr[i] = arr[i+1];

    arr.length -= 1;
    return deletedElement;
}

function deleteFromMiddle(arr,element){

    const index = findIndex(arr,arr.length,element);
    
    for(let i=index; i<arr.length;++i)
        if(i+1<arr.length)
            arr[i] = arr[i+1];

    arr.length -= 1;
    console.log(arr);
}

function deleteElement(arr,logic,element){
    let deletedElement = logic(arr,element);
    return deletedElement;
}


deleteElement(arr,deleteFromMiddle,9);