const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(callback){
        this.emit('log', 'Start!');
        callback();
        this.emit('log', 'end..');
    }
}

module.exports.Logger = Logger;