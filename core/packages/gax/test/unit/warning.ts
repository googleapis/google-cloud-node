/**
 * Copyright 2020 Google LLC
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

import assert from 'assert';
import * as sinon from 'sinon';
import {describe, it} from 'mocha';

import {warn} from '../../src/warnings';

describe('warnings', () => {
  it('should warn the given code once with the first message', done => {
    const stub = sinon.stub(process, 'emitWarning');
    warn('code1', 'message1-1');
    warn('code1', 'message1-2');
    warn('code1', 'message1-3');
    assert(stub.calledOnceWith('message1-1'));
    stub.restore();
    done();
  });
  it('should warn each code once', done => {
    const stub = sinon.stub(process, 'emitWarning');
    warn('codeA', 'messageA-1');
    warn('codeB', 'messageB-1');
    warn('codeA', 'messageA-2');
    warn('codeB', 'messageB-2');
    warn('codeC', 'messageC-1');
    warn('codeA', 'messageA-3');
    assert.strictEqual(stub.callCount, 3);
    stub.restore();
    done();
  });
  it('should include warning type if type is provided', done => {
    const stub = sinon.stub(process, 'emitWarning');
    warn('codeD', 'messageD-1', 'WarningType1');
    assert(
      stub.calledWith('messageD-1', {
        type: 'WarningType1',
      }),
    );
    stub.restore();
    done();
  });
});
