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
import {
  createAPIRequest,
  APIRequestContext,
  GlobalOptions,
  MethodOptions,
  BodyResponseCallback,
  GaxiosResponseWithHTTP2,
} from '../src';

nock.disableNetConnect();

/**
 * The Dialogflow CX Apiary Client (dialogflow_v3) generated classes as structured in `googleapis`.
 * This allows the test suite to simulate a user directly calling methods on the Dialogflow Apiary client.
 */
export namespace dialogflow_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  export class Dialogflow {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions = {}) {
      this.context = {
        _options: options,
      };
      this.projects = new Resource$Projects(this.context);
    }
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;

    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    agents: Resource$Projects$Locations$Agents;

    constructor(context: APIRequestContext) {
      this.context = context;
      this.agents = new Resource$Projects$Locations$Agents(this.context);
    }
  }

  export class Resource$Projects$Locations$Agents {
    context: APIRequestContext;
    sessions: Resource$Projects$Locations$Agents$Sessions;

    constructor(context: APIRequestContext) {
      this.context = context;
      this.sessions = new Resource$Projects$Locations$Agents$Sessions(this.context);
    }
  }

  export interface Params$DetectIntent {
    session?: string;
    requestBody?: {
      queryInput?: {
        text?: {text?: string};
        languageCode?: string;
      };
      queryParams?: Record<string, unknown>;
    };
  }

  export interface Params$EntityTypes$Create {
    parent?: string;
    entityTypeId?: string;
    requestBody?: {
      displayName?: string;
      entityOverrideMode?: string;
      entities?: Array<{value?: string; synonyms?: string[]}>;
    };
  }

  export interface Params$EntityTypes$Get {
    name?: string;
    languageCode?: string;
  }

  export class Resource$Projects$Locations$Agents$Sessions {
    context: APIRequestContext;
    entityTypes: Resource$Projects$Locations$Agents$Sessions$EntityTypes;

    constructor(context: APIRequestContext) {
      this.context = context;
      this.entityTypes =
        new Resource$Projects$Locations$Agents$Sessions$EntityTypes(this.context);
    }

    detectIntent(
      params?: Params$DetectIntent,
      options?: MethodOptions,
    ): Promise<GaxiosResponseWithHTTP2<any>>;
    detectIntent(
      params: Params$DetectIntent,
      callback: BodyResponseCallback<any>,
    ): void;
    detectIntent(
      params: Params$DetectIntent,
      options: MethodOptions,
      callback: BodyResponseCallback<any>,
    ): void;
    detectIntent(
      paramsOrCallback?: Params$DetectIntent | BodyResponseCallback<any>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<any>,
      callback?: BodyResponseCallback<any>,
    ): void | Promise<GaxiosResponseWithHTTP2<any>> {
      let params = (paramsOrCallback || {}) as Params$DetectIntent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$DetectIntent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3/{+session}:detectIntent').replace(
              /([^:]\/)\/+/g,
              '$1',
            ),
            method: 'POST',
            apiVersion: '',
          },
          options,
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };

      if (callback) {
        createAPIRequest<any>(parameters, callback as BodyResponseCallback<unknown>);
      } else {
        return createAPIRequest<any>(parameters);
      }
    }
  }

  export class Resource$Projects$Locations$Agents$Sessions$EntityTypes {
    context: APIRequestContext;

    constructor(context: APIRequestContext) {
      this.context = context;
    }

    create(
      params?: Params$EntityTypes$Create,
      options?: MethodOptions,
    ): Promise<GaxiosResponseWithHTTP2<any>>;
    create(
      params: Params$EntityTypes$Create,
      callback: BodyResponseCallback<any>,
    ): void;
    create(
      params: Params$EntityTypes$Create,
      options: MethodOptions,
      callback: BodyResponseCallback<any>,
    ): void;
    create(
      paramsOrCallback?: Params$EntityTypes$Create | BodyResponseCallback<any>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<any>,
      callback?: BodyResponseCallback<any>,
    ): void | Promise<GaxiosResponseWithHTTP2<any>> {
      let params = (paramsOrCallback || {}) as Params$EntityTypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$EntityTypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3/{+parent}/entityTypes').replace(
              /([^:]\/)\/+/g,
              '$1',
            ),
            method: 'POST',
            apiVersion: '',
          },
          options,
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };

      if (callback) {
        createAPIRequest<any>(parameters, callback as BodyResponseCallback<unknown>);
      } else {
        return createAPIRequest<any>(parameters);
      }
    }

    get(
      params?: Params$EntityTypes$Get,
      options?: MethodOptions,
    ): Promise<GaxiosResponseWithHTTP2<any>>;
    get(
      params: Params$EntityTypes$Get,
      callback: BodyResponseCallback<any>,
    ): void;
    get(
      params: Params$EntityTypes$Get,
      options: MethodOptions,
      callback: BodyResponseCallback<any>,
    ): void;
    get(
      paramsOrCallback?: Params$EntityTypes$Get | BodyResponseCallback<any>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<any>,
      callback?: BodyResponseCallback<any>,
    ): void | Promise<GaxiosResponseWithHTTP2<any>> {
      let params = (paramsOrCallback || {}) as Params$EntityTypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$EntityTypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options,
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };

      if (callback) {
        createAPIRequest<any>(parameters, callback as BodyResponseCallback<unknown>);
      } else {
        return createAPIRequest<any>(parameters);
      }
    }
  }
}

