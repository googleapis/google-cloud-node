/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 * @module bigquery
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var util = require('util');
var uuid = require('uuid');

/**
 * @type {module:bigquery/dataset}
 * @private
 */
var Dataset = require('./dataset.js');

/**
 * @type {module:bigquery/job}
 * @private
 */
var Job = require('./job.js');

/**
 * @type {module:bigquery/table}
 * @private
 */
var Table = require('./table.js');

/**
 * In the following examples from this page and the other modules (`Dataset`,
 * `Table`, etc.), we are going to be using a dataset from
 * [data.gov](http://goo.gl/f2SXcb) of higher education institutions.
 *
 * We will create a table with the correct schema, import the public CSV file
 * into that table, and query it for data.
 *
 * @alias module:bigquery
 * @constructor
 *
 * @resource [What is BigQuery?]{@link https://cloud.google.com/bigquery/what-is-bigquery}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function BigQuery(options) {
  if (!(this instanceof BigQuery)) {
    options = common.util.normalizeArguments(this, options);
    return new BigQuery(options);
  }

  var config = {
    baseUrl: 'https://www.googleapis.com/bigquery/v2',
    scopes: ['https://www.googleapis.com/auth/bigquery'],
    packageJson: require('../package.json')
  };

  common.Service.call(this, config, options);
}

util.inherits(BigQuery, common.Service);

/**
 * Merge a rowset returned from the API with a table schema.
 *
 * @private
 *
 * @param {object} schema
 * @param {array} rows
 * @return {array} Fields using their matching names from the table's schema.
 */
BigQuery.mergeSchemaWithRows_ =
BigQuery.prototype.mergeSchemaWithRows_ = function(schema, rows) {
  return arrify(rows).map(mergeSchema).map(flattenRows);

  function mergeSchema(row) {
    return row.f.map(function(field, index) {
      var schemaField = schema.fields[index];
      var value = field.v;

      if (schemaField.mode === 'REPEATED') {
        value = value.map(function(val) {
          return convert(schemaField, val.v);
        });
      } else {
        value = convert(schemaField, value);
      }

      var fieldObject = {};
      fieldObject[schemaField.name] = value;
      return fieldObject;
    });
  }

  function convert(schemaField, value) {
    if (is.nil(value)) {
      return value;
    }

    switch (schemaField.type) {
      case 'BOOLEAN': {
        value = value === 'true';
        break;
      }
      case 'BYTES': {
        value = new Buffer(value, 'base64');
        break;
      }
      case 'FLOAT': {
        value = parseFloat(value);
        break;
      }
      case 'INTEGER': {
        value = parseInt(value, 10);
        break;
      }
      case 'RECORD': {
        value = BigQuery.mergeSchemaWithRows_(schemaField, value).pop();
        break;
      }
      case 'DATE': {
        value = BigQuery.date(value);
        break;
      }
      case 'DATETIME': {
        value = BigQuery.datetime(value);
        break;
      }
      case 'TIME': {
        value = BigQuery.time(value);
        break;
      }
      case 'TIMESTAMP': {
        value = BigQuery.timestamp(new Date(value * 1000));
        break;
      }
    }

    return value;
  }

  function flattenRows(rows) {
    return rows.reduce(function(acc, row) {
      var key = Object.keys(row)[0];
      acc[key] = row[key];
      return acc;
    }, {});
  }
};

/**
 * The `DATE` type represents a logical calendar date, independent of time zone.
 * It does not represent a specific 24-hour time period. Rather, a given DATE
 * value represents a different 24-hour period when interpreted in different
 * time zones, and may represent a shorter or longer day during Daylight Savings
 * Time transitions.
 *
 * @param {object|string} value - The date. If a string, this should be in the
 *     format the API describes: `YYYY-[M]M-[D]D`.
 *     Otherwise, provide an object.
 * @param {string|number} value.year - Four digits.
 * @param {string|number} value.month - One or two digits.
 * @param {string|number} value.day - One or two digits.
 *
 * @example
 * var date = bigquery.date('2017-01-01');
 *
 * //-
 * // Alternatively, provide an object.
 * //-
 * var date = bigquery.date({
 *   year: 2017,
 *   month: 1,
 *   day: 1
 * });
 */
