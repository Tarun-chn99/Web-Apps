// https://www.geeksforgeeks.org/three-way-partitioning-of-an-array-around-a-given-range/

function threeWayPartition(arr, n, lowVal, highVal)
{

    let start = 0, end = n - 1;
 
    // Traverse elements from left
    for(let i = 0; i <= end;)
    {   
        console.log(i,'th round');
        console.log('i: ',i,'j: ',start,'k: ',end);

        if (arr[i] < lowVal)
            [arr[start],arr[i]] = [arr[i++],arr[start++]];

        else if(arr[i] > highVal)
        {     
            let temp = arr[end];
            arr[end] = arr[i];
            arr[i] = temp;
            end--;
            // [arr[end],arr[i]] = [arr[i],arr[end--]];
        }
        else
        i++;

    console.log(arr)
        console.log('i: ',i,'j: ',start,'k: ',end);
    }
    console.log(arr)
}

const arr = [ 1,4,3,6,7,1 ],a=1,b=3;

console.log("Output: ",threeWayPartition(arr,arr.length,a,b));