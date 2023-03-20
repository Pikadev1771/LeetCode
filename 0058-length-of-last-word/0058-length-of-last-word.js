/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

let arr = s.split(' ')

let filtered = arr.filter( el => el !== '')

return filtered[filtered.length-1].length


};