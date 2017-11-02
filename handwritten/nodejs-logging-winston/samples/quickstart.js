/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START logging_winston_quickstart]
const winston = require('winston');
const Logger = winston.Logger;
const Console = winston.transports.Console;

// Imports the Google Cloud client library for Winston
const LoggingWinston = require('@google-cloud/logging-winston');

// Creates a Winston Stackdriver Logging client
const loggingWinston = new LoggingWinston();

// Create a Winston logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
const logger = new Logger({
  level: 'info', // log at 'info' and above
  transports: [
    // Log to the console
    new Console(),
    // And log to Stackdriver Logging
    loggingWinston,
  ],
});

// Writes some log entries
logger.error('warp nacelles offline');
logger.info('shields at 99%');
// [END logging_winston_quickstart]
