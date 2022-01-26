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

function main(parent, question) {
  // [START dataqna_v1alpha_generated_QuestionService_CreateQuestion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project this data source reference belongs to.
   *  Example: `projects/foo/locations/bar`
   */
  // const parent = 'abc123'
  /**
   *  Required. The question to create.
   */
  // const question = {}

  // Imports the Dataqna library
  const {QuestionServiceClient} = require('@google-cloud/data-qna').v1alpha;

  // Instantiates a client
  const dataqnaClient = new QuestionServiceClient();

  async function callCreateQuestion() {
    // Construct request
    const request = {
      parent,
      question,
    };

    // Run request
    const response = await dataqnaClient.createQuestion(request);
    console.log(response);
  }

  callCreateQuestion();
  // [END dataqna_v1alpha_generated_QuestionService_CreateQuestion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
