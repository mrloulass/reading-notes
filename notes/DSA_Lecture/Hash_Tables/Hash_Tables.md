# Hash Tables

## Overview

What is a Hash Tables?
  - A table of key value pairs, indexed by a hash

## Terminology

  - Hash: taking in some value, and converting to an integer in some determininistica fashion. Meaning the same value will alwayss be converted to the same output. The result of a hashing algorithum
    - Name1 => 
    - Name2 =>

  - Bucket: a storage container within the hashtable. This is our new Node, the structure that stores our value

  - Collisions: When a key hashes to an bucket index that already stores a value. Good hash tables, allow for multiple values to be stored at a given bucket index
    - We'll be using a linked list as our bucket

## Hashing

Taking an input and converting a value deteministically, the goal for us is to create and index value but other use cases
  - Cryptographic hashing is for security purposes. Our algorithm is very redimentary and is just for stroage purpose

Input: {key: 'Jacob', value: 'instuctor'}

We need to convert the string 'Jacob' into an index

4 steps:
  1. determine the number of buckets in our table
    - Typically this is a power of 2. We'll go with 1024 by convention
  2. Convert the string to it's ASCII values
    - 'J' = 74 'a' = 97 'c' = 99  'o' = 111   'b' = 98 ====> 479
  3. Multiply the results by some largest prime number
    - 599 * 479  === 286921
  4. Take the and modulo by the size out table
    - 286921 % 1024 === 201

The result is our undex value

A "perfect" hashing algorithm for storage will never have a collsion. The worst one will always give you the same thing

We are going to store both key and value together. Why? So we can

## Implementation

- [Hash Table Link](HashTable.js)

- Add new values to our table
- Find values in our table
- Method telling the user whether the table contains a key
- getHash to return the index of a stored key
