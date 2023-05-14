import * as boardRepository from "../data/board_Data.js";

export async function getPostings(req, res) {
    const username = req.query.username;
    const data = await (username ? boardRepository.getAllByUsername(username) : boardRepository.getAll());
    res.status(200).json(data);
}

export async function newPostings(req, res) {
    const username = req.query.username;
    res.status(200).json(username);
}
