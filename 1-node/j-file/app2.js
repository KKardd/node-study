const fs = require('fs').promises;

fs.readFile('./j-file/text_4.txt', 'utf8')
    .then((data) => console.log(data))
    .catch(console.error);

fs.writeFile('./j-file/happy.txt', 'I am tried...')
.catch(console.error);

fs.writeFile('./j-file/happy.txt', 'I am happy!!! ')
.catch(console.error); // 이렇게 두번 쓴다면 내용을 덮어씌움.

fs.appendFile('./j-file/happy.txt', 'No!... I am so tried........')
.then(() => {
    fs.copyFile('./j-file/happy.txt', './j-file/tried.txt')
    .catch(console.error);
})
.catch(console.error);

//folder
fs.mkdir('./j-file/sub_dir')
.catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(console.error);