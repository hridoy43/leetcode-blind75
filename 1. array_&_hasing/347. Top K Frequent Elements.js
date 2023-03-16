// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements

const testInputs = [
    [1,1,1,2,2,3], // output -> [1,2]
    [1], // Output -> [1]
]

// General Approach -> O(nlogn)
var topKFrequent = function(nums, k) {
    const countMap = {}
    
    for (let num of nums){
        countMap[num] = (countMap[num] || 0) + 1
    }

    const keys = Object.keys(countMap)

    if (keys.length === k) return keys.map(value => +value)
    return keys.sort((a,b) => countMap[b] - countMap[a]).slice(0,k).map(value => +value)
};


// Another Approach -> O(n)
var topKFrequent = function(nums, k) {
    const countMap = new Map()
    const bucket = []
    const result = []
    
    for (let num of nums) {
        countMap.set(num,(countMap.get(num) || 0) + 1)
    }
    
    for (let [num,freq] of countMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num)
    }
    
    for (let i = bucket.length-1; i>=0; i--){
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    
    return result
};

// console.log(topKFrequent(testInputs[0],2))
// console.log(topKFrequent(testInputs[1],1))