import * as boardRepository from "../data/board_Data.js";

export async function getPostings(req, res) {
    const username = req.query.username;
    const data = await (username ? boardRepository.getAllByUsername(username) : boardRepository.getAll());
    res.status(200).json(data);
}

export async function getPosting(req, res) {
    const id = req.params.id;
    const data = boardRepository.getById(id);
    if (!data) {
        res.status(404).json(id);
    }
    res.status(200).json(data);
}

export async function newPostings(req, res) {
    const {title, text, username, userId} = req.body;
    const newposts = await boardRepository.create(title, text, username, userId);
    res.status(200).json(newposts);
}
