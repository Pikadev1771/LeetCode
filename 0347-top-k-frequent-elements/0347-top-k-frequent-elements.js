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
// 1. 배열로 만들기
// 2. 개수 큰 순서로 sort
// 3. 숫자만 요소로 남기기
// 4. k만큼만 자르기

};




// obj = {
//     1: [1, 3],
//     2: [2, 2],
//     3: [3, 1]
// }

// [[1,3], [2,2], [3,1]]