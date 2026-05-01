// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as fs from 'fs';
import nunjucks from 'nunjucks';
import * as path from 'path';
import * as util from 'util';

import type * as protos from '../../protos/index.js';

import {API} from './schema/api.js';
import {MethodDescriptorProto, ServiceDescriptorProto} from './schema/proto.js';

interface Namer {
  register: (name: string, serviceName?: string) => string;
  get: (name: string, serviceName?: string) => string;
}

const commonParameters: {[name: string]: string} = {
  copyrightYear: new Date().getFullYear().toString(),
};

const readDir = util.promisify(fs.readdir);
const fsstat = util.promisify(fs.stat);

async function recursiveFileList(
  basePath: string,
  nameRegex: RegExp,
): Promise<string[]> {
  const dirQueue: string[] = [basePath];
  const result: string[] = [];
  while (dirQueue.length > 0) {
    const directory = dirQueue.shift() as string;
    const entries = await readDir(directory);
    for (const entry of entries) {
      const fullPath = path.join(directory, entry);
      const stat = await fsstat(fullPath);
      if (stat.isDirectory()) {
        dirQueue.push(fullPath);
      } else if (stat.isFile() && entry.match(nameRegex)) {
        result.push(fullPath);
      }
    }
  }
  return result;
}

async function createSnippetIndexMetadata(
  api: API,
  basePath: string,
): Promise<protos.google.cloud.tools.snippetgen.snippetindex.v1.IIndex> {
  const clientLibrary: protos.google.cloud.tools.snippetgen.snippetindex.v1.IClientLibrary =
    {
      name: `nodejs-${api.naming.productName.toKebabCase()}`,
      version: '0.1.0',
      language:
        'TYPESCRIPT' as unknown as protos.google.cloud.tools.snippetgen.snippetindex.v1.Language,
      apis: [{id: api.naming.protoPackage, version: api.naming.version}],
    };

  const snippets = await createSnippetMetadata(api, basePath);
  return {clientLibrary, snippets};
}

async function createSnippetMetadata(
  api: API,
  basePath: string,
): Promise<protos.google.cloud.tools.snippetgen.snippetindex.v1.ISnippet[]> {
  const snippets: protos.google.cloud.tools.snippetgen.snippetindex.v1.ISnippet[] =
    [];

  for (const service of api.services) {
    for (const method of service.method) {
      const paramNameAndTypes: protos.google.cloud.tools.snippetgen.snippetindex.v1.ClientMethod.IParameter[] =
        [];

      for (const paramComment of method.paramComment ?? []) {
        paramNameAndTypes.push({
          name: paramComment.paramName,
          type: paramComment.paramType,
        });
      }

      const startRegionTag = await countRegionTagLines(
        'samples/generated/$version/$service.$method.js.njk',
        basePath,
        api,
        service,
        method,
      );

      const start = startRegionTag.start ? startRegionTag.start + 2 : undefined;
      const end = startRegionTag.end ?? undefined;

      snippets.push({
        regionTag: `${api.hostName?.split('.')[0]}_${
          api.naming.version
        }_generated_${service.name}_${method.name}_async`,
        title: `${api.mainServiceName} ${method?.name?.toCamelCase()} Sample`,
        origin:
          'API_DEFINITION' as unknown as protos.google.cloud.tools.snippetgen.snippetindex.v1.Snippet.Origin,
        description: method.comments.join(''),
        canonical: api.handwrittenLayer ? false : true,
        file: '$service.$method.js'
          .replace(/\$service/, service.name!.toSnakeCase())
          .replace(/\$method/, method.name!.toSnakeCase()),
        language:
          'JAVASCRIPT' as unknown as protos.google.cloud.tools.snippetgen.snippetindex.v1.Language,
        segments: [
          {
            start,
            end,
            type: 'FULL' as unknown as protos.google.cloud.tools.snippetgen.snippetindex.v1.Snippet.Segment.SegmentType,
          },
        ],
        clientMethod: {
          shortName: method.name,
          fullName: `${
            api.naming.protoPackage
          }.${service.name?.toPascalCase()}.${method.name}`,
          async: true,
          parameters: paramNameAndTypes,
          resultType: method.outputType,
          client: {
            shortName: `${service.name?.toPascalCase()}Client`,
            fullName: `${
              api.naming.protoPackage
            }.${service.name?.toPascalCase()}Client`,
          },
          method: {
            shortName: method.name?.toPascalCase(),
            fullName: `${
              api.naming.protoPackage
            }.${service.name?.toPascalCase()}.${method.name?.toPascalCase()}`,
            service: {
              shortName: service.name,
              fullName: `${api.naming.protoPackage}.${service.name}`,
            },
          },
        },
      });
    }
  }
  return snippets;
}

