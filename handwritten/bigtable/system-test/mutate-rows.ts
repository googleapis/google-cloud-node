// Copyright 2016 Google LLC
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

import {Bigtable} from '../src';
import {Test} from './testTypes';
const {tests} =
  require('../../system-test/data/mutate-rows-retry-test.json') as {
    tests: Test[];
  };

import * as assert from 'assert';
import {afterEach, beforeEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import {EventEmitter} from 'events';
import {Entry, PartialFailureError} from '../src/table';
import {CancellableStream, GrpcClient, GoogleAuth} from 'google-gax';
import {BigtableClient} from '../src/v2';
import {PassThrough} from 'stream';

const {grpc} = new GrpcClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dispatch(emitter: EventEmitter, response: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const emits: any[] = [];
  emits.push({name: 'request'});
  emits.push({name: 'response', arg: {code: response.code}});
  if (response.entry_codes) {
    emits.push({name: 'data', arg: entryResponses(response.entry_codes)});
  }
  emits.push({name: 'end'});
  let index = 0;
  setImmediate(next);

  function next() {
    if (index < emits.length) {
      const emit = emits[index];
      index++;
      emitter.emit(emit.name, emit.arg);
      setImmediate(next);
    }
  }
}

function entryResponses(statusCodes: number[]) {
  return {
    entries: statusCodes.map((code, index) => ({
      index,
      status: {code},
    })),
  };
}

describe('Bigtable/Table', () => {
  const bigtable = new Bigtable();
  bigtable.api = {};
  bigtable.auth = {
    getProjectId(callback: Function) {
      callback(null, 'project-id');
    },
  } as GoogleAuth;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (bigtable as any).grpcCredentials = grpc.credentials.createInsecure();

  const INSTANCE = bigtable.instance('instance');
  const TABLE = INSTANCE.table('table');

  describe('mutate()', () => {
    let clock: sinon.SinonFakeTimers;
    let mutationBatchesInvoked: Array<{}>;
    let mutationCallTimes: number[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let responses: any[] | null;
    let currentRetryAttempt: number;

    beforeEach(() => {
      clock = sinon.useFakeTimers({
        toFake: ['setTimeout', 'setImmediate', 'Date', 'nextTick'],
      });
      mutationBatchesInvoked = [];
      mutationCallTimes = [];
      responses = null;
      bigtable.api.BigtableClient = {
        mutateRows: (reqOpts, options) => {
          // TODO: Currently retry options for retry-request are ignored.
          // Retry-request is not handling grpc errors correctly, so
          // we are handling retries in table.ts and disabling retries in
          // gax to avoid a request getting retried in multiple places.
          // Re-enable this test after switching back to using the retry
          // logic in gax
          // const retryRequestOptions = {
          //   noResponseRetries: 0,
          //   objectMode: true,
          //   shouldRetryFn: shouldRetryRequest,
          //   currentRetryAttempt: currentRetryAttempt++,
          // };
          mutationBatchesInvoked.push(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            reqOpts!.entries!.map(entry => (entry.rowKey as any).asciiSlice()),
          );
          // assert.deepStrictEqual(
          //   options!.retryRequestOptions,
          //   retryRequestOptions
          // );
          mutationCallTimes.push(new Date().getTime());
          const emitter = new PassThrough({objectMode: true});
          dispatch(emitter, responses!.shift());
          return emitter as {} as CancellableStream;
        },
      } as BigtableClient;
    });

    afterEach(() => {
      clock.restore();
    });

    tests.forEach(test => {
      it(test.name, done => {
        currentRetryAttempt = 0;
        responses = test.responses;
        TABLE.maxRetries = test.max_retries;
        TABLE.mutate(test.mutations_request, error => {
          assert.deepStrictEqual(
            mutationBatchesInvoked,
            test.mutation_batches_invoked,
          );
          if (test.errors) {
            const expectedIndices = test.errors.map(error => {
              return error.index_in_mutations_request;
            });
            assert.deepStrictEqual(error!.name, 'PartialFailureError');
            const actualIndices = (error as PartialFailureError).errors!.map(
              error => {
                return test.mutations_request.indexOf(
                  (error as {entry: Entry}).entry,
                );
              },
            );
            assert.deepStrictEqual(expectedIndices, actualIndices);
          } else {
            assert.ifError(error);
          }
          done();
        });
        clock.runAll();
      });
    });
  });
});
