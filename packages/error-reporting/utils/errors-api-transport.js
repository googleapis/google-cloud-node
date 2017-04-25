/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var AuthClient = require('../src/google-apis/auth-client.js');

/* @const {String} Base Error Reporting API */
var API = 'https://clouderrorreporting.googleapis.com/v1beta1/projects';

var ONE_HOUR_API = 'timeRange.period=PERIOD_1_HOUR';

class ErrorsApiTransport extends AuthClient {
  constructor(config, logger) {
    super(config, logger);
  }

  deleteAllEvents(cb) {
    var self = this;
    self.getProjectId(function(err, id) {
      if (err) {
        return cb(err);
      }

      var options = {
        uri: [API, id, 'events'].join('/'),
        method: 'DELETE'
      };
      self.request_(options, function(err, response, body) {
        if (err) {
          return cb(err);
        }

        cb(null);
      });
    });
  }

  getAllGroups(cb) {
    var self = this;
    self.getProjectId(function(err, id) {
      if (err) {
        return cb(err);
      }

      var options = {
        uri: [API, id, 'groupStats?' + ONE_HOUR_API].join('/'),
        method: 'GET'
      };
      self.request_(options, function(err, response, body) {
        if (err) {
          return cb(err);
        }

        cb(null, JSON.parse(body.body).errorGroupStats || []);
      });
    });
  }
}

module.exports = ErrorsApiTransport;
