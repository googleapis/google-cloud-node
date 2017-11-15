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

import * as http from 'http';

/**
 * Authentication Configuration – shared across all Google Cloud Libraries.
 * For more details see {@link
 * https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.56.0/guides/authentication}
 * and {@link
 * https://developers.google.com/identity/protocols/application-default-credentials}.
 */
export interface AuthenticationConfig {
  /**
   * The projectId of the Google Cloud Platform project whose applications will
   * be debugged. If not specified, we will try to use detect this through
   * either the GCLOUD_PROJECT environment variable, through the embedded
   * projectId in the provided key, the metadata service, or the default project
   * configured in the gcloud cli. If none of these mechanisms are successful,
   * the debug agent will fail to function.
   */
  projectId?: string;

  /**
   * Path to a service account .json, .pem or .p12 key file.
   */
  keyFilename?: string;

  /**
   * Required when using .p12 or pem key files.
   */
  email?: string;

  /**
   * Instead of a keyFilename, credentials can also be provided inline.
   */
  credentials?: {client_email?: string; private_key?: string;};
}

export interface ServiceConfig {
  baseUrl: string;
  scopes: string[];
}

// TODO: Make this more precise
export interface ServiceObjectConfig {
  parent: object;
  baseUrl: string;
  createMethod?: string;
  id?: string;
  methods?: object;
}

export interface LoggerOptions {
  level?: string;
  levels?: string[];
  tag: string;
}

export interface Logger {
  new(options?: string|LoggerOptions): Logger;
  LEVELS: string[];
  // TODO: Determine the correct signatures for these members
  error: (message: {}, ...args: Array<{}>) => void;
  warn: (message: {}, ...args: Array<{}>) => void;
  info: (message: {}, ...args: Array<{}>) => void;
  debug: (message: {}, ...args: Array<{}>) => void;
}

export interface Service {
  new(config: ServiceConfig, options: AuthenticationConfig): Service;
}

export interface RequestOptions {
  uri: string;
  json: boolean;
  method?: string;
  body?: {};
}

export interface ServiceObject {
  new(config: ServiceObjectConfig): ServiceObject;
  // TODO: Determine if this signature is correct.
  request: (reqOpts: RequestOptions) => Promise<object[]>;
}

export interface Common {
  Service: Service;
  ServiceObject: ServiceObject;
  logger: Logger;
  util: {
    // TODO: Make this more precise.
    normalizeArguments: <T>(
        globalContext: object|null, localConfig: T, options?: object) => T;
  };
}
