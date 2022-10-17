const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 위치 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js')); // 확장자명 삭제

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
// parse.name 이와 같이 접근 가능

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users ~~~~
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder//////node'));

// join
console.log(__dirname + '/' + 'image');
console.log(__dirname + path.sep + 'image'); 
console.log(path.join(__dirname,'image'));