const arr = [1,4,2,6,4,2];

function insertAtEnd(arr,element){
    arr[arr.length] = element;
    console.log(arr);
}

function insertAtStart(arr,element){
    
    for(let i=arr.length; i>0; --i)
        arr[i] = arr[i-1];
    
    arr[0] = element;
    console.log(arr);
}

function insertAtIndex(arr,element,index){

    if(index>arr.length-1 || index<0)
    arr[index] = element;
    else{

        for(let i=arr.length; i>index; --i)
        arr[i] = arr[i-1];
        
        arr[index] = element;
    }
    console.log(arr);
}

