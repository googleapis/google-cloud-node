/**
 * Copyright 2018 Google LLC. All Rights Reserved.
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

import * as request from 'request';

export interface Common {
  Service: Service;
  logger: Logger;
}

export type LogFunction = (message: any, ...args: any[]) => void;

export interface Logger {
  error: LogFunction;
  warn: LogFunction;
  info: LogFunction;
  debug: LogFunction;
  silly: LogFunction;
}

export interface LoggerOptions {
  level?: string;
  levels?: string[];
  tag?: string;
}

export interface logger {
  (options?: LoggerOptions | string): Logger;
  LEVELS: string[];
}

export interface Service {
  new(config: ServiceConfig, options: ServiceAuthenticationConfig): Service;
  authClient: {getToken: (err: {}) => void;};
  request(options: request.Options,
    cb: (
      err: Error | null,
      body: any,
      response: request.RequestResponse
    ) => void): void;
}

export interface ServiceConfig {
  packageJson?: any;
  projectIdRequired?: boolean;
  baseUrl?: string;
  scopes?: string[];
  // TODO: `auth-client.ts` assumes that `projectId` and `customEndpoint`
  //       are properties of `ServiceConfig`.  Determine if it is.
  projectId?: string;
  customEndpoint?: boolean;
}

export interface ServiceAuthenticationConfig {
  projectId?: string;
  keyFilename?: string;
  email?: string;
  credentials?: {
    client_email?: string;
    private_key?: string;
  };
}
