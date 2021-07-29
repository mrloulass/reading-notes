# Code 401 - Advanced Software Development

## Class 34: API Integration

### Lightening Talk
  - GatsbyJS is a Static Site Generator
  - Great for SEO
    - Why are SPAs not great for SEO?
      - They just start from a root div
      - Generates all the content first before we render anything to the end user
  - JAMStack technology

### Code Review
  - Auth Context
    - Implementing the `Auth` Context and `Login`
    - authenticate: behavior
      - login: function
    - authorization: Behavior
      - isAuthorized: function 
  - Login: component
    - display a form 
      - call the functions from context
  - Auth: component
    - render children if authorized or nothing if not authorized

  - Design Tools
    - Wireframes
      - Full specific goals
    - Prototypes

### API Workshop
  - Documenting Features for others

Building an API server
npm init -y
npm install 

1. test my routes
  - need a mock server file to test GET
  - need a mock database(sequelize) and model(schema) file to test PUT,POST, DELETE
```javascript
const server = require('./lib/server.js');
const supertest = require ('supertest');

// mock the request with super test

 const request = supertest(server.app)// this takes an instance of Express. =>express()

 describe ('Testing server CRUD for todos'. ()=>{

  it('should be able to READ todos at /todos', ()=>{

  });

  it('should be able to CREATE todos at /todos', ()=>{

  });
  it('should be able to UPDATE todos at /todos', ()=>{

  });
  it('should be able to DELETE  todos at /todos', ()=>{

  });

  })
```
#### Authenticate API Server

##### Features
  - Perfrom CRUD
    - Routes
      - Resources (things that the server gives to the client)?
        - Todos as JSON
      - RESTful?
        - GET / resource => READ
        - POST / resource => CREATE
        - PUT / resource/:id => UPDATE
        - DELETE / resource/:id => DELETE

    - Models
      - SQL database (or another db if you choose)
      - Schemas: the datatypes that will store in each column of our SQL Tables

    - Errors
      - 404 => resource not found
      - 500 => server error

  - Authorization / Authentication
    - User
      - Encrypted passwords
      - generateToken
      - Authenticate from strings (Basic)
      - Authenticate from token (Bearer)
      - Capabilities (RB-ACL)
