// Copyright 2021 Google LLC
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


'use strict';

function main() {
  // [START composer_v1beta1_generated_Environments_CheckUpgrade_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name of the environment to check upgrade for, in the
   *  form:
   *  "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
   */
  // const environment = 'abc123'
  /**
   *  The version of the software running in the environment.
   *  This encapsulates both the version of Cloud Composer functionality and the
   *  version of Apache Airflow. It must match the regular expression
   *  `composer-([0-9]+\.[0-9]+\.[0-9]+|latest)-airflow-[0-9]+\.[0-9]+(\.[0-9]+.*)?`.
   *  When used as input, the server also checks if the provided version is
   *  supported and denies the request for an unsupported version.
   *  The Cloud Composer portion of the version is a
   *  semantic version (https://semver.org) or `latest`. When the patch version
   *  is omitted, the current Cloud Composer patch version is selected.
   *  When `latest` is provided instead of an explicit version number,
   *  the server replaces `latest` with the current Cloud Composer version
   *  and stores that version number in the same field.
   *  The portion of the image version that follows `airflow-` is an
   *  official Apache Airflow repository
   *  release name (https://github.com/apache/incubator-airflow/releases).
   *  See also Version List 
   *  (/composer/docs/concepts/versioning/composer-versions).
   */
  // const imageVersion = 'abc123'

  // Imports the Service library
  const {EnvironmentsClient} = require('@google-cloud/orchestration-airflow').v1beta1;

  // Instantiates a client
  const serviceClient = new EnvironmentsClient();

  async function callCheckUpgrade() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await serviceClient.checkUpgrade(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCheckUpgrade();
  // [END composer_v1beta1_generated_Environments_CheckUpgrade_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
