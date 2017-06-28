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

'use strict';

require('shelljs/global');

var chalk = require('chalk');
var flatten = require('lodash.flatten');
var fs = require('fs');
var globby = require('globby');
var path = require('path');
var semver = require('semver');

var config = require('./config');
var helpers = require('../helpers');
var parser = require('./parser');

var git = helpers.git;

var DOCS_ROOT = './docs/json';
var MARKDOWN = path.resolve(DOCS_ROOT, '../*.md');
var PACKAGES_ROOT = './packages';
var UMBRELLA_PACKAGE = config.UMBRELLA_PACKAGE;

var manifestPath = path.resolve(DOCS_ROOT, '../manifest.json');
var manifest = require(manifestPath);

/**
 * @class Builder
 *
 * This is a custom builder used to generate documentation json!
 *
 * @param {string} name - Name of the module to build docs for.
 * @param {string=} version - Target version of the docs.
 * @param {string=} cwd - The current working directory to build from.
 *
 * @example
 * var builder = new Builder('vision', '0.5.0');
 */
function Builder(name, version, cwd) {
  this.name = name;
  this.version = version || config.DEFAULT_VERSION;
  this.dir = path.join(cwd || '', DOCS_ROOT, name, this.version);
  this.isUmbrella = name === UMBRELLA_PACKAGE;
  this.isRelease = !!semver.valid(this.version);
}

/**
 * This simply generates documentation for the specified module.
 * All files will end up in /docs/json/{builder.name}/{builder.version}
 *
 * If there are any malformed docs/etc., an error will be thrown.
 *
 * @throws {error}
 *
 * @example
 * builder.build();
 */
Builder.prototype.build = function() {
  var self = this;

  mkdir('-p', this.dir);
  cp(MARKDOWN, this.dir);

  var docsPaths = [
    path.join(this.name, 'src/*.js'),
    path.join(this.name, 'src/**/v*/doc/*.js'),
    path.join(this.name, 'src/**/v*/*_client.js')
  ];

  var docs = globby.sync(docsPaths, {
    cwd: PACKAGES_ROOT,
    ignore: config.IGNORE
  }).map(function(file) {
    var json = self.parseFile(file);
    var outputFile = path.basename(file) + 'on';

    json.path = path.basename(outputFile);
    self.write(outputFile, json);

    return json;
  });

  var gapicVersions = docs.reduce((grouped, doc) => {
    var gapicVersion = doc.id.match(/\/(v[^\/]*)/);

    if (gapicVersion) {
      gapicVersion = gapicVersion[1];
      mkdir('-p', `${self.dir}/${gapicVersion}`);

      if (doc.id.includes('doc_')) {
        grouped[gapicVersion] = grouped[gapicVersion] || [];
        grouped[gapicVersion].push(doc);
      } else if (doc.id.includes('_client')) {
        // Move client file to a separate path.
        doc.path = `${gapicVersion}/${doc.path}`;
        self.write(doc.path, doc);
      }
    }

    return grouped;
  }, {});

  // @TODO delete extra files
  docs = docs.filter(doc => !doc.source.includes('doc_'));

  for (var gapicVersion in gapicVersions) {
    var gapicFiles = gapicVersions[gapicVersion];

    var dataTypesFile = gapicFiles.reduce((dataTypesFile, gapicFile) => {
      if (!dataTypesFile.id) {
        var idParts = gapicFile.id.split('/');
        idParts.pop();
        idParts.pop();
        idParts.push('data_types');

        dataTypesFile.id = idParts.join('/');
        dataTypesFile.name = 'Data Types';
      }

      dataTypesFile.methods = dataTypesFile.methods.concat(gapicFile.methods);

      return dataTypesFile;
    }, {
      methods: [],
      path: `${gapicVersion}/data_types.json`
    });

    this.write(`${gapicVersion}/data_types.json`, dataTypesFile);

    docs.push(dataTypesFile);
  }

  var types = parser.createTypesDictionary(docs);
  var toc = parser.createToc(types);

  toc.tagName = this.getTagName();
  this.write(config.TYPES_DICT, types);
  this.write(config.TOC, toc);

  if (this.isUmbrella) {
    new Bundler(this).bundle();
  }
};

/**
 * Retrieve the tag name for the current release. Will throw an error if
 * version is not set.
 *
 * @throws {error}
 * @return {string} tagName
 *
 * @example
 * var tagName = builder.getTagName(); // bigtable-0.2.0
 */
