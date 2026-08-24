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
import {describe, it} from 'mocha';
import {GoogleAuth} from 'google-auth-library';
import {ApiError} from '@google-cloud/common';
import {BigQuery} from '../src';

describe.skip('BigQuery URI path handling and traversal', () => {

  const fakeAuthClient = Object.assign(new GoogleAuth(), {
    getCredentials: async () => ({}),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authorizeRequest: async (reqOpts: any) => reqOpts,
    getProjectId: async () => 'test-project',
  });

  const testCases = [
    {
      description: 'should reject dot segment (.)',
      datasetId: '.',
      expectedError: /Invalid value \. for path segment/,
    },
    {
      description: 'should reject dot-dot segment (..)',
      datasetId: '..',
      expectedError: /Invalid value \.\. for path segment/,
    },
    {
      description:
        'should reject percent-encoded dot (period . encoded as %2e)',
      datasetId: '%2e',
      expectedError: /Invalid value \. for path segment/,
    },
    {
      description:
        'should reject uppercase percent-encoded dot (period . encoded as %2E)',
      datasetId: '%2E',
      expectedError: /Invalid value \. for path segment/,
    },
    {
      description:
        'should reject percent-encoded dot-dot (.. encoded as %2e%2e)',
      datasetId: '%2e%2e',
      expectedError: /Invalid value \.\. for path segment/,
    },
    {
      description:
        'should reject uppercase percent-encoded dot-dot (.. encoded as %2E%2E)',
      datasetId: '%2E%2E',
      expectedError: /Invalid value \.\. for path segment/,
    },
    {
      description: 'should reject paths containing dot-dot segment (foo/../bar)',
      datasetId: 'foo/../bar',
      expectedError: /Invalid value \.\. for path segment/,
    },
    {
      description:
        'should attempt request and encode query parameter (?) and fragment (#) characters',
      datasetId: 'dataset_name?param=value#tag',
      expectedError:
        /Not found: Dataset.*datasets\/dataset_name%3Fparam%3Dvalue%23tag/,
    },
    {
      description:
        'should attempt request and preserve pre-encoded space (space encoded as %20) without double encoding',
      datasetId: 'my%20dataset',
      expectedError: /Not found: Dataset.*datasets\/my%20dataset/,
    },
    {
      description: 'should attempt request for standard dataset name',
      datasetId: 'valid_dataset_123',
      expectedError: /Not found: Dataset.*datasets\/valid_dataset_123/,
    },
  ];

  for (const {description, datasetId, expectedError} of testCases) {
    it(description, async () => {
      const bigquery = new BigQuery({
        projectId: 'test-project',
        authClient: fakeAuthClient as any,
      });

      // Mock makeAuthenticatedRequest to return a 404 error containing the requested URI
      (bigquery as any).makeAuthenticatedRequest = (
        reqOpts: any,
        callback?: any,
      ) => {
        const notFoundError = new ApiError({
          message: `Not found: Dataset ${reqOpts.uri}`,
          code: 404,
          response: {} as any,
        });
        if (typeof callback === 'function') {
          callback(notFoundError, null, null);
        }
        return undefined;
      };

      const dataset = bigquery.dataset(datasetId);

      await assert.rejects(async () => {
        await dataset.getMetadata();
      }, expectedError);
    });
  }
});
