const process = require("process");

console.log(process.pid);
console.log(process.cwd());
console.log(process.uptime());
console.log(process.cpuUsage());

setTimeout(() => {
    console.log("Time Out!");
}, 0);

process.nextTick(() => {
    console.log("nextTick!");
});
// nextTick은 task queue에 있는 콜백함수를 무시하고 먼저 실행된다.

for (let i = 0; i < 1000; i++) {
    console.log(i);
} // 시간 지체

// 출력
// ...
// 996
// 997
// 998
// 999
// nextTick!
// Time Out!
