// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

const testInput_s = ["anagram","rat"]
const testInput_t = ["nagaram","car"]

// general approach
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    if([...s].sort().join('') === [...t].sort().join('')) return true
    return false
};

// using hashMap
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const mapped_s = new Map() 
    const mapped_t = new Map() 
    
    for(let i=0; i<s.length; i++){
        mapped_s.set(s[i],1 + mapped_s.get(s[i]) || 0)
        mapped_t.set(t[i],1 + mapped_t.get(t[i]) || 0)
    }
    
    for(key of mapped_s.keys()) {
        if (mapped_s.get(key) !== mapped_t.get(key)) return false
    }
    return true
};

// Another Approach
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const hashed_s = {} 
    const hashed_t = {} 
    
    for(let i=0; i<s.length; i++){
        hashed_s[`${s[i]}`] = hashed_s.hasOwnProperty(`${s[i]}`) ? hashed_s[`${s[i]}`] + 1 : 1;
        hashed_t[`${t[i]}`] = hashed_t.hasOwnProperty(`${t[i]}`) ? hashed_t[`${t[i]}`] + 1 : 1;
    }
    
    for(key in hashed_s) {
        if(hashed_s[key] !== hashed_t[key]) return false
    }
    return true
};

// console.log(isAnagram(testInput_s[0], testInput_t[0]))
// console.log(isAnagram(testInput_s[1], testInput_t[1]))