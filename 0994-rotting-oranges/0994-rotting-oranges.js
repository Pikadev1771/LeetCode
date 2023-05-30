/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    let minutes = 0;
    let rottens = []; // 전염시킬 오렌지 있는 썩은 오렌지
    let freshCount = 0;
    

    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) { // 요소(칸) 하나씩 순회
            if(grid[i][j] === 2) { // 썩은 오렌지 
            rottens.push({row: i, col: j}) // rottens 배열에 넣기
            }
            if(grid[i][j] === 1) {
                freshCount++; // 신선한 오렌지 갯수 카운트
            }
        }
    }

    if(rottens.length > 0) {
        let currRottens = []; // 해당 텀에 변한 오렌지

        while(rottens.length) {
            for(let i = 0; i < rottens.length; i++) {
                const {row, col} = rottens[i]; // 썩은 오렌지 

                const topRow = row - 1;
                const bottomRow = row + 1;
                const leftCol = col - 1;
                const rightCol = col + 1;

                if(grid[topRow]?.[col] === 1) { // 신선한 오렌지 -> 썩은 오렌지
                    currRottens.push({row: topRow, col})
                    grid[topRow][col] = 2;
                }


                if (grid[row][rightCol] === 1) {
                    currRottens.push({row, col: rightCol});
                    grid[row][rightCol] = 2;
                }

                if (grid[bottomRow]?.[col] === 1) {
                    currRottens.push({row: bottomRow, col});
                    grid[bottomRow][col] = 2;
                }

                if (grid[row][leftCol] === 1) {
                    currRottens.push({row, col: leftCol});
                    grid[row][leftCol] = 2;
                }

            }
                if(currRottens.length > 0) {
                    minutes++;
                    rottens = currRottens; // 새로 썩은 오렌지 (전염 가능성 O)
                    freshCount -= currRottens.length
                    currRottens = []
                } else {
                    rottens = []
                }

            
        }
    }

    return freshCount ? -1 : minutes;
};