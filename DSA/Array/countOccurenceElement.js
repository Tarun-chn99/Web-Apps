// Count occurence of key element in the sorted array

import {occurence} from './firstLastOccElement.js'

const inputArray = prompt("Enter values : ");
const arr = inputArray.split(" ").map((elem)=>parseInt(elem));
const key = parseInt(prompt("Enter key: "));

const count = occurence(arr,key,"last") - occurence(arr,key,"first") + 1;

console.log("Count: ",count);