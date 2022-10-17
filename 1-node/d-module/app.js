// console.log(count);
// console.log(getCount());

// counter.js를 export하지 않았기에 정의되지 않았다고 함

const counter = require('./counter.js');

counter.increase();
counter.increase();
console.log(counter.getCount());