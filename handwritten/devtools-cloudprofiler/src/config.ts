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

import {GoogleAuthOptions} from '@google-cloud/common';
import parseDuration from 'parse-duration';

// Configuration for Profiler.
export interface Config extends GoogleAuthOptions {
  /**
   * The API endpoint of the service used to make requests.
   * Defaults to `cloudprofiler.googleapis.com`.
   */
  apiEndpoint?: string;

  // Cloud Console projectId to associate profiles with instead of one read
  // from VM metadata server.
  projectId?: string;

  // Log levels: 0-disabled,1-error,2-warn,3-info,4-debug.
  // Log statements are printed to the console.
  logLevel?: number;

  // Specifies the service with which profiles from this application will be
  // associated.
  serviceContext?: {
    // Name of the service under which the profiled data will be recorded and
    // exposed in the UI for the project.
    // You can specify an arbitrary string, see deployment.target at
    // https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudprofiler/v2/profiler.proto
    // for restrictions.
    // The string should be the same across different replicas of your service
    // so that a globally constant profiling rate is maintained.
    service?: string;

    // Version of the service. It can be an arbitrary string. Cloud Profiler
    // profiles each version of each service in each zone once per minute.
    version?: string;
  };

  // Virtual machine instance to associate profiles with instead of the one
  // read from the VM metadata server.
  instance?: string;

  // Zone to associate profiles with instead of the one read from the VM
  // metadata server.
  zone?: string;

  // When true, time profiling will be disabled.
  disableTime?: boolean;

  // When true, heap profiling will be disabled.
  disableHeap?: boolean;

  // Average time between samples collected by time profiler.
  // Increasing the time between samples will reduce quality of profiles by
  // reducing number of samples.
  // Decreasing time between samples may increase overhead of profiling.
  timeIntervalMicros?: number;

  // Average bytes between samples collected by heap profiler.
  // Increasing the bytes between samples will reduce quality of profiles by
  // reducing number of samples.
  // Decreasing bytes between samples may increase overhead of profiling.
  heapIntervalBytes?: number;

  // Maximum depth of stacks recorded for heap samples. Decreasing stack depth
  // will make it more likely that stack traces are truncated. Increasing
  // stack depth may increase overhead of profiling.
  heapMaxStackDepth?: number;

  // Samples with stacks with any location containing this as a substring
  // in their file name will not be included in heap profiles.
  // By default this is set to "@google-cloud/profiler" to exclude samples from
  // the profiler.
  ignoreHeapSamplesPath?: string;

  // On each consecutive error in profile creation, the backoff envelope will
  // increase by this factor. The backoff will be a random value selected
  // from a uniform distribution between 0 and the backoff envelope.
  backoffMultiplier?: number;

  // On first error during profile creation, if the backoff is not specified
  // by the server response, then profiler will wait between 0 and
  // initialBackoffMillis before asking the server to create a profile again.
  // After a successful profile creation, the backoff envelope will be reset to
  // initialBackoffMillis.
  initialBackoffMillis?: number;

  // If the backoff is not specified by the server response, then profiler will
  // wait at most backoffCapMillis before asking server to create a profile
  // again.
  backoffCapMillis?: number;

  // Server-specified backoffs will be capped at serverBackoffCapMillis.
  // The backoff is capped here because setTimeout (which is used to control
  // when next profile is collected) will run immediately if the backoff is
  // too large.
  // https://nodejs.org/dist/latest-v9.x/docs/api/timers.html#timers_settimeout_callback_delay_args.
  serverBackoffCapMillis?: number;

  // Time between profile collection.
  // For testing with startLocal() only.
  localProfilingPeriodMillis?: number;

  // Debugging information for startLocal will be recorded every
  // localLogPeriodMillis milliseconds.
  // For testing with startLocal() only.
  localLogPeriodMillis?: number;

  // Duration of time profiles collected when using startLocal().
  // For testing with startLocal() only.
  localTimeDurationMillis?: number;

  // List of directories recursively searched for *.js.map files. Defaults to
  // process.cwd().
  //
  // The profiler uses these files to re-map the source file paths in the
  // profiles. The most common use case of having a source map is an application
  // written in TypeScript: the source file paths that the profiler observes in
  // the profiling data are the transpiled *.js files; to attribute the data
  // back to the TypeScript source that the developer wrote source map needs to
  // be generated, distribute and used.
  //
  // The source map of the application typically resides directly in
  // process.cwd(), so the default value should work well pretty much always.
  // The node_modules directory is not searched for source maps, so
  // source maps for dependencies will not be used.
  sourceMapSearchPath?: string[];

  // When true, source map support will be disabled.
  // All locations in profiles will reference locations in the running
  // JavaScript.
  disableSourceMaps?: boolean;
}

// Interface for config after local initialization.
export interface LocalConfig extends GoogleAuthOptions {
  apiEndpoint: string;
  projectId?: string;
  logLevel: number;
  serviceContext: {service: string; version?: string};
  instance?: string;
  zone?: string;
  disableTime: boolean;
  disableHeap: boolean;
  timeIntervalMicros: number;
  heapIntervalBytes: number;
  heapMaxStackDepth: number;
  ignoreHeapSamplesPath: string;
  initialBackoffMillis: number;
  backoffCapMillis: number;
  backoffMultiplier: number;
  serverBackoffCapMillis: number;
  localProfilingPeriodMillis: number;
  localLogPeriodMillis: number;
  localTimeDurationMillis: number;
  sourceMapSearchPath: string[];
  disableSourceMaps: boolean;
}

// Interface for an initialized profiler config.
export interface ProfilerConfig extends LocalConfig {
  projectId: string;
}

// Default values for configuration for a profiler.
export const defaultConfig = {
  logLevel: 2,
  serviceContext: {},
  disableHeap: false,
  disableTime: false,
  timeIntervalMicros: 1000,
  heapIntervalBytes: 512 * 1024,
  heapMaxStackDepth: 64,
  ignoreHeapSamplesPath: '@google-cloud/profiler',
  initialBackoffMillis: 60 * 1000, // 1 minute
  backoffCapMillis: parseDuration('1h'),
  backoffMultiplier: 1.3,
  apiEndpoint: 'cloudprofiler.googleapis.com',

  // This is the largest duration for setTimeout which does not cause it to
  // run immediately.
  // https://nodejs.org/dist/latest-v9.x/docs/api/timers.html#timers_settimeout_callback_delay_args.
  serverBackoffCapMillis: 2147483647,

  localProfilingPeriodMillis: 1000,
  localLogPeriodMillis: 10000,
  localTimeDurationMillis: 1000,
  sourceMapSearchPath: [process.cwd()],
  disableSourceMaps: false,
};
