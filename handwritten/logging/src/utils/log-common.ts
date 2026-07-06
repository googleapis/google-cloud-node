/*!
 * Copyright 2021 Google LLC
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

/**
 * Common construct and functions used by both Log and LogSync
 */

import {Entry} from '../entry';
import * as extend from 'extend';
import arrify = require('arrify');
import {google} from '../../protos/protos';

export interface WriteOptions {
  labels?: {[index: string]: string};
  resource?: MonitoredResource;
}

export type MonitoredResource = google.api.IMonitoredResource;

export enum Severity {
  emergency,
  alert,
  critical,
  error,
  warning,
  notice,
  info,
  debug,
}
export type SeverityNames = keyof typeof Severity;

// Mapped types are only supported in type aliases and not in interfaces and
// classes.
export type LogSeverityFunctions = {
  // FIXME: the following can be made more precise.
  [P in SeverityNames]: Function;
};

/**
 * snakecaseKeys turns label keys from camel case to snake case.
 * @param labels
 */
export function snakecaseKeys(
  labels: {[p: string]: string} | null | undefined
) {
  for (const key in labels) {
    const replaced = key.replace(
      /[A-Z]/g,
      letter => `_${letter.toLowerCase()}`
    );
    Object.defineProperty(
      labels,
      replaced,
      Object.getOwnPropertyDescriptor(labels, key) as PropertyDescriptor
    );
    if (replaced !== key) {
      delete labels[key];
    }
  }
  return labels;
}

/**
 * Return an array of log entries with the desired severity assigned.
 *
 * @private
 *
 * @param {object|object[]} entries - Log entries.
 * @param {string} severity - The desired severity level.
 */
export function assignSeverityToEntries(
  entries: Entry | Entry[],
  severity: string
): Entry[] {
  return (arrify(entries) as Entry[]).map(entry => {
    const metadata = extend(true, {}, entry.metadata, {
      severity,
    });
    return extend(new Entry(), entry, {
      metadata,
    });
  });
}

/**
 * Format the name of a log. A log's full name is in the format of
 * 'projects/{projectId}/logs/{logName}'.
 *
 * @param projectId
 * @param name
 */
export function formatLogName(projectId: string, name: string) {
  const path = 'projects/' + projectId + '/logs/';
  name = name.replace(path, '');
  if (decodeURIComponent(name) === name) {
    // The name has not been encoded yet.
    name = encodeURIComponent(name);
  }
  return path + name;
}
