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

var arrify = require('arrify');
var assert = require('assert');
var extend = require('extend');
var proxyquire = require('proxyquire');
var through = require('through2');
var util = require('@google-cloud/common').util;

var v2 = require('../src/v2/index.js');

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Logging') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.deepEqual(methods, [
      'getEntries',
      'getSinks'
    ]);
  },
  streamify: function(methodName) {
    return methodName;
  }
};

var googleAutoAuthOverride;
function fakeGoogleAutoAuth() {
  return (googleAutoAuthOverride || util.noop).apply(null, arguments);
}

var isCustomTypeOverride;
var promisifed = false;
var replaceProjectIdTokenOverride;
var fakeUtil = extend({}, util, {
  isCustomType: function() {
    if (isCustomTypeOverride) {
      return isCustomTypeOverride.apply(null, arguments);
    }

    return false;
  },
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Logging') {
      return;
    }

    promisifed = true;
    assert.deepEqual(options.exclude, [
      'entry',
      'log',
      'request',
      'sink'
    ]);
  },
  replaceProjectIdToken: function(reqOpts) {
    if (replaceProjectIdTokenOverride) {
      return replaceProjectIdTokenOverride.apply(null, arguments);
    }

    return reqOpts;
  }
});

var v2Override;
function fakeV2() {
  return (v2Override || util.noop).apply(null, arguments);
}

function FakeEntry() {
  this.calledWith_ = arguments;
}

FakeEntry.fromApiResponse_ = function() {
  return arguments;
};

function FakeLog() {
  this.calledWith_ = arguments;
}

function FakeSink() {
  this.calledWith_ = arguments;
}

