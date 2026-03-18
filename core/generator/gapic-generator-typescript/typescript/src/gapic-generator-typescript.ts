#!/usr/bin/env node

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

import {execFile} from 'child_process';
import {createRequire} from 'module';
import * as path from 'path';
import yargs from 'yargs';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as url from 'url';
import {promisify} from 'util';

const execFileAsync = promisify(execFile);

// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/#help-im-missing-dirname
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

async function main(processArgv: string[]) {
  // https://stackoverflow.com/questions/54977743/do-require-resolve-for-es-modules
  const require = createRequire(import.meta.url);
  const googleGaxPath = path.dirname(
    require.resolve('google-gax/build/src/index.js'),
  ); // ...../google-gax/build/src

  const googleGaxProtosDir = path.join(
    googleGaxPath,
    '..',
    '..',
    'build',
    'protos',
  );
  const allTemplates = await fsp.readdir(
    path.join(__dirname, '..', '..', 'templates'),
  );

  // If we're built with bazel, we'll have a shell wrapper to be used as a protoc plugin.
  // Just in case if someone builds us without bazel, let's have a fallback to an actual
  // JS protoc plugin without a wrapper.
  const protocPluginBash = path.join(__dirname, '..', 'protoc_plugin.sh');
  const protocPlugin = fs.existsSync(protocPluginBash)
    ? protocPluginBash
    : path.join(__dirname, 'protoc-plugin.js');

  const argv = await yargs(processArgv)
    .array('I')
    .nargs('I', 1)
    .alias('proto_path', 'I')
    .alias('proto-path', 'I')
    .demandOption('output_dir')
    .describe('I', 'Include directory to pass to protoc')
    .alias('output-dir', 'output_dir')
    .describe(
      'gapic-validator_out',
      'Path to the output of the gapic validator',
    )
    .alias('gapic-validator_out', 'gapic_validator_out')
    .describe(
      'validation',
      'Option to set the validation of proto files, default value is true',
    )
    .describe('output_dir', 'Path to a directory for the generated code')
    .alias('grpc-service-config', 'grpc_service_config')
    .describe('grpc-service-config', 'Path to gRPC service config JSON')
    .alias('bundle-config', 'bundle_config')
    .describe('bundle-config', 'Path to bundle request config JSON')
    .alias('service-yaml', 'service_yaml')
    .describe('service-yaml', 'Path to service yaml')
    .alias('package-name', 'package_name')
    .describe('package-name', 'Publish package name')
    .alias('main-service', 'main_service')
    .describe(
      'main_service',
      'Main service name (if the package has multiple services, this one will be used for Webpack bundle name)',
    )
    .alias('common-proto-path', 'common_protos_path')
    .describe(
      'common_proto_path',
      'Path to API common protos to use (if unset, will use protos shipped with google-gax)',
    )
    .describe(
      'template',
      `Semicolon-separated list of templates to use. Allowed values: "${allTemplates.join(
        ';',
      )}"`,
    )
    .describe(
      'metadata',
      'Set to true if GAPIC metadata generation is requested',
    )
    .boolean('metadata')
    .describe(
      'transport',
      'Default transport is gRPC. Set transport=rest for gRPC or non-gRPC API requires REST transport with http annotation in proto3 files.',
    )
    .describe(
      'format',
      'Default format is cjs. Semicolon-separated list of formats, i.e., format=cjs;esm or just format=esm to produce in dual format.',
    )
    .describe(
      'diregapic',
      'DIREGAPIC represents Discovery Rest GAPICs. Set to true for GCE API or non-gRPC APIs with a Discovery doc description.',
    )
    .describe(
      'handwritten_layer',
      'Set to true if the library has a handwritten layer over GAPIC layer.',
    )
    .describe(
      'legacy_proto_load',
      'Load protos from *.proto directly at runtime, without compiling a proto JSON file. May speed up loading huge proto trees. Disables all fallback modes.',
    )
    .boolean('legacy-proto-load')
    .alias('legacy-proto-load', 'legacy_proto_load')
    .describe(
      'rest_numeric_enums',
      'The generated library will pass and accept enum values as numbers when using the HTTP/1.1 REST transport.',
    )
    .boolean('rest-numeric-enums')
    .alias('rest-numeric-enums', 'rest_numeric_enums')
    .describe(
      'mixins',
      'Override the list of mixins to use. Semicolon-separated list of API names to mixin, e.g. google.longrunning.Operations. Use "none" to disable all mixins.',
    )
    .string('mixins')
    .describe('protoc', 'Path to protoc binary')
    .usage('Usage: $0 -I /path/to/googleapis')
    .usage('  --output_dir /path/to/output_directory')
    .usage('  google/example/api/v1/api.proto').argv;

  const outputDir = argv.outputDir as string;
  const grpcServiceConfig = argv.grpcServiceConfig as string | undefined;
  const bundleConfig = argv.bundleConfig as string | undefined;
  const serviceYaml = argv.serviceYaml as string | undefined;
  const packageName = argv.packageName as string | undefined;
  const mainServiceName = argv.mainService as string | undefined;
  const template = argv.template as string | undefined;
  const gapicValidatorOut = argv.gapicValidatorOut as string | undefined;
  const validation = (argv.validation as string | undefined) ?? 'true';
  const metadata = argv.metadata as boolean | undefined;
  const transport = argv.transport as string | undefined;
  const format = argv.format as string | string[] | undefined;
  const diregapic = argv.diregapic as boolean | undefined;
  const handwrittenLayer = argv.handwrittenLayer as boolean | undefined;
  const legacyProtoLoad = argv.legacyProtoLoad as boolean | undefined;
  const restNumericEnums = argv.restNumericEnums as boolean | undefined;
  const mixins = argv.mixins as string | undefined;

  // --protoc can be taken from environment or from the command line
  let protocParameter = argv.protoc as string | string[] | undefined;
  const protocEnv = process.env['PROTOC_PATH'];
  if (Array.isArray(protocParameter)) {
    protocParameter = protocParameter[protocParameter.length - 1];
  }
  const protoc = protocParameter ?? protocEnv ?? 'protoc';
  if (!fs.existsSync(protoc)) {
    throw new Error(
      `ERROR: protoc binary is not found at ${protoc}, use --protoc option to point to your protoc binary`,
    );
  }

  const protoDirs: string[] = [];
  if (argv.I) {
    protoDirs.push(...(argv.I as string[]));
  }
  const protoDirsArg = protoDirs.map(dir => `-I${dir}`);

  const protoFiles: string[] = [];
  if (Array.isArray(argv._)) {
    protoFiles.push(...(argv._ as string[]));
  } else {
    protoFiles.push(argv._ as string);
  }

  const commonProtoPath = argv.commonProtoPath || googleGaxProtosDir;

  // run protoc command to generate client library
  const protocCommand = [
    `--plugin=protoc-gen-typescript_gapic=${protocPlugin}`,
    `--typescript_gapic_out=${outputDir}`,
  ];
  if (gapicValidatorOut && validation === 'true') {
    protocCommand.push(`--gapic-validator_out=${gapicValidatorOut}`);
  }
  if (grpcServiceConfig) {
    protocCommand.push(
      `--typescript_gapic_opt="grpc-service-config=${grpcServiceConfig}"`,
    );
  }
  if (bundleConfig) {
    protocCommand.push(
      `--typescript_gapic_opt="bundle-config=${bundleConfig}"`,
    );
  }
  if (serviceYaml) {
    protocCommand.push(`--typescript_gapic_opt="service-yaml=${serviceYaml}"`);
  }
  if (packageName) {
    protocCommand.push(`--typescript_gapic_opt="package-name=${packageName}"`);
  }
  if (mainServiceName) {
    protocCommand.push(
      `--typescript_gapic_opt="main-service=${mainServiceName}"`,
    );
  }
  if (template) {
    protocCommand.push(`--typescript_gapic_opt="template=${template}"`);
  }
  if (metadata) {
    protocCommand.push('--typescript_gapic_opt="metadata"');
  }
  if (diregapic) {
    protocCommand.push('--typescript_gapic_opt="diregapic"');
  }
  if (handwrittenLayer) {
    protocCommand.push('--typescript_gapic_opt="handwritten-layer"');
  }
  if (transport && transport === 'rest') {
    protocCommand.push('--typescript_gapic_opt="transport=rest"');
  }
  if (format) {
    protocCommand.push(`--typescript_gapic_opt="format=${format}"`);
  }
  if (legacyProtoLoad) {
    protocCommand.push('--typescript_gapic_opt="legacy-proto-load"');
  }
  if (restNumericEnums) {
    protocCommand.push('--typescript_gapic_opt="rest-numeric-enums"');
  }
  if (mixins) {
    protocCommand.push(`--typescript_gapic_opt="mixins=${mixins}"`);
  }
  protocCommand.push(...protoDirsArg);
  protocCommand.push(...protoFiles);
  protocCommand.push(`-I${commonProtoPath}`);

  try {
    const {stdout, stderr} = await execFileAsync(protoc, protocCommand);
    console.log(stdout);
    console.warn(stderr);
  } catch (e: any) {
    console.error(e.stderr);
    throw e;
  }

  // create protos folder to copy proto file
  const copyProtoDir = path.join(outputDir, 'protos');
  if (!fs.existsSync(copyProtoDir)) {
    fs.mkdirSync(copyProtoDir);
  }
  // copy proto file to generated folder
  const protoList = path.join(outputDir, 'proto.list');
  const protoFilesSet = new Set(protoFiles);
  const protoListContent = (await fsp.readFile(protoList)).toString();
  const protoListLines = protoListContent.split('\n');
  for (const proto of protoListLines) {
    for (const dir of protoDirs) {
      const protoFile = path.join(dir, proto);
      if (
        (protoFilesSet.has(protoFile) ||
          !fs.existsSync(path.join(googleGaxProtosDir, proto))) &&
        fs.existsSync(protoFile)
      ) {
        const destination = path.join(copyProtoDir, proto);
        await fsp.cp(protoFile, destination, {recursive: true});
      }
    }
  }
  await fsp.unlink(protoList);
}

main(process.argv.slice(2)).catch(err => {
  throw err;
});
