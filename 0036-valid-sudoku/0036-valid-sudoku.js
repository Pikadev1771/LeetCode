/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for (let i = 0; i < 9; i++) {
        // 행 바꿀 때마다 리셋
        let row = new Set();
        let col = new Set();
        let box = new Set();

        for (let j = 0; j < 9; j++) {
            let _row = board[i][j]; // 같은 행 검증
            let _col = board[j][i]; // 같은 열 검증
            let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)] // 같은 박스 검증 (한 텀에 박스 하나)
            
        
        if(_row !=='.') {
            if(row.has(_row)) return false;
            row.add(_row)
        }

        if(_col !=='.') {
            if(col.has(_col)) return false;
            col.add(_col)
        }

        if(_box !=='.') {
            if(box.has(_box)) return false;
            box.add(_box)
        }
      }
    }
    return true;

}


// [0][0]
// [0][1]
// [0][2]
// [1][0]
// [1][1]
// [1][2]
// [2][0]
// [2][1]
// [2][2]
