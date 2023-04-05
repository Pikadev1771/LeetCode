/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    debugger;

    if (x < 0) {
        return false
    }

    let arr = x.toString().split('')
    let reverse = []


for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i])
}

return reverse.join() === arr.join()

};