/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (let i=nums.length - 1; i >= 0; i--) { // 자기 기준으로 오른쪽 수만 곱
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (let j=0; j < nums.length; j++) { // 왼쪽 수 곱
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};


// output
// [24, 12, 4, 1] 

// rightMult
// 1 4 12 24
