const jwt = require("jsonwebtoken");
const secret = "WSm^6UL75e^XWr%C8*2!K9ICxikvRZ9D";

const token = jwt.sign(
    {
        id: "kkardd",
        isAdmin: false,
    },
    secret,
    {expiresIn: 2} // token 유효 기간 설정(초)
);
console.log(token);
jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
}); //token의 유효기간안에서 확인했기때문에 error값에 null, decoded값에 제대로 출력되는 것을 볼 수 있다.

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded);
    });
}, 3000); //token의 유효기간은 2초인데, 3초를 기다리고 함수를 실행했으므로 이미 token이 폭파되었다는 문구를 볼 수 있다.
