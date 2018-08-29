/**
 * Copyright 2018 Google LLC
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

import * as common from '@google-cloud/common';
import * as request from 'request';

const packageJson = require('../../package.json');

export interface ServiceContext {
  service: string;
  version: string;
  resourceType: string;
}

export interface ErrorEvent {
  eventTime: string;
  serviceContext: ServiceContext;
  message: string;
  // other fields not used in the tests have been omitted
}

export interface ErrorGroupStats {
  representative: ErrorEvent;
  count: string;
  // other fields not used in the tests have been omitted
}

/* @const {String} Base Error Reporting API */
const API = 'https://clouderrorreporting.googleapis.com/v1beta1/projects';

const ONE_HOUR_API = 'timeRange.period=PERIOD_1_HOUR';

export class ErrorsApiTransport extends common.Service {
  constructor() {
    super({
      requestModule: request,
      baseUrl: 'https://clouderrorreporting.googleapis.com/v1beta1',
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      packageJson
    });
  }

  async deleteAllEvents(): Promise<void> {
    const projectId = await this.getProjectId();
    const options = {
      uri: [API, projectId, 'events'].join('/'),
      method: 'DELETE'
    };
    await this.request(options);
  }

  async getAllGroups(): Promise<ErrorGroupStats[]> {
    const projectId = await this.getProjectId();
    const options = {
      uri: [API, projectId, 'groupStats?' + ONE_HOUR_API].join('/'),
      method: 'GET'
    };
    const response = await this.request(options);
    return response.body.errorGroupStats || [];
  }
}
