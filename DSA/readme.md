findIntersection.js

Program to find intersection of two array
- The length of each array is greater than zero.
- Both the arrays are sorted in non-decreasing order.
- The output should be in the order of elements that occur in the original arrays.
- If there is no intersection present then return an empty array.



In case of named exports of variable and function, there reference gets passed to other file and are imported as constants that cannot be changed in other file.
Either named exports are done individually or passed inside object, at the end they are passed as objects only.

In case of default exports of variable and functions, there copies are passed to other file and are imported as constant that cannot be changed in other file.
Only one thing can be exported, either function or variable, there is a case in which any number of variable and function can be exported which is to wrap them inside
an object and import them as namespace in other file. When functions are exported using objects then they are passed as reference and can access their lexical environment