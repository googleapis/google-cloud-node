// Copyright 2015-2016, Google, Inc.
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

var uuid = require('node-uuid');
var program = require('../logs');

var logName = 'nodejs-docs-samples-test-' + uuid.v4();
var projectId = process.env.GCLOUD_PROJECT;
var filter = 'resource.type="global" AND logName="projects/' + projectId + '/logs/' + logName + '"';
var message = 'Hello world!';

describe('logging:logs', function () {
  it('should write a log entry', function (done) {
    var options = {
      name: logName,
      resource: {
        type: 'global'
      },
      entry: {
        message: message
      }
    };

    program.writeLogEntry(options, function (err) {
      assert.ifError(err);
      // Logs are eventually consistent
      setTimeout(done, 5000);
    });
  });

  it('should list log entries', function (done) {
    var listOptions = {
      filter: filter,
      pageSize: 5
    };

    program.listLogEntries(listOptions, function (err, entries) {
      assert.ifError(err);
      assert(Array.isArray(entries), '"entries" should be an array.');
      var matchingEntries = entries.filter(function (entry) {
        return entry.data && entry.data.message === message;
      });
      assert.equal(matchingEntries.length, 1, 'Newly written entry should be in list.');
      done();
    });
  });

  it('should delete a log', function (done) {
    program.deleteLog(logName, function (err) {
      // Ignore "Not Found" error
      if (err && err.code !== 404) {
        assert.ifError(err);
      }
      done();
    });
  });
});
