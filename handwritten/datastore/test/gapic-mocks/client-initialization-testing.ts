// Copyright 2023 Google LLC
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

import {beforeEach, describe, it} from 'mocha';
import {
  Datastore,
  DatastoreClient,
  Fallback,
  DatastoreRequest,
  DatastoreOptions,
} from '../../src';
import * as assert from 'assert';
import * as proxyquire from 'proxyquire';
import {Callback, CallOptions} from 'google-gax';
import * as protos from '../../protos/protos';
import * as ds from '../../src';
import * as mocha from 'mocha';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

const clientName = 'DatastoreClient';
const async = require('async');

/**
 * This class mocks out the lookup function so that for tests in this file
 * the lookup function just sends data back instead of making a call to the
 * server. The class also saves the rest parameter in the constructor so that
 * it can be read later for correctness.
 *
 */
class FakeDatastoreClient extends DatastoreClient {
  restParameter: Fallback;
  constructor(...args: any[]) {
    super();
    this.restParameter = args[0].fallback;
  }
  lookup(
    request?: protos.google.datastore.v1.ILookupRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.datastore.v1.ILookupResponse,
          protos.google.datastore.v1.ILookupRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.datastore.v1.ILookupResponse,
      protos.google.datastore.v1.ILookupRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.datastore.v1.ILookupResponse,
      protos.google.datastore.v1.ILookupRequest | undefined,
      {} | undefined,
    ]
  > {
    if (callback) {
      callback(null, {});
    }
    return new Promise((resolve, reject) => {
      resolve([{}, {}, {}]);
    });
  }
}

describe('Client Initialization Testing', () => {
  describe('Request', () => {
    let Request: typeof ds.DatastoreRequest;
    let request: Any;

    /**
     * This function is called by a test to ensure that the rest parameter
     * gets passed to the Gapic data client's constructor
     *
     * @param {DatastoreRequest} [request] The request object whose data client
     * the test makes comparisons with.
     * @param {string | undefined} [expectedFallback] The value that the test
     * expects the rest parameter of the data client to be equal to.
     * @param {mocha.Done} [done] The done function used for indicating
     * that the test is complete or that there is an error in the mocha test
     * environment.
     *
     */
    function compareRequest(
      request: DatastoreRequest,
      expectedFallback: Fallback,
      done: mocha.Done
    ) {
      try {
        const client = request.datastore.clients_.get(clientName);
        assert(client);
        assert.strictEqual(client.restParameter, expectedFallback);
        done();
      } catch (err: unknown) {
        done(err);
      }
    }
    async.each(
      [
        {
          options: {fallback: 'rest' as Fallback},
          expectedFallback: 'rest',
          description: 'when specifying rest as a fallback parameter',
        },
        {
          options: {},
          expectedFallback: undefined,
          description: 'when specifying no fallback parameter',
        },
      ],
      (testParameters: {
        options: DatastoreOptions;
        expectedFallback: Fallback;
        description: string;
      }) => {
        describe(testParameters.description, () => {
          beforeEach(() => {
            Request = proxyquire('../../src/request', {
              './v1': {
                DatastoreClient: FakeDatastoreClient,
              },
            }).DatastoreRequest;
            request = new Request();
            request.datastore = new Datastore(testParameters.options);
            // The CI environment can't fetch project id so the function that
            // fetches the project id needs to be mocked out.
            request.datastore.auth.getProjectId = (
              callback: (err: any, projectId: string) => void
            ) => {
              callback(null, 'some-project-id');
            };
          });
          it('should set the rest parameter in the data client when calling prepareGaxRequest_', done => {
            // This request does lazy initialization of the gapic layer Datastore client.
            request.prepareGaxRequest_(
              {client: clientName, method: 'lookup'},
              () => {
                compareRequest(request, testParameters.expectedFallback, done);
              }
            );
          });
          it('should set the rest parameter in the data client when calling request_', done => {
            // This request does lazy initialization of the gapic layer Datastore client.
            request.request_({client: clientName, method: 'lookup'}, () => {
              compareRequest(request, testParameters.expectedFallback, done);
            });
          });
        });
      }
    );
  });
});
