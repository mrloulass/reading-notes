# DSA: Trees

## Overview

What is a tree?
- It's like a linked list, but with a `branching` sequence rather a `linear`

3 Types of tress:

- `Binary Tree`(no more than 2 nodes references per node)
  - Only has 2 other references per node

- `K-ary Trees`(more than 2 nodes references per node)
  - 2 or more max reference per node
  - Instead of hacing a `left` or a `right` , you would have `children` or `adjacencies` which is most likely an array.

- `Binary Search Trees`(sorted binary tree) only two references per node
  - these are sorted, in such away that the left and right nodes values are sorted based on property value or lenght
  - Usually BST nodes store ingeters values on the left, and greater values on the right.

## Term

- Root - Top/ head/ Front - the begining of a tree

- Node - still our data storage object, now it can contains 1 or more references to other Nodes

- Left - one of child on the left

- Right - one of the child on the right

- K - the maxium number references a Tree can have

- Edges / Branches - A connection between 2 nodes.

- Children - Nodes that can be references by the current node, describes the relstions between Nodes

- Leaf - Node with no children is considered a leaf

- Height - the distance from the root to the furthest leaf

- Incomplete / Complete - Whether or not all possible Node spaces are filled to the lowest possible level

- Balance Tree - a tree is ballanced when the height of the left and right subtrees differ by at most one



## Traversals (looking at all values in our tree)

Depth First: favor looking at all the nodes on the left or the right, before moving the other side.
- WE must use either recursion or another data struture ( like a queue or a linked list) to store previously visted Nodes

Breadth First: Favors looking at node on the left and the right, before moving down to the next set of nodes.
- Also solvable with recursion, but will probably utilizes a queue.

### Depth First Traversal of a Tree

There are 3 orders in which we can look at nodes in a tree in depth first manner:

  - Pre-order: Start with the current value(top/root), move to the left, finish with the right (using a callstack, to add function)
  - In-order: Start with the left (most) node, than the current value, finish with the right
  - Post-order: Start with the left node, than right node, finish with the current value

### Breadth First Traversal of a Tree

use a queue  like a array to place values in it and pop and unshift the value
