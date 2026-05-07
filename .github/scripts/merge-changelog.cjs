// Copyright 2026 Google LLC
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

'use strict';

/**
 * Generate a unique identifying key for a changelog entry.
 * Matches by unique entry id if present, or falls back to a composite key.
 * @param {object} entry - The changelog entry object.
 * @returns {string}
 */
function getEntryKey(entry) {
  if (entry && entry.id) {
    return entry.id;
  }
  const version = entry.version || '';
  const artifactName = entry.artifactName || '';
  const firstChange = entry.changes && entry.changes[0];
  const changeKey = firstChange ? (firstChange.sha || firstChange.message || '') : '';
  return `${artifactName}-${version}-${changeKey}`;
}

/**
 * Prepend entries from prChangelog that are missing from mainChangelog to the top of mainChangelog's entries.
 * @param {object} mainChangelog - The latest changelog from main branch.
 * @param {object} prChangelog - The changelog from the PR branch.
 * @returns {object} The merged changelog object.
 */
function mergeChangelogs(mainChangelog, prChangelog) {
  const mainEntries = (mainChangelog && mainChangelog.entries) || [];
  const prEntries = (prChangelog && prChangelog.entries) || [];

  const mainEntryKeys = new Set(mainEntries.map(getEntryKey));
  const newPrEntries = prEntries.filter(entry => !mainEntryKeys.has(getEntryKey(entry)));

  const mergedEntries = [...newPrEntries, ...mainEntries];

  const mainTime = mainChangelog && mainChangelog.updateTime;
  const prTime = prChangelog && prChangelog.updateTime;
  let mergedUpdateTime = mainTime;

  if (prTime) {
    if (!mainTime || new Date(prTime) > new Date(mainTime)) {
      mergedUpdateTime = prTime;
    }
  }

  const result = {
    ...mainChangelog,
    entries: mergedEntries,
  };

  if (mergedUpdateTime) {
    result.updateTime = mergedUpdateTime;
  }

  return result;
}

/**
 * Fetch the file content safely, fallback to Git Blobs API if the file size is larger than 1MB limit.
 */
async function fetchFileContent(github, owner, repo, path, ref) {
  const res = await github.rest.repos.getContent({
    owner,
    repo,
    path,
    ref,
  });

  const fileData = res.data;
  // For files > 1MB, getContent might return metadata without standard base64 content field
  if (fileData.content) {
    return {
      content: Buffer.from(fileData.content, 'base64').toString('utf8'),
      sha: fileData.sha,
    };
  }

  const blobRes = await github.rest.git.getBlob({
    owner,
    repo,
    file_sha: fileData.sha,
  });

  return {
    content: Buffer.from(blobRes.data.content, 'base64').toString('utf8'),
    sha: fileData.sha,
  };
}

/**
 * Process an individual pull request, checking if it modifies changelog.json and updating it if needed.
 */
async function processPullRequest(github, owner, repo, pr) {
  const prNumber = pr.number;
  const branch = pr.head.ref;
  const prRepoOwner = pr.head.repo.owner.login;
  const prRepoName = pr.head.repo.name;

  console.log(`Checking if PR #${prNumber} (${branch}) modifies changelog.json...`);

  // Fetch file list of the pull request
  let files;
  try {
    const response = await github.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: prNumber,
    });
    files = response.data;
  } catch (err) {
    console.error(`Error listing files for PR #${prNumber}:`, err.message);
    return false;
  }

  const modifiesChangelog = files.some(file => file.filename === 'changelog.json');
  if (!modifiesChangelog) {
    console.log(`PR #${prNumber} does not modify changelog.json. Skipping.`);
    return true;
  }

  console.log(`PR #${prNumber} modifies changelog.json. Fetching contents...`);

  // Fetch PR version of changelog.json
  let prContent, prSha;
  try {
    const fileData = await fetchFileContent(github, prRepoOwner, prRepoName, 'changelog.json', branch);
    prContent = fileData.content;
    prSha = fileData.sha;
  } catch (err) {
    console.error(`Error fetching changelog.json from PR #${prNumber}:`, err.message);
    return false;
  }

  let prChangelog;
  try {
    prChangelog = JSON.parse(prContent);
  } catch (err) {
    console.error(`Error parsing PR #${prNumber}'s changelog.json:`, err.message);
    console.error('PR changelog content:', prContent);
    return false;
  }

  // Fetch main version of changelog.json
  let mainContent;
  try {
    const fileData = await fetchFileContent(github, owner, repo, 'changelog.json', 'main');
    mainContent = fileData.content;
  } catch (err) {
    console.error(`Error fetching changelog.json from main branch:`, err.message);
    return false;
  }

  let mainChangelog;
  try {
    mainChangelog = JSON.parse(mainContent);
  } catch (err) {
    console.error(`Error parsing main branch's changelog.json:`, err.message);
    return false;
  }

  // Merge the changelogs
  const mergedChangelog = mergeChangelogs(mainChangelog, prChangelog);
  const newContent = JSON.stringify(mergedChangelog, null, 2);

  if (newContent === prContent) {
    console.log(`PR #${prNumber}'s changelog.json is already up to date.`);
    return true;
  }

  console.log(`PR #${prNumber}'s changelog.json is out of date. Committing updates to ${branch}...`);

  // Commit the update back to the PR branch (resilient against fork PR access limits)
  try {
    await github.rest.repos.createOrUpdateFileContents({
      owner: prRepoOwner,
      repo: prRepoName,
      path: 'changelog.json',
      message: 'chore: merge latest main changes into changelog.json',
      content: Buffer.from(newContent).toString('base64'),
      sha: prSha,
      branch: branch,
    });
    console.log(`Successfully updated changelog.json for PR #${prNumber}.`);
    return true;
  } catch (commitErr) {
    console.error(`Could not commit update to PR #${prNumber} (might be a fork PR without write permissions):`, commitErr.message);
    return false;
  }
}

module.exports = async ({github, context}) => {
  const owner = context.repo.owner;
  const repo = context.repo.repo;

  let success = true;
  if (context.eventName === 'pull_request') {
    const pr = context.payload.pull_request;
    success = await processPullRequest(github, owner, repo, pr);
  } else if (context.eventName === 'push' || context.eventName === 'workflow_dispatch') {
    console.log(`Triggered by ${context.eventName}. Finding all open pull requests...`);
    let pulls = [];
    try {
      const response = await github.rest.pulls.list({
        owner,
        repo,
        state: 'open',
      });
      pulls = response.data;
    } catch (err) {
      console.error(`Error listing open pull requests:`, err.message);
      success = false;
    }

    if (success) {
      console.log(`Found ${pulls.length} open pull requests. Processing...`);
      for (const pr of pulls) {
        try {
          const prResult = await processPullRequest(github, owner, repo, pr);
          if (!prResult) {
            success = false;
          }
        } catch (err) {
          console.error(`Error processing PR #${pr.number}:`, err);
          success = false;
        }
      }
    }
  }

  if (!success) {
    throw new Error('Changelog merge workflow encountered failures. Failing the action.');
  }

  return true;
};

module.exports.mergeChangelogs = mergeChangelogs;
module.exports.getEntryKey = getEntryKey;
