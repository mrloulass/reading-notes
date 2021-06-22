# 401 Lecture Day 06 Notes
6/21/21

## Last week Review

  - Express Server
    - a route: is a function attch to the app to handle request
      - a method and endpoint, that points a function(or set of functions) in express
    - app.listen (): instances of express
    - app.use(): allow us to use middleware in your code
    - Router: becomes the middle handler for the Path(/) HTTP
      - GET
      - POST
      - PUT
      - DELETE
    - Middleware: uses `next()` to send a function to the next function before response.
      - a function  that sitss in between the request and response, calls the next function to move to another middleware or route handler

## Authentication

- Authentication vs Authorization

  - Authentication : Who is making arequest (Auth0 => Token "Bearer")
    - Basic Authentication: using 2 string ( user / email, and password).
      - Authorization header: contais encode string hat includes username / email and password.
      - Authorization

- encryption vs encoding vs hashing

  - encoding: allow our input to adhere to a consistent format, `base64` auth headers are a convention that's been used for a while

  - encryption: is the hidding of sensitive information from everyone (including ourselves)accept the use.
    - NEVER store raw password strings, always encrypt.

    - How can we validate that users passwords are valid?

  - hashing: taking in a string and chop it up 
    - `bcrypt` has a method to perform one-way comparison

- Authorization: Are you allowed to do what you are requesting

### Describe and Define

- The authentication process

- cryptographic hash and cypher algorithms
