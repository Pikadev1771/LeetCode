/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // for(el of nums) {
    //     if(nums.indexOf(el) !== nums.lastIndexOf(el)) {
    //         return true
    //     }
    // }
    // return false
    
    nums.sort((a, b) => a - b)
    for (let i = 0; i< nums.length -1; i++) {
        if(nums[i] === nums[i+1]) {
            return true
        }
    }
    return false
};

