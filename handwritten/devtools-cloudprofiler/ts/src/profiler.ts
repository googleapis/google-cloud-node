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
import * as pify from 'pify';
import * as zlib from 'zlib';

import {perftools} from '../../proto/profile';
import {Common, Logger, Service, ServiceObject} from '../third_party/types/common-types';
import {ProfilerConfig} from './config';
import {HeapProfiler} from './profilers/heap-profiler';
import {TimeProfiler} from './profilers/time-profiler';

export const common: Common = require('@google-cloud/common');
const parseDuration: (str: string) => number = require('parse-duration');
const pjson = require('../../package.json');
const API = 'https://cloudprofiler.googleapis.com/v2';
const SCOPE = 'https://www.googleapis.com/auth/monitoring.write';
const gzip = pify(zlib.gzip);

enum ProfileTypes {
  Wall = 'WALL',
  Heap = 'HEAP'
}

/**
 * @return - true if http status code indicates an error and false otherwise.
 */
function isErrorResponseStatusCode(code: number) {
  return code < 200 || code >= 300;
}

/**
 * Interface for deployment field of RequestProfile. Profiles with matching
 * deployments will be grouped together.
 * Used as body of request when creating profile using the profiler API.
 *
 * Public for testing.
 */
export interface Deployment {
  projectId?: string;
  target?: string;
  labels?: {zone?: string, version?: string};
}

/**
 * Interface for body of response from profiler API when creating
 * profile and used as body of request to profiler API when
 * uploading a profile.
 *
 * Public for testing.
 */
export interface RequestProfile {
  name: string;
  profileType?: string;
  duration: string;
  profileBytes?: string;
  deployment?: Deployment;
  labels?: {instance: string};
}

/**
 * @return true if an deployment is a Deployment and false otherwise.
 */
// tslint:disable-next-line: no-any
function isDeployment(deployment: any): deployment is Deployment {
  return (deployment.projectId === undefined ||
          typeof deployment.projectId === 'string') &&
      (deployment.target === undefined ||
       typeof deployment.target === 'string') &&
      (deployment.labels === undefined ||
       (deployment.labels.zone === undefined ||
        typeof deployment.labels.zone === 'string') &&
           (deployment.labels.version === undefined ||
            typeof deployment.labels.zone === 'string'));
}

/**
 * @return true if an prof is a RequestProfile and false otherwise.
 */
// tslint:disable-next-line: no-any
function isRequestProfile(prof: any): prof is RequestProfile {
  return prof && typeof prof.name === 'string' &&
      typeof prof.profileType === 'string' &&
      typeof prof.duration === 'string' &&
      (prof.labels === undefined || typeof prof.labels.instance === 'string') &&
      (prof.deployment === undefined || isDeployment(prof.deployment));
}

/**
 * Returns true if response has statusCode.
 */
// tslint:disable-next-line: no-any
function hasHttpStatusCode(response: any):
    response is {statusCode: number, statusMessage: string} {
  return response && typeof response.statusCode === 'number';
}

/**
 * Converts a profile to a compressed, base64 encoded string.
 *
 * Work for converting profile is done on the event loop. In particular,
 * profile encoding is done on the event loop. So, this does  block execution
 * of the program, but for a short period of time, since profiles are small.
 *
 * @param p - profile to be converted to string.
 */
async function profileBytes(p: perftools.profiles.IProfile): Promise<string> {
  const pwriter = perftools.profiles.Profile.encode(p);
  const buffer = new Buffer(pwriter.finish());
  const gzBuf = await gzip(buffer);
  return gzBuf.toString('base64');
}

/**
 * Polls profiler server for instructions on behalf of a task and
 * collects and uploads profiles as requested
 */
export class Profiler extends common.ServiceObject {
  private config: ProfilerConfig;
  private logger: Logger;
  private profileLabels: {instance: string};
  private deployment: Deployment;
  private profileTypes: string[];

  // Public for testing.
  timeProfiler: TimeProfiler|undefined;
  heapProfiler: HeapProfiler|undefined;

  constructor(config: ProfilerConfig) {
    config = common.util.normalizeArguments(null, config);
    const serviceConfig = {
      baseUrl: API,
      scopes: [SCOPE],
      packageJson: pjson,
    };
    super({parent: new common.Service(serviceConfig, config), baseUrl: '/'});

    this.config = config;

    this.logger = new common.logger({
      level: common.logger.LEVELS[config.logLevel as number],
      tag: pjson.name
    });

    this.deployment = {
      projectId: this.config.projectId,
      target: this.config.serviceContext.service,
      labels: {
        zone: this.config.zone,
        version: this.config.serviceContext.version
      }
    };

    this.profileLabels = {instance: this.config.instance};

    this.profileTypes = [];
    if (!this.config.disableTime) {
      this.profileTypes.push(ProfileTypes.Wall);
      this.timeProfiler = new TimeProfiler(this.config.timeIntervalMicros);
    }
    if (!this.config.disableHeap) {
      this.profileTypes.push(ProfileTypes.Heap);
      this.heapProfiler = new HeapProfiler(
          this.config.heapIntervalBytes, this.config.heapMaxStackDepth);
    }
  }

  /**
   * Starts an endless loop to poll profiler server for instructions, and
   * collects and uploads profiles as requested.
   * If there is a problem when collecting a profile or uploading a profile to
   * profiler server, this problem will be logged at the error level and
   * otherwise ignored.
   * If there is a problem polling profiler server for instructions
   * on the type of profile to be collected, this problem will be logged at the
   * error level and getting profile type will be retried.
   */
  start() {
    this.runLoop();
  }

