// Copyright 2026 Google LLC
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

import assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {Generator} from '../../src/generator.js';
import type {API} from '../../src/schema/api.js';
import type * as protos from '../../../protos/index.js';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

interface TestGenerator {
  getParamMap(parameter: string): void;
  readGrpcServiceConfig(): Promise<void>;
  readBundleConfig(): void;
  readServiceYaml(): void;
  readPublishPackageName(): void;
  readMainServiceName(): void;
  readTemplates(): void;
  readRest(): void;
  readDiregapic(): void;
  readHandwrittenLayer(): void;
  readFormat(): void;
  readEnableTelemetryTracing(): void;
  readLegacyProtoLoad(): void;
  readRestNumericEnums(): void;
  readMixins(): void;
  addProtosToResponse(): void;
  buildAPIObject(): API;
}

describe('src/generator.ts', () => {
  let generator: Generator;

  beforeEach(() => {
    generator = new Generator();
  });

  function getTestGenerator(gen: Generator): TestGenerator {
    return gen as unknown as TestGenerator;
  }

  it('should initialize with default values', () => {
    assert.deepStrictEqual(generator.request, {});
    assert.deepStrictEqual(generator.response, {});
    assert.deepStrictEqual(generator.grpcServiceConfig, {});
    assert.deepStrictEqual(generator.paramMap, {});
    assert.deepStrictEqual(generator.templates, [
      'typescript_gapic',
      'typescript_packing_test',
      'typescript_samples',
    ]);
  });

  describe('parameter parsing', () => {
    it('should parse parameter options string', () => {
      getTestGenerator(generator).getParamMap(
        'package-name=@google-cloud/test,transport=rest,diregapic=true',
      );
      assert.strictEqual(
        generator.paramMap['package-name'],
        '@google-cloud/test',
      );
      assert.strictEqual(generator.paramMap['transport'], 'rest');
      assert.strictEqual(generator.paramMap['diregapic'], 'true');
    });

    it('should handle parameter without explicit value', () => {
      getTestGenerator(generator).getParamMap('handwritten-layer');
      assert.strictEqual(generator.paramMap['handwritten-layer'], 'true');
    });

    it('should handle quoted parameters', () => {
      getTestGenerator(generator).getParamMap('"main-service=TestService"');
      assert.strictEqual(generator.paramMap['main-service'], 'TestService');
    });

    it('should convert parameter keys to kebab-case', () => {
      getTestGenerator(generator).getParamMap(
        'main_service=TestService,legacy_proto_load=true',
      );
      assert.strictEqual(generator.paramMap['main-service'], 'TestService');
      assert.strictEqual(generator.paramMap['legacy-proto-load'], 'true');
    });
  });

  describe('option readers', () => {
    it('should read publish package name', () => {
      generator.paramMap['package-name'] = '@google-cloud/speech';
      getTestGenerator(generator).readPublishPackageName();
      assert.strictEqual(generator.publishName, '@google-cloud/speech');
    });

    it('should read main service name', () => {
      generator.paramMap['main-service'] = 'Speech';
      getTestGenerator(generator).readMainServiceName();
      assert.strictEqual(generator.mainServiceName, 'Speech');
    });

    it('should read custom templates and metadata flag', () => {
      generator.paramMap['template'] = 'custom_template_1;custom_template_2';
      generator.paramMap['metadata'] = 'true';
      getTestGenerator(generator).readTemplates();
      assert.deepStrictEqual(generator.templates, [
        'custom_template_1',
        'custom_template_2',
        'typescript_gapic_metadata',
      ]);
    });

    it('should read transport rest option', () => {
      generator.paramMap['transport'] = 'rest';
      getTestGenerator(generator).readRest();
      assert.strictEqual(generator.rest, true);
    });

    it('should read diregapic option', () => {
      generator.paramMap['diregapic'] = 'true';
      getTestGenerator(generator).readDiregapic();
      assert.strictEqual(generator.diregapic, true);
      assert.strictEqual(generator.rest, true);
    });

    it('should read handwritten-layer option', () => {
      generator.paramMap['handwritten-layer'] = 'true';
      getTestGenerator(generator).readHandwrittenLayer();
      assert.strictEqual(generator.handwrittenLayer, true);
    });

    it('should read format option', () => {
      generator.paramMap['format'] = 'esm;cjs';
      getTestGenerator(generator).readFormat();
      assert.deepStrictEqual(generator.format, ['esm', 'cjs']);
    });

    it('should read telemetry tracing option', () => {
      generator.paramMap['enable-telemetry-tracing'] = 'true';
      getTestGenerator(generator).readEnableTelemetryTracing();
      assert.strictEqual(generator.enableTelemetryTracing, true);
    });

    it('should read legacy proto load option', () => {
      generator.paramMap['legacy-proto-load'] = 'true';
      getTestGenerator(generator).readLegacyProtoLoad();
      assert.strictEqual(generator.legacyProtoLoad, true);
    });

    it('should read rest numeric enums option', () => {
      generator.paramMap['rest-numeric-enums'] = 'true';
      getTestGenerator(generator).readRestNumericEnums();
      assert.strictEqual(generator.restNumericEnums, true);
    });

    it('should read mixins option', () => {
      generator.paramMap['mixins'] =
        'google.iam.v1.IAMPolicy;google.longrunning.Operations';
      getTestGenerator(generator).readMixins();
      assert.deepStrictEqual(generator.mixinsOverride, [
        'google.iam.v1.IAMPolicy',
        'google.longrunning.Operations',
      ]);
    });
  });

  describe('file configurations', () => {
    const tmpDir = path.join(os.tmpdir(), 'generator-test-' + Date.now());

    beforeEach(() => {
      fs.mkdirSync(tmpDir, {recursive: true});
    });

    afterEach(() => {
      fs.rmSync(tmpDir, {recursive: true, force: true});
    });

    it('should throw when gRPC service config file does not exist', async () => {
      generator.paramMap['grpc-service-config'] = path.join(
        tmpDir,
        'nonexistent.json',
      );
      await assert.rejects(async () => {
        await getTestGenerator(generator).readGrpcServiceConfig();
      }, /ERROR: File .* cannot be opened\./);
    });

    it('should read valid gRPC service config file', async () => {
      const grpcConfigPath = path.join(tmpDir, 'grpc_service_config.json');
      fs.writeFileSync(
        grpcConfigPath,
        JSON.stringify({
          methodConfig: [
            {
              name: [{service: 'google.test.v1.TestService'}],
              timeout: '60s',
            },
          ],
        }),
      );
      generator.paramMap['grpc-service-config'] = grpcConfigPath;
      await getTestGenerator(generator).readGrpcServiceConfig();
      assert.ok(generator.grpcServiceConfig.methodConfig);
      assert.strictEqual(generator.grpcServiceConfig.methodConfig.length, 1);
    });

    it('should throw when bundle config file does not exist', () => {
      generator.paramMap['bundle-config'] = path.join(
        tmpDir,
        'nonexistent.yaml',
      );
      assert.throws(() => {
        getTestGenerator(generator).readBundleConfig();
      }, /ERROR: File .* cannot be opened\./);
    });

    it('should throw when service yaml file does not exist', () => {
      generator.paramMap['service-yaml'] = path.join(
        tmpDir,
        'nonexistent.yaml',
      );
      assert.throws(() => {
        getTestGenerator(generator).readServiceYaml();
      }, /ERROR: File .* cannot be opened\./);
    });

    it('should read valid service yaml file', () => {
      const serviceYamlPath = path.join(tmpDir, 'service.yaml');
      fs.writeFileSync(
        serviceYamlPath,
        `title: Test Service
apis:
  - name: google.iam.v1.IAMPolicy
  - name: google.longrunning.Operations
`,
      );
      generator.paramMap['service-yaml'] = serviceYamlPath;
      getTestGenerator(generator).readServiceYaml();
      assert.strictEqual(generator.serviceYaml?.title, 'Test Service');
      assert.deepStrictEqual(generator.serviceYaml?.apis, [
        'google.iam.v1.IAMPolicy',
        'google.longrunning.Operations',
      ]);
    });

    it('should override mixins when mixinsOverride is set', () => {
      generator.mixinsOverride = ['google.iam.v1.IAMPolicy'];
      getTestGenerator(generator).readServiceYaml();
      assert.deepStrictEqual(generator.serviceYaml?.apis, [
        'google.iam.v1.IAMPolicy',
      ]);

      generator.mixinsOverride = ['none'];
      getTestGenerator(generator).readServiceYaml();
      assert.deepStrictEqual(generator.serviceYaml?.apis, []);
    });

    it('should read valid bundle config file', () => {
      const bundleConfigPath = path.join(tmpDir, 'bundle.yaml');
      fs.writeFileSync(
        bundleConfigPath,
        `interfaces:
  - name: google.test.v1.TestService
    methods:
      - name: ListItems
        batching:
          thresholds:
            element_count_threshold: 10
            request_byte_threshold: 100
            delay_threshold_millis: 1000
          batch_descriptor:
            batched_field: items
            discriminator_fields:
              - parent
            subresponse_field: items
`,
      );
      generator.paramMap['bundle-config'] = bundleConfigPath;
      getTestGenerator(generator).readBundleConfig();
      assert.strictEqual(generator.bundleConfigs.length, 1);
      assert.strictEqual(generator.bundleConfigs[0].serviceName, 'TestService');
      assert.strictEqual(generator.bundleConfigs[0].methodName, 'ListItems');
    });
  });

  describe('addProtosToResponse', () => {
    it('should populate response with proto.list file', () => {
      generator.request = {
        protoFile: [
          {name: 'google/cloud/test/v1/test.proto'},
          {name: 'google/cloud/test/v1/other.proto'},
        ],
      } as protos.google.protobuf.compiler.CodeGeneratorRequest;
      generator.response = {
        file: [],
      } as protos.google.protobuf.compiler.CodeGeneratorResponse;

      getTestGenerator(generator).addProtosToResponse();

      assert.strictEqual(generator.response.file?.length, 1);
      assert.strictEqual(generator.response.file?.[0].name, 'proto.list');
      assert.strictEqual(
        generator.response.file?.[0].content,
        'google/cloud/test/v1/test.proto\ngoogle/cloud/test/v1/other.proto\n',
      );
    });
  });

  describe('buildAPIObject', () => {
    it('should throw error if protos define no services', () => {
      generator.request = {
        protoFile: [
          {
            name: 'google/cloud/test/v1/test.proto',
            package: 'google.cloud.test.v1',
          },
        ],
        fileToGenerate: ['google/cloud/test/v1/test.proto'],
      } as protos.google.protobuf.compiler.CodeGeneratorRequest;

      assert.throws(() => {
        getTestGenerator(generator).buildAPIObject();
      }, /ERROR: Protos do not define any service/);
    });

    it('should create API object when services are defined', () => {
      generator.request = {
        protoFile: [
          {
            name: 'google/cloud/test/v1/test.proto',
            package: 'google.cloud.test.v1',
            service: [
              {
                name: 'TestService',
                options: {
                  '.google.api.defaultHost': 'test.googleapis.com',
                },
              },
            ],
          },
        ],
        fileToGenerate: ['google/cloud/test/v1/test.proto'],
      } as protos.google.protobuf.compiler.CodeGeneratorRequest;

      const api = getTestGenerator(generator).buildAPIObject();
      assert.ok(api);
      assert.strictEqual(api.packageName, 'google.cloud.test.v1');
    });
  });

  describe('processTemplates', () => {
    it('should throw error if template location does not exist', async () => {
      generator.templates = ['nonexistent_template_dir'];
      const api = {} as API;

      await assert.rejects(async () => {
        await generator.processTemplates(api);
      }, /Template directory .* does not exist\./);
    });

    it('should generate telemetry tracing configuration in service client when enableTelemetryTracing is true (CJS)', async () => {
      generator.request = {
        protoFile: [
          {
            name: 'google/cloud/test/v1/test.proto',
            package: 'google.cloud.test.v1',
            messageType: [{name: 'TestRequest'}, {name: 'TestResponse'}],
            service: [
              {
                name: 'TestService',
                options: {
                  '.google.api.defaultHost': 'test.googleapis.com',
                },
                method: [
                  {
                    name: 'TestMethod',
                    inputType: '.google.cloud.test.v1.TestRequest',
                    outputType: '.google.cloud.test.v1.TestResponse',
                  },
                ],
              },
            ],
          },
        ],
        fileToGenerate: ['google/cloud/test/v1/test.proto'],
      } as protos.google.protobuf.compiler.CodeGeneratorRequest;
      generator.templates = ['typescript_gapic'];
      generator.enableTelemetryTracing = true;
      generator.publishName = '@google-cloud/test';
      generator.response = {
        file: [],
      } as protos.google.protobuf.compiler.CodeGeneratorResponse;

      const api = getTestGenerator(generator).buildAPIObject();
      await generator.processTemplates(api);

      const clientFile = generator.response.file.find(f =>
        f.name?.includes('test_service_client.ts'),
      );
      assert.ok(clientFile);
      assert.ok(clientFile.content?.includes('internalTelemetryInfo'));
      assert.ok(clientFile.content?.includes("gcpClientService: 'test',"));
      assert.ok(clientFile.content?.includes("gcpVersion: 'v1',"));
      assert.ok(
        clientFile.content?.includes(
          "gcpRepo: 'googleapis/google-cloud-node',",
        ),
      );
      assert.ok(
        clientFile.content?.includes("gcpArtifact: '@google-cloud/test',"),
      );
      assert.ok(
        /constructSettings\([\s\S]*opts\.enableTelemetryTracing[\s\S]*internalTelemetryInfo[\s\S]*\)/.test(
          clientFile.content || '',
        ),
      );
      assert.strictEqual(
        clientFile.content?.includes(
          'this._defaults[methodName].enableTelemetryTracing',
        ),
        false,
      );
      assert.strictEqual(
        clientFile.content?.includes('this._defaults[methodName].otherArgs'),
        false,
      );
    });

    it('should generate telemetry tracing configuration in service client when enableTelemetryTracing is true (ESM)', async () => {
      generator.request = {
        protoFile: [
          {
            name: 'google/cloud/test/v1/test.proto',
            package: 'google.cloud.test.v1',
            messageType: [{name: 'TestRequest'}, {name: 'TestResponse'}],
            service: [
              {
                name: 'TestService',
                options: {
                  '.google.api.defaultHost': 'test.googleapis.com',
                },
                method: [
                  {
                    name: 'TestMethod',
                    inputType: '.google.cloud.test.v1.TestRequest',
                    outputType: '.google.cloud.test.v1.TestResponse',
                  },
                ],
              },
            ],
          },
        ],
        fileToGenerate: ['google/cloud/test/v1/test.proto'],
      } as protos.google.protobuf.compiler.CodeGeneratorRequest;
      generator.templates = ['typescript_gapic'];
      generator.format = ['esm'];
      generator.enableTelemetryTracing = true;
      generator.publishName = '@google-cloud/test';
      generator.response = {
        file: [],
      } as protos.google.protobuf.compiler.CodeGeneratorResponse;

      const api = getTestGenerator(generator).buildAPIObject();
      await generator.processTemplates(api);

      const clientFile = generator.response.file.find(f =>
        f.name?.includes('test_service_client.ts'),
      );
      assert.ok(clientFile);
      assert.ok(clientFile.content?.includes('internalTelemetryInfo'));
      assert.ok(clientFile.content?.includes("gcpClientService: 'test',"));
      assert.ok(clientFile.content?.includes("gcpVersion: 'v1',"));
      assert.ok(
        clientFile.content?.includes(
          "gcpRepo: 'googleapis/google-cloud-node',",
        ),
      );
      assert.ok(
        clientFile.content?.includes("gcpArtifact: '@google-cloud/test',"),
      );
      assert.ok(
        /constructSettings\([\s\S]*opts\.enableTelemetryTracing[\s\S]*internalTelemetryInfo[\s\S]*\)/.test(
          clientFile.content || '',
        ),
      );
      assert.strictEqual(
        clientFile.content?.includes(
          'this._defaults[methodName].enableTelemetryTracing',
        ),
        false,
      );
      assert.strictEqual(
        clientFile.content?.includes('this._defaults[methodName].otherArgs'),
        false,
      );
    });

    it('should not generate telemetry tracing configuration when enableTelemetryTracing is false', async () => {
      generator.request = {
        protoFile: [
          {
            name: 'google/cloud/test/v1/test.proto',
            package: 'google.cloud.test.v1',
            messageType: [{name: 'TestRequest'}, {name: 'TestResponse'}],
            service: [
              {
                name: 'TestService',
                options: {
                  '.google.api.defaultHost': 'test.googleapis.com',
                },
                method: [
                  {
                    name: 'TestMethod',
                    inputType: '.google.cloud.test.v1.TestRequest',
                    outputType: '.google.cloud.test.v1.TestResponse',
                  },
                ],
              },
            ],
          },
        ],
        fileToGenerate: ['google/cloud/test/v1/test.proto'],
      } as protos.google.protobuf.compiler.CodeGeneratorRequest;
      generator.templates = ['typescript_gapic'];
      generator.enableTelemetryTracing = false;
      generator.response = {
        file: [],
      } as protos.google.protobuf.compiler.CodeGeneratorResponse;

      const api = getTestGenerator(generator).buildAPIObject();
      await generator.processTemplates(api);

      const clientFile = generator.response.file.find(f =>
        f.name?.includes('test_service_client.ts'),
      );
      assert.ok(clientFile);
      assert.strictEqual(
        clientFile.content?.includes('internalTelemetryInfo'),
        false,
      );
      assert.strictEqual(
        clientFile.content?.includes('opts.enableTelemetryTracing'),
        false,
      );
    });
  });

  describe('generate', () => {
    it('should capture error message in response on failure', async () => {
      const originalStdoutWrite = process.stdout.write;
      let writtenBuffer: Buffer | null = null;

      process.stdout.write = (chunk: Uint8Array | string) => {
        writtenBuffer = Buffer.from(chunk);
        return true;
      };

      try {
        generator.request = {
          protoFile: [],
        } as protos.google.protobuf.compiler.CodeGeneratorRequest;

        await generator.generate();

        assert.strictEqual(
          generator.response.error,
          'ERROR: Protos do not define any service, client library cannot be generated.',
        );
        assert.ok(writtenBuffer);
      } finally {
        process.stdout.write = originalStdoutWrite;
      }
    });
  });
});
