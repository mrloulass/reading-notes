# Implementation: Stacks and Queues

## Data Structures and Algorithms: Stacks Queues

Linked list: Nodes that have a value and reference point to another Node(or null).
We still about the linear sequence. The changes we'll involve specific that this linked list exhibits

Both of these data structure are types of linked lists

### Stack

The order in which we can remove and add to the Linked List.

  - Only allows you to place new values at the head, and remove values from the head.

Term

- Top :this is what we call the `head` now, refers to the very first item in the stack.

- push: adding a value to the `top` of the stack. The only way the stack has of adding values.

- pop: removing a value from the `top` of the stack, this is the only way to remove values from the stack

We describe as `FiLo`: First in Last out.

  - We can do this in constant time : O(1)

### How can we implement this behavior on a stack

  Push: adding value to the top

  - assume we have a value to add:
  - create a new node from the value
  - point the next to the current `top`
  - set `top` of the stack to be our new `node`

    - efficiency:
      - time: O(1)
      - space: O(1)

  Pop: Removing a value from the top

  - set a `temp` variable to the ` top` node
  - move `top` to `top.next`
  - set ` temp.next` to null
  - return the `temp.value`

### Queue

A queue also can be described by the order in which Nodes are added and removed, but the order is the opposite from a stack:

  - `FIFO`= fFist in First out
  - `LiLo`= last in last out

Term

  - `Front` The place where Nodes get removed.
  - `Rear` The place where Nodes get added
  - `enqueue` Adding a Node to the `rear` of the queue
  - `dequeue` Removing a Node from the `front` of the queue


Enqueuing:

  - Create a new Node from the input value

  - Set `rear.next` equal to the new Node
  
  - set the `rear` of the queue to the new Node

Dequeuing:

  - look direactly at the front Node (set temp to front of queue)

  - set the `front` of the queue to the (fornt/temp)
  fornt of the queue

  - set `temp.next` to null  (remove all node references)

  - return `temp` node value;

### Links

- [Example of Stacks](./stack.js)

- [Example of Queues](./queue.js)
