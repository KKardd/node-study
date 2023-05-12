import * as boardRepository from "../data/board_Data.js";

export async function getPostings(req, res) {
    const username = req.query.username;
    res.status(200).json(username);
}

export async function newPostings(req, res) {
    const username = req.query.username;
    res.status(200).json(username);
}
