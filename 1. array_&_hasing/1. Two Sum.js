// 1. Two Sum
// https://leetcode.com/problems/two-sum/

const testInputs = [
   { 
    nums:  [2,7,11,15], // output -> [0,1]
    target: 9
   },
   { 
    nums: [3,2,4], //output -> [1,2]
    target: 6
   },
   { 
    nums: [3,3], // output -> [0,1]
    target: 6
   }
]

// general approach -> O(n^2)
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target) return [i,j]
        }
    }
    return []
};

// using hashMap (time and memory complexity will be O(n) )
var twoSum = function(nums, target) {
    const hashMap = {}; // value:index
    for (let i=0; i<nums.length; i++) {
        const diff = target - nums[i]
        if (hashMap.hasOwnProperty(diff)){
            return [hashMap[diff],i]
        }
        hashMap[nums[i]] = i
    }
};

// console.log(twoSum(testInputs[0].nums,testInputs[0].target))
// console.log(twoSum(testInputs[1].nums,testInputs[1].target))
// console.log(twoSum(testInputs[2].nums,testInputs[1].target))
