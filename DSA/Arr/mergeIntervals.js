// https://leetcode.com/problems/merge-intervals/description/

const arr = [[1,3],[2,6],[8,10],[15,18]];

class Stack{

    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if (this.items.length == 0)
            return 'Underflow'
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    printStack(){
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

const mergeIntervals = arr => {

    if(typeof arr !== 'object' && arr.length)   
        return "Invalid input";
    
    let n = arr.length;
    if(n === 1) return arr;

    const stack = new Stack();

    for(let i=0; i<n; ++i){

        if(stack.isEmpty())
            stack.push(arr[i]);

        else{
            let [a,b] = stack.peek();
            let c = arr[i][0],
                d = arr[i][1];
            
            if(a<=d && b>=c){
                stack.pop();
                stack.push([a,Math.max(b,d)])
            }
            else
                stack.push(arr[i]);
        }
    }

    return stack.items;
}

var merge = function(arr) {

    arr.sort((a, b) => a[0] - b[0]);
    let resIdx = 0; 

    for (let i = 1; i < arr.length; i++) {

        if (arr[resIdx][1] >= arr[i][0])           
            arr[resIdx][1] = Math.max(arr[resIdx][1], arr[i][1]);
        else {            
            resIdx++;
            arr[resIdx] = arr[i];
        }
    }

    arr.length = resIdx+1;
    return arr;
};

console.log("Merged array: ",mergeIntervals(arr));