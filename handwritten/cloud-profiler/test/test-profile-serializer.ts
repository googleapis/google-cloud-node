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
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';

import {
  serializeHeapProfile,
  serializeTimeProfile,
} from '../src/profile-serializer';
import {SourceMapper} from '../src/sourcemapper';

import {
  anonymousFunctionHeapProfile,
  anonymousFunctionTimeProfile,
  heapProfile,
  heapProfileExcludePath,
  heapProfileIncludePath,
  heapSourceProfile,
  mapDirPath,
  timeProfile,
  timeSourceProfile,
  v8AnonymousFunctionHeapProfile,
  v8AnonymousFunctionTimeProfile,
  v8HeapGeneratedProfile,
  v8HeapProfile,
  v8HeapWithPathProfile,
  v8TimeGeneratedProfile,
  v8TimeProfile,
} from './profiles-for-tests';

describe('Serialize profile', () => {
  let dateStub: sinon.SinonStub<[], number>;
  beforeEach(() => {
    dateStub = sinon.stub(Date, 'now').returns(0);
  });
  afterEach(() => {
    dateStub.restore();
  });

  describe('serializeTimeProfile', () => {
    it('should produce expected profile', () => {
      const timeProfileOut = serializeTimeProfile(v8TimeProfile, 1000);
      assert.deepStrictEqual(timeProfileOut, timeProfile);
    });
    it('should produce expected profile when there is anonymous function', () => {
      const timeProfileOut = serializeTimeProfile(
        v8AnonymousFunctionTimeProfile,
        1000
      );
      assert.deepStrictEqual(timeProfileOut, anonymousFunctionTimeProfile);
    });
    it('should map generated locations when sourceMapper is specified', async () => {
      const sourceMapper = await SourceMapper.create([mapDirPath]);
      const timeProfileOut = serializeTimeProfile(
        v8TimeGeneratedProfile,
        1000,
        sourceMapper
      );
      assert.deepStrictEqual(timeProfileOut, timeSourceProfile);
    });
  });

  describe('serializeHeapProfile', () => {
    it('should produce expected profile', () => {
      const heapProfileOut = serializeHeapProfile(v8HeapProfile, 0, 512 * 1024);
      assert.deepStrictEqual(heapProfileOut, heapProfile);
    });
    it('should produce expected profile when there is anonymous function', () => {
      const heapProfileOut = serializeHeapProfile(
        v8AnonymousFunctionHeapProfile,
        0,
        512 * 1024
      );
      assert.deepStrictEqual(heapProfileOut, anonymousFunctionHeapProfile);
    });
    it('should include all samples when ignoreSamplesPath is not specified', () => {
      const heapProfileOut = serializeHeapProfile(
        v8HeapWithPathProfile,
        0,
        512 * 1024
      );
      assert.deepStrictEqual(heapProfileOut, heapProfileIncludePath);
    });
    it('should exclude samples matching ignoreSamplesPath', () => {
      const heapProfileOut = serializeHeapProfile(
        v8HeapWithPathProfile,
        0,
        512 * 1024,
        '@google-cloud/profiler'
      );
      assert.deepStrictEqual(heapProfileOut, heapProfileExcludePath);
    });
    it('should map generated locations when sourceMapper is specified', async () => {
      const sourceMapper = await SourceMapper.create([mapDirPath]);
      const heapProfileOut = serializeHeapProfile(
        v8HeapGeneratedProfile,
        0,
        512 * 1024,
        undefined,
        sourceMapper
      );
      assert.deepStrictEqual(heapProfileOut, heapSourceProfile);
    });
  });
});
