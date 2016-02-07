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

var globby = require('globby');
var async = require('async');
var fs = require('fs');
var dox = require('dox');
var path = require('path');
var prop = require('propprop');

var IGNORE = [
  './lib/common/*',
  './lib/datastore/entity.js',
  './lib/datastore/pb.js',
  './lib/datastore/request.js',
  './lib/pubsub/iam.js',
  './lib/storage/acl.js'
];

function getId(fileName) {
  var hooks = {
    'index': 'gcloud',
    'index-class': 'index'
  };

  var id = fileName
    .replace('./lib/', '')
    .replace('/index.js', '')
    .replace('.js', '')
    .replace(/.+\//, '');

  return hooks[id] || id;
}

function getByType(block, type) {
  return block.tags.filter(function(tag) {
    return tag.type === type;
  });
}

function detectCustomType(str) {
  var rCustomType = /\{*module\:([^\}|\>]*)\}*/g;
  var rArray = /Array\.\<(.+)\>/g;

  return str
    .replace(rArray, function(match, module) {
      return module + '[]';
    })
    .replace(rCustomType, function(match, module) {
      return '<a data-custom-type="' + module + '"></a>';
    });
}

function detectLinks(str) {
  var reg = /\[([^\]]*)]{@link ([^}]*)}/g;

  return str.replace(reg, function(match, title, link) {
    return '<a href="' + link.trim() + '">' + title.trim() + '</a>';
  });
}

function detectName(block) {
  if (!block) {
    return null;
  }

  var alias = getByType(block, 'alias')[0];

  if (alias && !/^module/.test(alias.string)) {
    return alias.string;
  }

  return block.ctx.name;
}

function formatHtml(str) {
  var formatted = str
    .replace(/\s+/g, ' ')
    .replace(/<br *\/*>/g, ' ')
    .replace(/`([^`]*)`/g, '<code>$1</code>');

  return detectLinks(detectCustomType(formatted));
}

function createUniqueMethodList(list, method) {
  var matches = list.filter(function(item) {
    return item.metadata.name === method.metadata.name;
  });

  if (!matches.length) {
    list.push(method);
  }

  return list;
}

function createCaption(comment) {
  var caption = formatHtml(comment)
    .replace(/\/\/-*\s*/g, '\n')
    .replace(/(https*:)\W*/g, '$1//')
    .replace(/\n\n/g, '\n')
    .replace(/(\w)\n(\w)/g, '$1 $2')
    .replace(/\n\n/g, '</p><p>')
    .trim();

  return '<p>' + caption + '</p>';
}

function createExamples(block) {
  var examples = getByType(block, 'example')[0];

  if (!examples) {
    return [];
  }

  var paragraphComments = /\/\/-+((\n|\r|.)*?(\/\/-))/g;

  if (!paragraphComments.test(examples.string)) {
    return [{ code: examples.string }];
  }

  var exampleBreak = /\n\n(?=\/\/-)/g;
  var codeBreak = /\/\/\-\n(?!\/\/)/;

  return examples.string
    .split(exampleBreak)
    .map(function(exampleBlock) {
      var example = {};
      var parts = exampleBlock.split(codeBreak);

      parts.forEach(function(part) {
        if (/^\/\/\-/.test(part)) {
          example.caption = createCaption(part);
          return;
        }

        example.code = part.trim();
      });

      return example;
    });
}

function createResource(tag) {
  var reg = /\[([^\]]*)]{@link ([^}]*)}/g;
  var resource = {};

  (tag.string || tag).replace(reg, function(match, title, link) {
    resource.title = title.trim();
    resource.link = link.trim();
  });

  return resource;
}

function createParam(tag) {
  return {
    name: tag.name,
    description: formatHtml(tag.description),
    types: tag.types.map(detectCustomType),
    optional: tag.optional,
    nullable: tag.nullable
  };
}

function createException(tag) {
  return {
    type: detectCustomType(tag.types[0]),
    description: formatHtml(tag.description)
  };
}

function createReturn(tag) {
  return {
    types: tag.types.map(detectCustomType),
    description: formatHtml(tag.description)
  };
}

function createMethod(file, block) {
  return {
    metadata: {
      constructor: !!block.isConstructor,
      name: detectName(block),
      source: file.replace(/^\./, '') + '#L' + block.codeStart,
      description: formatHtml(block.description.full),
      examples: createExamples(block),
      resources: getByType(block, 'resource').map(createResource)
    },
    params: getByType(block, 'param').map(createParam),
    exceptions: getByType(block, 'throws').map(createException),
    returns: getByType(block, 'returns').map(createReturn)
  };
}

function detectMixinMethods(comments) {
  return comments.filter(function(block) {
    return getByType(block, 'mixes').length;
  }).map(function(block) {
    var mixin = getByType(block, 'mixes')[0];
    var mixinFile = path.join('./lib', mixin.string.replace('module:', '') + '.js');
    var mixinContents = fs.readFileSync(mixinFile, 'utf8', true);
    var docs = parseDocs(mixinFile, mixinContents, true);
    var type = block.ctx.type;
    var name;

    if (block.ctx.type === 'property') {
      name = block.ctx.string.replace(/^\w+\./, '');
      docs.methods.forEach(function(method) {
        method.metadata.name = [name, method.metadata.name].join('.');
      });
    }

    return docs;
  }).reduce(function(methods, mixin) {
    return methods.concat(mixin.methods);
  }, []);
}

function getOverview(block) {
  if (!block) {
    return null;
  }

  var overview = getByType(block, 'classdesc')[0];

  return overview ? formatHtml(overview.html) : null;
}

function parseDocs(file, contents, isInherited) {
  var comments = dox.parseComments(contents).filter(function(block) {
    return !block.isPrivate && !block.ignore;
  });
  var constructor = comments.filter(prop('isConstructor'))[0];
  var id = getId(file);

  if (isInherited) {
    comments.splice(comments.indexOf(constructor), 1);
  }

  return {
    id: id,
    metadata: {
      name: detectName(constructor),
      description: getOverview(constructor)
    },
    methods: comments
      .map(createMethod.bind(null, file))
      .concat(detectMixinMethods(comments))
      .reduce(createUniqueMethodList, [])
  };
}

globby('./lib/*{,/*}.js', { ignore: IGNORE }).then(function(files) {
  async.each(files, function(file, callback) {
    fs.readFile(file, 'utf8', function(err, contents) {
      if (err) {
        callback(err);
        return;
      }

      var docs = parseDocs(file, contents, 0);
      var outputFile = path.join(
        './docs/json/master',
        file.replace('/lib', '').replace('.js', '.json')
      );

      fs.writeFile(outputFile, JSON.stringify(docs), callback);
    });
  }, function(err) {
    if (err) {
      throw err;
    }
  });
});
