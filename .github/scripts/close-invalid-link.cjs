// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

async function closeIssue() {
    await github.rest.issues.update({
        owner: owner,
        repo: repo,
        issue_number: number,
        state: "closed",
      });
}
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
        const isValidLink = (await fetch(link)).ok;
        if (!isValidLink) {
           await closeIssue();
        }
    } catch (err) {
        await closeIssue();
    }
};
