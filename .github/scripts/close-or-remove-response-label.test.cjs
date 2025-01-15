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
const removeResponseLabel = require('./remove-response-label.cjs');
const closeUnresponsive = require('./close-unresponsive.cjs');

function getISODateDaysAgo(days) {
  const today = new Date();
  const daysAgo = new Date(today.setDate(today.getDate() - days));
  return daysAgo.toISOString();
}

describe('Quickstart', () => {
  it('closes the issue if the OP has not responded within the allotted time and there is a needs-more-info label', async () => {
    const context = {owner: 'testOrg', repo: 'testRepo'}
    const issuesInRepo = [{user: {login: 'OP'}, labels: [{name: 'needs more info'}]}]
    const eventsInIssue = [{event: 'labeled', label: {name: 'needs more info'}, created_at: getISODateDaysAgo(16)}];
    const octokit = {rest: {issues: {listForRepo: () => {return {data: issuesInRepo}}, update: () => {return}, createComment: () => {return}}}, paginate: () => {return eventsInIssue}};
    await closeUnresponsive({github: octokit, context});
  });

  it('does nothing if not enough time has passed and there is a needs-more-info label', async () => {
    const context = {owner: 'testOrg', repo: 'testRepo'}
    const issuesInRepo = [{user: {login: 'OP'}, labels: [{name: 'needs more info'}]}]
    const eventsInIssue = [{event: 'labeled', label: {name: 'needs more info'}, created_at: getISODateDaysAgo(14)}];
    const octokit = {rest: {issues: {listForRepo: () => {return {data: issuesInRepo}}}}, paginate: () => {return eventsInIssue}};
    await closeUnresponsive({github: octokit, context});
  });

  it('removes the label if OP responded', async () => {
    const context = {actor: 'OP', repo: {owner: 'testOrg', repo: 'testRepo'}, issue: {number: 1}};
    const issueContext = {user: 'OP', login: 'OP', labels: [{name: 'needs more info'}]};
    const octokit = {rest: {issues: {get: () => {return {data: issueContext}}, removeLabel: () => {return}}}};
    await removeResponseLabel({github: octokit, context});
  });

  it('does not remove the label if author responded', async () => {
    const context = {actor: 'repo-maintainer', repo: {owner: 'testOrg', repo: 'testRepo'}, issue: {number: 1}};
    const issueContext = {user: 'OP', login: 'OP', labels: [{name: 'needs more info'}]};
    const octokit = {rest: {issues: {get: () => {return {data: issueContext}}}}};
    await removeResponseLabel({github: octokit, context});
  });
});
