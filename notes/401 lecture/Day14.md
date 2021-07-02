# Code 401 - Advanced Software Development

## 401 Reading Notes: Class 14

## Code Review

lab:13
- implementing a `Queue` of sorts, seprating message concerns from event concerns.

## Introduce AWS Services

This event server (Socket.io events / message Queue service) is up on AWS

  - SNS (simple notification service)
    - As a user, you can define events
      - 'pickup' => creates a "topic" on AWS
        - Set up Lamba
        - configure a rest API gateway
        - send a message to a Queue

  - SQS (simple queue service)
    - stores Objects  and allows FILO/ FIFO/ don't care
    - Upon reception, SQS clears that message.

## Final week project Lab: build an app base on CAPS  

- What is a real time events app 
  - hub server
  - multiple clients
  - must operate over a network
  
  - can add an auth or use auth0

  project idea
  - games
  - chat service
