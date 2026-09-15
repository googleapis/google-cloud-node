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

const WORKAROUND_APPLIED_SYMBOL = Symbol.for(
  '@google-cloud/spanner.http2SubchannelCallWorkaround',
);

let isInstallationAttempted = false;
// eslint-disable-next-line @typescript-eslint/ban-types
let savedOriginalDestroyHttp2Stream: Function | undefined;
// eslint-disable-next-line @typescript-eslint/ban-types
let savedOriginalHalfClose: Function | undefined;

/**
 * Installs a targeted workaround for redundant stream `.end()` calls in `@grpc/grpc-js`.
 *
 * In `@grpc/grpc-js` (inside `Http2SubchannelCall.prototype.destroyHttp2Stream`),
 * when a server ends a call by sending trailers, `this.http2Stream.end()` is invoked.
 * However, for unary and server-streaming RPCs, the client stream was already
 * half-closed when sending the request payload (`halfClose()`), leaving `writableEnded = true`.
 *
 * In Node.js streams (`node:internal/streams/writable:805`), calling `.end()` on an
 * already-finished stream without a callback causes Node to eagerly construct
 * `new ERR_STREAM_ALREADY_FINISHED('end')` with a full native V8 stack trace capture, and
 * then immediately discard it because no callback was provided. On high-throughput
 * workloads, this generates an unused `NodeError` and stack trace on every single RPC,
 * consuming ~4% of total process CPU and driving significant GC allocation pressure.
 *
 * This function targets the exact source of the bug by patching
 * `Http2SubchannelCall.prototype.destroyHttp2Stream` and
 * `Http2SubchannelCall.prototype.halfClose` in `@grpc/grpc-js` to return early when
 * called on an already-ended or destroyed HTTP/2 stream.
 *
 * Crucially, unlike patching `stream.Duplex.prototype.end`, this targeted approach:
 * - Leaves `stream.Duplex.prototype` 100% untouched.
 * - Adds ZERO overhead to `net.Socket` (TCP), `tls.TLSSocket`, `PassThrough`, or `Transform` streams.
 * - Does not deoptimize V8 inline caches for stream operations.
 *
 * Tracking upstream fix: https://github.com/grpc/grpc-node/pull/3082
 * Once `@grpc/grpc-js` merges and releases PR #3082, and this package adopts that
 * version as a minimum dependency, this workaround file and its invocation in
 * `Spanner` constructor can be safely removed.
 */
export function installHttp2StreamEndWorkaround(): void {
  if (isInstallationAttempted) {
    return;
  }
  isInstallationAttempted = true;

  if (
    process.env[
      'SPANNER_DISABLE_HTTP2_STREAM_END_WORKAROUND'
    ]?.toLowerCase() === 'true'
  ) {
    return;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {
      Http2SubchannelCall,
    } = require('@grpc/grpc-js/build/src/subchannel-call');
    if (!Http2SubchannelCall?.prototype) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((Http2SubchannelCall.prototype as any)[WORKAROUND_APPLIED_SYMBOL]) {
      return;
    }

    const originalDestroyHttp2Stream =
      Http2SubchannelCall.prototype.destroyHttp2Stream;
    savedOriginalDestroyHttp2Stream = originalDestroyHttp2Stream;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Http2SubchannelCall.prototype.destroyHttp2Stream = function (this: any) {
      if (this.http2Stream?.destroyed) {
        return;
      }
      if (this.serverEndedCall && this.http2Stream?.writableEnded) {
        return;
      }
      // eslint-disable-next-line prefer-rest-params
      return Reflect.apply(originalDestroyHttp2Stream, this, arguments);
    };

    const originalHalfClose = Http2SubchannelCall.prototype.halfClose;
    savedOriginalHalfClose = originalHalfClose;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Http2SubchannelCall.prototype.halfClose = function (this: any) {
      if (this.http2Stream?.destroyed || this.http2Stream?.writableEnded) {
        return;
      }
      // eslint-disable-next-line prefer-rest-params
      return Reflect.apply(originalHalfClose, this, arguments);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Http2SubchannelCall.prototype as any)[WORKAROUND_APPLIED_SYMBOL] = true;
  } catch {
    // Graceful fallback if @grpc/grpc-js internal structure changes
  }
}

/**
 * Resets and restores the original methods (for unit testing).
 */
export function _resetHttp2StreamEndWorkaroundForTest(): void {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {
      Http2SubchannelCall,
    } = require('@grpc/grpc-js/build/src/subchannel-call');
    if (Http2SubchannelCall?.prototype) {
      if (savedOriginalDestroyHttp2Stream) {
        Http2SubchannelCall.prototype.destroyHttp2Stream =
          savedOriginalDestroyHttp2Stream;
        savedOriginalDestroyHttp2Stream = undefined;
      }
      if (savedOriginalHalfClose) {
        Http2SubchannelCall.prototype.halfClose = savedOriginalHalfClose;
        savedOriginalHalfClose = undefined;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (Http2SubchannelCall.prototype as any)[WORKAROUND_APPLIED_SYMBOL];
    }
  } catch {
    // Ignore cleanup error
  }
  isInstallationAttempted = false;
}

/**
 * Checks whether the workaround has been marked as installed (for unit testing).
 */
export function _isHttp2StreamEndWorkaroundInstalled(): boolean {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {
      Http2SubchannelCall,
    } = require('@grpc/grpc-js/build/src/subchannel-call');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !!(Http2SubchannelCall?.prototype as any)?.[
      WORKAROUND_APPLIED_SYMBOL
    ];
  } catch {
    return false;
  }
}
