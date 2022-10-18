const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) =>{
    console.log('fist callback - ', args);
}
emitter.on('Love me', callback1);

emitter.on('Love me', (args) =>{
    console.log('second callback - ', args);
})

emitter.emit('Love me', {messege : 'I know, I stpid'});
emitter.emit('Love me', {messege : '어쩔수 없어'});
emitter.removeListener('Love me', callback1); // 이벤트 명을 보고 부분적으로 리스너 삭제
// emitter.removeAllListeners(); // 전부 삭제
emitter.emit('Love me', {messege : '널 보고싶은걸'});