describe('Logging', function() {
  var Logging;
  var logging;

  var PROJECT_ID = 'project-id';

  before(function() {
    Logging = proxyquire('../', {
      '@google-cloud/common': {
        paginator: fakePaginator,
        util: fakeUtil
      },
      'google-auto-auth': fakeGoogleAutoAuth,
      './log.js': FakeLog,
      './entry.js': FakeEntry,
      './sink.js': FakeSink,
      './v2': fakeV2
    });
  });

  beforeEach(function() {
    googleAutoAuthOverride = null;
    isCustomTypeOverride = null;
    replaceProjectIdTokenOverride = null;
    v2Override = null;

    logging = new Logging({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should promisify all the things', function() {
      assert(promisifed);
    });

    it('should normalize the arguments', function() {
      var options = {
        projectId: PROJECT_ID,
        credentials: 'credentials',
        email: 'email',
        keyFilename: 'keyFile'
      };

      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options_) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, options_);
        return options_;
      };

      Logging.call(fakeContext, options);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should initialize the API object', function() {
      assert.deepEqual(logging.api, {});
    });

    it('should cache a local google-auto-auth instance', function() {
      var fakeGoogleAutoAuthInstance = {};
      var options = {
        a: 'b',
        c: 'd'
      };

      googleAutoAuthOverride = function(options_) {
        assert.deepEqual(options_, extend({
          scopes: v2.ALL_SCOPES,
          servicePath: v2.SERVICE_ADDRESS,
          port: v2.DEFAULT_SERVICE_PORT
        }, options));
        return fakeGoogleAutoAuthInstance;
      };

      var logging = new Logging(options);
      assert.strictEqual(logging.auth, fakeGoogleAutoAuthInstance);
    });

    it('should localize the options', function() {
      var options = {
        a: 'b',
        c: 'd'
      };

      var logging = new Logging(options);

      assert.notStrictEqual(logging.options, options);

      assert.deepStrictEqual(logging.options, extend({
        scopes: v2.ALL_SCOPES,
        servicePath: v2.SERVICE_ADDRESS,
        port: v2.DEFAULT_SERVICE_PORT
      }, options));
    });

    it('should localize the sslCreds in options', function() {
      var options = {
        servicePath: 'some.path',
        port: 9090
      };

      var logging = new Logging(options);

      assert.strictEqual(logging.options.servicePath, options.servicePath);
      assert.strictEqual(logging.options.port, options.port);
      assert(logging.options.sslCreds.constructor
        .toString().includes('ChannelCredentials'));
    });

    it('should set the projectId', function() {
      assert.strictEqual(logging.projectId, PROJECT_ID);
    });

    it('should default the projectId to the token', function() {
      var logging = new Logging({});
      assert.strictEqual(logging.projectId, '{{projectId}}');
    });
  });

  describe('createSink', function() {
    var SINK_NAME = 'name';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        logging.createSink();
      }, /A sink name must be provided\./);
    });

    it('should throw if a config object is not provided', function() {
      assert.throws(function() {
        logging.createSink(SINK_NAME);
      }, /A sink configuration object must be provided\./);
    });

    it('should set acls for a Dataset destination', function(done) {
      var dataset = {};

      var CONFIG = {
        destination: dataset
      };

      isCustomTypeOverride = function(destination, type) {
        assert.strictEqual(destination, dataset);
        return type === 'bigquery/dataset';
      };

      logging.setAclForDataset_ = function(name, config, callback) {
        assert.strictEqual(name, SINK_NAME);
        assert.strictEqual(config, CONFIG);
        callback(); // done()
      };

      logging.createSink(SINK_NAME, CONFIG, done);
    });

    it('should set acls for a Topic destination', function(done) {
      var topic = {};

      var CONFIG = {
        destination: topic
      };

      isCustomTypeOverride = function(destination, type) {
        assert.strictEqual(destination, topic);
        return type === 'pubsub/topic';
      };

      logging.setAclForTopic_ = function(name, config, callback) {
        assert.strictEqual(name, SINK_NAME);
        assert.strictEqual(config, CONFIG);
        callback(); // done()
      };

      logging.createSink(SINK_NAME, CONFIG, done);
    });

    it('should set acls for a Bucket destination', function(done) {
      var bucket = {};

      var CONFIG = {
        destination: bucket
      };

      isCustomTypeOverride = function(destination, type) {
        assert.strictEqual(destination, bucket);
        return type === 'storage/bucket';
      };

      logging.setAclForBucket_ = function(name, config, callback) {
        assert.strictEqual(name, SINK_NAME);
        assert.strictEqual(config, CONFIG);
        callback(); // done()
      };

      logging.createSink(SINK_NAME, CONFIG, done);
    });

    describe('API request', function() {
      it('should make the correct API request', function(done) {
        var config = {
          a: 'b',
          c: 'd'
        };

        var expectedConfig = extend({}, config, {
          name: SINK_NAME
        });

        logging.request = function(config) {
          assert.strictEqual(config.client, 'configServiceV2Client');
          assert.strictEqual(config.method, 'createSink');

          var expectedParent = 'projects/' + logging.projectId;
          assert.strictEqual(config.reqOpts.parent, expectedParent);
          assert.deepEqual(config.reqOpts.sink, expectedConfig);

          assert.strictEqual(config.gaxOpts, undefined);

          done();
        };

        logging.createSink(SINK_NAME, config, assert.ifError);
      });

      it('should accept GAX options', function(done) {
        var config = {
          a: 'b',
          c: 'd',
          gaxOptions: {}
        };

        logging.request = function(config_) {
          assert.strictEqual(config_.reqOpts.sink.gaxOptions, undefined);
          assert.strictEqual(config_.gaxOpts, config.gaxOptions);
          done();
        };

        logging.createSink(SINK_NAME, config, assert.ifError);
      });

      describe('error', function() {
        var error = new Error('Error.');
        var apiResponse = {};

        beforeEach(function() {
          logging.request = function(config, callback) {
            callback(error, apiResponse);
          };
        });

        it('should exec callback with error & API response', function(done) {
          logging.createSink(SINK_NAME, {}, function(err, sink, apiResponse_) {
            assert.strictEqual(err, error);
            assert.strictEqual(sink, null);
            assert.strictEqual(apiResponse_, apiResponse);

            done();
          });
        });
      });

      describe('success', function() {
        var apiResponse = {
          name: SINK_NAME
        };

        beforeEach(function() {
          logging.request = function(config, callback) {
            callback(null, apiResponse);
          };
        });

        it('should exec callback with Sink & API response', function(done) {
          var sink = {};

          logging.sink = function(name_) {
            assert.strictEqual(name_, SINK_NAME);
            return sink;
          };

          logging.createSink(SINK_NAME, {}, function(err, sink_, apiResponse_) {
            assert.ifError(err);

            assert.strictEqual(sink_, sink);
            assert.strictEqual(sink_.metadata, apiResponse);
            assert.strictEqual(apiResponse_, apiResponse);

            done();
          });
        });
      });
    });
  });

  describe('entry', function() {
    var RESOURCE = {};
    var DATA = {};

    it('should return an Entry object', function() {
      var entry = logging.entry(RESOURCE, DATA);
      assert(entry instanceof FakeEntry);
      assert.strictEqual(entry.calledWith_[0], RESOURCE);
      assert.strictEqual(entry.calledWith_[1], DATA);
    });
  });

  describe('getEntries', function() {
    it('should accept only a callback', function(done) {
      logging.request = function(config) {
        assert.deepEqual(config.reqOpts, {
          orderBy: 'timestamp desc',
          resourceNames: ['projects/' + logging.projectId]
        });
        done();
      };

      logging.getEntries(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      logging.request = function(config) {
        assert.strictEqual(config.client, 'loggingServiceV2Client');
        assert.strictEqual(config.method, 'listLogEntries');

        assert.deepEqual(config.reqOpts, extend(options, {
          orderBy: 'timestamp desc',
          resourceNames: ['projects/' + logging.projectId]
        }));

        assert.deepStrictEqual(config.gaxOpts, {
          autoPaginate: undefined
        });

        done();
      };

      logging.getEntries(options, assert.ifError);
    });

    it('should allow overriding orderBy', function(done) {
      var options = {
        orderBy: 'timestamp asc'
      };

      logging.request = function(config) {
        assert.deepEqual(config.reqOpts.orderBy, options.orderBy);
        done();
      };

      logging.getEntries(options, assert.ifError);
    });

    it('should accept GAX options', function(done) {
      var options = {
        a: 'b',
        c: 'd',
        gaxOptions: {
          autoPaginate: true
        }
      };

      logging.request = function(config) {
        assert.strictEqual(config.reqOpts.gaxOptions, undefined);
        assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };

      logging.getEntries(options, assert.ifError);
    });

    describe('error', function() {
      var ARGS = [
        new Error('Error.'),
        [],
        {}
      ];

      beforeEach(function() {
        logging.request = function(config, callback) {
          callback.apply(null, ARGS);
        };
      });

      it('should execute callback with error & API response', function(done) {
        logging.getEntries({}, function() {
          var args = [].slice.call(arguments);
          assert.deepStrictEqual(args, ARGS);
          done();
        });
      });
    });

    describe('success', function() {
      var ARGS = [
        null,
        [
          {
            logName: 'syslog'
          }
        ]
      ];

      beforeEach(function() {
        logging.request = function(config, callback) {
          callback.apply(null, ARGS);
        };
      });

      it('should execute callback with entries & API resp', function(done) {
        logging.getEntries({}, function(err, entries) {
          assert.ifError(err);

          var argsPassedToFromApiResponse_ = entries[0];
          assert.strictEqual(
            argsPassedToFromApiResponse_[0],
            ARGS[1][0]
          );

          done();
        });
      });
    });
  });

  describe('getEntriesStream', function() {
    var OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd'
      }
    };

    var REQUEST_STREAM;
    var RESULT = {};

    beforeEach(function() {
      REQUEST_STREAM = through.obj();
      REQUEST_STREAM.push(RESULT);

      logging.request = function() {
        return REQUEST_STREAM;
      };
    });

    it('should make request once reading', function(done) {
      logging.request = function(config) {
        assert.strictEqual(config.client, 'loggingServiceV2Client');
        assert.strictEqual(config.method, 'listLogEntriesStream');

        assert.deepEqual(config.reqOpts, {
          resourceNames: [
            'projects/' + logging.projectId
          ],
          orderBy: 'timestamp desc',
          a: 'b',
          c: 'd'
        });

        assert.deepEqual(config.gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd'
        });

        setImmediate(done);

        return REQUEST_STREAM;
      };

      var stream = logging.getEntriesStream(OPTIONS);
      stream.emit('reading');
    });

    it('should convert results from request to Entry', function(done) {
      var stream = logging.getEntriesStream(OPTIONS);

      stream.on('data', function(entry) {
        var argsPassedToFromApiResponse_ = entry[0];
        assert.strictEqual(
          argsPassedToFromApiResponse_,
          RESULT
        );

        done();
      });

      stream.emit('reading');
    });

    it('should expose abort function', function(done) {
      REQUEST_STREAM.abort = done;

      var stream = logging.getEntriesStream(OPTIONS);

      stream.emit('reading');

      stream.abort();
    });

    it('should not require an options object', function() {
      assert.doesNotThrow(function() {
        var stream = logging.getEntriesStream();
        stream.emit('reading');
      });
    });
  });

  describe('getSinks', function() {
    var OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd'
      }
    };

    it('should accept only a callback', function(done) {
      logging.request = function() {
        done();
      };

      logging.getSinks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      logging.request = function(config) {
        assert.strictEqual(config.client, 'configServiceV2Client');
        assert.strictEqual(config.method, 'listSinks');

        assert.deepEqual(config.reqOpts, {
          parent: 'projects/' + logging.projectId,
          a: 'b',
          c: 'd'
        });

        assert.deepEqual(config.gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd'
        });

        done();
      };

      logging.getSinks(OPTIONS, assert.ifError);
    });

    describe('error', function() {
      var ARGS = [
        new Error('Error.'),
        [],
        {}
      ];

      beforeEach(function() {
        logging.request = function(config, callback) {
          callback.apply(null, ARGS);
        };
      });

      it('should execute callback with error & API response', function(done) {
        logging.getEntries(OPTIONS, function() {
          var args = [].slice.call(arguments);
          assert.deepStrictEqual(args, ARGS);
          done();
        });
      });
    });

    describe('success', function() {
      var ARGS = [
        null,
        [
          {
            name: 'sink-name'
          }
        ],
        {}
      ];

      beforeEach(function() {
        logging.request = function(config, callback) {
          callback.apply(null, ARGS);
        };
      });

      it('should execute callback with Logs & API resp', function(done) {
        var sinkInstance = {};

        logging.sink = function(name) {
          assert.strictEqual(name, ARGS[1][0].name);
          return sinkInstance;
        };

        logging.getSinks(OPTIONS, function(err, sinks) {
          assert.ifError(err);

          assert.strictEqual(sinks[0], sinkInstance);
          assert.strictEqual(sinks[0].metadata, ARGS[1][0]);

          done();
        });
      });
    });
  });

  describe('getSinksStream', function() {
    var OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd'
      }
    };

    var REQUEST_STREAM;
    var RESULT = {
      name: 'sink-name'
    };

    beforeEach(function() {
      REQUEST_STREAM = through.obj();
      REQUEST_STREAM.push(RESULT);

      logging.request = function() {
        return REQUEST_STREAM;
      };
    });

    it('should make request once reading', function(done) {
      logging.request = function(config) {
        assert.strictEqual(config.client, 'configServiceV2Client');
        assert.strictEqual(config.method, 'listSinksStream');

        assert.deepEqual(config.reqOpts, {
          parent: 'projects/' + logging.projectId,
          a: 'b',
          c: 'd'
        });

        assert.deepEqual(config.gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd'
        });

        setImmediate(done);

        return REQUEST_STREAM;
      };

      var stream = logging.getSinksStream(OPTIONS);
      stream.emit('reading');
    });

    it('should convert results from request to Sink', function(done) {
      var stream = logging.getSinksStream(OPTIONS);

      var sinkInstance = {};

      logging.sink = function(name) {
        assert.strictEqual(name, RESULT.name);
        return sinkInstance;
      };

      stream.on('data', function(sink) {
        assert.strictEqual(sink, sinkInstance);
        assert.strictEqual(sink.metadata, RESULT);
        done();
      });

      stream.emit('reading');
    });

    it('should expose abort function', function(done) {
      REQUEST_STREAM.abort = done;

      var stream = logging.getSinksStream(OPTIONS);

      stream.emit('reading');

      stream.abort();
    });
  });

  describe('log', function() {
    var NAME = 'log-name';

    it('should return a Log object', function() {
      var log = logging.log(NAME);
      assert(log instanceof FakeLog);
      assert.strictEqual(log.calledWith_[0], logging);
      assert.strictEqual(log.calledWith_[1], NAME);
    });
  });

  describe('request', function() {
    var CONFIG = {
      client: 'client',
      method: 'method',
      reqOpts: {
        a: 'b',
        c: 'd'
      },
      gaxOpts: {}
    };

    var PROJECT_ID = 'project-id';

    beforeEach(function() {
      logging.auth = {
        getProjectId: function(callback) {
          callback(null, PROJECT_ID);
        }
      };

      logging.api[CONFIG.client] = {
        [CONFIG.method]: util.noop
      };
    });

    describe('prepareGaxRequest', function() {
      it('should get the project ID', function(done) {
        logging.auth.getProjectId = function() {
          done();
        };

        logging.request(CONFIG, assert.ifError);
      });

      it('should return error if getting project ID failed', function(done) {
        var error = new Error('Error.');

        logging.auth.getProjectId = function(callback) {
          callback(error);
        };

        logging.request(CONFIG, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should initiate and cache the client', function() {
        var fakeClient = {
          [CONFIG.method]: util.noop
        };

        v2Override = function(options) {
          assert.strictEqual(options, logging.options);

          return {
            [CONFIG.client]: function(options) {
              assert.strictEqual(options, logging.options);
              return fakeClient;
            }
          };
        };

        logging.api = {};

        logging.request(CONFIG, assert.ifError);

        assert.strictEqual(logging.api[CONFIG.client], fakeClient);
      });

      it('should use the cached client', function(done) {
        v2Override = function() {
          done(new Error('Should not re-instantiate a GAX client.'));
        };

        logging.request(CONFIG);
        done();
      });

      it('should replace the project ID token', function(done) {
        var replacedReqOpts = {};

        replaceProjectIdTokenOverride = function(reqOpts, projectId) {
          assert.notStrictEqual(reqOpts, CONFIG.reqOpts);
          assert.deepEqual(reqOpts, CONFIG.reqOpts);
          assert.strictEqual(projectId, PROJECT_ID);

          return replacedReqOpts;
        };

        logging.api[CONFIG.client][CONFIG.method] = {
          bind: function(gaxClient, reqOpts) {
            assert.strictEqual(reqOpts, replacedReqOpts);

            setImmediate(done);

            return util.noop;
          }
        };

        logging.request(CONFIG, assert.ifError);
      });
    });

    describe('makeRequestCallback', function() {
      it('should return if in snippet sandbox', function(done) {
        logging.auth.getProjectId = function() {
          done(new Error('Should not have gotten project ID.'));
        };

        global.GCLOUD_SANDBOX_ENV = true;
        var returnValue = logging.request(CONFIG, assert.ifError);
        delete global.GCLOUD_SANDBOX_ENV;

        assert.strictEqual(returnValue, undefined);
        done();
      });

      it('should prepare the request', function(done) {
        logging.api[CONFIG.client][CONFIG.method] = {
          bind: function(gaxClient, reqOpts, gaxOpts) {
            assert.strictEqual(gaxClient, logging.api[CONFIG.client]);
            assert.deepEqual(reqOpts, CONFIG.reqOpts);
            assert.strictEqual(gaxOpts, CONFIG.gaxOpts);

            setImmediate(done);

            return util.noop;
          }
        };

        logging.request(CONFIG, assert.ifError);
      });

      it('should execute callback with error', function(done) {
        var error = new Error('Error.');

        logging.api[CONFIG.client][CONFIG.method] = function() {
          var callback = [].slice.call(arguments).pop();
          callback(error);
        };

        logging.request(CONFIG, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should execute the request function', function() {
        logging.api[CONFIG.client][CONFIG.method] = function(done) {
          var callback = [].slice.call(arguments).pop();
          callback(null, done); // so it ends the test
        };

        logging.request(CONFIG, assert.ifError);
      });
    });

    describe('makeRequestStream', function() {
      var GAX_STREAM;

      beforeEach(function() {
        GAX_STREAM = through();

        logging.api[CONFIG.client][CONFIG.method] = {
          bind: function() {
            return function() {
              return GAX_STREAM;
            };
          }
        };
      });

      it('should return if in snippet sandbox', function(done) {
        logging.auth.getProjectId = function() {
          done(new Error('Should not have gotten project ID.'));
        };

        global.GCLOUD_SANDBOX_ENV = true;
        var returnValue = logging.request(CONFIG);
        returnValue.emit('reading');
        delete global.GCLOUD_SANDBOX_ENV;

        assert(returnValue instanceof require('stream'));
        done();
      });

      it('should expose an abort function', function(done) {
        GAX_STREAM.cancel = done;

        var requestStream = logging.request(CONFIG);
        requestStream.emit('reading');
        requestStream.abort();
      });

      it('should prepare the request once reading', function(done) {
        logging.api[CONFIG.client][CONFIG.method] = {
          bind: function(gaxClient, reqOpts, gaxOpts) {
            assert.strictEqual(gaxClient, logging.api[CONFIG.client]);
            assert.deepEqual(reqOpts, CONFIG.reqOpts);
            assert.strictEqual(gaxOpts, CONFIG.gaxOpts);

            setImmediate(done);

            return function() {
              return GAX_STREAM;
            };
          }
        };

        var requestStream = logging.request(CONFIG);
        requestStream.emit('reading');
      });

      it('should destroy the stream with prepare error', function(done) {
        var error = new Error('Error.');

        logging.auth.getProjectId = function(callback) {
          callback(error);
        };

        var requestStream = logging.request(CONFIG);
        requestStream.emit('reading');

        requestStream.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should destroy the stream with GAX error', function(done) {
        var error = new Error('Error.');

        var requestStream = logging.request(CONFIG);
        requestStream.emit('reading');

        requestStream.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        GAX_STREAM.emit('error', error);
      });
    });
  });

  describe('sink', function() {
    var NAME = 'sink-name';

    it('should return a Log object', function() {
      var sink = logging.sink(NAME);
      assert(sink instanceof FakeSink);
      assert.strictEqual(sink.calledWith_[0], logging);
      assert.strictEqual(sink.calledWith_[1], NAME);
    });
  });

  describe('setAclForBucket_', function() {
    var SINK_NAME = 'name';
    var CONFIG;

    var bucket;

    beforeEach(function() {
      bucket = {
        name: 'bucket-name',
        acl: {
          owners: {
            addGroup: util.noop
          }
        }
      };

      CONFIG = {
        destination: bucket
      };
    });

    it('should add cloud-logs as an owner', function(done) {
      bucket.acl.owners.addGroup = function(entity) {
        assert.strictEqual(entity, 'cloud-logs@google.com');
        done();
      };

      logging.setAclForBucket_(SINK_NAME, CONFIG, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        bucket.acl.owners.addGroup = function(entity, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return error and API response to callback', function(done) {
        logging.setAclForBucket_(SINK_NAME, CONFIG, function(err, sink, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(sink, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {};

      beforeEach(function() {
        bucket.acl.owners.addGroup = function(entity, callback) {
          callback(null, apiResponse);
        };
      });

      it('should call createSink with string destination', function(done) {
        bucket.acl.owners.addGroup = function(entity, callback) {
          logging.createSink = function(name, config, callback) {
            assert.strictEqual(name, SINK_NAME);

            assert.strictEqual(config, CONFIG);

            var expectedDestination = 'storage.googleapis.com/' + bucket.name;
            assert.strictEqual(config.destination, expectedDestination);

            callback(); // done()
          };

          callback(null, apiResponse);
        };

        logging.setAclForBucket_(SINK_NAME, CONFIG, done);
      });
    });
  });

  describe('setAclForDataset_', function() {
    var SINK_NAME = 'name';
    var CONFIG;
    var dataset;

    beforeEach(function() {
      dataset = {
        id: 'dataset-id',
        parent: {
          projectId: PROJECT_ID
        }
      };

      CONFIG = {
        destination: dataset
      };
    });

    describe('metadata refresh', function() {
      describe('error', function() {
        var error = new Error('Error.');
        var apiResponse = {};

        beforeEach(function() {
          dataset.getMetadata = function(callback) {
            callback(error, null, apiResponse);
          };
        });

        it('should execute the callback with error & API resp', function(done) {
          logging.setAclForDataset_(SINK_NAME, CONFIG, function(err, _, resp) {
            assert.strictEqual(err, error);
            assert.strictEqual(_, null);
            assert.strictEqual(resp, apiResponse);
            done();
          });
        });
      });

      describe('success', function() {
        var apiResponse = {
          access: [{}, {}]
        };

        var originalAccess = [].slice.call(apiResponse.access);

        beforeEach(function() {
          dataset.getMetadata = function(callback) {
            callback(null, apiResponse, apiResponse);
          };
        });

        it('should set the correct metadata', function(done) {
          var access = {
            role: 'WRITER',
            groupByEmail: 'cloud-logs@google.com'
          };

          var expectedAccess = [].slice.call(originalAccess).concat(access);

          dataset.setMetadata = function(metadata) {
            assert.deepEqual(apiResponse.access, originalAccess);
            assert.deepEqual(metadata.access, expectedAccess);
            done();
          };

          logging.setAclForDataset_(SINK_NAME, CONFIG, assert.ifError);
        });

        describe('updating metadata error', function() {
          var error = new Error('Error.');
          var apiResponse = {};

          beforeEach(function() {
            dataset.setMetadata = function(metadata, callback) {
              callback(error, apiResponse);
            };
          });

          it('should exec callback with error & API response', function(done) {
            logging.setAclForDataset_(SINK_NAME, CONFIG, function(err, _, res) {
              assert.strictEqual(err, error);
              assert.strictEqual(_, null);
              assert.strictEqual(res, apiResponse);
              done();
            });
          });
        });

        describe('updating metadata success', function() {
          var apiResponse = {};

          beforeEach(function() {
            dataset.setMetadata = function(metadata, callback) {
              callback(null, apiResponse);
            };
          });

          it('should call createSink with string destination', function(done) {
            logging.createSink = function(name, config, callback) {
              var expectedDestination = [
                'bigquery.googleapis.com',
                'projects',
                dataset.parent.projectId,
                'datasets',
                dataset.id
              ].join('/');

              assert.strictEqual(name, SINK_NAME);
              assert.strictEqual(config, CONFIG);
              assert.strictEqual(config.destination, expectedDestination);
              callback(); // done()
            };

            logging.setAclForDataset_(SINK_NAME, CONFIG, done);
          });
        });
      });
    });
  });

  describe('setAclForTopic_', function() {
    var SINK_NAME = 'name';
    var CONFIG;
    var topic;

    beforeEach(function() {
      topic = {
        name: 'topic-name',
        iam: {
          getPolicy: util.noop,
          setPolicy: util.noop
        }
      };

      CONFIG = {
        destination: topic
      };
    });

    describe('get policy', function() {
      describe('error', function() {
        var error = new Error('Error.');
        var apiResponse = {};

        beforeEach(function() {
          topic.iam.getPolicy = function(callback) {
            callback(error, null, apiResponse);
          };
        });

        it('should execute the callback with error & API resp', function(done) {
          logging.setAclForTopic_(SINK_NAME, CONFIG, function(err, _, resp) {
            assert.strictEqual(err, error);
            assert.strictEqual(_, null);
            assert.strictEqual(resp, apiResponse);
            done();
          });
        });
      });

      describe('success', function() {
        var apiResponse = {
          bindings: [{}, {}]
        };

        var originalBindings = [].slice.call(apiResponse.bindings);

        beforeEach(function() {
          topic.iam.getPolicy = function(callback) {
            callback(null, apiResponse, apiResponse);
          };
        });

        it('should set the correct policy bindings', function(done) {
          var binding = {
            role: 'roles/pubsub.publisher',
            members: [
              'serviceAccount:cloud-logs@system.gserviceaccount.com'
            ]
          };

          var expectedBindings = [].slice.call(originalBindings);
          expectedBindings.push(binding);

          topic.iam.setPolicy = function(policy) {
            assert.strictEqual(policy, apiResponse);
            assert.deepEqual(policy.bindings, expectedBindings);
            done();
          };

          logging.setAclForTopic_(SINK_NAME, CONFIG, assert.ifError);
        });

        describe('updating policy error', function() {
          var error = new Error('Error.');
          var apiResponse = {};

          beforeEach(function() {
            topic.iam.setPolicy = function(policy, callback) {
              callback(error, null, apiResponse);
            };
          });

          it('should exec callback with error & API response', function(done) {
            logging.setAclForTopic_(SINK_NAME, CONFIG, function(err, _, res) {
              assert.strictEqual(err, error);
              assert.strictEqual(_, null);
              assert.strictEqual(res, apiResponse);
              done();
            });
          });
        });

        describe('updating policy success', function() {
          var apiResponse = {};

          beforeEach(function() {
            topic.iam.setPolicy = function(policy, callback) {
              callback(null, apiResponse);
            };
          });

          it('should call createSink with string destination', function(done) {
            logging.createSink = function(name, config, callback) {
              var expectedDestination = 'pubsub.googleapis.com/' + topic.name;
              assert.strictEqual(name, SINK_NAME);
              assert.strictEqual(config, CONFIG);
              assert.strictEqual(config.destination, expectedDestination);
              callback(); // done()
            };

            logging.setAclForTopic_(SINK_NAME, CONFIG, done);
          });
        });
      });
    });
  });
});
