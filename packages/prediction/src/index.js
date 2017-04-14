/*!
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

/*!
 * @module prediction
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var util = require('util');

/**
 * @type {module:prediction/model}
 * @private
 */
var Model = require('./model.js');

/**
 * The [Google Prediction API](https://cloud.google.com/prediction/docs/getting-started)
 * provides pattern-matching and machine learning capabilities. Given a set of
 * data examples to train against, you can create applications that can perform
 * the following tasks:
 *
 *   - Given a user's past viewing habits, predict what other movies or products
 *   a user might like.
 *   - Categorize emails as spam or non-spam.
 *   - Analyze posted comments about your product to determine whether they have
 *   a positive or negative tone.
 *   - Guess how much a user might spend on a given day, given his spending
 *   history.
 *
 * @constructor
 * @alias module:prediction
 *
 * @resource [Hello Prediction! Example]{@link https://cloud.google.com/prediction/docs/hello_world}
 * @resource [What is the Google Prediction API?]{@link https://cloud.google.com/prediction/docs/getting-started}
 * @resource [Developers Guide]{@link https://cloud.google.com/prediction/docs/developer-guide}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function Prediction(options) {
  if (!(this instanceof Prediction)) {
    options = common.util.normalizeArguments(this, options);
    return new Prediction(options);
  }

  var config = {
    baseUrl: 'https://www.googleapis.com./prediction/v1.6',
    scopes: [
      'https://www.googleapis.com/auth/prediction',
      'https://www.googleapis.com/auth/devstorage.read_only'
    ],
    packageJson: require('../package.json')
  };

  common.Service.call(this, config, options);
}

util.inherits(Prediction, common.Service);

/**
 * Create a trained model.
 *
 * You may optionally provide a {module:storage/file} as a data source to train
 * the new model. If you have a CSV file, but haven't put it in a bucket yet,
 * you will need to reference a bucket with {module:storage/bucket}, a file with
 * {module:storage/file}, and upload it with {module:storage/file#upload}.
 *
 * @resource [Trainedmodels: insert API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/insert}
 *
 * @throws {error} If a model ID is not provided.
 *
 * @param {string} id - Unique name for the model. E.g. "my-model"
 * @param {object=} options - See the
 *     [Trainedmodels: insert API Documentation](https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/insert)
 *     request body.
 * @param {module:storage/file} options.data - A CSV file to use as training
 *     data.
 * @param {string} options.type - The type of model, `classification`
 *     (categorical, text labels) or `regression` (numeric labels). Learn more
 *     about these options in the [Developers Guide](https://cloud.google.com/prediction/docs/developer-guide#examples).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:prediction/model} callback.model - A new
 *     {module:prediction/model} object.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * prediction.createModel('my-model', function(err, model, apiResponse) {
 *   // `model` is a Model object.
 * });
 *
 * //-
 * // Create a model, using an existing CSV file in a Cloud Storage
 * // bucket as training data.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var bucket = gcs.bucket('my-bucket');
 * var modelDataCsv = bucket.file('my-model.csv');
 *
 * prediction.createModel('my-model', {
 *   data: modelDataCsv
 * }, function(err, model, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * prediction.createModel('my-model').then(function(data) {
 *   var model = data[0];
 *   var apiResponse = data[1];
 * });
 */
Prediction.prototype.createModel = function(id, options, callback) {
  var self = this;

  if (!id) {
    throw new Error('A model ID is required.');
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var body = extend({}, options, {
    id: id
  });

  if (body.data) {
    var file = body.data;

    body.storageDataLocation = format('{bucket}/{fileName}', {
      bucket: file.parent.name,
      fileName: file.name
    });

    delete body.data;
  }

  if (body.type) {
    body.modelType = body.type.toUpperCase();
    delete body.type;
  }

  this.request({
    method: 'POST',
    uri: '/trainedmodels',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var model = self.model(resp.id);
    model.metadata = resp;

    callback(null, model, resp);
  });
};

/**
 * Gets a list of trained models for the project.
 *
 * @resource [Trainedmodels: list API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/list}
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - Page token.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:prediction/model[]} callback.models - The trained models from
 *     your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * prediction.getModels(function(err, models) {
 *   if (!err) {
 *     // models is an array of Model objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, models, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     prediction.getModels(nextQuery, callback);
 *   }
 *
 *   // The `metadata` property is populated for you with the metadata at the
 *   // time of fetching.
 *   models[0].metadata;
 *
 *   // However, in cases where you are concerned the metadata could have
 *   // changed, use the `getMetadata` method.
 *   models[0].getMetadata(function(err, metadata) {});
 * };
 *
 * prediction.getModels({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * prediction.getModels().then(function(data) {
 *   var models = data[0];
 * });
 */
Prediction.prototype.getModels = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  this.request({
    uri: '/trainedmodels/list',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var models = arrify(resp.items).map(function(model) {
      var modelInstance = self.model(model.id);
      modelInstance.metadata = model;
      return modelInstance;
    });

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    callback(null, models, nextQuery, resp);
  });
};

/**
 * Gets a list of {module:prediction/model} objects for the project as a
 * readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:prediction#getModels} for a complete list of options.
 * @return {stream}
 *
 * @example
 * prediction.getModelsStream()
 *   .on('error', console.error)
 *   .on('data', function(model) {
 *     // model is a Model object.
 *   })
 *   .on('end', function() {
 *     // All models retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * prediction.getModelsStream()
 *   .on('data', function(model) {
 *     this.end();
 *   });
 */
Prediction.prototype.getModelsStream = common.paginator.streamify('getModels');

/**
 * Create a model object representing a trained model.
 *
 * @throws {error} If a model ID is not provided.
 *
 * @param {string} id - The unique ID of the trained model.
 * @return {module:prediction/model}
 *
 * @example
 * var model = prediction.model('my-model');
 */
Prediction.prototype.model = function(id) {
  if (!id) {
    throw new Error('A model ID is required.');
  }

  return new Model(this, id);
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Prediction, 'getModels');

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Prediction, {
  exclude: ['model']
});


Prediction.Model = Model;

module.exports = Prediction;
