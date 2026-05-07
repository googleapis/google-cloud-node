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

const {describe, it, beforeEach, afterEach} = require('mocha');
const assert = require('assert');
const sinon = require('sinon');
const mergeChangelog = require('../merge-changelog.cjs');

describe('merge-changelog script', () => {
  describe('getEntryKey', () => {
    it('should return id if present', () => {
      const entry = {id: 'unique-id-123', version: '1.0.0'};
      assert.strictEqual(mergeChangelog.getEntryKey(entry), 'unique-id-123');
    });

    it('should return composite key if id is missing', () => {
      const entry = {
        version: '1.2.3',
        artifactName: '@google-cloud/storage',
        changes: [
          {sha: 'abc123sha', message: 'Fix bug'},
        ]
      };
      assert.strictEqual(mergeChangelog.getEntryKey(entry), '@google-cloud/storage-1.2.3-abc123sha');
    });

    it('should use change message as fallback key if sha is missing', () => {
      const entry = {
        version: '2.0.0',
        artifactName: '@google-cloud/pubsub',
        changes: [
          {message: 'Add feature'},
        ]
      };
      assert.strictEqual(mergeChangelog.getEntryKey(entry), '@google-cloud/pubsub-2.0.0-Add feature');
    });
  });

  describe('mergeChangelogs', () => {
    it('should merge new entries to the top of main changelog entries', () => {
      const mainChangelog = {
        repository: 'googleapis/google-cloud-node',
        entries: [
          {id: 'old-entry-1', version: '1.0.0'},
          {id: 'old-entry-2', version: '0.9.0'},
        ]
      };

      const prChangelog = {
        repository: 'googleapis/google-cloud-node',
        entries: [
          {id: 'new-entry-pr', version: '1.1.0'},
          {id: 'old-entry-2', version: '0.9.0'}, // overlapping
        ]
      };

      const merged = mergeChangelog.mergeChangelogs(mainChangelog, prChangelog);
      assert.deepStrictEqual(merged.entries, [
        {id: 'new-entry-pr', version: '1.1.0'},
        {id: 'old-entry-1', version: '1.0.0'},
        {id: 'old-entry-2', version: '0.9.0'},
      ]);
    });

    it('should return main entries unchanged if PR has no new entries', () => {
      const mainChangelog = {
        repository: 'googleapis/google-cloud-node',
        entries: [
          {id: 'old-entry-1', version: '1.0.0'},
        ]
      };

      const prChangelog = {
        repository: 'googleapis/google-cloud-node',
        entries: [
          {id: 'old-entry-1', version: '1.0.0'},
        ]
      };

      const merged = mergeChangelog.mergeChangelogs(mainChangelog, prChangelog);
      assert.deepStrictEqual(merged.entries, [
        {id: 'old-entry-1', version: '1.0.0'},
      ]);
    });
  });

  describe('integration with github', () => {
    let githubStub;
    let pullsStub;
    let reposStub;

    beforeEach(() => {
      pullsStub = {
        listFiles: sinon.stub(),
        list: sinon.stub(),
      };
      reposStub = {
        getContent: sinon.stub(),
        createOrUpdateFileContents: sinon.stub(),
      };
      githubStub = {
        rest: {
          pulls: pullsStub,
          repos: reposStub,
        },
      };
    });

    afterEach(() => {
      sinon.restore();
    });

    it('does not do anything if the PR does not modify changelog.json', async () => {
      const context = {
        eventName: 'pull_request',
        repo: {owner: 'testOrg', repo: 'testRepo'},
        payload: {
          pull_request: {
            number: 42,
            head: {
              ref: 'feature-branch',
              repo: {
                owner: {login: 'testOrg'},
                name: 'testRepo',
              }
            }
          }
        }
      };

      pullsStub.listFiles.resolves({
        data: [
          {filename: 'src/index.ts'},
          {filename: 'package.json'},
        ]
      });

      await mergeChangelog({github: githubStub, context});

      sinon.assert.calledOnce(pullsStub.listFiles);
      sinon.assert.notCalled(reposStub.getContent);
      sinon.assert.notCalled(reposStub.createOrUpdateFileContents);
    });

    it('merges and commits to the PR branch if PR modifies changelog.json and is out of date', async () => {
      const context = {
        eventName: 'pull_request',
        repo: {owner: 'testOrg', repo: 'testRepo'},
        payload: {
          pull_request: {
            number: 42,
            head: {
              ref: 'feature-branch',
              repo: {
                owner: {login: 'testOrg'},
                name: 'testRepo'
              }
            }
          }
        }
      };

      pullsStub.listFiles.resolves({
        data: [
          {filename: 'changelog.json'},
        ]
      });

      const prChangelogContent = JSON.stringify({
        repository: 'test',
        entries: [{id: 'new-pr-entry'}, {id: 'main-entry-1'}],
      });
      reposStub.getContent.withArgs(sinon.match({ref: 'feature-branch'})).resolves({
        data: {
          content: Buffer.from(prChangelogContent).toString('base64'),
          sha: 'pr-file-sha',
        },
      });

      const mainChangelogContent = JSON.stringify({
        repository: 'test',
        entries: [{id: 'main-entry-2'}, {id: 'main-entry-1'}],
      });
      reposStub.getContent.withArgs(sinon.match({ref: 'main'})).resolves({
        data: {
          content: Buffer.from(mainChangelogContent).toString('base64'),
          sha: 'main-file-sha',
        }
      });

      reposStub.createOrUpdateFileContents.resolves({});

      await mergeChangelog({github: githubStub, context});

      sinon.assert.calledTwice(reposStub.getContent);
      sinon.assert.calledOnce(reposStub.createOrUpdateFileContents);

      const commitCallArgs = reposStub.createOrUpdateFileContents.firstCall.args[0];
      assert.strictEqual(commitCallArgs.branch, 'feature-branch');
      assert.strictEqual(commitCallArgs.sha, 'pr-file-sha');

      const committedContent = JSON.parse(Buffer.from(commitCallArgs.content, 'base64').toString('utf8'));
      assert.deepStrictEqual(committedContent.entries, [
        {id: 'new-pr-entry'},
        {id: 'main-entry-2'},
        {id: 'main-entry-1'},
      ]);
    });

    it('processes all open PRs on push/workflow_dispatch event', async () => {
      const context = {
        eventName: 'push',
        repo: {owner: 'testOrg', repo: 'testRepo'},
      };

      pullsStub.list.resolves({
        data: [
          {
            number: 101,
            head: {
              ref: 'pr-branch-1',
              repo: {owner: {login: 'testOrg'}, name: 'testRepo'}
            }
          },
          {
            number: 102,
            head: {
              ref: 'pr-branch-2',
              repo: {owner: {login: 'testOrg'}, name: 'testRepo'}
            }
          },
        ]
      });

      pullsStub.listFiles.withArgs(sinon.match({pull_number: 101})).resolves({
        data: [{filename: 'package.json'}], // does not modify
      });

      pullsStub.listFiles.withArgs(sinon.match({pull_number: 102})).resolves({
        data: [{filename: 'changelog.json'}], // modifies
      });

      const prChangelogContent = JSON.stringify({
        repository: 'test',
        entries: [{id: 'pr-102-entry'}]
      });
      reposStub.getContent.withArgs(sinon.match({ref: 'pr-branch-2'})).resolves({
        data: {
          content: Buffer.from(prChangelogContent).toString('base64'),
          sha: 'pr-102-sha'
        }
      });

      const mainChangelogContent = JSON.stringify({
        repository: 'test',
        entries: [{id: 'main-entry'}]
      });
      reposStub.getContent.withArgs(sinon.match({ref: 'main'})).resolves({
        data: {
          content: Buffer.from(mainChangelogContent).toString('base64'),
          sha: 'main-sha'
        }
      });

      reposStub.createOrUpdateFileContents.resolves({});

      await mergeChangelog({github: githubStub, context});

      sinon.assert.calledOnce(pullsStub.list);
      sinon.assert.calledWith(pullsStub.listFiles, sinon.match({pull_number: 101}));
      sinon.assert.calledWith(pullsStub.listFiles, sinon.match({pull_number: 102}));

      // Should fetch getContent only for 102 and main
      sinon.assert.calledTwice(reposStub.getContent);
      sinon.assert.calledOnce(reposStub.createOrUpdateFileContents);
    });

    it('throws an Error if processing files fails', async () => {
      const context = {
        eventName: 'pull_request',
        repo: {owner: 'testOrg', repo: 'testRepo'},
        payload: {
          pull_request: {
            number: 42,
            head: {
              ref: 'feature-branch',
              repo: {
                owner: {login: 'testOrg'},
                name: 'testRepo',
              }
            }
          }
        }
      };

      pullsStub.listFiles.rejects(new Error('GitHub API down'));

      await assert.rejects(
        async () => {
          await mergeChangelog({github: githubStub, context});
        },
        /Changelog merge workflow encountered failures/
      );
    });
  });
});
