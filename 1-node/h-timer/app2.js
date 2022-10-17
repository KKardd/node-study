console.log('code 1');
setTimeout(() => {
    console.log('setTimeout');
}, 0);

console.log('code 2');
setImmediate(() => {
    console.log('setImmediate');
})

console.log('code 3');
process.nextTick(() => {
    console.log('nextTick');
})

//setTiemout 0과 setImmediate는 비슷하고 nextTick은 다 제치고 자기부터 한다.