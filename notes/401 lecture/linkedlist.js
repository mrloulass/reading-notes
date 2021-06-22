// Create a method on the `Linked List` class called `toArray` that takes all the values stored in the list, put them in an array and return th array.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  // converts list to an array and returns the array.
  toArray() {
    const localArray = [];
    let current = this.head;
    while(current !== null){
      localArray.push(current.value);
      current = current.next;
    }
    return localArray;
  }
}
