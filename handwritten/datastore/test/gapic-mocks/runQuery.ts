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

import * as assert from 'assert';
import {describe} from 'mocha';
import {DatastoreClient, Datastore} from '../../src';
import * as protos from '../../protos/protos';
import {Callback} from 'google-gax';

describe('Run Query', () => {
  const PROJECT_ID = 'project-id';
  const NAMESPACE = 'namespace';
  const clientName = 'DatastoreClient';
  const options = {
    projectId: PROJECT_ID,
    namespace: NAMESPACE,
  };
  const datastore = new Datastore(options);
  // By default, datastore.clients_ is an empty map.
  // To mock out commit we need the map to contain the Gapic data client.
  // Normally a call to the data client through the datastore object would initialize it.
  // We don't want to make this call because it would make a grpc request.
  // So we just add the data client to the map.
  const gapic = Object.freeze({
    v1: require('../../src/v1'),
  });
  datastore.clients_.set(clientName, new gapic.v1[clientName](options));

  // This function is used for doing assertion checks.
  // The idea is to check that the right request gets passed to the commit function in the Gapic layer.
  function setRunQueryComparison(
    compareFn: (request: protos.google.datastore.v1.IRunQueryRequest) => void
  ) {
    const dataClient = datastore.clients_.get(clientName);
    if (dataClient) {
      dataClient.runQuery = (
        request: any,
        options: any,
        callback: (
          err?: unknown,
          res?: protos.google.datastore.v1.IRunQueryResponse
        ) => void
      ) => {
        try {
          compareFn(request);
        } catch (e) {
          callback(e);
        }
        callback(null, {
          batch: {
            moreResults:
              protos.google.datastore.v1.QueryResultBatch.MoreResultsType
                .NO_MORE_RESULTS,
          },
        });
      };
    }
  }

  it('should pass read time into runQuery for transactions', async () => {
    // First mock out beginTransaction
    const dataClient = datastore.clients_.get(clientName);
    const testId = Buffer.from(Array.from(Array(100).keys()));
    if (dataClient) {
      dataClient.beginTransaction = (
        request: protos.google.datastore.v1.IBeginTransactionRequest,
        options: protos.google.datastore.v1.IBeginTransactionResponse,
        callback: Callback<
          protos.google.datastore.v1.IBeginTransactionResponse,
          | protos.google.datastore.v1.IBeginTransactionRequest
          | null
          | undefined,
          {} | null | undefined
        >
      ) => {
        callback(null, {
          transaction: testId,
        });
      };
    }
    setRunQueryComparison(
      (request: protos.google.datastore.v1.IRunQueryRequest) => {
        assert.deepStrictEqual(request, {
          readOptions: {
            transaction: testId,
            readTime: {
              seconds: 77,
            },
          },
          partitionId: {
            namespaceId: 'namespace',
          },
          query: {
            distinctOn: [],
            kind: [{name: 'Task'}],
            order: [],
            projection: [],
          },
          projectId: 'project-id',
        });
      }
    );
    const transaction = datastore.transaction();
    const query = datastore.createQuery('Task');
    await transaction.runQuery(query, {readTime: 77000});
  });
});
