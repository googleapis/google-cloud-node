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

// sample-metadata:
//   title: Manual reporting
//   description: Manually reports errors.
//   usage: node manual.js

'use strict';

function manual() {
  // [START error_reporting_manual]
  // [START error_reporting_setup_nodejs_manual]
  // Imports the Google Cloud client library
  const {ErrorReporting} = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = new ErrorReporting();

  // Use the error message builder to customize all fields ...
  const errorEvent = errors.event();

  // Add error information
  errorEvent.setMessage('My error message');
  errorEvent.setUser('root@nexus');

  // Report the error event
  errors.report(errorEvent, () => {
    console.log('Done reporting error event!');
  });

  // Report an Error object
  errors.report(new Error('My error message'), () => {
    console.log('Done reporting Error object!');
  });

  // Report an error by provided just a string
  errors.report('My error message', () => {
    console.log('Done reporting error string!');
  });
  // [END error_reporting_setup_nodejs_manual]
  // [END error_reporting_manual]
}
manual();
