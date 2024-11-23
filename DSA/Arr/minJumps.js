// https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1

let arr = [9 ,10 ,1 ,2 ,3 ,4 ,8 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1];

const minJumps = (arr) => {
    // code here
let jump = 0,
    i = 0,
    n = arr.length,
    curr = 0;

    while (i < n) {
        curr = arr[i];

        if (curr + i >= n - 1) {
            jump++;
            break;
        }

        if (curr === 0) {
            jump = -1;
            break;
        }

        let maxReach = -Infinity,
            pos = i;

        for (let j = i + 1; j <= i + curr && j < n; j++) {
            if (arr[j] + j > maxReach) {
                maxReach = arr[j] + j;
                pos = j;
            }
        }
        
        i = pos;
        jump++;
    }

return jump;
}

console.log("Minimum jumps: ",minJumps(arr));