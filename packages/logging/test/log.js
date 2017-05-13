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

  var LOGGING;

  var assignSeverityToEntriesOverride = null;

  before(function() {
    Log = proxyquire('../src/log.js', {
      '@google-cloud/common': {
        util: fakeUtil
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

    LOGGING = {
      projectId: PROJECT_ID,
      entry: util.noop,
      request: util.noop
    };

    log = new Log(LOGGING, LOG_NAME_FORMATTED);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisifed);
    });

    it('should localize the escaped name', function() {
      assert.strictEqual(log.name, LOG_NAME_ENCODED);
    });

    it('should localize removeCircular_ to default value', function() {
      assert.strictEqual(log.removeCircular_, false);
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

    it('should accept and localize options.removeCircular', function() {
      var options = { removeCircular: true };
      var log = new Log(LOGGING, LOG_NAME_FORMATTED, options);
      assert.strictEqual(log.removeCircular_, true);
    });

    it('should localize the Logging instance', function() {
      assert.strictEqual(log.logging, LOGGING);
    });

    it('should localize the name', function() {
      assert.strictEqual(log.name, LOG_NAME_FORMATTED.split('/').pop());
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

  describe('delete', function() {
    it('should accept gaxOptions', function(done) {
      log.logging.request = function(config, callback) {
        assert.strictEqual(config.client, 'loggingServiceV2Client');
        assert.strictEqual(config.method, 'deleteLog');

        assert.deepEqual(config.reqOpts, {
          logName: log.formattedName_
        });

        assert.deepEqual(config.gaxOpts, {});

        callback(); // done()
      };

      log.delete(done);
    });

    it('should accept gaxOptions', function(done) {
      var gaxOptions = {};

      log.logging.request = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      log.delete(gaxOptions, assert.ifError);
    });
  });

  describe('entry', function() {
    it('should return an entry from Logging', function() {
      var metadata = {
        val: true
      };
      var data = {};

      var entryObject = {};

      log.logging.entry = function(metadata_, data_) {
        assert.deepEqual(metadata_, metadata);
        assert.strictEqual(data_, data);
        return entryObject;
      };

      var entry = log.entry(metadata, data);
      assert.strictEqual(entry, entryObject);
    });

    it('should assume one argument means data', function(done) {
      var data = {};

      log.logging.entry = function(metadata, data_) {
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
      log.logging.getEntries = function(options, callback) {
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

      log.logging.getEntries = function(options_, callback) {
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
      log.logging.getEntriesStream = function(options) {
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

      log.logging.getEntriesStream = function(options_) {
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
      log.logging.request = function(config, callback) {
        assert.strictEqual(config.client, 'loggingServiceV2Client');
        assert.strictEqual(config.method, 'writeLogEntries');

        assert.deepEqual(config.reqOpts, {
          logName: log.formattedName_,
          entries: [ENTRY],
          resource: {}
        });

        assert.strictEqual(config.gaxOpts, undefined);

        callback();
      };

      log.write(ENTRY, OPTIONS, done);
    });

    it('should arrify & decorate the entries', function(done) {
      var decoratedEntries = [];

      log.decorateEntries_ = function(entries, callback) {
        assert.strictEqual(entries[0], ENTRY);
        callback(null, decoratedEntries);
      };

      log.logging.request = function(config) {
        assert.strictEqual(config.reqOpts.entries, decoratedEntries);
        done();
      };

      log.write(ENTRY, OPTIONS, assert.ifError);
    });

    it('should not require options', function(done) {
      log.logging.request = function(config, callback) {
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

    it('should pass log.removeCircular to toJSON', function(done) {
      log.removeCircular_ = true;

      var entry = new Entry();
      entry.toJSON = function(options_) {
        assert.deepStrictEqual(options_, { removeCircular: true });
        setImmediate(done);
        return {};
      };

      log.decorateEntries_([entry], assert.ifError);
    });

    it('should exec callback with error from serialization', function(done) {
      var error = new Error('Error.');

      var entry = new Entry();
      entry.toJSON = function() {
        throw error;
      };

      log.decorateEntries_([entry], function(err) {
        assert.strictEqual(err, error);
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
