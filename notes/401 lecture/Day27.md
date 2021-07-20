# Code 401 - Advanced Software Development 

## Class 27: `useState` Hook and Testing

## Warm up

  - See whiteboard: https://projects.invisionapp.com/freehand/document/9AXMJoPlW
  - How would you perform a Post Order Traversal on a Binary Tree.

## Code Review

 - For projects that have starter code, you should be able to `npm install` at the root of the stater code folder to make things work.
    - STEP 1: Create a repo on github.
    - STEP 2: Clone that repo to your local machine. (an empty repo a this point).
    - STEP 3: If you have starter code: copy all the contents from starter code into your repo, and `npm install`.
    - STEP 3.1: If you have to initialize a new React APP. use `create-react-app` at the root of the repo:
      - make sure you can `cd` into the newly created directory and `npm start`.
    - STEP 3.2: Move you nested project files to the root of your github repo directory, remove the `app-name` folder.
      - If you can't npm start, delete and `-lock` and your node_modules and re-install.

## useState and functional component state

`useState` is a hook from React

### Documentation
  - features
    1. Counter
      - Component that allows users to click a button, and renders the number of times a button was clicked
        - Props: {number}- number: the number of times the button was clicked
        - State: No component state
        - UML: image
    2. Person
      - Component that displays Person details. Details include a `name` and an `age`


## Testing Component 

React testing Library (RTL)
  - BDD (behavior driven testing)
    - What should the user see
    - What should the user be able to interact with
    - What should happen 
  - Do your components fullfill the feature they are build for

How to write a test?
- test folder `__test__`
- file name
- `data-testid= "any name"` 
  - `import {render, screen} from '@testing-libraray/reat'`
  - `import `
  - `import component from '../'`
  - `describe ('', () => {
    test('', () =>{
      render(<component name props name/>);
      const props name = screen.
      expect().tobeTruthy();
    })
  })`

  Github actions 
  - go to class config
  - config file for react test yml
    - need token
    - settings
      - secrets
      - create secrets
        - name is (Personal_Token)
        - need a




