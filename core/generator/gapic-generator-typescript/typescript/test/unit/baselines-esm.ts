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

import {describe} from 'mocha';
import {runBaselineTest} from '../util.js';

describe('Baseline tests: ESM', () => {
  runBaselineTest({
    baselineName: 'bigquery-v2-esm',
    outputDir: '.test-out-bigquery-v2-esm',
    protoPath: 'google/cloud/bigquery/v2/*.proto',
    useCommonProto: true,
    format: 'esm',
  });
  runBaselineTest({
    baselineName: 'dlp-esm',
    outputDir: '.test-out-dlp-esm',
    protoPath: 'google/privacy/dlp/v2/*.proto',
    useCommonProto: true,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'tasks-esm',
    outputDir: '.test-out-tasks-esm',
    protoPath: 'google/cloud/tasks/v2/*.proto',
    useCommonProto: false,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'texttospeech-esm',
    outputDir: '.test-out-texttospeech-esm',
    protoPath: 'google/cloud/texttospeech/v1/*.proto',
    useCommonProto: false,
    grpcServiceConfig:
      'google/cloud/texttospeech/v1/texttospeech_grpc_service_config.json',
    packageName: '@google-cloud/text-to-speech',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'kms-esm',
    outputDir: '.test-out-kms-esm',
    protoPath: 'google/cloud/kms/v1/*.proto',
    useCommonProto: false,
    serviceYaml: 'google/cloud/kms/v1/cloudkms_v1.yaml',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'monitoring-esm',
    outputDir: '.test-out-monitoring-esm',
    protoPath: 'google/monitoring/v3/*.proto',
    useCommonProto: false,
    mainServiceName: 'monitoring',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'retail-esm',
    outputDir: '.test-out-retail-esm',
    protoPath: 'google/cloud/retail/v2alpha/*.proto',
    useCommonProto: true,
    mainServiceName: 'retail',
    grpcServiceConfig:
      'google/cloud/retail/v2alpha/retail_grpc_service_config.json',
    serviceYaml: 'google/cloud/retail/v2alpha/retail_v2alpha.yaml',
    mixins: 'location',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'redis-esm',
    outputDir: '.test-out-redis-esm',
    protoPath: 'google/cloud/redis/v1beta1/*.proto',
    useCommonProto: true,
    mixins: 'google.longrunning.Operations',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'showcase-esm',
    outputDir: '.test-out-showcase-esm',
    protoPath: 'google/showcase/v1beta1/*.proto',
    useCommonProto: false,
    mainServiceName: 'ShowcaseService',
    serviceYaml: 'google/showcase/v1beta1/showcase_v1beta1.yaml',
    template: 'typescript_gapic;typescript_packing_test',
    metadata: true,
    restNumericEnums: true,
    mixins: 'none',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'showcase-legacy-esm',
    outputDir: '.test-out-showcase-legacy-esm',
    protoPath: 'google/showcase/v1beta1/echo.proto',
    useCommonProto: false,
    mainServiceName: 'ShowcaseService',
    legacyProtoLoad: true,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'asset-esm',
    outputDir: '.test-out-asset-esm',
    protoPath:
      'google/cloud/asset/v1/*.proto;google/cloud/orgpolicy/v1/orgpolicy.proto;google/identity/accesscontextmanager/v1/*.proto;google/identity/accesscontextmanager/type/*.proto',
    useCommonProto: true,
    grpcServiceConfig:
      'google/cloud/asset/v1/cloudasset_grpc_service_config.json',
    packageName: '@google-cloud/asset',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'translate-esm',
    outputDir: '.test-out-translate-esm',
    protoPath: 'google/cloud/translate/v3beta1/*.proto',
    useCommonProto: true,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'bigquery-storage-esm',
    outputDir: '.test-out-bigquery-storage-esm',
    protoPath: 'google/cloud/bigquery/storage/v1beta1/*.proto',
    useCommonProto: false,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'logging-esm',
    outputDir: '.test-out-logging-esm',
    protoPath: 'google/logging/v2/*.proto;google/logging/type/*.proto',
    useCommonProto: true,
    bundleConfig: 'google/logging/v2/logging_gapic.yaml',
    mainServiceName: 'LoggingService',
    grpcServiceConfig: 'google/logging/v2/logging_grpc_service_config.json',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'videointelligence-esm',
    outputDir: '.test-out-videointelligence-esm',
    protoPath: 'google/cloud/videointelligence/v1/*.proto',
    useCommonProto: true,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'disable-packing-test-esm',
    outputDir: '.test-out-disable-packing-test-esm',
    protoPath: 'google/showcase/v1beta1/*.proto',
    useCommonProto: false,
    mainServiceName: 'ShowcaseService',
    template: 'typescript_gapic',
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'naming-esm',
    outputDir: '.test-out-naming-esm',
    protoPath: 'google/naming/v1beta1/*.proto',
    useCommonProto: false,
    metadata: true,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'pubsub-api-dump-esm',
    outputDir: '.test-out-pubsub-api-dump-esm',
    protoPath: 'google/pubsub/v1/*.proto;google/iam/v1/*.proto',
    useCommonProto: true,
    metadata: false,
    template: 'api_dump',
    format: 'esm',
  });

  // Adding new baseline test for deprecated service and methods
  runBaselineTest({
    baselineName: 'deprecatedtest-esm',
    outputDir: '.test-out-deprecatedtest-esm',
    protoPath: 'google/deprecatedtest/v1/*.proto',
    useCommonProto: true,
    metadata: false,
    format: 'esm',
  });

  runBaselineTest({
    baselineName: 'compute-esm',
    outputDir: '.test-out-compute-esm',
    protoPath: 'google/cloud/compute/v1/*.proto',
    useCommonProto: false,
    packageName: '@google-cloud/compute',
    diregapic: true,
    format: 'esm',
  });

  // Adding new baseline test to test routing annotation
  runBaselineTest({
    baselineName: 'routingtest-esm',
    outputDir: '.test-out-routingtest-esm',
    protoPath: 'google/routingtest/v1/*.proto',
    useCommonProto: true,
    metadata: false,
    format: 'esm',
  });
});
