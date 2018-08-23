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

import {perftools} from '../../../proto/profile';
import {AllocationProfileNode} from '../v8-types';

import {serializeHeapProfile} from './profile-serializer';

const profiler = require('bindings')('sampling_heap_profiler');

let enabled = false;
let heapIntervalBytes = 0;
let heapStackDepth = 0;

/*
 * Collects a heap profile when heapProfiler is enabled. Otherwise throws
 * an error.
 */
export function profile(ignoreSamplePath?: string):
    perftools.profiles.IProfile {
  if (!enabled) {
    throw new Error('Heap profiler is not enabled.');
  }
  const startTimeNanos = Date.now() * 1000 * 1000;
  const result = profiler.getAllocationProfile();
  // Add node for external memory usage.
  // Current type definitions do not have external.
  // TODO: remove any once type definition is updated to include external.
  // tslint:disable-next-line: no-any
  const {external}: {external: number} = process.memoryUsage() as any;
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
      result, startTimeNanos, heapIntervalBytes, ignoreSamplePath);
}

/**
 * Starts heap profiling. If heap profiling has already been started with
 * the same parameters, this is a noop. If heap profiler has already been
 * started with different parameters, this throws an error.
 *
 * @param intervalBytes - average number of bytes between samples.
 * @param stackDepth - maximum stack depth for samples collected.
 */
export function start(intervalBytes: number, stackDepth: number) {
  if (enabled) {
    throw new Error(`Heap profiler is already started  with intervalBytes ${
        heapIntervalBytes} and stackDepth ${stackDepth}`);
  }
  heapIntervalBytes = intervalBytes;
  heapStackDepth = stackDepth;
  profiler.startSamplingHeapProfiler(heapIntervalBytes, heapStackDepth);
  enabled = true;
}

// Stops heap profiling. If heap profiling has not been started, does nothing.
export function stop() {
  if (enabled) {
    enabled = false;
    profiler.stopSamplingHeapProfiler();
  }
}
