/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 function threeSum(nums) {

     let result = []
     nums.sort((a, b) => a - b)

     // [-4, -1, -1, 0, 1, 2]

     for(let i = 0; i < nums.length-2; i++) {
         if(nums[i] > 0) break;
         if(i > 0 && nums[i] === nums[i-1]) continue; 

         let j = i+1
         let k = nums.length-1

         while(j < k) {
               let sum = nums[i] + nums[j] + nums[k]

               if (sum === 0) {
                   result.push([nums[i], nums[j], nums[k]])

                   while (nums[j] === nums[j+1]) j++ // 중복된 수 걸러주기
                   while (nums[k] === nums[k-1]) k--

                   j++
                   k--
               } else if (sum < 0) {
                   j++
               } else {
                   k--
               }


         }
     }
return result

}
