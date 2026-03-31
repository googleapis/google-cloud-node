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
import * as loader from './load';

export function getProtoPath(...paths: string[]): string {
  return path.join(__dirname, '../../', 'google', ...paths);
}

export const load = loader.load;
export const loadSync = loader.loadSync;
export const appengine = {
  v1: getProtoPath('appengine/v1/appengine.proto'),
};

export const bigtable = {
  v1: getProtoPath('bigtable/v1/bigtable_service.proto'),
  v2: getProtoPath('bigtable/v2/bigtable.proto'),
  admin: {
    v1: getProtoPath('bigtable/admin/table/v1/bigtable_table_service.proto'),
    v2: {
      instance: getProtoPath('bigtable/admin/v2/bigtable_instance_admin.proto'),
      table: getProtoPath('bigtable/admin/v2/bigtable_table_admin.proto'),
    },
  },
};

export const cloudtrace = {
  v1: getProtoPath('devtools/cloudtrace/v1/trace.proto'),
};

export const container = {
  v1: getProtoPath('container/v1/cluster_service.proto'),
};

export const datastore = {
  v1: getProtoPath('datastore/v1/datastore.proto'),
  v1beta3: getProtoPath('datastore/v1beta3/datastore.proto'),
};

export const dlp = {
  v2beta1: getProtoPath('privacy/dlp/v2beta1/dlp.proto'),
};

export const embeddedAssistant = {
  v1alpha1: getProtoPath(
    'assistant/embedded/v1alpha1/embedded_assistant.proto',
  ),
  v1alpha2: getProtoPath(
    'assistant/embedded/v1alpha2/embedded_assistant.proto',
  ),
};

export const firestore = {
  v1beta1: getProtoPath('firestore/v1beta1/firestore.proto'),
  admin: {
    v1beta1: getProtoPath('firestore/admin/v1beta1/firestore_admin.proto'),
  },
};

export const functions = {
  v1beta2: getProtoPath('cloud/functions/v1beta2/functions.proto'),
};

export const iam = {
  v1: getProtoPath('iam/v1/iam_policy.proto'),
  admin: {
    v1: getProtoPath('iam/admin/v1/iam.proto'),
  },
};

export const language = {
  v1beta1: getProtoPath('cloud/language/v1beta1/language_service.proto'),
  v1: getProtoPath('cloud/language/v1/language_service.proto'),
};

export const logging = {
  v2: getProtoPath('logging/v2/logging.proto'),
};

export const monitoring = {
  v3: {
    group: getProtoPath('monitoring/v3/group_service.proto'),
    metric: getProtoPath('monitoring/v3/metric_service.proto'),
  },
};

export const pubsub = {
  v1: getProtoPath('pubsub/v1/pubsub.proto'),
  v1beta2: getProtoPath('pubsub/v1beta2/pubsub.proto'),
};

export const spanner = {
  v1: getProtoPath('spanner/v1/spanner.proto'),
  admin: {
    v1: {
      database: getProtoPath(
        'spanner/admin/database/v1/spanner_database_admin.proto',
      ),
      instance: getProtoPath(
        'spanner/admin/instance/v1/spanner_instance_admin.proto',
      ),
    },
  },
};

export const speech = {
  v1beta1: getProtoPath('cloud/speech/v1beta1/cloud_speech.proto'),
  v1: getProtoPath('cloud/speech/v1/cloud_speech.proto'),
  v2: getProtoPath('cloud/speech/v2/cloud_speech.proto'),
};

export const storagetransfer = {
  v1: getProtoPath('storagetransfer/v1/transfer.proto'),
};

export const videointelligence = {
  v1beta1: getProtoPath(
    'cloud/videointelligence/v1beta1/video_intelligence.proto',
  ),
};

export const vision = {
  v1: getProtoPath('cloud/vision/v1/image_annotator.proto'),
};
