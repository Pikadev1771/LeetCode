/**
 * @param {number[]} nums
 * @return {number}
 */
const robHelper = (nums) => {

    let skiped = 0;
    let robbed = 0;

    for (let i = 0; i < nums.length; i++) {
        let max = Math.max(nums[i] + skiped, robbed)
        skiped = robbed; // nums[i-1]까지의 최대합 ---> 다음 텀으로 넘어가면 i-2
        robbed = max; // nums[i] 까지의 최대합 ---> 넘어가면 i-1
    }
    
    return robbed;
};

var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0]
    }
    let arr1 = nums.slice(0, nums.length-1)
    let arr2 = nums.slice(1)

    sum1 = robHelper(arr1)
    sum2 = robHelper(arr2)


    return Math.max(sum1, sum2)
    
};