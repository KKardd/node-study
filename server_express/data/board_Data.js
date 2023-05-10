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
    return Promise.all(
        tweets.map(async (tweet) => {
            const {username, name, url} = await userRepository.findById(tweet.userId);
            return {...tweet, username, name, url};
        })
    );
}
