// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters

const testCases = [
    "abcabcbb", // output -> 3
    "bbbbb", // 1
    "pwwkew", // 3
    "au", // 2
    "dvdf", // 3
]


/**
 * Brute Force
 * two pointer
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length

    let tempSubString = '';
    let longestSubstring = '';
    let left = 0;
    let right = 1;

    while(right < s.length) {
        tempSubString = s.slice(left,right);

        if (!tempSubString.includes(s[right])) {
            tempSubString = s.slice(left,right+1);
            right++;
        } else {
            if (tempSubString.length > longestSubstring.length){
                longestSubstring = tempSubString;
            }
            left++;
        }
    }
    return  Math.max(longestSubstring.length, tempSubString.length)
};

/**
 * Another Approach (Sliding window)
 * time O(n)
 * space O(n)
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set()
    let longestSubstringLength = 0;
    let left = 0;

    for (let right of s) {
        while(charSet.has(right)) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(right);
        longestSubstringLength = Math.max(longestSubstringLength, charSet.size)
    }
    return longestSubstringLength;
};

// console.log(lengthOfLongestSubstring(testCases[0]))
// console.log(lengthOfLongestSubstring(testCases[1]))
// console.log(lengthOfLongestSubstring(testCases[2]))
// console.log(lengthOfLongestSubstring(testCases[3]))
// console.log(lengthOfLongestSubstring(testCases[4]))