BigQuery.date =
BigQuery.prototype.date = function(value) {
  if (!(this instanceof BigQuery.date)) {
    return new BigQuery.date(value);
  }

  if (is.object(value)) {
    value = BigQuery.datetime(value).value;
  }

  this.value = value;
};

/**
 * A `DATETIME` data type represents a point in time. Unlike a `TIMESTAMP`,
 * this does not refer to an absolute instance in time. Instead, it is the civil
 * time, or the time that a user would see on a watch or calendar.
 *
 * @param {object|string} value - The time. If a string, this should be in the
 *     format the API describes: `YYYY-[M]M-[D]D[ [H]H:[M]M:[S]S[.DDDDDD]]`.
 *     Otherwise, provide an object.
 * @param {string|number} value.year - Four digits.
 * @param {string|number} value.month - One or two digits.
 * @param {string|number} value.day - One or two digits.
 * @param {string=|number=} value.hours - One or two digits (`00` - `23`).
 * @param {string=|number=} value.minutes - One or two digits (`00` - `59`).
 * @param {string=|number=} value.seconds - One or two digits (`00` - `59`).
 * @param {string=|number=} value.fractional - Up to six digits for microsecond
 *     precision.
 *
 * @example
 * var datetime = bigquery.datetime('2017-01-01 13:00:00');
 *
 * //-
 * // Alternatively, provide an object.
 * //-
 * var datetime = bigquery.datetime({
 *   year: 2017,
 *   month: 1,
 *   day: 1,
 *   hours: 14,
 *   minutes: 0,
 *   seconds: 0
 * });
 */
BigQuery.datetime =
BigQuery.prototype.datetime = function(value) {
  if (!(this instanceof BigQuery.datetime)) {
    return new BigQuery.datetime(value);
  }

  if (is.object(value)) {
    var time;

    if (value.hours) {
      time = BigQuery.time(value).value;
    }

    value = format('{y}-{m}-{d}{time}', {
      y: value.year,
      m: value.month,
      d: value.day,
      time: time ? ' ' + time : ''
    });
  } else {
    value = value.replace(/^(.*)T(.*)Z$/, '$1 $2');
  }

  this.value = value;
};

/**
 * A `TIME` data type represents a time, independent of a specific date.
 *
 * @param {object|string} value - The time. If a string, this should be in the
 *     format the API describes: `[H]H:[M]M:[S]S[.DDDDDD]`. Otherwise, provide
 *     an object.
 * @param {string=|number=} value.hours - One or two digits (`00` - `23`).
 * @param {string=|number=} value.minutes - One or two digits (`00` - `59`).
 * @param {string=|number=} value.seconds - One or two digits (`00` - `59`).
 * @param {string=|number=} value.fractional - Up to six digits for microsecond
 *     precision.
 *
 * @example
 * var time = bigquery.time('14:00:00'); // 2:00 PM
 *
 * //-
 * // Alternatively, provide an object.
 * //-
 * var time = bigquery.time({
 *   hours: 14,
 *   minutes: 0,
 *   seconds: 0
 * });
 */
BigQuery.time =
BigQuery.prototype.time = function(value) {
  if (!(this instanceof BigQuery.time)) {
    return new BigQuery.time(value);
  }

  if (is.object(value)) {
    value = format('{h}:{m}:{s}{f}', {
      h: value.hours,
      m: value.minutes || 0,
      s: value.seconds || 0,
      f: is.defined(value.fractional) ? '.' + value.fractional : ''
    });
  }

  this.value = value;
};

/**
 * A timestamp represents an absolute point in time, independent of any time
 * zone or convention such as Daylight Savings Time.
 *
 * @param {date} value - The time.
 *
 * @example
 * var timestamp = bigquery.timestamp(new Date());
 */
BigQuery.timestamp =
BigQuery.prototype.timestamp = function(value) {
  if (!(this instanceof BigQuery.timestamp)) {
    return new BigQuery.timestamp(value);
  }

  value = new Date(value);
  value = value.toJSON().replace(/^(.*)T(.*)Z$/, '$1 $2');

  this.value = value;
};

