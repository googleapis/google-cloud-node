// Copyright 2022 Google LLC
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

import {describe, it} from 'mocha';
import * as assert from 'assert';
import {
  AckErrorInfo,
  processAckErrorInfo,
  processAckRpcError,
} from '../src/ack-metadata';
import {GoogleError, Status} from 'google-gax';
import {AckResponses} from '../src/subscriber';

describe('ack-metadata', () => {
  it('deals with no ErrorInfo', () => {
    const error = {} as GoogleError;
    const results = processAckErrorInfo(error);
    assert.strictEqual(results.size, 0);
  });

  it('handles permanent errors', () => {
    const ackId = '12345';
    const errorCode = 'PERMANENT_FAILURE_INVALID_ACK_ID';
    const error = {
      errorInfoMetadata: {
        [ackId]: errorCode,
      },
    } as unknown as GoogleError;

    const results = processAckErrorInfo(error);

    assert.deepStrictEqual(Array.from(results.entries()), [
      [
        ackId,
        {
          transient: false,
          response: AckResponses.Invalid,
          rawErrorCode: errorCode,
        },
      ],
    ]);
  });

  it('handles transient errors', () => {
    const ackId = '12345';
    const errorCode = 'TRANSIENT_FAILURE_ESPRESSO_BAR_CLOSED';
    const error = {
      errorInfoMetadata: {
        [ackId]: errorCode,
      },
    } as unknown as GoogleError;

    const results = processAckErrorInfo(error);

    assert.deepStrictEqual(Array.from(results.entries()), [
      [
        ackId,
        {
          transient: true,
          rawErrorCode: errorCode,
        },
      ],
    ]);
  });

  it('handles other errors', () => {
    const ackId = '12345';
    const errorCode = 'NO_IDEA_ERROR';
    const error = {
      errorInfoMetadata: {
        [ackId]: errorCode,
      },
    } as unknown as GoogleError;

    const results = processAckErrorInfo(error);

    assert.deepStrictEqual(Array.from(results.entries()), [
      [
        ackId,
        {
          transient: false,
          response: AckResponses.Other,
          rawErrorCode: errorCode,
        },
      ],
    ]);
  });

  it('handles multiple responses', () => {
    const ackIds = ['12345', '23456', '34567'];
    const errorCodes = [
      'PERMANENT_FAILURE_INVALID_ACK_ID',
      'TRANSIENT_FAILURE_ESPRESSO_BAR_CLOSED',
      'NO_IDEA_ERROR',
    ];
    const expectedResults = new Map<string, AckErrorInfo>([
      [
        ackIds[0],
        {
          transient: false,
          response: AckResponses.Invalid,
          rawErrorCode: errorCodes[0],
        },
      ],
      [
        ackIds[1],
        {
          transient: true,
          rawErrorCode: errorCodes[1],
        },
      ],
      [
        ackIds[2],
        {
          transient: false,
          response: AckResponses.Other,
          rawErrorCode: errorCodes[2],
        },
      ],
    ]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metaData: any = {};
    for (let i = 0; i < ackIds.length; i++) {
      metaData[ackIds[i]] = errorCodes[i];
    }

    const error = {
      errorInfoMetadata: metaData,
    } as unknown as GoogleError;

    const results = processAckErrorInfo(error);

    ackIds.forEach(id => {
      const ackError = results.get(id);
      const expected = expectedResults.get(id);
      assert.deepStrictEqual(ackError, expected);
    });
  });

  it('handles gRPC errors', () => {
    const testTable = [
      {
        code: Status.DEADLINE_EXCEEDED,
        result: {
          transient: true,
          grpcErrorCode: Status.DEADLINE_EXCEEDED,
          response: AckResponses.Other,
        },
      },
      {
        code: Status.RESOURCE_EXHAUSTED,
        result: {
          transient: true,
          grpcErrorCode: Status.RESOURCE_EXHAUSTED,
          response: AckResponses.Other,
        },
      },
      {
        code: Status.ABORTED,
        result: {
          transient: true,
          grpcErrorCode: Status.ABORTED,
          response: AckResponses.Other,
        },
      },
      {
        code: Status.INTERNAL,
        result: {
          transient: true,
          grpcErrorCode: Status.INTERNAL,
          response: AckResponses.Other,
        },
      },
      {
        code: Status.UNAVAILABLE,
        result: {
          transient: true,
          grpcErrorCode: Status.UNAVAILABLE,
          response: AckResponses.Other,
        },
      },
      {
        code: Status.PERMISSION_DENIED,
        result: {
          transient: false,
          grpcErrorCode: Status.PERMISSION_DENIED,
          response: AckResponses.PermissionDenied,
        },
      },
      {
        code: Status.FAILED_PRECONDITION,
        result: {
          transient: false,
          grpcErrorCode: Status.FAILED_PRECONDITION,
          response: AckResponses.FailedPrecondition,
        },
      },
      {
        code: Status.UNIMPLEMENTED,
        result: {
          transient: false,
          grpcErrorCode: Status.UNIMPLEMENTED,
          response: AckResponses.Other,
        },
      },
    ];

    for (const t of testTable) {
      const result = processAckRpcError(t.code);
      assert.deepStrictEqual(result, t.result);
    }
  });
});
