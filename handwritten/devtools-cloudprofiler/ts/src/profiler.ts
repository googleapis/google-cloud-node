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
import * as path from 'path';

import {AuthenticationConfig, Common, Logger, Service, ServiceConfig} from '../third_party/types/common-types';

import {Config, ProfilerConfig} from './config';
import {HeapProfiler} from './profilers/heap-profiler';
import {TimeProfiler} from './profilers/time-profiler';

const pjson = require('../../package.json');
const common: Common = require('@google-cloud/common');

// TODO: finish implementing Profiler.
// TODO: add stop() method to stop profiling.
export class Profiler {
  config: ProfilerConfig;
  logger: Logger;
  service: Service;

  constructor(config: ProfilerConfig) {
    this.config = config;

    this.service = new common.Service(
        {
          baseUrl: 'https://cloudprofiler.googleapis.com/v2',
          scopes: ['https://www.googleapis.com/auth/monitoring.write'],
        },
        this.config);

    this.logger = new common.logger({
      level: common.logger.LEVELS[config.logLevel as number],
      tag: pjson.name
    });
  }

  // Begins collection and uploading of profiles.
  // If profiling fails or another problem is encountered, the returned promise
  // will be rejected.
  // TODO: implement
  // TODO: explain failure situations.
  async start(): Promise<void> {
    return Promise.reject(
        new Error('start() is unimplemented for ProfileAgent.'));
  }
}
