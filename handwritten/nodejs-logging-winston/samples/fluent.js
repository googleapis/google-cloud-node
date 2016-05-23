// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var app = express();

app.get('*', function (req, res, next) {
  return next('oops');
});

// [START fluent]
var structuredLogger = require('fluent-logger').createFluentSender('myapp', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0
});

var report = function (err, req) {
  var payload = {
    serviceContext: {
      service: 'myapp'
    },
    message: err.stack,
    context: {
      httpRequest: {
        url: req.originalUrl,
        method: req.method,
        referrer: req.header('Referer'),
        userAgent: req.header('User-Agent'),
        remoteIp: req.ip,
        responseStatusCode: 500
      }
    }
  };
  structuredLogger.emit('errors', payload);
};

// Handle errors (the following uses the Express framework)
app.use(function (err, req, res, next) {
  report(err, req);
  res.status(500).send(err.response || 'Something broke!');
});
// [END fluent]

module.exports = app;
