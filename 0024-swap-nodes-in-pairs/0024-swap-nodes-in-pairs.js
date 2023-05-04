/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(head === null || head.next === null) return head;

    // 앞의 2개 순서 바꾸기 (할당이 '되는' 리스트가 변하는 것) 
    let temp = head.next // 맨 앞을 떼어낸 리스트 temp 만들기 // temp는 2-3-4-5-... // (두 번째 노드 keep)
    head.next = temp.next // head 리스트의 next에 만들어놓은 temp의 next 붙이기 // head는 1-3-4-5-... 
    temp.next = head // temp 리스트의 next에 위에서 변경 된 head(1-3-4-5-...) 붙이기 // temp는 2-1-3-4-5-... (=> 앞의 두 노드 바꾼 리스트)
 
    temp.next.next = swapPairs(head.next) // head는 (두 번째 노드 빠진) 1-3-4-5-...로 변경됐으므로 head.next는 앞의 두 수 빠진 리스트(3-4-5-...) // head는 1-3-4-5-...
    return temp;
};