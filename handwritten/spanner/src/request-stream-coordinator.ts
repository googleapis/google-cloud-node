/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import {Transform} from 'stream';
import {CancellableStream} from 'google-gax';
import {MetricsTracer} from './metrics/metrics-tracer';

/**
 * Coordinates lifecycle events, cancellation, and metric collection
 * between the user-facing readable/transform stream and the underlying
 * GAX/gRPC call stream.
 */
export class RequestStreamCoordinator {
  private readonly stream: Transform;
  private readonly metricsTracer: MetricsTracer | null;
  private callStream: CancellableStream | null = null;
  private statusReceived = false;
  private streamFinished = false;
  private operationCompleted = false;
  private requestStarted = false;
  private streamClosed = false;

  constructor(stream: Transform, metricsTracer: MetricsTracer | null) {
    this.stream = stream;
    this.metricsTracer = metricsTracer;
  }

  /**
   * Sets up destruction hooks and lifecycle listeners on the user-facing stream.
   */
  setup(): void {
    // Intercept stream destruction to handle cancellation and metric completion.
    // We override _destroy rather than solely relying on the 'close' event because
    // internal callers (such as transaction retry logic in transaction.ts) or users
    // may call stream.removeAllListeners() before calling stream.destroy().
    const originalDestroy = this.stream._destroy;
    this.stream._destroy = (
      error: Error | null,
      callback: (error?: Error | null) => void,
    ) => {
      // Immediately cancel the underlying gRPC call if still active.
      this.cancelCallStream();
      // Ensure stream closure and metric finalization are triggered upon destruction,
      // even if removeAllListeners() previously removed the 'close' listener.
      const handleClose = () => {
        this.handleStreamClose();
      };
      if (typeof originalDestroy === 'function') {
        originalDestroy.call(
          this.stream,
          error,
          (destroyError?: Error | null) => {
            handleClose();
            if (typeof callback === 'function') {
              callback(destroyError);
            }
          },
        );
      } else {
        handleClose();
        if (typeof callback === 'function') {
          callback(error);
        }
      }
    };

    // When the stream finishes writing normally, mark it as finished so that subsequent
    // teardown or destroy calls do not trigger cancelCallStream().
    this.stream.on('finish', () => this.handleStreamFinish());

    // Fallback for streams that close without an explicit destroy() invocation.
    // handleStreamClose() is guarded by streamClosed to ensure idempotency.
    this.stream.on('close', () => this.handleStreamClose());
  }

  /**
   * Cancels the active gRPC call stream if it has not already completed.
   *
   * Note: In `@grpc/grpc-js`, calling `.cancel()` after a stream has already
   * finished or drained with `Status.OK` will overwrite the status to `CANCELLED`.
   * We guard against this by checking `streamFinished` and `statusReceived`.
   */
  cancelCallStream(): void {
    // Guard against overwriting Status.OK:
    // In @grpc/grpc-js, calling .cancel() on a stream that has already received
    // its terminal status or completed normally will overwrite the status to CANCELLED.
    // This guard preserves OK status for normally drained streams as well as queries
    // using the PartialResultSet.last optimization (where the user stream completes early
    // while remaining trailers drain in the background).
    if (this.streamFinished || this.statusReceived) {
      return;
    }
    if (this.callStream) {
      // In google-gax, callStream is a StreamProxy wrapping the underlying gRPC call.
      // Calling .destroy() on StreamProxy alone does not cancel the active gRPC call;
      // .cancel() must be invoked explicitly to abort the RPC on the client.
      if (typeof this.callStream.cancel === 'function') {
        this.callStream.cancel();
      }
      // Clean up proxy and stream resources once cancellation has been requested.
      const streamWithDestroy = this.callStream as {
        destroy?: (error?: Error) => void;
        destroyed?: boolean;
      };
      if (
        typeof streamWithDestroy.destroy === 'function' &&
        !streamWithDestroy.destroyed
      ) {
        streamWithDestroy.destroy();
      }
    }
  }

  /**
   * Invokes requestFn to initialize the callStream, or skips invocation
   * if the user-facing stream was already destroyed before preparation finished.
   *
   * @param requestFn The function that instantiates the GAX call stream.
   */
  attachRequestFn(requestFn: () => CancellableStream): void {
    if (this.stream.destroyed || this.streamClosed) {
      this.completeOperation();
      return;
    }
    try {
      const callStream = requestFn();
      if (callStream) {
        this.attachCallStream(callStream);
      } else {
        this.handleRequestError(
          new Error('Failed to initialize request stream.'),
        );
      }
    } catch (error) {
      this.handleRequestError(error as Error);
    }
  }

  /**
   * Attaches the underlying gRPC call stream once it is prepared by GAPIC.
   *
   * @param callStream The cancellable stream returned by GAX.
   */
  attachCallStream(callStream: CancellableStream): void {
    this.callStream = callStream;

    callStream.once('status', () => {
      this.statusReceived = true;
    });
    callStream
      .on('error', (error: Error) => {
        if (!this.stream.destroyed && !this.streamClosed) {
          this.stream.destroy(error);
        }
      })
      .pipe(this.stream);
  }

  /**
   * Handles errors encountered during GAPIC request preparation.
   *
   * @param error The error from prepareGapicRequest_.
   */
  handleRequestError(error: Error): void {
    this.stream.destroy(error);
    this.completeOperation();
  }

  /**
   * Handles stream finish when all data has been written to the transform stream.
   */
  handleStreamFinish(): void {
    this.streamFinished = true;
    this.stream.destroy();
  }

  /**
   * Marks that the GAPIC request preparation has been initiated (e.g. upon 'reading').
   */
  startRequest(): void {
    this.requestStarted = true;
  }

  /**
   * Handles stream close on the user-facing stream. Defers metric completion
   * if the gRPC call is still in flight, ensuring attempt status is recorded
   * by the interceptor before operation completion is finalized.
   */
  handleStreamClose(): void {
    if (this.streamClosed) {
      return;
    }
    this.streamClosed = true;
    if (this.callStream) {
      if (!this.statusReceived) {
        this.waitForStatusOrClose(this.callStream);
      } else {
        this.completeOperation();
      }
      return;
    }
    if (!this.requestStarted) {
      this.completeOperation();
    }
  }

  /**
   * Completes the OpenTelemetry operation metric. Idempotent.
   */
  completeOperation(): void {
    if (this.operationCompleted) {
      return;
    }
    this.operationCompleted = true;
    this.metricsTracer?.recordOperationCompletion();
  }

  /**
   * Waits for the gRPC call to deliver its terminal status or close event before
   * finalizing operation metrics.
   */
  private waitForStatusOrClose(callStream: CancellableStream): void {
    callStream.once('status', () => {
      this.statusReceived = true;
      this.completeOperation();
    });
    callStream.once('close', () => {
      // In @grpc/grpc-js, cancellation may emit 'close' before the status callback
      // runs on next tick. Defer via setImmediate to allow onReceiveStatus to execute first.
      setImmediate(() => {
        this.completeOperation();
      });
    });
    callStream.once('error', () => {
      setImmediate(() => {
        this.completeOperation();
      });
    });
  }
}
