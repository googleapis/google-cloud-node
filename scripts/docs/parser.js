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

var arrayIncludes = require('array-includes');
var camel = require('lodash.camelcase');
var dox = require('dox');
var fs = require('fs');
var extend = require('extend');
var format = require('string-format-obj');
var globby = require('globby');
var path = require('path');
var prop = require('propprop');
var stringIncludes = require('string-includes');
var template = require('lodash.template');
var upperFirst = require('lodash.upperfirst');

var config = require('./config');
var baseToc = require('./templates/toc.json');

var templateFile = fs.readFileSync(
  path.join(__dirname, config.OVERVIEW_TEMPLATE));

var parser = module.exports = {};

function isPublic(block) {
  return !block.isPrivate && !block.ignore &&
    !getTagsByType(block, 'protected').length &&
    !getTagsByType(block, 'package').length;
}

function isMethod(block) {
  var tag = block.tags[0];
  return tag && tag.type !== 'typedef';
}

function detectLinks(str) {
  var linkInsideLink = /@link <a href="(.+)".+<\/a>/g;
  var reg = /\[([^\]]*)]{@link ([^}]*)}/g;

  return str
    .replace(linkInsideLink, function(match, link) {
      return `@link ${link}`;
    })
    .replace(reg, function(match, title, link) {
      if (link.startsWith('external')) {
        return title;
      }

      link = link.replace('<a href="', '');

      return '<a href="' + link.trim() + '">' + title.trim() + '</a>';
    });
}

