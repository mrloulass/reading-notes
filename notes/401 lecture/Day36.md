# Code 401 - Advanced Software Development

## Class 36: Application State with Redux

## Annoucments
  - Lightening Talks resume
  - Whiteboard finals starting next week
    - "Crackin the coding Interview" help study whiteboard interview
    - Focus on the following area
      - Object oriented designe
        - classes and constructor functions
        - absract problem solving rather than solutions that require a lot of javascript methods
      - focus on design patterns like
        - callbacks
        - iteration using for loops
        - using contextual "this"
      - Make sure you are comfortable with Linked Lists, Trees, Stack, Queues, and Hash Maps.

## Warm Up
How to you traverse a Linked List?
    - iterative way 
    - `while (current = node) if (current is null)`
How to you traverse a Binary Tree?
  - recursive
    - breath (pre order, post order, in-order)
    - 
How to you traverse a Graph?
  -  Breadth First Traversal
    * Look at neighboring Vertices before moving to further Vertices.
      Adjacency List
      * An array of objects / linked lists
      * Each Vertex  / node is an index of the array.

## Redux Overview

- Global Application state management
  - Context, being used for a `slice` of global application, but not something that is designed to be consumed by all comonents
    - Short coming here is managing changes at scale, (lots of changes to contextual state)
  - uses `actions`, `reducers`, `initial state`: use the same behavior as useReducer
    - Multiple reducers for each slice of state
  - Consumer Components read data and perfrom behaviors specified by a Provider component.
- Use Case: tons of components (thinking atomically) with specific jobs.
  - Redux provides a single source

  - redux
  - react-redux
  - redux-devtools-extension
    - need extension in Chrome (redux devtools)

## Redux Providers and Consumers
