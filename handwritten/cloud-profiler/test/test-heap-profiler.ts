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

import * as heapProfiler from '../src/heap-profiler';
import * as heapProfilerBindings from '../src/heap-profiler-bindings';
import {SourceMapper} from '../src/sourcemapper';

import {
  heapProfile,
  heapProfileExcludePath,
  heapProfileIncludePath,
  heapProfileWithExternal,
  heapSourceProfile,
  mapDirPath,
  v8HeapGeneratedProfile,
  v8HeapProfile,
  v8HeapWithPathProfile,
} from './profiles-for-tests';

const copy = (obj: object) => JSON.parse(JSON.stringify(obj));

describe('HeapProfiler', () => {
  const sinonStubs: Array<sinon.SinonStub> = [];
  const intervalBytes = 1024 * 512;
  const stackDepth = 32;

  afterEach(() => {
    heapProfiler.stop();
    sinonStubs.forEach(stub => {
      stub.restore();
    });
    sinonStubs.length = 0;
  });

  describe('profile (end-to-end)', () => {
    it('should throw when heap profiler has not been started', async () => {
      await assert.rejects(async () => {
        await heapProfiler.profile();
      }, /Heap profiler is not enabled\./);
      assert.throws(() => {
        void heapProfiler.v8Profile();
      }, /Heap profiler is not enabled\./);
    });

    it('should throw when started with different parameters while already enabled', () => {
      heapProfiler.start(intervalBytes, stackDepth);
      assert.throws(() => {
        heapProfiler.start(1024 * 128, 64);
      }, /Heap profiler is already started {2}with intervalBytes 524288 and stackDepth 64/);
    });

    it('should return a valid profile when started', async () => {
      heapProfiler.start(intervalBytes, stackDepth);
      const buffers: Buffer[] = [];
      for (let i = 0; i < 10; i++) {
        buffers.push(Buffer.alloc(64 * 1024));
      }
      const v8Result = await heapProfiler.v8Profile();
      assert.strictEqual(v8Result.name, '(root)');
      const result = await heapProfiler.profile();
      assert.ok(result.sampleType && result.sampleType.length === 2);
      assert.strictEqual(result.period, intervalBytes);
      assert.ok(buffers.length === 10);
    });
  });

  describe('profile (with stubs)', () => {
    it('should return a profile equal to the expected profile', async () => {
      const v8HeapProfileCopy = copy(v8HeapProfile);
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'startSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'stopSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon
          .stub(heapProfilerBindings, 'getAllocationProfile')
          .resolves(v8HeapProfileCopy)
      );
      sinonStubs.push(sinon.stub(Date, 'now').returns(0));
      sinonStubs.push(
        sinon.stub(process, 'memoryUsage').returns({
          external: 0,
          rss: 2,
          heapTotal: 3,
          heapUsed: 4,
          arrayBuffers: 0,
        })
      );

      heapProfiler.start(intervalBytes, stackDepth);
      const prof = await heapProfiler.profile();
      assert.deepStrictEqual(heapProfile, prof);
    });

    it('should add external memory to the profile when external > 0', async () => {
      const v8HeapProfileCopy = copy(v8HeapProfile);
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'startSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'stopSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon
          .stub(heapProfilerBindings, 'getAllocationProfile')
          .resolves(v8HeapProfileCopy)
      );
      sinonStubs.push(sinon.stub(Date, 'now').returns(0));
      sinonStubs.push(
        sinon.stub(process, 'memoryUsage').returns({
          external: 1024,
          rss: 2,
          heapTotal: 3,
          heapUsed: 4,
          arrayBuffers: 0,
        })
      );

      heapProfiler.start(intervalBytes, stackDepth);
      const prof = await heapProfiler.profile();
      assert.deepStrictEqual(heapProfileWithExternal, prof);
    });

    it('should exclude samples matching ignoreSamplePath', async () => {
      const v8HeapProfileCopy = copy(v8HeapWithPathProfile);
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'startSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'stopSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon
          .stub(heapProfilerBindings, 'getAllocationProfile')
          .resolves(v8HeapProfileCopy)
      );
      sinonStubs.push(sinon.stub(Date, 'now').returns(0));
      sinonStubs.push(
        sinon.stub(process, 'memoryUsage').returns({
          external: 0,
          rss: 2,
          heapTotal: 3,
          heapUsed: 4,
          arrayBuffers: 0,
        })
      );

      heapProfiler.start(intervalBytes, stackDepth);
      const profInclude = await heapProfiler.profile();
      assert.deepStrictEqual(heapProfileIncludePath, profInclude);

      sinonStubs[2].resolves(copy(v8HeapWithPathProfile));
      const profExclude = await heapProfiler.profile('@google-cloud/profiler');
      assert.deepStrictEqual(heapProfileExcludePath, profExclude);
    });

    it('should map generated locations when sourceMapper is specified', async () => {
      const sourceMapper = await SourceMapper.create([mapDirPath]);
      const v8HeapProfileCopy = copy(v8HeapGeneratedProfile);
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'startSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon.stub(heapProfilerBindings, 'stopSamplingHeapProfiler')
      );
      sinonStubs.push(
        sinon
          .stub(heapProfilerBindings, 'getAllocationProfile')
          .resolves(v8HeapProfileCopy)
      );
      sinonStubs.push(sinon.stub(Date, 'now').returns(0));
      sinonStubs.push(
        sinon.stub(process, 'memoryUsage').returns({
          external: 0,
          rss: 2,
          heapTotal: 3,
          heapUsed: 4,
          arrayBuffers: 0,
        })
      );

      heapProfiler.start(intervalBytes, stackDepth);
      const prof = await heapProfiler.profile(undefined, sourceMapper);
      assert.deepStrictEqual(heapSourceProfile, prof);
    });
  });
});
