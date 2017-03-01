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

'use strict';

var WARNING_HEADER = '\n!! -WARNING-';
var EXCLAMATION_LN = '\n!!';
var has = require('lodash.has');
var express = require('express');
var app = express();
var errorHandler = require('../../index.js')({
  onUncaughtException: 'report',
  key: process.env.STUBBED_API_KEY,
  projectId: process.env.STUBBED_PROJECT_NUM
});
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/testErrorHandling', function(req, res, next) {


    if (has(req.body, 'test') && req.body.test !== true) {

      return next(new Error('Error on Express Regular Error POST Route'));
    } else {

      res.send('Success');
      res.end();
    }
  }
);

app.get(
  '/customError', function(req, res, next) {

    errorHandler.report(
      'Error on Express Custom Error GET Route', function(err, res) {

        if (err) {

          console.log(WARNING_HEADER);
          console.log('Error in sending custom get error to api');
          console.log(err);
          console.log(EXCLAMATION_LN);
        } else {

          console.log(EXCLAMATION_LN);
          console.log('Successfully sent custom get error to api');
          console.log(EXCLAMATION_LN);
        }
      }
   );

    res.send('Success');
    res.end();

    next();
  }
);

app.get(
  '/getError', function(req, res, next) {

    return next(new Error('Error on Express Regular Error GET Route'));
  }
);

app.use(errorHandler.express);

function throwUncaughtError () {
  console.log('Throwing an uncaught error..');
  throw new Error('This is an uncaught error');
}

function reportManualError () {
  console.log('Reporting a manual error..');
  errorHandler.report(
    new Error('This is a manually reported error'), null, null, function(err, res) {

      if (err) {

        console.log(WARNING_HEADER);
        console.log('Got an error in sending error information to the API');
        console.log(err);
        console.log(EXCLAMATION_LN);
      } else {

        console.log(EXCLAMATION_LN);
        console.log('Successfully sent error information to the API');
        console.log(EXCLAMATION_LN);
      }

      if (process.env.THROW_ON_STARTUP) {
        throwUncaughtError();
      }
    }
 );
}
console.log('reporting a manual error first');
errorHandler.report(
    new Error('This is a test'),
    (err, res) => {
        console.log('reported first manual error');
        if (err) {
            console.log('Error was unable to be reported', err);
        } else {
            console.log('Error reported!');
        }
    }
);

app.listen(
  3000,
  function() {
    console.log('Scaffold Server has been started on port 3000');
    reportManualError();
  }
);
