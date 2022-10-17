console.log('Hi');
console.clear();

console.log('--------------------------------------------');

//log level
//터미널에선 똑같이 보이지만 브라우저에서는 색이 분리됨.
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error');  // 에러(심각)

console.log('--------------------------------------------');

//assert
//false일때만 log 출력
console.assert(2 === 3 , 'False!!');
console.assert(2 === 2 , 'True.');

console.log('--------------------------------------------');

//print object
const student1 = {name : 'seong', age : 22, university : {major : 'cs'}};
console.log(student1);
console.table(student1);
console.dir(student1, {showHidden: true, colors : false, depth : 2});

console.log('--------------------------------------------');

// measuring time
console.time('for loop');
for(let i = 0; i < 100; i++){
    i++;
}
console.timeEnd('for loop');

console.log('--------------------------------------------');

//counting
function a() {
    console.count('a function');
}
a();
a();
console.countReset('a function');
a();

console.log('--------------------------------------------');

//trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3 Good!');
    console.trace();
}
f1();

console.log('--------------------------------------------');