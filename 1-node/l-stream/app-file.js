const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data, () => {});
})
const afterMem = process.memoryUsage().rss;
const useMem = afterMem - beforeMem;
const consumed = useMem / 1024 / 1024;
console.log(useMem); 
console.log(`사용한 메모리 용량 ${consumed}MB`); // 이 방식이 한번에 읽고 쓰는 방법