// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

const testInputs = [
    [100,4,200,1,3,2], // output -> 4 (The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4)
    [0,3,7,2,5,8,4,6,0,1], // output -> 9
    [9,1,4,7,3,-1,0,5,8,-1,6], // output -> 7
]

// General Approach
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return 1

    const sortedArrayOfUniqueNum = [...new Set(nums.sort((a,b) => a-b))]
    let tempCount = 0
    let longestConsecutive = 1

    for (let i=1; i < sortedArrayOfUniqueNum.length; i++) {
        if(sortedArrayOfUniqueNum[i-1]+1 !== sortedArrayOfUniqueNum[i]) {
            if (tempCount > longestConsecutive) {
                longestConsecutive = tempCount + 1
            } else tempCount = 0
        } else {
            tempCount += 1
            if (tempCount >= longestConsecutive) {
                longestConsecutive = tempCount + 1
            }
        }
    }
    return longestConsecutive
};


// Another Approach -> O(n)
var longestConsecutive = function(nums) {
    const numSet = new Set(nums)
    let longest = 0;

    for(let num of nums){
        if(!numSet.has(num - 1)){
            length = 0;
            while(numSet.has(num + length)){
                length += 1;
            }
            longest = Math.max(longest, length)
        }
    }
    return longest
};

// console.log(longestConsecutive(testInputs[0]))
// console.log(longestConsecutive(testInputs[1]))
// console.log(longestConsecutive(testInputs[2]))