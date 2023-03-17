/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

  let max = -1
  
  for (let i = arr.length-1; i>= 0; i--) {
      let temp = arr[i] // 2. 비교 위해 원래의 수 keep
      arr[i] = max // 3. 가장 큰 수로 갈아끼움
      max = Math.max(max, temp) // 1. 가장 큰 수 만들어놓음
  }

return arr


};
