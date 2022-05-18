/*!
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as fs from 'fs';
import {OutgoingHttpHeaders} from 'http';
import * as path from 'path';
import * as sinon from 'sinon';
import * as querystring from 'querystring';

import {
  Storage,
  GetSignedUrlConfig,
  GenerateSignedPostPolicyV4Options,
} from '../src/';
import * as url from 'url';

export enum UrlStyle {
  PATH_STYLE = 'PATH_STYLE',
  VIRTUAL_HOSTED_STYLE = 'VIRTUAL_HOSTED_STYLE',
  BUCKET_BOUND_HOSTNAME = 'BUCKET_BOUND_HOSTNAME',
}

interface V4SignedURLTestCase {
  description: string;
  bucket: string;
  object?: string;
  urlStyle?: UrlStyle;
  bucketBoundHostname?: string;
  scheme: 'https' | 'http';
  headers?: OutgoingHttpHeaders;
  queryParameters?: {[key: string]: string};
  method: string;
  expiration: number;
  timestamp: string;
  expectedUrl: string;
}

interface V4SignedPolicyTestCase {
  description: string;
  policyInput: PolicyInput;
  policyOutput: PolicyOutput;
}

interface PolicyInput {
  scheme: 'https' | 'http';
  bucket: string;
  object: string;
  expiration: number;
  timestamp: string;
  urlStyle?: UrlStyle;
  bucketBoundHostname?: string;
  conditions?: Conditions;
  fields?: {[key: string]: string};
}

interface Conditions {
  contentLengthRange: [number, number];
  startsWith: [string, string];
  acl: string;
}

interface PolicyOutput {
  url: string;
  fields: {[key: string]: string};
  expectedDecodedPolicy: string;
}

interface FileAction {
  [key: string]: 'read' | 'resumable' | 'write' | 'delete';
}

interface BucketAction {
  [key: string]: 'list';
}

const testFile = fs.readFileSync(
  path.join(__dirname, '../../conformance-test/test-data/v4SignedUrl.json'),
  'utf-8'
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testCases = JSON.parse(testFile);
const v4SignedUrlCases: V4SignedURLTestCase[] = testCases.signingV4Tests;
const v4SignedPolicyCases: V4SignedPolicyTestCase[] =
  testCases.postPolicyV4Tests;

const SERVICE_ACCOUNT = path.join(
  __dirname,
  '../../conformance-test/fixtures/signing-service-account.json'
);

const storage = new Storage({keyFilename: SERVICE_ACCOUNT});

describe('v4 conformance test', () => {
  describe('v4 signed url', () => {
    v4SignedUrlCases.forEach(testCase => {
      it(testCase.description, async () => {
        const NOW = new Date(testCase.timestamp);

        const fakeTimer = sinon.useFakeTimers(NOW);
        const bucket = storage.bucket(testCase.bucket);
        const expires = NOW.valueOf() + testCase.expiration * 1000;
        const version = 'v4' as const;
        const origin = testCase.bucketBoundHostname
          ? `${testCase.scheme}://${testCase.bucketBoundHostname}`
          : undefined;
        const {bucketBoundHostname, virtualHostedStyle} = parseUrlStyle(
          testCase.urlStyle,
          origin
        );
        const extensionHeaders = testCase.headers;
        const queryParams = testCase.queryParameters;
        const baseConfig = {
          extensionHeaders,
          version,
          expires,
          cname: bucketBoundHostname,
          virtualHostedStyle,
          queryParams,
        };
        let signedUrl: string;

        if (testCase.object) {
          const file = bucket.file(testCase.object);

          const action = (
            {
              GET: 'read',
              POST: 'resumable',
              PUT: 'write',
              DELETE: 'delete',
            } as FileAction
          )[testCase.method];

          [signedUrl] = await file.getSignedUrl({
            action,
            ...baseConfig,
          } as GetSignedUrlConfig);
        } else {
          // bucket operation
          const action = (
            {
              GET: 'list',
            } as BucketAction
          )[testCase.method];

          [signedUrl] = await bucket.getSignedUrl({
            action,
            ...baseConfig,
          });
        }

        const expected = new url.URL(testCase.expectedUrl);
        const actual = new url.URL(signedUrl);

        assert.strictEqual(actual.origin, expected.origin);
        assert.strictEqual(actual.pathname, expected.pathname);
        // Order-insensitive comparison of query params
        assert.deepStrictEqual(
          querystring.parse(actual.search),
          querystring.parse(expected.search)
        );

        fakeTimer.restore();
      });
    });
  });

  describe('v4 signed policy', () => {
    v4SignedPolicyCases.forEach(testCase => {
      it(testCase.description, async () => {
        const input = testCase.policyInput;
        const NOW = new Date(input.timestamp);
        const fakeTimer = sinon.useFakeTimers(NOW);
        const bucket = storage.bucket(input.bucket);
        const expires = NOW.valueOf() + input.expiration * 1000;
        const options: GenerateSignedPostPolicyV4Options = {
          expires,
        };

        const conditions = [];
        if (input.conditions) {
          if (input.conditions.startsWith) {
            const variable = input.conditions.startsWith[0];
            const prefix = input.conditions.startsWith[1];
            conditions.push(['starts-with', variable, prefix]);
          }

          if (input.conditions.contentLengthRange) {
            const min = input.conditions.contentLengthRange[0];
            const max = input.conditions.contentLengthRange[1];
            conditions.push(['content-length-range', min, max]);
          }
        }

        const origin = input.bucketBoundHostname
          ? `${input.scheme}://${input.bucketBoundHostname}`
          : undefined;
        const {bucketBoundHostname, virtualHostedStyle} = parseUrlStyle(
          input.urlStyle,
          origin
        );
        options.virtualHostedStyle = virtualHostedStyle;
        options.bucketBoundHostname = bucketBoundHostname;
        options.fields = input.fields;
        options.conditions = conditions;

        const file = bucket.file(input.object);
        const [policy] = await file.generateSignedPostPolicyV4(options);

        assert.strictEqual(policy.url, testCase.policyOutput.url);
        const outputFields = testCase.policyOutput.fields;
        const decodedPolicy = JSON.parse(
          Buffer.from(policy.fields.policy, 'base64').toString()
        );
        assert.deepStrictEqual(
          decodedPolicy,
          JSON.parse(testCase.policyOutput.expectedDecodedPolicy)
        );

        assert.deepStrictEqual(policy.fields, outputFields);

        fakeTimer.restore();
      });
    });
  });
});

function parseUrlStyle(
  style?: UrlStyle,
  origin?: string
): {bucketBoundHostname?: string; virtualHostedStyle?: boolean} {
  if (style === UrlStyle.BUCKET_BOUND_HOSTNAME) {
    return {bucketBoundHostname: origin};
  } else if (style === UrlStyle.VIRTUAL_HOSTED_STYLE) {
    return {virtualHostedStyle: true};
  } else {
    return {virtualHostedStyle: false};
  }
}
