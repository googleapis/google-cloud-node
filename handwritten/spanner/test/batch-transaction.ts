/*!
 * Copyright 2018 Google Inc. All Rights Reserved.
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

import {Session, Database, Spanner} from '../src';
import {protos} from '../src';
import * as bt from '../src/batch-transaction';
import {PartialResultStream} from '../src/partial-result-stream';
import {
  CLOUD_RESOURCE_HEADER,
  LEADER_AWARE_ROUTING_HEADER,
} from '../src/common';
import {ExecuteSqlRequest} from '../src/transaction';
import {CallOptions} from 'google-gax';

let promisified = false;
const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'BatchTransaction') {
      return;
    }
    assert.deepStrictEqual(options.exclude, ['identifier']);
    promisified = true;
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

  const SESSION = {
    parent: DATABASE,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    delete: (callback: any) => {},
  };

  before(() => {
    BatchTransaction = proxyquire('../src/batch-transaction.js', {
      '@google-cloud/precise-date': {PreciseDate: FakeTimestamp},
      '@google-cloud/promisify': fakePfy,
      './codec.js': {codec: fakeCodec},
      './transaction.js': {Snapshot: FakeTransaction},
    }).BatchTransaction;
  });

  beforeEach(() => {
    batchTransaction = new BatchTransaction(SESSION as {} as Session);
  });

  afterEach(() => sandbox.restore());

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should extend the Snapshot class', () => {
      const batchTransaction = new BatchTransaction(SESSION as {} as Session);
      assert(batchTransaction instanceof FakeTransaction);
    });
  });

  describe('close', () => {
    it('should end the transaction', done => {
      batchTransaction.end = done;

      batchTransaction.close();
    });
  });

  describe('createQueryPartitions', () => {
    const GAX_OPTS = {a: 'b'};

    const fakeDirectedReadOptionsForRequest = {
      includeReplicas: {
        replicaSelections: [
          {
            location: 'us-west1',
            type: protos.google.spanner.v1.DirectedReadOptions.ReplicaSelection
              .Type.READ_WRITE,
          },
        ],
        autoFailoverDisabled: true,
      },
    };

    const QUERY: ExecuteSqlRequest = {
      sql: 'SELECT * FROM Singers',
      gaxOptions: GAX_OPTS as CallOptions,
      params: {},
      types: {},
      dataBoostEnabled: true,
      directedReadOptions: fakeDirectedReadOptionsForRequest,
    };

    it('should make the correct request using callback', () => {
      const fakeParams = {
        params: {a: 'b'},
        paramTypes: {a: 'string'},
        dataBoostEnabled: true,
        directedReadOptions: fakeDirectedReadOptionsForRequest,
      };

      const expectedQuery = Object.assign({sql: QUERY.sql}, fakeParams);
      const stub = sandbox.stub(batchTransaction, 'createPartitions_');

      (sandbox.stub(FakeTransaction, 'encodeParams') as sinon.SinonStub)
        .withArgs(QUERY)
        .returns(fakeParams);

      batchTransaction.createQueryPartitions(QUERY, assert.ifError);

      const {client, method, reqOpts, gaxOpts, headers} = stub.lastCall.args[0];
      assert.strictEqual(client, 'SpannerClient');
      assert.strictEqual(method, 'partitionQuery');
      assert.deepStrictEqual(reqOpts, expectedQuery);
      assert.strictEqual(gaxOpts, GAX_OPTS);
      assert.deepStrictEqual(
        headers,
        Object.assign({[LEADER_AWARE_ROUTING_HEADER]: 'true'}),
      );
    });

    it('should accept query as string in a callback based request to createQueryPartitions', () => {
      const query = 'SELECT * FROM Singers';

      const expectedQuery = Object.assign({}, {sql: query});
      const stub = sandbox.stub(batchTransaction, 'createPartitions_');

      (sandbox.stub(FakeTransaction, 'encodeParams') as sinon.SinonStub)
        .withArgs({sql: query})
        .returns({sql: query});

      batchTransaction.createQueryPartitions(query, assert.ifError);

      const {client, method, reqOpts, gaxOpts} = stub.lastCall.args[0];
      assert.strictEqual(client, 'SpannerClient');
      assert.strictEqual(method, 'partitionQuery');
      assert.deepStrictEqual(reqOpts, expectedQuery);
      assert.strictEqual(gaxOpts, undefined);
    });

    it('should make the correct request using await', async () => {
      const fakeParams = {
        params: {a: 'b'},
        paramTypes: {a: 'string'},
        dataBoostEnabled: true,
        directedReadOptions: fakeDirectedReadOptionsForRequest,
      };

      const expectedQuery = Object.assign({sql: QUERY.sql}, fakeParams);
      const stub = sandbox.stub(batchTransaction, 'createPartitions_');

      (sandbox.stub(FakeTransaction, 'encodeParams') as sinon.SinonStub)
        .withArgs(QUERY)
        .returns(fakeParams);

      await batchTransaction.createQueryPartitions(QUERY);

      const {client, method, reqOpts, gaxOpts, headers} = stub.lastCall.args[0];
      assert.strictEqual(client, 'SpannerClient');
      assert.strictEqual(method, 'partitionQuery');
      assert.deepStrictEqual(reqOpts, expectedQuery);
      assert.strictEqual(gaxOpts, GAX_OPTS);
      assert.deepStrictEqual(
        headers,
        Object.assign({[LEADER_AWARE_ROUTING_HEADER]: 'true'}),
      );
    });
  });

  describe('createPartitions_', () => {
    const REQUEST = sandbox.stub();
    const SESSION = {
      parent: DATABASE,
      formattedName_: 'abcdef',
      request: REQUEST,
    };
    const ID = 'ghijkl';
    const TIMESTAMP = {seconds: 0, nanos: 0};

    const PARTITIONS = [{partitionToken: 'a'}, {partitionToken: 'b'}];
    const RESPONSE = {partitions: PARTITIONS};

    const QUERY = {a: 'b'};
    const CONFIG = {reqOpts: QUERY};

    beforeEach(() => {
      batchTransaction.session = SESSION as {} as Session;
      batchTransaction.id = ID;

      REQUEST.callsFake((_, callback) => callback(null, RESPONSE));
    });

    it('should insert the session and transaction ids', () => {
      batchTransaction.createPartitions_(CONFIG, assert.ifError);

      const {reqOpts} = REQUEST.lastCall.args[0];
      assert.strictEqual(reqOpts.a, 'b');
      assert.strictEqual(reqOpts.session, SESSION.formattedName_);
      assert.deepStrictEqual(reqOpts.transaction, {id: ID});
    });

    it('should pass headers', done => {
      batchTransaction.createPartitions_(CONFIG, assert.ifError);
      const {headers} = REQUEST.lastCall.args[0];
      assert.deepStrictEqual(headers, {
        [CLOUD_RESOURCE_HEADER]: (batchTransaction.session.parent as Database)
          .formattedName_,
      });
      done();
    });

    it('should return any request errors', done => {
      const error = new Error('err');
      const response = {};

      REQUEST.callsFake((_, callback) => callback(error, response));

      batchTransaction.createPartitions_(CONFIG, (err, parts, resp) => {
        assert.strictEqual(err, error);
        assert.strictEqual(parts, null);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should return the prepared partition configs', done => {
      const expectedQuery = {
        a: 'b',
        session: SESSION.formattedName_,
        transaction: {id: ID},
      };

      batchTransaction.createPartitions_(CONFIG, (err, parts) => {
        assert.ifError(err);

        parts.forEach((partition, i) => {
          const expectedPartition = extend({}, expectedQuery, PARTITIONS[i]);
          assert.deepStrictEqual(partition, expectedPartition);
        });

        done();
      });
    });

    it('should update the transaction with returned metadata', done => {
      const response = extend({}, RESPONSE, {
        transaction: {
          id: ID,
          readTimestamp: TIMESTAMP,
        },
      });

      REQUEST.callsFake((_, callback) => callback(null, response));

      batchTransaction.createPartitions_(CONFIG, (err, parts, resp) => {
        assert.strictEqual(resp, response);
        assert.strictEqual(batchTransaction.id, ID);
        assert.strictEqual(batchTransaction.readTimestampProto, TIMESTAMP);

        const timestamp =
          batchTransaction.readTimestamp as unknown as FakeTimestamp;
        assert(timestamp instanceof FakeTimestamp);
        assert.strictEqual(timestamp.calledWith_[0], TIMESTAMP);

        done();
      });
    });
  });

  describe('createReadPartitions', () => {
    const GAX_OPTS = {};

    const fakeDirectedReadOptionsForRequest = {
      includeReplicas: {
        replicaSelections: [
          {
            location: 'us-west1',
            type: protos.google.spanner.v1.DirectedReadOptions.ReplicaSelection
              .Type.READ_WRITE,
          },
        ],
        autoFailoverDisabled: true,
      },
    };

    const QUERY = {
      table: 'abc',
      keys: ['a', 'b'],
      ranges: [{}, {}],
      gaxOptions: GAX_OPTS,
      dataBoostEnabled: true,
      directedReadOptions: fakeDirectedReadOptionsForRequest,
    };

    it('should make the correct request using callback', () => {
      const fakeKeySet = {};
      const expectedQuery = {
        table: QUERY.table,
        keySet: fakeKeySet,
        dataBoostEnabled: true,
        directedReadOptions: fakeDirectedReadOptionsForRequest,
      };

      const stub = sandbox.stub(batchTransaction, 'createPartitions_');

      (sandbox.stub(FakeTransaction, 'encodeKeySet') as sinon.SinonStub)
        .withArgs(QUERY)
        .returns(fakeKeySet);

      batchTransaction.createReadPartitions(QUERY, assert.ifError);

      const {client, method, reqOpts, gaxOpts, headers} = stub.lastCall.args[0];
      assert.strictEqual(client, 'SpannerClient');
      assert.strictEqual(method, 'partitionRead');
      assert.deepStrictEqual(reqOpts, expectedQuery);
      assert.strictEqual(gaxOpts, GAX_OPTS);
      assert.deepStrictEqual(
        headers,
        Object.assign({[LEADER_AWARE_ROUTING_HEADER]: 'true'}),
      );
    });

    it('should make the correct request using await', async () => {
      const fakeKeySet = {};
      const expectedQuery = {
        table: QUERY.table,
        keySet: fakeKeySet,
        dataBoostEnabled: true,
        directedReadOptions: fakeDirectedReadOptionsForRequest,
      };

      const stub = sandbox.stub(batchTransaction, 'createPartitions_');

      (sandbox.stub(FakeTransaction, 'encodeKeySet') as sinon.SinonStub)
        .withArgs(QUERY)
        .returns(fakeKeySet);

      await batchTransaction.createReadPartitions(QUERY);

      const {client, method, reqOpts, gaxOpts, headers} = stub.lastCall.args[0];
      assert.strictEqual(client, 'SpannerClient');
      assert.strictEqual(method, 'partitionRead');
      assert.deepStrictEqual(reqOpts, expectedQuery);
      assert.strictEqual(gaxOpts, GAX_OPTS);
      assert.deepStrictEqual(
        headers,
        Object.assign({[LEADER_AWARE_ROUTING_HEADER]: 'true'}),
      );
    });
  });

  describe('execute', () => {
    const directedReadOptionsForRequest = {
      includeReplicas: {
        replicaSelections: [
          {
            type: protos.google.spanner.v1.DirectedReadOptions.ReplicaSelection
              .Type.READ_ONLY,
          },
        ],
        autoFailoverDisabled: true,
      },
    };

    it('should make read requests for read partitions using callback', () => {
      const partition = {table: 'abc'};
      const stub = sandbox.stub(batchTransaction, 'read');

      batchTransaction.execute(partition, assert.ifError);

      const [table, options] = stub.lastCall.args;
      assert.strictEqual(table, partition.table);
      assert.strictEqual(options, partition);
    });

    it('should make query requests for non-read partitions', () => {
      const partition = {sql: 'SELECT * FROM Singers'};
      const stub = sandbox.stub(batchTransaction, 'run');

      batchTransaction.execute(partition, assert.ifError);

      const query = stub.lastCall.args[0];
      assert.strictEqual(query, partition);
    });

    it('should make read requests for read partitions with request options', () => {
      const partition = {
        table: 'abc',
        dataBoostEnabled: true,
        directedReadOptions: directedReadOptionsForRequest,
      };
      const stub = sandbox.stub(batchTransaction, 'read');

      batchTransaction.execute(partition, assert.ifError);

      const [table, options] = stub.lastCall.args;
      assert.strictEqual(table, partition.table);
      assert.strictEqual(options, partition);
    });

    it('should make query requests for non-read partitions with request options', () => {
      const partition = {
        sql: 'SELECT * FROM Singers',
        dataBoostEnabled: true,
        directedReadOptions: directedReadOptionsForRequest,
      };
      const stub = sandbox.stub(batchTransaction, 'run');

      batchTransaction.execute(partition, assert.ifError);

      const query = stub.lastCall.args[0];
      assert.strictEqual(query, partition);
    });

    it('should make read requests for read partitions using await', async () => {
      const partition = {table: 'abc'};
      const stub = sandbox.stub(batchTransaction, 'read');

      await batchTransaction.execute(partition);

      const [table, options] = stub.lastCall.args;
      assert.strictEqual(table, partition.table);
      assert.strictEqual(options, partition);
    });
  });

  describe('executeStream', () => {
    const STREAM = {} as PartialResultStream;

    it('should make read streams for read partitions', () => {
      const partition = {table: 'abc'};

      batchTransaction.createReadStream = (table, options) => {
        assert.strictEqual(table, partition.table);
        assert.strictEqual(options, partition);
        return STREAM;
      };

      const stream = batchTransaction.executeStream(partition);

      assert.strictEqual(stream, STREAM);
    });

    it('should make query streams for query partitions', () => {
      const partition = {sql: 'SELECT * FROM Singers'};

      batchTransaction.runStream = query => {
        assert.strictEqual(query, partition);
        return STREAM;
      };

      const stream = batchTransaction.executeStream(partition);

      assert.strictEqual(stream, STREAM);
    });
  });

  describe('identifier', () => {
    const ID = Buffer.from('abc');
    const SESSION = {id: 'def'};
    const TIMESTAMP = {seconds: 0, nanos: 0};

    beforeEach(() => {
      batchTransaction.id = ID;
      batchTransaction.session = SESSION as unknown as Session;
      batchTransaction.readTimestampProto = TIMESTAMP;
    });

    it('should create a transaction identifier', () => {
      const expectedId = ID.toString('base64');
      const identifier = batchTransaction.identifier();

      assert.strictEqual(identifier.transaction, expectedId);
      assert.strictEqual(identifier.session, SESSION.id);
      assert.strictEqual(identifier.timestamp, TIMESTAMP);
    });
  });
});
