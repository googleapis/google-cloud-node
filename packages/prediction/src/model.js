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
 * @module prediction/model
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var JSONStream = require('JSONStream');
var pumpify = require('pumpify');
var streamEvents = require('stream-events');
var through = require('through2');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:prediction} prediction - Prediction this model belongs to.
 * @param {string} id - The ID of the model.
 */
/**
 * A Model object represents a trained model. You can train it by using
 * {module:prediction/model#train} or ask for predictions with
 * {module:prediction/model#query}.
 *
 * @resource [Developer's Guide: Training Your Model]{@link https://cloud.google.com/prediction/docs/developer-guide#trainingtheapi}
 * @resource [Model Resource]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels}
 *
 * @constructor
 * @alias module:compute/address
 *
 * @example
 * var model = prediction.model('my-model');
 */
function Model(prediction, id) {
  var methods = {
    /**
     * Create a trained model.
     *
     * @param {object=} options - See {module:prediction#createModel}.
     *
     * @example
     * model.create(function(err, model, apiResponse) {
     *   if (!err) {
     *     // The model was created successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * model.create().then(function(data) {
     *   var model = data[0];
     *   var apiResponse = data[1];
     * });
     */
    create: true,

    /**
     * Delete the model.
     *
     * @resource [Trainedmodels: delete API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/delete}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * model.delete(function(err, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * model.delete().then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    delete: true,

    /**
     * Check if the model exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the model exists or not.
     *
     * @example
     * model.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * model.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a model if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * model.get(function(err, model, apiResponse) {
     *   // `model.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * model.get().then(function(data) {
     *   var model = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata for the model.
     *
     * @resource [Trainedmodels: get API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/get}
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An API error.
     * @param {?object} callback.metadata - Metadata of the model from the API.
     * @param {object} callback.apiResponse - Raw API response.
     *
     * @example
     * model.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * model.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true,

    /**
     * Sets the metadata of the Model object.
     *
     * NOTE: What you probably want is {module:prediction/model#train}, which
     * wraps this method.
     *
     * @resource [Trainedmodels: update API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/update}
     *
     * @param {object} metadata - Metadata to save on the Model.
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * var metadata = {
     *   output: 'english',
     *   csvInstance: [
     *     'Hello, this is an English sentence!'
     *   ]
     * };
     *
     * model.setMetadata(metadata, function(err, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * model.setMetadata(metadata).then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    setMetadata: {
      reqOpts: {
        method: 'PUT'
      }
    }
  };

  common.ServiceObject.call(this, {
    parent: prediction,
    baseUrl: '/trainedmodels',
    id: id,
    createMethod: prediction.createModel.bind(prediction),
    methods: methods
  });
}

util.inherits(Model, common.ServiceObject);

/**
 * Get an analysis of the model and the data it was trained on.
 *
 * @resource [Trainedmodels: analyze API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/analyze}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?object} callback.analysis - The results of the analysis. See a
 *     [Trainedmodels: analyze response object](https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/analyze#response).
 * @param {object} callback.analysis.data - Analysis of the data stored in this
 *     model.
 * @param {object} callback.analysis.model - Analysis of the model.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * model.analyze(function(err, analysis, apiResponse) {
 *   if (!err) {
 *     // `analysis.data` == {...}
 *     // `analysis.model` == {...}
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * model.analyze().then(function(data) {
 *   var analysis = data[0];
 *   var apiResponse = data[1];
 * });
 */
Model.prototype.analyze = function(callback) {
  this.request({
    uri: '/analyze'
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var analysis = {
      data: resp.dataDescription || {},
      model: resp.modelDescription || {}
    };

    callback(null, analysis, resp);
  });
};

/**
 * Create a writable stream to train the model with new data.
 *
 * This is a wrapper around {module:prediction/model#train}.
 *
 * @param {string|number} label - The output value, either a regression or class
 *     label.
 * @return {WritableStream}
 *
 * @example
 * var stream = model.createWriteStream('english');
 *
 * stream
 *   .on('error', function(err) {
 *     // Uh oh, an error occurred!
 *   })
 *   .on('finish', function() {
 *     // The model will now be processing the new data.
 *   });
 *
 * stream.write('Hello, this is an English sentence!');
 * stream.write('...yeah, I assumed that when I was able to read it.');
 * stream.end();
 */
Model.prototype.createWriteStream = function(label) {
  var self = this;
  var writeStream = streamEvents(pumpify());

  writeStream.once('writing', function() {
    var template = JSON.stringify({
      output: label,
      csvInstance: [[]]
    }).split('[]');

    var requestStream = self.requestStream({
      method: 'PUT',
      uri: '',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      }
    });

    requestStream
      .on('response', function(resp) {
        writeStream.emit('response', resp);
      })
      .on('prefinish', function() {
        writeStream.cork();
      })
      .on('complete', function(resp) {
        common.util.handleResp(null, resp, resp.body, function(err) {
          if (err) {
            writeStream.destroy(err);
            return;
          }

          writeStream.uncork();
        });
      });

    writeStream.setPipeline([
      through({ encoding: 'utf-8' }),
      JSONStream.stringify(template[0], ',', template[1]),
      requestStream
    ]);
  });

  return writeStream;
};

/**
 * Query the stored data in your model.
 *
 * @resource [Trainedmodels:predict API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/predict}
 *
 * @param {string|string[]} input - Input feature(s) to query on the model.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?object} callback.results - An organized set of results from the
 *     prediction.
 * @param {string} callback.results.winner - The matching result's label.
 * @param {?object[]} callback.results.scores - Sorted from highest-to-lowest,
 *     all of the results that matched the query. This will not be present if
 *         querying a regression model.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * //-
 * // Assuming this is a model used to return a language name that matches any
 * // given input, this will ask for the prediction results of an english
 * // sentence.
 * //-
 * model.query('Hello', function(err, results) {
 *   if (!err) {
 *     // `results.winner` == 'english'
 *     // `results.scores` == [
 *     //   {
 *     //     label: 'english',
 *     //     score: 1
 *     //   },
 *     //   ...other results and their scores are listed here.
 *     // ]
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * model.query('Hello').then(function(data) {
 *   var results = data[0];
 *   var apiResponse = data[1];
 * });
 */
Model.prototype.query = function(input, callback) {
  this.request({
    method: 'POST',
    uri: '/predict',
    json: {
      input: {
        csvInstance: arrify(input)
      }
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var results = {
      winner: resp.outputLabel || resp.outputValue,
    };

    if (resp.outputMulti) {
      results.scores = resp.outputMulti
        .sort(function(a, b) {
          return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
        })
        .map(function(scoreObject) {
          scoreObject.score = parseFloat(scoreObject.score);
          return scoreObject;
        });
    }

    callback(null, results, resp);
  });
};

/**
 * Update the stored data with new input.
 *
 * @resource [Trainedmodels: update API Documentation]{@link https://cloud.google.com/prediction/docs/reference/v1.6/trainedmodels/update}
 *
 * @param {string|number} label - The output value, either a regression or class
 *     label.
 * @param {string|string[]} input - The input features for this data entry.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * model.train('english', 'Hello from Stephen!', function(err, apiResponse) {
 *   if (!err) {
 *     // New data was inserted successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * model.train('english', 'Hello from Stephen!').then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Model.prototype.train = function(label, input, callback) {
  this.setMetadata({
    output: label,
    csvInstance: arrify(input)
  }, callback);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Model);

module.exports = Model;
