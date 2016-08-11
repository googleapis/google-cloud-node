/**
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var async = require('async');
var globby = require('globby');
var path = require('path');
var fs = require('fs');

var parser = require('./parser');
var config = require('./config');


var JSON_FOLDER = './docs/json';

var globOptions = {
  cwd: './packages',
  ignore: config.IGNORE
};

function getPackages(callback) {
  globby('*', globOptions)
    .then(callback.bind(null, null), callback);
}

function getPackageFiles(packageName, callback) {
  globby(path.join(packageName, 'src/*.js'), globOptions)
    .then(callback.bind(null, null), callback);
}

function createJSON(packageName, file, callback) {
  var inputFile = path.join(globOptions.cwd, file);
  var outputFile = path.join(
    JSON_FOLDER,
    packageName,
    config.DEFAULT_VERSION,
    file.replace(/^.+src\//, '') + 'on'
  );

  fs.readFile(inputFile, 'utf8', function(err, contents) {
    if (err) {
      callback(err);
      return;
    }

    var json = parser.parseFile(inputFile, contents);

    fs.writeFile(outputFile, JSON.stringify(json), function(err) {
      json.path = path.basename(outputFile);
      callback(err, json);
    });
  });
}

function createTypesDictionary(packageName, json, callback) {
  var outputFile = path.join(
    JSON_FOLDER,
    packageName,
    config.DEFAULT_VERSION,
    config.TYPES_DICT
  );

  var types = parser.createTypesDictionary(json);

  fs.writeFile(outputFile, JSON.stringify(types), function(err) {
    callback(err, types);
  });
}

function createTableOfContents(packageName, types, callback) {
  var outputFile = path.join(
    JSON_FOLDER,
    packageName,
    config.DEFAULT_VERSION,
    config.TOC
  );

  var toc = parser.createToc(types);

  fs.writeFile(outputFile, JSON.stringify(toc), callback);
}

getPackages(function(err, packages) {
  if (err) {
    throw err;
  }

  async.each(packages, function(packageName, pcallback) {
    getPackageFiles(packageName, function(err, files) {
      if (err) {
        throw err;
      }

      async.map(files, function(file, fcallback) {
        createJSON(packageName, file, fcallback);
      }, function(err, json) {
        if (err) {
          throw err;
        }

        async.waterfall([
          function(callback) {
            createTypesDictionary(packageName, json, callback);
          },
          function(types, callback) {
            createTableOfContents(packageName, types, callback);
          }
        ], pcallback);
      });
    });
  });
});
