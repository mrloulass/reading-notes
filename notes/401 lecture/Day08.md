# 401 Lecture Day 06 Notes
6/23/21

## Review

## Access Control (ACL)

- Authentication answers the question "Who are you?" or "Are you who you say you are?"

- Authorization takes the next step and asks "Are you allowed to do the thing you're asking to do?"

Access Control List (ACL)

- Given a proper and valid user with a set of permissions, we can grant or restrict access to anything in our server.
  - in the route we can allow the roles to are user

- Our system will add a `role` to our user schema, "user","admin", "writer"
  - we can map a list of permissions, to a specific user `role`


  ```javascript

  let acl = {
    "user" : ["read"],
    "writer": ["read", "create"],
    "adim" : ["read", "create", "update", "delete"]
  }

  ```
  

## Describe and Define

- Authorization: Are you allowed to do the thing you're asking to do

- Roles: for persmissions based access

- Capabilities: defines our (ACL) after a user model is build

- Access Control

- Function currying
