/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = nums[0];
    for(let i = 0; i < nums.length; i++){
        nums[i] = sum;
        if(i+1 < nums.length){
            sum += nums[i+1]
        }
    }
    return nums;
};