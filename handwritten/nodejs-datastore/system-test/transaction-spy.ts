// Copyright 2025 Google LLC
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

import * as proxyquire from 'proxyquire';
import {DatastoreRequest} from '../src';
import {RequestCallback, RequestConfig} from '../src/request';

const testRequests: RequestConfig[] = [];

class RequestsMock extends DatastoreRequest {
  request_(config: RequestConfig, callback: RequestCallback): void {
    testRequests.push(config);
    super.request_(config, callback);
  }
}

// Mock Transaction class
const MockTransaction = proxyquire('../src/transaction', {
  './request': {
    DatastoreRequest: RequestsMock,
  },
}).Transaction;

// Use proxyquire to mock the Datastore class
const MockedDatastore = proxyquire('../src', {
  './transaction': {
    Transaction: MockTransaction,
  },
}).Datastore;

export {MockedDatastore, MockTransaction, testRequests};
