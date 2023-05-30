/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function initializeQueueAndNewMatrix(mat){
    let queue = [];
    let newMat = new Array(mat.length); 
    for(let row = 0; row < mat.length; row++){
        newMat[row] = new Array(mat[row].length); // 원 배열과 같은 틀 만들기
        for(let col = 0; col < mat[row].length; col++){
            if(mat[row][col] === 0){ 
                queue.push([row,col]); // 0인 자리 queue에 저장
                newMat[row][col] = 0; // 새 배열에 0 넣기
            }else{
                newMat[row][col] = Number.POSITIVE_INFINITY; // 그 외는 infinity 넣기
            }
        }
    }
    return [queue, newMat];
}

function isValidPos(row, col, mat, newMat, currDistance){
    return row > -1 && row < mat.length && col > -1 && col < mat[row].length && currDistance < newMat[row][col];
    

}
function updateMatrix(mat){
    let [queue, newMat] = initializeQueueAndNewMatrix(mat); // 1차 0 정렬
    let travelPos = [[1,0],[0,1],[0,-1],[-1,0]]; 
    let distance = 1;
    while(queue.length !== 0){
        let currentQueueSize = queue.length; // 0의 개수
        for(let i = 0; i < currentQueueSize; i++){ 
            let [currRow, currCol] = queue.shift(); // queue에서 하나씩 빼기 (맨 앞)
            for(let [moveRow, moveCol] of travelPos){
                moveRow = currRow + moveRow; // curr의 주변 탐색
                moveCol = currCol + moveCol;
                if(isValidPos(moveRow, moveCol, mat, newMat, distance)){
                    newMat[moveRow][moveCol] = distance; // 1 넣기
                    queue.push([moveRow,moveCol]);
                }
            }
        }
        distance++;   
    }
    return newMat;
}