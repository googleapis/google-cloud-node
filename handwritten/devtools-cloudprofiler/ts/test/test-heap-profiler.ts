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
import {HeapProfiler} from '../src/profilers/heap-profiler';

import {heapProfile, v8HeapProfile} from './profiles-for-tests';

const assert = require('assert');
const v8HeapProfiler = require('bindings')('sampling_heap_profiler');

describe('HeapProfiler', () => {
  describe('profile', () => {
    const sinonStubs: sinon.SinonStub[] = new Array();
    before(() => {
      sinonStubs.push(sinon.stub(v8HeapProfiler, 'startSamplingHeapProfiler'));
      sinonStubs.push(sinon.stub(v8HeapProfiler, 'stopSamplingHeapProfiler'));
      sinonStubs.push(sinon.stub(v8HeapProfiler, 'getAllocationProfile')
                          .returns(v8HeapProfile));
      sinonStubs.push(sinon.stub(Date, 'now').returns(0));
    });

    after(() => {
      sinonStubs.forEach((stub) => {
        stub.restore();
      });
    });

    it('should return a profile equal to the expected profile', async () => {
      const intervalBytes = 1024 * 512;
      const stackDepth = 32;
      const profiler = new HeapProfiler(intervalBytes, stackDepth);
      const profile = profiler.profile();
      assert.deepEqual(heapProfile, profile);
    });

    it('should throw error when disabled', () => {
      const intervalBytes = 1024 * 512;
      const stackDepth = 32;
      const profiler = new HeapProfiler(intervalBytes, stackDepth);
      profiler.disable();
      assert.throws(
          () => {
            profiler.profile();
          },
          (err: Error) => {
            return err.message === 'Heap profiler is not enabled.';
          });
    });
  });
});
