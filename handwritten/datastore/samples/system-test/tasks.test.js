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

var async = require('async');
var tasks = require('../tasks');
var taskIds = [];

describe('datastore:tasks', function () {
  after(function (done) {
    async.parallel(taskIds.map(function (taskId) {
      return function (cb) {
        tasks.deleteEntity(taskId, cb);
      };
    }), done);
  });

  it('should add a task', function (done) {
    getTaskId(done);
  });

  it('should mark a task as done', function (done) {
    getTaskId(function (err, taskId) {
      assert.ifError(err);
      tasks.updateEntity(taskId, done);
    });
  });

  it('should list tasks', function (done) {
    tasks.retrieveEntities(done);
  });

  it('should delete a task', function (done) {
    getTaskId(function (err, taskId) {
      assert.ifError(err);
      tasks.deleteEntity(taskId, done);
    });
  });

  function getTaskId (callback) {
    tasks.addEntity('description', function (err, taskKey) {
      if (err) {
        return callback(err);
      }

      var taskId = taskKey.path.pop();
      taskIds.push(taskId);
      callback(null, taskId);
    });
  }
});
