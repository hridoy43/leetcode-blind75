// 659 · Encode and Decode Strings
// https://leetcode.com/problems/encode-and-decode-strings/
// https://www.lintcode.com/problem/659/

const testInputs = [
    ["lint","code","love","you"],
    ["we", "say", ":", "yes"]
]

// general approach
var encode = (strs) => {
    return strs.join('_:_')
}

var decode = (str) => {
    return str.split('_:_')
}


// console.log(encode(testInputs[0]))
// console.log(decode(encode(testInputs[0])))

// console.log(encode(testInputs[1]))
// console.log(decode(encode(testInputs[1])))