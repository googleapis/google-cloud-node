/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
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

/* eslint-disable prefer-rest-params */

import {util} from '@google-cloud/common';
import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
const {
  AlwaysOnSampler,
  NodeTracerProvider,
  InMemorySpanExporter,
} = require('@opentelemetry/sdk-trace-node');
// eslint-disable-next-line n/no-extraneous-require
const {SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-base');
import {Session, Spanner} from '../src';
import * as bt from '../src/batch-transaction';

const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'BatchTransaction') {
      return;
    }
    assert.deepStrictEqual(options.exclude, ['identifier']);
  },
});

class FakeTimestamp {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakeCodec: any = {
  encode: util.noop,
  Timestamp: FakeTimestamp,
  Int() {},
  Float() {},
  SpannerDate() {},
  convertProtoTimestampToDate() {},
};

const SPANNER = {
  routeToLeaderEnabled: true,
};

const INSTANCE = {
  parent: SPANNER,
};

const DATABASE = {
  formattedName_: 'database',
  parent: INSTANCE,
};

class FakeTransaction {
  calledWith_: IArguments;
  session;
  constructor(session) {
    this.calledWith_ = arguments;
    this.session = session;
  }
  static encodeKeySet(): object {
    return {};
  }
  static encodeParams(): object {
    return {};
  }

  _getSpanner(): Spanner {
    return SPANNER as Spanner;
  }

  run() {}
  read() {}
}

describe('BatchTransaction', () => {
  const sandbox = sinon.createSandbox();

  // tslint:disable-next-line variable-name
  let BatchTransaction: typeof bt.BatchTransaction;
  let batchTransaction: bt.BatchTransaction;

  before(() => {
    BatchTransaction = proxyquire('../src/batch-transaction.js', {
      '@google-cloud/precise-date': {PreciseDate: FakeTimestamp},
      '@google-cloud/promisify': fakePfy,
      './codec.js': {codec: fakeCodec},
      './transaction.js': {Snapshot: FakeTransaction},
    }).BatchTransaction;
  });

  const traceExporter = new InMemorySpanExporter();
  const sampler = new AlwaysOnSampler();

  const provider = new NodeTracerProvider({
    sampler: sampler,
    exporter: traceExporter,
    spanProcessors: [new SimpleSpanProcessor(traceExporter)],
  });

  afterEach(() => {
    traceExporter.reset();
    sandbox.restore();
  });

  const REQUEST = sandbox.stub();
  const SESSION = {
    parent: DATABASE,
    formattedName_: 'abcdef',
    request: REQUEST,
  };
  const ID = '0xdeadbeef';

  const PARTITIONS = [{partitionToken: 'a'}, {partitionToken: 'b'}];
  const RESPONSE = {partitions: PARTITIONS};

  beforeEach(() => {
    batchTransaction = new BatchTransaction(SESSION as {} as Session);
    batchTransaction.session = SESSION as {} as Session;
    batchTransaction.id = ID;
    batchTransaction._observabilityOptions = {tracerProvider: provider};
    REQUEST.callsFake((_, callback) => callback(null, RESPONSE));
  });

  const GAX_OPTS = {};

  const QUERY = {
    sql: 'SELECT * FROM Singers',
    gaxOptions: GAX_OPTS,
    params: {},
    types: {},
  };

  it('createQueryPartitions', done => {
    batchTransaction.createQueryPartitions(QUERY, err => {
      assert.ifError(err);
      traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();
      assert.strictEqual(spans.length, 2, 'Exactly 2 spans expected');

      // Sort the spans by duration.
      spans.sort((spanA, spanB) => {
        spanA.duration < spanB.duration;
      });

      const actualSpanNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
      });

      const expectedSpanNames = [
        'CloudSpanner.BatchTransaction.createPartitions_',
        'CloudSpanner.BatchTransaction.createQueryPartitions',
      ];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      // Ensure that createPartitions_ is a child span of createQueryPartitions.
      const spanCreatePartitions_ = spans[0];
      const spanCreateQueryPartitions = spans[1];
      assert.ok(
        spanCreateQueryPartitions.spanContext().traceId,
        'Expected that createQueryPartitions has a defined traceId',
      );
      assert.ok(
        spanCreatePartitions_.spanContext().traceId,
        'Expected that createPartitions_ has a defined traceId',
      );
      assert.deepStrictEqual(
        spanCreatePartitions_.spanContext().traceId,
        spanCreateQueryPartitions.spanContext().traceId,
        'Expected that both spans share a traceId',
      );
      assert.ok(
        spanCreateQueryPartitions.spanContext().spanId,
        'Expected that createQueryPartitions has a defined spanId',
      );
      assert.ok(
        spanCreatePartitions_.spanContext().spanId,
        'Expected that createPartitions_ has a defined spanId',
      );
      assert.deepStrictEqual(
        spanCreatePartitions_.parentSpanContext.spanId,
        spanCreateQueryPartitions.spanContext().spanId,
        'Expected that createQueryPartitions is the parent to createPartitions_',
      );
      done();
    });
  });

  it('createReadPartitions', done => {
    const REQUEST = sandbox.stub();
    const response = {};
    REQUEST.callsFake((_, callback) => callback(null, response));

    batchTransaction.createReadPartitions(QUERY, err => {
      assert.ifError(err);
      traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();
      assert.strictEqual(spans.length, 2, 'Exactly 2 spans expected');

      // Sort the spans by duration.
      spans.sort((spanA, spanB) => {
        spanA.duration < spanB.duration;
      });

      const actualSpanNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
      });
      const expectedSpanNames = [
        'CloudSpanner.BatchTransaction.createPartitions_',
        'CloudSpanner.BatchTransaction.createReadPartitions',
      ];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );
      done();
    });
  });
});
