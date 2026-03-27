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

import {PassThrough, TransformCallback, TransformOptions} from 'stream';
const {hrtime} = require('node:process');

/**
 * This interface is the usual options that can be passed into a Transform plus
 * a hook for injecting code into the stream's transform function. This hook is
 * useful for code running code that normally runs in the transform method if that
 * code is different for each method that makes use of a stream.
 */
type TimedStreamOptions = TransformOptions & {
  transformHook?: (
    event: any,
    _encoding: BufferEncoding,
    callback: TransformCallback,
  ) => void;
};

/**
 * StreamTimer is a utility class for measuring the elapsed time of stream
 * operations. It provides methods to start and stop the timer, as well as
 * retrieve the total duration in milliseconds.
 */
class StreamTimer {
  private startTime;
  private totalDuration;

  constructor() {
    this.startTime = 0n;
    this.totalDuration = 0n;
  }

  getTotalDurationMs() {
    return Number(this.totalDuration / 1_000_000n);
  }

  start() {
    this.startTime = hrtime.bigint();
  }

  stop() {
    const endTime = hrtime.bigint();
    const duration = endTime - this.startTime;
    this.totalDuration += duration;
  }
}

/**
 * The TimedStream class is used for measuring the time the user spends
 * processing data from the stream. We need to measure this time for use cases
 * like measuring the application latencies for client side metrics.
 */
export class TimedStream extends PassThrough {
  private readTimer = new StreamTimer();
  private transformTimer = new StreamTimer();
  constructor(options?: TimedStreamOptions) {
    super({
      ...options,
      objectMode: true,
      readableHighWaterMark: 0, // We need to disable readside buffering to allow for acceptable behavior when the end user cancels the stream early.
      writableHighWaterMark: 0, // We need to disable writeside buffering because in nodejs 14 the call to _transform happens after write buffering. This creates problems for tracking the last seen row key.
      transform: (event, _encoding, callback) => {
        /* When we iterate through a stream, time spent waiting for the user's
        application is added to totalDurationTransform. When we use handlers,
        time spent waiting for the user's application is added to
        totalDurationTransform. We need two different timers to measure total
        application blocking latencies because the streams behave differently
        depending on whether the user is iterating through a stream or using
        timers.
        */
        this.transformTimer.start();
        if (options?.transformHook) {
          options?.transformHook(event, _encoding, callback);
        }
        this.transformTimer.stop();
      },
    });
  }

  /**
   * read code is called when a row is consumed.
   */
  read(size: number) {
    // calculate the time spent between iterations of read (i.e. processing the stream in a for loop)
    const chunk = super.read(size);
    if (chunk) {
      this.readTimer.start();
      // Defer the after call to the next tick of the event loop
      process.nextTick(() => {
        this.readTimer.stop();
      });
    }
    return chunk;
  }

  /**
   * Returns the total amount of time the user code spends handling data.
   */
  getTotalDurationMs() {
    return (
      this.readTimer.getTotalDurationMs() +
      this.transformTimer.getTotalDurationMs()
    );
  }
}