/**
 * Detect a value's type.
 *
 * @private
 *
 * @throws {error} If the type could not be detected.
 *
 * @resource [Data Type]{@link https://cloud.google.com/bigquery/data-types}
 *
 * @param {*} value - The value.
 * @return {string} - The type detected from the value.
 */
BigQuery.getType_ = function(value) {
  var typeName;

  if (value instanceof BigQuery.date) {
    typeName = 'DATE';
  } else if (value instanceof BigQuery.datetime) {
    typeName = 'DATETIME';
  } else if (value instanceof BigQuery.time) {
    typeName = 'TIME';
  } else if (value instanceof BigQuery.timestamp) {
    typeName = 'TIMESTAMP';
  } else if (value instanceof Buffer) {
    typeName = 'BYTES';
  } else if (is.array(value)) {
    return {
      type: 'ARRAY',
      arrayType: BigQuery.getType_(value[0])
    };
  } else if (is.bool(value)) {
    typeName = 'BOOL';
  } else if (is.number(value)) {
    typeName = value % 1 === 0 ? 'INT64' : 'FLOAT64';
  } else if (is.object(value)) {
    return {
      type: 'STRUCT',
      structTypes: Object.keys(value).map(function(prop) {
        return {
          name: prop,
          type: BigQuery.getType_(value[prop])
        };
      })
    };
  } else if (is.string(value)) {
    typeName = 'STRING';
  }

  if (!typeName) {
    throw new Error([
      'This value could not be translated to a BigQuery data type.',
      value
    ].join('\n'));
  }

  return {
    type: typeName
  };
};

/**
 * Convert a value into a `queryParameter` object.
 *
 * @private
 *
 * @resource [Jobs.query API Reference Docs (see `queryParameters`)]{@link https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#request-body}
 *
 * @param {*} value - The value.
 * @return {object} - A properly-formed `queryParameter` object.
 */
BigQuery.valueToQueryParameter_ = function(value) {
  if (is.date(value)) {
    value = BigQuery.timestamp(value);
  }

  var queryParameter = {
    parameterType: BigQuery.getType_(value),
    parameterValue: {}
  };

  var typeName = queryParameter.parameterType.type;

  if (typeName.indexOf('TIME') > -1 || typeName.indexOf('DATE') > -1) {
    value = value.value;
  }

  if (typeName === 'ARRAY') {
    queryParameter.parameterValue.arrayValues = value.map(function(value) {
      return {
        value: value
      };
    });
  } else if (typeName === 'STRUCT') {
    queryParameter.parameterValue.structValues = Object.keys(value)
      .reduce(function(structValues, prop) {
        var nestedQueryParameter = BigQuery.valueToQueryParameter_(value[prop]);
        structValues[prop] = nestedQueryParameter.parameterValue;
        return structValues;
      }, {});
  } else {
    queryParameter.parameterValue.value = value;
  }

  return queryParameter;
};

/**
 * Create a dataset.
 *
 * @resource [Datasets: insert API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/datasets/insert}
 *
 * @param {string} id - ID of the dataset to create.
 * @param {object=} options - See a
 *     [Dataset resource](https://cloud.google.com/bigquery/docs/reference/v2/datasets#resource).
 * @param {function} callback  - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:bigquery/dataset} callback.dataset - The newly created dataset
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * bigquery.createDataset('my-dataset', function(err, dataset, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bigquery.createDataset('my-dataset').then(function(data) {
 *   var dataset = data[0];
 *   var apiResponse = data[1];
 * });
 */
BigQuery.prototype.createDataset = function(id, options, callback) {
  var that = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request({
    method: 'POST',
    uri: '/datasets',
    json: extend(true, {}, options, {
      datasetReference: {
        datasetId: id
      }
    })
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var dataset = that.dataset(id);
    dataset.metadata = resp;

    callback(null, dataset, resp);
  });
};