Builder.prototype.getTagName = function() {
  if (!semver.valid(this.version)) {
    return this.version;
  }

  if (this.isUmbrella) {
    return this.version.replace(/^v*/, 'v');
  }

  return [this.name, this.version].join('-');
};

/**
 * Retrieves the "types" list for the the current module.
 *
 * @return {object[]} types
 *
 * @example
 * var types = builder.getTypes();
 */
Builder.prototype.getTypes = function() {
  return require(path.resolve(this.dir, config.TYPES_DICT));
};

/**
 * Attempts to parse the specified file. Will throw an error if parsing fails.
 *
 * @throw {error}
 * @param {string} file - The file to parse.
 * @return {object} json - The parsed file JSON.
 *
 * @example
 * var json = builder.parseFile('bigtable/src/index.js');
 */
Builder.prototype.parseFile = function(file) {
  var filePath = path.join(PACKAGES_ROOT, file);
  var contents = fs.readFileSync(filePath, 'utf8');

  try {
    return parser.parseFile(filePath, contents);
  } catch (e) {
    e.message =
        'Unable to generate docs for file: ' + file + '. Reason: ' + e.message;
    throw e;
  }
};

/**
 * Updates the manifest.json file to include the module and/or tagged version.
 */
Builder.prototype.updateManifest = function() {
  var config = findWhere(manifest.modules, { id: this.name });

  if (!config) {
    config = {
      id: this.name,
      name: '@google-cloud/' + this.name,
      defaultService: this.name,
      versions: ['master']
    };

    manifest.modules.push(config);
    manifest.modules.sort(sortByModId);
  }

  if (config.versions.indexOf(this.version) === -1) {
    config.versions.unshift(this.version);
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
};

/**
 * Convenience method to make writing JSON files a little less tedious.
 *
 * @param {string} file - The file name.
 * @param {object} json - The JSON object.
 */
Builder.prototype.write = function(file, json) {
 fs.writeFileSync(path.join(this.dir, file), JSON.stringify(json));
};

/**
 * @class Bundler
 *
 * This class is used to generate/update the umbrella documentation.
 *
 * @param {builder|string} builder - Either a Builder instance or version of
 *     the umbrella docs.
 *
 * @example
 * var builder = new Builder('google-cloud', '0.44.0');
 * var bundler = new Bundler(builder);
 *
 * // or the shorthand version..
 * var bundler = new Bundler('0.44.0');
 */
function Bundler(builder) {
  this.builder = builder;

  if (typeof this.builder === 'string') {
    this.builder = new Builder(UMBRELLA_PACKAGE, builder);
  }
}

/**
 * @static
 *
 * This iterates over all known umbrella package versions and checks to see
 * if the supplied builder is the max satisfying semver version. If it is, then
 * it will update the JSON files for that particular builder.
 *
 * @param {builder} builder - The Builder instance.
 *
 * @example
 * // pretend this was a patch release, it would automatically be installed
 * // to umbrella packages that list 0.4.0 as the semver version.
 * var builder = new Builder('bigtable', '0.4.1');
 *
 * Bundler.updateDep(builder);
 */
Bundler.updateDep = function(builder) {
  if (!builder.isRelease) {
    throw new Error('Must supply valid version to update bundles with.');
  }

  var bundleConfig = findWhere(manifest.modules, {
    id: UMBRELLA_PACKAGE
  });

  var bundleVersions = bundleConfig.versions;
  var config = findWhere(manifest.modules, { id: builder.name });
  var versions = config.versions.filter(semver.valid);
  var builderTag = builder.getTagName();
  var bundler, dep, bundleTag;

  for (var i = 0; i < bundleVersions.length - 1; i++) {
    bundler = new Bundler(bundleVersions[i]);
    bundleTag = bundler.builder.getTagName();
    git.checkout(bundleTag);

    dep = findWhere(bundler.getDeps(), { name: builder.name }) || {};
    git.checkout('-');

    if (semver.maxSatisfying(versions, dep.version) !== builder.version) {
      break;
    }

    console.log('\n');
    console.log(chalk.blue('Updating %s with %s docs'), bundleTag, builderTag);

    bundler.add(builder);
  }
};

/**
 * Adds the supplied builder to the bundled docs.
 *
 * @param {builder} builder - The builder instance.
 *
 * @example
 * var builder = new Builder('bigtable', '0.5.0');
 * var bundler = new Bundler('0.45.0');
 *
 * bundler.add(builder);
 * // The 0.45.0 bundle now contains the bigtable-0.5.0 docs
 */
Bundler.prototype.add = function(builder) {
  var self = this;
  var outputFolder = path.join(this.builder.dir, builder.name);

  mkdir('-p', outputFolder);

  globby.sync(path.resolve(builder.dir, '*.json'), {
    ignore: [config.TYPES_DICT, config.TOC].map(function(file) {
      return path.resolve(builder.dir, file);
    })
  }).forEach(function(file) {
    var json = require(file);
    var service = json.parent || json.id;
    var outputFile = path.join(builder.name, path.basename(file));

    json.overview = parser.createOverview(service, true);
    self.builder.write(outputFile, json);
  });
};

/**
 * Generates all JSON files for the umbrella version.
 *
 * @example
 * var bundler = new Bundler('0.45.0');
 *
 * bundler.bundle();
 */
Bundler.prototype.bundle = function() {
  var self = this;

  var baseTypes = this.builder.getTypes();
  var deps = this.getDeps().map(function(dep) {
    var config = findWhere(manifest.modules, { id: dep.name });
    var versions = config.versions.filter(semver.valid);

    return {
      name: dep.name,
      version: semver.maxSatisfying(versions, dep.version)
    };
  });

  var submodule = git.submodule('master', 'bundler');

  var depTypes = deps.map(function(dep) {
    var builder = new Builder(dep.name, dep.version, submodule.cwd);

    submodule.checkout(builder.getTagName());
    builder.build();
    self.add(builder);

    return builder.getTypes().map(function(type) {
      type.contents = path.join(dep.name, type.contents);
      return type;
    });
  });

  var types = baseTypes.concat(flatten(depTypes));
  var toc = parser.createToc(types, true);

  toc.tagName = this.builder.getTagName();
  this.builder.write(config.TYPES_DICT, types);
  this.builder.write(config.TOC, toc);

  git.deinit(submodule);
};

/**
 * Gets the umbrella package @google-cloud specific dependencies for the
 * current state of the package.
 *
 * @return {object[]}
 *
 * @example
 * var bundler = new Bundler('0.44.0');
 * var deps = bundler.getDeps();
 * // deps = [
 * //   {
 * //     name: 'bigtable',
 * //     version: '^0.4.0'
 * //   }
 * // ]
 */
Bundler.prototype.getDeps = function() {
  var jsonPath = path.resolve(PACKAGES_ROOT, UMBRELLA_PACKAGE, 'package.json');
  var contents = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  var dependencies = contents.dependencies;

  return Object.keys(dependencies)
    .filter(function(dep) {
      return /^\@google\-cloud/.test(dep);
    })
    .map(function(dep) {
      return {
        name: dep.replace('@google-cloud/', ''),
        version: dependencies[dep]
      };
    });
};

/**
 * Searches a collection to find a model containing the specified props.
 *
 * @param {object[]} collection - The collection to search.
 * @param {object} props - The properties to match against.
 * @return {object|null}
 */
function findWhere(collection, props) {
  var i, key, obj;

  collLoop: for (i = 0; i < collection.length; i++) {
    obj = collection[i];

    for (key in props) {
      if (obj[key] !== props[key]) {
        continue collLoop;
      }
    }

    return obj;
  }

  return null;
}

/**
 * Used to sort manifest modules by id.
 *
 * @param {object} a - module A.
 * @param {object} b - module B.
 * @return {number}
 */
function sortByModId(a, b) {
  if (a.id === UMBRELLA_PACKAGE) {
    return -1;
  }

  if (b.id === UMBRELLA_PACKAGE) {
    return 1;
  }

  return +(a.id > b.id) || +(a.id === b.id) - 1;
}

/**
 * Builds docs for the specified module.
 *
 * @param {string} name - The name of the module to build docs for.
 * @param {string=} version - The version of the module.
 *
 * @example
 * builder.build('bigtable', '0.2.0');
 */
function build(name, version) {
  var builder = new Builder(name, version);

  console.log('\n');
  console.log(chalk.blue('Building docs for %s@%s'), name, version);

  git.checkout(builder.getTagName());
  builder.build();
  git.checkout('-');

  if (builder.isRelease) {
    if (!builder.isUmbrella) {
      Bundler.updateDep(builder);
    }

    builder.updateManifest();
  }
}

module.exports.build = build;

/**
 * Builds docs for all modules.
 *
 * @example
 * builder.buildAll();
 */
function buildAll() {
  var currentBranch = git.branch.current;
  var modules = globby.sync('*', {
    cwd: PACKAGES_ROOT,
    ignore: config.IGNORE
  });

  modules.forEach(function(name) {
    build(name, currentBranch);
  });
}

module.exports.buildAll = buildAll;
