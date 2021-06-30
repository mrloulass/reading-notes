# Code 401 - Advanced Software Development

## 401 Reading Notes: Class 12

## Socket.io/ WebSockets/ TCP

### TCP / WebSockets

- TCP connection specifics:
  - HTTP was open and closed communication: open a request, connection is closed with a response.
  - TCP is opened and stays open until a `closed` event occurs.
    - That connection is `full duplex`.
      - buffers of data can be sent both directions in real time.

- Client / Server relationship
  - Clients can talk to the server anytime they remain connected.
  - Servers can talk to any client (often multiple) as long as they are connected at the same time

### Socket.io

- Library that creates WEb Socket connections over TCP
  - Web Sockets contain a header to upgrade an HTTP connection into a sustained TCP connection.
  - Web Sockets deal directly with buffered streams
  - Socket.io will allow our TCP connection to act much like our Node Events
    - Define / subscribe to our own event names.
    - We don't have deal with encoded buffers.
  - 2 libraries: client library and a server library.

###  Lab 12 starter

Server

- Terminal
  - npm init -y
  - npm i socket.io
  - touch index.js
- index.js
 - `const io = require('socket.io');`
 - `const server = io(3000)` 

  ```javascript
  server.on('connection', (socket)=>{
   socket.emit('success', 'yay');
 })
```
Client

- npm init -y
- npm i socket.io (            )



## Warm Up

```javascript

class DOMList {
  constructor(NodeList){
  this.nodes = NodeList;
  }
}

function $$(items){
  let matches = document.querySelectorAll(items);

let results = new DOMList(matches);

  // matches.forEach(item=>{
  //   item.nodes;
  // });

  return matches;
}

$$('button');

// Show all the buttons
let buttons = $$('button');
console.log('All Buttons', buttons);

// Show each button independently
buttons.nodes.forEach( button => {
  console.log('BUTTON:', $$(button) );
});




```
