// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

const testInputs = [
    ["eat","tea","tan","ate","nat","bat"],
    [""],
    ["a"],
    ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"], // output -> [["max"],["buy"],["doc"],["may"],["ill"],["duh"],["tin"],["bar"],["pew"],["cab"]]
    ["",""], // output -> [["",""]]
]

// general Approach -> O(nlogn) time complexity
var groupAnagrams = function(strs) {
    const anagramObj = {}
    
    for(let str of strs) {
        const key = [...str].sort().join('')
        if(anagramObj.hasOwnProperty(key)){
            anagramObj[key].push(str)
        } else {
            anagramObj[key] = [str]
        }
    }

    return Object.values(anagramObj)
};

// another approach -> 0(m*n) complexity
var groupAnagrams = function(strs) {
    const anagramMap = {}

    for(const str of strs){ // n length array
        let count = Array.from({length: 26}).fill(0)
        if(!str) {
            if(anagramMap.hasOwnProperty(str)){
                anagramMap[str].push(str)
            }
            else anagramMap[str] = [str]
        }
        else {
            for(const letter of str){ // m is the average length of the word
                count[letter.charCodeAt() - 97] += 1
            }
            const key = String(count)
            if(anagramMap.hasOwnProperty(key)){
                anagramMap[key].push(str)
            } else {
                anagramMap[key] = [str]
            }
        }
    }

    return Object.values(anagramMap)
};

// console.log(groupAnagrams(testInputs[0]))
// console.log(groupAnagrams(testInputs[1]))
// console.log(groupAnagrams(testInputs[2]))
// console.log(groupAnagrams(testInputs[3]))
// console.log(groupAnagrams(testInputs[4]))