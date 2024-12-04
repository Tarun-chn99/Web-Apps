// https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1

// function isSubset(a, b) {
//     // Your code here
//     a.sort((a,b)=>a-b);
//     b.sort((a,b)=>a-b);

//     let i=0,j=0,count=0;

//     while(i<a.length && j<b.length){

//         if(a[i] === b[j]){
//             count++;
//             i++;
//             j++;
//         }    
//         else if(a[i]<b[j])
//             i++;
//         else
//             return false;
//     }

//     return (count === b.length);
// }

let a = [11, 7, 1, 13, 21, 3, 7, 3], b = [11, 3, 7, 1, 7];

function isSubset(a, b) {
    // Your code here
    
    let mapping = new Map();
    
    for(let i=0; i<a.length; ++i){
        if(mapping.has(a[i])){
            let value = mapping.get(a[i])+1;
            mapping.set(a[i],value);
        }
        else
        mapping.set(a[i],1);
    }
    
    for(let x of mapping){
        console.log(x)
    }

    for(let i=0; i<b.length; ++i){
        if(!mapping.has(b[i]))
            return false;
        else{
            if(mapping.get(b[i])-1 === 0)
                mapping.delete(b[i]);
            else
                mapping.set(b[i],mapping.get(b[i])-1);
        }
        
    }
    
    return true;
}

console.log(isSubset(a,b));