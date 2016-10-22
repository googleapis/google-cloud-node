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

require('shelljs/global');

var fs = require('fs');
var globby = require('globby');
var path = require('path');

var config = require('./config');
var parser = require('./parser');

function build(packageName) {
  var files = globby.sync(path.join(packageName, 'src/*.js'), {
    cwd: './packages',
    ignore: config.IGNORE
  });

  var outputDir = path.join(
    './docs/json',
    packageName,
    config.DEFAULT_VERSION
  );

  mkdir('-p', outputDir);
  cp('docs/*.md', outputDir);

  var json = files.map(function(file) {
    var filePath = path.join('./packages', file);
    var fileContents = fs.readFileSync(filePath, 'utf8');
    var fileJSON;

    try {
      fileJSON = parser.parseFile(file, fileContents);
    } catch (e) {
      throw new Error(
        'Unable to generate docs for file: ' + file + '. Reason: ' + e.message
      );
    }

    var outputFile = path.join(
      outputDir,
      file.replace(/^.+src\//, '') + 'on'
    );

    fileJSON.path = path.basename(outputFile);
    fs.writeFileSync(outputFile, JSON.stringify(fileJSON));

    return fileJSON;
  });

  var types = parser.createTypesDictionary(json);
  var typesFilePath = path.join(outputDir, config.TYPES_DICT);

  fs.writeFileSync(typesFilePath, JSON.stringify(types));

  var toc = parser.createToc(types);
  var tocFilePath = path.join(outputDir, config.TOC);

  fs.writeFileSync(tocFilePath, JSON.stringify(toc));
}

module.exports = build;
