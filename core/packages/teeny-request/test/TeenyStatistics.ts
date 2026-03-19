/**
 * @license
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
import {afterEach, before, beforeEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import {
  TeenyStatistics,
  TeenyStatisticsOptions,
  TeenyStatisticsWarning,
} from '../src/TeenyStatistics';

function hooksForEnvCleanupInThisContext() {
  const prevEnvMap: Map<string, string | undefined> = new Map([
    ['TEENY_REQUEST_WARN_CONCURRENT_REQUESTS', undefined],
  ]);

  before(() => {
    prevEnvMap.forEach((v, k, map) => {
      map.set(k, process.env[k]);
    });
  });

  afterEach(() => {
    prevEnvMap.forEach((v, k) => {
      if (v === undefined) {
        delete process.env[k];
        return;
      }

      process.env[k] = v;
    });
  });
}

describe('TeenyStatistics', () => {
  const sandbox = sinon.createSandbox();
  let emitWarnStub: sinon.SinonStub;

  beforeEach(() => {
    emitWarnStub = sandbox.stub(process, 'emitWarning');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('constructor', () => {
    hooksForEnvCleanupInThisContext();

    it('should have default concurrent requests', () => {
      assert.strictEqual(
        TeenyStatistics.DEFAULT_WARN_CONCURRENT_REQUESTS,
        5000,
      );
    });

    it('should use predefined options by default', () => {
      const t = new TeenyStatistics();
      assert.deepStrictEqual(t['_options'], {concurrentRequests: 5e3});
    });

    it('should allow constructor override', () => {
      const opts: TeenyStatisticsOptions = {concurrentRequests: 99};
      const t = new TeenyStatistics(Object.assign({}, opts));
      assert.deepStrictEqual(t['_options'], opts);
    });

    it('should allow env var override', () => {
      process.env.TEENY_REQUEST_WARN_CONCURRENT_REQUESTS = '42';
      const t = new TeenyStatistics();
      assert.deepStrictEqual(t['_options'], {concurrentRequests: 42});
    });

    it('should prefer constructor over env var override', () => {
      process.env.TEENY_REQUEST_WARN_CONCURRENT_REQUESTS = '123';
      const opts: TeenyStatisticsOptions = {concurrentRequests: 321};
      const t = new TeenyStatistics(Object.assign({}, opts));
      assert.deepStrictEqual(t['_options'], opts);
    });
  });

  describe('getOptions', () => {
    it('should return the options, including defaults', () => {
      const t = new TeenyStatistics();
      assert.deepStrictEqual(t.getOptions(), {
        concurrentRequests: TeenyStatistics.DEFAULT_WARN_CONCURRENT_REQUESTS,
      });
    });

    it('should return the non-default options', () => {
      const opts1: TeenyStatisticsOptions = {concurrentRequests: 123};
      const t = new TeenyStatistics(Object.assign({}, opts1));
      assert.deepStrictEqual(t.getOptions(), opts1);
    });

    it('should return a copy of the options', () => {
      const t = new TeenyStatistics();
      assert.notStrictEqual(t.getOptions(), t['_options']);
    });
  });

  describe('setOptions', () => {
    hooksForEnvCleanupInThisContext();

    it('should be optional and set to defaults', () => {
      const opts1: TeenyStatisticsOptions = {concurrentRequests: 123};
      const t = new TeenyStatistics(Object.assign({}, opts1));
      t.setOptions();
      assert.deepStrictEqual(t['_options'], {concurrentRequests: 5e3});
    });

    it('should override previously set using options', () => {
      const opts1: TeenyStatisticsOptions = {concurrentRequests: 123};
      const opts2: TeenyStatisticsOptions = {concurrentRequests: 321};
      const t = new TeenyStatistics(Object.assign({}, opts1));
      t.setOptions(Object.assign({}, opts2));
      assert.deepStrictEqual(t['_options'], opts2);
    });

    it('should override previously set using env var', () => {
      const opts1: TeenyStatisticsOptions = {concurrentRequests: 123};
      const t = new TeenyStatistics(Object.assign({}, opts1));
      assert.deepStrictEqual(t['_options'], {concurrentRequests: 123});
      process.env.TEENY_REQUEST_WARN_CONCURRENT_REQUESTS = '999';
      t.setOptions();
      assert.deepStrictEqual(t['_options'], {concurrentRequests: 999});
    });

    it('should return old options', () => {
      const opts1: TeenyStatisticsOptions = {concurrentRequests: 123};
      const opts2: TeenyStatisticsOptions = {concurrentRequests: 321};
      const t = new TeenyStatistics(Object.assign({}, opts1));
      const oldOpts = t.setOptions(Object.assign({}, opts2));
      assert.deepStrictEqual(oldOpts, opts1);
    });
  });

  describe('counters', () => {
    it('should return counters', () => {
      const t = new TeenyStatistics();
      assert.deepStrictEqual(t.counters, {concurrentRequests: 0});
    });

    it('should be read-only', () => {
      const t = new TeenyStatistics();
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (t as any).counters = {concurrentRequests: 99};
      });
    });
  });

  describe('request concurrency', () => {
    let t: TeenyStatistics;
    beforeEach(() => {
      t = new TeenyStatistics();
    });

    it('should increment concurrency count', () => {
      let numExpected = 0;
      assert.strictEqual(t.counters.concurrentRequests, numExpected);

      t.requestStarting();
      numExpected++;
      assert.strictEqual(t.counters.concurrentRequests, numExpected);

      t.requestStarting();
      numExpected++;
      assert.strictEqual(t.counters.concurrentRequests, numExpected);

      t.requestStarting();
      numExpected++;
      assert.strictEqual(t.counters.concurrentRequests, numExpected);

      for (let i = 0; i < 100; i++) {
        t.requestStarting();
        numExpected++;
      }
      assert.strictEqual(t.counters.concurrentRequests, numExpected);
    });

    it('should decrement concurrency count', () => {
      let numExpected = 0;
      assert.strictEqual(t.counters.concurrentRequests, 0);

      for (let i = 0; i < 100; i++) {
        t.requestStarting();
        numExpected++;
      }

      t.requestFinished();
      numExpected--;
      assert.strictEqual(t.counters.concurrentRequests, numExpected);

      t.requestFinished();
      numExpected--;
      assert.strictEqual(t.counters.concurrentRequests, numExpected);

      t.requestFinished();
      numExpected--;
      assert.strictEqual(t.counters.concurrentRequests, numExpected);

      for (let i = numExpected; i > 0; i--) {
        t.requestFinished();
        numExpected--;
      }
      assert.strictEqual(t.counters.concurrentRequests, 0);
    });

    it('should emit a warning upon reaching threshold', () => {
      for (let i = 0; i < 5e3 - 1; i++) {
        t.requestStarting();
      }
      assert(emitWarnStub.notCalled);

      t.requestStarting();
      assert(
        emitWarnStub.calledOnceWith(
          sinon.match.instanceOf(TeenyStatisticsWarning),
        ),
      );
    });

    it('should not re-emit once emitted', () => {
      for (let i = 0; i < 5e3 - 1; i++) {
        t.requestStarting();
      }
      assert(emitWarnStub.notCalled);

      // first time emitting
      t.requestStarting();
      assert(
        emitWarnStub.calledOnceWith(
          sinon.match.instanceOf(TeenyStatisticsWarning),
        ),
      );

      // shouldn't emit on the next call (i.e. still greater than threshold)
      t.requestStarting();
      assert(emitWarnStub.calledOnce);

      // shouldn't emit after twice the threshold (possible bad math/logic)
      for (let i = 0; i < 5e3; i++) {
        t.requestStarting();
      }
      assert(emitWarnStub.calledOnce);
    });

    it('should not re-emit when yoyoing threshold', () => {
      for (let i = 0; i < 5e3 - 1; i++) {
        t.requestStarting();
      }
      assert(emitWarnStub.notCalled);

      // first time emitting
      t.requestStarting();
      assert(
        emitWarnStub.calledOnceWith(
          sinon.match.instanceOf(TeenyStatisticsWarning),
        ),
      );

      // let's bring the counter back down
      for (let i = 5e3; i >= 0; i--) {
        t.requestFinished();
      }

      // and bring it back again surpassing the threshold
      for (let i = 0; i < 5e3 * 2; i++) {
        t.requestStarting();
      }
      assert(emitWarnStub.calledOnce);
    });

    it('should emit a TeenyStatisticsWarning', () => {
      for (let i = 0; i < 5e3; i++) {
        t.requestStarting();
      }
      assert(emitWarnStub.calledOnce);

      const warning = emitWarnStub.firstCall.args[0] as TeenyStatisticsWarning;
      assert.strictEqual(warning.threshold, 5e3);
      assert.strictEqual(warning.value, 5e3);
      assert.strictEqual(
        warning.type,
        TeenyStatisticsWarning.CONCURRENT_REQUESTS,
      );
    });

    it('should emit a helpful message', () => {
      for (let i = 0; i < 5e3; i++) {
        t.requestStarting();
      }
      assert(emitWarnStub.calledOnce);

      const errStr: string = emitWarnStub.firstCall.args[0].toString();
      assert(
        errStr.includes('Possible excessive concurrent requests detected.'),
        'describes the nature of the warning',
      );
      assert(
        errStr.includes('TEENY_REQUEST_WARN_CONCURRENT_REQUESTS'),
        'mentions env var',
      );
      assert(
        errStr.includes('concurrentRequests'),
        'mentions concurrentRequests option',
      );
      assert(errStr.search(/\b0\b/) !== -1, 'mentions 0');
    });
  });
});
