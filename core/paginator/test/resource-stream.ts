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

import {Transform} from 'stream';
import {ResourceStream} from '../src/resource-stream';

describe('ResourceStream', () => {
  const config = {
    maxApiCalls: -1,
    maxResults: -1,
    query: {},
  };

  let requestSpy: jest.Mock;
  let stream: ResourceStream<{}>;

  beforeEach(() => {
    requestSpy = jest.fn();
    stream = new ResourceStream(config, requestSpy);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  describe('instantiation', () => {
    it('should pass the streamingOptions to the constructor', () => {
      const highWaterMark = 1;
      const options = {
        streamOptions: {highWaterMark},
      };
      const stream = new ResourceStream(options, requestSpy);
      expect(stream.readableHighWaterMark).toBe(highWaterMark);
    });

    it('should set ended to false', () => {
      expect(stream._ended).toBe(false);
    });

    it('should set reading to false', () => {
      expect(stream._reading).toBe(false);
    });

    it('should set requestsMade to 0', () => {
      expect(stream._requestsMade).toBe(0);
    });

    it('should localize the first query', () => {
      expect(stream._nextQuery).toBe(config.query);
    });

    it('should localize the request function', () => {
      expect(stream._requestFn).toBe(requestSpy);
    });

    describe('maxApiCalls', () => {
      it('should localize maxApiCalls', () => {
        const maxApiCalls = 100;
        stream = new ResourceStream({maxApiCalls}, requestSpy);
        expect(stream._maxApiCalls).toBe(maxApiCalls);
      });

      it('should set it to Infinity if not specified', () => {
        expect(stream._maxApiCalls).toBe(Infinity);
      });
    });

    describe('resultsToSend', () => {
      it('should localize maxResults as resultsToSend', () => {
        const maxResults = 100;
        stream = new ResourceStream({maxResults}, requestSpy);
        expect(stream._resultsToSend).toBe(maxResults);
      });

      it('should set it to Infinity if not specified', () => {
        expect(stream._resultsToSend).toBe(Infinity);
      });
    });
  });

  describe('end', () => {
    it('should set ended to true', () => {
      stream.end();
      expect(stream._ended).toBe(true);
    });

    it('should call through to super.end', () => {
      const stub = jest.spyOn(Transform.prototype, 'end').mockImplementation();

      stream.end();
      expect(stub).toHaveBeenCalledTimes(1);
    });
  });

  describe('_read', () => {
    it('should set reading to true', () => {
      stream._read();
      expect(stream._reading).toBe(true);
    });

    it('should noop if already reading', () => {
      stream._read();
      stream._read();

      expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    it('should pass in the query options', () => {
      stream._read();

      expect(requestSpy).toHaveBeenLastCalledWith(config.query, expect.any(Function));
    });

    it('should destroy the stream if an error occurs', () => {
      const fakeError = new Error('err');
      const stub = jest.spyOn(stream, 'destroy').mockImplementation();

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(fakeError);

      expect(stub).toHaveBeenCalledTimes(1);
      expect(stub).toHaveBeenCalledWith(fakeError);
    });

    it('should cache the next query', () => {
      const fakeQuery = {};

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, [], fakeQuery);

      expect(stream._nextQuery).toBe(fakeQuery);
    });

    it('should cache the rest of the callback arguments', () => {
      const fakeRes = {status: 'OK'};
      const anotherArg = 10;

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, [], {}, fakeRes, anotherArg);

      expect(stream._otherArgs).toEqual([fakeRes, anotherArg]);
    });

    it('should adjust the results to send counter', () => {
      const maxResults = 100;
      const results = [{}, {}];
      const expected = maxResults - results.length;

      stream = new ResourceStream({maxResults}, requestSpy);
      stream._read();

      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, results);

      expect(stream._resultsToSend).toBe(expected);
    });

    it('should push in all the results', () => {
      const results = Array(20).fill({});
      const stub = jest.spyOn(stream, 'push').mockImplementation();

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, results, {});

      expect(stub).toHaveBeenCalledTimes(results.length);

      results.forEach((result, i) => {
        const pushed = stub.mock.calls[i][0];
        expect(pushed).toBe(result);
      });
    });

    it('should stop pushing results if the stream is ended', () => {
      const results = Array(20).fill({});

      stream.on('data', () => stream.end());

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, results, {});

      expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    it('should end the stream if there is no next query', () => {
      const stub = jest.spyOn(stream, 'end').mockImplementation();

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, []);

      expect(stub).toHaveBeenCalledTimes(1);
    });

    it('should end the stream if max results is hit', () => {
      const maxResults = 10;
      const results = Array(maxResults).fill({});
      stream = new ResourceStream({maxResults}, requestSpy);
      const stub = jest.spyOn(stream, 'end').mockImplementation();

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, results, {});

      expect(stub).toHaveBeenCalledTimes(1);
    });

    it('should end the stream if max api calls is hit', () => {
      const maxApiCalls = 1;
      stream = new ResourceStream({maxApiCalls}, requestSpy);
      const stub = jest.spyOn(stream, 'end').mockImplementation();

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, [], {});

      expect(stub).toHaveBeenCalledTimes(1);
    });

    it('should stop reading if the buffer is full', () => {
      jest.useFakeTimers();

      const results = Array(stream.readableHighWaterMark).fill({});
      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, results, {});

      const stub = jest.spyOn(stream, '_read').mockImplementation();
      jest.runAllTimers();

      expect(stub).toHaveBeenCalledTimes(0);
    });

    it('should stop reading if the stream ended', () => {
      jest.useFakeTimers();

      stream.on('data', () => stream.end());

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, [{}], {});

      const stub = jest.spyOn(stream, '_read').mockImplementation();
      jest.runAllTimers();

      expect(stub).toHaveBeenCalledTimes(0);
    });

    it('should keep reading if not full/ended', () => {
      jest.useFakeTimers();

      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, [{}], {});

      const stub = jest.spyOn(stream, '_read').mockImplementation();
      jest.runAllTimers();

      expect(stub).toHaveBeenCalledTimes(1);
    });

    it('should set reading to false inbetween reads', () => {
      stream._read();
      const callback =
        requestSpy.mock.calls[requestSpy.mock.calls.length - 1][1];
      callback(null, [{}], {});

      expect(stream._reading).toBe(false);
    });

    it('should destroy the stream if the request method throws', done => {
      const error = new Error('Error.');
      stream._requestFn = () => {
        throw error;
      };
      stream.on('error', err => {
        try {
          expect(err).toBe(error);
          done();
        } catch (e) {
          done(e);
        }
      });
      stream._read();
    });
  });
});
