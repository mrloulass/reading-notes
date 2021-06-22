# Linked List

## What is A Linked List?

A linear sequence of objects that are linked/ connected together (ex. SQL/array/callback->stack)

- Arrays: other languages have arrays that are fixed size.
  - those langauges used a linked list to add items to a larger linked list.

## Behaviors

  - Linked Lists Traverse down a linear sequence of Nodes
  - Because `Nodes` contain references to other `Nodes` Linked List are recursive.
  - Dynamic structure, that easily add and remove `Nodes` 

## Terms

  - `Head`: the first node in a Linked List

  - `Node`: the thing that holds data and is linked together.
    - `value`: stores that data value.
    - `next`: a reference to another Node or null/undefined.

  - `Current`: the node you are currently looking at/ referencing

  - `Singly`: All `Node` point to Node in one direction, they only have a `next` property.

  - `Doubl`y: `Nodes` point both directions to each end of the list. Nodes have a `next` and a previous property.

  - `Traversal`: looking at data values within a structure

## Big O

Analyzing Algorithm/ program efficiency. What we really want to look closely to how many of the codes are running and how many times they run, and how many variables we make, how many references we add, how much resource space we are taking up. Always analyzed for the worst.

  - Considerations for space and time.

  - We can think of the notation as comparing the algorithm inputs (the things the program needs) to nth time it takes to run, and the amount of space it consumes/uses.
    - As the inputs grow, at what rate does space and time grow

  - Big O of time: O(n) - linear
  - Big O of space: O(1) - constant
  - Big O: O(n^2) - exponential
  - Big O: O()

[JavaScript Code for LinkedList](LinkedList.js)





