/**
 * Copyright 2018 Google Inc. All Rights Reserved.
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

import {TimeProfile} from '../v8-types';

const profiler = require('bindings')('time_profiler');

// Wrappers around native time profiler functions.

export function startProfiling(runName: string) {
  profiler.startProfiling(runName);
}

export function stopProfiling(runName: string): TimeProfile {
  return profiler.stopProfiling(runName);
}

export function setSamplingInterval(intervalMicros: number) {
  profiler.setSamplingInterval(intervalMicros);
}
