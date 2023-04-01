import express from "express";
import {body, check, param, validationResult} from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    res.status(400).json({message: errors.array()[0].msg});
};

app.post(
    "/users",
    [
        body("name")
            .trim()
            .isLength({min: 2})
            .withMessage("이름은 두글자 이상!"),
        body("age").isInt().withMessage("숫자를 입력해줘!"),
        body("email").toLowerCase().isEmail().withMessage("이메일 입력해줘!"),
        // .normalizeEmail(),
        body("job.name")
            .notEmpty()
            .withMessage("직업이 없니? 학생이면 학생이라고 알려줘."),
        validate,
    ],
    (req, res, next) => {
        console.log(req.body);
        res.status(201).send("Success!");
    }
);

app.get(
    "/:email",
    [
        param("email")
            .isEmail()
            .withMessage("이메일을 다시 확인해줘.")
            .normalizeEmail(),
        validate,
    ],
    (req, res, next) => {
        res.send("Success!");
    }
);

app.listen(8080);
