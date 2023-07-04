import express from "express";
import multer from "multer";
import path from "path";

const app = express();

// 이미지를 저장할 디렉토리와 파일명 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

// 업로드할 파일 필드 이름 설정
const upload = multer({storage: storage});

// 정적 파일 서비스 설정
app.use(express.static("public"));

// 게시판 페이지 라우트
app.get("/board", (req, res) => {
    res.sendFile(path.join(__dirname, "board.html"));
});

// 이미지 업로드 처리 라우트
app.post("/upload", upload.single("image"), (req, res) => {
    if (req.file) {
        console.log("이미지 업로드 완료:", req.file.filename);
        res.send("이미지 업로드 완료");
    } else {
        console.log("이미지 업로드 실패");
        res.send("이미지 업로드 실패");
    }
});

// 서버 시작
app.listen(3000, () => {
    console.log("서버가 3000번 포트에서 실행 중입니다.");
});
