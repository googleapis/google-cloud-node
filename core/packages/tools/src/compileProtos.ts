#!/usr/bin/env node

/**
 * Copyright 2020 Google LLC
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

import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import * as pbjs from 'protobufjs-cli/pbjs';
import * as pbts from 'protobufjs-cli/pbts';
import * as crypto from 'crypto';
import {walkUp} from 'walk-up-path';

export const gaxProtos = path.join(
  require.resolve('google-gax'),
  '..',
  '..',
  'protos',
);
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const stat = util.promisify(fs.stat);
const pbjsMain = util.promisify(pbjs.main);
const pbtsMain = util.promisify(pbts.main);

const PROTO_LIST_REGEX = /_proto_list\.json$/;

const apacheLicense = `// Copyright ${new Date().getFullYear()} Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

`;

/**
 * Recursively scans directories starting from `directory` and finds all files
 * matching `PROTO_LIST_REGEX`.
 *
 * @param {string} directory Path to start the scan from.
 * @return {Promise<string[]} Resolves to an array of strings, each element is a full path to a matching file.
 */
async function findProtoJsonFiles(directory: string): Promise<string[]> {
  const result: string[] = [];
  const files = await readdir(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const fileStat = await stat(fullPath);
    if (fileStat.isFile() && file.match(PROTO_LIST_REGEX)) {
      result.push(fullPath);
    } else if (fileStat.isDirectory()) {
      const nested = await findProtoJsonFiles(fullPath);
      result.push(...nested);
    }
  }
  return result;
}

/**
 * Normalizes the Linux path for the current operating system.
 *
 * @param {string} filePath Linux-style path (with forward slashes)
 * @return {string} Normalized path.
 */
function normalizePath(filePath: string): string {
  return path.join(...filePath.split('/'));
}

function getAllEnums(dts: string): Set<string> {
  const result = new Set<string>();
  const lines = dts.split('\n');
  const nestedIds = [];
  let currentEnum = undefined;
  for (const line of lines) {
    const match = line.match(
      /^\s*(?:export )?(namespace|class|interface|enum) (\w+) .*{/,
    );
    if (match) {
      const [, keyword, id] = match;
      nestedIds.push(id);
      if (keyword === 'enum') {
        currentEnum = nestedIds.join('.');
        result.add(currentEnum);
      }
      continue;
    }
    if (line.match(/^\s*}/)) {
      nestedIds.pop();
      currentEnum = undefined;
      continue;
    }
  }

  return result;
}

function updateDtsTypes(dts: string, enums: Set<string>): string {
  const lines = dts.split('\n');
  const result: string[] = [];

  for (const line of lines) {
    let typeName: string | undefined = undefined;
    // Enums can be used in interfaces and in classes.
    // For simplicity, we'll check these two cases independently.
    // encoding?: (google.cloud.speech.v1p1beta1.RecognitionConfig.AudioEncoding|null);
    const interfaceMatch = line.match(/"?\w+"?\?: \(([\w.]+)\|null\);/);
    if (interfaceMatch) {
      typeName = interfaceMatch[1];
    }
    // public encoding: google.cloud.speech.v1p1beta1.RecognitionConfig.AudioEncoding;
    const classMatch = line.match(/public \w+: ([\w.]+);/);
    if (classMatch) {
      typeName = classMatch[1];
    }

    if (line.match(/\(number\|Long(?:\|null)?\)/)) {
      typeName = 'Long';
    }

    let replaced = line;
    if (typeName && enums.has(typeName)) {
      // enum: E => E|keyof typeof E  to allow all string values
      replaced = replaced.replace(
        typeName,
        `${typeName}|keyof typeof ${typeName}`,
      );
    } else if (typeName === 'Uint8Array') {
      // bytes: Uint8Array => Uint8Array|Buffer|string to allow base64-encoded strings
      // and byte field can also come as a Buffer when pbjs uses $util.newBuffer.
      replaced = replaced.replace(typeName, `${typeName}|Buffer|string`);
    } else if (typeName === 'Long') {
      // Longs can be passed as strings :(
      // number|Long => number|Long|string
      replaced = replaced.replace('number|Long', 'number|Long|string');
    }

    // add brackets if we have added a |
    replaced = replaced.replace(/: ([\w.]+\|[ \w.|]+);/, ': ($1);');

    result.push(replaced);
  }

  return result.join('\n');
}

