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
import * as gcpMetadata from 'gcp-metadata';
import * as path from 'path';
import * as pify from 'pify';
import {AuthenticationConfig, Common, ServiceConfig} from '../third_party/types/common-types';
import {Config, defaultConfig, ProfilerConfig} from './config';
import {Profiler} from './profiler';

const common: Common = require('@google-cloud/common');

/**
 * Returns value of metadata field.
 * Throws error if there is a problem accessing metadata API.
 */
async function getMetadataInstanceField(field: string): Promise<string> {
  const [response, metadata] =
      await pify(gcpMetadata.instance, {multiArgs: true})(field);
  return metadata;
}

function hasService(config: Config):
    config is {serviceContext: {service: string}} {
  return config.serviceContext !== undefined &&
      typeof config.serviceContext.service === 'string';
}

/**
 * Sets unset values in the configuration to the value retrieved from
 * environment variables, metadata, or specified in defaultConfig.
 * Throws error if value that must be set cannot be initialized.
 *
 * Exported for testing purposes.
 */
export async function initConfig(config: Config): Promise<ProfilerConfig> {
  config = common.util.normalizeArguments(null, config);

  const envConfig: Config = {
    projectId: process.env.GCLOUD_PROJECT,
    serviceContext: {
      service: process.env.GAE_SERVICE,
      version: process.env.GAE_VERSION,
    }
  };

  if (process.env.GCLOUD_PROFILER_LOGLEVEL !== undefined) {
    const envLogLevel = Number(process.env.GCLOUD_PROFILER_LOGLEVEL);
    if (!isNaN(envLogLevel)) {
      envConfig.logLevel = envLogLevel;
    }
  }

  let envSetConfig: Config = {};
  if (process.env.hasOwnProperty('GCLOUD_PROFILER_CONFIG')) {
    envSetConfig =
        require(path.resolve(process.env.GCLOUD_PROFILER_CONFIG)) as Config;
  }

  const mergedConfig =
      extend(true, {}, defaultConfig, envSetConfig, envConfig, config);

  if (!mergedConfig.zone || !mergedConfig.instance) {
    const [instance, zone] =
        await Promise
            .all([
              getMetadataInstanceField('name'), getMetadataInstanceField('zone')
            ])
            .catch(
                (err: Error) => {
                    // ignore errors, which will occur when not on GCE.
                }) ||
        [undefined, undefined];
    if (!mergedConfig.zone && zone) {
      mergedConfig.zone = zone.substring(zone.lastIndexOf('/') + 1);
    }
    if (!mergedConfig.instance && instance) {
      mergedConfig.instance = instance;
    }
  }

  if (!hasService(mergedConfig)) {
    throw new Error('Service must be specified in the configuration.');
  }

  return mergedConfig;
}

let profiler: Profiler|undefined = undefined;

/**
 * Starts the profiling agent and returns a promise.
 * If any error is encountered when configuring the profiler the promise will
 * be rejected. Resolves when profiling is started.
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
  profiler.start();
}

// If the module was --require'd from the command line, start the agent.
if (module.parent && module.parent.id === 'internal/preload') {
  start();
}
