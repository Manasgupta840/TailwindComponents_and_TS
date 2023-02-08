/**
 * Its a non-linear data Structure used for storing data
 * It is made up of nodes and edges without having any cycle.
 * Each node in a tree can point to n number of nodes in a tree
 * It is a way of representing hierarchical structure with a parent node called a root and many levels of additional nodes.
 */
package Tree;

/*
    A tree is called a Binary Tree, if each node has zero, one or two children.

 */

import java.util.LinkedList;
import java.util.Queue;

public class BinaryTreesYT {
    static class Node {
        int data;
        Node left;
        Node right;

        Node(int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    static class BinaryTree {
        static int idx = -1;

        public static Node buildTree(int nodes[]) {
            idx++;
            if (nodes[idx] == -1) {
                return null;
            }
            Node newNode = new Node(nodes[idx]);
            newNode.left = buildTree(nodes);
            newNode.right = buildTree(nodes);
            return newNode;
        }

        /**
         * TC : O(n)
         * rule:
         * i)  Root
         * ii) Left Subtree
         * iii) right Subtree
         */
        public static void preorder(Node root) {
            if (root == null) {
                return;
            }
            System.out.print(root.data + " ");
            preorder(root.left);
            preorder(root.right);
        }

        /**
         * InorderTraversal
         * TC : O(n)
         * * rule:
         * *       i)  Left Subtree
         * *       ii) Root
         * *      iii) right Subtree
         */
        public static void inorder(Node root) {
            if (root == null) {
                return;
            }
            inorder(root.left);
            System.out.print(root.data + " ");
            inorder(root.right);

        }

        /**
         * Post Order Traversal
         * TC : O(n)
         * * rule:
         * *       i)  Left Subtree
         * *       ii) right Subtree
         * *      iii) Root
         */
        public static void postorder(Node root) {
            if (root == null) {
                return;
            }
            postorder(root.left);
            postorder(root.right);
            System.out.print(root.data + " ");
        }

        public static void levelOrder(Node root) {
            if (root == null) {
                return;
            }
            Queue<Node> q = new LinkedList<>();
            q.add(root);
            q.add(null);
            while (!q.isEmpty()) {
                Node curr = q.remove();
                if (curr == null) {
                    System.out.println();
                    //queue empty
                    if (q.isEmpty()) {
                        break;
                    } else {
                        q.add(null);
                    }
                } else {
                    System.out.print(curr.data + " ");
                    if (curr.left != null) {
                        q.add(curr.left);
                    }
                    if (curr.right != null) {
                        q.add(curr.right);
                    }
                }
            }
        }

        public static int height(Node root) {
            if (root == null) {
                return 0;
            }

            int leftHeight = height(root.left);
            int rightHeight = height(root.right);
            return Math.max(leftHeight, rightHeight) + 1;

        }
        public static int countOfNodes(Node root) {
            if(root == null) {
                return 0;
            }

            int leftNodes = countOfNodes(root.left);
            int rightNodes = countOfNodes(root.right);
            return leftNodes + rightNodes + 1;
        }

    }

    public static void main(String args[]) {
        int nodes[] = {1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1};
        Node root = BinaryTree.buildTree(nodes);

        System.out.println(root.data);

        BinaryTree.preorder(root);
        System.out.println(" ");
        BinaryTree.inorder(root);
        System.out.println(" ");
        BinaryTree.postorder(root);
        System.out.println(" ");
        BinaryTree.levelOrder(root);
        System.out.println(BinaryTree.height(root));
        System.out.println(BinaryTree.countOfNodes(root));

    }
}
