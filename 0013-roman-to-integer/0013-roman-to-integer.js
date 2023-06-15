/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbol = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    
    const arr = [symbol[s[0]]] // [1000, 100]

    for(let i = 1; i < s.length; i++) {
        if(symbol[s[i-1]] < symbol[s[i]]) {
            arr[arr.length -1] = symbol[s[i]] - arr[arr.length -1] 
        } else {
            arr.push(symbol[s[i]])
        }
    }

return arr.reduce((acc, cur) => acc + cur)

};