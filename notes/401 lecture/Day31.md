# Code 401 - Advanced Software Development

## Class 31: Context API

## Warm Up

- [see class whiteboard](https://projects.invisionapp.com/freehand/document/DLXSOTox3)


## React Review

- What is a Hook?
  - way for functional components to use lifecycle features
  - a function that "hooks" in a React features (React will re-render when certain things happen)
    - We want yo get React to react

- What do (most) hook return (if they return anything)
  - a re-render
  - Getter and Setter
    - getter state of the invocation / setter is function that can change the value of the getter

- Types of hooks
  - changing the document.title
  - useState: way React to use state variables in function components
  - useEffect: a trigger for a callback, before / after a render, once state variable changes

```javascript
  useEffect(()=> {}, [stateInput]);
```
  - useReducer: another way of handling state, better for complex versions of state
    - reducer function: handles the action type and payload
    - actions: Perfroms the functionality? The thing that the component / other functions passes into the reducer. contains the instrustions for the reducer.
    - shape the state (initialState)
```javascript

const initialState = {
  title:'my super title'
}

const reducer(state, action){
  switch(action.type){
  case 'CHANGE_TITLE':
    return {title:action.payload};
    default:
      return state;
  }
}

const changeTitleAction(title){
  return{
    type:'CHANGE_TITLE',
    payload: title
  }
}

function Main() {

  const [state, dispatch] = useReducer(reducer, initialState);

  dispatch(changeTitleAction('New Title'));

return (
  <>
    <h1>{state.title}</h1>
  </>  
)

}

```
[see class whiteboard for useReducer UML](https://projects.invisionapp.com/freehand/document/DLXSOTox3)

## Global State

State that is shared between up to, all of the components rendered in your applications. Tis is the source of truth for values that your application needs to run properly / provide a solution to your users
  - children opt-into global state access, instaead of relying on direct props being passed from parent to child

[see class whiteboard for Global State UML](https://projects.invisionapp.com/freehand/document/DLXSOTox3)

## Context API
Great the context object, instatiate a new object for each of context
` export const nameOfVariable = React.createContext();`
  - The React feature that let us use global
    - Provider define state, and pass that into a `Prop`
    - Consumer just need to import the context 
