const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    console.log("Message:", message)
  }
}

module.exports = Logger;