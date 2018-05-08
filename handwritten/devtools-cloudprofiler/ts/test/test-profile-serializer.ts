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
import * as sinon from 'sinon';
import {perftools} from '../../proto/profile';
import {serializeHeapProfile, serializeTimeProfile} from '../src/profilers/profile-serializer';
import {TimeProfile, TimeProfileNode} from '../src/v8-types';

import {anonymousFunctionHeapProfile, anonymousFunctionTimeProfile, heapProfile, timeProfile, v8AnonymousFunctionHeapProfile, v8AnonymousFunctionTimeProfile, v8HeapProfile, v8TimeProfile} from './profiles-for-tests';

const assert = require('assert');

describe('serializeTimeProfile', () => {
  let dateStub: sinon.SinonStub;

  before(() => {
    dateStub = sinon.stub(Date, 'now').returns(0);
  });
  after(() => {
    dateStub.restore();
  });
  it('should produce expected profile', () => {
    const timeProfileOut = serializeTimeProfile(v8TimeProfile, 1000);
    assert.deepEqual(timeProfileOut, timeProfile);
  });
  it('should produce expected profile when there is anyonmous function', () => {
    const timeProfileOut =
        serializeTimeProfile(v8AnonymousFunctionTimeProfile, 1000);
    assert.deepEqual(timeProfileOut, anonymousFunctionTimeProfile);
  });
});

describe('serializeHeapProfile', () => {
  it('should produce expected profile', () => {
    const heapProfileOut = serializeHeapProfile(v8HeapProfile, 0, 512 * 1024);
    assert.deepEqual(heapProfileOut, heapProfile);
  });
  it('should produce expected profile when there is anyonmous function', () => {
    const heapProfileOut =
        serializeHeapProfile(v8AnonymousFunctionHeapProfile, 0, 512 * 1024);
    assert.deepEqual(heapProfileOut, anonymousFunctionHeapProfile);
  });
});
