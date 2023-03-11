// 217 Contains Duplicate

// test input
const testInput = [
    [1,1,1,3,3,4,3,2,4,2],
    [1,2,3,1],
    [1,2,3,4],
]

// solution
var containsDuplicate = function(nums) {
    const uniqueNumSet = new Set(nums);
    return uniqueNumSet.size !== nums.length;
};

// Another Approach
// HashSet
var containsDuplicate = function(nums) {
    const hashSet = new Set();
    for (n of nums) {
        if(hashSet.has(n)) return true
        hashSet.add(n)
    }
    return false
};

// Other Approach
var containsDuplicate = function(nums) {
    let numbObj = {}
    for (i=0;i<nums.length;i++){
        if(i !== 0 && numbObj.hasOwnProperty(nums[i])) return true
        numbObj[`${nums[i]}`] = nums[i]
    }
    return false
};

// console.log(containsDuplicate(testInput[0]))
// console.log(containsDuplicate(testInput[1]))
// console.log(containsDuplicate(testInput[2]))