const fetch = require('node-fetch');

function labeledEvent(data) {
    return data.event === "labeled" && data.label.name === "needs more info";
  }

  const numberOfDaysLimit = 15;
  const close_message = `This has been closed since a request for information has \
  not been answered for ${numberOfDaysLimit} days. It can be reopened when the \
  requested information is provided.`;

  module.exports = async ({ github, context }) => {
    const owner = context.repo.owner;
    const repo = context.repo.repo;
    const number = context.issue_number;

    const issue = await github.rest.issues.get({
      owner: owner,
      repo: repo,
      issue_number: number,
    });

    try {
        const link = issue.data.body.match(/(https?:\/\/github.com\/.*)/)[0];
        const isValidLink = (await fetch(link)).status === 200;
        if (!isValidLink) {
            await github.rest.issues.update({
                owner: owner,
                repo: repo,
                issue_number: number,
                state: "closed",
              });
        }
    } catch (err) {
        await github.rest.issues.update({
            owner: owner,
            repo: repo,
            issue_number: number,
            state: "closed",
          });
    }
  };