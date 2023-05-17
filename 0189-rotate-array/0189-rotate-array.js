/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  const rotate = (nums, k) => {
   
//    if(k > nums.length) {
//        k %= nums.length
//    }

// //    for (let i = 0; i < k; i++) {
// //        let num = nums.pop()
// //        nums.unshift(num);
// //    }

// const splicedArr = nums.splice(0, nums.length- k)
// splicedArr.forEach(el => nums.push(el))
// };


 const rotate = (nums, k) => {
 if(k > nums.length) {
   k %= nums.length
 }

const splicedArr = nums.splice(0, nums.length - k); // splicedArr(앞부분)와 nums(뒷부분)로 분할
splicedArr.forEach((el) => nums.push(el))



};