function fixJsFile(js: string): string {
  // 0. fix protobufjs import: we don't want the libraries to
  // depend on protobufjs, so we re-export it from google-gax
  js = js.replace(
    'import * as $protobuf from "protobufjs/minimal"',
    'import {protobufMinimal  as $protobuf} from "google-gax/build/src/protobuf"',
  );

  // 1. fix protobufjs require: we don't want the libraries to
  // depend on protobufjs, so we re-export it from google-gax
  js = js.replace(
    'require("protobufjs/minimal")',
    'require("google-gax/build/src/protobuf").protobufMinimal',
  );

  // 2. add Apache license to the generated .js file
  js = apacheLicense + js;

  // 3. reformat JSDoc reference link in the comments
  js = js.replace(/{@link (.*?)#(.*?)}/g, '{@link $1|$2}');
  return js;
}

function fixDtsFile(dts: string): string {
  // 1. fix for pbts output to make sure we import Long properly
  dts = dts.replace(
    'import * as Long from "long";',
    'import Long = require("long");',
  );
  if (!dts.match(/import Long = require/)) {
    dts = 'import Long = require("long");\n' + dts;
  }

  // 2. fix protobufjs import: we don't want the libraries to
  // depend on protobufjs, so we re-export it from google-gax
  dts = dts.replace(
    'import * as $protobuf from "protobufjs"',
    'import type {protobuf as $protobuf} from "google-gax"',
  );

  // 3. add Apache license to the generated .d.ts file
  dts = apacheLicense + dts;

  // 4. major hack: update types to allow passing strings
  // where enums, longs, or bytes are expected
  const enums = getAllEnums(dts);
  dts = updateDtsTypes(dts, enums);
  return dts;
}

/**
 * Returns a combined list of proto files listed in all JSON files given.
 *
 * @param {string[]} protoJsonFiles List of JSON files to parse
 * @return {Promise<string[]>} Resolves to an array of proto files.
 */
async function buildListOfProtos(
  protoJsonFiles: string[],
  esm?: boolean,
): Promise<string[]> {
  const result: string[] = [];
  for (const file of protoJsonFiles) {
    const directory = path.dirname(file);
    const content = await readFile(file);
    const list = JSON.parse(content.toString()).map((filePath: string) =>
      // If we're in ESM, we're going to be in a directory level below normal
      esm
        ? path.join(directory, '..', normalizePath(filePath))
        : path.join(directory, normalizePath(filePath)),
    );
    result.push(...list);
  }

  return result;
}

interface CompileProtosOptions {
  skipJson?: boolean;
  esm?: boolean;
  keepCase?: boolean;
  forceNumber?: boolean;
}

/**
 * Runs `pbjs` to compile the given proto files, placing the result into
 * `./protos/protos.json`. No support for changing output filename for now
 * (but it's a TODO!)
 *
 * @param {string} rootName Name of the root object for pbjs static module (-r option)
 * @param {string[]} protos List of proto files to compile.
 */
async function compileProtos(
  rootName: string,
  protos: string[],
  options: CompileProtosOptions,
): Promise<void> {
  const extraArgs = [];
  if (options.keepCase) {
    extraArgs.push('--keep-case');
  }
  if (options.forceNumber) {
    extraArgs.push('--force-number');
  }
  if (!options.skipJson) {
    // generate protos.json file from proto list
    const jsonOutput = path.join('protos', 'protos.json');
    if (protos.length === 0) {
      // no input file, just emit an empty object
      await writeFile(jsonOutput, '{}');
      return;
    }
    const pbjsArgs4JSON = [
      '--target',
      'json',
      ...extraArgs,
      '-p',
      'protos',
      '-p',
      gaxProtos,
      '-o',
      jsonOutput,
    ];
    pbjsArgs4JSON.push(...protos);
    await pbjsMain(pbjsArgs4JSON);
  }

  // generate protos/protos.js from protos.json
  const jsOutput = options.esm
    ? path.join('protos', 'protos.cjs')
    : path.join('protos', 'protos.js');
  const pbjsArgs4js = [
    '-r',
    rootName,
    '--target',
    'static-module',
    ...extraArgs,
    '-p',
    'protos',
    '-p',
    gaxProtos,
    '-o',
    jsOutput,
  ];
  pbjsArgs4js.push(...protos);
  await pbjsMain(pbjsArgs4js);

  let jsResult = (await readFile(jsOutput)).toString();
  jsResult = fixJsFile(jsResult);
  await writeFile(jsOutput, jsResult);

  let jsOutputEsm;
  if (options.esm) {
    jsOutputEsm = path.join('protos', 'protos.js');
    const pbjsArgs4jsEsm = [
      '-r',
      rootName,
      '--target',
      'static-module',
      ...extraArgs,
      '-p',
      'protos',
      '-p',
      gaxProtos,
      '-o',
      jsOutputEsm,
      '-w',
      'es6',
    ];
    pbjsArgs4jsEsm.push(...protos);
    await pbjsMain(pbjsArgs4jsEsm);

    let jsResult = (await readFile(jsOutputEsm)).toString();
    jsResult = fixJsFile(jsResult);
    await writeFile(jsOutputEsm, jsResult);
  }

  // generate protos/protos.d.ts
  const tsOutput = path.join('protos', 'protos.d.ts');
  const pbjsArgs4ts = [options.esm ? jsOutputEsm! : jsOutput, '-o', tsOutput];
  await pbtsMain(pbjsArgs4ts);

  let tsResult = (await readFile(tsOutput)).toString();
  tsResult = fixDtsFile(tsResult);
  await writeFile(tsOutput, tsResult);
}

/**
 *
 * @param directories List of directories to process. Normally, just the
 * `./src` folder of the given client library.
 * @return {Promise<string>} Resolves to a unique name for protobuf root to use in the JS static module, or a hashed id.
 */
export async function generateRootName(directories: string[]): Promise<string> {
  // We need to provide `-r root` option to `pbjs -t static-module`, otherwise
  // we'll have big problems if two different libraries are used together.
  // It's OK to play some guessing game here: if we locate `package.json`
  // with a package name, we'll use it; otherwise, we'll fallback to a hashed id.
  for (const directory of directories) {
    for (const p of walkUp(path.resolve(directory, '..'))) {
      const packageJson = path.join(p, 'package.json');
      if (fs.existsSync(packageJson)) {
        const json = JSON.parse((await readFile(packageJson)).toString()) as {
          name: string;
        };
        const name = json.name.replace(/[^\w\d]/g, '_');
        const hopefullyUniqueName = `${name}_protos`;
        return hopefullyUniqueName;
      }
    }
  }
  const sha1 = crypto.createHash('sha1');
  sha1.update(directories.join(','));
  return `default_${sha1.digest('hex').slice(0, 8)}`;
}

/**
 * Main function. Takes an array of directories to process.
 * Looks for JSON files matching `PROTO_LIST_REGEX`, parses them to get a list of all
 * proto files used by the client library, and calls `pbjs` to compile them all into
 * JSON (`pbjs -t json`).
 *
 * Exported to be called from a test.
 *
 * @param {string[]} directories List of directories to process. Normally, just the
 * `./src` folder of the given client library.
 */
export async function main(parameters: string[]): Promise<void> {
  const protoJsonFiles: string[] = [];
  let skipJson = false;
  let esm = false;
  let keepCase = false;
  let forceNumber = false;
  const directories: string[] = [];
  for (const parameter of parameters) {
    if (parameter === '--skip-json') {
      skipJson = true;
      continue;
    }
    if (parameter === '--esm') {
      esm = true;
      continue;
    }
    if (parameter === '--keep-case') {
      keepCase = true;
      continue;
    }
    if (parameter === '--force-number') {
      forceNumber = true;
      continue;
    }
    // it's not an option so it's a directory
    const directory = parameter;
    directories.push(directory);
    protoJsonFiles.push(...(await findProtoJsonFiles(directory)));
  }
  const rootName = await generateRootName(directories);
  if (esm) {
    const esmProtos = await buildListOfProtos(protoJsonFiles, esm);
    await compileProtos(rootName, esmProtos, {
      skipJson,
      esm,
      keepCase,
      forceNumber,
    });
  }
  const protos = await buildListOfProtos(protoJsonFiles, esm);
  await compileProtos(rootName, protos, {skipJson, esm, keepCase, forceNumber});
}

/**
 * Shows the usage information.
 */
function usage() {
  console.log(
    `Usage: node ${process.argv[1]} [--skip-json] [--esm] directory ...`,
  );
  console.log(
    `Finds all files matching ${PROTO_LIST_REGEX} in the given directories.`,
  );
  console.log(
    'Each of those files should contain a JSON array of proto files used by the',
  );
  console.log(
    'client library. Those proto files will be compiled to JSON using pbjs tool',
  );
  console.log('from protobufjs.');
}

if (require.main === module) {
  if (process.argv.length <= 2) {
    usage();
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }
  // argv[0] is node.js binary, argv[1] is script path
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  main(process.argv.slice(2));
}
