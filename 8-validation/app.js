import express from "express";
import {body, check, param, validationResult} from "express-validator";

const app = express();
app.use(express.json());

app.post(
    "/users",
    [
        body("name").isLength({min: 2}).withMessage("이름은 두글자 이상!"),
        body("age").isInt().withMessage("숫자를 입력해줘!"),
        body("email").isEmail().withMessage("이메일 입력해줘!"),
        body("job.name")
            .notEmpty()
            .withMessage("직업이 없니? 학생이면 학생이라고 알려줘."),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message: errors.array()});
        }
        console.log(req.body);
        res.status(201).send("Success!");
    }
);

app.get(
    "/:email",
    param("email").isEmail().withMessage("이메일을 다시 확인해줘."),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message: errors.array()});
        }
        res.send("Success!");
    }
);

app.listen(8080);
