const buf = Buffer.from('Hi');

console.log(buf); // 유니코드로 표현
console.log(buf.length);
console.log(buf[0]); // 배열에선 아스키코드로 표현
console.log(buf[1]);
console.log(buf.toString());

//create

const buf2 = Buffer.alloc(2); // 2개의 버퍼를 생성(초기화 작업 포함)
const buf3 = Buffer.allocUnsafe(2); // 2개의 버퍼를 생성하지만 초기화 작업은 x, 따라서 값이 들어있을 수 있음. 빠름
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf.toString());
console.log(buf.toString());

//concat
const newbuf = Buffer.concat([buf, buf2, buf3]);
console.log(newbuf.toString());