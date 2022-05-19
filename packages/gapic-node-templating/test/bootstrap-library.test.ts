// Copyright 2022 Google LLC
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

// import sinon, {SinonStubbedInstance} from 'sinon';
import {strictEqual} from 'assert';
import {bootstrapLibrary} from '../src/commands/bootstrap-library';
import {describe, it} from 'mocha';

const API_ID = 'google.cloud.kms.v1';

describe('tests running build trigger', () => {
  it('it should get correct variable names', async () => {
    await bootstrapLibrary.handler({
      'api-id': API_ID,
      apiId: API_ID,
      _: [],
      $0: 'foo',
    });
  });
});
