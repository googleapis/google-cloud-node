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

import * as delay from 'delay';

import {perftools} from '../../../proto/profile';
import {serializeTimeProfile} from './profile-serializer';

const profiler = require('bindings')('time_profiler');

export class TimeProfiler {
  /**
   * @param intervalMicros - average time in microseconds between samples
   */
  constructor(private intervalMicros: number) {
    profiler.setSamplingInterval(this.intervalMicros);
  }

  /**
   * Collects a profile for the duration specified.
   *
   * @param durationMillis - time in milliseconds for which to collect profile.
   */
  async profile(durationMillis: number): Promise<perftools.profiles.IProfile> {
    const runName = 'stackdriver-profiler-' + Date.now() + '-' + Math.random();
    profiler.startProfiling(runName, true);
    await delay(durationMillis);
    const result = profiler.stopProfiling(runName);
    return serializeTimeProfile(result, this.intervalMicros);
  }
}
