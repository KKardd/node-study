const axios = require("axios");

const now = new Date();
const yesterday = new Date(now);
yesterday.setDate(yesterday.getDate() - 1);
yesterday.setHours(0, 0, 0, 0); // Set to the beginning of yesterday
const yesterdayEnd = new Date(now);
yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);
yesterdayEnd.setHours(23, 59, 59, 999); // Set to the end of yesterday

const since = yesterday.toISOString();
const until = yesterdayEnd.toISOString();
console.log(since, until);

const username = "KKardd";
const token = "?";

const repositoryList = [];
const commitList = [];

async function getUserOrganizations() {
    // 나의 조직들 찾기
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/orgs`, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch organizations for user "${username}": ` + error.message);
    }
}

async function getOrganizationToRepositories() {
    // 찾은 내 조직들의 Repo 찾기
    try {
        const organizations = await getUserOrganizations();
        for (const org of organizations) {
            const orgName = org.login;
            const response = await axios.get(`https://api.github.com/orgs/${orgName}/repos`, {
                headers: {
                    Authorization: token,
                },
            });
            const repositories = response.data;
            repositories.forEach((repo) => {
                repositoryList.push(String(repo.full_name));
            });
            return repositories;
        }
    } catch (error) {
        throw new Error(`Failed to fetch organizations for user "${username}": ` + error.message);
    }
}

async function getCommitToOrganization(repoFullName) {
    // 찾은 조직들에서 Repo의 내가 한 커밋 찾기.
    try {
        const response = await axios.get(
            `https://api.github.com/repos/${repoFullName}/commits?since=${since}&until=${until}`,
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        const commit = response.data;
        for (const commits of commit) {
            if (commits.author.login === username) {
                commitList.push(String(commits.commit.message));
            }
        }
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch commits for repository ${repoFullName}: ` + error.message);
    }
}

async function getRepositories() {
    // 개인 레포지토리 찾기
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: token,
            },
        });
        const repositories = response.data;
        repositories.forEach((repo) => {
            repositoryList.push(String(repo.full_name));
        });
        return repositories;
    } catch (error) {
        throw new Error("Failed to fetch repositories: " + error.message);
    }
}

// getUserOrganizations();
// getRepositories();
// getCommits();
// getOrganizationToRepositories();
getCommitToOrganization("NoGwari/server");
setTimeout(() => {
    console.log(commitList);
}, 5000);
