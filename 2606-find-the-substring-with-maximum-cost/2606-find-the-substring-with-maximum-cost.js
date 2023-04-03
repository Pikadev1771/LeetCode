/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */


function maxSubArr(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1])
    } return Math.max(...nums)
}


var maximumCostSubstring = function(s, chars, vals) {

    // let alphabet = {a: 1, b: 2, c: 3, d: 4...}

// 각 알파벳 숫자 지정
    let alphabet = {}
    let char = 'a'
    alphabet[char] = 1

for(let i = 1; i < 26; i++) {
    char = String.fromCharCode(char.charCodeAt()+1) // 숫자 -> 문자
    alphabet[char] = i+1
}

// vals에 있는 숫자 교체
for(let i = 0; i< chars.length; i++) {
    alphabet[chars[i]] = vals[i]
}

// s 배열의 숫자 버전 만들기
let arr = []
for(let i = 0; i < s.length; i++) {
    arr.push(alphabet[s[i]])
}

let result = maxSubArr(arr)

if(result < 0) {
    return 0
} else {
    return result
}


};