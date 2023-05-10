import express from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import boardRouter from "./router/board_Router.js";
const app = express();

const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(helmet());
app.use(morgan("tiny"));

app.use("/board", boardRouter);

app.get("/", (req, res, next) => {
    res.status(200).json("get Method");
});

app.get("/test", (req, res, next) => {
    res.status(200).json("test get Method");
});

app.post("/post", (req, res, next) => {
    const {name} = req.body;
    res.status(201).json(name);
});

app.use((req, res, next) => {
    console.log("Finish Not Fount");
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

app.listen(8080);
console.log("Connect!");
