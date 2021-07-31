'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  postOrder() {
    const walk = (node) => {

      //look at the left
      if (node.left) walk(node.left);

      //before we get to walk on right side, the above fuction call should return
      //look at the right
      if (node.right) walk(node.right);

      //process the value
      console.log(node.value);
    }
    walk(this.root);
  }

  inOrder() {
    const walk = (node) => {

      //look at the left
      if (node.left) walk(node.left);

      //process the value
      console.log(node.value);

      //look at the right
      if (node.right) walk(node.right);
    }
    walk(this.root);
  }

  preOrder(){
    const walk = (node)=> {

      //process the value
      console.log(node.value);

      //look at the left
      if (node.left) walk(node.left);

      //look at the right
      if (node.right) walk(node.right);
    }
    walk(this.root);
  }
}

const bt = new BinaryTree();

bt.root = new Node(10);
bt.root.left = new Node(5);
bt.root.right = new Node(20);
bt.root.left.left = new Node(3);
bt.root.left.right = new Node(7);
bt.root.right.left = new Node(15);
bt.root.right.right = new Node(21);

console.log (JSON.stringify(bt));
//console.log(bt);
//console.table(bt);

console.log('Post Order Traversal');
bt.postOrder();

console.log('Pre Order Traversal');
bt.preOrder();

console.log('In Order Traversal');
bt.inOrder();
