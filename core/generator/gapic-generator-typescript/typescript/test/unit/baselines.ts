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

describe('Baseline tests', () => {
  runBaselineTest({
    baselineName: 'bigquery-v2',
    outputDir: '.test-out-bigquery-v2',
    protoPath: 'google/cloud/bigquery/v2/*.proto',
    useCommonProto: true,
  });
  runBaselineTest({
    baselineName: 'dlp',
    outputDir: '.test-out-dlp',
    protoPath: 'google/privacy/dlp/v2/*.proto',
    useCommonProto: true,
  });

  runBaselineTest({
    baselineName: 'tasks',
    outputDir: '.test-out-tasks',
    protoPath: 'google/cloud/tasks/v2/*.proto',
    useCommonProto: false,
  });

  runBaselineTest({
    baselineName: 'texttospeech',
    outputDir: '.test-out-texttospeech',
    protoPath: 'google/cloud/texttospeech/v1/*.proto',
    useCommonProto: false,
    grpcServiceConfig:
      'google/cloud/texttospeech/v1/texttospeech_grpc_service_config.json',
    packageName: '@google-cloud/text-to-speech',
  });

  runBaselineTest({
    baselineName: 'kms',
    outputDir: '.test-out-kms',
    protoPath: 'google/cloud/kms/v1/*.proto',
    useCommonProto: false,
    serviceYaml: 'google/cloud/kms/v1/cloudkms_v1.yaml',
  });

  runBaselineTest({
    baselineName: 'monitoring',
    outputDir: '.test-out-monitoring',
    protoPath: 'google/monitoring/v3/*.proto',
    useCommonProto: false,
    mainServiceName: 'monitoring',
  });

  // API that uses location mixin
  runBaselineTest({
    baselineName: 'retail',
    outputDir: '.test-out-retail',
    protoPath: 'google/cloud/retail/v2alpha/*.proto',
    useCommonProto: true,
    mainServiceName: 'retail',
    grpcServiceConfig:
      'google/cloud/retail/v2alpha/retail_grpc_service_config.json',
    serviceYaml: 'google/cloud/retail/v2alpha/retail_v2alpha.yaml',
    mixins: 'location',
  });

  runBaselineTest({
    baselineName: 'redis',
    outputDir: '.test-out-redis',
    protoPath: 'google/cloud/redis/v1beta1/*.proto',
    useCommonProto: true,
    mixins: 'google.longrunning.Operations',
  });

  runBaselineTest({
    baselineName: 'showcase',
    outputDir: '.test-out-showcase',
    protoPath: 'google/showcase/v1beta1/*.proto',
    useCommonProto: false,
    mainServiceName: 'ShowcaseService',
    serviceYaml: 'google/showcase/v1beta1/showcase_v1beta1.yaml',
    template: 'typescript_gapic;typescript_packing_test',
    metadata: true,
    restNumericEnums: true,
    mixins: 'none',
  });

  runBaselineTest({
    baselineName: 'showcase-legacy',
    outputDir: '.test-out-showcase-legacy',
    protoPath: 'google/showcase/v1beta1/echo.proto',
    useCommonProto: false,
    mainServiceName: 'ShowcaseService',
    legacyProtoLoad: true,
  });

  runBaselineTest({
    baselineName: 'asset',
    outputDir: '.test-out-asset',
    protoPath:
      'google/cloud/asset/v1/*.proto;google/cloud/orgpolicy/v1/orgpolicy.proto;google/identity/accesscontextmanager/v1/*.proto;google/identity/accesscontextmanager/type/*.proto',
    useCommonProto: true,
    grpcServiceConfig:
      'google/cloud/asset/v1/cloudasset_grpc_service_config.json',
    packageName: '@google-cloud/asset',
  });

  runBaselineTest({
    baselineName: 'translate',
    outputDir: '.test-out-translate',
    protoPath: 'google/cloud/translate/v3beta1/*.proto',
    useCommonProto: true,
  });

  runBaselineTest({
    baselineName: 'bigquery-storage',
    outputDir: '.test-out-bigquery-storage',
    protoPath: 'google/cloud/bigquery/storage/v1beta1/*.proto',
    useCommonProto: false,
  });

  runBaselineTest({
    baselineName: 'logging',
    outputDir: '.test-out-logging',
    protoPath: 'google/logging/v2/*.proto;google/logging/type/*.proto',
    useCommonProto: true,
    bundleConfig: 'google/logging/v2/logging_gapic.yaml',
    mainServiceName: 'LoggingService',
    grpcServiceConfig: 'google/logging/v2/logging_grpc_service_config.json',
  });

  runBaselineTest({
    baselineName: 'videointelligence',
    outputDir: '.test-out-videointelligence',
    protoPath: 'google/cloud/videointelligence/v1/*.proto',
    useCommonProto: true,
  });

  runBaselineTest({
    baselineName: 'disable-packing-test',
    outputDir: '.test-out-disable-packing-test',
    protoPath: 'google/showcase/v1beta1/*.proto',
    useCommonProto: false,
    mainServiceName: 'ShowcaseService',
    template: 'typescript_gapic',
  });

  runBaselineTest({
    baselineName: 'naming',
    outputDir: '.test-out-naming',
    protoPath: 'google/naming/v1beta1/*.proto',
    useCommonProto: false,
    metadata: true,
  });

  runBaselineTest({
    baselineName: 'pubsub-api-dump',
    outputDir: '.test-out-pubsub-api-dump',
    protoPath: 'google/pubsub/v1/*.proto;google/iam/v1/*.proto',
    useCommonProto: true,
    metadata: false,
    template: 'api_dump',
  });

  // Adding new baseline test for deprecated service and methods
  runBaselineTest({
    baselineName: 'deprecatedtest',
    outputDir: '.test-out-deprecatedtest',
    protoPath: 'google/deprecatedtest/v1/*.proto',
    useCommonProto: true,
    metadata: false,
  });

  runBaselineTest({
    baselineName: 'compute',
    outputDir: '.test-out-compute',
    protoPath: 'google/cloud/compute/v1/*.proto',
    useCommonProto: false,
    packageName: '@google-cloud/compute',
    diregapic: true,
  });

  // Adding new baseline test to test routing annotation
  runBaselineTest({
    baselineName: 'routingtest',
    outputDir: '.test-out-routingtest',
    protoPath: 'google/routingtest/v1/*.proto',
    useCommonProto: true,
    metadata: false,
  });
});
