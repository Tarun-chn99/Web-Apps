//  https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1

const trappingWater = arr => {

    let left = 0;
    let right = arr.length-1;
    let result = 0;
    let l_max=0,r_max=0;

    while(left <= right){

        if(l_max >= r_max){

            result += Math.max(0,r_max - arr[right]);

            r_max = Math.max(r_max,arr[right]);

            right--;

        }
        else{

            result += Math.max(0,l_max - arr[left]);

            l_max = Math.max(l_max,arr[left]);

            left++;

        }

    }

    return result;
}

const trappingWater2 = arr => {

        res = 0; 
        let n = arr.length;
    
        if (n <= 2) {       // If there are less than 3 elements, no water can be trapped
            return 0;
        }
    
        const leftMax = [], rightMax = [];
    
        // Calculate the maximum heights on the left of each element
        leftMax[0] = arr[0];
        for (let i = 1; i < n; i++) {
            leftMax[i] = max(leftMax[i - 1], arr[i]);
        }
    
        // Calculate the maximum heights on the right of each element
        rightMax[n - 1] = arr[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = max(rightMax[i + 1], arr[i]);
        }
    
        // Calculate the trapped water
        for (let i = 1; i < n - 1; i++) {
            res += min(leftMax[i], rightMax[i]) - arr[i];
        }
    
        return res;
    }

// Stack approach

// class Solution {

//     public:
//         // Function to find the trapped water between the blocks.
//         long long trappingWater(vector<int> &arr) {
//             int n = arr.size();  // Get the size of the input array
//             if (n == 0) return 0;  // Handle empty array case
    
//             // Stack to store indices of the bars
//             stack<int> st;
        
//             // Variable to store the final result
//             long long ans = 0;
        
//             // Loop through each bar in the array
//             for (int i = 0; i < n; i++) {
        
//                 // Remove bars from the stack until the condition holds
//                 while (!st.empty() && arr[st.top()] < arr[i]) {
        
//                     // Store the height of the top bar and pop it
//                     int pop_height = arr[st.top()];
//                     st.pop();
        
//                     // If the stack becomes empty, break as there's no left boundary
//                     if (st.empty()) {
//                         break;
//                     }
        
//                     // Calculate the distance between the left and right boundaries
//                     int distance = i - st.top() - 1;
        
//                     // Calculate the minimum height between the left and right boundaries
//                     int min_height = min(arr[st.top()], arr[i]) - pop_height;
        
//                     // Add the water trapped to the final answer
//                     ans += (long long)distance * min_height;
//                 }
        
//                 // Push the current index to the stack
//                 st.push(i);
//             }
//             return ans;
//         }
//     };