#!/usr/bin/env node

// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const { execSync } = require('child_process');
const { Octokit } = require('@octokit/rest');
const mergeChangelog = require('./merge-changelog.cjs');

async function run() {
  const token = (process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '').trim();
  if (!token) {
    console.error('Error: GITHUB_TOKEN or GH_TOKEN environment variable must be set.');
    process.exit(1);
  }

  // Get remote owner/repo
  let remoteUrl;
  try {
    remoteUrl = execSync('git config --get remote.origin.url', {stdio: ['pipe', 'pipe', 'ignore']}).toString().trim();
  } catch (err) {
    console.error('Error: Not a git repository or no remote.origin.url configured.');
    process.exit(1);
  }

  const match = remoteUrl.match(/(?:github\.com[:/])([^/]+)\/([^.]+)(?:\.git)?/);
  if (!match) {
    console.error(`Error: Could not parse git remote URL: ${remoteUrl}`);
    process.exit(1);
  }
  const [, owner, repo] = match;

  // Get current branch
  const branch = execSync('git branch --show-current').toString().trim();
  if (!branch) {
    console.error('Error: Could not determine current git branch.');
    process.exit(1);
  }

  console.log(`Detected Repository: ${owner}/${repo}`);
  console.log(`Detected Current Branch: ${branch}`);

  const github = new Octokit({auth: token});

  let context;
  if (branch === 'main' || branch === 'master') {
    console.log('Running in push / workflow_dispatch mode (processing all open PRs)...');
    context = {
      eventName: 'workflow_dispatch',
      repo: {owner, repo},
    };
  } else {
    console.log(`Searching for open PRs for branch: ${branch}...`);
    let response;
    try {
      response = await github.rest.pulls.list({
        owner,
        repo,
        state: 'open',
      });
    } catch (err) {
      console.error(`Error fetching open PR list from GitHub API:`, err.message);
      process.exit(1);
    }

    // Find the PR matching the head branch ref
    const pr = response.data.find(p => p.head.ref === branch);
    if (!pr) {
      console.error(`Error: No open pull request found matching head branch: ${branch}`);
      if (response.data.length > 0) {
        console.log('Available open PR branches: ' + response.data.map(p => p.head.ref).join(', '));
      } else {
        console.log('No open PRs exist in this repository currently.');
      }
      process.exit(1);
    }
    console.log(`Found open PR #${pr.number}: "${pr.title}"`);
    context = {
      eventName: 'pull_request',
      repo: {owner, repo},
      payload: {
        pull_request: pr,
      },
    };
  }

  try {
    await mergeChangelog({github, context});
    console.log('Done! Script completed successfully.');
  } catch (err) {
    console.error('Error executing merge-changelog:', err.message);
    process.exit(1);
  }
}

run();
