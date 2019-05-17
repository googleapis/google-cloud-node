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

import delay from 'delay';
import * as extend from 'extend';
import * as fs from 'fs';
import * as gcpMetadata from 'gcp-metadata';
import { heap as heapProfiler } from 'pprof';
import * as semver from 'semver';
import { SemVer } from 'semver';

import { Config, defaultConfig, ProfilerConfig } from './config';
import { createLogger } from './logger';
import { Profiler } from './profiler';

const pjson = require('../../package.json');
const serviceRegex = /^[a-z]([-a-z0-9_.]{0,253}[a-z0-9])?$/;

/**
 * @return value of metadata field.
 * Throws error if there is a problem accessing metadata API.
 */
async function getMetadataInstanceField(field: string): Promise<string> {
  return gcpMetadata.instance(field);
}

function hasService(
  config: Config
): config is { serviceContext: { service: string } } {
  return (
    config.serviceContext !== undefined &&
    typeof config.serviceContext.service === 'string'
  );
}

/**
 * Sets unset values in the configuration to the value retrieved from
 * environment variables or specified in defaultConfig.
 * Throws error if value that must be set cannot be initialized.
 */
function initConfigLocal(config: Config): ProfilerConfig {
  const envConfig: Config = {
    projectId: process.env.GCLOUD_PROJECT,
    serviceContext: {
      service: process.env.GAE_SERVICE || process.env.K_SERVICE,
      version: process.env.GAE_VERSION || process.env.K_REVISION,
    },
  };

  if (process.env.GCLOUD_PROFILER_LOGLEVEL !== undefined) {
    const envLogLevel = Number(process.env.GCLOUD_PROFILER_LOGLEVEL);
    if (!isNaN(envLogLevel)) {
      envConfig.logLevel = envLogLevel;
    }
  }

  let envSetConfig: Config = {};
  const configPath = process.env.GCLOUD_PROFILER_CONFIG;
  if (configPath) {
    let envSetConfigBuf;
    try {
      envSetConfigBuf = fs.readFileSync(configPath);
    } catch (e) {
      throw Error(`Could not read GCLOUD_PROFILER_CONFIG ${configPath}: ${e}`);
    }
    try {
      envSetConfig = JSON.parse(envSetConfigBuf.toString());
    } catch (e) {
      throw Error(`Could not parse GCLOUD_PROFILER_CONFIG ${configPath}: ${e}`);
    }
  }

  const mergedUserConfigs = extend(true, {}, envSetConfig, envConfig, config);
  if (
    Array.isArray(mergedUserConfigs.sourceMapSearchPath) &&
    mergedUserConfigs.sourceMapSearchPath.length === 0 &&
    !mergedUserConfigs.disableSourceMaps
  ) {
    throw new Error(
      'serviceMapSearchPath is an empty array. Use disableSourceMaps to' +
        ' disable source map support instead.'
    );
  }

  const mergedConfig = extend(true, {}, defaultConfig, mergedUserConfigs);

  if (!hasService(mergedConfig)) {
    throw new Error('Service must be specified in the configuration');
  }

  if (!serviceRegex.test(mergedConfig.serviceContext.service)) {
    throw new Error(
      `Service ${
        mergedConfig.serviceContext.service
      } does not match regular expression "${serviceRegex.toString()}"`
    );
  }

  return mergedConfig;
}

/**
 * Sets unset values in the configuration which can be retrieved from GCP
 * metadata.
 */
async function initConfigMetadata(
  config: ProfilerConfig
): Promise<ProfilerConfig> {
  if (!config.zone || !config.instance) {
    const [instance, zone] = (await Promise.all([
      getMetadataInstanceField('name'),
      getMetadataInstanceField('zone'),
    ]).catch((err: Error) => {
      // ignore errors, which will occur when not on GCE.
    })) || [undefined, undefined];
    if (!config.zone && zone) {
      config.zone = zone.substring(zone.lastIndexOf('/') + 1);
    }
    if (!config.instance && instance) {
      config.instance = instance;
    }
  }
  return config;
}

