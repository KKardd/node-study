import express from "express";
import "express-async-errors";
import * as boardController from "../controller/board_Controller.js";
const router = express.Router();

// GET /board
// GET /board?username=:username
router.get("/board", boardController.getPostings);

// GET /board/:id
// router.get("/:id", isAuth, boardController.getTweet);
router.get("/board/:id", boardController.getPostings);

// POST /board
// router.post("/", isAuth, validateTweet, boardController.createTweet);
router.post("/board/post", boardController.newPostings);

// PUT /board/:id
// router.put("/:id", isAuth, validateTweet, boardController.updateTweet);

// DELETE /board/:id
// router.delete("/:id", isAuth, boardController.deleteTweet);

// DELETE /board?username=:username
// router.delete("/", isAuth, boardController.deleteTweetByUserId);

export default router;
