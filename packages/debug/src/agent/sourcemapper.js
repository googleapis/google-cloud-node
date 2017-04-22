/**
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

'use strict';

/** @const */ var _ = require('lodash');
/** @const */ var async = require('async');
/** @const */ var fs = require('fs');
/** @const */ var path = require('path');

/** @const */ var sourceMap = require('source-map');

/** @define {string} */ var MAP_EXT = '.map';

function create(sourcemapPaths, callback) {
  var mapper = new SourceMapper();
  var callList = Array.prototype.slice.call(sourcemapPaths)
                 .map(function(path) {
                   return function(callback) {
                     processSourcemap(mapper.infoMap_, path, callback);
                   };
                 });

  async.parallelLimit(callList, 10, function(err) {
    if (err){
      return callback(
        new Error('An error occurred while processing the sourcemap files' +
          err));
    }

    callback(null, mapper);
  });
}

/**
 * @param {!Map} infoMap The map that maps input source files to
 *  SourceMapConsumer objects that are used to calculate mapping information
 * @param {string} mapPath The path to the sourcemap file to process.  The
 *  path should be relative to the process's current working directory
 * @private
 */
function processSourcemap(infoMap, mapPath, callback) {
  // this handles the case when the path is undefined, null, or
  // the empty string
  if (!mapPath || !_.endsWith(mapPath, MAP_EXT)){
    return setImmediate(function() {
      callback(new Error('The path ' + mapPath +
        ' does not specify a sourcemap file'));
    });
  }
  mapPath = path.normalize(mapPath);

  fs.readFile(mapPath, 'utf8',
    function(err, data) {
      if (err){
        return callback(new Error('Could not read sourcemap file ' + mapPath +
          ': ' + err));
      }

      var consumer;
      try {
        consumer = new sourceMap.SourceMapConsumer(data);
      }
      catch(e) {
        return callback(new Error('An error occurred while reading the '+
          'sourcemap file ' + mapPath + ': ' + e));
      }

      /*
        * If the sourcemap file defines a "file" attribute, use it as
        * the output file where the path is relative to the directory
        * containing the map file.  Otherwise, use the name of the output
        * file (with the .map extension removed) as the output file.
        */
      var outputBase = consumer.file ? consumer.file
                                     : path.basename(mapPath, '.map');
      var parentDir = path.dirname(mapPath);
      var outputPath = path.normalize(path.join(parentDir, outputBase));
      
      var sources = Array.prototype.slice.call(consumer.sources)
        .filter(function(value) {
          // filter out any empty string, null, or undefined sources
          return !!value;
        })
        .map(function(relPath) {
          // resolve the paths relative to the map file so that they 
          // are relative to the process's current working directory
          return path.normalize(path.join(parentDir, relPath));
        });

      if (sources.length === 0) {
        return callback(new Error('No sources listed in the sourcemap file ' +
          mapPath));
      }

      sources.forEach(function(src) {
        infoMap.set(path.normalize(src), {
          outputFile: outputPath,
          mapFile: mapPath,
          mapConsumer: consumer
        });
      });

      callback(null);
  });
}

/**
 * @param {Array.<string>} sourcemapPaths An array of paths to .map sourcemap
 *  files that should be processed.  The paths should be relative to the 
 *  current process's current working directory
 * @param {Logger} logger A logger that reports errors that occurred while
 *  processing the given sourcemap files
 * @constructor
 */
function SourceMapper() {
  this.infoMap_ = new Map();
}

/**
 * Used to determine if the source file specified by the given path has
 * a .map file and an output file associated with it.
 * 
 * If there is no such mapping, it could be because the input file is not
 * the input to a transpilation process or it is the input to a transpilation
 * process but its corresponding .map file was not given to the constructor
 * of this mapper.
 * 
 * @param {string} inputPath The path to an input file that could
 *  possibly be the input to a transpilation process.  The path should be 
 *  relative to the process's current working directory.
 */
SourceMapper.prototype.hasMappingInfo = function(inputPath) {
  return this.infoMap_.has(path.normalize(inputPath));
};

/**
 * @param {string} inputPath The path to an input file that could possibly 
 *  be the input to a transpilation process.  The path should be relative to 
 *  the process's current working directory
 * @param {number} The line number in the input file where the line number is
 *   zero-based.
 * @param {number} (Optional) The column number in the line of the file
 *   specified where the column number is zero-based.
 * @return {Object} The object returned has a "file" attribute for the
 *   path of the output file associated with the given input file (where the 
 *   path is relative to the process's current working directory),
 *   a "line" attribute of the line number in the output file associated with
 *   the given line number for the input file, and an optional "column" number
 *   of the column number of the output file associated with the given file
 *   and line information.
 * 
 *   If the given input file does not have mapping information associated
 *   with it then null is returned.
 */
SourceMapper.prototype.mappingInfo = function(inputPath, lineNumber, colNumber) {
  inputPath = path.normalize(inputPath);
  if (!this.hasMappingInfo(inputPath)) {
    return null;
  }

  var entry = this.infoMap_.get(inputPath);
  var sourcePos = {
    source: path.relative(path.dirname(entry.mapFile), inputPath),
    line: lineNumber + 1, // the SourceMapConsumer expects the line number 
                          // to be one-based but expects the column number 
    column: colNumber     // to be zero-based
  };

  var consumer = entry.mapConsumer;
  var allPos = consumer.allGeneratedPositionsFor(sourcePos);
  /*
  * Based on testing, it appears that the following code is needed to 
  * properly get the correct mapping information.
  * 
  * In particular, the generatedPositionFor() alone doesn't appear to 
  * give the correct mapping information.
  */
  var mappedPos = allPos && allPos.length > 0 ?
    Array.prototype.reduce.call(allPos,
      function(accumulator, value, index, arr) {
          return value.line < accumulator.line ? value : accumulator;
      }) : consumer.generatedPositionFor(sourcePos);

  return {
    file: entry.outputFile,
    line: mappedPos.line - 1, // convert the one-based line numbers returned 
                              // by the SourceMapConsumer to the expected 
                              // zero-based output.
    column: mappedPos.col     // SourceMapConsumer uses zero-based column 
                              // numbers which is the same as the expected 
                              // output
  };
};

module.exports = {
  create: create
};
