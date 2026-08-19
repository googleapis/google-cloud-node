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

import * as assert from 'assert';
import {describe, it, afterEach} from 'mocha';
import * as nock from 'nock';
import {dialogflow_v3} from '@googleapis/dialogflow';

nock.disableNetConnect();

describe('Dialogflow Apiary Client User Simulation', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('detectIntent: throws validation error when session path contains path traversal segments', async () => {
    // 1. User initializes the Dialogflow Apiary client
    const dialogflow = new dialogflow_v3.Dialogflow({});

    await assert.rejects(
      dialogflow.projects.locations.agents.sessions.detectIntent({
        session: 'projects/p/locations/l/agents/a/sessions/agents/../subagent',
        requestBody: {},
      }),
      /Value for session must not contain segments that are exactly \. or \.\./,
    );

    // =========================================================================================
    // UNDER THE HOOD: VALUES PASSED INTO createAPIRequest
    // =========================================================================================
    // parameters: {
    //   options: {
    //     url: 'https://dialogflow.googleapis.com/v3/{+session}:detectIntent',
    //     method: 'POST',
    //     apiVersion: ''
    //   },
    //   params: {
    //     session: 'projects/p/locations/l/agents/a/sessions/agents/../subagent',
    //     requestBody: {}
    //   },
    //   requiredParams: ['session'],
    //   pathParams: ['session'],
    //   context: dialogflow.context
    // }
    //
    // BEHAVIORAL EFFECT OF THIS BRANCH ON createAPIRequest:
    // -----------------------------------------------------
    // - validateAndEncodeParams detects the '..' traversal path segment.
    // - createAPIRequest immediately rejects with an Error before sending any HTTP request:
    //   /Value for session must not contain segments that are exactly \. or \.\./
    // =========================================================================================
  });

  it('detectIntent: prevents query injection when user supplies a session containing "?" and "$"', async () => {
    const dialogflow = new dialogflow_v3.Dialogflow({});

    const injectionSession =
      'projects/p/locations/l/agents/a/sessions/session-(1)*?$foo=BAR&admin=1#frag';

    const expectedPath =
      '/v3/projects/p/locations/l/agents/a/sessions/session-%281%29%2A%3F%24foo%3DBAR%26admin%3D1%23frag:detectIntent';

    const scope = nock('https://dialogflow.googleapis.com')
      .post(expectedPath, {})
      .reply(200, {responseId: 'safe-response'});

    const res = await dialogflow.projects.locations.agents.sessions.detectIntent({
      session: injectionSession,
      requestBody: {},
    });

    assert.strictEqual(res.status, 200);
    assert.ok(res.config.url?.toString().endsWith(expectedPath));
    scope.done();
  });
});
