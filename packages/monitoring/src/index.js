/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

/*!
 * @module monitoring
 */

'use strict';

/**
 * [Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects
 * metrics, events, and metadata from Google Cloud Platform, Amazon Web Services
 * (AWS), hosted uptime probes, application instrumentation, and a variety of
 * common application components including Cassandra, Nginx, Apache Web Server,
 * Elasticsearch and many others. Stackdriver ingests that data and generates
 * insights via dashboards, charts, and alerts.
 *
 * <h2>This is an auto-generated API</h2>
 *
 * It does not follow the conventions you're familiar with from other parts of
 * our library. A handwritten layer is not yet available.
 *
 * The example below shows you how to instantiate the generated client. For
 * further documentation, please browse the
 * [Monitoring .proto files](https://github.com/googleapis/googleapis/tree/master/google/monitoring/v3)
 * on GitHub.
 *
 * @constructor
 * @alias module:monitoring
 */
function Monitoring() {
  throw new Error([
    'Cloud Monitoring must be accessed through the auto-generated client.',
    'See',
    'https://googlecloudplatform.github.io/google-cloud-node/#/docs/monitoring',
    'for more information.'
  ].join(' '));
}

module.exports = Monitoring;
module.exports.v3 = require('./v3');
