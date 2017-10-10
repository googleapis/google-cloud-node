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
import * as extend from 'extend';
import * as path from 'path';
import {AuthenticationConfig, Common, ServiceConfig} from '../third_party/types/common-types';
import {Config, defaultConfig} from './config';
import {Profiler, ProfilerConfig} from './profiler';

const common: Common = require('@google-cloud/common');

// initConfig sets unset values in the configuration to the value retrieved from
// environment variables, metadata, or the default value specified in
// defaultConfig.
// Returns rejected promise if value that must be set cannot be initialized.
async function initConfig(config: Config): Promise<ProfilerConfig> {
  config = common.util.normalizeArguments(null, config);

  const envConfig = {
    logLevel: process.env.GCLOUD_PROFILER_LOGLEVEL,
    projectId: process.env.GCLOUD_PROJECT,
    serviceContext: {
      service: process.env.GAE_SERVICE,
      version: process.env.GAE_VERSION,
    }
  };

  let envSetConfig: Config = {};
  if (process.env.hasOwnProperty('GCLOUD_PROFILER_CONFIG')) {
    envSetConfig =
        require(path.resolve(process.env.GCLOUD_PROFILER_CONFIG)) as Config;
  }

  let normalizedConfig = extend(true, {}, defaultConfig, envConfig, config);

  if (normalizedConfig.serviceContext.service === undefined) {
    throw new Error('service name must be specified in the configuration');
  }

  // TODO: fetch instance and zone from metadata. This will require function to
  // be asynchrous.
  if (normalizedConfig.instance === undefined) {
    normalizedConfig.instance = '';
  }
  if (normalizedConfig.zone === undefined) {
    normalizedConfig.zone = '';
  }

  return normalizedConfig;
}

let profiler: Profiler|undefined = undefined;

/**
 * Starts the profiling agent and returns a promise.
 * If any error is encountered when profiling, the promise will be rejected.
 *
 * config - Config describing configuration for profiling.
 *
 * @example
 * profiler.start();
 *
 * @example
 * profiler.start(config);
 *
 */
export async function start(config: Config = {}): Promise<void> {
  const normalizedConfig = await initConfig(config);
  profiler = new Profiler(normalizedConfig);
  return profiler.start();
}

// If the module was --require'd from the command line, start the agent.
if (module.parent && module.parent.id === 'internal/preload') {
  start();
}
