/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// jscs:disable requireEarlyReturn

'use strict';

var WARNING_HEADER = '\n!! -WARNING-';
var EXCLAMATION_LN = '\n!!';
var has = require('lodash.has');
var express = require('express');
var app = express();
var errorHandler = require('../../src/index.js')({
  onUncaughtException: 'report',
  key: process.env.STUBBED_API_KEY,
  projectId: process.env.STUBBED_PROJECT_NUM,
});
var bodyParser = require('body-parser');

// eslint-disable-next-line no-console
var log = console.log;

app.use(bodyParser.json());

app.post('/testErrorHandling', function(req, res, next) {
  if (has(req.body, 'test') && req.body.test !== true) {
    return next(new Error('Error on Express Regular Error POST Route'));
  } else {
    res.send('Success');
    res.end();
  }
});

app.get('/customError', function(req, res, next) {
  errorHandler.report('Error on Express Custom Error GET Route', function(err) {
    if (err) {
      log(WARNING_HEADER);
      log('Error in sending custom get error to api');
      log(err);
      log(EXCLAMATION_LN);
    } else {
      log(EXCLAMATION_LN);
      log('Successfully sent custom get error to api');
      log(EXCLAMATION_LN);
    }
  });

  res.send('Success');
  res.end();

  next();
});

app.get('/getError', function(req, res, next) {
  return next(new Error('Error on Express Regular Error GET Route'));
});

app.use(errorHandler.express);

function throwUncaughtError() {
  log('Throwing an uncaught error..');
  throw new Error('This is an uncaught error');
}

function reportManualError() {
  log('Reporting a manual error..');
  errorHandler.report(
      new Error('This is a manually reported error'), null, null,
      function(err) {
        if (err) {
          log(WARNING_HEADER);
          log('Got an error in sending error information to the API');
          log(err);
          log(EXCLAMATION_LN);
        } else {
          log(EXCLAMATION_LN);
          log('Successfully sent error information to the API');
          log(EXCLAMATION_LN);
        }

        if (process.env.THROW_ON_STARTUP) {
          throwUncaughtError();
        }
      });
}
log('reporting a manual error first');
errorHandler.report(new Error('This is a test'), err => {
  log('reported first manual error');
  if (err) {
    log('Error was unable to be reported', err);
  } else {
    log('Error reported!');
  }
});

app.listen(3000, function() {
  log('Scaffold Server has been started on port 3000');
  reportManualError();
});
