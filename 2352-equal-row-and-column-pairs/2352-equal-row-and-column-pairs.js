/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {

//     let count = 0;

//     const columnGrid = new Array(grid.length).fill([])


//     for(let i = 0; i < grid.length; i++) {
//         for(let j = 0; j < grid.length; j++) {
//             columnGrid[i][j] = grid[j][i]
//         }
//     }

// console.log(columnGrid)


    // for (let i = 0; i < grid.length; i++) {
    //     if(grid[i] === )
    // }


   const rows = grid.map(arr => arr.join()); // [321, 242, 412]
   const columns = grid[0].map((col, i) => grid.map(row => row[i]).join()); [ ,  ,  ]

   let count = 0;

   for (let row of rows) {
       for(let column of columns) {
           if(row === column) count++
       }
   }
   return count;
};