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

function setupImplicit () {
  // [START error_reporting_setup_implicit]
  // Imports the Google Cloud client library
  const ErrorReporting = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = ErrorReporting();

  // Reports a simple error
  errors.report('Something broke!');
  // [END error_reporting_setup_implicit]
}

function setupExplicit () {
  // [START error_reporting_setup_explicit]
  // Imports the Google Cloud client library
  const ErrorReporting = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = ErrorReporting({
    projectId: 'your-project-id',
    keyFilename: '/path/to/key.json'
  });

  // Reports a simple error
  errors.report('Something broke!');
  // [END error_reporting_setup_explicit]
}

function manual () {
  // [START error_reporting_manual]
  // Imports the Google Cloud client library
  const ErrorReporting = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = ErrorReporting();

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
  // [END error_reporting_manual]
}

function express () {
  // [START error_reporting_express]
  const express = require('express');

  // Imports the Google Cloud client library
  const ErrorReporting = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = ErrorReporting();

  const app = express();

  app.get('/error', (req, res, next) => {
    res.send('Something broke!');
    next(new Error('Custom error message'));
  });

  app.get('/exception', () => {
    JSON.parse('{"malformedJson": true');
  });

  // Note that express error handling middleware should be attached after all
  // the other routes and use() calls. See the Express.js docs.
  app.use(errors.express);

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
  // [END error_reporting_express]
}

// The command-line program
const cli = require(`yargs`)
  .demand(1)
  .command('setup-implicit', 'Reports a simple error using implicit credentials.', {}, setupImplicit)
  .command('setup-explicit', 'Reports a simple error using explicit credentials.', {}, setupExplicit)
  .command('manual', 'Manually reports errors.', {}, manual)
  .command('express', 'Starts and Express service with integrated error reporting.', {}, express)
  .example('node $0 setup-implicit', 'Reports a simple error using implicit credentials.')
  .example('node $0 setup-explicit', 'Reports a simple error using explicit credentials.')
  .example('node $0 manual', 'Manually report some errors.')
  .example('node $0 express', 'Starts and Express service with integrated error reporting.')
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/error-reporting/docs`)
  .help()
  .strict();

if (module === require.main) {
  cli.parse(process.argv.slice(2));
}
