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

import assert from 'assert';
import {describe, it} from 'mocha';
import * as path from 'path';
import * as googleProtoFiles from '../src';

function resolve(protoPath) {
  return path.join(__dirname, '../../google', protoPath);
}

describe('google-proto-files', () => {
  it('should export appengine', () => {
    assert(googleProtoFiles.appengine);
    assert.strictEqual(
      googleProtoFiles.appengine.v1,
      resolve('appengine/v1/appengine.proto'),
    );
  });
  it('should export bigtable', () => {
    assert(googleProtoFiles.bigtable);
    assert.strictEqual(
      googleProtoFiles.bigtable.v1,
      resolve('bigtable/v1/bigtable_service.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.bigtable.v2,
      resolve('bigtable/v2/bigtable.proto'),
    );
  });
  it('should export bigtable admin', () => {
    assert(googleProtoFiles.bigtable.admin);
    assert.strictEqual(
      googleProtoFiles.bigtable.admin.v1,
      resolve('bigtable/admin/table/v1/bigtable_table_service.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.bigtable.admin.v2.instance,
      resolve('bigtable/admin/v2/bigtable_instance_admin.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.bigtable.admin.v2.table,
      resolve('bigtable/admin/v2/bigtable_table_admin.proto'),
    );
  });
  it('should export cloudtrace', () => {
    assert(googleProtoFiles.cloudtrace);
    assert.strictEqual(
      googleProtoFiles.cloudtrace.v1,
      resolve('devtools/cloudtrace/v1/trace.proto'),
    );
  });
  it('should export container', () => {
    assert(googleProtoFiles.container);
    assert.strictEqual(
      googleProtoFiles.container.v1,
      resolve('container/v1/cluster_service.proto'),
    );
  });
  it('should export datastore', () => {
    assert(googleProtoFiles.datastore);
    assert.strictEqual(
      googleProtoFiles.datastore.v1,
      resolve('datastore/v1/datastore.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.datastore.v1beta3,
      resolve('datastore/v1beta3/datastore.proto'),
    );
  });
  it('should export dlp', () => {
    assert(googleProtoFiles.dlp);
    assert.strictEqual(
      googleProtoFiles.dlp.v2beta1,
      resolve('privacy/dlp/v2beta1/dlp.proto'),
    );
  });
  it('should export embeddedAssistant', () => {
    assert(googleProtoFiles.embeddedAssistant);
    assert.strictEqual(
      googleProtoFiles.embeddedAssistant.v1alpha1,
      resolve('assistant/embedded/v1alpha1/embedded_assistant.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.embeddedAssistant.v1alpha2,
      resolve('assistant/embedded/v1alpha2/embedded_assistant.proto'),
    );
  });
  it('should export firestore', () => {
    assert(googleProtoFiles.firestore);
    assert.strictEqual(
      googleProtoFiles.firestore.v1beta1,
      resolve('firestore/v1beta1/firestore.proto'),
    );
  });
  it('should export firestore admin', () => {
    assert(googleProtoFiles.firestore.admin);
    assert.strictEqual(
      googleProtoFiles.firestore.admin.v1beta1,
      resolve('firestore/admin/v1beta1/firestore_admin.proto'),
    );
  });
  it('should export functions', () => {
    assert(googleProtoFiles.functions);
    assert.strictEqual(
      googleProtoFiles.functions.v1beta2,
      resolve('cloud/functions/v1beta2/functions.proto'),
    );
  });
  it('should export iam', () => {
    assert(googleProtoFiles.iam);
    assert.strictEqual(
      googleProtoFiles.iam.v1,
      resolve('iam/v1/iam_policy.proto'),
    );
  });
  it('should export iam admin', () => {
    assert(googleProtoFiles.iam.admin);
    assert.strictEqual(
      googleProtoFiles.iam.admin.v1,
      resolve('iam/admin/v1/iam.proto'),
    );
  });
  it('should export language', () => {
    assert(googleProtoFiles.language);
    assert.strictEqual(
      googleProtoFiles.language.v1beta1,
      resolve('cloud/language/v1beta1/language_service.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.language.v1,
      resolve('cloud/language/v1/language_service.proto'),
    );
  });
  it('should export logging', () => {
    assert(googleProtoFiles.logging);
    assert.strictEqual(
      googleProtoFiles.logging.v2,
      resolve('logging/v2/logging.proto'),
    );
  });
  it('should export monitoring', () => {
    assert(googleProtoFiles.monitoring);
    assert(googleProtoFiles.monitoring.v3);
    assert.strictEqual(
      googleProtoFiles.monitoring.v3.group,
      resolve('monitoring/v3/group_service.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.monitoring.v3.metric,
      resolve('monitoring/v3/metric_service.proto'),
    );
  });
  it('should export pubsub', () => {
    assert(googleProtoFiles.pubsub);
    assert.strictEqual(
      googleProtoFiles.pubsub.v1,
      resolve('pubsub/v1/pubsub.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.pubsub.v1beta2,
      resolve('pubsub/v1beta2/pubsub.proto'),
    );
  });
  it('should export spanner', () => {
    assert(googleProtoFiles.spanner);
    assert.strictEqual(
      googleProtoFiles.spanner.v1,
      resolve('spanner/v1/spanner.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.spanner.admin.v1.database,
      resolve('spanner/admin/database/v1/spanner_database_admin.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.spanner.admin.v1.instance,
      resolve('spanner/admin/instance/v1/spanner_instance_admin.proto'),
    );
  });
  it('should export speech', () => {
    assert(googleProtoFiles.speech);
    assert.strictEqual(
      googleProtoFiles.speech.v1beta1,
      resolve('cloud/speech/v1beta1/cloud_speech.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.speech.v1,
      resolve('cloud/speech/v1/cloud_speech.proto'),
    );
    assert.strictEqual(
      googleProtoFiles.speech.v2,
      resolve('cloud/speech/v2/cloud_speech.proto'),
    );
  });
  it('should export storagetransfer', () => {
    assert(googleProtoFiles.storagetransfer);
    assert.strictEqual(
      googleProtoFiles.storagetransfer.v1,
      resolve('storagetransfer/v1/transfer.proto'),
    );
  });
  it('should export videointelligence', () => {
    assert(googleProtoFiles.videointelligence);
    assert.strictEqual(
      googleProtoFiles.videointelligence.v1beta1,
      resolve('cloud/videointelligence/v1beta1/video_intelligence.proto'),
    );
  });
  it('should export vision', () => {
    assert(googleProtoFiles.vision);
    assert.strictEqual(
      googleProtoFiles.vision.v1,
      resolve('cloud/vision/v1/image_annotator.proto'),
    );
  });
});
