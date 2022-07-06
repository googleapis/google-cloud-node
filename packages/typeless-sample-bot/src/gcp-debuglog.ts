// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import EventEmitter from 'node:events';
import * as process from 'node:process';
import * as util from 'node:util';

// Adds typings for event sinks.
export declare interface GcpDebugLogger {
  on(event: 'log', listener: (args: any[]) => void): this;
  on(event: string, listener: Function): this;
}

// Our logger instance. This actually contains the meat of dealing
// with log lines, including EventEmitter 
export class GcpDebugLogger extends EventEmitter {
  // The function we'll call with new log lines.
  // Should be built in Node util stuff, or the "debug" package, or whatever.
  upstream: Function;

  // Self-referential function wrapper that calls invoke() on us.
  func: GcpDebugLogFunction;

  constructor(upstream: Function) {
    super();

    this.upstream = upstream;
    this.func = Object.assign(
      this.invoke.bind(this),
      {
        // Also add an instance pointer back to us.
        instance: this,

        // And pull over the EventEmitter functionality.
        on: (event: string, listener: (args: any[]) => void) => this.on(event, listener),
      }
    ) as any;
  }

  invoke(...args: any[]): void {
    // Push out any upstream logger first.
    if (this.upstream) {
      this.upstream(...args);
    }

    // Emit sink events.
    this.emit('log', args);
  }
}

// This can be used in place of a real logger while waiting for Promises.
export const placeholder = (new GcpDebugLogger(() => {})).func;

// Add typing info for the EventEmitter we're adding to the returned function.
export interface GcpDebugLogFunction extends Function {
  instance: GcpDebugLogger;
  on(event: 'log', listener: (args: any[]) => void): this;
}

// Keep a copy of all namespaced loggers so users can reliably .on() them.
const loggerCache = new Map<string, GcpDebugLogger>();

// True once we've imported any GCP logging variables into upstream loggers.
let varsSet = false;

export default async function makeLogger(namespace: string): Promise<GcpDebugLogFunction> {
  // Reuse loggers so things like sinks are persistent.
  if (loggerCache.has(namespace)) {
    return loggerCache.get(namespace)!.func;
  }

  // Look for the GCP debug variable shared across languages.
  // Not sure what the format of this will be yet.
  const gcpEnv = (process.env['GCP_DEBUG'] ?? '').split(',');

  // Are we plugging into any other popular frameworks?
  const debugPkg = (await import('debug')).default;
  let logOutput: Function;
  if (debugPkg) {
    logOutput = debugPkg(namespace);

    if (!varsSet) {
      // Also copy over any GCP global enables.
      const existingEnables = process.env['DEBUG'] ?? '';
      debugPkg.enable(`${existingEnables}${existingEnables ? ',' : ''}${gcpEnv}`);

      varsSet = true;
    }
  } else {
    logOutput = util.debuglog(namespace);

    if (!varsSet) {
      // Also copy over any GCP global enables.
      const existingEnables = process.env['NODE_DEBUG'] ?? '';
      process.env['NODE_DEBUG'] = `${existingEnables}${existingEnables ? ',' : ''}${gcpEnv}`;

      varsSet = true;
    }
  }

  const logger = new GcpDebugLogger(logOutput);
  loggerCache.set(namespace, logger);
  return logger.func;
}
