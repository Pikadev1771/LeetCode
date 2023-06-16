/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let a = headA;
  let b = headB;

  while(a !== b && (a.next || b.next)) {
      if(a.next === null) {
          a = headB // 두 번째 텀
      } else {
          a = a.next
      }

      if(b.next === null) {
          b = headA;
      } else {
          b = b.next
      }
  }

  if(a === b) return a;
};