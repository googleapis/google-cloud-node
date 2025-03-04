/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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
import {AuthClient, GoogleAuth, GoogleAuthOptions} from 'google-auth-library';
import {PackageJson} from './util.js';
import {GaxiosInterceptor, GaxiosOptions} from 'gaxios';

export const DEFAULT_PROJECT_ID_TOKEN = '{{projectId}}';

export interface ServiceConfig {
  /**
   * The base URL to make API requests to.
   */
  baseUrl: string;

  /**
   * The API Endpoint to use when connecting to the service.
   * Example:  storage.googleapis.com
   */
  apiEndpoint: string;

  /**
   * The scopes required for the request.
   */
  scopes: string[];

  projectIdRequired?: boolean;
  packageJson: PackageJson;

  /**
   * Reuse an existing `AuthClient` or `GoogleAuth` client instead of creating a new one.
   */
  authClient?: AuthClient | GoogleAuth;

  /**
   * Set to true if the endpoint is a custom URL
   */
  customEndpoint?: boolean;
}

export interface ServiceOptions extends Omit<GoogleAuthOptions, 'authClient'> {
  authClient?: AuthClient | GoogleAuth;
  interceptors_?: GaxiosInterceptor<GaxiosOptions>[];
  email?: string;
  token?: string;
  timeout?: number; // http.request.options.timeout
  userAgent?: string;
  useAuthWithCustomEndpoint?: boolean;
}
