/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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

import assert from 'assert';
import {describe, it, before, after, afterEach, beforeEach} from 'mocha';
import * as http from 'http';
import {AddressInfo} from 'net';
import {Readable} from 'stream';
import * as zlib from 'zlib';
import * as sinon from 'sinon';
import {getGlobalDispatcher} from 'undici';
import {teenyRequest} from '../src';
import {TeenyStatistics, TeenyStatisticsWarning} from '../src/TeenyStatistics';
import {pool} from '../src/agents';

interface ReceivedRequest {
  method?: string;
  url?: string;
  headers: http.IncomingHttpHeaders;
  body: Buffer;
}

type Handler = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  body: Buffer
) => void;

const jsonHandler: Handler = (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({hello: '🌍'}));
};

describe('teeny', () => {
  const sandbox = sinon.createSandbox();
  let emitWarnStub: sinon.SinonStub;
  let statsStub: sinon.SinonStubbedInstance<TeenyStatistics>;
  let server: http.Server;
  let uri: string;
  let deadUri: string;
  let handler: Handler;
  let received: ReceivedRequest[] = [];

  before(async () => {
    server = http.createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', chunk => chunks.push(chunk));
      req.on('end', () => {
        const body = Buffer.concat(chunks);
        received.push({
          method: req.method,
          url: req.url,
          headers: req.headers,
          body,
        });
        handler(req, res, body);
      });
    });
    await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
    uri = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;

    // grab a port with nothing listening on it, for connection failures
    const dead = http.createServer();
    await new Promise<void>(resolve => dead.listen(0, '127.0.0.1', resolve));
    deadUri = `http://127.0.0.1:${(dead.address() as AddressInfo).port}`;
    await new Promise<void>(resolve => dead.close(() => resolve()));
  });

  after(async () => {
    server.closeAllConnections();
    await new Promise<void>(resolve => server.close(() => resolve()));
    await getGlobalDispatcher().close();
  });

  beforeEach(() => {
    handler = jsonHandler;
    received = [];

    emitWarnStub = sandbox.stub(process, 'emitWarning');

    // don't mask other process warns
    emitWarnStub
      .callThrough()
      .withArgs(sinon.match.instanceOf(TeenyStatisticsWarning))
      .callsFake(() => {});

    // note: this stubs the already instantiated TeenyStatistics
    statsStub = sandbox.stub(teenyRequest.stats);
  });

  afterEach(() => {
    pool.clear();
    sandbox.restore();
    teenyRequest.resetStats();
  });

  it('should get JSON', done => {
    teenyRequest({uri}, (error, response, body) => {
      assert.ifError(error);
      assert.strictEqual(response.statusCode, 200);
      assert.ok(body.hello);
      done();
    });
  });

  it('should set defaults', done => {
    const defaultRequest = teenyRequest.defaults({timeout: 60000});
    defaultRequest({uri}, (error, response, body) => {
      assert.ifError(error);
      assert.strictEqual(response.statusCode, 200);
      assert.ok(body.hello);
      done();
    });
  });

  it('response event emits object compatible with request module', done => {
    const reqHeaders = {fruit: 'banana'};
    handler = (req, res) => {
      res.setHeader('veggies', 'carrots');
      res.statusCode = 202;
      res.end('ok');
    };
    const reqStream = teenyRequest({uri, headers: reqHeaders});
    reqStream
      .on('response', res => {
        assert.strictEqual(res.statusCode, 202);
        assert.strictEqual(res.headers.veggies, 'carrots');
        assert.deepStrictEqual(res.request.headers, reqHeaders);
        assert.strictEqual(res.toJSON().headers.veggies, 'carrots');
        assert(res instanceof Readable);
        done();
      })
      .on('error', done);
    reqStream.resume();
  });

  it('should include the request in the response', done => {
    const path = '/?dessert=pie';
    const headers = {dinner: 'tacos'};
    const url = `${uri}${path}`;
    teenyRequest({url, headers}, (error, response) => {
      assert.ifError(error);
      const req = response.request;
      assert.deepStrictEqual(req.headers, headers);
      assert.strictEqual(req.href, url);
      assert.strictEqual(received[0].url, path);
      done();
    });
  });

  it('should not wrap the error', done => {
    handler = (req, res) => {
      res.setHeader('content-type', 'application/json');
      res.end('🚨');
    };
    teenyRequest({uri}, err => {
      assert.ok(err);
      assert.ok(err!.message.match(/JSON/));
      done();
    });
  });

  it('should include headers in the response', done => {
    handler = (req, res) => {
      res.setHeader('dinner', 'tacos');
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({hello: '🌍'}));
    };
    teenyRequest({uri}, (err, res) => {
      assert.ifError(err);
      assert.strictEqual(res.headers['dinner'], 'tacos');
      done();
    });
  });

  it('should accept fetch Headers', done => {
    const body = {dish: '🍕'};
    handler = (req, res) => {
      res.setHeader('country', 'Italy');
      res.end();
    };
    const headers = new Headers();
    headers.set('dinner', 'pizza');
    teenyRequest({uri, headers, json: body, method: 'POST'}, (err, res) => {
      assert.ifError(err);
      assert.strictEqual(res.headers['country'], 'Italy');
      assert.strictEqual(received[0].headers['dinner'], 'pizza');
      assert.strictEqual(received[0].headers['content-type'], 'application/json');
      assert.strictEqual(received[0].body.toString(), JSON.stringify(body));
      done();
    });
  });

  it('should accept the forever option', done => {
    teenyRequest({uri, forever: true}, (err, res) => {
      assert.ifError(err);
      assert.strictEqual(res.request.agent, false);
      done();
    });
  });

  it('should request and decompress gzip responses by default', done => {
    const payload = JSON.stringify({hello: '🌍'});
    handler = (req, res) => {
      assert.ok(String(req.headers['accept-encoding']).includes('gzip'));
      res.setHeader('content-type', 'application/json');
      res.setHeader('content-encoding', 'gzip');
      res.end(zlib.gzipSync(payload));
    };
    teenyRequest({uri, gzip: true}, (err, res, body) => {
      assert.ifError(err);
      assert.strictEqual(res.statusCode, 200);
      assert.deepStrictEqual(body, {hello: '🌍'});
      done();
    });
  });

  it('should allow setting compress/gzip to false', done => {
    handler = (req, res) => {
      assert.strictEqual(req.headers['accept-encoding'], undefined);
      res.end('ok');
    };
    teenyRequest({uri, gzip: false}, err => {
      assert.ifError(err);
      done();
    });
  });

  // see: https://github.com/googleapis/nodejs-storage/issues/798
  it('should not throw exception when piped through pumpify', async () => {
    const stream = teenyRequest({uri});
    // set the encoding for the returned stream
    stream.setEncoding('utf8');

    // collect the buffers, then concat later for performance
    const content: string[] = [];
    for await (const data of stream) {
      content.push(data);
    }

    assert.deepStrictEqual(JSON.parse(content.join('')), {hello: '🌍'});
  });

  it('should emit response event when called without callback', done => {
    const stream = teenyRequest({uri});
    stream.on('response', res => {
      assert.ok(res);
      done();
    });
    stream.resume();
  });

  it('should pipe response stream to user', done => {
    teenyRequest({uri})
      .on('error', done)
      .once('data', () => {
        done();
      });
  });

  it('should not pipe response stream to user unless they ask for it', done => {
    const stream = teenyRequest({uri}).on('error', done);
    stream.on('response', responseStream => {
      // We are using an internal property of Readable to get the number of
      // active readers. The property changed from `pipesCount: number` in
      // Node.js 12.x and below to `pipes: Array` in Node.js 13.x.
      let numPipes =
        responseStream.body._readableState.pipesCount ??
        responseStream.body._readableState.pipes?.length;
      assert.strictEqual(numPipes, 0);
      stream.once('data', () => {
        numPipes =
          responseStream.body._readableState.pipesCount ??
          responseStream.body._readableState.pipes?.length;
        assert.strictEqual(numPipes, 1);
        done();
      });
    });
  });

  it('should deliver raw bytes in stream mode, even when compressed', done => {
    const compressed = zlib.gzipSync('raw bytes for integrity validation');
    handler = (req, res) => {
      res.setHeader('content-encoding', 'gzip');
      res.end(compressed);
    };
    const stream = teenyRequest({
      uri,
      gzip: true,
      headers: {'accept-encoding': 'gzip'},
    }).on('error', done);
    const chunks: Buffer[] = [];
    stream.on('data', (chunk: Buffer) => chunks.push(chunk));
    stream.on('end', () => {
      assert.ok(Buffer.concat(chunks).equals(compressed));
      done();
    });
  });

  // see: https://github.com/googleapis/google-cloud-node/issues/9185
  it('should not emit MaxListenersExceededWarning in stream mode', async () => {
    handler = (req, res) => {
      res.end('x'.repeat(1024 * 1024));
    };
    const stream = teenyRequest({uri});
    for await (const chunk of stream) {
      void chunk;
    }
    const maxListenersWarned = emitWarnStub
      .getCalls()
      .some(call =>
        String(call.args[0]).includes('MaxListenersExceededWarning')
      );
    assert.strictEqual(maxListenersWarned, false);
  });

  it('should expose TeenyStatistics instance', () => {
    assert.ok(teenyRequest.stats instanceof TeenyStatistics);
  });

  it('should allow resetting statistics', () => {
    const oldStats = teenyRequest.stats;
    teenyRequest.resetStats();
    assert.notStrictEqual(teenyRequest.stats, oldStats);
    assert.ok(teenyRequest.stats instanceof TeenyStatistics);
  });

  it('should keep the original stats options when resetting', () => {
    statsStub.getOptions.restore();
    statsStub.setOptions.restore();
    teenyRequest.stats.setOptions({concurrentRequests: 42});
    teenyRequest.resetStats();
    const newOptions = teenyRequest.stats.getOptions();
    assert.deepStrictEqual(newOptions, {concurrentRequests: 42});
  });

  it('should emit warning on too many concurrent requests', done => {
    statsStub.setOptions.restore();
    statsStub.requestStarting.restore();
    teenyRequest.stats.setOptions({concurrentRequests: 1});

    teenyRequest({uri}, () => {
      assert.ok(emitWarnStub.calledOnce);
      done();
    });
  });

  it('should track stats, callback mode, success', done => {
    teenyRequest({uri}, () => {
      assert.ok(statsStub.requestStarting.calledOnceWithExactly());
      assert.ok(statsStub.requestFinished.calledOnceWithExactly());
      done();
    });
  });

  it('should track stats, callback mode, failure', done => {
    teenyRequest({uri: deadUri}, err => {
      assert.ok(err);
      assert.ok(statsStub.requestStarting.calledOnceWithExactly());
      assert.ok(statsStub.requestFinished.calledOnceWithExactly());
      done();
    });
  });

  it('should track stats, stream mode, success', done => {
    const readable = teenyRequest({uri});
    assert.ok(statsStub.requestStarting.calledOnceWithExactly());

    readable.once('response', () => {
      assert.ok(statsStub.requestFinished.calledOnceWithExactly());
      done();
    });
    readable.resume();
  });

  it('should track stats, stream mode, failure', done => {
    const readable = teenyRequest({uri: deadUri});
    assert.ok(statsStub.requestStarting.calledOnceWithExactly());

    readable.once('error', err => {
      assert.ok(err);
      assert.ok(statsStub.requestFinished.calledOnceWithExactly());
      done();
    });
  });

  it('should surface the system error code on connection failures', done => {
    teenyRequest({uri: deadUri}, err => {
      assert.ok(err);
      assert.strictEqual(
        (err as Error & {code?: string}).code,
        'ECONNREFUSED'
      );
      done();
    });
  });

  it('should accept a Buffer as the body of a request', done => {
    handler = (req, res) => {
      res.end('🌍');
    };
    teenyRequest(
      {uri, method: 'POST', body: Buffer.from('hello')},
      (error, response, body) => {
        assert.ifError(error);
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(body, '🌍');
        assert.strictEqual(received[0].body.toString(), 'hello');
        done();
      }
    );
  });

  it('should accept a plain string as the body of a request', done => {
    handler = (req, res) => {
      res.end('🌍');
    };
    teenyRequest(
      {uri, method: 'POST', body: 'hello'},
      (error, response, body) => {
        assert.ifError(error);
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(body, '🌍');
        assert.strictEqual(received[0].body.toString(), 'hello');
        done();
      }
    );
  });

  it('should accept json as the body of a request', done => {
    handler = (req, res) => {
      res.end('👋');
    };
    const json = {hello: '🌍'};
    teenyRequest({uri, method: 'POST', json}, (error, response, body) => {
      assert.ifError(error);
      assert.strictEqual(response.statusCode, 200);
      assert.strictEqual(body, '👋');
      assert.strictEqual(received[0].body.toString(), JSON.stringify(json));
      done();
    });
  });

  // TODO multipart is broken with 2 strings
  // see: https://github.com/googleapis/teeny-request/issues/168
  it.skip('should track stats, multipart mode, success', done => {
    teenyRequest(
      {
        method: 'POST',
        headers: {},
        multipart: [{body: 'foo'}, {body: 'bar'}],
        uri,
      },
      () => {
        assert.ok(statsStub.requestStarting.calledOnceWithExactly());
        assert.ok(statsStub.requestFinished.calledOnceWithExactly());
        done();
      }
    );
  });

  it.skip('should track stats, multipart mode, failure', done => {
    teenyRequest(
      {
        method: 'POST',
        headers: {},
        multipart: [{body: 'foo'}, {body: 'bar'}],
        uri: deadUri,
      },
      err => {
        assert.ok(err);
        assert.ok(statsStub.requestStarting.calledOnceWithExactly());
        assert.ok(statsStub.requestFinished.calledOnceWithExactly());
        done();
      }
    );
  });

  it('should throw an exception if uri is an empty string', () => {
    assert.throws(
      () => {
        teenyRequest({uri: ''});
      },
      /Missing uri or url in reqOpts/,
      'Did not throw with expected message'
    );
  });

  it('should throw an exception if url is an empty string', () => {
    assert.throws(
      () => {
        teenyRequest({url: ''});
      },
      /Missing uri or url in reqOpts/,
      'Did not throw with expected message'
    );
  });
});
