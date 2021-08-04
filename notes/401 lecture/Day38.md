# Code 401 - Advanced Software Development

## Class 38: Redux - Asynchronous Actions

## Lightening Talk
BabelJS
- allows backward 

## Code Review
to change state use useDispacth() with the action and payload

## Redux Middleware

- Redux will let you define a function (or multiple functions) that will run before an action hits the reducer.

- Our middleware needs to tell redux, we have a promise thats running, let us wait until it's finished and then the reducer will recieve an action

- In order to aplly middle, we need to reconfigure our store( store/index.js)
  - We will use a function from redux called `applymiddleware`

### Thunk

- Wait until something is finished, and inject a subroutine.

- When we pass an async async into redux, we will tell redux:
  - if the thing I passed is a function, pass di

if this is a function, don't pass it to the reducer, wait for the function to finish, if it's a POJO => go ahead and update state
 
