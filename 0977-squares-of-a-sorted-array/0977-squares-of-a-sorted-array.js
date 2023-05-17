/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let idx = end;
    let sortArr = [];

    while (idx > -1) {
        if (Math.abs(nums[start]) > Math.abs(nums[end])) { // 절대값 더 큰 수를
            sortArr[idx--] = nums[start] * nums[start]; // 뒤에서부터 채워넣기
            start++;
        } else {
            sortArr[idx--] = nums[end] * nums[end];
            end--;
        }
    }
    return sortArr;
};