/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let arr = [...t]
    let arrs = [...s]

    for (el of arr) {
        if( arrs[0] === el) {
            arrs.shift()
        }
    }

    if(arrs.length === 0) {
        return true
    } else {
        return false
    }
    
};