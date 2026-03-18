// Copyright 2020 Google LLC
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
import * as coreHttp2 from 'http2';
import {describe, it, before, beforeEach} from 'mocha';
import {gzipSync} from 'zlib';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {Duplex, Readable} from 'stream';
import {EventEmitter} from 'events';
import {GaxiosResponse} from 'gaxios';
import * as http2Types from '../src/http2';

import {GoogleAuth} from '../src';

const {
  HTTP2_HEADER_CONTENT_TYPE,
  HTTP2_HEADER_METHOD,
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
  HTTP2_HEADER_CONTENT_ENCODING,
} = coreHttp2.constants;

class FakeClient extends EventEmitter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request = (headers: coreHttp2.OutgoingHttpHeaders) => {
    return new EventEmitter();
  };
  close = (callback: Function) => {
    callback();
  };
  destroy = () => {};
}

describe('http2', () => {
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  // explicitly setting this on `sinon` and not the `sandbox` so this stub
  // persists across test runs.
  sinon.stub(auth, 'request').resolves({
    data: {},
  } as GaxiosResponse<{}>);

  function fakeConnect(host: string) {
    return (connectStub || (() => {}))(host);
  }
  let connectStub: Function;
  let http2: typeof http2Types;
  before(() => {
    http2 = proxyquire('../src/http2', {
      http2: {
        connect: fakeConnect,
      },
    });
  });

  let requestStream: Duplex;
  beforeEach(() => {
    // Create a naive ClientHttp2Session that returns an empty stream.
    // `requestStream` is visible to tests can poke at it.
    connectStub = () => {
      const client = new FakeClient();
      client.request = () => {
        requestStream = new Duplex();
        requestStream._read = () => {};
        requestStream._write = () => {};
        return requestStream;
      };
      return client;
    };
    // All sessions are cached by host for a period of time, so clean up the
    // cache inbetween each test.
    Object.keys(http2.sessions).forEach(x => {
      delete http2.sessions[x];
    });
  });

  const host = 'https://example.com';
  const path = '/tasks';
  const url = host + path;

  it('should set the expected headers', async () => {
    let stream: EventEmitter;
    connectStub = (connectHost: string) => {
      assert.strictEqual(host, connectHost);
      const client = new FakeClient();
      client.request = (headers: coreHttp2.OutgoingHttpHeaders) => {
        assert.strictEqual(headers[HTTP2_HEADER_PATH], path);
        assert.strictEqual(headers[HTTP2_HEADER_METHOD], 'GET');
        assert.strictEqual(
          headers[HTTP2_HEADER_CONTENT_TYPE],
          'application/json',
        );
        stream = new EventEmitter();
        return stream;
      };
      return client;
    };
    // Give it a tick or two to work things out
    setImmediate(() => {
      stream.emit('response', {[HTTP2_HEADER_STATUS]: 200});
      stream.emit('data', Buffer.from(JSON.stringify({hello: 'world'})));
      stream.emit('end');
    });
    await http2.request({url});
  });

  it('should auto-decode a gzip stream', async () => {
    const responseData = {hello: 'world'};
    const resPromise = http2.request({url});
    requestStream.emit('response', {
      [HTTP2_HEADER_STATUS]: 200,
      [HTTP2_HEADER_CONTENT_ENCODING]: 'gzip',
    });
    const content = gzipSync(Buffer.from(JSON.stringify(responseData)));
    requestStream.push(content);
    requestStream.push(null);
    const res = await resPromise;
    assert.deepStrictEqual(res.data, responseData);
  });

  it('should cache sessions', async () => {
    const resPromise = http2.request({url});
    assert.strictEqual(Object.keys(http2.sessions).length, 1);
    assert.strictEqual(Object.keys(http2.sessions)[0], 'example.com');
    requestStream.emit('response', {
      [HTTP2_HEADER_STATUS]: 200,
    });
    requestStream.push(Buffer.from('{}'));
    requestStream.push(null);
    await resPromise;
  });

  it('should remove sessions from the cache after a while', async () => {
    const resPromise = http2.request({url});
    requestStream.emit('response', {
      [HTTP2_HEADER_STATUS]: 200,
    });
    requestStream.push(Buffer.from('{}'));
    requestStream.push(null);
    await resPromise;
    await new Promise(r => setTimeout(r, 500));
    assert.strictEqual(Object.keys(http2.sessions).length, 0);
  });

  it('should remove sessions if they emit an error', async () => {
    const resPromise = http2.request({url});
    requestStream.emit('response', {
      [HTTP2_HEADER_STATUS]: 200,
    });
    requestStream.push(Buffer.from('{}'));
    requestStream.push(null);
    await resPromise;
    http2.sessions['example.com'].session.emit('error', new Error('😱'));
    assert.strictEqual(Object.keys(http2.sessions).length, 0);
  });

  it('should remove sessions on goaway', async () => {
    const resPromise = http2.request({url});
    requestStream.emit('response', {
      [HTTP2_HEADER_STATUS]: 200,
    });
    requestStream.push(Buffer.from('{}'));
    requestStream.push(null);
    await resPromise;
    http2.sessions['example.com'].session.emit('goaway');
    assert.strictEqual(Object.keys(http2.sessions).length, 0);
  });

  it('should encode querystring parameters', async () => {
    let stream!: EventEmitter;
    connectStub = () => {
      const client = new FakeClient();
      client.request = (headers: coreHttp2.OutgoingHttpHeaders) => {
        assert.strictEqual(headers[HTTP2_HEADER_PATH], '/tasks?hello=world');
        stream = new EventEmitter();
        return stream;
      };
      return client;
    };
    const reqPromise = http2.request({
      url,
      params: {
        hello: 'world',
      },
    });
    stream.emit('response', {[HTTP2_HEADER_STATUS]: 200});
    stream.emit('data', Buffer.from(JSON.stringify({hello: 'world'})));
    stream.emit('end');
    await reqPromise;
  });

  it('should reject the promise on stream errors', async () => {
    const resPromise = http2.request({url});
    requestStream.emit('response', {
      [HTTP2_HEADER_STATUS]: 200,
    });
    const error = new Error('🚨');
    requestStream.emit('error', error);
    await assert.rejects(resPromise, /🚨/);
  });

  it('should reject the promise on non-2xx status codes', async () => {
    const resPromise = http2.request({url});
    requestStream.emit('response', {
      [HTTP2_HEADER_STATUS]: 418,
    });
    requestStream.push(Buffer.from('{}'));
    requestStream.push(null);
    await assert.rejects(resPromise, /status code 418/);
  });

  it('should allow posting an object', async () => {
    let requestStream!: Duplex;
    let writtenTo = false;
    const data = {
      hello: 'world',
    };
    connectStub = () => {
      const client = new FakeClient();
      client.request = (headers: coreHttp2.OutgoingHttpHeaders) => {
        assert.strictEqual(headers[HTTP2_HEADER_METHOD], 'POST');
        requestStream = new Duplex();
        requestStream._read = () => {};
        requestStream._write = (chunk: Buffer) => {
          writtenTo = true;
          const localData = JSON.parse(chunk.toString('utf8'));
          assert.deepStrictEqual(localData, data);
        };
        return requestStream;
      };
      return client;
    };
    const resPromise = http2.request({
      url,
      method: 'POST',
      data,
    });
    requestStream.emit('response', {[HTTP2_HEADER_STATUS]: 202});
    requestStream.push(null);
    await resPromise;
    assert(writtenTo);
  });

  it('should allow putting a string', async () => {
    let requestStream!: Duplex;
    let writtenTo = false;
    const data = 'boop';
    connectStub = () => {
      const client = new FakeClient();
      client.request = (headers: coreHttp2.OutgoingHttpHeaders) => {
        assert.strictEqual(headers[HTTP2_HEADER_METHOD], 'PUT');
        requestStream = new Duplex();
        requestStream._read = () => {};
        requestStream._write = (chunk: Buffer) => {
          writtenTo = true;
          const localData = chunk.toString('utf8');
          assert.deepStrictEqual(localData, data);
        };
        return requestStream;
      };
      return client;
    };
    const resPromise = http2.request({
      url,
      method: 'PUT',
      data,
    });
    requestStream.emit('response', {[HTTP2_HEADER_STATUS]: 200});
    requestStream.push(null);
    await resPromise;
    assert(writtenTo);
  });

  it('should allow posting via stream', async () => {
    let requestStream!: Duplex;
    let writtenTo = false;
    const data = new Readable();
    data._read = () => {};
    connectStub = () => {
      const client = new FakeClient();
      client.request = (headers: coreHttp2.OutgoingHttpHeaders) => {
        assert.strictEqual(headers[HTTP2_HEADER_METHOD], 'POST');
        requestStream = new Duplex();
        requestStream._read = () => {};
        requestStream._write = (chunk: Buffer) => {
          writtenTo = true;
          const localData = chunk.toString('utf8');
          assert.deepStrictEqual(localData, 'boop');
        };
        return requestStream;
      };
      return client;
    };
    const resPromise = http2.request({
      url,
      method: 'POST',
      data,
    });
    data.push('boop');
    data.push(null);
    requestStream.emit('response', {[HTTP2_HEADER_STATUS]: 200});
    requestStream.push(null);
    await resPromise;
    assert(writtenTo);
  });
});
