// Copyright 2022 Google LLC
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