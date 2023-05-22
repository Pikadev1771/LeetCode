/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) { // n개 뺀 개수만큼 맞추기
        fast = fast.next;
    }

    if(!fast) return head.next; // n이 list의 길이일 경우
    
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next; // 하나 건너뛰기

    return head;

};