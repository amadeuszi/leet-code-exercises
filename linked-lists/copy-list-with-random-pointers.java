/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    
    private Map<Node, Node> visited;
    
    public Node copyRandomList(Node head) {
        visited = new HashMap<>();

        return copyList(head);
    }
    
    public Node copyList(Node node) {
        if (node == null) {
            return null;
        }
        
        if (visited.containsKey(node)) {
            return visited.get(node);
        }
        
        Node copy = new Node(node.val);
        visited.put(node, copy);
        copy.next = copyList(node.next);
        copy.random = copyList(node.random);
        
        return copy;
    }
}