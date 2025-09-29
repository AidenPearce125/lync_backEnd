const EventEmitter = require('events');
class AppEvents extends EventEmitter {}
const appEvents = new AppEvents();

const registerListeners = () => {
  require('./listeners')(appEvents);
};

module.exports = { appEvents, registerListeners };
