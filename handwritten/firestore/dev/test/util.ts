// Copyright 2020 Google LLC
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
import {isPlainObject, tryGetPreferRestEnvironmentVariable} from '../src/util';
import * as sinon from 'sinon';

describe('isPlainObject()', () => {
  it('allows Object.create()', () => {
    expect(isPlainObject(Object.create({}))).to.be.true;
    expect(isPlainObject(Object.create(Object.prototype))).to.be.true;
    expect(isPlainObject(Object.create(null))).to.be.true;
  });

  it(' allows plain types', () => {
    expect(isPlainObject({foo: 'bar'})).to.be.true;
    expect(isPlainObject({})).to.be.true;
  });

  it('rejects custom types', () => {
    class Foo {}
    expect(isPlainObject(new Foo())).to.be.false;
    expect(isPlainObject(Object.create(new Foo()))).to.be.false;
  });

  describe('tryGetPreferRestEnvironmentVariable', () => {
    const sandbox = sinon.createSandbox();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let warnSpy: any;
    let originalValue: string | undefined;

    beforeEach(() => {
      warnSpy = sandbox.spy(console, 'warn');
      originalValue = process.env.FIRESTORE_PREFER_REST;
    });

    afterEach(() => {
      sandbox.restore();
      if (originalValue === undefined) {
        delete process.env.FIRESTORE_PREFER_REST;
      } else {
        process.env.FIRESTORE_PREFER_REST = originalValue;
      }
    });

    it('reads true', async () => {
      process.env.FIRESTORE_PREFER_REST = 'true';
      expect(tryGetPreferRestEnvironmentVariable()).to.be.true;
    });

    it('reads 1', async () => {
      process.env.FIRESTORE_PREFER_REST = '1';
      expect(tryGetPreferRestEnvironmentVariable()).to.be.true;
    });

    it('reads false', async () => {
      process.env.FIRESTORE_PREFER_REST = 'false';
      expect(tryGetPreferRestEnvironmentVariable()).to.be.false;
    });

    it('reads 0', async () => {
      process.env.FIRESTORE_PREFER_REST = '0';
      expect(tryGetPreferRestEnvironmentVariable()).to.be.false;
    });

    it('ignores case', async () => {
      process.env.FIRESTORE_PREFER_REST = 'True';
      expect(tryGetPreferRestEnvironmentVariable()).to.be.true;
    });

    it('trims whitespace', async () => {
      process.env.FIRESTORE_PREFER_REST = '  true  ';
      expect(tryGetPreferRestEnvironmentVariable()).to.be.true;
    });

    it('returns undefined when the environment variable is not set', async () => {
      delete process.env.FIRESTORE_PREFER_REST;
      expect(tryGetPreferRestEnvironmentVariable()).to.be.undefined;
      expect(warnSpy.calledOnce).to.be.false;
    });

    it('returns undefined and warns when the environment variable is set to an unsupported value', async () => {
      process.env.FIRESTORE_PREFER_REST = 'enable';
      expect(tryGetPreferRestEnvironmentVariable()).to.be.undefined;
      expect(warnSpy.calledOnce).to.be.true;
      expect(warnSpy.getCall(0).args[0]).to.match(
        /unsupported value.*FIRESTORE_PREFER_REST/,
      );
    });
  });
});
