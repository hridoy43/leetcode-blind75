// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

const testInputs = [
    [1,2,3,4], // output -> [24,12,8,6]
    [-1,1,0,-3,3], // [0,0,9,0,0]
    Array.from({length: 50000}).fill(-1), // This has TLE issue
]

// General Approach with TLE
var productExceptSelf = function(nums) {
    const productArr = []

    for (let key in nums) {
        for (let index in nums) {
            if (index === key) {
                continue;
            }
            else if (nums[index] === 0) {
                productArr[key] = 0;
                break;
            }
            else if (!productArr[key]) productArr[key] = nums[index]
            else productArr[key] *= nums[index]


        }
    }
    return productArr
}


// Another approach with O(n)
var productExceptSelf = function(nums) {
    const productArr = []

    let prefix = 1;
    for(key in nums){
        productArr[key] = prefix;
        prefix *= nums[key]
    }

    let postfix = 1;
    for(let i = nums.length-1; i >= 0; i--){
        productArr[i] *= postfix;
        postfix *= nums[i]
    }

    return productArr
}

// console.log(productExceptSelf(testInputs[0]))
// console.log(productExceptSelf(testInputs[1]))
// console.log(productExceptSelf(testInputs[2]))