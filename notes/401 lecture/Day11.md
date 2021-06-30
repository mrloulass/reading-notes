# Code 401 - Advanced Software Development

## 401 Reading Notes: Class 11

## Warm Up

- Creating a forwards and backwards navigation features
- Why 2 stacks?
  - One for going backwards
  - 

```javascript

let currentURL = null;

// stack 1
let history = [];

// stack 2
let revisionHistory = [];

class Navigation {
  constructor() {
    // the current url we might want to navigate to.
    this.url = null;
  }

  fetch(url) {
    currentURL = url;
    history.push(url); // adding this to our stack of visited urls
    return {
      url: url
      response: {
        text: 'loading...',
        data: 'loading...', 
      }
    }
  }

  // heads to the last url that was fetched.
  backwards() {
    let lastURL = history.pop();
    // Our current
    if (current === lastURL){
      revisionHistory.push(lastURL);
      currentURL = lastURL.next;
    }
    
  }

  // heads to the URL that was navigated to before navigating backwards.
  forwards() {

  }
}

```

## Programming with Events

- What are Events?
  - Responding to some event
  - This is a way to decribe things that happen in broad sense with our application.
    - element.addEventListener('hover, run-a-callback);
    - express has HTTP events
      - app.get('user', fetchUsers )
  - What's changing this week is multiple machines will respond

### Publishers and Subscribers

- Clients don't get an immiediate response drom servers.
- SErvers don't always respond directly to clients.
- Instead we have publishers and subscribers
  - Publisher can also be a subscriber
  - A machine `subscribes` to different events and `published` to the same or completelt seperate events.

## Node Event Emitter / CAPS

- Event Emitter

- Testing (best way to test)
  - test your own function 
  - test the functionality 
  - jest.fn(): is a spy function (mock the functionality)
  - console.log = jest.fn();
    - to see if  console.log was called

- CAPS
  - The Code Academy Parcel Service
