/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

    if(k === 1) {
        return 0
    }
    

    nums.sort((a, b) => a - b); // [1, 4, 7, 9] 
    let minimum = Infinity

    for(let i = 0; i < nums.length - k + 1 ; i++) {
       minimum = Math.min(minimum, nums[i+k-1]-nums[i])

    }
    return minimum;



};