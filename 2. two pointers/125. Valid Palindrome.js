// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

const testCases = [
    "A man, a plan, a canal: Panama", // output -> true
    "race a car", // false
    " ", // true
    "ab_a", // true
]

// brute force
var isPalindrome = function(s) {
    const newString = (s.match(/[a-zA-Z0-9]/g)?.join('') ?? "").toLowerCase()
    if(newString=== newString?.split('')?.reverse()?.join('')) return true
    return false
};

// console.log(isPalindrome(testCases[0]))
// console.log(isPalindrome(testCases[1]))
// console.log(isPalindrome(testCases[2]))
// console.log(isPalindrome(testCases[3]))