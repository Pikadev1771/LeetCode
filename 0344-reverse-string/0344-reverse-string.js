/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    // for (let i = s.length - 1 ; i >= 0; i--) {
    //     let string = s.splice(i, 1)
    //     s.push(...string)
    // }


    let start = 0;
    let end = s.length - 1

    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++
        end--
    }
    
};