// https://www.geeksforgeeks.org/problems/middle-of-three2926/1

function middle(A, B, C){

    return (A < B) ? ((A > C) ? A : Math.min(B,C)) : 
                     ((B > C) ? B : Math.min(A,C));
}