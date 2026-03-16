/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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
import {describe, it, beforeEach} from 'mocha';
import {grpc} from 'google-gax';
import {PublishError} from '../../src/publisher/publish-error';

describe('PublishError', () => {
  let error: PublishError;

  const orderingKey = 'abcd';
  const fakeError = new Error('Oh noes') as grpc.ServiceError;

  fakeError.code = 1;
  fakeError.details = 'Something went wrong!';
  fakeError.metadata = new grpc.Metadata();

  beforeEach(() => {
    error = new PublishError(orderingKey, fakeError);
  });

  it('should give a helpful message', () => {
    assert.strictEqual(
      error.message,
      `Unable to publish for key "${orderingKey}". Reason: ${fakeError.message}`,
    );
  });

  it('should capture the error code', () => {
    assert.strictEqual(error.code, fakeError.code);
  });

  it('should capture the error details', () => {
    assert.strictEqual(error.details, fakeError.details);
  });

  it('should capture the error metadata', () => {
    assert.strictEqual(error.metadata, fakeError.metadata);
  });

  it('should capture the ordering key', () => {
    assert.strictEqual(error.orderingKey, orderingKey);
  });

  it('should capture the original error', () => {
    assert.strictEqual(error.error, fakeError);
  });
});
