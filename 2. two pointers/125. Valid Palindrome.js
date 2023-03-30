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
    return newString === newString?.split('')?.reverse()?.join('')
};


// Better Approach without extra space O(n)
const isAlphaNumeric = (char) => { 
    return ((char.charCodeAt() >= 'A'.charCodeAt()) && char.charCodeAt() <= 'Z'.charCodeAt()) ||
    ((char.charCodeAt() >= 'a'.charCodeAt()) && char.charCodeAt() <= 'z'.charCodeAt()) ||
    ((char.charCodeAt() >= '0'.charCodeAt()) && char.charCodeAt() <= '9'.charCodeAt())
 }

 var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        while(left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        while(left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++;
        right--;
    }
    return true
};

// console.log(isPalindrome(testCases[0]))
// console.log(isPalindrome(testCases[1]))
// console.log(isPalindrome(testCases[2]))
// console.log(isPalindrome(testCases[3]))