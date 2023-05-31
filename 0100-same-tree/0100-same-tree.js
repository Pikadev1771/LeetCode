/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // debugger;
    // let count = 0;
    // if(p.length === q.length) {
    //     for(let i = 0; i <p.length; i++) {
    //             if(p[i] === q[i]) {
    //                 count++
    //             }
    //     }
    // }
    // if(count === p.length) {
    //     return true
    // } else {
    //     return false
    // }
    
    if(!p && !q) return true; // p와 q가 둘 다 false (undefined, null..)일 때
    if(!p || !q || p.val !== q.val) return false
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))


};