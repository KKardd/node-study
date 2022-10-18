const fs = require('fs');

const data = [];
fs.createReadStream('./file.txt', {
    //highWaterMark : 8, //defalut = 64 kb
    // encoding : 'utf-8',
}).on('data', (chunk) => { // once를 사용한다면 처음 받아온 stream에 대해서만 출력한다.
    data.push(chunk);
    console.count('data');
}).on('end', () => {
    console.log(data.join(''));
}).on('error', (error) => {
    console.log(error);
});