describe('Dialogflow Apiary Client User Simulation', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('detectIntent: user sends a session ID containing unreserved characters and RFC 3986 sub-delims (!\'()*)', async () => {
    // 1. User initializes the Dialogflow Apiary client
    const dialogflow = new dialogflow_v3.Dialogflow();

    // 2. User provides a resource name containing characters modified by this branch: ! ' ( ) *
    const session =
      "projects/my-prj/locations/us-central1/agents/agent-007/sessions/user-(session-1)*!'";

    // =========================================================================================
    // UNDER THE HOOD: VALUES PASSED INTO createAPIRequest
    // =========================================================================================
    // When the user calls dialogflow.projects.locations.agents.sessions.detectIntent(...),
    // the Apiary client method constructs and passes the following APIRequestParams object:
    //
    // parameters: {
    //   options: {
    //     url: 'https://dialogflow.googleapis.com/v3/{+session}:detectIntent',
    //     method: 'POST',
    //     apiVersion: ''
    //   },
    //   params: {
    //     session: "projects/my-prj/locations/us-central1/agents/agent-007/sessions/user-(session-1)*!'",
    //     requestBody: {
    //       queryInput: {
    //         text: { text: 'Hello, book a flight' },
    //         languageCode: 'en'
    //       }
    //     }
    //   },
    //   requiredParams: ['session'],
    //   pathParams: ['session'],
    //   context: dialogflow.context
    // }
    //
    // BEHAVIORAL EFFECT OF THIS BRANCH ON createAPIRequest:
    // -----------------------------------------------------
    // - transcoding.ts now uses encodeWithoutSlashes (via encodeURIComponent), which:
    //   - Preserves slashes '/' (due to {+session} multi-segment template).
    //   - Preserves characters '!', '\'', '(', ')', '*' as literals (whereas previously
    //     strictEncodeURIComponent converted them to %21, %27, %28, %29, %2A).
    // - params.requestBody is moved to options.data.
    // - Resulting HTTP POST URL:
    //   https://dialogflow.googleapis.com/v3/projects/my-prj/locations/us-central1/agents/agent-007/sessions/user-(session-1)*!':detectIntent
    // =========================================================================================
    const expectedPath =
      "/v3/projects/my-prj/locations/us-central1/agents/agent-007/sessions/user-(session-1)*!':detectIntent";

    const scope = nock('https://dialogflow.googleapis.com')
      .post(expectedPath, {
        queryInput: {
          text: {text: 'Hello, book a flight'},
          languageCode: 'en',
        },
      })
      .reply(200, {
        responseId: 'resp-abc-123',
        queryResult: {
          text: 'Hello, book a flight',
          fulfillmentText: 'Where would you like to fly?',
        },
      });

    // 3. User invokes the method on the Apiary client instance
    const res = await dialogflow.projects.locations.agents.sessions.detectIntent({
      session,
      requestBody: {
        queryInput: {
          text: {text: 'Hello, book a flight'},
          languageCode: 'en',
        },
      },
    });

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.responseId, 'resp-abc-123');
    assert.ok(res.config.url?.toString().endsWith(expectedPath));
    scope.done();
  });

  it('entityTypes.create: user specifies {+parent} in path, query parameter, and requestBody', async () => {
    // 1. User initializes the Dialogflow Apiary client
    const dialogflow = new dialogflow_v3.Dialogflow();

    const parent =
      "projects/my-prj/locations/global/agents/agent-1/sessions/user-(42)*'";
    const entityTypeId = 'custom_currency';

    // =========================================================================================
    // UNDER THE HOOD: VALUES PASSED INTO createAPIRequest
    // =========================================================================================
    // When the user calls dialogflow.projects.locations.agents.sessions.entityTypes.create(...),
    // the Apiary client method constructs and passes:
    //
    // parameters: {
    //   options: {
    //     url: 'https://dialogflow.googleapis.com/v3/{+parent}/entityTypes',
    //     method: 'POST',
    //     apiVersion: ''
    //   },
    //   params: {
    //     parent: "projects/my-prj/locations/global/agents/agent-1/sessions/user-(42)*'",
    //     entityTypeId: 'custom_currency',
    //     requestBody: {
    //       displayName: 'CustomCurrency',
    //       entityOverrideMode: 'ENTITY_OVERRIDE_MODE_OVERRIDE',
    //       entities: [{ value: 'USD', synonyms: ['dollar', 'bucks'] }]
    //     }
    //   },
    //   requiredParams: ['parent'],
    //   pathParams: ['parent'],
    //   context: dialogflow.context
    // }
    //
    // BEHAVIORAL EFFECT OF THIS BRANCH ON createAPIRequest:
    // -----------------------------------------------------
    // - params.parent is matched against {+parent} and encoded with encodeWithoutSlashes,
    //   preserving slashes and (42)*' characters.
    // - params.entityTypeId is NOT in the path template, so it remains in params and gets
    //   serialized as a query string parameter ?entityTypeId=custom_currency.
    // - params.requestBody is extracted and assigned to options.data.
    // =========================================================================================
    const expectedPath =
      "/v3/projects/my-prj/locations/global/agents/agent-1/sessions/user-(42)*'/entityTypes";

    const scope = nock('https://dialogflow.googleapis.com')
      .post(expectedPath, {
        displayName: 'CustomCurrency',
        entityOverrideMode: 'ENTITY_OVERRIDE_MODE_OVERRIDE',
        entities: [{value: 'USD', synonyms: ['dollar', 'bucks']}],
      })
      .query({
        entityTypeId: 'custom_currency',
      })
      .reply(200, {
        name: `${parent}/entityTypes/custom_currency`,
        displayName: 'CustomCurrency',
      });

    // 2. User invokes the create method
    const res =
      await dialogflow.projects.locations.agents.sessions.entityTypes.create({
        parent,
        entityTypeId,
        requestBody: {
          displayName: 'CustomCurrency',
          entityOverrideMode: 'ENTITY_OVERRIDE_MODE_OVERRIDE',
          entities: [{value: 'USD', synonyms: ['dollar', 'bucks']}],
        },
      });

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.displayName, 'CustomCurrency');
    scope.done();
  });

  it('entityTypes.get: user looks up resource where path contains URI-reserved characters and query params', async () => {
    // 1. User initializes the Dialogflow Apiary client
    const dialogflow = new dialogflow_v3.Dialogflow();

    const name =
      "projects/p/locations/l/agents/a/sessions/s-(99)*/entityTypes/type-1";

    // =========================================================================================
    // UNDER THE HOOD: VALUES PASSED INTO createAPIRequest
    // =========================================================================================
    // When the user calls dialogflow.projects.locations.agents.sessions.entityTypes.get(...):
    //
    // parameters: {
    //   options: {
    //     url: 'https://dialogflow.googleapis.com/v3/{+name}',
    //     method: 'GET',
    //     apiVersion: ''
    //   },
    //   params: {
    //     name: "projects/p/locations/l/agents/a/sessions/s-(99)*/entityTypes/type-1",
    //     languageCode: 'en'
    //   },
    //   requiredParams: ['name'],
    //   pathParams: ['name'],
    //   context: dialogflow.context
    // }
    //
    // BEHAVIORAL EFFECT OF THIS BRANCH ON createAPIRequest:
    // -----------------------------------------------------
    // - name expands into /v3/projects/p/locations/l/agents/a/sessions/s-(99)*/entityTypes/type-1
    //   preserving (, ), * unencoded while validating no traversal segments.
    // - languageCode is appended as ?languageCode=en.
    // =========================================================================================
    const expectedPath =
      '/v3/projects/p/locations/l/agents/a/sessions/s-(99)*/entityTypes/type-1';

    const scope = nock('https://dialogflow.googleapis.com')
      .get(expectedPath)
      .query({languageCode: 'en'})
      .reply(200, {
        name,
        displayName: 'EntityTypeOne',
      });

    const res =
      await dialogflow.projects.locations.agents.sessions.entityTypes.get({
        name,
        languageCode: 'en',
      });

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.name, name);
    scope.done();
  });

  it('detectIntent: prevents query injection when user supplies a session containing "?" and "$"', async () => {
    // 1. User initializes the Dialogflow Apiary client
    const dialogflow = new dialogflow_v3.Dialogflow();

    // Session containing characters that could attempt to inject query parameters or URL fragment
    const injectionSession =
      'projects/p/locations/l/agents/a/sessions/session-(1)*?$foo=BAR&admin=1#frag';

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
    //     session: 'projects/p/locations/l/agents/a/sessions/session-(1)*?$foo=BAR&admin=1#frag',
    //     requestBody: {}
    //   },
    //   requiredParams: ['session'],
    //   pathParams: ['session'],
    //   context: dialogflow.context
    // }
    //
    // BEHAVIORAL EFFECT OF THIS BRANCH ON createAPIRequest:
    // -----------------------------------------------------
    // - encodeWithoutSlashes runs RFC 3986 percent-encoding per slash segment:
    //   - '?' becomes '%3F'
    //   - '$' becomes '%24'
    //   - '=' becomes '%3D'
    //   - '&' becomes '%26'
    //   - '#' becomes '%23'
    //   - '(', ')', '*' are percent-encoded strictly as '%28', '%29', '%2A'.
    // - This prevents $foo=BAR and admin=1 from becoming actual query parameters.
    // =========================================================================================
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

  it('detectIntent: throws validation error when session path contains path traversal segments', async () => {
    // 1. User initializes the Dialogflow Apiary client
    const dialogflow = new dialogflow_v3.Dialogflow();

    const traversalSession =
      'projects/p/locations/l/agents/a/sessions/agents/../subagent';

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
    await assert.rejects(
      dialogflow.projects.locations.agents.sessions.detectIntent({
        session: traversalSession,
        requestBody: {},
      }),
      /Value for session must not contain segments that are exactly \. or \.\./,
    );
  });
});
