/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {


    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)


    for(let el of nums1) {
        if(nums2.indexOf(el) !== -1) {
            return el
        } 
    }

    let first = Math.min(nums1[0], nums2[0])
    let second = Math.max(nums1[0], nums2[0])
   return first.toString() + second.toString() 
    
};