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

// More sophisticated approach -> O(n)
var encode = (strs) => {
    let res = ""
    for(str of strs) {
        res += str.length + '#' + str // example: 5#lint
    }
    return res
}

var decode = (str) => {
    const res = []
    let i = 0;

    while (i < str.length) {
        let j = i;
        while(str[j] !== '#') {
            j += 1;
        }
        const length = parseInt(str[j-1])
        res.push(str.substring(j+1, j+length+1))

        i = j + 1 + length
    }
    return res
}

// console.log(encode(testInputs[0]))
// console.log(decode(encode(testInputs[0])))

// console.log(encode(testInputs[1]))
// console.log(decode(encode(testInputs[1])))