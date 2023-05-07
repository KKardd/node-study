import express from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(helmet());
app.use(morgan("tiny"));

app.use((req, res, next) => {
    res.sendStatus(200);
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
