// Copyright 2019 Google LLC
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
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import {Transform} from 'stream';

import {ResourceStream} from '../src/resource-stream';

describe('ResourceStream', () => {
  const sandbox = sinon.createSandbox();

  const config = {
    maxApiCalls: -1,
    maxResults: -1,
    query: {},
  };

  let requestSpy: sinon.SinonSpy;
  let stream: ResourceStream<{}>;

  beforeEach(() => {
    requestSpy = sandbox.spy();
    stream = new ResourceStream(config, requestSpy);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should pass the streamingOptions to the constructor', () => {
      const highWaterMark = 1;
      const options = {
          streamOptions: {highWaterMark},
        },
        stream = new ResourceStream(options, requestSpy);
      assert.strictEqual(stream.readableHighWaterMark, highWaterMark);
    });

    it('should set ended to false', () => {
      assert.strictEqual(stream._ended, false);
    });

    it('should set reading to false', () => {
      assert.strictEqual(stream._reading, false);
    });

    it('should set requestsMade to 0', () => {
      assert.strictEqual(stream._requestsMade, 0);
    });

    it('should localize the first query', () => {
      assert.strictEqual(stream._nextQuery, config.query);
    });

    it('should localize the request function', () => {
      assert.strictEqual(stream._requestFn, requestSpy);
    });

    describe('maxApiCalls', () => {
      it('should localize maxApiCalls', () => {
        const maxApiCalls = 100;
        stream = new ResourceStream({maxApiCalls}, requestSpy);
        assert.strictEqual(stream._maxApiCalls, maxApiCalls);
      });

      it('should set it to Infinity if not specified', () => {
        assert.strictEqual(stream._maxApiCalls, Infinity);
      });
    });

    describe('resultsToSend', () => {
      it('should localize maxResults as resultsToSend', () => {
        const maxResults = 100;
        stream = new ResourceStream({maxResults}, requestSpy);
        assert.strictEqual(stream._resultsToSend, maxResults);
      });

      it('should set it to Infinity if not specified', () => {
        assert.strictEqual(stream._resultsToSend, Infinity);
      });
    });
  });

  describe('end', () => {
    it('should set ended to true', () => {
      stream.end();
      assert.strictEqual(stream._ended, true);
    });

    it('should call through to super.end', () => {
      const stub = sandbox.stub(Transform.prototype, 'end');

      stream.end();
      assert.strictEqual(stub.callCount, 1);
    });
  });

  describe('_read', () => {
    it('should set reading to true', () => {
      stream._read();
      assert.strictEqual(stream._reading, true);
    });

    it('should noop if already reading', () => {
      stream._read();
      stream._read();

      assert.strictEqual(requestSpy.callCount, 1);
    });

    it('should pass in the query options', () => {
      stream._read();

      const query = requestSpy.lastCall.args[0];
      assert.strictEqual(query, config.query);
    });

    it('should destroy the stream if an error occurs', () => {
      const fakeError = new Error('err');
      const stub = sandbox.stub(stream, 'destroy').withArgs(fakeError);

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(fakeError);

      assert.strictEqual(stub.callCount, 1);
    });

    it('should cache the next query', () => {
      const fakeQuery = {};

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, [], fakeQuery);

      assert.strictEqual(stream._nextQuery, fakeQuery);
    });

    it('should cache the rest of the callback arguments', () => {
      const fakeRes = {status: 'OK'};
      const anotherArg = 10;

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, [], {}, fakeRes, anotherArg);

      assert.deepStrictEqual(stream._otherArgs, [fakeRes, anotherArg]);
    });

    it('should adjust the results to send counter', () => {
      const maxResults = 100;
      const results = [{}, {}];
      const expected = maxResults - results.length;

      stream = new ResourceStream({maxResults}, requestSpy);
      stream._read();

      const callback = requestSpy.lastCall.args[1];
      callback(null, results);

      assert.strictEqual(stream._resultsToSend, expected);
    });

    it('should push in all the results', () => {
      // tslint:disable-next-line ban
      const results = Array(20).fill({});
      const stub = sandbox.stub(stream, 'push');

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, results, {});

      assert.strictEqual(stub.callCount, results.length);

      results.forEach((result, i) => {
        const pushed = stub.getCall(i).args[0];
        assert.strictEqual(pushed, result);
      });
    });

    it('should stop pushing results if the stream is ended', () => {
      // tslint:disable-next-line ban
      const results = Array(20).fill({});

      stream.on('data', () => stream.end());

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, results, {});

      assert.strictEqual(requestSpy.callCount, 1);
    });

    it('should end the stream if there is no next query', () => {
      const stub = sandbox.stub(stream, 'end');

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, []);

      assert.strictEqual(stub.callCount, 1);
    });

    it('should end the stream if max results is hit', () => {
      const maxResults = 10;
      // tslint:disable-next-line ban
      const results = Array(maxResults).fill({});
      stream = new ResourceStream({maxResults}, requestSpy);
      const stub = sandbox.stub(stream, 'end');

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, results, {});

      assert.strictEqual(stub.callCount, 1);
    });

    it('should end the stream if max api calls is hit', () => {
      const maxApiCalls = 1;
      stream = new ResourceStream({maxApiCalls}, requestSpy);
      const stub = sandbox.stub(stream, 'end');

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, [], {});

      assert.strictEqual(stub.callCount, 1);
    });

    it('should stop reading if the buffer is full', () => {
      const clock = sandbox.useFakeTimers();

      // tslint:disable-next-line ban
      const results = Array(stream.readableHighWaterMark).fill({});
      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, results, {});

      const stub = sandbox.stub(stream, '_read');
      clock.runAll();

      assert.strictEqual(stub.callCount, 0);
    });

    it('should stop reading if the stream ended', () => {
      const clock = sandbox.useFakeTimers();

      stream.on('data', () => stream.end());

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, [{}], {});

      const stub = sandbox.stub(stream, '_read');
      clock.runAll();

      assert.strictEqual(stub.callCount, 0);
    });

    it('should keep reading if not full/ended', () => {
      // sinon adds a timer to `nextTick` by default beginning in v19
      // manually specifying the timers like this replicates the behavior pre v19
      const clock = sandbox.useFakeTimers({
        toFake: [
          'setTimeout',
          'clearTimeout',
          'setInterval',
          'clearInterval',
          'Date',
          'setImmediate',
          'clearImmediate',
          'hrtime',
          'performance',
        ],
      });

      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, [{}], {});

      const stub = sandbox.stub(stream, '_read');
      clock.runAll();

      assert.strictEqual(stub.callCount, 1);
    });

    it('should set reading to false inbetween reads', () => {
      stream._read();
      const callback = requestSpy.lastCall.args[1];
      callback(null, [{}], {});

      assert.strictEqual(stream._reading, false);
    });

    it('should destroy the stream if the request method throws', done => {
      const error = new Error('Error.');
      stream._requestFn = () => {
        throw error;
      };
      stream.on('error', err => {
        assert.strictEqual(err, error);
        done();
      });
      stream._read();
    });
  });
});