/**
 * Returns true if the version passed in satifised version requirements
 * specified in the profiler's package.json.
 *
 * Exported for testing.
 */
export function nodeVersionOkay(version: string | SemVer): boolean {
  // Coerce version if possible, to remove any pre-release, alpha, beta, etc
  // tags.
  version = semver.coerce(version) || version;
  return semver.satisfies(version, pjson.engines.node);
}

/**
 * Initializes the config, and starts heap profiler if the heap profiler is
 * needed. Returns a profiler if creation is successful. Otherwise, returns
 * rejected promise.
 */
export async function createProfiler(config: Config): Promise<Profiler> {
  if (!nodeVersionOkay(process.version)) {
    throw new Error(
      `Could not start profiler: node version ${process.version}` +
        ` does not satisfies "${pjson.engines.node}"` +
        '\nSee https://github.com/GoogleCloudPlatform/cloud-profiler-nodejs#prerequisites' +
        ' for details.'
    );
  }

  let profilerConfig: ProfilerConfig = initConfigLocal(config);

  // Start the heap profiler if profiler config does not indicate heap profiling
  // is disabled. This must be done before any asynchronous calls are made so
  // all memory allocations made after start() is called can be captured.
  if (!profilerConfig.disableHeap) {
    heapProfiler.start(
      profilerConfig.heapIntervalBytes,
      profilerConfig.heapMaxStackDepth
    );
  }
  profilerConfig = await initConfigMetadata(profilerConfig);
  return new Profiler(profilerConfig);
}

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
  let profiler: Profiler;
  try {
    profiler = await createProfiler(config);
  } catch (e) {
    logError(`${e}`, config);
    return;
  }
  profiler.start();
}

function logError(msg: string, config: Config) {
  // FIXME: do not create a new logger on each error.
  const logger = createLogger(config.logLevel);
  logger.error(msg);
}

/**
 * For debugging purposes. Collects profiles and discards the collected
 * profiles.
 */
export async function startLocal(config: Config = {}): Promise<void> {
  let profiler: Profiler;
  try {
    profiler = await createProfiler(config);
  } catch (e) {
    logError(`${e}`, config);
    return;
  }

  // Set up periodic logging.
  const logger = createLogger(config.logLevel);

  let heapProfileCount = 0;
  let timeProfileCount = 0;
  let prevLogTime = Date.now();

  setInterval(() => {
    const curTime = Date.now();
    const { rss, heapTotal, heapUsed } = process.memoryUsage();
    logger.debug(
      new Date().toISOString(),
      'rss',
      (rss / (1024 * 1024)).toFixed(3),
      'MiB,',
      'heap total',
      (heapTotal / (1024 * 1024)).toFixed(3),
      'MiB,',
      'heap used',
      (heapUsed / (1024 * 1024)).toFixed(3),
      'MiB,',
      'heap profile collection rate',
      ((heapProfileCount * 1000) / (curTime - prevLogTime)).toFixed(3),
      'profiles/s,',
      'time profile collection rate',
      ((timeProfileCount * 1000) / (curTime - prevLogTime)).toFixed(3),
      'profiles/s'
    );

    heapProfileCount = 0;
    timeProfileCount = 0;
    prevLogTime = curTime;
  }, profiler.config.localLogPeriodMillis);

  // Periodic profiling
  setInterval(async () => {
    if (!config.disableHeap) {
      const heap = await profiler.profile({
        name: 'Heap-Profile' + new Date(),
        profileType: 'HEAP',
      });
      heapProfileCount++;
    }
    await delay(profiler.config.localProfilingPeriodMillis / 2);
    if (!config.disableTime) {
      const wall = await profiler.profile({
        name: 'Time-Profile' + new Date(),
        profileType: 'WALL',
        duration: profiler.config.localTimeDurationMillis.toString() + 'ms',
      });
      timeProfileCount++;
    }
  }, profiler.config.localProfilingPeriodMillis);
}

// If the module was --require'd from the command line, start the agent.
if (module.parent && module.parent.id === 'internal/preload') {
  start();
}
