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
import {DatastoreClient} from '../../src';
import * as protos from '../../protos/protos';
import {getInitializedDatastoreClient} from './get-initialized-datastore-client';

describe('Run Query', () => {
  const clientName = 'DatastoreClient';
  const datastore = getInitializedDatastoreClient();

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

  it('should pass new transaction into runQuery for transactions', async () => {
    setRunQueryComparison(
      (request: protos.google.datastore.v1.IRunQueryRequest) => {
        assert.deepStrictEqual(request, {
          readOptions: {
            consistencyType: 'newTransaction',
            newTransaction: {},
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
    await transaction.runQuery(query);
  });
});
