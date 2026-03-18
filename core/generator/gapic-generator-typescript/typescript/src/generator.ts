// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';
import * as yaml from 'js-yaml';
import * as serializer from 'proto3-json-serializer';
import protobuf from 'protobufjs';
import type * as protos from '../../protos/index.js';
import protoJson from '../../protos/protos.json' assert {type: 'json'};
import * as url from 'url';
import {API} from './schema/api.js';
import {processTemplates} from './templater.js';
import {BundleConfigClient, BundleConfig} from './bundle.js';
import {ServiceYaml} from './serviceyaml.js';
import {commonPrefix} from './util.js';

// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/#help-im-missing-dirname
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

function getStdin() {
  return new Promise<Buffer>(resolve => {
    const buffers: Buffer[] = [];
    process.stdin.on('readable', () => {
      let chunk: Buffer;
      while (null !== (chunk = process.stdin.read())) {
        buffers.push(chunk);
      }
    });
    process.stdin.on('end', () => {
      resolve(Buffer.concat(buffers));
    });
  });
}

export interface OptionsMap {
  [name: string]: string;
}
const readFile = util.promisify(fs.readFile);

// support both run from Bazel and without it
const templatesDirectory = fs.existsSync(
  '../../gapic_generator_typescript/templates',
)
  ? '../../gapic_generator_typescript/templates'
  : path.join(__dirname, '..', '..', 'templates');
const defaultTemplates = [
  'typescript_gapic',
  'typescript_packing_test',
  'typescript_samples',
];
const metadataTemplate = 'typescript_gapic_metadata';

export class Generator {
  request: protos.google.protobuf.compiler.CodeGeneratorRequest;
  response: protos.google.protobuf.compiler.CodeGeneratorResponse;
  grpcServiceConfig: protos.grpc.service_config.ServiceConfig;
  bundleConfigs: BundleConfig[] = [];
  paramMap: OptionsMap;
  // This field is for users passing proper publish package name like @google-cloud/text-to-speech.
  publishName?: string;
  // For historical reasons, Webpack library name matches "the main" service of the client library.
  // Sometimes it's hard to figure out automatically, so making this an option.
  mainServiceName?: string;
  // This is for services using mixin services (e.g. google.iam.v1.Policy).
  // As long as the mixin service is defined under 'apis' in the service yaml file, the generator will include it in the client library.
  serviceYaml?: ServiceYaml;
  handwrittenLayer?: boolean;
  templates: string[];
  metadata?: boolean;
  rest?: boolean;
  diregapic?: boolean;
  legacyProtoLoad?: boolean;
  restNumericEnums?: boolean;
  mixinsOverride?: string[];
  format?: string | string[];

  private root: protobuf.Root;

  constructor() {
    this.root = protobuf.Root.fromJSON(protoJson);
    this.request = {} as protos.google.protobuf.compiler.CodeGeneratorRequest;
    this.response = {} as protos.google.protobuf.compiler.CodeGeneratorResponse;
    this.grpcServiceConfig = {} as protos.grpc.service_config.ServiceConfig;
    this.paramMap = {};
    this.templates = defaultTemplates;
  }

  private getParamMap(parameter: string) {
    // Example: "grpc-service-config=path/to/grpc-service-config.json","package-name=packageName"
    const parameters = parameter.split(',');
    for (let param of parameters) {
      // remove double quote
      if (param[0] === '"' && param[param.length - 1] === '"') {
        param = param.substring(1, param.length - 1);
      }
      const arr = param.split('=');
      if (arr.length === 1) {
        arr.push('true'); // "param" with no value gets converted to "param=true"
      }
      this.paramMap[arr[0].toKebabCase()] = arr[1];
    }
  }

  private async readGrpcServiceConfig() {
    if (this.paramMap?.['grpc-service-config']) {
      const filename = this.paramMap['grpc-service-config'];
      if (!fs.existsSync(filename)) {
        throw new Error(`ERROR: File ${filename} cannot be opened.`);
      }
      const content = await readFile(filename);
      const json = JSON.parse(content.toString());
      const ServiceConfig = this.root.lookupType('ServiceConfig');
      if (!ServiceConfig) {
        throw new Error(
          'INTERNAL ERROR: Cannot find ServiceConfig type in proto JSON',
        );
      }
      const deserialized = serializer.fromProto3JSON(ServiceConfig, json);
      if (!deserialized) {
        throw new Error(
          'ERROR: Cannot parse the content of gRPC service config',
        );
      }
      this.grpcServiceConfig = ServiceConfig.toObject(
        deserialized,
      ) as protos.grpc.service_config.ServiceConfig;
    }
  }

