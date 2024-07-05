
Function.prototype.myCall = function(context={},...args){
    if(typeof this !== 'function')
    throw new Error(this + "is not callable");

    context.fn = this;
    context.fn(...args);
}

Function.prototype.myApply = function(context={},args=[]){
    if(typeof this !== 'function')
    throw new Error(this + "is not callable");

    if(!Array.isArray(args))
    throw new TypeError("CreateListFromArrayLike called on non-object");
    
    context.fn = this;
    context.fn(...args);
}

Function.prototype.myBind = function(context={},...args){
    if(typeof this !== 'function')
    throw new Error(this + "is not callable");

    context.fn = this;
    return function(){
        return context.fn;
    }
}



function printName(){
    console.log("Name: ",this.name);
}

const obj = {
    name: "Tarun"
}

const newfn = printName.myBind(obj);
console.log(newfn());
























// var length = 4;

// const cb = () => {
//     console.log(this.length);
// }

// const obj = {
//     length:5,
//     method(fn){
//         fn();
//     }
// }

// obj.method(cb);

// const calc = {
//     total:0,
//     add(num){
//         this.total+=num;
//         return this;
//     },
//     multiply(num){
//         this.total*=num;
//         return this;
//     },
//     subtract(num){
//         this.total-=num;
//         return this;
//     }
// }

// console.log(calc.add(10).multiply(5).subtract(30).add(10).total)




// const getData = () => {
//     console.log("Hello...")
// }


// function x(){
//     let timer;
//     return function(){
//         console.log("Before setTimeout: ",timer);
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             getData.apply(this,arguments);
//         },500);
//         console.log("After setTimeout: ",timer);

//     }
// }

// const y = x();


















// Curry implementation
// Convert f(a,b,c) to f(a)(b)(c)

// function curry(a,b,c){
//     return (a) => {
//         return function(b){
//             return function(c){
//                 return a+b+c;
//             }
//         }
//     }
// }

// const sum = curry();
// console.log(sum(1)(2)(3));



















// Array.prototype.myMap = function(callBack){


//     let arr = [];
//     for(let i=0; i<this.length; ++i)
//         arr.push(callBack(this[i],i,this));
    
//     return arr;
// }

// let arr = [1,2,3,4];

// Array.prototype.myFilter = function(callBack){

//     let arr = [];
//     for(let i=0; i<this.length; ++i)
//         if(callBack(this[i],i,this) === true)
//         arr.push(this[i]);

//     return arr;
// }

// Array.prototype.myReduce = function(callBack,initialValue){
    
//     let acc = initialValue;
//     for(let i=0; i<this.length; ++i)
//         acc = acc ? callBack(acc,this[i]) : this[i];
    
//     return acc;
// }

// function callBack(accumulator,current,index,arr){
//     return accumulator + current;
// }




























// function x(){
//     let a=2;
//         function y(x){

//             setTimeout(function(){
//                 console.log(x);
//                 x1();
//                 // console.log(a);
//             },x*1000);
//         }

//         function x1(){
//             console.log(a);
//         }
//     return y;
// }

// const fn = x();
// console.log(fn);
// fn(3);

// (function() {
//     // Private variables and functions here
//     let count = 0;
  
//     function increment() {
//       count++;
//     }
  
//     function getCount() {
//       return count;
//     }
  
//     // Public API (exposed functions/variables)
//     window.utils = {increment,getCount}; // OR return { increment, getCount }
//   })();
  
  













// function outer(){
//     let z=2;
//     this.print = function(){
//         console.log(z)
//     }
// }
// const fn = new outer();
// console.log(fn.print());





// const promise = new Promise(function(resolve,reject){
//     resolve("promised resolved");
// });

// console.log(promise);

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("p1");
//     },5000);
// })
// const p2 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("p2");
//     },1000);
// })
// const p3 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("p3");
//     },1000);
// })

// const result =  Promise.race([p1,p2,p3]);
// console.log(result);


// let a=6;
// function x(){
//     let a=0;
//     function y(){
//         let b=9;
//         function z(){
//             let c=10;
//             console.log(a,b,c);
//         }
//         return z;
//     }
//     return y;
// }

// x()()();

// function counter(){
//     var c=0;
//     return function inc(){
//         c++;
//         console.log(c);
//     }
// }

// let count = counter();
// count();
// count();
// let x=2;
// function Counter(){
//     let x=1,y=2;
//     var count=0;
//     this.incrementCount = function(){
//         count++;
//         console.log(x);
//     }
//     this.showCounter = function(){
//         console.log("Count: ",count);
//     }
// }

// const obj = new Counter();
// obj.showCounter();
// obj.incrementCount();
// obj.incrementCount();
// obj.showCounter();
// console.log(obj.count)

// function Timer(){
//     let min=0;
//     let sec=0;
//     // let intervalId

//     this.start = function(){
//         let x = setInterval(()=>{
//             if(sec>60){
//                 min++;
//                 sec-=60;
//             } 
//             else
//             sec++;
//         },100);
//     }
//     this.stop = function(){
//         clearInterval();
//     }
// }

// const timer = new Timer();
// timer.start();
// timer.sec;
// let minutes=0;
// let seconds=0;
// let intervalId;

// const startButton = document.getElementById("start");
// startButton.addEventListener("click",()=>{
    
//     intervalId = setInterval(()=>{
    
//         if(seconds>60){
//             seconds-=60;
//             minutes++;
//         }
//         else
//         seconds++;
    
//         document.getElementById("minutes").innerHTML = (minutes === 0 ? "00" : (minutes>9) ? minutes : "0"+ minutes);
//         document.getElementById("seconds").innerHTML = (seconds<10 ? "0"+seconds : seconds)
//     },1000);
// });

// document.getElementById("stop").addEventListener("click",()=>{
//     clearInterval(intervalId);
// });

// document.getElementById("reset").addEventListener("click",()=>{
//     document.getElementById("minutes").innerHTML = "00";
//     document.getElementById("seconds").innerHTML = "00";
// });