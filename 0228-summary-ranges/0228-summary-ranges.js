/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    let start = nums[0];
    let end = nums[0];

    for(let i = 0; i < nums.length; i++) {
        if(i === nums.length -1) {
            result.push([start, end])
        } else if(nums[i+1] === nums[i]+1) {
            end = nums[i+1] 
        } else {
            result.push([start, end])
            start = nums[i+1]
            end = nums[i+1]
        }
    }

    return result.map((arr) => arr[0] === arr[1] ? `${arr[0]}` : `${arr[0]}->${arr[1]}`)
    

};