/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

const async = require('async');
const fs = require('fs');
const BigQuery = require('../src/index.js');
const env = require('../../../system-test/env.js');

if (process.argv.length < 3) {
  throw new Error(`need query file; ` +
    `usage: '${process.argv[0]} ${process.argv[1]} <queries.json>'`);
}

var queryJson = fs.readFileSync(process.argv[2]);
var queries = JSON.parse(queryJson);
var client = new BigQuery(env);

var doQuery = function(queryTxt, callback) {
  var startMilli = new Date().getTime();
  var numRows = 0;
  var numCols;
  var timeFirstByteMilli;

  var query = {
    query: queryTxt,
    useLegacySql: false
  };

  client
    .createQueryStream(query)
    .on('error', callback)
    .on('data', function(row) {
      if (numRows === 0) {
        numCols = Object.keys(row).length;
        timeFirstByteMilli = new Date().getTime() - startMilli;
      } else if (numCols !== Object.keys(row).length) {
        this.end();

        var receivedCols = Object.keys(row).length;
        var error = new Error(
          `query "${queryTxt}": ` +
            `wrong number of columns, want ${numCols} got ${receivedCols}`
        );

        callback(error);
      }
      numRows++;
    })
    .on('end', function() {
      var timeTotalMilli = new Date().getTime() - startMilli;

      console.log(
        `query ${queryTxt}:`,
          `got ${numRows} rows,`,
          `${numCols} cols,`,
          `first byte ${timeFirstByteMilli / 1000} sec,`,
          `total ${timeTotalMilli / 1000} sec`
      );

      callback(null);
    });
};

async.eachSeries(queries, doQuery, err => {
  if (err) {
    console.error(err);
  }
});
