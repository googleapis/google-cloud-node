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
//   title: Implicit setup
//   description: Reports a simple error using implicit credentials.
//   usage: node implicitSetup.js

'use strict';

function setupImplicit() {
  // [START error_reporting_setup_implicit]
  // [START error_reporting_setup_nodejs_implicit]
  // Imports the Google Cloud client library
  const {ErrorReporting} = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = new ErrorReporting();

  // Reports a simple error
  errors.report('Something broke!');
  // [END error_reporting_setup_nodejs_implicit]
  // [END error_reporting_setup_implicit]
}

setupImplicit();
