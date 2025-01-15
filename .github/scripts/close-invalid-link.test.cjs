// Copyright 2024 Google LLC
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

const {describe, it} = require('mocha');
const closeInvalidLink = require('./close-invalid-link.cjs');
const fs = require('fs');

describe('Quickstart', () => {
  it('does not do anything if it is not a bug', async () => {
    const context = {repo: {owner: 'testOrg', repo: 'testRepo'}, issue: {number: 1}}
    const octokit = {rest: {issues: {get: () => {return {data: {body: "I'm having a problem with this."}}}}}};
    await closeInvalidLink({github: octokit, context});
  });

  it('does not do anything if it is a bug with an appropriate link', async () => {
    const context = {repo: {owner: 'testOrg', repo: 'testRepo'}, issue: {number: 1}}
    const octokit = {rest: {issues: {get: () => {return {data: {body: fs.readFileSync('./fixtures/validIssueBody.txt', 'utf-8')}}}}}};
    await closeInvalidLink({github: octokit, context});
  });

  it('does not do anything if it is a bug with an appropriate link and the template changes', async () => {
    const context = {repo: {owner: 'testOrg', repo: 'testRepo'}, issue: {number: 1}}
    const octokit = {rest: {issues: {get: () => {return {data: {body: fs.readFileSync('./fixtures/validIssueBodyDifferentLinkLocation.txt', 'utf-8')}}}}}};
    await closeInvalidLink({github: octokit, context});
  });

  it('closes the issue if the link is invalid', async () => {
    const context = {repo: {owner: 'testOrg', repo: 'testRepo'}, issue: {number: 1}}
    const octokit = {rest: {issues: {get: () => {return {data: {body: fs.readFileSync('./fixtures/invalidIssueBody.txt', 'utf-8')}}}, createComment: () => {return}, update: () => {return}}}};
    await closeInvalidLink({github: octokit, context});
  });
});
