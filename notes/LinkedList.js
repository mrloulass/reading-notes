'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Big O time: O(n) - linear
//Big O space: O(1) - constant
class LinkedList {
  constructor() {
    this.head = null;
  }
  //the this opitional callback function that we execute on a Node Value
  traverse(callback) {
    let current = this.head;
    // console.log(this.head.value);
    // console.log(this.head.next.value);

    while (current !== null) {
      console.log(current.value);//we could anthing here
      //callback(current.value);
      current = current.next;
    }
  }
  //We want to add a new Node to the end of our list.
  add(value) {

    //traverse to the end

    //when traversal is finished, add a new node to the list
   let current = this.head;
   let previous = null;
   
    while (current !== null) {
      previous = current;
      current = current.next;
    }
    let newNode = new Node(value);
    previous.next = newNode;

  }
}

const list = new LinkedList(); //{head:null}

const A = new Node(10);

list.head = A;

console.log(list); //{head:{value:10, next:null}}

const B = new Node('Louis');

list.head.next = B;

console.log(list); //{head:{value:10, next:{value:'Louis', next: null}}}

const C = new Node(false);

list.head.next.next = C;
console.log(JSON.stringify(list))

list.add(20)
list.traverse();


