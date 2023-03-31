// 15. 3Sum
// https://leetcode.com/problems/3sum/

const testCases = [
    [-1,0,1,2,-1,-4], // output -> [[-1,-1,2],[-1,0,1]]
    [0,1,1], // []
    [0,0,0], // [[0,0,0]]
]


// two pointers approach -> O(n^2)
var threeSum = function(nums) {
    const triplets = []
    nums.sort((a,b) => a-b) // O(nlogn)

    for (const [index, value] of nums.entries()) { // O(n^2)
        if(index > 0 && value === nums[index-1]) {
            continue;
        }

        let left = index + 1;
        let right = nums.length - 1;

        while(left < right) {
            if (nums[index] + nums[left] + nums[right] < 0) {
                left++;
            } else if (nums[index] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                triplets.push([nums[index], nums[left], nums[right]])
                left++;
                while(nums[left] === nums[left-1] && left < right) {
                    left++;
                }
            }
        }
    }

    return triplets
};

// console.log(threeSum(testCases[0]))
// console.log(threeSum(testCases[1]))
// console.log(threeSum(testCases[2]))