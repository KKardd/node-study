let posting = [
    {
        id: "1",
        text: "게시판 test",
        username: "test1",
        createdAt: new Date().toString(),
        userId: "1",
    },
    {
        id: "2",
        text: "안뇽!",
        username: "test2",
        createdAt: new Date().toString(),
        userId: "1",
    },
];

export async function getAll() {
    return posting;
}

export async function getAllByUsername(username) {
    const arr = posting.filter((post) => post.username === username);
    return arr;
}

export async function getById(id) {
    const posts = posting.find((post) => post.id === id);
    return posts;
}

export async function create(title, text, username, userId) {
    const newPosts = {
        title,
        text,
        username,
        userId,
    };
    posting.push(newPosts);
    return newPosts;
}