/**
 * Run a query scoped to your project as a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:bigquery#query} for a complete list of options.
 * @return {stream}
 *
 * @example
 * var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';
 *
 * bigquery.createQueryStream(query)
 *   .on('error', console.error)
 *   .on('data', function(row) {
 *     // row is a result from your query.
 *   })
 *   .on('end', function() {
 *     // All rows retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * bigquery.createQueryStream(query)
 *   .on('data', function(row) {
 *     this.end();
 *   });
 */
BigQuery.prototype.createQueryStream = common.paginator.streamify('query');

/**
 *
 */
BigQuery.prototype.createJob = function(options, callback) {
  var self = this;

  var reqOpts = extend({}, options);
  var jobId = uuid.v4();

  if (reqOpts.jobPrefix) {
    jobId = reqOpts.jobPrefix + jobId;
    delete reqOpts.jobPrefix;
  }

  reqOpts.jobReference = {
    projectId: this.projectId,
    jobId: jobId
  };

  this.request({
    method: 'POST',
    uri: '/jobs',
    json: reqOpts
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var job = self.job(jobId);
    job.metadata = resp;

    callback(null, job, resp);
  });
};

/**
 * Create a reference to a dataset.
 *
 * @param {string} id - ID of the dataset.
 * @return {module:bigquery/dataset}
 *
 * @example
 * var dataset = bigquery.dataset('higher_education');
 */
BigQuery.prototype.dataset = function(id) {
  return new Dataset(this, id);
};

/**
 * List all or some of the datasets in your project.
 *
 * @resource [Datasets: list API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/datasets/list}
 *
 * @param {object=} query - Configuration object.
 * @param {boolean} query.all - List all datasets, including hidden ones.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:bigquery/dataset[]} callback.datasets - The list of datasets
 *     in your project.
 *
 * @example
 * bigquery.getDatasets(function(err, datasets) {
 *   if (!err) {
 *     // datasets is an array of Dataset objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function manualPaginationCallback(err, datasets, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     bigquery.getDatasets(nextQuery, manualPaginationCallback);
 *   }
 * }
 *
 * bigquery.getDatasets({
 *   autoPaginate: false
 * }, manualPaginationCallback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bigquery.getDatasets().then(function(datasets) {});
 */
BigQuery.prototype.getDatasets = function(query, callback) {
  var that = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  query = query || {};

  this.request({
    uri: '/datasets',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    var datasets = (resp.datasets || []).map(function(dataset) {
      var ds = that.dataset(dataset.datasetReference.datasetId);
      ds.metadata = dataset;
      return ds;
    });

    callback(null, datasets, nextQuery, resp);
  });
};

/**
 * List all or some of the {module:bigquery/dataset} objects in your project as
 * a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:bigquery#getDatasets} for a complete list of options.
 * @return {stream}
 *
 * @example
 * bigquery.getDatasetsStream()
 *   .on('error', console.error)
 *   .on('data', function(dataset) {
 *     // dataset is a Dataset object.
 *   })
 *   .on('end', function() {
 *     // All datasets retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * bigquery.getDatasetsStream()
 *   .on('data', function(dataset) {
 *     this.end();
 *   });
 */
BigQuery.prototype.getDatasetsStream =
  common.paginator.streamify('getDatasets');

/**
 * Get all of the jobs from your project.
 *
 * @resource [Jobs: list API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/list}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean=} options.allUsers - Display jobs owned by all users in the
 *     project.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number=} options.maxResults - Maximum number of results to return.
 * @param {string=} options.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {string=} options.projection - Restrict information returned to a set
 *     of selected fields. Acceptable values are "full", for all job data, and
 *     "minimal", to not include the job configuration.
 * @param {string=} options.stateFilter - Filter for job state. Acceptable
 *     values are "done", "pending", and "running". Sending an array to this
 *     option performs a disjunction.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:bigquery/job[]} callback.jobs - The list of jobs in your
 *     project.
 *
 * @example
 * bigquery.getJobs(function(err, jobs) {
 *   if (!err) {
 *     // jobs is an array of Job objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function manualPaginationCallback(err, jobs, nextQuery, apiRespose) {
 *   if (nextQuery) {
 *     // More results exist.
 *     bigquery.getJobs(nextQuery, manualPaginationCallback);
 *   }
 * }
 *
 * bigquery.getJobs({
 *   autoPaginate: false
 * }, manualPaginationCallback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bigquery.getJobs().then(function(data) {
 *   var jobs = data[0];
 * });
 */
