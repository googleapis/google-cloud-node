// Copyright 2017 Google LLC
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

/* eslint-disable @typescript-eslint/no-explicit-any */

import {defaultConfig} from './config';
import {LogSync, Logging} from '@google-cloud/logging-min';

const logging = new Logging();

// migrating from 'console-log-level' package we keep
// min and max log levels numeric interface used there
const [MIN_LEVEL, MAX_LEVEL] = [0, 4];

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pjson = require('../../package.json');

export class Logger {
  private log: LogSync;
  private severityThreshold: number;

  constructor(readonly level?: number) {
    if (level === undefined) {
      level = defaultConfig.logLevel;
    }
    if (level < MIN_LEVEL) {
      level = MIN_LEVEL;
    } else if (level > MAX_LEVEL) {
      level = MAX_LEVEL;
    }
    this.severityThreshold = level;
    this.log = logging.logSync(pjson.name);
  }

  debug(msg: string) {
    if (this.severityThreshold > 3) {
      this.log.debug(this.log.entry(this.toOneLine(msg)));
    }
  }

  info(msg: string) {
    if (this.severityThreshold > 2) {
      this.log.info(this.log.entry(this.toOneLine(msg)));
    }
  }

  warn(msg: string) {
    if (this.severityThreshold > 1) {
      this.log.warning(this.log.entry(this.toOneLine(msg)));
    }
  }

  error(msg: string) {
    if (this.severityThreshold > 0) {
      this.log.error(this.log.entry(this.toOneLine(msg)));
    }
  }

  private toOneLine(msg: string): string {
    const temp = msg.replace('\r\n', '\\r\\n');
    return temp.replace('\n', '\\n');
  }
}

let didLoggingInit = false;

export function createLogger(level?: number): Logger {
  if (!didLoggingInit) {
    logging.setProjectId().catch(err => {
      console.error(`failed to set logging project id ${err}`);
    });
    logging.setDetectedResource().catch(err => {
      console.error(`failed to discover resource metadata ${err}`);
    });

    didLoggingInit = true;
  }

  return new Logger(level);
}
