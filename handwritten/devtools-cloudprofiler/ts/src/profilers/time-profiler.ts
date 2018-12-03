/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import delay from 'delay';
import {perftools} from '../../../proto/profile';
import {serializeTimeProfile} from './profile-serializer';
import {setSamplingInterval, startProfiling, stopProfiling} from './time-profiler-bindings';

export class TimeProfiler {
  /**
   * @param intervalMicros - average time in microseconds between samples
   */
  constructor(private intervalMicros: number) {
    setSamplingInterval(this.intervalMicros);
  }

  /**
   * Collects a profile for the duration specified.
   *
   * @param durationMillis - time in milliseconds for which to collect profile.
   */
  async profile(durationMillis: number): Promise<perftools.profiles.IProfile> {
    // Node.js contains an undocumented API for reporting idle status to V8.
    // This lets the profiler distinguish idle time from time spent in native
    // code. Ideally this should be default behavior. Until then, use the
    // undocumented API.
    // See https://github.com/nodejs/node/issues/19009#issuecomment-403161559.
    // tslint:disable-next-line no-any
    (process as any)._startProfilerIdleNotifier();
    const runName = 'stackdriver-profiler-' + Date.now() + '-' + Math.random();
    startProfiling(runName);
    await delay(durationMillis);
    const result = stopProfiling(runName);
    // tslint:disable-next-line no-any
    (process as any)._stopProfilerIdleNotifier();
    const profile = serializeTimeProfile(result, this.intervalMicros);
    return profile;
  }
}
