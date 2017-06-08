/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
 * @module spanner/partialResultStream
 */

'use strict';

var checkpointStream = require('checkpoint-stream');
var chunk = require('lodash.chunk');
var eventsIntercept = require('events-intercept');
var is = require('is');
var mergeStream = require('merge-stream');
var split = require('split-array-stream');
var streamEvents = require('stream-events');
var through = require('through2');

/**
 * @type {module:spanner/codec}
 * @private
 */
var codec = require('./codec.js');

/**
 * @type {module:spanner/rowBuilder}
 * @private
 */
var RowBuilder = require('./row-builder.js');

/**
 * Rows returned from queries may be chunked, requiring them to be stitched
 * together. This function returns a stream that will properly assemble these
 * rows, as well as retry after an error. Rows are only emitted if they hit a
 * "checkpoint", which is when a `resumeToken` is returned from the API. Without
 * that token, it's unsafe for the query to be retried, as we wouldn't want to
 * emit the same data multiple times.
 *
 * @private
 *
 * @param {function} requestFn - The function that makes an API request. It will
 *     receive one argument, `resumeToken`, which should be used however is
 *     necessary to send to the API for additional requests.
 */
function partialResultStream(requestFn) {
  var lastResumeToken;
  var activeRequestStream;

  // mergeStream allows multiple streams to be connected into one. This is good
  // if we need to retry a request and pipe more data to the user's stream.
  var requestsStream = mergeStream();
  eventsIntercept.patch(requestsStream);

  function makeRequest() {
    activeRequestStream = requestFn(lastResumeToken);
    requestsStream.add(activeRequestStream);
  }

  var batchAndSplitOnTokenStream = checkpointStream.obj({
    maxQueued: 10,
    isCheckpointFn: function(row) {
      return is.defined(row.resumeToken);
    }
  });

  var rowChunks = [];
  var metadata;

  var userStream = streamEvents(through.obj(function(row, _, next) {
    var formattedRows = [];

    if (row.metadata) {
      metadata = row.metadata;
    }

    if (row.chunkedValue) {
      rowChunks.push(row);
      next();
      return;
    }

    if (is.empty(row.values)) {
      next();
      return;
    }

    if (rowChunks.length > 0) {
      // Done getting all the chunks. Put them together.
      var builder = new RowBuilder(metadata, rowChunks.concat(row));
      formattedRows = formattedRows.concat(builder.toJSON());
      rowChunks.length = 0;
    } else {
      var formattedRow = partialResultStream.formatRow_(metadata, row);
      var multipleRows = is.array(formattedRow[0]);

      if (multipleRows) {
        formattedRows = formattedRows.concat(formattedRow);
      } else {
        formattedRows.push(formattedRow);
      }
    }

    rowChunks = [];

    split(formattedRows, userStream, function() {
      next();
    });
  }));

  userStream.abort = function() {
    if (activeRequestStream) {
      activeRequestStream.abort();
    }
  };

  userStream.once('reading', makeRequest);

  return requestsStream
    .intercept('error', function(err) {
      if (lastResumeToken) {
        // We're going to retry from where we left off.
        // Empty queued rows on the checkpoint stream (will not emit them to
        // user).
        batchAndSplitOnTokenStream.reset();
        makeRequest();
        return;
      }

      setImmediate(function() {
        // We won't retry the request, so this will flush any rows the
        // checkpoint stream has queued. After that, we will destroy the user's
        // stream with the same error.
        batchAndSplitOnTokenStream.destroy(err);
      });
    })
    .pipe(batchAndSplitOnTokenStream)
    .on('error', function(err) {
      // If we get this error, the checkpoint stream has flushed any rows it had
      // queued. We can now destroy the user's stream, as our retry attempts are
      // over.
      userStream.destroy(err);
    })
    .on('checkpoint', function(row) {
      lastResumeToken = row.resumeToken;
    })
    .pipe(userStream);
}

/**
 * Format a PartialResultSet response from the API. A row object will be created
 * to map each field name to its decoded value.
 *
 * If multiple rows exist in a single PartialResultSet, an array is returned.
 *
 * @param {object} row - A `PartialResultSet` object.
 */
partialResultStream.formatRow_ = function(metadata, row) {
  var fields = metadata.rowType.fields;

  if (row.values.length > fields.length) {
    // More than one row exists. Return an array of formatted rows.
    var valueSets = chunk(row.values, fields.length);

    return valueSets.map(function(valueSet) {
      row.values = valueSet;
      return partialResultStream.formatRow_(metadata, row);
    });
  }

  var formattedRow = [];
  var serializedRow = {};

  row.values.forEach(function(value, index) {
    var field = fields[index];

    var column = {
      name: field.name,
      value: codec.decode(value, field)
    };

    formattedRow.push(column);

    if (column.name) {
      serializedRow[column.name] = column.value;
    }
  });

  Object.defineProperty(formattedRow, 'toJSON', {
    enumerable: false,
    value: function() {
      return serializedRow;
    }
  });

  return formattedRow;
};

module.exports = partialResultStream;
