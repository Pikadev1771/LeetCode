/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // nums.forEach((el, idx) => {
    //     if(el === 0) {
    //         let spliced = nums.splice(idx, 1);
    //         nums.push(spliced)
    //     }
    // })


// for (let i = nums.length -1; i>=0; i--) {
//     if(nums[i] === 0) {
//         nums.splice(i, 1)
//         nums.push(0)
//     }
// }


for (let i = nums.length -1; i >= 0; i--) {
    if(nums[i] === 0) {
        nums.splice(i, 1)
        nums.push(0)
    }
}

};