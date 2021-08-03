# Code 401 - Advanced Software Development

## Class 37: Redux - Combined Reducers

## Lightening Talk

- React Suspense
  - suspense is a component that lets you wait for some code to load and declaratively specify a loading state
  - don't need conditional rendering with React
  - control visual loading

## Code Review

- Actions + Reducers

- Providers + Consumers

- Tracking store changes
  - How do I know when changes happened?

- Material UI
  - Card images, getting card media to render
    - imported image, verus image url

Redux = is the store, the reducer and state
redux-React = is use for any thing that has to do with components

Store(setting up store)
  products file
  - The state(initialState) and reducer(productsReducer) in the same file called (products)

  index file
  - import {createStore, cobineREducers} from 'redux'
  - import function from product file

  connect components child to the state of the store
  - import prodivder from react-redux
    - wrap app with <Provider store={store}/>
  - import store 


## Combined Reducers

