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
var extend = require('extend');
var GrpcServiceObject = require('@google-cloud/common').GrpcServiceObject;
var prop = require('propprop');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisifed = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Log') {
      return;
    }

    promisifed = true;
    assert.deepEqual(options.exclude, ['entry']);
  }
});

var Entry = require('../src/entry.js');

function FakeMetadata() {
  this.calledWith_ = arguments;
}

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  this.parent = {};
}

describe('Log', function() {
  var Log;
  var log;

  var PROJECT_ID = 'project-id';
  var LOG_NAME = 'escaping/required/for/this/log-name';
  var LOG_NAME_ENCODED = encodeURIComponent(LOG_NAME);
  var LOG_NAME_FORMATTED = [
    'projects',
    PROJECT_ID,
    'logs',
    LOG_NAME_ENCODED
   ].join('/');

  var LOGGING = {
    projectId: PROJECT_ID,
    entry: util.noop,
    request: util.noop
  };

  var assignSeverityToEntriesOverride = null;

  before(function() {
    Log = proxyquire('../src/log.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject,
      },
      './entry.js': Entry,
      './metadata.js': FakeMetadata
    });
    var assignSeverityToEntries_ = Log.assignSeverityToEntries_;
    Log.assignSeverityToEntries_ = function() {
      return (assignSeverityToEntriesOverride || assignSeverityToEntries_)
        .apply(null, arguments);
    };
  });

  beforeEach(function() {
    assignSeverityToEntriesOverride = null;
    extend(FakeGrpcServiceObject, GrpcServiceObject);
    log = new Log(LOGGING, LOG_NAME_FORMATTED);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisifed);
    });

    it('should localize the escaped name', function() {
      assert.strictEqual(log.name, LOG_NAME_ENCODED);
    });

    it('should localize the formatted name', function() {
      var formattedName = 'formatted-name';

      var formatName_ = Log.formatName_;
      Log.formatName_ = function() {
        Log.formatName_ = formatName_;
        return formattedName;
      };

      var log = new Log(LOGGING, LOG_NAME_FORMATTED);

      assert.strictEqual(log.formattedName_, formattedName);
    });

    it('should localize an instance of Metadata', function() {
      assert(log.metadata_ instanceof FakeMetadata);
      assert.strictEqual(log.metadata_.calledWith_[0], LOGGING);
    });

    it('should inherit from GrpcServiceObject', function() {
      assert(log instanceof FakeGrpcServiceObject);

      var calledWith = log.calledWith_[0];

      assert.strictEqual(calledWith.parent, LOGGING);
      assert.strictEqual(calledWith.id, LOG_NAME_ENCODED);
      assert.deepEqual(calledWith.methods, {
        delete: {
          protoOpts: {
            service: 'LoggingServiceV2',
            method: 'deleteLog'
          },
          reqOpts: {
            logName: log.formattedName_
          }
        }
      });
    });
  });

  describe('assignSeverityToEntries_', function() {
    var circular = {};
    circular.circular = circular;

    var ENTRIES = [
      { data: { a: 'b' } },
      { data: { c: 'd' } },
      { data: { e: circular }}
    ];

    var SEVERITY = 'severity';

    it('should assign severity to a single entry', function() {
      assert.deepEqual(
        Log.assignSeverityToEntries_(ENTRIES[0], SEVERITY)
          .map(prop('metadata'))
          .map(prop('severity')),
        [ SEVERITY ]
      );
    });

    it('should assign severity property to multiple entries', function() {
      assert.deepEqual(
        Log.assignSeverityToEntries_(ENTRIES, SEVERITY)
          .map(prop('metadata'))
          .map(prop('severity')),
        [
          SEVERITY,
          SEVERITY,
          SEVERITY
        ]
      );
    });

    it('should not affect original array', function() {
      var originalEntries = extend({}, ENTRIES);

      Log.assignSeverityToEntries_(originalEntries, SEVERITY);

      assert.deepEqual(originalEntries, ENTRIES);
    });
  });

  describe('formatName_', function() {
    var PROJECT_ID = 'project-id';
    var NAME = 'log-name';

    var EXPECTED = 'projects/' + PROJECT_ID + '/logs/' + NAME;

    it('should properly format the name', function() {
      assert.strictEqual(Log.formatName_(PROJECT_ID, NAME), EXPECTED);
    });

    it('should encode a name that requires it', function() {
      var name = 'appengine/logs';
      var expectedName = 'projects/' + PROJECT_ID + '/logs/appengine%2Flogs';

      assert.strictEqual(Log.formatName_(PROJECT_ID, name), expectedName);
    });

    it('should not encode a name that does not require it', function() {
      var name = 'appengine%2Flogs';
      var expectedName = 'projects/' + PROJECT_ID + '/logs/' + name;

      assert.strictEqual(Log.formatName_(PROJECT_ID, name), expectedName);
    });
  });

  describe('entry', function() {
    it('should return an entry from Logging', function() {
      var metadata = {
        val: true
      };
      var data = {};

      var entryObject = {};

      log.parent.entry = function(metadata_, data_) {
        assert.deepEqual(metadata_, extend({}, metadata, {
          logName: log.formattedName_
        }));
        assert.strictEqual(data_, data);
        return entryObject;
      };

      var entry = log.entry(metadata, data);
      assert.strictEqual(entry, entryObject);
    });

    it('should attach the log name to the entry', function(done) {
      log.parent.entry = function(metadata) {
        assert.strictEqual(metadata.logName, log.formattedName_);
        done();
      };

      log.entry({}, {});
    });

    it('should assume one argument means data', function(done) {
      var data = {};

      log.parent.entry = function(metadata, data_) {
        assert.strictEqual(data_, data);
        done();
      };

      log.entry(data);
    });
  });

  describe('getEntries', function() {
    var EXPECTED_OPTIONS = {
      filter: 'logName="' + LOG_NAME_FORMATTED + '"'
    };

    it('should call Logging getEntries with defaults', function(done) {
      log.parent.getEntries = function(options, callback) {
        assert.deepEqual(options, EXPECTED_OPTIONS);
        callback(); // done()
      };

      log.getEntries(done);
    });

    it('should allow overriding the options', function(done) {
      var options = {
        custom: true,
        filter: 'custom filter'
      };

      log.parent.getEntries = function(options_, callback) {
        assert.deepEqual(options_, extend({}, EXPECTED_OPTIONS, options));
        callback(); // done()
      };

      log.getEntries(options, done);
    });
  });

  describe('getEntriesStream', function() {
    var fakeStream = {};
    var EXPECTED_OPTIONS = {
      filter: 'logName="' + LOG_NAME_FORMATTED + '"'
    };

    it('should call Logging getEntriesStream with defaults', function(done) {
      log.parent.getEntriesStream = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS);
        setImmediate(done);
        return fakeStream;
      };

      var stream = log.getEntriesStream();
      assert.strictEqual(stream, fakeStream);
    });

    it('should allow overriding the options', function(done) {
      var options = {
        custom: true,
        filter: 'custom filter'
      };

      log.parent.getEntriesStream = function(options_) {
        assert.deepEqual(options_, extend({}, EXPECTED_OPTIONS, options));
        setImmediate(done);
        return fakeStream;
      };

      var stream = log.getEntriesStream(options);
      assert.strictEqual(stream, fakeStream);
    });
  });

  describe('write', function() {
    var ENTRY = {};
    var OPTIONS = {
      resource: {}
    };

    beforeEach(function() {
      log.decorateEntries_ = function(entries, callback) {
        callback(null, entries);
      };
    });

    it('should make the correct API request', function(done) {
      log.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'LoggingServiceV2');
        assert.strictEqual(protoOpts.method, 'writeLogEntries');

        assert.strictEqual(reqOpts.logName, log.formattedName_);
        assert.strictEqual(reqOpts.entries[0], ENTRY);

        done();
      };

      log.write(ENTRY, OPTIONS, assert.ifError);
    });

    it('should arrify & decorate the entries', function(done) {
      var decoratedEntries = [];

      log.decorateEntries_ = function(entries, callback) {
        assert.strictEqual(entries[0], ENTRY);
        callback(null, decoratedEntries);
      };

      log.request = function(protoOpts, reqOpts) {
        assert.strictEqual(reqOpts.entries, decoratedEntries);
        done();
      };

      log.write(ENTRY, OPTIONS, assert.ifError);
    });

    it('should exec callback with only error and API response', function(done) {
      var args = [1, 2, 3, 4];

      log.request = function(protoOpts, reqOpts, callback) {
        callback.apply(null, args);
      };

      log.write(ENTRY, OPTIONS, function() {
        assert.strictEqual(arguments.length, 2);

        assert.strictEqual(arguments[0], args[0]);
        assert.strictEqual(arguments[1], args[1]);

        done();
      });
    });

    it('should not require options', function(done) {
      log.request = function(protoOpts, reqOpts, callback) {
        callback(); // done()
      };

      log.write(ENTRY, done);
    });
  });

  describe('severity shortcuts', function() {
    var ENTRY = {};
    var LABELS = [];

    beforeEach(function() {
      log.write = util.noop;
    });

    describe('alert', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'ALERT');

          done();
        };

        log.alert(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.alert(ENTRY, LABELS, done);
      });
    });

    describe('critical', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'CRITICAL');

          done();
        };

        log.critical(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.critical(ENTRY, LABELS, done);
      });
    });

    describe('debug', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'DEBUG');

          done();
        };

        log.debug(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.debug(ENTRY, LABELS, done);
      });
    });

    describe('emergency', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'EMERGENCY');

          done();
        };

        log.emergency(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.emergency(ENTRY, LABELS, done);
      });
    });

    describe('error', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'ERROR');

          done();
        };

        log.error(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.error(ENTRY, LABELS, done);
      });
    });

    describe('info', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'INFO');

          done();
        };

        log.info(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.info(ENTRY, LABELS, done);
      });
    });

    describe('notice', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'NOTICE');

          done();
        };

        log.notice(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.notice(ENTRY, LABELS, done);
      });
    });

    describe('warning', function() {
      it('should format the entries', function(done) {
        assignSeverityToEntriesOverride = function(entries, severity) {
          assert.strictEqual(entries, ENTRY);
          assert.strictEqual(severity, 'WARNING');

          done();
        };

        log.warning(ENTRY, LABELS, assert.ifError);
      });

      it('should pass correct arguments to write', function(done) {
        var assignedEntries = [];

        assignSeverityToEntriesOverride = function() {
          return assignedEntries;
        };

        log.write = function(entry, labels, callback) {
          assert.strictEqual(entry, assignedEntries);
          assert.strictEqual(labels, LABELS);
          callback(); // done()
        };

        log.warning(ENTRY, LABELS, done);
      });
    });
  });

  describe('decorateEntries_', function() {
    var toJSONResponse = {};

    function FakeEntry() {}
    FakeEntry.prototype.toJSON = function() {
      return toJSONResponse;
    };

    beforeEach(function() {
      log.entry = function() {
        return new FakeEntry();
      };

      log.metadata_.assignDefaultResource = function(entryJson, callback) {
        callback(null, entryJson);
      };
    });

    it('should create an Entry object if one is not provided', function(done) {
      var entry = {};

      log.entry = function(entry_) {
        assert.strictEqual(entry_, entry);
        return new FakeEntry();
      };

      log.decorateEntries_([entry], function(err, decoratedEntries) {
        assert.ifError(err);
        assert.strictEqual(decoratedEntries[0], toJSONResponse);
        done();
      });
    });

    it('should get JSON format from Entry object', function(done) {
      log.entry = function() {
        done(); // will result in multiple done() calls and fail the test.
      };

      var entry = new Entry();
      entry.toJSON = function() {
        return toJSONResponse;
      };

      log.decorateEntries_([entry], function(err, decoratedEntries) {
        assert.ifError(err);
        assert.strictEqual(decoratedEntries[0], toJSONResponse);
        done();
      });
    });

    it('should assign the log name', function(done) {
      log.decorateEntries_([{}], function(err, decoratedEntries) {
        assert.ifError(err);
        assert.strictEqual(decoratedEntries[0].logName, log.formattedName_);
        done();
      });
    });

    it('should return extended entry with default resource', function(done) {
      var entry = new FakeEntry();
      entry.toJSON = function() {
        return toJSONResponse;
      };

      var entryWithDefaultResource = {};

      log.metadata_.assignDefaultResource = function(entryJson, callback) {
        assert.strictEqual(entryJson, toJSONResponse);
        callback(null, entryWithDefaultResource);
      };

      log.decorateEntries_([entry], function(err, decoratedEntries) {
        assert.ifError(err);
        assert.strictEqual(decoratedEntries[0], entryWithDefaultResource);
        done();
      });
    });

    it('should return original entry without resource', function(done) {
      var entry = new Entry();
      entry.toJSON = function() {
        return toJSONResponse;
      };

      log.metadata_.assignDefaultResource = function(entryJson, callback) {
        assert.strictEqual(entryJson, toJSONResponse);
        callback();
      };

      log.decorateEntries_([entry], function(err, decoratedEntries) {
        assert.ifError(err);
        assert.strictEqual(decoratedEntries[0], toJSONResponse);
        done();
      });
    });
  });
});