  /**
   * Endlessly polls the profiler server for instructions, and collects and
   * uploads profiles as requested.
   */
  async runLoop() {
    const delayMillis = await this.collectProfile();

    // Schedule the next profile.
    setTimeout(this.runLoop.bind(this), delayMillis).unref();
  }

  /**
   * Waits for profiler server to tell it to collect a profile, then collects
   * a profile and uploads it.
   *
   * @return - time, in ms, to wait before asking profiler server again about
   * collecting another profile.
   *
   * TODO: implement backoff and retry. When error encountered in
   * createProfile() should be retried when response indicates this request
   * should be retried or with exponential backoff (up to one hour) if the
   * response does not indicate when to retry this request.
   */
  async collectProfile(): Promise<number> {
    let prof: RequestProfile;
    try {
      prof = await this.createProfile();
    } catch (err) {
      this.logger.error(
          `Error requesting profile type to be collected: ${err}.`);
      return this.config.backoffMillis;
    }
    try {
      await this.profileAndUpload(prof);
    } catch (err) {
      this.logger.error(`Error collecting and uploading profile: ${err}.`);
    }
    return 0;
  }

  /**
   * Talks to profiler server, which hangs until server indicates
   * job should be profiled and then indicates what type of profile should
   * be collected.
   *
   * If any problem is encountered, an error will be thrown.
   *
   * @return - a RequestProfile specifying which type of profile should be
   * collected and other information needed to collect and upload a profile of
   * the specified type.
   *
   * TODO (issue #28): right now, this call could hang for up to an hour when
   * this method is the only thing on the event loop, keeping the program open
   * even when all work is done. Should expose the ability to cancel the http
   * request made here, and then determine when to cancel this request.
   *
   * Public to allow for testing.
   */
  async createProfile(): Promise<RequestProfile> {
    const reqBody = {
      deployment: this.deployment,
      profileType: this.profileTypes,
    };
    const options = {
      method: 'POST',
      uri: '/profiles',
      body: reqBody,
      json: true,
    };

    const [body, response] = await this.request(options);
    if (!hasHttpStatusCode(response)) {
      throw new Error('Server response missing status information.');
    }
    if (isErrorResponseStatusCode(response.statusCode)) {
      let message: number|string = response.statusCode;
      // tslint:disable-next-line: no-any
      if ((response as any).statusMessage) {
        message = response.statusMessage;
      }
      throw new Error(message.toString());
    }
    if (!isRequestProfile(body)) {
      throw new Error(`Profile not valid: ${body}.`);
    }
    return body;
  }

  /**
   * Collects a profile of the type specified by the profileType field of prof.
   * If any problem is encountered, like a problem collecting or uploading the
   * profile, an error will be thrown.
   *
   * Public to allow for testing.
   */
  async profileAndUpload(prof: RequestProfile): Promise<void> {
    prof = await this.profile(prof);
    prof.labels = this.profileLabels;

    const options = {
      method: 'PATCH',
      uri: API + '/' + prof.name,
      body: prof,
      json: true,
    };
    const [body, response] = await this.request(options);
    if (!hasHttpStatusCode(response)) {
      throw new Error(
          'Server response missing status information when attempting to upload profile.');
    }
    if (isErrorResponseStatusCode(response.statusCode)) {
      let message: number|string = response.statusCode;
      // tslint:disable-next-line: no-any
      if ((response as any).statusMessage) {
        message = response.statusMessage;
      }
      throw new Error(`Could not upload profile: ${message}.`);
    }
  }

  /**
   * Collects a profile of the type specified by profileType field of prof.
   * If any problem is encountered, for example the profileType is not
   * recognized or profiling is disabled for the specified profileType, an
   * error will be thrown.
   *
   * Public to allow for testing.
   */
  async profile(prof: RequestProfile): Promise<RequestProfile> {
    switch (prof.profileType) {
      case ProfileTypes.Wall:
        return await this.writeTimeProfile(prof);
      case ProfileTypes.Heap:
        return this.writeHeapProfile(prof);
      default:
        throw new Error(`Unexpected profile type ${prof.profileType}.`);
    }
  }

  /**
   * Collects a time profile, converts profile to compressed, base64 encoded
   * string, and puts this string in profileBytes field of prof.
   *
   * Public to allow for testing.
   */
  async writeTimeProfile(prof: RequestProfile): Promise<RequestProfile> {
    if (!this.timeProfiler) {
      throw Error('Cannot collect time profile, time profiler not enabled.');
    }
    const durationMillis = parseDuration(prof.duration);
    if (!durationMillis) {
      throw Error(
          `Cannot collect time profile, duration "${prof.duration}" cannot` +
          ` be parsed.`);
    }
    const p = await this.timeProfiler.profile(durationMillis);
    prof.profileBytes = await profileBytes(p);
    return prof;
  }

  /**
   * Collects a heap profile, converts profile to compressed, base64 encoded
   * string, and adds profileBytes field to prof with this string.
   *
   * Public to allow for testing.
   */
  async writeHeapProfile(prof: RequestProfile): Promise<RequestProfile> {
    if (!this.heapProfiler) {
      throw Error('Cannot collect heap profile, heap profiler not enabled.');
    }
    const p = this.heapProfiler.profile();
    prof.profileBytes = await profileBytes(p);
    return prof;
  }
}