  private readBundleConfig() {
    if (this.paramMap?.['bundle-config']) {
      const filename = this.paramMap['bundle-config'];
      if (!fs.existsSync(filename)) {
        throw new Error(`ERROR: File ${filename} cannot be opened.`);
      }
      const content = fs.readFileSync(filename, 'utf8');
      const info = yaml.load(content);
      this.bundleConfigs = new BundleConfigClient().fromObject(info);
    }
  }

  // This method determines if there are any APIs listed in the service yaml file.
  // If there are APIs listed, then it filters for the supported mixin services (IAMPolicy, Locations, Operations).
  private readServiceYaml() {
    if (this.paramMap?.['service-yaml']) {
      const filename = this.paramMap['service-yaml'];
      if (!fs.existsSync(filename)) {
        throw new Error(`ERROR: File ${filename} cannot be opened.`);
      }
      const content = fs.readFileSync(filename, 'utf8');
      const info = yaml.load(content) as ServiceYaml;
      this.serviceYaml = info;
      const serviceMixins = [];
      for (let i = 0; i < info.apis?.length || 0; i++) {
        const api = info.apis[i];
        for (const [, value] of Object.entries(api)) {
          serviceMixins.push(value);
        }
      }
      this.serviceYaml.apis = serviceMixins;
    }
    // override if needed
    if (this.mixinsOverride !== undefined) {
      if (!this.serviceYaml) {
        this.serviceYaml = {title: '', apis: [], http: {rules: []}};
      }
      this.serviceYaml.apis =
        this.mixinsOverride.length === 1 && this.mixinsOverride[0] === 'none'
          ? []
          : this.mixinsOverride.filter(m => m !== 'none');
    }
  }

  private readPublishPackageName() {
    this.publishName = this.paramMap['package-name'];
  }

  private readMainServiceName() {
    this.mainServiceName = this.paramMap['main-service'];
  }

  private readTemplates() {
    if (this.paramMap['template']) {
      this.templates = this.paramMap['template'].split(';');
    }

    if (this.paramMap['metadata'] === 'true') {
      this.templates.push(metadataTemplate);
    }
  }

  private readRest() {
    if (this.paramMap['transport'] === 'rest') {
      this.rest = true;
    }
  }

  private readDiregapic() {
    if (this.paramMap['diregapic'] === 'true') {
      this.diregapic = true;
      this.rest = true;
    }
  }

  private readHandwrittenLayer() {
    if (this.paramMap['handwritten-layer'] === 'true') {
      this.handwrittenLayer = true;
    }
  }

  private readFormat() {
    if (this.paramMap['format']) {
      this.format = this.paramMap['format'].split(';');
    }
  }

  private readLegacyProtoLoad() {
    if (this.paramMap['legacy-proto-load'] === 'true') {
      this.legacyProtoLoad = true;
    }
  }

  private readRestNumericEnums() {
    if (this.paramMap['rest-numeric-enums'] === 'true') {
      this.restNumericEnums = true;
    }
  }

  private readMixins() {
    if (this.paramMap['mixins']) {
      this.mixinsOverride = this.paramMap['mixins'].split(';');
    }
  }

  async initializeFromStdin() {
    const inputBuffer = await getStdin();
    const CodeGeneratorRequest = this.root.lookupType('CodeGeneratorRequest');
    if (!CodeGeneratorRequest) {
      throw new Error(
        'INTERNAL ERROR: Cannot find CodeGeneratorRequest type in proto JSON',
      );
    }
    this.request = CodeGeneratorRequest.toObject(
      CodeGeneratorRequest.decode(inputBuffer),
    ) as protos.google.protobuf.compiler.CodeGeneratorRequest;
    if (!this.request.protoFile) {
      throw new Error('ERROR: No input files given to the protoc plugin.');
    }
    if (this.request.parameter) {
      this.getParamMap(this.request.parameter);
      await this.readGrpcServiceConfig();
      this.readBundleConfig();
      this.readMixins();
      this.readServiceYaml();
      this.readPublishPackageName();
      this.readMainServiceName();
      this.readTemplates();
      this.readRest();
      this.readDiregapic();
      this.readHandwrittenLayer();
      this.readLegacyProtoLoad();
      this.readRestNumericEnums();
      this.readFormat();
    }
  }

