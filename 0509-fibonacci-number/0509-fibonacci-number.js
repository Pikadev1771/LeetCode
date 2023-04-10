/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = [0, 1]

    function fibNum(num) {
        if(memo[num] !== undefined) {
            return memo[num]
        }
        memo[num] = fibNum(num-1) + fibNum(num-2)
        return memo[num]
    }

    return fibNum(n)
    
};