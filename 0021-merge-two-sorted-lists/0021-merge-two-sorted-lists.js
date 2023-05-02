/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list1

    if(list1.val < list2.val) { // 첫 헤드가 더 작은 list로 return   
        list1.next = mergeTwoLists(list1.next, list2) // next는 헤드 뺀 나머지 리스트
        return list1 // 완성된 리스트
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }

    
};