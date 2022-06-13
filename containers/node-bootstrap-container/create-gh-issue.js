const {Octokit} = require('@octokit/rest');
const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});

async function createGHIssue (octokit) {
    await octokit.rest.issues.create({
        owner: 'googleapis',
        repo: process.env.MONO_REPO_NAME,
        title: `The Node bootstrapper container failed creating ${process.env.API_ID}`,
        body: `Check build number ${process.env.BUILD_ID} in ${process.env.PROJECT_ID} for more details`,
      });
}

createGHIssue(octokit);
exports.createGHIssue = createGHIssue;