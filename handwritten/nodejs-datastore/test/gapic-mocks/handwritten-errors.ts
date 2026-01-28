// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {describe} from 'mocha';
import {AggregateField} from '../../src';
import {getInitializedDatastoreClient} from './get-initialized-datastore-client';
import {RunQueryOptions} from '../../src/query';
import {errorOnGapicCall, getCallbackExpectingError} from './error-mocks';
import * as assert from 'assert';
const async = require('async');

describe('HandwrittenLayerErrors', () => {
  describe('Can only specify one of transaction, consistency, readTime', () => {
    const clientName = 'DatastoreClient';
    const datastore = getInitializedDatastoreClient();
    async.each(
      [
        {
          options: {consistency: 'eventual', readTime: 77000},
          expectedError:
            'Read time and read consistency cannot both be specified.',
          description:
            'should error when read time and eventual consistency are specified',
        },
        {
          options: {consistency: 'eventual'},
          expectedError:
            'Read consistency cannot be specified in a transaction.',
          description:
            'should error when new transaction and eventual consistency are specified',
        },
        {
          options: {readTime: 77000},
          expectedError: 'Read time cannot be specified in a transaction.',
          description:
            'should error when new transaction and read time are specified',
        },
      ],
      (testParameters: {
        options: RunQueryOptions;
        expectedError: string;
        description: string;
      }) => {
        describe(testParameters.description, () => {
          it('should error when runQuery is used', done => {
            const transaction = datastore.transaction();
            const query = datastore.createQuery('Task');
            errorOnGapicCall(datastore, clientName, done); // Test fails if Gapic layer receives a call.
            transaction.runQuery(
              query,
              testParameters.options,
              getCallbackExpectingError(done, testParameters.expectedError),
            );
          });
          it('should error when runQueryStream is used', done => {
            const transaction = datastore.transaction();
            const query = datastore.createQuery('Task');
            errorOnGapicCall(datastore, clientName, done); // Test fails if Gapic layer receives a call.
            try {
              transaction.runQueryStream(query, testParameters.options);
              done(new Error('runQueryStream should have thrown an error'));
            } catch (err: any) {
              assert.strictEqual(err.message, testParameters.expectedError);
              done();
            }
          });
          it('should error when runAggregationQuery is used', done => {
            const transaction = datastore.transaction();
            const query = datastore.createQuery('Task');
            const aggregate = datastore
              .createAggregationQuery(query)
              .addAggregation(AggregateField.sum('appearances'));
            errorOnGapicCall(datastore, clientName, done); // Test fails if Gapic layer receives a call.
            transaction.runAggregationQuery(
              aggregate,
              testParameters.options,
              getCallbackExpectingError(done, testParameters.expectedError),
            );
          });
          it('should error when get is used', done => {
            const transaction = datastore.transaction();
            const keys = datastore.key(['Company', 'Google']);
            errorOnGapicCall(datastore, clientName, done); // Test fails if Gapic layer receives a call.
            transaction.get(
              keys,
              testParameters.options,
              getCallbackExpectingError(done, testParameters.expectedError),
            );
          });
          it('should error when createReadStream is used', done => {
            const transaction = datastore.transaction();
            const keys = datastore.key(['Company', 'Google']);
            errorOnGapicCall(datastore, clientName, done); // Test fails if Gapic layer receives a call.
            try {
              transaction.createReadStream(keys, testParameters.options);
              done(new Error('createReadStream should have thrown an error'));
            } catch (err: any) {
              assert.strictEqual(err.message, testParameters.expectedError);
              done();
            }
          });
        });
      },
    );
  });
});
