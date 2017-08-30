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
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var Service = require('@google-cloud/common').Service;
var util = require('@google-cloud/common').util;

function FakeModel() {
  this.calledWith_ = arguments;
}

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Prediction') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.equal(Class.name, 'Prediction');
    assert.deepEqual(methods, ['getModels']);
  },
  streamify: function(methodName) {
    return methodName;
  }
};

var promisified = false;
var fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: util.noop,
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Prediction') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['model']);
  }
});

describe('Prediction', function() {
  var Prediction;
  var prediction;

  var PROJECT_ID = 'project-id';

  before(function() {
    Prediction = proxyquire('../', {
      '@google-cloud/common': {
        Service: FakeService,
        paginator: fakePaginator,
        util: fakeUtil
      },
      './model.js': FakeModel,
    });
  });

  beforeEach(function() {
    prediction = new Prediction({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(prediction.getModelsStream, 'getModels');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: PROJECT_ID };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Prediction.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should inherit from Service', function() {
      assert(prediction instanceof Service);

      var calledWith = prediction.calledWith_[0];

      var baseUrl = 'https://www.googleapis.com/prediction/v1.6';
      assert.strictEqual(calledWith.defaultApiEndpoint, baseUrl);
      assert.deepEqual(calledWith.environmentVariables, [
        'GOOGLE_CLOUD_PREDICTION_ENDPOINT'
      ]);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/prediction',
        'https://www.googleapis.com/auth/devstorage.read_only'
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
    });
  });

  describe('createModel', function() {
    var ID = 'new-model-id';
    var OPTIONS = {
      a: 'b',
      c: 'd'
    };

    it('should throw if a model ID is not provided', function() {
      assert.throws(function() {
        prediction.createModel();
      }, /A model ID is required\./);
    });

    it('should make the correct API request', function(done) {
      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/trainedmodels');

        var expectedBody = extend({}, OPTIONS, {
          id: ID
        });
        assert.deepEqual(reqOpts.json, expectedBody);

        done();
      };

      prediction.createModel(ID, OPTIONS, assert.ifError);
    });

    it('should not require any options', function() {
      assert.doesNotThrow(function() {
        prediction.request = util.noop;
        prediction.createModel(ID, assert.ifError);
      });
    });

    it('should accept a File for input data source', function(done) {
      var file = {
        name: 'file-name',
        parent: {
          name: 'bucket-name'
        }
      };

      prediction.request = function(reqOpts) {
        var expectedLocation = file.parent.name + '/' + file.name;
        assert.strictEqual(reqOpts.json.storageDataLocation, expectedLocation);
        assert.strictEqual(reqOpts.json.data, undefined);
        done();
      };

      prediction.createModel(ID, {
        data: file
      }, assert.ifError);
    });

    it('should accept a model type', function(done) {
      var type = 'classification';

      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.json.modelType, type.toUpperCase());
        assert.strictEqual(reqOpts.json.type, undefined);
        done();
      };

      prediction.createModel(ID, {
        type: type
      }, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        prediction.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        prediction.createModel(ID, OPTIONS, function(err, model, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(model, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        id: ID
      };
      var model = {};

      beforeEach(function() {
        prediction.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };

        prediction.model = function() {
          return model;
        };
      });

      it('should create a model from the response', function(done) {
        prediction.model = function(id) {
          assert.strictEqual(id, apiResponse.id);
          setImmediate(done);
          return model;
        };

        prediction.createModel(ID, OPTIONS, assert.ifError);
      });

      it('should execute callback with model and API response', function(done) {
        prediction.createModel(ID, OPTIONS, function(err, model_, resp) {
          assert.ifError(err);
          assert.strictEqual(model_, model);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });

      it('should set the metadata to the response', function(done) {
        prediction.createModel(ID, OPTIONS, function(err, model) {
          assert.ifError(err);
          assert.strictEqual(model.metadata, apiResponse);
          done();
        });
      });
    });
  });

  describe('getModels', function() {
    it('should make the correct request', function(done) {
      var query = {};

      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/trainedmodels/list');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      prediction.getModels(query, assert.ifError);
    });

    it('should use an empty query if one was not provided', function(done) {
      prediction.request = function(reqOpts) {
        assert.equal(Object.keys(reqOpts.qs).length, 0);
        done();
      };

      prediction.getModels(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        prediction.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        prediction.getModels({}, function(err, models, nextQ, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(models, null);
          assert.strictEqual(nextQ, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var MODEL = {
        id: 'model-id'
      };
      var apiResponse = {
        items: [MODEL]
      };

      beforeEach(function() {
        prediction.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };

        prediction.model = function() {
          return MODEL;
        };
      });

      it('should create Models from the response', function(done) {
        prediction.model = function(id) {
          assert.strictEqual(id, MODEL.id);
          setImmediate(done);
          return MODEL;
        };

        prediction.getModels({}, assert.ifError);
      });

      it('should set a nextQuery if necessary', function(done) {
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        prediction.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        prediction.getModels(query, function(err, models, nextQuery) {
          assert.ifError(err);

          // Check the original query wasn't modified.
          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });

      it('should execute callback with models and API resp', function(done) {
        prediction.getModels({}, function(err, models, nextQ, resp) {
          assert.ifError(err);

          assert.strictEqual(models[0], MODEL);
          assert.strictEqual(nextQ, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });

      it('should assign metadata to models', function(done) {
        prediction.getModels({}, function(err, models) {
          assert.ifError(err);
          assert.strictEqual(models[0].metadata, MODEL);
          done();
        });
      });
    });
  });

  describe('model', function() {
    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        prediction.model();
      }, /A model ID is required\./);
    });

    it('should return a Model', function() {
      var newModelId = 'new-model-id';
      var newModel = prediction.model(newModelId);

      assert(newModel instanceof FakeModel);
      assert.strictEqual(newModel.calledWith_[0], prediction);
      assert.strictEqual(newModel.calledWith_[1], newModelId);
    });
  });
});
