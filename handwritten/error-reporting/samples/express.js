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
//   title: Express integration
//   description: Starts and Express service with integrated error reporting.
//   usage: node express.js

'use strict';

function express() {
  // [START error_reporting_express]
  // [START error_reporting_setup_nodejs_express]
  const express = require('express');

  // Imports the Google Cloud client library
  const {ErrorReporting} = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = new ErrorReporting();

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
  // [END error_reporting_setup_nodejs_express]
  // [END error_reporting_express]
}
express();
