// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {GoogleAuth, createAPIRequest, JWT} from '../src';
import * as sinon from 'sinon';

/**
 * Make sure that making batch requests with HTTP/2 is actually faster.
 */

async function main() {
  const sampleSize = 50;
  const http1Results: Promise<number>[] = [];
  for (let i = 0; i < sampleSize; i++) {
    http1Results.push(makeHttp1Request());
  }
  const http1RealResults = await Promise.all(http1Results);
  console.log(http1RealResults);
  const avg1 =
    http1RealResults.reduce((acc, curr) => (acc += curr)) / sampleSize;
  console.log(`HTTP 1.1 Avg: ${avg1}`);
  const http2Results: Promise<number>[] = [];
  for (let i = 0; i < 50; i++) {
    http2Results.push(makeHttp2Request());
  }
  const http2RealResults = await Promise.all(http2Results);
  console.log(http2RealResults);
  const avg2 =
    http2RealResults.reduce((acc, curr) => (acc += curr)) / sampleSize;
  console.log(`HTTP 2 Avg: ${avg2}`);
}

async function makeHttp2Request() {
  const sandbox = sinon.createSandbox();
  const url = 'https://www.googleapis.com/discovery/v1/apis/';
  const auth = new GoogleAuth();
  sandbox.stub(auth, 'getRequestHeaders').resolves(new Headers());
  const startTime = Date.now();
  await createAPIRequest<{}>({
    options: {url, http2: true},
    params: {},
    requiredParams: [],
    pathParams: [],
    context: {
      _options: {
        auth,
      },
    },
  });
  const endTime = Date.now();
  return endTime - startTime;
}

async function makeHttp1Request() {
  const sandbox = sinon.createSandbox();
  const url = 'https://www.googleapis.com/discovery/v1/apis/';
  const auth = new JWT();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sandbox.stub(auth as any, 'getRequestMetadataAsync').resolves({});
  const startTime = Date.now();
  await createAPIRequest<{}>({
    options: {url},
    params: {},
    requiredParams: [],
    pathParams: [],
    context: {
      _options: {
        auth,
      },
    },
  });
  const endTime = Date.now();
  return endTime - startTime;
}

main().catch(console.error);