async function countRegionTagLines(
  templateName: string,
  basePath: string,
  api: API,
  service: ServiceDescriptorProto,
  method: MethodDescriptorProto,
) {
  const id = await loadNamerPlugin(basePath);
  const processed = nunjucks.render(templateName, {api, service, method, id});

  const processedArray = processed.split(/\r?\n/);

  let start;
  let end;

  for (let x = 0; x < processedArray.length; x++) {
    if (processedArray[x].includes('START')) {
      start = x;
    }

    if (processedArray[x].includes('END')) {
      end = x;
    }
  }

  return {start, end};
}

function renderFile(
  targetFilename: string,
  templateName: string,
  renderParameters: {},
) {
  let processed = nunjucks.render(templateName, renderParameters);

  // Pretty-print generated JSON files
  if (targetFilename.match(/\.json$/i)) {
    try {
      const json = JSON.parse(processed);
      const pretty = JSON.stringify(json, null, '  ') + '\n';
      processed = pretty;
    } catch (err) {
      if (err instanceof Error) {
        console.warn(
          `The generated JSON file ${targetFilename} does not look like a valid JSON: ${err.toString()}`,
        );
      } else {
        throw err;
      }
    }
  }
  const output =
    {} as protos.google.protobuf.compiler.CodeGeneratorResponse.File;
  output.name = targetFilename;
  output.content = processed;
  return output;
}

async function processOneTemplate(
  basePath: string,
  templateFilename: string,
  api: API,
  id: Namer,
) {
  const result: protos.google.protobuf.compiler.CodeGeneratorResponse.File[] =
    [];
  const relativeTemplateName = templateFilename.substr(basePath.length + 1);
  let outputFilename = relativeTemplateName.replace(/\.njk$/, '');

  // Filename can have one or more variables in it that should be substituted
  // with their actual values. Currently supported: $service, $version Note:
  // $version is unique (defined in api.naming), but there can be multiple
  // services.
  outputFilename = outputFilename.replace(/\$version/, api.naming.version);

  // Check to see if the outputFilename matches the snippet index
  // then, build the object we have the proto interface for
  // pass that object into the template as an argument
  if (outputFilename.match(/snippet_metadata/)) {
    const pushFilename = outputFilename
      .replace(/\.njk$/, '')
      .replace(/\$apiNamingProtoPackage/, api.naming.protoPackage);

    const jsonMetadata = await createSnippetIndexMetadata(api, basePath);
    const output =
      {} as protos.google.protobuf.compiler.CodeGeneratorResponse.File;
    output.name = pushFilename;
    output.content = JSON.stringify(jsonMetadata, null, '  ') + '\n';

    result.push(output);
  } else if (outputFilename.match(/\$method/)) {
    for (const service of api.services) {
      for (const method of service.method) {
        const pushFilename = outputFilename
          .replace(/\.njk$/, '')
          .replace(/\$method/, method.name!.toSnakeCase())
          .replace(/\$service/, service.name!.toSnakeCase());

        result.push(
          renderFile(pushFilename, relativeTemplateName, {
            method,
            api,
            commonParameters,
            service,
            id,
          }),
        );
      }
    }
  } else if (outputFilename.match(/\$service/)) {
    for (const service of api.services) {
      // Do not generate tests for deprecated services
      if (
        service.options.deprecated === true &&
        outputFilename.match('test/')
      ) {
        continue;
      }
      result.push(
        renderFile(
          outputFilename.replace(/\$service/, service.name!.toSnakeCase()),
          relativeTemplateName,
          {api, commonParameters, service, id},
        ),
      );
    }
  } else {
    result.push(
      renderFile(outputFilename, relativeTemplateName, {
        api,
        commonParameters,
        id,
      }),
    );
  }

  return result;
}

async function loadNamerPlugin(basePath: string) {
  const namerLocation = path.join(basePath, 'namer.js');
  const id: Namer = {
    register: () => {
      return '';
    },
    get: () => {
      return '';
    },
  };
  if (fs.existsSync(namerLocation)) {
    const namer: Namer = (await import(namerLocation)) as Namer;
    const {register, get} = namer;
    id.register = register;
    id.get = get;
  }

  return id;
}

export async function processTemplates(basePath: string, api: API) {
  nunjucks.configure(basePath);
  basePath = basePath.replace(/\/*$/, '');

  // If this template provides a namer plugin, load it
  const id = await loadNamerPlugin(basePath);

  const templateFiles = await recursiveFileList(basePath, /^(?!_[^_]).*\.njk$/);
  const result: protos.google.protobuf.compiler.CodeGeneratorResponse.File[] =
    [];
  for (const templateFilename of templateFiles) {
    const generatedFiles = await processOneTemplate(
      basePath,
      templateFilename,
      api,
      id,
    );
    result.push(...generatedFiles);
  }
  return result;
}
