import * as userRepository from "./auth.js";

let posting = [
    {
        id: "1",
        text: "게시판 test",
        createdAt: new Date().toString(),
        userId: "1",
    },
    {
        id: "2",
        text: "안뇽!",
        createdAt: new Date().toString(),
        userId: "1",
    },
];

export async function getAll() {
    return posting;
}
