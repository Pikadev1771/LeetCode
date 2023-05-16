/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  let start = 0;
  let end = nums.length - 1;
  let answer = nums.length; // target이 end보다 클 경우

  while(start <= end) {
      const mid = Math.floor((start + end)/ 2); // 중간 인덱스 혹은 중간-1 인덱스

      if(nums[mid] === target) {
          return mid 
      } else if (nums[mid] < target) { 
          start = mid + 1
      } else { //  타겟이 중간값보다 작은 경우 
          answer = mid;
          end = mid - 1;
      }
  }
  return answer;
};