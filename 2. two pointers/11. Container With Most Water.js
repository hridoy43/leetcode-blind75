// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

const testCases = [
    [1,8,6,2,5,4,8,3,7], // output -> 49
    [1,1], // 1
    [10,9,8,7,6,5,4,3,2,1], // 25
]

// Brute Force with TLE -> O(n^2)
var maxArea = function(height) {
    let result = 0

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i+1; j < height.length; j++) {
            if (result < Math.min(height[i],height[j]) * (j-i)) {
                result = Math.min(height[i],height[j]) * (j-i)
            }
        }
    }
    return result;
};

// Using Two Pointers -> O(n)
var maxArea = function(height) {
    let result = 0
    let left = 0
    let right = height.length - 1

    while(left < right) {
        if (result < Math.min(height[left], height[right]) * (right - left)) {
            result = Math.min(height[left], height[right]) * (right - left)
        }

        if (height[left] <= height[right]) left++;
        else right--;
    }
    return result;
};

// console.log(maxArea(testCases[0]))
// console.log(maxArea(testCases[1]))
// console.log(maxArea(testCases[2]))