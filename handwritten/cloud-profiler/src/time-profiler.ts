// Copyright 2017 Google LLC
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

import delay from 'delay';
import {perftools} from './profile-proto';
import {serializeTimeProfile} from './profile-serializer';
import {SourceMapper} from './sourcemapper';
import * as timeProfilerBindings from './time-profiler-bindings';
import {TimeProfile} from './v8-types';

export interface TimeProfilerOptions {
  durationMillis: number;
  intervalMicros?: number;
  sourceMapper?: SourceMapper;
  name?: string;
  lineNumbers?: boolean;
}

let profiling = false;
const DEFAULT_INTERVAL_MICROS = 1000;

interface ProcessWithIdleNotifier extends NodeJS.Process {
  _startProfilerIdleNotifier?: () => void;
  _stopProfilerIdleNotifier?: () => void;
}

export async function profile(
  options: TimeProfilerOptions
): Promise<perftools.profiles.IProfile> {
  const stop = start(
    options.intervalMicros || DEFAULT_INTERVAL_MICROS,
    options.name,
    options.sourceMapper,
    options.lineNumbers
  );
  await delay(options.durationMillis);
  return stop();
}

export function start(
  intervalMicros: number = DEFAULT_INTERVAL_MICROS,
  name?: string,
  sourceMapper?: SourceMapper,
  lineNumbers?: boolean
): () => perftools.profiles.IProfile | Promise<perftools.profiles.IProfile> {
  if (profiling) {
    throw new Error('already profiling');
  }
  profiling = true;
  const runName = name || `pprof-${Date.now()}-${Math.random()}`;
  timeProfilerBindings.setSamplingInterval(intervalMicros);
  // Node.js contains an undocumented API for reporting idle status to V8.
  // This lets the profiler distinguish idle time from time spent in native
  // code. Ideally this should be default behavior. Until then, use the
  // undocumented API.
  // See https://github.com/nodejs/node/issues/19009#issuecomment-403161559.
  const proc = process as ProcessWithIdleNotifier;
  if (typeof proc._startProfilerIdleNotifier === 'function') {
    proc._startProfilerIdleNotifier();
  }
  timeProfilerBindings.startProfiling(runName, lineNumbers);
  return function stop() {
    profiling = false;
    const result = timeProfilerBindings.stopProfiling(runName, lineNumbers);
    if (typeof proc._stopProfilerIdleNotifier === 'function') {
      proc._stopProfilerIdleNotifier();
    }
    if (result && typeof (result as Promise<TimeProfile>).then === 'function') {
      return (result as Promise<TimeProfile>).then(resolved =>
        serializeTimeProfile(resolved, intervalMicros, sourceMapper)
      );
    }
    return serializeTimeProfile(
      result as TimeProfile,
      intervalMicros,
      sourceMapper
    );
  };
}