BigQuery.prototype.getJobs = function(options, callback) {
  var that = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/jobs',
    qs: options,
    useQuerystring: true
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var jobs = (resp.jobs || []).map(function(jobObject) {
      var job = that.job(jobObject.id);
      job.metadata = jobObject;
      return job;
    });

    callback(null, jobs, nextQuery, resp);
  });
};

/**
 * List all or some of the {module:bigquery/job} objects in your project as a
 * readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:bigquery#getJobs} for a complete list of options.
 * @return {stream}
 *
 * @example
 * bigquery.getJobsStream()
 *   .on('error', console.error)
 *   .on('data', function(job) {
 *     // job is a Job object.
 *   })
 *   .on('end', function() {
 *     // All jobs retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * bigquery.getJobsStream()
 *   .on('data', function(job) {
 *     this.end();
 *   });
 */
BigQuery.prototype.getJobsStream = common.paginator.streamify('getJobs');

/**
 * Create a reference to an existing job.
 *
 * @param {string} id - ID of the job.
 * @return {module:bigquery/job}
 *
 * @example
 * var myExistingJob = bigquery.job('job-id');
 */
BigQuery.prototype.job = function(id) {
  return new Job(this, id);
};

/**
 * Run a query scoped to your project.
 *
 * @resource [Jobs: query API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/query}
 *
 * @param {string|object} options - A string SQL query or configuration object.
 *     For all available options, see
 *     [Jobs: query request body](https://cloud.google.com/bigquery/docs/reference/v2/jobs/query#request-body).
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to read.
 * @param {object|*[]} options.params - For positional SQL parameters, provide
 *     an array of values. For named SQL parameters, provide an object which
 *     maps each named parameter to its value. The supported types are integers,
 *     floats, {module:bigquery#date} objects, {module:bigquery#datetime}
 *     objects, {module:bigquery#time} objects, {module:bigquery#timestamp}
 *     objects, Strings, Booleans, and Objects.
 * @param {string} options.query - A query string, following the BigQuery query
 *     syntax, of the query to execute.
 * @param {number} options.timeoutMs - How long to wait for the query to
 *     complete, in milliseconds, before returning. Default is to return
 *     immediately. If the timeout passes before the job completes, the request
 *     will fail with a `TIMEOUT` error.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {array} callback.rows - The list of results from your query.
 *
 * @example
 * var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';
 *
 * bigquery.query(query, function(err, rows) {
 *   if (!err) {
 *     // rows is an array of results.
 *   }
 * });
 *
 * //-
 * // Positional SQL parameters are supported.
 * //-
 * bigquery.query({
 *   query: [
 *     'SELECT url',
 *     'FROM `publicdata.samples.github_nested`',
 *     'WHERE repository.owner = ?'
 *   ].join(' '),
 *
 *   params: [
 *     'google'
 *   ]
 * }, function(err, rows) {});
 *
 * //-
 * // Or if you prefer to name them, that's also supported.
 * //-
 * bigquery.query({
 *   query: [
 *     'SELECT url',
 *     'FROM `publicdata.samples.github_nested`',
 *     'WHERE repository.owner = @owner'
 *   ].join(' '),

 *   params: {
 *     owner: 'google'
 *   }
 * }, function(err, rows) {});
 *
 * //-
 * // If you need to use a `DATE`, `DATETIME`, `TIME`, or `TIMESTAMP` type in
 * // your query, see {module:bigquery#date}, {module:bigquery#datetime},
 * // {module:bigquery#time}, and {module:bigquery#timestamp}.
 * //-
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function manualPaginationCallback(err, rows, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     bigquery.query(nextQuery, manualPaginationCallback);
 *   }
 * }
 *
 * bigquery.query({
 *   query: query,
 *   autoPaginate: false
 * }, manualPaginationCallback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bigquery.query(query).then(function(data) {
 *   var rows = data[0];
 * });
 */
