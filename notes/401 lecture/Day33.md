# Code 401 - Advanced Software Development

## Class 33: Auth Context and Login Components

### Code Review

- Context Global State
  - Theme
  - Settings
    - Number of Items to show:number
    - Show Completed items: true / false
  - Form updates context:
    - Provider needs to be a `parent` component of the form
    - Form calls out to the provider to update the value
  - Provider needs to provider Setters to the consumer
    - Behaviors allow values to update without giving a


### Auth Context and Login Components

Auth Context
  - Behaviors:
    - user:{}
    - is a user authenticated? => false
    - login: username, password => search
    - for a user and return a vaild one
    - logout => removing any userdata from our UI
      - Login Component:
        - render a form if no user,
        - render a logout button, if their is a user

    - isAuthorized: => search for user capability
      - Auth Component:
        conditionally render children
        - If isAuthorized is true, AND If isAuthenticated
