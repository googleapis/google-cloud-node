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

import {describe, it} from 'mocha';
import {expect} from 'chai';

function isModuleLoaded(moduleName: string) {
  return !!Object.keys(require.cache).find(
    path => path.indexOf(`node_modules/${moduleName}`) !== -1,
  );
}

describe('Index.js', () => {
  (isModuleLoaded('google-gax') ? it.skip : it)(
    'does not load google-gax',
    () => {
      require('../src/index');
      expect(isModuleLoaded('google-gax')).to.be.false;
    },
  );

  (isModuleLoaded('protobufjs') ? it.skip : it)(
    'does not load protobufjs',
    () => {
      require('../src/index');
      expect(isModuleLoaded('protobufjs')).to.be.false;
    },
  );
});
