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

import {AuthenticationConfig, Common, ServiceConfig} from '../third_party/types/common-types';

const common: Common = require('@google-cloud/common');
const extend = require('extend');

// Configuration for Profiler.
export interface Config extends AuthenticationConfig {
  // Cloud Console projectId to associate profiles with instead of one read
  // from VM metadata server.
  projectId?: string;

  // Log levels: 0-disabled,1-error,2-warn,3-info,4-debug.
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

    // Version of the service. It can be an arbitrary string. Stackdriver
    // Profiler profiles each version of each service in each zone once per
    // minute.
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
}

/**
 * Subtype of Config that declares some properties to be non-optional. This
 * helps avoid null checks in the profiler code.
 */
export interface ProfilerConfig extends Config {
  logLevel: number;
  serviceContext: {service?: string; version?: string;};
  instance: string;
  zone: string;
  disableTime: boolean;
  disableHeap: boolean;
}

// Default values for configuration for a profiler.
export const defaultConfig: ProfilerConfig = {
  logLevel: 1,
  serviceContext: {},
  disableHeap: false,
  disableTime: false,
  instance: '',
  zone: ''
};
