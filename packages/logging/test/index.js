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
var googleProtoFiles = require('google-proto-files');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

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

var isCustomTypeOverride;
var promisifed = false;
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
    assert.deepEqual(options.exclude, ['entry', 'log', 'sink']);
  }
});

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

function FakeGrpcService() {
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
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService
      },
      './log.js': FakeLog,
      './entry.js': FakeEntry,
      './sink.js': FakeSink
    });
  });

  beforeEach(function() {
    isCustomTypeOverride = null;

    logging = new Logging({
      projectId: PROJECT_ID
    });
    logging.projectId = PROJECT_ID;
    logging.request = util.noop;
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should promisify all the things', function() {
      assert(promisifed);
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(logging.getEntriesStream, 'getEntries');
      assert.strictEqual(logging.getSinksStream, 'getSinks');
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

    it('should inherit from GrpcService', function() {
      assert(logging instanceof FakeGrpcService);

      var calledWith = logging.calledWith_[0];

      assert.strictEqual(calledWith.baseUrl, 'logging.googleapis.com');
      assert.strictEqual(calledWith.service, 'logging');
      assert.strictEqual(calledWith.apiVersion, 'v2');
      assert.deepEqual(calledWith.protoServices, {
        ConfigServiceV2:
          googleProtoFiles('logging', 'v2', 'logging_config.proto'),
        LoggingServiceV2: googleProtoFiles.logging.v2
      });
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/cloud-platform'
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
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

        logging.request = function(protoOpts, reqOpts) {
          assert.strictEqual(protoOpts.service, 'ConfigServiceV2');
          assert.strictEqual(protoOpts.method, 'createSink');

          var expectedParent = 'projects/' + logging.projectId;
          assert.strictEqual(reqOpts.parent, expectedParent);
          assert.deepEqual(reqOpts.sink, expectedConfig);

          done();
        };

        logging.createSink(SINK_NAME, config, assert.ifError);
      });

      describe('error', function() {
        var error = new Error('Error.');
        var apiResponse = {};

        beforeEach(function() {
          logging.request = function(protoOpts, reqOpts, callback) {
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
          logging.request = function(protoOpts, reqOpts, callback) {
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
      logging.request = function(protoOpts, reqOpts) {
        assert.deepEqual(reqOpts, {
          orderBy: 'timestamp desc',
          projectIds: [logging.projectId]
        });
        done();
      };

      logging.getEntries(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      logging.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'LoggingServiceV2');
        assert.strictEqual(protoOpts.method, 'listLogEntries');

        assert.deepEqual(reqOpts, extend(options, {
          orderBy: 'timestamp desc',
          projectIds: [logging.projectId]
        }));

        done();
      };

      logging.getEntries(options, assert.ifError);
    });

    it('should allow overriding orderBy', function(done) {
      var options = {
        orderBy: 'timestamp asc'
      };

      logging.request = function(protoOpts, reqOpts) {
        assert.deepEqual(reqOpts.orderBy, options.orderBy);
        done();
      };

      logging.getEntries(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        logging.request = function(protoOpts, reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        logging.getEntries({}, function(err, entries, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(entries, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        entries: [
          {
            logName: 'syslog'
          }
        ]
      };

      beforeEach(function() {
        logging.request = function(protoOpts, reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          orderBy: 'timestamp desc',
          projectIds: [logging.projectId],
          pageToken: nextPageToken
        };

        logging.request = function(protoOpts, reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        logging.getEntries({}, function(err, entries, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with entries & API resp', function(done) {
        logging.getEntries({}, function(err, entries, nextQuery, apiResponse_) {
          assert.ifError(err);

          var argsPassedToFromApiResponse_ = entries[0];
          assert.strictEqual(
            argsPassedToFromApiResponse_[0],
            apiResponse.entries[0]
          );

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('getSinks', function() {
    it('should accept only a callback', function(done) {
      logging.request = function() {
        done();
      };

      logging.getSinks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      logging.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'ConfigServiceV2');
        assert.strictEqual(protoOpts.method, 'listSinks');

        var expectedParent = 'projects/' + logging.projectId;
        assert.strictEqual(reqOpts.parent, expectedParent);

        done();
      };

      logging.getSinks({}, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        logging.request = function(protoOpts, reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        logging.getSinks({}, function(err, sinks, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(sinks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        sinks: [
          {
            name: 'sink-name'
          }
        ]
      };

      beforeEach(function() {
        logging.request = function(protoOpts, reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        logging.request = function(protoOpts, reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        logging.getSinks({}, function(err, sinks, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Logs & API resp', function(done) {
        var log = {};

        logging.sink = function(name) {
          assert.strictEqual(name, apiResponse.sinks[0].name);
          return log;
        };

        logging.getSinks({}, function(err, sinks, nextQuery, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(sinks[0], log);
          assert.strictEqual(sinks[0].metadata, apiResponse.sinks[0]);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
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
