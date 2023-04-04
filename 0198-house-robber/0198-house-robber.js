/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let skiped = 0;
    let robbed = 0;

    for (let i = 0; i < nums.length; i++) {
        let max = Math.max(nums[i] + skiped, robbed)
        skiped = robbed; // nums[i-1]까지의 최대합 ---> 넘어가면 i-2
        robbed = max; // nums[i] 까지의 최대합 ---> 넘어가면 i-1
    }
    
    return robbed;
};