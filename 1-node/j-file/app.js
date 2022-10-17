const fs = require('fs');

try{
    fs.renameSync('./j-file/text.txt', './j-file/text_2.txt');
}catch(e){
    console.log(e);
} // 동기적 방법이므로 trycatch문을 사용해야한다.

fs.rename('./j-file/text_2.txt', './j-file/text_3.txt', (e) => {
    console.log(e); // callback함수는 에러를 받음.
})

fs.promises.rename('./j-file/text_3.txt', './j-file/text_4.txt')
.then(() => console.log('Done!'))
.catch(console.error);
