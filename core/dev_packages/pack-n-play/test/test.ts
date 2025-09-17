// Copyright 2018 Google LLC
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
import * as fs from 'fs';
import execa = require('execa');
import {describe, it} from 'mocha';

describe('pack-n-play', () => {
  it('should run tests', async () => {
    const fixturesPath = path.resolve('./test/fixtures');
    const dirs = fs
      .readdirSync(fixturesPath)
      .map(i => path.join(fixturesPath, i))
      .filter(i => fs.statSync(i).isDirectory());
    for (const dir of dirs) {
      const opts: execa.Options = {
        stdio: 'inherit',
        cwd: dir,
      };
      await execa('npm', ['install'], opts);
      await execa('npm', ['link', '../../../'], opts);
      await execa('npm', ['test'], opts);
    }
  });
});
