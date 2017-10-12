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

const async = require('async');
const fs = require('fs');
const util = require('util');
const BigQuery = require('../src/index.js');

if (process.argv.length < 3) {
  throw util.format("need query file; usage: '%s %s <queries.json>'", process.argv[0], process.argv[1]);
}
var queryJson = fs.readFileSync(process.argv[2]);
var queries = JSON.parse(queryJson);
var client = BigQuery();

var doQuery = function(queryTxt, callback) {
  var startMilli = new Date().getTime();
  var numRows = 0;
  var numCols;
  var timeFirstByteMilli;

  var query = {
    query: queryTxt,
    useLegacySql: false
  };

  client.createQueryStream(query)
  .on('error', function(err) {
    callback(err)
  })
  .on('data', function(row) {
    if (numRows == 0) {
      numCols = Object.keys(row).length;
      timeFirstByteMilli = new Date().getTime() - startMilli;
    } else if (numCols != Object.keys(row).length) {
      this.end();
      callback(util.format("query %j: wrong number of columns, want %d got %d",
          queryTxt,
          numCols,
          Object.keys(row).length));
    }
    numRows++;
  })
  .on('end', function() {
    timeTotalMilli = new Date().getTime() - startMilli;
    console.log(util.format("query %j: got %d rows, %d cols, first byte %d sec, total %d sec",
        queryTxt,
        numRows,
        numCols,
        timeFirstByteMilli/1000,
        timeTotalMilli/1000));
    callback(null);
  });
}

async.eachSeries(queries, doQuery, err =>{});
