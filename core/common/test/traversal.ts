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

// TODO: Delete this test suite after the traversal tests in
// handwritten/bigquery/system-test/traversal.ts are unskipped.

import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as r from 'teeny-request';

import {Service, ServiceObject} from '../src';
import {
  ApiError,
  BodyResponseCallback,
  DecorateRequestOptions,
  MakeAuthenticatedRequest,
} from '../src/util';

describe('URI path handling and traversal (ServiceObject & Service)', () => {
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
    {
      description:
        'should handle colon-separated segments without double decoding',
      datasetId: 'domain.com:custom_dataset%20name',
      expectedError:
        /Not found: Dataset.*datasets\/domain\.com:custom_dataset%20name/,
    },
    {
      description:
        'should preserve literal percent-encoded sequences in colon-separated segments without decoding twice',
      datasetId: 'project:item%2520name',
      expectedError:
        /Not found: Dataset.*datasets\/project:item%2520name/,
    },
  ];

  for (const {description, datasetId, expectedError} of testCases) {
    it(description, async () => {
      // Test ServiceObject path handling
      const fakeParent = {
        interceptors: [],
        getRequestInterceptors: () => [],
        requestStream: () => ({} as r.Request),
        request: (
          reqOpts: DecorateRequestOptions,
          callback: BodyResponseCallback,
        ) => {
          const notFoundError = new ApiError({
            message: `Not found: Dataset ${reqOpts.uri}`,
            code: 404,
            response: {} as r.Response,
          });
          callback(notFoundError, null, {} as r.Response);
        },
      };

      const serviceObject = new ServiceObject({
        parent: fakeParent as unknown as Service,
        baseUrl: 'datasets',
        id: datasetId,
      });

      await assert.rejects(async () => {
        await serviceObject.getMetadata();
      }, expectedError);

      // Test Service path handling
      const service = new Service({
        scopes: [],
        baseUrl: 'datasets',
        projectIdRequired: false,
        apiEndpoint: 'datasets',
        packageJson: {name: 'test', version: '1.0.0'},
      });
      service.makeAuthenticatedRequest = ((
        reqOpts: DecorateRequestOptions,
        callback?: BodyResponseCallback,
      ) => {
        const notFoundError = new ApiError({
          message: `Not found: Dataset ${reqOpts.uri}`,
          code: 404,
          response: {} as r.Response,
        });
        if (typeof callback === 'function') {
          callback(notFoundError, null, {} as r.Response);
        }
      }) as unknown as MakeAuthenticatedRequest;

      await assert.rejects(async () => {
        await new Promise((resolve, reject) => {
          service.request({uri: datasetId}, (err, resp) => {
            if (err) return reject(err);
            resolve(resp);
          });
        });
      }, expectedError);
    });
  }
});
