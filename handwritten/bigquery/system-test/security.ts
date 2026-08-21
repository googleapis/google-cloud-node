// Copyright 2026 Google LLC
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
import {describe, it, before} from 'mocha';
import * as proxyquire from 'proxyquire';
import {GoogleAuth} from 'google-auth-library';

// Load the local build of @google-cloud/common from this branch
// eslint-disable-next-line @typescript-eslint/no-var-requires
const common = require('../../../../core/common/build/src');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let BigQuery: any;

describe('BigQuery System Security (URI encoding and path traversal protection)', () => {
  before(() => {
    // Inject the local common build prototypes and utilities
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const oldCommon = require('@google-cloud/common');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const oldUtil = require('@google-cloud/common/build/src/util');
    Object.assign(oldCommon.ServiceObject.prototype, common.ServiceObject.prototype);
    Object.assign(oldCommon.Service.prototype, common.Service.prototype);
    Object.assign(oldCommon.util, common.util);
    Object.assign(oldUtil, common.util);

    BigQuery = proxyquire('../src', {
      '@google-cloud/common': common,
    }).BigQuery;
  });

  const fakeAuthClient = Object.assign(new GoogleAuth(), {
    getCredentials: async () => ({}),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authorizeRequest: async (reqOpts: any) => reqOpts,
    getProjectId: async () => 'test-project',
  });

  it('should throw an error when dataset id is a path traversal segment (..)', async () => {
    const bigquery = new BigQuery({
      projectId: 'test-project',
      authClient: fakeAuthClient,
    });

    const invalidDataset = bigquery.dataset('..');

    await assert.rejects(
      async () => {
        await invalidDataset.getMetadata();
      },
      /Invalid value \.\. for path segment/,
    );
  });

  it('should throw an error when table id is a path traversal segment (.)', async () => {
    const bigquery = new BigQuery({
      projectId: 'test-project',
      authClient: fakeAuthClient,
    });

    const invalidTable = bigquery.dataset('valid-dataset').table('.');

    await assert.rejects(
      async () => {
        await invalidTable.getMetadata();
      },
      /Invalid value \. for path segment/,
    );
  });

  it('should percent-encode query parameter and fragment characters in table names', async () => {
    const bigquery = new BigQuery({
      projectId: 'test-project',
      authClient: fakeAuthClient,
    });

    let interceptedUri: string | undefined;
    bigquery.interceptors.push({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      request(reqOpts: any) {
        interceptedUri = reqOpts.uri;
        return reqOpts;
      },
    });

    // Mock makeAuthenticatedRequest to return mock metadata without network calls
    bigquery.makeAuthenticatedRequest = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reqOpts: any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback?: any,
    ) => {
      const response = {kind: 'bigquery#table', id: 'mock-table'};
      if (typeof callback === 'function') {
        callback(null, response, response);
      }
      return undefined;
    };

    const maliciousTableId = 'table_name?param=value#tag';
    const table = bigquery.dataset('my_dataset').table(maliciousTableId);

    await table.getMetadata();

    assert.strictEqual(typeof interceptedUri, 'string');
    assert.ok(
      (interceptedUri as unknown as string).includes(
        'datasets/my_dataset/tables/table_name%3Fparam%3Dvalue%23tag',
      ),
      `Expected URI to contain encoded table ID, but received: ${interceptedUri}`,
    );
  });
});