  private addProtosToResponse() {
    const protoFilenames: string[] = [];
    for (const proto of this.request.protoFile) {
      if (proto.name) {
        protoFilenames.push(proto.name);
      }
    }
    const File = this.root.lookupType('File');
    if (!File) {
      throw new Error('INTERNAL ERROR: Cannot find File type in proto JSON');
    }
    const protoList =
      {} as protos.google.protobuf.compiler.CodeGeneratorResponse.File;
    protoList.name = 'proto.list';
    protoList.content = protoFilenames.join('\n') + '\n';
    this.response.file.push(protoList);
  }

  private buildAPIObject(): API {
    const protoPackagesToGenerate = new Set<string>();

    const fdsWithServicesToGenerate: protos.google.protobuf.IFileDescriptorProto[] =
      [];
    for (const fd of this.request.protoFile) {
      if (
        this.request.fileToGenerate.includes(fd.name!) &&
        fd.service &&
        fd.service.length > 0
      ) {
        fdsWithServicesToGenerate.push(fd);
      }
    }
    const withoutIgnored = API.filterOutIgnoredServices(
      fdsWithServicesToGenerate,
    );
    for (const fd of withoutIgnored) {
      protoPackagesToGenerate.add(fd.package || '');
    }
    const packageNamesToGenerate = Array.from(protoPackagesToGenerate);
    const packageName = commonPrefix(packageNamesToGenerate).replace(/\.$/, '');
    if (packageName === '') {
      throw new Error(
        'ERROR: Protos do not define any service, client library cannot be generated.',
      );
    }
    const api = new API(this.request.protoFile, packageName, {
      grpcServiceConfig: this.grpcServiceConfig,
      bundleConfigs: this.bundleConfigs,
      publishName: this.publishName,
      mainServiceName: this.mainServiceName,
      serviceYaml: this.serviceYaml,
      rest: this.rest,
      diregapic: this.diregapic,
      handwrittenLayer: this.handwrittenLayer,
      legacyProtoLoad: this.legacyProtoLoad,
      restNumericEnums: this.restNumericEnums,
      mixinsOverridden: this.mixinsOverride !== undefined,
    });
    return api;
  }

  async processTemplates(api: API) {
    for (const template of this.templates) {
      let location = path.join(templatesDirectory, 'cjs', template);
      if (
        this.format &&
        (this.format === 'esm' || this.format.includes('esm'))
      ) {
        location = path.join(templatesDirectory, 'esm', template);
      }
      if (!fs.existsSync(location)) {
        throw new Error(`Template directory ${location} does not exist.`);
      }
      const fileList = await processTemplates(location, api);
      this.response.file.push(...fileList);
    }
  }

  async generate() {
    const CodeGeneratorResponse = this.root.lookupType('CodeGeneratorResponse');
    if (!CodeGeneratorResponse) {
      throw new Error('Cannot find CodeGeneratorResponse type in proto JSON');
    }
    const Edition = this.root.lookupEnum('Edition');
    if (!Edition) {
      throw new Error('Cannot find Edition type in proto JSON');
    }
    this.response = {} as protos.google.protobuf.compiler.CodeGeneratorResponse;
    this.response.supportedFeatures = 3; // FEATURE_PROTO3_OPTIONAL | FEATURE_SUPPORTS_EDITIONS
    this.response.minimumEdition = Edition.values['EDITION_PROTO2'];
    this.response.maximumEdition = Edition.values['EDITION_2023'];
    this.response.file = [];

    try {
      this.addProtosToResponse();
      const api = this.buildAPIObject();
      await this.processTemplates(api);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err) {
      if (err instanceof Error) {
        this.response.error = err.message;
      } else {
        throw err;
      }
    }

    const outputBuffer = CodeGeneratorResponse.encode(
      CodeGeneratorResponse.fromObject(this.response),
    ).finish();
    process.stdout.write(outputBuffer);
  }
}
