// Copyright 2026 Google LLC
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
import * as http2 from 'http2';
import * as sinon from 'sinon';
import * as stream from 'stream';
import {
  installHttp2StreamEndWorkaround,
  _resetHttp2StreamEndWorkaroundForTest,
  _isHttp2StreamEndWorkaroundInstalled,
} from '../src/http2-workaround';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  Http2SubchannelCall,
} = require('@grpc/grpc-js/build/src/subchannel-call');

describe('http2-workaround (targeted Http2SubchannelCall patch)', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    _resetHttp2StreamEndWorkaroundForTest();
  });

  afterEach(() => {
    sandbox.restore();
    _resetHttp2StreamEndWorkaroundForTest();
  });

  it('should not install when disabled via environment variable', () => {
    const originalEnvironmentVariable =
      process.env['SPANNER_DISABLE_HTTP2_STREAM_END_WORKAROUND'];
    try {
      process.env['SPANNER_DISABLE_HTTP2_STREAM_END_WORKAROUND'] = 'true';
      installHttp2StreamEndWorkaround();
      assert.strictEqual(_isHttp2StreamEndWorkaroundInstalled(), false);
    } finally {
      if (originalEnvironmentVariable !== undefined) {
        process.env['SPANNER_DISABLE_HTTP2_STREAM_END_WORKAROUND'] =
          originalEnvironmentVariable;
      } else {
        delete process.env['SPANNER_DISABLE_HTTP2_STREAM_END_WORKAROUND'];
      }
    }
  });

  it('should install and mark workaround as installed on Http2SubchannelCall', () => {
    installHttp2StreamEndWorkaround();
    assert.strictEqual(_isHttp2StreamEndWorkaroundInstalled(), true);
  });

  it('should not double-install if symbol is already present', () => {
    installHttp2StreamEndWorkaround();
    assert.strictEqual(_isHttp2StreamEndWorkaroundInstalled(), true);

    // Call again to verify idempotency
    installHttp2StreamEndWorkaround();
    assert.strictEqual(_isHttp2StreamEndWorkaroundInstalled(), true);
  });

  it('should restore original methods when reset function is called', () => {
    const originalDestroyHttp2Stream =
      Http2SubchannelCall.prototype.destroyHttp2Stream;
    const originalHalfClose = Http2SubchannelCall.prototype.halfClose;

    installHttp2StreamEndWorkaround();
    assert.notStrictEqual(
      Http2SubchannelCall.prototype.destroyHttp2Stream,
      originalDestroyHttp2Stream,
    );
    assert.notStrictEqual(
      Http2SubchannelCall.prototype.halfClose,
      originalHalfClose,
    );

    _resetHttp2StreamEndWorkaroundForTest();
    assert.strictEqual(
      Http2SubchannelCall.prototype.destroyHttp2Stream,
      originalDestroyHttp2Stream,
    );
    assert.strictEqual(
      Http2SubchannelCall.prototype.halfClose,
      originalHalfClose,
    );
    assert.strictEqual(_isHttp2StreamEndWorkaroundInstalled(), false);
  });

  it('should leave stream.Duplex.prototype completely untouched', () => {
    const originalDuplexEnd = stream.Duplex.prototype.end;

    installHttp2StreamEndWorkaround();

    assert.strictEqual(
      stream.Duplex.prototype.end,
      originalDuplexEnd,
      'Duplex.prototype.end must not be modified by targeted workaround',
    );

    const symbolList = Object.getOwnPropertySymbols(stream.Duplex.prototype);
    const workaroundSymbols = symbolList.filter(s =>
      s.toString().includes('http2'),
    );
    assert.strictEqual(
      workaroundSymbols.length,
      0,
      'Duplex.prototype must not have any workaround symbols attached',
    );
  });

  it('should not affect standard Node.js duplex streams', async () => {
    installHttp2StreamEndWorkaround();

    const passThrough = new stream.PassThrough();
    await new Promise<void>((resolve, reject) => {
      passThrough.on('finish', () => {
        passThrough.end((error: Error & {code?: string}) => {
          try {
            assert.ok(
              error,
              'Standard duplex stream should receive error on callback',
            );
            assert.strictEqual(error.code, 'ERR_STREAM_ALREADY_FINISHED');
            resolve();
          } catch (assertionError) {
            reject(assertionError);
          }
        });
      });
      passThrough.end();
    });
  });

  describe('destroyHttp2Stream', () => {
    it('should skip http2Stream.end() when serverEndedCall is true and stream is writableEnded', () => {
      installHttp2StreamEndWorkaround();

      const endSpy = sandbox.spy();
      const mockCall = Object.create(Http2SubchannelCall.prototype);
      mockCall.serverEndedCall = true;
      mockCall.http2Stream = {
        writableEnded: true,
        destroyed: false,
        end: endSpy,
      };

      mockCall.destroyHttp2Stream();

      assert.strictEqual(
        endSpy.called,
        false,
        'http2Stream.end() should have been skipped',
      );
    });

    it('should call http2Stream.end() when serverEndedCall is true but stream is not writableEnded', () => {
      installHttp2StreamEndWorkaround();

      const endSpy = sandbox.spy();
      const mockCall = Object.create(Http2SubchannelCall.prototype);
      mockCall.serverEndedCall = true;
      mockCall.http2Stream = {
        writableEnded: false,
        destroyed: false,
        end: endSpy,
      };

      mockCall.destroyHttp2Stream();

      assert.strictEqual(
        endSpy.calledOnce,
        true,
        'http2Stream.end() should have been called',
      );
    });

    it('should return early when http2Stream is destroyed', () => {
      installHttp2StreamEndWorkaround();

      const endSpy = sandbox.spy();
      const closeSpy = sandbox.spy();
      const mockCall = Object.create(Http2SubchannelCall.prototype);
      mockCall.serverEndedCall = true;
      mockCall.http2Stream = {
        writableEnded: false,
        destroyed: true,
        end: endSpy,
        close: closeSpy,
      };

      mockCall.destroyHttp2Stream();

      assert.strictEqual(endSpy.called, false);
      assert.strictEqual(closeSpy.called, false);
    });

    it('should delegate to original destroyHttp2Stream when serverEndedCall is false', () => {
      installHttp2StreamEndWorkaround();

      const closeSpy = sandbox.spy();
      const endSpy = sandbox.spy();
      const traceSpy = sandbox.spy();
      const mockCall = Object.create(Http2SubchannelCall.prototype);
      mockCall.serverEndedCall = false;
      mockCall.finalStatus = {code: 0};
      mockCall.trace = traceSpy;
      mockCall.http2Stream = {
        destroyed: false,
        writableEnded: false,
        close: closeSpy,
        end: endSpy,
      };

      mockCall.destroyHttp2Stream();

      assert.strictEqual(
        closeSpy.calledOnce,
        true,
        'close() should be called when serverEndedCall is false',
      );
      assert.strictEqual(
        endSpy.called,
        false,
        'end() should not be called when serverEndedCall is false',
      );
    });
  });

  describe('halfClose', () => {
    it('should skip http2Stream.end() when stream is already writableEnded', () => {
      installHttp2StreamEndWorkaround();

      const endSpy = sandbox.spy();
      const traceSpy = sandbox.spy();
      const mockCall = Object.create(Http2SubchannelCall.prototype);
      mockCall.trace = traceSpy;
      mockCall.http2Stream = {
        writableEnded: true,
        destroyed: false,
        end: endSpy,
      };

      mockCall.halfClose();

      assert.strictEqual(endSpy.called, false);
    });

    it('should skip http2Stream.end() when stream is destroyed', () => {
      installHttp2StreamEndWorkaround();

      const endSpy = sandbox.spy();
      const traceSpy = sandbox.spy();
      const mockCall = Object.create(Http2SubchannelCall.prototype);
      mockCall.trace = traceSpy;
      mockCall.http2Stream = {
        writableEnded: false,
        destroyed: true,
        end: endSpy,
      };

      mockCall.halfClose();

      assert.strictEqual(endSpy.called, false);
    });

    it('should call original halfClose when stream is neither writableEnded nor destroyed', () => {
      installHttp2StreamEndWorkaround();

      const endSpy = sandbox.spy();
      const traceSpy = sandbox.spy();
      const mockCall = Object.create(Http2SubchannelCall.prototype);
      mockCall.trace = traceSpy;
      mockCall.http2Stream = {
        writableEnded: false,
        destroyed: false,
        end: endSpy,
      };

      mockCall.halfClose();

      assert.strictEqual(endSpy.calledOnce, true);
    });
  });

  describe('real HTTP/2 stream integration', () => {
    it('should skip redundant end() during full call lifecycle', async () => {
      installHttp2StreamEndWorkaround();

      const server = http2.createServer();
      server.on('stream', (serverStream: http2.ServerHttp2Stream) => {
        serverStream.respond({':status': 200});
        serverStream.end('ok');
      });

      await new Promise<void>((resolve, reject) => {
        server.listen(0, () => {
          const address = server.address();
          if (!address || typeof address === 'string') {
            reject(new Error('Invalid server address'));
            return;
          }

          const clientSession = http2.connect(
            `http://localhost:${address.port}`,
          );
          const requestStream = clientSession.request({
            ':method': 'POST',
            ':path': '/',
          });

          // Track calls to requestStream.end
          const endSpy = sandbox.spy(requestStream, 'end');

          const call = Object.create(Http2SubchannelCall.prototype);
          call.http2Stream = requestStream;
          call.trace = () => {};

          requestStream.on('response', () => {});
          requestStream.on('data', () => {});
          requestStream.on('end', () => {
            try {
              // 1. In gRPC unary RPC, client half-closes request stream
              call.halfClose();
              assert.strictEqual(
                requestStream.writableEnded,
                true,
                'Request stream should be writableEnded after halfClose',
              );
              assert.strictEqual(
                endSpy.callCount,
                1,
                'requestStream.end() should be called once by halfClose()',
              );

              // 2. Server trailers arrive and server ends the call
              call.serverEndedCall = true;
              call.destroyHttp2Stream();

              // With targeted workaround, redundant end() must be skipped!
              assert.strictEqual(
                endSpy.callCount,
                1,
                'destroyHttp2Stream() must not call end() again when stream is already ended',
              );

              clientSession.close();
              server.close(() => resolve());
            } catch (assertionError) {
              clientSession.close();
              server.close(() => reject(assertionError));
            }
          });
        });
      });
    });
  });
});
