// Copyright 2017 Google LLC
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

import * as assert from 'assert';
import {describe, it, afterEach} from 'mocha';
import * as sinon from 'sinon';

import * as timeProfiler from '../src/time-profiler';
import * as timeProfilerBindings from '../src/time-profiler-bindings';

import {
  timeProfile,
  timeSourceProfile,
  v8TimeGeneratedProfile,
  v8TimeProfile,
  mapDirPath,
} from './profiles-for-tests';
import {SourceMapper} from '../src/sourcemapper';

const PROFILE_OPTIONS = {
  durationMillis: 500,
  intervalMicros: 1000,
};

describe('TimeProfiler', () => {
  const sinonStubs: Array<sinon.SinonStub> = [];

  afterEach(() => {
    sinonStubs.forEach(stub => {
      stub.restore();
    });
    sinonStubs.length = 0;
  });

  describe('profile (end-to-end)', () => {
    it('should detect idle time', async () => {
      const result = await timeProfiler.profile({
        durationMillis: 200,
        intervalMicros: 1000,
      });
      assert.ok(result.stringTable);
      assert.notStrictEqual(result.stringTable.indexOf('(idle)'), -1);
    });

    it('should collect a profile and include busy loop samples', async () => {
      const startTime = Date.now();
      const profilePromise = timeProfiler.profile({
        durationMillis: 100,
        intervalMicros: 1000,
      });
      while (Date.now() - startTime < 50) {
        // Spin briefly to ensure samples are recorded.
      }
      const result = await profilePromise;
      assert.ok(result.sample && result.sample.length > 0);
      assert.ok(result.stringTable && result.stringTable.length > 0);
    });

    it('should support start() returning a stop function', async () => {
      const stop = timeProfiler.start(1000);
      const startTime = Date.now();
      while (Date.now() - startTime < 20) {
        // Spin briefly.
      }
      const result = await stop();
      assert.ok(result.stringTable && result.stringTable.length > 0);
    });
  });

  describe('profile (with stubs)', () => {
    it('should profile during duration and finish profiling after duration', async () => {
      let isProfiling = false;
      sinonStubs.push(
        sinon.stub(timeProfilerBindings, 'startProfiling').callsFake(() => {
          isProfiling = true;
        })
      );
      sinonStubs.push(
        sinon.stub(timeProfilerBindings, 'stopProfiling').callsFake(() => {
          isProfiling = false;
          return v8TimeProfile;
        })
      );
      sinonStubs.push(sinon.stub(Date, 'now').returns(0));
      const profilePromise = timeProfiler.profile(PROFILE_OPTIONS);
      assert.strictEqual(
        isProfiling,
        true,
        'time profiler is not running during duration'
      );
      const result = await profilePromise;
      assert.strictEqual(
        isProfiling,
        false,
        'time profiler is still running after duration'
      );
      assert.deepStrictEqual(result, timeProfile);
    });

    it('should map generated locations when sourceMapper is specified', async () => {
      const sourceMapper = await SourceMapper.create([mapDirPath]);
      sinonStubs.push(sinon.stub(timeProfilerBindings, 'startProfiling'));
      sinonStubs.push(
        sinon
          .stub(timeProfilerBindings, 'stopProfiling')
          .returns(v8TimeGeneratedProfile)
      );
      sinonStubs.push(sinon.stub(Date, 'now').returns(0));
      const result = await timeProfiler.profile({
        durationMillis: 500,
        intervalMicros: 1000,
        sourceMapper,
      });
      assert.deepStrictEqual(result, timeSourceProfile);
    });
  });
});
