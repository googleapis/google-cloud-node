/**
 * Copyright 2018, Google, LLC
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

// [START logging_bunyan_express]
// Imports the Google Cloud client library for Bunyan.
const lb = require('@google-cloud/logging-bunyan');

// Import express module and create an http server.
const express = require('express');

async function startServer() {
  const {logger, mw} = await lb.express.middleware();
  const app = express();

  // Install the logging middleware. This ensures that a Bunyan-style `log`
  // function is available on the `request` object. This should be the very
  // first middleware you attach to your app.
  app.use(mw);

  // Setup an http route and a route handler.
  app.get('/', (req, res) => {
    // `req.log` can be used as a bunyan style log method. All logs generated
    // using `req.log` use the current request context. That is, all logs
    // corresponding to a specific request will be bundled in the Stackdriver
    // UI.
    req.log.info('this is an info log message');
    res.send('hello world');
  });

  // `logger` can be used as a global logger, one not correlated to any specific
  // request.
  logger.info({port: 8080}, 'bonjour');

  // Start listening on the http server.
  app.listen(8080, () => {
    console.log('http server listening on port 8080');
  });
}

startServer();
// [END logging_bunyan_express]
