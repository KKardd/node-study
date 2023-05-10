import express from "express";
import "express-async-errors";
import boardController from "../controller/board_Controller.js";
const router = express.Router();

// GET /board
// GET /board?username=:username
router.get("/", isAuth, boardController.getTweets);

// GET /board/:id
// router.get("/:id", isAuth, boardController.getTweet);

// POST /board
router.post("/", isAuth, validateTweet, boardController.createTweet);

// PUT /board/:id
router.put("/:id", isAuth, validateTweet, boardController.updateTweet);

// DELETE /board/:id
router.delete("/:id", isAuth, boardController.deleteTweet);

// DELETE /board?username=:username
router.delete("/", isAuth, boardController.deleteTweetByUserId);

export default router;
