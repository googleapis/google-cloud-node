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
    'datastore/src/entity.js',
    'datastore/src/request.js',
    'logging/src/metadata.js',
    'pubsub/src/iam.js',
    'storage/src/acl.js',
    'bigtable/src/mutation.js'
  ],
  OVERVIEW_TEMPLATE: 'templates/overview.html',
  OVERVIEW: {
    'google-cloud': {
      title: 'Google Cloud',
      instanceName: 'gcloud'
    },
    bigquery: {
      title: 'Google BigQuery'
    },
    bigtable: {
      title: 'Google Cloud Bigtable'
    },
    compute: {
      title: 'Google Compute Engine',
      instanceName: 'gce'
    },
    datastore: {
      title: 'Google Cloud Datastore'
    },
    dns: {
      title: 'Google Cloud DNS'
    },
    language: {
      title: 'Google Cloud Natural Language'
    },
    logging: {
      title: 'Google Cloud Logging'
    },
    monitoring: {
      title: 'Google Cloud Monitoring'
    },
    prediction: {
      title: 'Google Prediction API'
    },
    pubsub: {
      title: 'Google Cloud Pub/Sub'
    },
    resource: {
      title: 'Google Cloud Resource Manager'
    },
    speech: {
      title: 'Google Cloud Speech API'
    },
    storage: {
      title: 'Google Cloud Storage',
      instanceName: 'gcs'
    },
    translate: {
      title: 'Google Cloud Translation API'
    },
    vision: {
      title: 'Google Cloud Vision'
    }
  }
};
