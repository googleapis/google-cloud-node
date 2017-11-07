/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import * as delay from 'delay';
import * as sinon from 'sinon';

import {perftools} from '../../proto/profile';
import {TimeProfiler} from '../src/profilers/time-profiler';

import {timeProfile, v8TimeProfile} from './profiles-for-tests';

const assert = require('assert');
const v8TimeProfiler = require('bindings')('time_profiler');

describe('TimeProfiler', () => {
  describe('profile', () => {
    before(() => {
      sinon.stub(v8TimeProfiler, 'startProfiling');
      sinon.stub(v8TimeProfiler, 'stopProfiling').returns(v8TimeProfile);
      sinon.stub(v8TimeProfiler, 'setSamplingInterval');
    });

    after(() => {
      v8TimeProfiler.startProfiling.restore();
      v8TimeProfiler.stopProfiling.restore();
      v8TimeProfiler.setSamplingInterval.restore();
    });

    it('should profile during duration and finish profiling after duration',
       async () => {
         const durationMillis = 500;
         const intervalMicros = 1000;
         const profiler = new TimeProfiler(intervalMicros);
         let isProfiling = true;
         const profilePromise = profiler.profile(durationMillis).then(() => {
           isProfiling = false;
         });
         await delay(2 * durationMillis);
         assert.equal(false, isProfiling, 'profiler is still running');
       });

    it('should return a profile equal to the expected profile', async () => {
      const durationMillis = 500;
      const intervalMicros = 1000;
      const profiler = new TimeProfiler(intervalMicros);
      const profile = await profiler.profile(durationMillis);
      assert.deepEqual(timeProfile, profile);
    });
  });
});
