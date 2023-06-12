/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
//     const set = new Set(nums)
//     const arr = [...set]

//     const empty = new Array(nums.length - arr.length).fill(_)

//     nums = arr.concat(empty)

// return arr.length

let answer = 1;
for (let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i-1]) {
        nums[answer] = nums[i]
        answer++

    } 
}

return answer

};