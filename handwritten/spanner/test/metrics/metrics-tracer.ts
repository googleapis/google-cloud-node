// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {status as Status} from '@grpc/grpc-js';
import * as assert from 'assert';
import * as sinon from 'sinon';
import * as Constants from '../../src/metrics/constants';
import {MetricsTracer} from '../../src/metrics/metrics-tracer';

import {MetricsTracerFactory} from '../../src/metrics/metrics-tracer-factory';
import {Spanner} from '../../src';

const DATABASE = 'test-db';
const INSTANCE = 'instance';
const PROJECT_ID = 'project_id';
const METHOD = 'test-method';
const REQUEST = 'test-request';

describe('MetricsTracer', () => {
  let tracer: MetricsTracer;
  let fakeAttemptCounter: any;
  let fakeAttemptLatency: any;
  let fakeOperationCounter: any;
  let fakeOperationLatency: any;
  let fakeGfeCounter: any;
  let fakeGfeLatency: any;
  let fakeAfeCounter: any;
  let fakeAfeLatency: any;
  let sandbox: sinon.SinonSandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    fakeAttemptCounter = {
      add: sinon.spy(),
    };

    fakeAttemptLatency = {
      record: sinon.spy(),
    };

    fakeOperationCounter = {
      add: sinon.spy(),
    };

    fakeOperationLatency = {
      record: sinon.spy(),
    };

    fakeGfeCounter = {
      add: sinon.spy(),
    };

    fakeGfeLatency = {
      record: sinon.spy(),
    };

    fakeAfeCounter = {
      add: sinon.spy(),
    };

    fakeAfeLatency = {
      record: sinon.spy(),
    };

    tracer = new MetricsTracer(
      fakeAttemptCounter,
      fakeAttemptLatency,
      fakeOperationCounter,
      fakeOperationLatency,
      fakeGfeCounter,
      fakeGfeLatency,
      fakeAfeCounter,
      fakeAfeLatency,
      true, // enabled,
      DATABASE,
      INSTANCE,
      PROJECT_ID,
      METHOD,
      REQUEST,
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('recordAttemptCompletion', () => {
    it('should record attempt latency when enabled', () => {
      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      assert.ok(tracer.currentOperation!.currentAttempt);
      assert.ok(tracer.currentOperation!.currentAttempt.startTime);
      assert.strictEqual(tracer.currentOperation!.attemptCount, 1);

      tracer.recordAttemptCompletion(Status.OK);

      assert.strictEqual(fakeAttemptLatency.record.calledOnce, true);
      const [[latency, otelAttrs]] = fakeAttemptLatency.record.args;
      assert.strictEqual(typeof latency, 'number');
      assert.strictEqual(
        otelAttrs[Constants.METRIC_LABEL_KEY_STATUS],
        Status[Status.OK],
      );
    });

    it('should record fractional latency with sub-millisecond precision', () => {
      const nowStub = sandbox.stub(performance, 'now');
      nowStub.onCall(0).returns(100.0); // op start
      nowStub.onCall(1).returns(200.5); // attempt start
      nowStub.onCall(2).returns(202.75); // attempt end

      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);

      assert.strictEqual(fakeAttemptLatency.record.calledOnce, true);
      const [[latency]] = fakeAttemptLatency.record.args;
      assert.strictEqual(latency, 2.25); // 202.75 - 200.5
    });

    it('should do nothing if disabled', () => {
      tracer.enabled = false;
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      assert.strictEqual(fakeAttemptLatency.record.called, false);
    });
  });

  describe('recordOperationCompletion', () => {
    it('should record operation and attempt metrics when enabled', () => {
      const factory = sandbox
        .stub(MetricsTracerFactory, 'getInstance')
        .returns({
          clearCurrentTracer: sinon.spy(),
        } as any);
      tracer.recordOperationStart();
      assert.ok(tracer.currentOperation!.startTime);
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationCounter.add.calledOnce, true);
      assert.strictEqual(fakeAttemptCounter.add.calledOnce, true);
      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);

      const [[_, opAttrs]] = fakeOperationLatency.record.args;
      assert.strictEqual(opAttrs[Constants.METRIC_LABEL_KEY_STATUS], 'OK');
    });

    it('should record fractional operation latency with sub-millisecond precision', () => {
      const nowStub = sandbox.stub(performance, 'now');
      nowStub.onCall(0).returns(100.5); // op start
      nowStub.onCall(1).returns(105.0); // attempt start
      nowStub.onCall(2).returns(108.0); // attempt end
      nowStub.onCall(3).returns(110.25); // op end

      sandbox.stub(MetricsTracerFactory, 'getInstance').returns({
        clearCurrentTracer: sinon.spy(),
      } as any);

      tracer.recordOperationStart();
      tracer.recordAttemptStart();
      tracer.recordAttemptCompletion(Status.OK);
      tracer.recordOperationCompletion();

      assert.strictEqual(fakeOperationLatency.record.calledOnce, true);
      const [[latency]] = fakeOperationLatency.record.args;
      assert.strictEqual(latency, 9.75); // 110.25 - 100.5
    });

    it('should do nothing if disabled', () => {
      tracer.enabled = false;
      tracer.recordOperationCompletion();
      assert.strictEqual(fakeOperationCounter.add.called, false);
      assert.strictEqual(fakeOperationLatency.record.called, false);
    });
  });

  describe('recordGfeLatency', () => {
    it('should record GFE latency if enabled', () => {
      tracer.enabled = true;
      tracer.gfeLatency = 123;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.calledOnce, true);
    });

    it('should record GFE latency when value is zero', () => {
      tracer.enabled = true;
      tracer.gfeLatency = 0;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.calledOnce, true);
      assert.strictEqual(fakeGfeLatency.record.getCall(0).args[0], 0);
      assert.strictEqual(tracer.gfeLatency, null);
    });

    it('should not record GFE latency and log error when latency is null', () => {
      const errorStub = sandbox.stub(console, 'error');
      tracer.enabled = true;
      tracer.gfeLatency = null;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.called, false);
      assert.strictEqual(errorStub.calledOnce, true);
    });

    it('should not record if disabled', () => {
      tracer.enabled = false;
      tracer.gfeLatency = 123;
      tracer.recordGfeLatency(Status.OK);
      assert.strictEqual(fakeGfeLatency.record.called, false);
    });
  });

  describe('recordGfeConnectivityErrorCount', () => {
    it('should increment GFE error counter if enabled', () => {
      tracer.recordGfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeGfeCounter.add.calledOnce, true);
    });

    it('should not increment if disabled', () => {
      tracer.enabled = false;
      tracer.recordGfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeGfeCounter.add.called, false);
    });
  });

  describe('recordAfeLatency', () => {
    afterEach(() => {
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'false';
    });

    it('should record AFE latency if enabled', () => {
      tracer.enabled = true;
      tracer.afeLatency = 123;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.calledOnce, true);
    });

    it('should record AFE latency when value is zero', () => {
      tracer.enabled = true;
      tracer.afeLatency = 0;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.calledOnce, true);
      assert.strictEqual(fakeAfeLatency.record.getCall(0).args[0], 0);
      assert.strictEqual(tracer.afeLatency, null);
    });

    it('should not record AFE latency and log error when latency is null', () => {
      const errorStub = sandbox.stub(console, 'error');
      tracer.enabled = true;
      tracer.afeLatency = null;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);
      assert.strictEqual(errorStub.calledOnce, true);
    });

    it('should not record if AFE server timing is disabled', () => {
      tracer.enabled = true;
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'true';
      tracer.afeLatency = 123;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);
    });

    it('should not record if metrics are disabled', () => {
      tracer.enabled = false;
      tracer.afeLatency = 123;
      tracer.recordAfeLatency(Status.OK);
      assert.strictEqual(fakeAfeLatency.record.called, false);
    });
  });

  describe('recordGfeConnectivityErrorCount', () => {
    afterEach(() => {
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'false';
    });

    it('should increment AFE error counter if enabled', () => {
      tracer.enabled = true;
      tracer.recordAfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeAfeCounter.add.calledOnce, true);
    });

    it('should not increment if metrics are disabled', () => {
      tracer.enabled = false;
      tracer.recordAfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeAfeCounter.add.called, false);
    });

    it('should not increment if AFE server timing is disabled', () => {
      tracer.enabled = true;
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'true';
      tracer.recordAfeConnectivityErrorCount(Status.OK);
      assert.strictEqual(fakeAfeCounter.add.called, false);
    });
  });

  describe('extractGfeLatency & extractAfeLatency', () => {
    let tracer: MetricsTracer;
    beforeEach(() => {
      tracer = new MetricsTracer(
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        DATABASE,
        INSTANCE,
        PROJECT_ID,
        METHOD,
        REQUEST,
      );
    });

    it('should extract afe and gfe latency from a valid server-timing header', () => {
      const header = 'gfet4t7; dur=123, afe; dur=30, other=value';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, 123);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, 30);
    });

    it('should return null if header is undefined', () => {
      const gfeLatency = tracer.extractGfeLatency(undefined as any);
      assert.strictEqual(gfeLatency, null);
      const afeLatency = tracer.extractAfeLatency(undefined as any);
      assert.strictEqual(afeLatency, null);
    });

    it('should return null if header does not match expected format', () => {
      const header = 'some-other-header';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, null);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, null);
    });

    it('should extract only the gfe latency if extra data is present', () => {
      const header = 'gfet4t7; dur=456; other=value';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, 456);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, null);
    });

    it('should extract only the afe latency if extra data is present', () => {
      const header = 'other=value, afe; dur=30; ';
      const gfeLatency = tracer.extractGfeLatency(header);
      assert.strictEqual(gfeLatency, null);
      const afeLatency = tracer.extractAfeLatency(header);
      assert.strictEqual(afeLatency, 30);
    });

    it('should extract zero latency correctly', () => {
      const header = 'gfet4t7; dur=0, afe; dur=0';
      assert.strictEqual(tracer.extractGfeLatency(header), 0);
      assert.strictEqual(tracer.extractAfeLatency(header), 0);
    });

    it('should return null for empty or non-string header', () => {
      assert.strictEqual(tracer.extractGfeLatency(''), null);
      assert.strictEqual(tracer.extractAfeLatency(''), null);
      assert.strictEqual(tracer.extractGfeLatency(null as any), null);
      assert.strictEqual(tracer.extractAfeLatency(null as any), null);
      assert.strictEqual(tracer.extractGfeLatency(123 as any), null);
      assert.strictEqual(tracer.extractAfeLatency(123 as any), null);
    });

    it('should return null for non-numeric or negative durations', () => {
      assert.strictEqual(tracer.extractGfeLatency('gfet4t7; dur='), null);
      assert.strictEqual(tracer.extractGfeLatency('gfet4t7; dur=abc'), null);
      assert.strictEqual(tracer.extractGfeLatency('gfet4t7; dur=-10'), null);
      assert.strictEqual(tracer.extractAfeLatency('afe; dur='), null);
      assert.strictEqual(tracer.extractAfeLatency('afe; dur=xyz'), null);
      assert.strictEqual(tracer.extractAfeLatency('afe; dur=-5'), null);
    });

    it('should correctly distinguish prefixes embedded in longer metric names', () => {
      const header = 'safe; dur=50, afe; dur=30';
      assert.strictEqual(tracer.extractGfeLatency(header), null);
      assert.strictEqual(tracer.extractAfeLatency(header), 30);
    });

    it('should support various delimiters such as comma without space and tabs', () => {
      const commaSeparated = 'other=val,afe; dur=40';
      assert.strictEqual(tracer.extractAfeLatency(commaSeparated), 40);

      const tabSeparated = 'other=val\tafe; dur=50';
      assert.strictEqual(tracer.extractAfeLatency(tabSeparated), 50);
    });

    it('should extract integer milliseconds from fractional durations', () => {
      const header = 'gfet4t7; dur=123.45, afe; dur=67.89';
      assert.strictEqual(tracer.extractGfeLatency(header), 123);
      assert.strictEqual(tracer.extractAfeLatency(header), 67);
    });

    it('should skip earlier invalid occurrences and find valid subsequent occurrence', () => {
      const header = 'gfet4t7; dur=invalid, gfet4t7; dur=123';
      assert.strictEqual(tracer.extractGfeLatency(header), 123);
    });

    it('should return null when prefix is embedded in longer metric name with no subsequent match', () => {
      assert.strictEqual(tracer.extractAfeLatency('safe; dur=50'), null);
      assert.strictEqual(tracer.extractGfeLatency('notgfet4t7; dur=50'), null);
    });

    it('should return null if AFE server timing is disabled', () => {
      sandbox.stub(Spanner, 'isAFEServerTimingEnabled').returns(false);
      const header = 'afe; dur=30';
      assert.strictEqual(tracer.extractAfeLatency(header), null);
    });
  });
});
