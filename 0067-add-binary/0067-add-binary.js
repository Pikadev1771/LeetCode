/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum =  BigInt(`0b${a}`) + BigInt(`0b${b}`) // 10진수로 변환해서 더하기 
    
    return sum.toString(2)
};