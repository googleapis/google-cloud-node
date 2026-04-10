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

import * as mocha from 'mocha';
import * as assert from 'assert';
import {Datastore} from '../../src';

/**
 * Returns a callback function that expects an error with a particular
 * message. This is used for testing all client library functions that accept
 * a callback in order to ensure the callback receives a particular error.
 *
 * @param {mocha.Done} done The mocha done function which is called when the
 * test finishes.
 * @param {string} message The expected error message in the test.
 *
 */
export function getCallbackExpectingError(done: mocha.Done, message: string) {
  return (error?: Error | null) => {
    try {
      if (error) {
        assert.strictEqual(error.message, message);
        done();
        return;
      }
      done(new Error('The callback should have received an error'));
    } catch (err: unknown) {
      done(err);
    }
  };
}

/**
 * This function ends the test with an error if a call reaches the gapic
 * layer. Using this function in a test makes the test fail if any outgoing
 * grpc calls are made in that test. This allows the test to ensure that no
 * grpc calls happen, which is typically desired behaviour when an error is
 * sent back to the user from the handwritten layer.
 *
 * @param {Datastore} datastore The datastore client.
 * @param {string} clientName The datastore client.
 * @param {mocha.Done} done The mocha done function which is called when the
 * test finishes.
 */
export function errorOnGapicCall(
  datastore: Datastore,
  clientName: string,
  done: mocha.Done,
) {
  const dataClient = datastore.clients_.get(clientName);
  if (dataClient) {
    dataClient.runQuery = () => {
      done(new Error('The gapic layer should not have received a call'));
    };
    dataClient.runAggregationQuery = () => {
      done(new Error('The gapic layer should not have received a call'));
    };
    dataClient.lookup = () => {
      done(new Error('The gapic layer should not have received a call'));
    };
  }
}
