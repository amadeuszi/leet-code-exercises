/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int size = 0;
        ListNode node = head;
        while (node != null) {
            node = node.next;
            size++;
        }
        
        int targetIndex = size - n;
        ListNode fake = new ListNode(0, head);
        node = fake;
        int index = 0;
        while (node != null && index < targetIndex) {
            node = node.next;
            index++;
        }
        if (node != null && node.next != null) {
            node.next = node.next.next;
        }

        return fake.next;
    }
}