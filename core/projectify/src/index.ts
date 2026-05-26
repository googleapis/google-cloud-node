import {Stream} from 'stream';

// Copyright 2014 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const PROJECT_ID_TOKEN = '{{projectId}}';
const PROJECT_ID_TOKEN_REGEX = /{{projectId}}/g;

/**
 * Populate the `{{projectId}}` placeholder.
 *
 * @throws {Error} If a projectId is required, but one is not provided.
 *
 * @param {*} - Any input value that may contain a placeholder. Arrays and objects will be looped.
 * @param {string} projectId - A projectId. If not provided
 * @return {*} - The original argument with all placeholders populated.
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function replaceProjectIdToken(value: any, projectId: string): any {
  if (typeof value === 'string') {
    if (value.includes(PROJECT_ID_TOKEN)) {
      if (!projectId || projectId === PROJECT_ID_TOKEN) {
        throw new MissingProjectIdError();
      }
      return value.replace(PROJECT_ID_TOKEN_REGEX, projectId);
    }
    return value;
  }

  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const original = value[i];
      const processed = replaceProjectIdToken(original, projectId);
      if (processed !== original) {
        value[i] = processed;
      }
    }
    return value;
  }

  if (value instanceof Buffer || value instanceof Stream) {
    return value;
  }

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const original = value[key];
      const processed = replaceProjectIdToken(original, projectId);
      if (processed !== original) {
        value[key] = processed;
      }
    }
  }

  return value;
}

/**
 * Custom error type for missing project ID errors.
 */
export class MissingProjectIdError extends Error {
  message = `Sorry, we cannot connect to Cloud Services without a project
    ID. You may specify one with an environment variable named
    "GOOGLE_CLOUD_PROJECT".`.replace(/ +/g, ' ');
}