function formatHtml(html) {
  var formatted = (html || '')
    .replace(/\s+/g, ' ')
    .replace(/<br *\/*>/g, ' ') /* TODO: remove. fixing a sublime text bug */
    .replace(/`([^`]*)`/g, '<code>$1</code>');

  return detectLinks(detectCustomType(formatted));
}

function detectCustomType(str) {
  var tmpl = '<a data-custom-type="{module}" data-method="{method}">{text}</a>';
  var templateFn = format.bind(null, tmpl);
  var rCustomType = /\{*module\:([^\}|\>]*)\}*/g;
  var rArray = /Array\.<(.+)>/g;
  var rProtoType = /\[\w+\]{@link ([A-Z][^}]*)}/g;

  return str
    .replace(rArray, function(match, module) {
      return module + '[]';
    })
    .replace(rCustomType, function(match, module) {
      var parts = module.split('#');

      return templateFn({
        module: parts[0],
        method: parts[1] || '',
        text: module
      });
    })
    // @TODO link-ability
    .replace(rProtoType, function(match, protoType) {
      return `
        <a ng-if="service.parent" ui-sref="docs.service({
          serviceId: '{{service.parent}}/{{service.path.split('/').shift()}}/data_types',
          method: '${protoType}'
        })">${protoType}</a>

        <a ng-if="!service.parent" ui-sref="docs.service({
          serviceId: '{{service.title.split('V')[0] + '/v' + service.title.split('V')[1]}}/data_types',
          method: '${protoType}'
        })">${protoType}</a>
      `.trim();
    });
}

function getTagsByType(block, type) {
  return block.tags.filter(function(tag) {
    return tag.type === type;
  });
}

function createUniqueMethodList(list, method) {
  var matches = list.filter(function(item) {
    return item.name === method.name;
  });

  if (!matches.length) {
    list.push(method);
  }

  return list;
}

function getId(fileName) {
  var hooks = {
    'index': 'google-cloud'
  };

  var id = fileName
    .replace(/\\/g, '/')
    .replace(/^(\.\/)?packages\//, '')
    .replace('src/', '')
    .replace('/index.js', '')
    .replace('.js', '');

  return hooks[id] || id;
}

function getName(block) {
  if (!block) {
    return;
  }

  var alias = getTagsByType(block, 'alias')[0];

  if (alias && !/^module/.test(alias.string)) {
    return alias.string;
  }

  return block.ctx && block.ctx.name;
}

function getClassDesc(block) {
  if (!block) {
    return;
  }

  var classdesc = getTagsByType(block, 'classdesc')[0] || {};

  return formatHtml(classdesc.html);
}

function getParent(id) {
  var parent = id.replace(/\\/g, '/').replace(/\/.+/, '');

  return parent === id ? null : parent;
}

function getChildren(id) {
  var childrenGlob = './packages/' + id + '/src/*';

  return globby
    .sync(childrenGlob, { ignore: config.IGNORE })
    .map(getId)
    .filter(function(child) {
      return child !== id;
    });
}

function getMethodType(block) {
  if (block.isConstructor) {
    return 'constructor';
  }

  if (block.ctx) {
    var name = block.ctx.name;

    if (/^[A-Z]/.test(name) && name.endsWith('Client')) {
      return 'constructor';
    }
  }

  if (getTagsByType(block, 'static').length > 0) {
    return 'static';
  }

  return 'instance';
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
  var examples = getTagsByType(block, 'example')[0];

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

function createMethod(fileName, parent, block) {
  var name = getName(block);

  var allParams = getTagsByType(block, 'param')
    .concat(getTagsByType(block, 'property'))
    .map(createParam);

  var isGapic = stringIncludes(fileName, 'doc_');
  var isRequestOrResponse = name &&
    (stringIncludes(name, 'Request') || stringIncludes(name, 'Response'));

  if (isGapic && isRequestOrResponse) {
    // Ignore descriptions that have links we don't want, e.g.
    // "The request for {@link Datastore.AllocateIds}."
    block.description = {};
  }

  return {
    id: name,
    name: name,
    type: getMethodType(block),
    description: formatHtml(block.description.full),
    source: path.normalize(fileName) + '#L' + block.codeStart,
    resources: getTagsByType(block, 'resource').map(createResource),
    examples: createExamples(block),
    params: allParams,
    exceptions: getTagsByType(block, 'throws').map(createException),
    returns: getTagsByType(block, 'return').map(createReturn)
  };
}

function getMixinMethods(comments) {
  return comments.filter(function(block) {
    return getTagsByType(block, 'mixes').length;
  }).map(function(block) {
    var mixin = getTagsByType(block, 'mixes')[0];
    var mixinFile = path.join('./packages', mixin.string.replace('module:', '').replace('/', '/src/') + '.js');
    var mixinContents = fs.readFileSync(mixinFile, 'utf8', true);
    var docs = parseFile(mixinFile, mixinContents);
    var methods = docs.methods.filter(function(method) {
      return method.type === 'instance';
    });
    var name;

    if (block.ctx.type === 'property') {
      name = block.ctx.string.replace(/^\w+\./, '');
      methods.forEach(function(method) {
        method.id = method.name = [name, method.name].join('.');
      });
    }

    return methods;
  }).reduce(function(methods, mixinMethods) {
    return methods.concat(mixinMethods);
  }, []);
}

function parseFile(fileName, contents, umbrellaMode) {
  var comments = dox.parseComments(contents);
  var constructor = comments.filter(prop('isConstructor'))[0];
  var id = getId(fileName);
  var parent = getParent(id);

  var name;

  if (constructor) {
    name = getName(constructor);
  } else {
    // GAPICs don't have constructors.
    var tags = comments.map(prop('tags'));

    tags.forEach(tags => {
      var isModuleTag = tags.some(tag => tag.type === 'module');

      if (isModuleTag) {
        tags.forEach(tag => {
          if (tag.type === 'name') {
            name = tag.string;
          }
        });
      }
    });
  }

  return {
    id: id,
    type: 'class',
    name: name,
    overview: createOverview(parent || id, umbrellaMode),
    description: getClassDesc(constructor),
    source: path.normalize(fileName),
    parent: parent,
    children: getChildren(id),
    methods: comments
      .filter(isPublic)
      .filter(isMethod)
      .map(createMethod.bind(null, fileName, id))
      .concat(getMixinMethods(comments))
      .reduce(createUniqueMethodList, [])
  };
}

function createTypesDictionary(docs) {
  var types = [];
  var gapics = {};

  docs.forEach(function(service) {
    var isGapic = /_client$/.test(service.id);

    var titleParts = [];
    var id = service.id;

    var contents = service.path;

    if (id === config.UMBRELLA_PACKAGE) {
      titleParts.push('Google Cloud');
    } else {
      titleParts.push(service.name);
    }

    if (isGapic) {
      var gapicVersion;
      var gapicPath = service.id.split('/');
      var versionIndex;

      gapicPath.forEach(function(gapicPathPart, index) {
        if (/^v\d/.test(gapicPathPart)) {
          gapicVersion = gapicPathPart;
          versionIndex = index;
        }
      });

      titleParts = [gapicVersion];

      var nestedTitle = [].slice.call(gapicPath, versionIndex + 1);

      if (nestedTitle.length > 0) {
        titleParts.push(upperFirst(camel(nestedTitle.join('/'))));
      }

      var gapicPathWithVersion = [].slice.call(gapicPath)
        .slice(0, versionIndex + 1).join('/');

      if (!gapics[gapicPathWithVersion]) {
        gapics[gapicPathWithVersion] = {
          id: gapicPathWithVersion,
          title: [
            gapicVersion
          ]
        };
      }
    }

    if (service.parent) {
      for (var i = 0, l = docs.length; i < l; i++) {
        if (docs[i].id === service.parent) {
          titleParts.unshift(docs[i].name);
        }
      }
    }

    types.push({
      id: id,
      title: titleParts,
      contents: contents
    });
  });

  for (var gapic in gapics) {
    types.push({
      id: gapics[gapic].id,
      title: gapics[gapic].title,
      contents: `${gapics[gapic].title}/index.json`
    });
  }

  return types;
}

function createToc(types, collapse) {
  var toc = extend(true, {}, baseToc);

  var generatedTypes = types.filter(type => / v\d/.test(type.title.join(' ')));
  var protos = types.filter(type => stringIncludes(type.id, '/doc/'));

  var services = types
    .filter(type => !arrayIncludes(generatedTypes, type))
    .filter(type => !arrayIncludes(protos, type))
    .map(function(type) {
      return {
        type: type.id,
        title: type.title[type.title.length > 1 ? 1 : 0]
      };
    })
    .sort(function(a, b) {
      if (a.type === config.UMBRELLA_PACKAGE) {
        return -1;
      }

      if (b.type === config.UMBRELLA_PACKAGE) {
        return 1;
      }

      return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;
    });

  if (generatedTypes.length > 0) {
    // Push the generated types to the bottom of the navigation.
    var generatedTypesByModuleByVersion = {};

    generatedTypes.forEach(function(generatedType) {
      var module = generatedType.title[0];
      var moduleObject = generatedTypesByModuleByVersion[module] =
      generatedTypesByModuleByVersion[module] || {};

      var version = generatedType.title[1];
      moduleObject[version] = moduleObject[version] || [];
      moduleObject[version].push(generatedType);
    });

    for (var module in generatedTypesByModuleByVersion) {
      var versions = generatedTypesByModuleByVersion[module];

      for (var version in versions) {
        /*jshint loopfunc:true*/
        var matchingService = services.filter(service => {
          return service.title.toLowerCase() === module.toLowerCase();
        })[0];

        var generatedTypesGrouped = versions[version]
          .sort(function(a, b) {
            if (a.title.length < b.title.length) { // e.g. ['Spanner', 'v1']
              return -1;
            }

            if (b.title.length < a.title.length) {
              return 1;
            }

            var titleA = a.title[a.title.length - 1];
            var titleB = b.title[b.title.length - 1];

            return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
          });

        services = services.filter(service => {
          return service.type !== version;
        });

        var serviceObject = {
          title: version,
          type: version,
          nav: generatedTypesGrouped.map(function(generatedType) {
            return {
              title: generatedType.title[generatedType.title.length - 1],
              type: generatedType.id
            };
          })
        };

        serviceObject.nav.push({
          title: 'Data Types',
          type: generatedTypesGrouped[0].id
            .replace(/\/\w+_client$/, '/data_types')
        });

        if (collapse) { // Umbrella mode
          serviceObject.type = `${module.toLowerCase()}/${serviceObject.type}`;
          matchingService.nav = [serviceObject];
        } else {
          services.push(serviceObject);
        }
      }
    }
  }

  services = services
    .filter(service => !stringIncludes(service.type, 'data_types'));

  if (!collapse) {
    toc.services = services;
    return toc;
  }

  var collapsed = services.reduce(function(collapsed, service) {
    var last = collapsed[collapsed.length - 1];
    var parent = service.type.split('/')[0];

    if (last && last.type === parent) {
      last.nav = last.nav || [];
      last.nav.push(service);
    } else {
      collapsed.push(service);
    }

    return collapsed;
  }, []);

  toc.services = collapsed;
  return toc;
}

function createOverview(moduleName, umbrellaMode) {
  var modConfig = config.OVERVIEW[moduleName];

  if (!modConfig) {
    throw new Error('Missing doc configs for "' + moduleName + '" package.');
  }

  var pkgJson = path.join(
    __dirname,
    '../../packages',
    umbrellaMode ? 'google-cloud' : moduleName,
    'package.json'
  );

  return template(templateFile)({
    pkgJson: require(pkgJson),
    title: modConfig.title,
    instanceName: modConfig.instanceName,
    className: moduleName,
    umbrellaView: umbrellaMode && moduleName !== config.UMBRELLA_PACKAGE,
    umbrellaPkg: config.UMBRELLA_PACKAGE
  });
}

parser.parseFile = parseFile;
parser.createTypesDictionary = createTypesDictionary;
parser.createToc = createToc;
parser.createOverview = createOverview;
