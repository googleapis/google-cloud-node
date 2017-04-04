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

module.exports = {
  UMBRELLA_PACKAGE: 'google-cloud',
  DEFAULT_VERSION: 'master',
  TYPES_DICT: 'types.json',
  TOC: 'toc.json',
  IGNORE: [
    'common',
    'common-grpc',
    'bigtable/src/mutation.js',
    'datastore/src/entity.js',
    'datastore/src/request.js',
    'error-reporting/src/configuration.js',
    'error-reporting/src/error-router.js',
    'error-reporting/src/logger.js',
    'logging/src/metadata.js',
    'pubsub/src/iam.js',
    'spanner/src/codec.js',
    'spanner/src/partial-result-stream.js',
    'spanner/src/row-builder.js',
    'spanner/src/session-pool.js',
    'spanner/src/session.js',
    'spanner/src/transaction-request.js',
    'storage/src/acl.js'
  ],
  OVERVIEW_TEMPLATE: 'templates/overview.html',
  OVERVIEW: {
    'google-cloud': {
      title: 'Google Cloud',
      instanceName: 'gcloud'
    },
    bigquery: {
      title: 'BigQuery'
    },
    bigtable: {
      title: 'Cloud Bigtable'
    },
    compute: {
      title: 'Compute Engine',
      instanceName: 'gce'
    },
    datastore: {
      title: 'Cloud Datastore'
    },
    dns: {
      title: 'Cloud DNS'
    },
    language: {
      title: 'Cloud Natural Language'
    },
    logging: {
      title: 'Cloud Logging'
    },
    'logging-bunyan': {
      skip: true
    },
    'logging-winston': {
      skip: true
    },
    monitoring: {
      title: 'Cloud Monitoring'
    },
    prediction: {
      title: 'Prediction API'
    },
    pubsub: {
      title: 'Cloud Pub/Sub'
    },
    resource: {
      title: 'Cloud Resource Manager'
    },
    spanner: {
      title: 'Cloud Spanner'
    },
    speech: {
      title: 'Cloud Speech API'
    },
    storage: {
      title: 'Cloud Storage',
      instanceName: 'gcs'
    },
    translate: {
      title: 'Cloud Translation API'
    },
    vision: {
      title: 'Cloud Vision'
    }
  }
};