BigQuery.prototype.query = function(query, options, callback) {
  if (is.string(query)) {
    query = {
      query: query
    };
  }

  if (is.fn(options)) {
    callback = options;
    options = null;
  }

  var reqOpts = extend({}, query);

  if (query.params) {
    reqOpts.useLegacySql = false;
    reqOpts.parameterMode = is.array(query.params) ? 'positional' : 'named';

    if (reqOpts.parameterMode === 'named') {
      reqOpts.queryParameters = [];

      for (var namedParamater in query.params) {
        var value = query.params[namedParamater];
        var queryParameter = BigQuery.valueToQueryParameter_(value);
        queryParameter.name = namedParamater;
        reqOpts.queryParameters.push(queryParameter);
      }
    } else {
      reqOpts.queryParameters = query.params
        .map(BigQuery.valueToQueryParameter_);
    }

    delete reqOpts.params;
  }

  this.startQuery(reqOpts, function(err, job) {
    if (err) {
      callback(err, null);
      return;
    }

    job.getQueryResults(options, callback);
  });
};

/**
 * Run a query as a job. No results are immediately returned. Instead, your
 * callback will be executed with a {module:bigquery/job} object that you must
 * ping for the results. See the Job documentation for explanations of how to
 * check on the status of the job.
 *
 * @resource [Jobs: insert API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert}
 *
 * @param {object|string} options - The configuration object. This must be in
 *     the format of the [`configuration.query`](http://goo.gl/wRpHvR) property
 *     of a Jobs resource. If a string is provided, this is used as the query
 *     string, and all other options are defaulted.
 * @param {module:bigquery/table=} options.destination - The table to save the
 *     query's results to. If omitted, a new table will be created.
 * @param {string} options.query - A query string, following the BigQuery query
 *     syntax, of the query to execute.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigquery/job} callback.job - The newly created job for your
       query.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @throws {Error} If a query is not specified.
 * @throws {Error} If a Table is not provided as a destination.
 *
 * @example
 * var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';
 *
 * //-
 * // You may pass only a query string, having a new table created to store the
 * // results of the query.
 * //-
 * bigquery.startQuery(query, function(err, job) {});
 *
 * //-
 * // You can also control the destination table by providing a
 * // {module:bigquery/table} object.
 * //-
 * bigquery.startQuery({
 *   destination: bigquery.dataset('higher_education').table('institutions'),
 *   query: query
 * }, function(err, job) {});
 *
 * //-
 * // After you have run `startQuery`, your query will execute in a job. Your
 * // callback is executed with a {module:bigquery/job} object so that you may
 * // check for the results.
 * //-
 * bigquery.startQuery(query, function(err, job) {
 *   if (!err) {
 *     job.getQueryResults(function(err, rows, apiResponse) {});
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bigquery.startQuery(query).then(function(data) {
 *   var job = data[0];
 *   var apiResponse = data[1];
 *
 *   return job.getQueryResults();
 * });
 */
BigQuery.prototype.startQuery = function(options, callback) {
  if (is.string(options)) {
    options = {
      query: options
    };
  }

  if (!options.query) {
    throw new Error('A SQL query string is required.');
  }

  var query = extend(true, {}, options);

  if (options.destination) {
    if (!(options.destination instanceof Table)) {
      throw new Error('Destination must be a Table object.');
    }

    query.destinationTable = {
      datasetId: options.destination.dataset.id,
      projectId: options.destination.dataset.bigQuery.projectId,
      tableId: options.destination.id
    };

    delete query.destination;
  }

  var reqOpts = {
    configuration: {
      query: query
    }
  };

  if (query.jobPrefix) {
    reqOpts.jobPrefix = query.jobPrefix;
    delete query.jobPrefix;
  }

  this.createJob(reqOpts, callback);
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(BigQuery, ['getDatasets', 'getJobs']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(BigQuery, {
  exclude: [
    'dataset',
    'date',
    'datetime',
    'job',
    'time',
    'timestamp'
  ]
});

BigQuery.Dataset = Dataset;
BigQuery.Job = Job;
BigQuery.Table = Table;

module.exports = BigQuery;
