const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const myDir = path.join(__dirname, 'Pictures', folder)
if (!folder || !fs.existsSync(myDir)){
    console.error('폴더나 디렉토리를 다시한번 확인해주세요.');
}

videoDir = path.join(myDir, 'video');
capturedDir = path.join(myDir, 'captured');
correctedDir = path.join(myDir, 'corrected');
imageDir = path.join(myDir, 'image');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(correctedDir) && fs.mkdirSync(correctedDir);
!fs.existsSync(imageDir) && fs.mkdirSync(imageDir);

fs.promises.readdir(myDir)
    .then(checkFiles)
    .catch((err) => {
        console.error(err);
    });
    

function checkExtansion(fileName) {
    if(path.extname(fileName) === '.mov' || path.extname(fileName) === '.mp4'){
        return videoDir
    } // 동영상 이동 완료
    else if(path.extname(fileName) === '.png' || path.extname(fileName) === '.aae'){
        return capturedDir
    } // 캡쳐 이동 완료
    else if(path.extname(fileName) === '.jpg'){
        if(fileName[4] === 'E'){
            return correctedDir
        }
        else
            return imageDir;
    }
    else{
        return 0;
    }
}

function checkFiles(files){
    files.forEach((file) => {
        const targetDir = checkExtansion(file);
        if(targetDir){
            try {
                fs.renameSync(path.join(myDir, file), path.join(targetDir, file));    
                console.log(`${file} 이동 완료`);
            } catch (error) {
                console.log(error);
            }
    }})
}