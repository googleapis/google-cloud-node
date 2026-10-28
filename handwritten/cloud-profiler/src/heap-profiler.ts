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

import * as heapProfilerBindings from './heap-profiler-bindings';
import {perftools} from './profile-proto';
import {serializeHeapProfile} from './profile-serializer';
import {SourceMapper} from './sourcemapper';
import {AllocationProfileNode} from './v8-types';

let enabled = false;
let heapIntervalBytes = 0;
let heapStackDepth = 0;

/**
 * Collects a heap profile when heapProfiler is enabled. Otherwise throws
 * an error.
 *
 * Data is returned in V8 allocation profile format.
 */
export function v8Profile(): AllocationProfileNode {
  if (!enabled) {
    throw new Error('Heap profiler is not enabled.');
  }
  return heapProfilerBindings.getAllocationProfile();
}

/**
 * Collects a profile and returns it serialized in pprof format.
 * Throws if heap profiler is not enabled.
 *
 * @param ignoreSamplePath
 * @param sourceMapper
 */
export function profile(
  ignoreSamplePath?: string,
  sourceMapper?: SourceMapper
): perftools.profiles.IProfile {
  const startTimeNanos = Date.now() * 1000 * 1000;
  const result = v8Profile();
  // Add node for external memory usage.
  const {external} = process.memoryUsage();
  if (external > 0) {
    const externalNode: AllocationProfileNode = {
      name: '(external)',
      scriptName: '',
      children: [],
      allocations: [{sizeBytes: external, count: 1}],
    };
    result.children.push(externalNode);
  }
  return serializeHeapProfile(
    result,
    startTimeNanos,
    heapIntervalBytes,
    ignoreSamplePath,
    sourceMapper
  );
}

/**
 * Starts heap profiling. If heap profiling has already been started,
 * throws an error.
 *
 * @param intervalBytes - average number of bytes between samples.
 * @param stackDepth - maximum stack depth for samples collected.
 */
export function start(intervalBytes: number, stackDepth: number) {
  if (enabled) {
    throw new Error(
      `Heap profiler is already started  with intervalBytes ${heapIntervalBytes} and stackDepth ${stackDepth}`
    );
  }
  heapIntervalBytes = intervalBytes;
  heapStackDepth = stackDepth;
  heapProfilerBindings.startSamplingHeapProfiler(
    heapIntervalBytes,
    heapStackDepth
  );
  enabled = true;
}

/**
 * Stops heap profiling. If heap profiling has not been started, does nothing.
 */
export function stop() {
  if (enabled) {
    enabled = false;
    heapProfilerBindings.stopSamplingHeapProfiler();
  }
}
