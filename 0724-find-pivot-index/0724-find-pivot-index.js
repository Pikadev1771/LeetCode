/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let rightSum = 0;
    let leftSum = 0;

    nums.forEach(el => rightSum += el);

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        rightSum -= curr;

        if(leftSum === rightSum) return i;

        leftSum += curr;
    }

    return -1



    // for(let i = 0; i < nums.length; i++) {
    //     let left = 0;
    //     let right = 0;

    //     nums.slice(0, i).forEach((el => left += el))
    //     nums.slice(i+1).forEach((el => right += el))

    //     if(left === right) return i
    // }
    //  return -1
  

};