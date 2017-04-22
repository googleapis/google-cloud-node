/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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
var assert = require('assert');
var util = require('util');
var _ = require('lodash'); // for _.find. Can't use ES6 yet.
var cp = require('child_process');
var semver = require('semver');
var promisifyAll = require('@google-cloud/common').util.promisifyAll;
var Debug = require('..');
var Debugger = require('../test/debugger.js');

var CLUSTER_WORKERS = 3;

var FILENAME = 'test/fixtures/fib.js';

var delay = function(delayTimeMS) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delayTimeMS);
  });
};

// This test could take up to 70 seconds.
describe('@google-cloud/debug end-to-end behavior', function () {
  var api;

  var debuggeeId;
  var projectId;
  var children = [];

  before(function() {
    promisifyAll(Debugger);
    api = new Debugger(new Debug({}));
  });

  beforeEach(function() {
    this.timeout(10 * 1000);
    return new Promise(function(resolve, reject) {
      var numChildrenReady = 0;

      // Process a status message sent from a child process.
      var handler = function(c) {
        console.log(c);
        if (c.error) {
          reject(new Error('A child reported the following error: ' + c.error));
          return;
        }
        if (!debuggeeId) {
          // Cache the needed info from the first worker.
          debuggeeId = c.debuggeeId;
          projectId = c.projectId;
        } else {
          // Make sure all other workers are consistent.
          if (debuggeeId !== c.debuggeeId || projectId !== c.projectId) {
            reject(new Error('Child debuggee ID and/or project ID' +
                             'is not consistent with previous child'));
            return;
          }
        }
        numChildrenReady++;
        if (numChildrenReady === CLUSTER_WORKERS) {
          resolve();
        }
      };

      // Handle stdout/stderr output from a child process. More specifically,
      // write the child process's output to a transcript.
      // Each child has its own transcript.
      var stdoutHandler = function(index) {
        return function(chunk) {
          children[index].transcript += chunk;
        };
      };

      for (var i = 0; i < CLUSTER_WORKERS; i++) {
        // Fork child processes that sned messages to this process with IPC.
        var child = { transcript: '' };
        child.process = cp.fork(FILENAME, {
          execArgv: [],
          env: process.env,
          silent: true
        });
        child.process.on('message', handler);

        children.push(child);

        child.process.stdout.on('data', stdoutHandler(i));
        child.process.stderr.on('data', stdoutHandler(i));
      }
    });
  });

  afterEach(function() {
    this.timeout(5 * 1000);
    // Create a promise for each child that resolves when that child exits.
    var childExitPromises = children.map(function (child) {
      console.log(child.transcript);
      child.process.kill();
      return new Promise(function(resolve, reject) {
        var timeout = setTimeout(function() {
          reject(new Error('A child process failed to exit.'));
        }, 3000);
        child.process.on('exit', function() {
          clearTimeout(timeout);
          resolve();
        });
      });
    });
    // Wait until all children exit, then reset test state.
    return Promise.all(childExitPromises).then(function() {
      debuggeeId = null;
      projectId = null;
      children = [];
    });
  });

  it('should set breakpoints correctly', function() {
    this.timeout(25 * 1000);
    // Kick off promise chain by getting a list of debuggees
    return api.listDebuggees(projectId).then(function(results) {
      // Check that the debuggee created in this test is among the list of
      // debuggees, then list its breakpoints
      
      var debuggees = results[0];

      console.log('-- List of debuggees\n',
        util.inspect(debuggees, { depth: null}));
      assert.ok(debuggees, 'should get a valid ListDebuggees response');
      var result = _.find(debuggees, function(d) {
        return d.id === debuggeeId;
      });
      assert.ok(result, 'should find the debuggee we just registered');
      return api.listBreakpoints(debuggeeId);
    }).then(function(results) {
      // Delete every breakpoint

      var breakpoints = results[0];

      console.log('-- List of breakpoints\n', breakpoints);

      var promises = breakpoints.map(function(breakpoint) {
        return api.deleteBreakpoint(debuggeeId, breakpoint.id);
      });

      return Promise.all(promises);
    }).then(function(results) {
      // Set a breakpoint at which the debugger should write to a log

      results.map(function(result) {
        assert.equal(result, '');
      });
      console.log('-- deleted');

      console.log('-- setting a logpoint');
      return api.setBreakpoint(debuggeeId, {
        id: 'breakpoint-1',
        location: {path: FILENAME, line: 5},
        condition: 'n === 10',
        action: 'LOG',
        expressions: ['o'],
        log_message_format: 'o is: $0'
      });
    }).then(function(results) {
      // Check that the breakpoint was set, and then wait for the log to be
      // written to

      var breakpoint = results[0];

      assert.ok(breakpoint, 'should have set a breakpoint');
      assert.ok(breakpoint.id, 'breakpoint should have an id');
      assert.ok(breakpoint.location, 'breakpoint should have a location');
      assert.strictEqual(breakpoint.location.path, FILENAME);

      console.log('-- waiting before checking if the log was written');
      return Promise.all([breakpoint, delay(10 * 1000)]);
    }).then(function(results) {
      // Check the contents of the log, and then delete the breakpoint

      var breakpoint = results[0];

      children.forEach(function(child, index) {
        assert(child.transcript.indexOf('o is: {"a":[1,"hi",true]}') !== -1,
          'transcript in child ' + index + ' should contain value of o: ' +
          child.transcript);
      });
      return api.deleteBreakpoint(debuggeeId, breakpoint.id);
    }).then(function() {
      // Set another breakpoint at the same location

      console.log('-- setting a breakpoint');
      return api.setBreakpoint(debuggeeId, {
        id: 'breakpoint-1',
        location: {path: FILENAME, line: 5},
        expressions: ['process'], // Process for large variable
        condition: 'n === 10'
      });
    }).then(function(results) {
      // Check that the breakpoint was set, and then wait for the breakpoint to
      // be hit

      var breakpoint = results[0];

      console.log('-- resolution of setBreakpoint', breakpoint);
      assert.ok(breakpoint, 'should have set a breakpoint');
      assert.ok(breakpoint.id, 'breakpoint should have an id');
      assert.ok(breakpoint.location, 'breakpoint should have a location');
      assert.strictEqual(breakpoint.location.path, FILENAME);

      console.log('-- waiting before checking if breakpoint was hit');
      return Promise.all([breakpoint, delay(10 * 1000)]);
    }).then(function(results) {
      // Get the breakpoint

      var breakpoint = results[0];

      console.log('-- now checking if the breakpoint was hit');
      return api.getBreakpoint(debuggeeId, breakpoint.id);
    }).then(function(results) {
      // Check that the breakpoint was hit and contains the correct information,
      // which ends the test

      var breakpoint = results[0];

      var arg;
      console.log('-- results of get breakpoint\n', breakpoint);
      assert.ok(breakpoint, 'should have a breakpoint in the response');
      assert.ok(breakpoint.isFinalState, 'breakpoint should have been hit');
      assert.ok(Array.isArray(breakpoint.stackFrames), 'should have stack ');
      var top = breakpoint.stackFrames[0];
      assert.ok(top, 'should have a top entry');
      assert.ok(top.function, 'frame should have a function property');
      assert.strictEqual(top.function, 'fib');

      if (semver.satisfies(process.version, '>=4.0')) {
        arg = _.find(top.locals, {name: 'n'});
      } else {
        arg = _.find(top.arguments, {name: 'n'});
      }
      assert.ok(arg, 'should find the n argument');
      assert.strictEqual(arg.value, '10');
      console.log('-- checking log point was hit again');
      children.forEach(function(child) {
        assert.ok(child.transcript
          .split('LOGPOINT: o is: {"a":[1,"hi",true]}').length > 4);
      });

      return api.deleteBreakpoint(debuggeeId, breakpoint.id);
    }).then(function() {
      console.log('-- test passed');
      return Promise.resolve();
    });
  });

  it('should throttle logs correctly', function() {
    this.timeout(15 * 1000);
    // Kick off promise chain by getting a list of debuggees
    return api.listDebuggees(projectId).then(function(results) {
      // Check that the debuggee created in this test is among the list of
      // debuggees, then list its breakpoints

      var debuggees = results[0];

      console.log('-- List of debuggees\n',
        util.inspect(debuggees, { depth: null}));
      assert.ok(debuggees, 'should get a valid ListDebuggees response');
      var result = _.find(debuggees, function(d) {
        return d.id === debuggeeId;
      });
      assert.ok(result, 'should find the debuggee we just registered');

      return api.listBreakpoints(debuggeeId);
    }).then(function(results) {
      // Delete every breakpoint

      var breakpoints = results[0];

      console.log('-- List of breakpoints\n', breakpoints);

      var promises = breakpoints.map(function(breakpoint) {
        return api.deleteBreakpoint(debuggeeId, breakpoint.id);
      });

      return Promise.all(promises);
    }).then(function(results) {
      // Set a breakpoint at which the debugger should write to a log

      results.map(function(result) {
        assert.equal(result, '');
      });
      console.log('-- deleted');

      console.log('-- setting a logpoint');
      return api.setBreakpoint(debuggeeId, {
        id: 'breakpoint-1',
        location: {path: FILENAME, line: 5},
        condition: 'n === 10',
        action: 'LOG',
        expressions: ['o'],
        log_message_format: 'o is: $0'
      });
    }).then(function(results) {
      // Check that the breakpoint was set, and then wait for the log to be
      // written to
      var breakpoint = results[0];

      assert.ok(breakpoint, 'should have set a breakpoint');
      assert.ok(breakpoint.id, 'breakpoint should have an id');
      assert.ok(breakpoint.location, 'breakpoint should have a location');
      assert.strictEqual(breakpoint.location.path, FILENAME);

      console.log('-- waiting before checking if the log was written');
      return Promise.all([breakpoint, delay(10 * 1000)]);
    }).then(function(results) {
      // Check that the contents of the log is correct

      var breakpoint = results[0];

      // If no throttling occurs, we expect ~20 logs since we are logging
      // 2x per second over a 10 second period.
      children.forEach(function(child) {
        var logCount = child.transcript
          .split('LOGPOINT: o is: {"a":[1,"hi",true]}').length - 1;
        // A log count of greater than 10 indicates that we did not successfully
        // pause when the rate of `maxLogsPerSecond` was reached.
        assert(logCount <= 10, 'log count is greater than 10: ' + logCount);
        // A log count of less than 3 indicates that we did not successfully
        // resume logging after `logDelaySeconds` have passed.
        assert(logCount > 2, 'log count is not greater than 2: ' + logCount);
      });

      return api.deleteBreakpoint(debuggeeId, breakpoint.id);
    }).then(function() {
      console.log('-- test passed');
      return Promise.resolve();
    });
  });
});
