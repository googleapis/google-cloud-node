/*!
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

/* eslint-disable prefer-rest-params */

import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, describe, it} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import {
  CLOUD_RESOURCE_HEADER,
  LEADER_AWARE_ROUTING_HEADER,
  AFE_SERVER_TIMING_HEADER,
} from '../src/common';
import {Database, Instance, Spanner} from '../src';
import {
  X_GOOG_SPANNER_REQUEST_ID_HEADER,
  craftRequestId,
} from '../src/request_id_header';

let promisified = false;
const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'Session') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'delete',
      'partitionedDml',
      'snapshot',
      'transaction',
    ]);
  },
});

class FakeGrpcServiceObject {
  calledWith_: IArguments;
  parent: Database;
  constructor() {
    this.calledWith_ = arguments;
    this.parent = arguments[0].parent;
  }
}

class FakeSnapshot {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeTransaction extends FakeSnapshot {}
class FakePartitionedDml extends FakeSnapshot {}

describe('Session', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Session: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let session: any;

  const SPANNER = {
    routeToLeaderEnabled: true,
  } as {} as Spanner;

  const INSTANCE = {
    parent: SPANNER,
  } as {} as Instance;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DATABASE: any = {
    request: () => {},
    formattedName_: 'formatted-database-name',
    parent: INSTANCE,
  };

  const NAME = 'session-name';

  before(() => {
    Session = proxyquire('../src/session.js', {
      './common-grpc/service-object': {
        GrpcServiceObject: FakeGrpcServiceObject,
      },
      '@google-cloud/promisify': fakePfy,
      './transaction.js': {
        Snapshot: FakeSnapshot,
        Transaction: FakeTransaction,
        PartitionedDml: FakePartitionedDml,
      },
    }).Session;
  });

  beforeEach(() => {
    session = new Session(DATABASE, NAME);
    session.parent = DATABASE;
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the request function', () => {
      assert.strictEqual(session.request, DATABASE.request);
    });

    it('should localize the requestStream function', () => {
      assert.strictEqual(session.requestStream, DATABASE.requestStream);
    });

    it('should format the name', () => {
      const formatName_ = Session.formatName_;
      const formattedName = 'formatted-name';

      Session.formatName_ = (databaseName, name) => {
        Session.formatName_ = formatName_;
        assert.strictEqual(databaseName, DATABASE.formattedName_);
        assert.strictEqual(name, NAME);
        return formattedName;
      };

      const instance = new Session(DATABASE, NAME);
      assert(instance.formattedName_, formattedName);
    });

    it('should inherit from ServiceObject', () => {
      assert(session instanceof FakeGrpcServiceObject);

      const calledWith = session.calledWith_[0];

      assert.strictEqual(calledWith.parent, DATABASE);
      assert.strictEqual(calledWith.id, NAME);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
      });
    });

    it('should set the commonHeaders_', () => {
      assert.deepStrictEqual(session.commonHeaders_, {
        [CLOUD_RESOURCE_HEADER]: session.parent.formattedName_,
        [AFE_SERVER_TIMING_HEADER]: 'true',
      });
    });

    describe('createMethod', () => {
      it('should create and return a Session', done => {
        const options = {};

        const apiResponse = {};

        const createdSession = {
          uniqueProperty: true,
        };

        const databaseInstance = extend({}, DATABASE, {
          createSession(options_, callback) {
            assert.strictEqual(options_, options);
            callback(null, createdSession, apiResponse);
          },
        });

        const session = new Session(databaseInstance, NAME);
        assert(session instanceof FakeGrpcServiceObject);

        session.calledWith_[0].createMethod(
          null,
          options,
          (err, sess, resp) => {
            assert.ifError(err);

            assert.strictEqual(sess, session);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.strictEqual((session as any).uniqueProperty, true);

            assert.strictEqual(resp, apiResponse);

            done();
          },
        );
      });

      it('should check for options', done => {
        const databaseInstance = extend({}, DATABASE, {
          createSession(options, callback) {
            assert.deepStrictEqual(options, {});
            callback(null, {}, apiResponse);
          },
        });

        const session = new Session(databaseInstance, NAME);
        const apiResponse = {};

        session.calledWith_[0].createMethod(null, (err, sess, resp) => {
          assert.ifError(err);
          assert.strictEqual(sess, session);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should return an error from creating a Session', done => {
        const error = new Error('Error.');
        const apiResponse = {};

        const databaseInstance = extend({}, DATABASE, {
          createSession(options_, callback) {
            callback(error, null, apiResponse);
          },
        });

        const session = new Session(databaseInstance, NAME);
        assert(session instanceof FakeGrpcServiceObject);

        session.calledWith_[0].createMethod(null, (err, sess, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(sess, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('formatName_', () => {
    const PATH = DATABASE.formattedName_ + '/sessions/' + NAME;

    it('should return the name if already formatted', () => {
      assert.strictEqual(
        Session.formatName_(DATABASE.formattedName_, PATH),
        PATH,
      );
    });

    it('should format the name', () => {
      const formattedName = Session.formatName_(DATABASE.formattedName_, NAME);
      assert.strictEqual(formattedName, PATH);
    });
  });

  describe('delete', () => {
    it('should correctly call and return the request', () => {
      const requestReturnValue = {};

      function callback() {}

      session.request = (config, callback_) => {
        assert.strictEqual(config.client, 'SpannerClient');
        assert.strictEqual(config.method, 'deleteSession');
        assert.deepStrictEqual(config.reqOpts, {
          name: session.formattedName_,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(config.headers, {
          ...session.commonHeaders_,
          [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
        });

        assert.strictEqual(callback_, callback);
        return requestReturnValue;
      };

      const returnValue = session.delete(callback);
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      session.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      session.delete(gaxOptions, assert.ifError);
    });
  });

  describe('getMetadata', () => {
    it('should correctly call and return the request using callback', done => {
      const requestReturnValue = {};

      session.request = (config, callback) => {
        assert.strictEqual(config.client, 'SpannerClient');
        assert.strictEqual(config.method, 'getSession');
        assert.deepStrictEqual(config.reqOpts, {
          name: session.formattedName_,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(
          config.headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            session.commonHeaders_,
          ),
        );
        callback(null, requestReturnValue);
      };

      session.getMetadata((err, returnValue) => {
        assert.ifError(err);
        assert.strictEqual(returnValue, requestReturnValue);
        done();
      });
    });

    it('should correctly call and return the request using promise', async () => {
      const requestReturnValue = {};

      session.request = config => {
        assert.strictEqual(config.client, 'SpannerClient');
        assert.strictEqual(config.method, 'getSession');
        assert.deepStrictEqual(config.reqOpts, {
          name: session.formattedName_,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(
          config.headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            session.commonHeaders_,
          ),
        );
        return new Promise(resolve => resolve(requestReturnValue));
      };

      const returnValue = await session.getMetadata();
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should correctly call and return the request with Leader Aware Routing disabled.', () => {
      const requestReturnValue = {};

      function callback() {}

      session.parent.parent.parent.routeToLeaderEnabled = false;
      session.request = config => {
        assert.strictEqual(config.client, 'SpannerClient');
        assert.strictEqual(config.method, 'getSession');
        assert.deepStrictEqual(config.reqOpts, {
          name: session.formattedName_,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(config.headers, session.commonHeaders_);
        return requestReturnValue;
      };

      const returnValue = session.getMetadata(callback);
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should accept and pass gaxOptions to request', done => {
      const gaxOptions = {};
      session.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      session.getMetadata(gaxOptions, assert.ifError);
    });

    it('should update metadata', done => {
      const metadata = {};
      session.request = (config, callback) => {
        callback(null, metadata);
      };
      session.getMetadata(err => {
        assert.ifError(err);
        assert.strictEqual(session.metadata, metadata);
        done();
      });
    });

    it('should call callback with error', done => {
      const error = new Error('Error');
      session.request = (config, callback) => {
        callback(error);
      };
      session.getMetadata(err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('keepAlive', () => {
    it('should correctly call and return the request', () => {
      const requestReturnValue = {};

      function callback() {}

      session.request = (config, callback_) => {
        assert.strictEqual(config.client, 'SpannerClient');
        assert.strictEqual(config.method, 'executeSql');
        assert.deepStrictEqual(config.reqOpts, {
          session: session.formattedName_,
          sql: 'SELECT 1',
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(config.headers, {
          ...session.commonHeaders_,
          [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
        });
        assert.strictEqual(callback_, callback);
        return requestReturnValue;
      };

      const returnValue = session.keepAlive(callback);
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      session.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      session.keepAlive(gaxOptions, assert.ifError);
    });
  });

  describe('partitionedDml', () => {
    it('should return a Transaction object', () => {
      const pdml = session.partitionedDml();
      assert(pdml instanceof FakePartitionedDml);
      assert.strictEqual(pdml.calledWith_[0], session);
    });
  });

  describe('snapshot', () => {
    const OPTIONS = {};

    it('should return a Transaction object', () => {
      const snapshot = session.snapshot(OPTIONS);
      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(snapshot.calledWith_[0], session);
      assert.strictEqual(snapshot.calledWith_[1], OPTIONS);
    });
  });

  describe('transaction', () => {
    it('should return a Transaction object', () => {
      const transaction = session.transaction();
      assert(transaction instanceof FakeTransaction);
      assert.strictEqual(transaction.calledWith_[0], session);
    });
  });
});
