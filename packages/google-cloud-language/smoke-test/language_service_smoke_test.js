// Copyright 2018 Google LLC
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

'use strict';

describe('LanguageServiceSmokeTest', () => {
  it('successfully makes a call to the service', done => {
    const language = require('../src');

    const client = new language.v1beta2.LanguageServiceClient({
      // optional auth parameters.
    });

    const content = 'Hello, world!';
    const type = 'PLAIN_TEXT';
    const document = {
      content: content,
      type: type,
    };
    client.analyzeSentiment({document: document})
      .then(responses => {
        const response = responses[0];
        console.log(response);
      })
      .then(done)
      .catch(done);
  });
});
