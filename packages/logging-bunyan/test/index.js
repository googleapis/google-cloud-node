/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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
var extend = require('extend');
var proxyquire = require('proxyquire');

describe('logging-bunyan', function() {
  var fakeLogInstance = {};
  var fakeLoggingOptions_;
  var fakeLogName_;
  var fakeLogOptions_;
  var fakeWritableOptions_;

  function fakeLogging(options) {
    fakeLoggingOptions_ = options;
    return {
      log: function(logName, options) {
        fakeLogName_ = logName;
        fakeLogOptions_ = options;
        return fakeLogInstance;
      }
    };
  }

  function FakeWritable(options) {
    fakeWritableOptions_ = options;
  }

  FakeWritable.prototype.write = function(chunk, encoding, callback) {
    setImmediate(callback);
  };

  var fakeStream = {
    Writable: FakeWritable
  };

  var LoggingBunyanCached;
  var LoggingBunyan;
  var loggingBunyan;

  var OPTIONS = {
    logName: 'log-name',
    resource: {}
  };

  var RECORD = {
    level: 30,
    time: '2012-06-19T21:34:19.906Z'
  };

  before(function() {
    LoggingBunyan = proxyquire('../src/index.js', {
      '@google-cloud/logging': fakeLogging,
      stream: fakeStream
    });

    LoggingBunyanCached = extend(true, {}, LoggingBunyan);
  });

  beforeEach(function() {
    fakeLogInstance = {};
    fakeLoggingOptions_ = null;
    fakeLogName_ = null;

    extend(true, LoggingBunyan, LoggingBunyanCached);
    loggingBunyan = new LoggingBunyan(OPTIONS);
  });

  describe('instantiation', function() {
    it('should create a new instance of LoggingBunyan', function() {
      // jshint newcap:false
      var loggingBunyan = LoggingBunyan(OPTIONS);
      assert(loggingBunyan instanceof LoggingBunyan);
    });

    it('should be an object mode Writable', function() {
      assert(loggingBunyan instanceof FakeWritable);
      assert.deepStrictEqual(fakeWritableOptions_, { objectMode: true });
    });

    it('should localize the provided resource', function() {
      assert.strictEqual(loggingBunyan.resource_, OPTIONS.resource);
    });

    it('should localize Log instance using provided name', function() {
      assert.strictEqual(fakeLoggingOptions_, OPTIONS);
      assert.strictEqual(fakeLogName_, OPTIONS.logName);
    });

    it('should localize Log instance using default name, options', function() {
      var optionsWithoutLogName = extend({}, OPTIONS);
      delete optionsWithoutLogName.logName;

      new LoggingBunyan(optionsWithoutLogName);

      assert.strictEqual(fakeLoggingOptions_, optionsWithoutLogName);
      assert.strictEqual(fakeLogName_, 'bunyan_log');
      assert.deepStrictEqual(fakeLogOptions_, { removeCircular: true });
    });
  });

  describe('stream', function() {
    it('should return a properly formatted object', function() {
      var level = 'info';
      var stream = loggingBunyan.stream(level);

      assert.strictEqual(stream.level, level);
      assert.strictEqual(stream.type, 'raw');
      assert.strictEqual(stream.stream, loggingBunyan);
    });
  });

  describe('formatEntry_', function() {

    it('should throw an error if record is a string', function() {
      assert.throws(function() {
        loggingBunyan.formatEntry_('string record');
      }, new RegExp(
        '@google-cloud/logging-bunyan only works as a raw bunyan stream type.'
      ));
    });

    it('should properly create an entry', function(done) {
      loggingBunyan.log_.entry = function(entryMetadata, record) {
        assert.deepEqual(entryMetadata, {
          resource: loggingBunyan.resource_,
          timestamp: RECORD.time,
          severity: LoggingBunyan.BUNYAN_TO_STACKDRIVER[RECORD.level]
        });
        assert.deepStrictEqual(record, RECORD);
        done();
      };

      loggingBunyan.formatEntry_(RECORD);
    });

    it('should rename the msg property to message', function(done) {
      var recordWithMsg = extend({ msg: 'msg' }, RECORD);
      var recordWithMessage = extend({ message: 'msg' }, RECORD);

      loggingBunyan.log_.entry = function(entryMetadata, record) {
        assert.deepStrictEqual(record, recordWithMessage);
        done();
      };

      loggingBunyan.formatEntry_(recordWithMsg);
    });

    it('should inject the error stack as the message', function(done) {
      var record = extend({
        msg: 'msg',
        err: {
          stack: 'the stack'
        }
      }, RECORD);
      var expectedRecord = extend({
        msg: 'msg',
        err: {
          stack: 'the stack'
        },
        message: 'the stack'
      }, RECORD);

      loggingBunyan.log_.entry = function(entryMetadata, record_) {
        assert.deepStrictEqual(record_, expectedRecord);
        done();
      };

      loggingBunyan.formatEntry_(record);
    });

    it('should leave message property intact when present', function(done) {
      var record = extend({
        msg: 'msg',
        message: 'message',
        err: {
          stack: 'the stack'
        }
      }, RECORD);

      loggingBunyan.log_.entry = function(entryMetadata, record_) {
        assert.deepStrictEqual(record_, record);
        done();
      };

      loggingBunyan.formatEntry_(record);
    });

    it('should promote the httpRequest property to metadata', function(done) {
      var HTTP_REQUEST = {
        statusCode: 418
      };
      var recordWithRequest = extend({
        httpRequest: HTTP_REQUEST,
      }, RECORD);

      loggingBunyan.log_.entry = function(entryMetadata, record) {
        assert.deepStrictEqual(entryMetadata, {
          resource: loggingBunyan.resource_,
          timestamp: RECORD.time,
          severity: LoggingBunyan.BUNYAN_TO_STACKDRIVER[RECORD.level],
          httpRequest: HTTP_REQUEST
        });
        assert.deepStrictEqual(record, RECORD);
        done();
      };

      loggingBunyan.formatEntry_(recordWithRequest);
    });

    it('should promote prefixed trace property to metadata', function(done) {
      var recordWithRequest = extend({
        'logging.googleapis.com/trace': 'trace1'
      }, RECORD);

      loggingBunyan.log_.entry = function(entryMetadata, record) {
        assert.deepStrictEqual(entryMetadata, {
          resource: loggingBunyan.resource_,
          timestamp: RECORD.time,
          severity: LoggingBunyan.BUNYAN_TO_STACKDRIVER[RECORD.level],
          trace: 'trace1'
        });
        assert.deepStrictEqual(record, RECORD);
        done();
      };

      loggingBunyan.formatEntry_(recordWithRequest);
    });
  });

  describe('write', function() {
    var oldWritableWrite;
    var oldTraceAgent;

    beforeEach(function() {
      oldWritableWrite = FakeWritable.prototype.write;
      oldTraceAgent = global._google_trace_agent;
    });

    afterEach(function() {
      FakeWritable.prototype.write = oldWritableWrite;
      global._google_trace_agent = oldTraceAgent;
    });

    it('should not set trace property if trace unavailable', function(done) {
      global._google_trace_agent = undefined;
      FakeWritable.prototype.write = function(record, encoding, callback) {
        assert.deepStrictEqual(record, RECORD);
        assert.strictEqual(encoding, 'encoding');
        assert.strictEqual(callback, assert.ifError);
        assert.strictEqual(this, loggingBunyan);
        done();
      };

      loggingBunyan.write(RECORD, 'encoding', assert.ifError);
    });

    it('should set prefixed trace property if trace available', function(done) {
      global._google_trace_agent = {
        getCurrentContextId: function() { return 'trace1'; },
        getWriterProjectId: function() { return 'project1'; }
      };
      const recordWithoutTrace = extend({}, RECORD);
      const recordWithTrace = extend({
        'logging.googleapis.com/trace': 'projects/project1/traces/trace1'
      }, RECORD);

      FakeWritable.prototype.write = function(record, encoding, callback) {
        // Check that trace field added to record before calling Writable.write
        assert.deepStrictEqual(record, recordWithTrace);

        // Check that the original record passed in was not mutated
        assert.deepStrictEqual(recordWithoutTrace, RECORD);

        assert.strictEqual(encoding, 'encoding');
        assert.strictEqual(callback, assert.ifError);
        assert.strictEqual(this, loggingBunyan);
        done();
      };

      loggingBunyan.write(recordWithoutTrace, 'encoding', assert.ifError);
    });

    it('should leave prefixed trace property as is if set', function(done) {
      var oldTraceAgent = global._google_trace_agent;
      global._google_trace_agent = {
        getCurrentContextId: function() { return 'trace-from-agent'; },
        getWriterProjectId: function() { return 'project1'; }
      };
      const recordWithTraceAlreadySet = extend({
        'logging.googleapis.com/trace': 'trace-already-set'
      }, RECORD);

      FakeWritable.prototype.write = function(record, encoding, callback) {
        assert.deepStrictEqual(record, recordWithTraceAlreadySet);
        assert.strictEqual(encoding, '');
        assert.strictEqual(callback, assert.ifError);
        assert.strictEqual(this, loggingBunyan);
        done();
      };

      loggingBunyan.write(recordWithTraceAlreadySet, '', assert.ifError);

      global._google_trace_agent = oldTraceAgent;
    });
  });

  it('should not set prefixed trace property if trace unavailable', function() {
    FakeWritable.prototype.write = function(record, encoding, callback) {
      assert.deepStrictEqual(record, RECORD);
      assert.strictEqual(encoding, '');
      assert.strictEqual(callback, assert.ifError);
      assert.strictEqual(this, loggingBunyan);
    };
    var oldTraceAgent = global._google_trace_agent;

    global._google_trace_agent = {};
    loggingBunyan.write(RECORD, '', assert.ifError);

    global._google_trace_agent = {
      getCurrentContextId: function() { return null; },
      getWriterProjectId: function() { return null; }
    };
    loggingBunyan.write(RECORD, '', assert.ifError);

    global._google_trace_agent = {
      getCurrentContextId: function() { return null; },
      getWriterProjectId: function() { return 'project1'; }
    };
    loggingBunyan.write(RECORD, '', assert.ifError);

    global._google_trace_agent = {
      getCurrentContextId: function() { return 'trace1'; },
      getWriterProjectId: function() { return null; }
    };
    loggingBunyan.write(RECORD, '', assert.ifError);

    global._google_trace_agent = oldTraceAgent;
  });

  describe('_write', function() {
    beforeEach(function() {
      fakeLogInstance.entry = function() {};
      fakeLogInstance.write = function() {};
    });

    it('should format the record', function(done) {
      loggingBunyan.formatEntry_ = function(record) {
        assert.strictEqual(record, RECORD);
        done();
      };

      loggingBunyan._write(RECORD, '', assert.ifError);
    });

    it('should write the record to the log instance', function(done) {
      var entry = {};

      loggingBunyan.log_.entry = function() {
        return entry;
      };

      loggingBunyan.log_.write = function(entries, callback) {
        assert.strictEqual(entries, entry);
        callback(); // done()
      };

      loggingBunyan._write(RECORD, '', done);
    });
  });

  describe('_writev', function() {
    var RECORDS = [ { chunk: RECORD }, { chunk: RECORD } ];
    beforeEach(function() {
      fakeLogInstance.entry = function() {};
      fakeLogInstance.write = function() {};
    });

    it('should format the records', function(done) {
      var numFormatted = 0;
      loggingBunyan.formatEntry_ = function(record) {
        assert.strictEqual(record, RECORD);
        if (++numFormatted === RECORDS.length) {
          done();
        }
      };

      loggingBunyan._writev(RECORDS, assert.ifError);
    });

    it('should write the records to the log instance', function(done) {
      var entry = {};

      loggingBunyan.log_.entry = function() {
        return entry;
      };

      loggingBunyan.log_.write = function(entries, callback) {
        assert.deepStrictEqual(entries, [entry, entry]);
        callback(); // done()
      };

      loggingBunyan._writev(RECORDS, done);
    });
  });

  describe('BUNYAN_TO_STACKDRIVER', function() {
    it('should correctly map to Stackdriver Logging levels', function() {
      assert.deepEqual(LoggingBunyan.BUNYAN_TO_STACKDRIVER, {
        60: 'CRITICAL',
        50: 'ERROR',
        40: 'WARNING',
        30: 'INFO',
        20: 'DEBUG',
        10: 'DEBUG'
      });
    });
  });
});
