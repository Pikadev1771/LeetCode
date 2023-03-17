/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

  let grtst = -1
  
  for (let i = arr.length-1; i>= 0; i--) {
      let num = arr[i] // 2. 비교 위해 원래의 수 keep
      arr[i] = grtst // 3. 가장 큰 수로 갈아끼움
      grtst = Math.max(grtst, num) // 1. 가장 큰 수 만들어놓음
  }

return arr


};
