// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as sinon from 'sinon';
import {google} from '../protos/protos';
import {createProtoRows} from './utils/proto-bytes';
import {ByteBufferTransformer} from '../src/execute-query/bytebuffertransformer';
import * as SqlValues from '../src/execute-query/values';

type PublicByteBufferTransformer = {
  messageQueue: Buffer[];
  messageBuffer: Uint8Array[];
  push: (data: any) => void;
  processProtoRowsBatch: (
    partialResultSet: google.bigtable.v2.IPartialResultSet,
  ) => void;
};

describe('Bigtable/ExecuteQueryByteBufferTransformer', () => {
  let checksumValidStub: any;
  let checksumIsValid = true;
  let byteBuffer: PublicByteBufferTransformer;

  beforeEach(() => {
    checksumIsValid = true;
    checksumValidStub = sinon
      .stub(SqlValues, 'checksumValid')
      .callsFake(() => checksumIsValid);
    byteBuffer =
      new ByteBufferTransformer() as any as PublicByteBufferTransformer;
  });

  afterEach(() => {
    checksumValidStub.restore();
  });

  describe('processProtoRowsBatch', () => {
    it('empty result', done => {
      assert.throws(() => {
        byteBuffer.processProtoRowsBatch({});
      }, /Error: Response did not contain any results!/);
      done();
    });

    it('just checksum', done => {
      const response1 = createProtoRows(undefined, undefined, undefined, {
        intValue: 1,
      });
      const responseWithChecksum = createProtoRows(undefined, 111, undefined);

      // fill the buffer
      byteBuffer.processProtoRowsBatch(response1.results!);

      // check that the buffer is filled
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.strictEqual(
        byteBuffer.messageBuffer[0],
        response1.results!.protoRowsBatch!.batchData!,
      );

      // send the checksum
      byteBuffer.processProtoRowsBatch(responseWithChecksum.results!);

      // check that the buffer is flushed and queue contains the new message
      assert.strictEqual(byteBuffer.messageQueue.length, 1);
      assert.deepStrictEqual(
        byteBuffer.messageQueue[0],
        Buffer.concat([
          response1.results!.protoRowsBatch!.batchData! as Buffer,
        ]),
      );
      assert.strictEqual(byteBuffer.messageBuffer.length, 0);
      done();
    });

    it('checksum flushes the buffer', done => {
      const response1 = createProtoRows(undefined, undefined, undefined, {
        intValue: 1,
      });
      const responseWithChecksum = createProtoRows(undefined, 111, undefined, {
        intValue: 2,
      });

      // fill the buffer
      byteBuffer.processProtoRowsBatch(response1.results!);

      // check that the buffer is filled
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.strictEqual(
        byteBuffer.messageBuffer[0],
        response1.results!.protoRowsBatch!.batchData!,
      );

      // send a reset
      byteBuffer.processProtoRowsBatch(responseWithChecksum.results!);

      // check that the buffer is flushed and queue contains the new message
      // containing both values
      assert.strictEqual(byteBuffer.messageQueue.length, 1);
      assert.deepStrictEqual(
        byteBuffer.messageQueue[0],
        Buffer.concat([
          response1.results!.protoRowsBatch!.batchData! as Buffer,
          responseWithChecksum.results!.protoRowsBatch!.batchData! as Buffer,
        ]),
      );
      assert.strictEqual(byteBuffer.messageBuffer.length, 0);
      done();
    });

    it('just reset', done => {
      const responseWithReset = createProtoRows(undefined, undefined, true);

      // send a reset
      byteBuffer.processProtoRowsBatch(responseWithReset.results!);

      done();
    });

    it('reset empties the buffer', done => {
      // we first prepare the byteBuffer with a few messages
      // then we send a reset and observe that the queue and
      // buffer have been emptied and only the new message
      // is present
      const response1 = createProtoRows(undefined, undefined, undefined, {
        intValue: 1,
      });
      const responseWithReset = createProtoRows(undefined, undefined, true, {
        intValue: 4,
      });

      byteBuffer.processProtoRowsBatch(response1.results!);

      // check that the buffer is filled
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.strictEqual(
        byteBuffer.messageBuffer[0],
        response1.results!.protoRowsBatch!.batchData!,
      );

      // send a reset
      byteBuffer.processProtoRowsBatch(responseWithReset.results!);

      // check that the buffer has been emptied and populated with
      // the new message after the reset
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.deepStrictEqual(
        byteBuffer.messageBuffer[0],
        responseWithReset.results!.protoRowsBatch!.batchData!,
      );
      done();
    });

    it('reset empties the queue and buffer', done => {
      // we first prepare the byteBuffer with a few messages
      // then we send a reset and observe that the queue and
      // buffer have been emptied and only the new message
      // is present
      const responses = [
        createProtoRows(undefined, undefined, undefined, {intValue: 1}),
        createProtoRows(undefined, 111, undefined, {intValue: 2}),
        createProtoRows(undefined, undefined, undefined, {intValue: 3}),
      ];
      const responseWithReset = createProtoRows(undefined, undefined, true, {
        intValue: 4,
      });

      // fill the buffer with messages
      for (const response of responses) {
        byteBuffer.processProtoRowsBatch(response.results!);
      }

      // check that the buffer and queue are filled
      assert.strictEqual(byteBuffer.messageQueue.length, 1);
      assert.deepStrictEqual(
        byteBuffer.messageQueue[0],
        Buffer.concat([
          responses[0].results!.protoRowsBatch!.batchData! as Buffer,
          responses[1].results!.protoRowsBatch!.batchData! as Buffer,
        ]),
      );
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.strictEqual(
        byteBuffer.messageBuffer[0],
        responses[2].results!.protoRowsBatch!.batchData!,
      );

      // send a reset
      byteBuffer.processProtoRowsBatch(responseWithReset.results!);

      // check that the buffer and queue have been emptied and populated with
      // the new message after the reset
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.deepStrictEqual(
        byteBuffer.messageBuffer[0],
        responseWithReset.results!.protoRowsBatch!.batchData!,
      );
      done();
    });

    it('token triggers push', done => {
      let pushedData = null;
      byteBuffer.push = (data: any) => {
        pushedData = data;
      };
      const response1 = createProtoRows(undefined, undefined, undefined, {
        intValue: 1,
      });
      const responseWithToken = createProtoRows('token', 111, undefined, {
        intValue: 2,
      });

      // fill the buffer
      byteBuffer.processProtoRowsBatch(response1.results!);

      // check that the buffer is filled
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.strictEqual(
        byteBuffer.messageBuffer[0],
        response1.results!.protoRowsBatch!.batchData!,
      );

      // send a token
      byteBuffer.processProtoRowsBatch(responseWithToken.results!);

      // check that the data was pushed and buffer and queue are empty
      // but pushed data contins the value from the 2nd message
      assert.strictEqual(byteBuffer.messageBuffer.length, 0);
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.deepStrictEqual(pushedData, [
        [
          Buffer.concat([
            response1.results!.protoRowsBatch!.batchData! as Buffer,
            responseWithToken.results!.protoRowsBatch!.batchData! as Buffer,
          ]),
        ],
        Buffer.from('token'),
      ]);
      done();
    });

    it('separate token', done => {
      let pushedData = null;
      byteBuffer.push = (data: any) => {
        pushedData = data;
      };
      const response1 = createProtoRows(undefined, 111, undefined, {
        intValue: 1,
      });
      const responseWithToken = createProtoRows('token', undefined, undefined);

      // fill the buffer
      byteBuffer.processProtoRowsBatch(response1.results!);

      // check that the buffer is filled
      assert.strictEqual(byteBuffer.messageQueue.length, 1);
      assert.strictEqual(byteBuffer.messageBuffer.length, 0);

      // send a token
      byteBuffer.processProtoRowsBatch(responseWithToken.results!);

      // check that the data was pushed and buffer and queue are empty
      assert.strictEqual(byteBuffer.messageBuffer.length, 0);
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.deepStrictEqual(pushedData, [
        [response1.results!.protoRowsBatch!.batchData! as Buffer],
        Buffer.from('token'),
      ]);
      done();
    });

    it('checksum without data throws', done => {
      const responseWithChecksum = createProtoRows(undefined, 111, undefined);

      // send a checksum
      assert.throws(() => {
        byteBuffer.processProtoRowsBatch(responseWithChecksum.results!);
      }, /Error: Recieved empty batch with non-zero checksum\./);

      done();
    });

    it('token without checksum throws', done => {
      let pushedData = null;
      byteBuffer.push = (data: any) => {
        pushedData = data;
      };
      const response1 = createProtoRows(undefined, undefined, undefined, {
        intValue: 1,
      });
      const responseWithToken = createProtoRows('token', undefined, undefined);

      // fill the buffer
      byteBuffer.processProtoRowsBatch(response1.results!);

      // check that the buffer is filled
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 1);
      assert.strictEqual(
        byteBuffer.messageBuffer[0],
        response1.results!.protoRowsBatch!.batchData!,
      );

      // send a token
      assert.throws(() => {
        byteBuffer.processProtoRowsBatch(responseWithToken.results!);
      }, /Error: Recieved incomplete batch of rows\./);

      done();
    });

    it('token without data', done => {
      let pushedData = null;
      byteBuffer.push = (data: any) => {
        pushedData = data;
      };
      const responseWithToken = createProtoRows('token', undefined, undefined);

      // check that the buffer and queue are empty
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.strictEqual(byteBuffer.messageBuffer.length, 0);

      // send a token
      byteBuffer.processProtoRowsBatch(responseWithToken.results!);

      // check that the token was pushed even though the buffer and queue are empty
      assert.strictEqual(byteBuffer.messageBuffer.length, 0);
      assert.strictEqual(byteBuffer.messageQueue.length, 0);
      assert.deepStrictEqual(pushedData, [[], Buffer.from('token')]);
      done();
    });

    it('cheksum properly calculated', done => {
      checksumValidStub.restore();
      const response = createProtoRows(
        'token1',
        2412835642,
        undefined,
        {intValue: 1},
        {intValue: 2},
      );
      byteBuffer.processProtoRowsBatch(response.results!);
      done();
    });

    it('invalid cheksum throws', done => {
      checksumValidStub.restore();
      const response = createProtoRows(
        'token1',
        111,
        undefined,
        {intValue: 1},
        {intValue: 2},
      );
      assert.throws(() => {
        byteBuffer.processProtoRowsBatch(response.results!);
      }, /Error: Failed to validate next batch of results/);
      done();
    });
  });
});
