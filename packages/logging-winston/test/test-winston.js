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

var assert = require('assert');
var proxyquire = require('proxyquire');
var winston = require('winston');

var levels = require('../src/levels.js');

/** @const */ var gcpLevels = Object.keys(levels);

var buffer = [];

// Stub out the @google-cloud/logging API.
var log = {
  entry: function(meta, data) { return {meta: meta, data: data}; },
  // We add functions for log levels later.
};

var StackdriverTransport = proxyquire('..', {
  '@google-cloud/logging': function(options) {
    return {log: function() { return log; }};
  }
});

// Add stub functions for each log level.
Object.keys(levels).forEach(function(level) {
  log[level] = function(entry, cb) {
    buffer.push({level: level, entry: entry});
    setImmediate(function() { cb(null, true); });
  };
});

describe('Winston Logging', function() {

  beforeEach(function() {
    // clear out the buffer
    buffer = [];
  });

  it('should register as a winston transport', function() {
    assert.equal(winston.transports.StackdriverLogging, StackdriverTransport);
  });

  it('should work as registered transport', function(done) {
    var logger = new winston.Logger({
      level: 'silly',
      transports: [new winston.transports.StackdriverLogging()]
    });

    logger.info('test message 1', { 
      anything: new Date(5),
      something: 'test message metadata',
      nothing: { err: new Error('test error')}
    },
    function(err) {
      assert.ifError(err);
      assert.equal(buffer.length, 1);
      var payload = buffer[0];
      assert.equal(payload.level, 'info');
      assert.equal(payload.entry.data, 'test message 1');
      assert.equal(payload.entry.meta.resource, undefined,
                   'no resource should be passed to the logging API because ' +
                       'the user did not provide one');
      assert.ok(payload.entry.meta.labels);
      Object.keys(payload.entry.meta.labels).forEach(function(key) {
        assert.equal(typeof payload.entry.meta.labels[key], 'string');
      });
      done();
    });
  });

  it('should use the provide resource when initialized with one',
     function(done) {
       var logger = new winston.Logger({level: 'silly'});
       logger.add(winston.transports.StackdriverLogging,
                  {resource: {type: 'fake_resource_type'}});

       logger.info('test message 2', function(err) {
         assert.ifError(err);
         assert.equal(buffer.length, 1);
         assert.equal(buffer[0].level, 'info');
         assert.equal(buffer[0].entry.data, 'test message 2');
         assert.equal(buffer[0].entry.meta.resource.type, 'fake_resource_type');
         done();
       });
     });

  it('should handle npm (default) levels', function(done) {
    var npmLevels = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
    var correspondingGcpLevels =
        ['error', 'warning', 'info', 'debug', 'debug', 'debug'];
    // Initialize logger at highest level
    var logger = new winston.Logger({level: 'silly'});
    logger.add(StackdriverTransport);
    // Log one message per level
    checkCorrectLevels(logger, npmLevels, correspondingGcpLevels, done);
  });

  it('should handle syslogs levels', function(done) {
    var syslogsLevels = [
      'emerg',
      'alert',
      'crit',
      'error',
      'warning',
      'notice',
      'info',
      'debug'
    ];

    // Initialize logger at highest level
    var logger = new winston.Logger(
        {levels: winston.config.syslog.levels, level: 'debug'});
    logger.add(
        StackdriverTransport,
        {resource: {type: 'gae_app'}, levels: winston.config.syslog.levels});
    // Log one message per level
    checkCorrectLevels(logger, syslogsLevels, gcpLevels, done);
  });

  it('should throw an error when an unknown level is specified', function() {
    // Initialize logger at highest level
    var logger = new winston.Logger(
        {levels: winston.config.syslog.levels, level: 'debug'});
    logger.add(StackdriverTransport);  // but we didn't specify the levels
    assert.throws(function() { logger.emerg('emerg message'); });
    logger.info('info message');
    assert.equal(buffer.length, 1);
    logger.debug('debug message');
    assert.equal(buffer.length, 2);
  });

  it('should handle GCP log levels', function(done) {
    // Initialize logger at highest level
    var logger = new winston.Logger({levels: levels, level: 'debug'});
    logger.add(StackdriverTransport, {resource: {type: 'gae_app'}, levels: levels});
    // Log one message per level
    checkCorrectLevels(logger, gcpLevels, gcpLevels, done);
  });

  it('should handle custom log levels', function(done) {
    var animalLevels = {snail: 0, turtle: 1, rabbit: 2, bunny: 2, unicorn: 3};
    var logger = new winston.Logger({
      levels: animalLevels,
      level: 'unicorn',
      transports:
          [new winston.transports.StackdriverLogging({levels: animalLevels})]
    });
    checkCorrectLevels(logger, animalLevels, gcpLevels, done);
    done();
  });

  it('should function for multiple loggers', function(done) {
    // Initialize loggers
    var logs = ['logA', 'logA', 'logB'];
    var loggers = logs.map(function(logName) {
      var logger = new winston.Logger();
      logger.add(StackdriverTransport, {logName: logName, resource: {type: 'gae_app'}});
      return logger;
    });

    var finishedRequests = 0;

    var verify = function(err) {
      assert(!err);
      if (++finishedRequests === loggers.length) {
        var logA = buffer.filter(function(payload) {
          return payload.entry.meta.logName === 'logA' &&
                 payload.entry.data === 'logA';
        });
        var logB = buffer.filter(function(payload) {
          return payload.entry.meta.logName === 'logB' &&
                 payload.entry.data === 'logB';
        });
        assert.equal(logA.length, 2);
        assert.equal(logB.length, 1);
        done();
      }
    };

    // For each logger, write a message
    for (var i = 0; i < logs.length; i++) {
      loggers[i].log('info', logs[i], verify);
    }
  });

  it('should allow multiple transports on the same logger', function(done) {
    // Initialize loggers
    var logs = ['logA', 'logB'];
    var logger = new winston.Logger();
    logs.forEach(function(logName) {
      var options =  {
        logName: logName,
        resource: {type: 'gae_app'}
      };
      logger.add(StackdriverTransport, options);
    });

    // Write a message
    logger.log('info', 'a message', function(err) {
      assert(!err);
      assert(buffer.length === 2);
      var logA = buffer.filter(function(payload) {
        return payload.entry.meta.logName === 'logA' &&
               payload.entry.data === 'a message';
      });
      var logB = buffer.filter(function(payload) {
        return payload.entry.meta.logName === 'logB' &&
               payload.entry.data === 'a message';
      });
      assert.equal(logA.length, 1);
      assert.equal(logB.length, 1);
      done();
    });
  });
});

function checkCorrectLevels(logger, winstonLevels, correspondingGcpLevels, cb) {
  var finishedRequests = 0;

  var verify = function(err) {
    assert(!err);
    if (++finishedRequests === winstonLevels.length) {
      assert.equal(buffer.length, winstonLevels.length);
      buffer.forEach(function(payload) {
        assert.equal(payload.level, payload.entry.data);
      });
      cb();
    }
  };

  // For each level, log a message
  for (var i = 0; i < winstonLevels.length; i++) {
    var winstonLevel = winstonLevels[i];
    var gcpLevel = correspondingGcpLevels[i];
    // Log the message, the text payload being the expected severity level.
    logger.log(winstonLevel, gcpLevel, verify);
  }
}
