/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}

    for (el of nums) {
        if(!obj[el]) {
            obj[el] = []
            obj[el].push(el, 1)
        } else {
            obj[el][1]++
        }
    }
 
return Object.values(obj).sort((a, b) => b[1] - a[1]).map(el => el[0]).splice(0, k) 


};
