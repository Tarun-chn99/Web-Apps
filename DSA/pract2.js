// window.addEventListener("keydown",(e)=>{
//     if(e.keyCode === 13){

//         const task = document.createElement('li');
//         const data = document.getElementById('task').value;

//         task.innerText = data;
        
//         document.getElementById('list').append(task);
//         document.getElementById('task').value = ''
//     }
// })




function countValidWords(s) {

    if(typeof s !== 'string' || !s.length) return 0;
    
    let isAlphanumeric = false, 
        isVowel = false, 
        isConsonant = false,
        count = 0,
        i=0,
        j=0,
        n = s.length;
        
    while(j<n){
        if(s[j] !== ' '){
            
            let charCode = s.charCodeAt(j);
            
            if((charCode >= 49 && charCode <= 57) || (charCode >=65 && charCode <= 90) || (charCode >=97 && charCode <=122) )
                isAlphanumeric = true;
            else
                isAlphanumeric = false;
                
            if(s[j] === 'a' || s[j] === 'e' || s[j] === 'i' || s[j] === 'o' || s[j] === 'u')
                isVowel = true;
                
            if((charCode >=65 && charCode <= 90) || (charCode >=97 && charCode <=122))
                isConsonant = true;
                
            if(j+1 === n){
                if(isAlphanumeric && isVowel && isConsonant && (j-i+1) >= 3)
                    count++;
            }
            else
                j++;
        }
        else{
            
            if(isAlphanumeric && isVowel && isConsonant && ((j-i) >= 3))
                count++;

            isAlphanumeric = false;
            isConsonant = false;
            isVowel = false;
            j++;
            i = j;
        }
    }
    
    return count;

}


console.log(countValidWords("this is  an example string234"))























// function cache(){
//     let data;

//     return async function fetchData(){

//         if(data)
//             return data;
//         else{
//             const response = await fetch("https://www.turing.com/_next/data/9db9432e1a77458d13e726c19eae861b22400106/en/get-started.json");
//             data = await response.json();
//         }
//         return data;
//     }
// }

// let fetchData = cache();
// console.log(await fetchData())

// console.log(await fetchData())





























// class school{

//     constructor(args){
//         console.log(arguments)
//         this.name = args;
//     }

//     getName(){
//         console.log(arguments)
//         return this.name;
//     }
// }

// const obj = new school("bishop conrad school");
// console.log(obj)






























// let a=2;

// let parent = {
//     a:1,
//     prototype:{    
//         hello: () => {
//             console.log(parent);
//         }
//     }    
// } 

// let child = {
//     a:1
// }

// child.__proto__ = parent.prototype;

// child.hello()

// function fn(){
//     console.log("hi")
// }

// let obj = new fn();
// console.log(obj.__proto__ === fn.prototype)