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
var mockery = require('mockery-next');
var nodeutil = require('util');
var Promise = require('bluebird');

var Service = require('../../lib/common/service.js');
var util = require('../../lib/common/util.js');

var fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: util.noop
});

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Prediction') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.equal(Class.name, 'Prediction');
    assert.deepEqual(methods, ['getModels']);
  }
};

function FakeModel() {
  this.calledWith_ = arguments;
}

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

describe('Prediction', function() {
  var Prediction;
  var prediction;

  var PROJECT_ID = 'project-id';

  before(function() {
    mockery.registerMock('../../lib/common/service.js', FakeService);
    mockery.registerMock('../../lib/common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('../../lib/common/util.js', fakeUtil);
    mockery.registerMock('../../lib/prediction/model.js', FakeModel);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Prediction = require('../../lib/prediction/index.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    prediction = new Prediction({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
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
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/prediction',
        'https://www.googleapis.com/auth/devstorage.read_only'
      ]);
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
      }, /A model ID is required/);
    });

    it('should make the correct API request', function() {
      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/trainedmodels');

        var expectedBody = extend({}, OPTIONS, {
          id: ID
        });
        assert.deepEqual(reqOpts.json, expectedBody);

        return Promise.resolve(reqOpts.json);
      };

      return prediction.createModel(ID, OPTIONS);
    });

    it('should make the correct API request (callback)', function(done) {
      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/trainedmodels');

        var expectedBody = extend({}, OPTIONS, {
          id: ID
        });
        assert.deepEqual(reqOpts.json, expectedBody);

        return Promise.resolve(reqOpts.json);
      };

      prediction.createModel(ID, OPTIONS, function (err, model, resp) {
        if (err) {
          assert.ifError(err);
        }
        assert.ok(model);
        assert.ok(resp);
        done();
      });
    });

    it('should not require any options', function() {
      prediction.request = function () {
        return Promise.resolve({ id: ID });
      };
      return prediction.createModel(ID);
    });

    it('should not require any options (callback)', function(done) {
      assert.doesNotThrow(function() {
        prediction.request = function () {
          return Promise.resolve({ id: ID });
        };
        prediction.createModel(ID, done);
      });
    });

    it('should accept a File for input data source', function() {
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
        return Promise.resolve(reqOpts.json);
      };

      return prediction.createModel(ID, {
        data: file
      });
    });

    it('should accept a File for input data source (callback)', function(done) {
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
        return Promise.resolve(reqOpts.json);
      };

      prediction.createModel(ID, {
        data: file
      }, done);
    });

    it('should accept a model type', function() {
      var type = 'classification';

      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.json.modelType, type.toUpperCase());
        assert.strictEqual(reqOpts.json.type, undefined);
        return Promise.resolve(reqOpts.json);
      };

      return prediction.createModel(ID, {
        type: type
      });
    });

    it('should accept a model type (callback)', function(done) {
      var type = 'classification';

      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.json.modelType, type.toUpperCase());
        assert.strictEqual(reqOpts.json.type, undefined);
        return Promise.resolve(reqOpts.json);
      };

      prediction.createModel(ID, {
        type: type
      }, done);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};
      error.response = apiResponse;

      beforeEach(function() {
        prediction.request = function() {
          return Promise.reject(error);
        };
      });

      it('should execute callback with error and API response', function() {
        return prediction.createModel(ID, OPTIONS).then(function () {
          throw new Error('should have failed!');
        }, function(err) {
          assert.strictEqual(err, error);
          assert.strictEqual(err.response, apiResponse);
        });
      });

      it('should execute callback with error and API response (callback)', function(done) {
        prediction.createModel(ID, OPTIONS, function(err) {
          assert.strictEqual(err, error);
          assert.strictEqual(err.response, apiResponse);
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
          return Promise.resolve(apiResponse);
        };

        prediction.model = function() {
          return model;
        };
      });

      it('should create a model from the response', function() {
        prediction.model = function(id) {
          assert.strictEqual(id, apiResponse.id);
          return model;
        };

        return prediction.createModel(ID, OPTIONS);
      });

      it('should create a model from the response (callback)', function(done) {
        prediction.model = function(id) {
          assert.strictEqual(id, apiResponse.id);
          return model;
        };

        prediction.createModel(ID, OPTIONS, done);
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
    it('should make the correct request', function() {
      var query = {};

      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/trainedmodels/list');
        assert.strictEqual(reqOpts.qs, query);

        return Promise.resolve({ items: [] });
      };

      return prediction.getModels(query);
    });

    it('should make the correct request (callback)', function(done) {
      var query = {};

      prediction.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/trainedmodels/list');
        assert.strictEqual(reqOpts.qs, query);

        return Promise.resolve({ items: [] });
      };

      prediction.getModels(query, done);
    });

    it('should use an empty query if one was not provided', function() {
      prediction.request = function(reqOpts) {
        assert.equal(Object.keys(reqOpts.qs).length, 0);
        return Promise.resolve({ items: [] });
      };

      return prediction.getModels();
    });

    it('should use an empty query if one was not provided (callback)', function(done) {
      prediction.request = function(reqOpts) {
        assert.equal(Object.keys(reqOpts.qs).length, 0);
        return Promise.resolve({ items: [] });
      };

      prediction.getModels(done);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};
      error.response = apiResponse;

      beforeEach(function() {
        prediction.request = function() {
          return Promise.reject(error);
        };
      });

      it('should execute callback with error and API response', function() {
        return prediction.getModels({}).then(function () {
          throw new Error('should have failed!');
        }, function(err) {
          assert.strictEqual(err, error);
          assert.strictEqual(err.response, apiResponse);
        });
      });

      it('should execute callback with error and API response (callback)', function(done) {
        prediction.getModels({}, function(err) {
          assert.strictEqual(err, error);
          assert.strictEqual(err.response, apiResponse);

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
          return Promise.resolve(apiResponse);
        };

        prediction.model = function() {
          return MODEL;
        };
      });

      it('should create Models from the response', function() {
        prediction.model = function(id) {
          assert.strictEqual(id, MODEL.id);
          return MODEL;
        };

        return prediction.getModels({});
      });

      it('should create Models from the response (callback)', function(done) {
        prediction.model = function(id) {
          assert.strictEqual(id, MODEL.id);
          setImmediate(done);
          return MODEL;
        };

        prediction.getModels({}, assert.ifError);
      });

      it('should set a nextQuery if necessary', function() {
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        prediction.request = function(reqOpts, callback) {
          return Promise.resolve(apiResponseWithNextPageToken);
        };

        return prediction.getModels(query).spread(function(models, nextQuery) {
          // Check the original query wasn't modified.
          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));
        });
      });

      it('should set a nextQuery if necessary (callback)', function(done) {
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        prediction.request = function(reqOpts, callback) {
          return Promise.resolve(apiResponseWithNextPageToken);
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
      }, /A model ID is required/);
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
