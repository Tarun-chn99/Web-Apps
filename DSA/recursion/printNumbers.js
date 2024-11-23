// print numbers upto n

let size = 20;

const print = n => {
    
    if(n > size)
        return;

    console.log(n);
    print(n+1);
} 

print(1);