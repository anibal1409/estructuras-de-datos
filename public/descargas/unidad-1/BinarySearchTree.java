class Node {
    int key;
    Node left;
    Node right;

    Node(int key) {
        this.key = key;
    }
}

public class BinarySearchTree {
    private Node root;

    public void insert(int key) {
        root = insertRec(root, key);
    }

    private Node insertRec(Node current, int key) {
        if (current == null) return new Node(key);
        if (key < current.key) current.left = insertRec(current.left, key);
        else if (key > current.key) current.right = insertRec(current.right, key);
        return current;
    }
}
