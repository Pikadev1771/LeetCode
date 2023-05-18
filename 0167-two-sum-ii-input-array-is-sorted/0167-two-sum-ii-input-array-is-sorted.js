/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    
    // for (let i = 0; i< numbers.length; i++) {
    //     for (let j = 1; i< numbers.length; j++) {
    //         if(numbers[i]+numbers[j] === target) {
    //             return [i+1, j+1]
    //         }
    //     }

    // }

    let idx1 = 0;
    let idx2 = numbers.length - 1;

    while ( idx1 < idx2 ) {
        const sum = numbers[idx1] + numbers[idx2];
       if ( target === sum) {
           return [idx1+1, idx2+1];
       } else if ( sum > target ) {
           idx2--;
       } else if ( sum < target ) {
           idx1++;
       }
    }




};