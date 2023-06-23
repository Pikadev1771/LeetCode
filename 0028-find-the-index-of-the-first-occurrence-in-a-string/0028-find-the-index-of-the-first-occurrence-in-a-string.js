/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // if(haystack.indexOf(needle) !== -1) {
    //     return haystack.indexOf(needle)
    // } else {
    //     return -1
    // }

    for(let i = 0; i <= haystack.length - needle.length; i++) {
        let isNeedle = true;
        for(let j = 0; j < needle.length; j++) {
            if(haystack[i+j] !== needle[j]) {
                isNeedle = false;
                break;
            }
        }
        if(isNeedle) return i
    }
    return -1
};