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

function main(name) {
  // [START dataproc_v1_generated_WorkflowTemplateService_InstantiateWorkflowTemplate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the workflow template, as described
   *  in https://cloud.google.com/apis/design/resource_names.
   *  * For `projects.regions.workflowTemplates.instantiate`, the resource name
   *  of the template has the following format:
   *    `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
   *  * For `projects.locations.workflowTemplates.instantiate`, the resource name
   *    of the template has the following format:
   *    `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
   */
  // const name = 'abc123'
  /**
   *  Optional. The version of workflow template to instantiate. If specified,
   *  the workflow will be instantiated only if the current version of
   *  the workflow template has the supplied version.
   *  This option cannot be used to instantiate a previous version of
   *  workflow template.
   */
  // const version = 1234
  /**
   *  Optional. A tag that prevents multiple concurrent workflow
   *  instances with the same tag from running. This mitigates risk of
   *  concurrent instances started due to retries.
   *  It is recommended to always set this value to a
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *  The tag must contain only letters (a-z, A-Z), numbers (0-9),
   *  underscores (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'
  /**
   *  Optional. Map from parameter names to values that should be used for those
   *  parameters. Values may not exceed 1000 characters.
   */
  // const parameters = 1234

  // Imports the Dataproc library
  const {WorkflowTemplateServiceClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new WorkflowTemplateServiceClient();

  async function callInstantiateWorkflowTemplate() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await dataprocClient.instantiateWorkflowTemplate(
      request
    );
    const [response] = await operation.promise();
    console.log(response);
  }

  callInstantiateWorkflowTemplate();
  // [END dataproc_v1_generated_WorkflowTemplateService_InstantiateWorkflowTemplate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
