# Code 401 - Advanced Software Development 

## Class 26: Componenent Based UI with React

## Announcements 

- Lightening Talks: self led research Assignment
- Warm Ups: whiteboard focused
  - At least one student leading the "code challenge"

## Warm Up

- See Whiteboard (https://projects.invisionapp.com/freehand/document/eXVVZlpNl)

## SASS

A styling syntax that is, Pre-compiled CSS- It is compiled into valid CSS.

- Syntax features that make a better quality of life for developers / designers:
  - Nested styling blocks

```css
body {
  margin: 15px;
  padding: 10px;
}

body p {
  margin: 12px;
  padding: 5px;
}
```
- (Sassy) css

```scss

body {
  margin: 15px;
  padding: 10px;

  p {
    margin: 12px;
    padding: 5px;
  }
}

```

- variables
  - `$` allows to attach variables
```scss
// variables.scss

$backgroundColor: #ffffff;

// header.scss
@import 'path-to/variables.scss'

// styling a particular component
#header-container {
  background-color: $background-color;
}
```
- Mixins - blocks of reusable styles, 

```scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}

```
How to add Sass in  React
- Getting SASS to work with `create-react-app`
  1. initialize your project with `create-react-app your-app-name`
  2. Install node sass: `npm install node-sass`
   > Make sure are in your react project directory.
  3. Create your sass files and import them into your components.

## React Library

- What is React?
  - Creating a component base interface
  - library for creating/ describing interfaces
  - single page application
 
### Library Vs  Framework

- What is a Library?
  - A bunch of code that is downloaded / installed that fits into your own worflow.
- What is a Framework?
  - A whole foundation of code and prescribed workflow.

### How does React Work

- React used JSX to template our View Layer logic.
  - each 'component' we create is 'Node' in the Dom
    - A component is a collection of HTML (JSX), Styling (SASS), js (methods / functions) we define within a components scope.
  - `React` just gives us the ability to make components (define JSX, styling, and business logic).
  - `react-scripts` allows the React Syntax to be compiled into browser usable HTML, CSS, and JS.
    - using `webpack` and `babel` to handle syntax and dependency bundling.

### Class and Functional components

A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components.
[How to change a class component to function component](https://nimblewebdeveloper.com/blog/convert-react-class-to-function-component)
