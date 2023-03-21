/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b)
    let result = 1

    for(let i=0; i<nums.length; i++) {
    
           if(nums[i] === result) {
            result++
            } 
        



    } return result
};