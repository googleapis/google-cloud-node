// Copyright 2019 Google LLC
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

/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */

import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, describe, it} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';

let promisified = false;
const fakePfy = Object.assign({}, pfy, {
  promisifyAll(klass) {
    if (klass.name === 'GrpcServiceObject') {
      promisified = true;
    }
  },
});

class FakeServiceObject {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

describe('GrpcServiceObject', () => {
  // tslint:disable-next-line:variable-name
  let GrpcServiceObject;
  let grpcServiceObject;

  const CONFIG = {};
  const PROTO_OPTS = {};
  const REQ_OPTS = {};

  before(() => {
    GrpcServiceObject = proxyquire('../../src/common-grpc/service-object', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePfy,
    }).GrpcServiceObject;
  });

  beforeEach(() => {
    grpcServiceObject = new GrpcServiceObject(CONFIG);

    grpcServiceObject.methods = {
      delete: {
        protoOpts: PROTO_OPTS,
        reqOpts: REQ_OPTS,
      },
      getMetadata: {
        protoOpts: PROTO_OPTS,
        reqOpts: REQ_OPTS,
      },
      setMetadata: {
        protoOpts: PROTO_OPTS,
        reqOpts: REQ_OPTS,
      },
    };
  });

  describe('instantiation', () => {
    it('should inherit from ServiceObject', () => {
      assert(grpcServiceObject instanceof FakeServiceObject);

      const calledWith = grpcServiceObject.calledWith_;
      assert.strictEqual(calledWith[0], CONFIG);
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      grpcServiceObject.request = (protoOpts, reqOpts, callback) => {
        const deleteMethod = grpcServiceObject.methods.delete;
        assert.strictEqual(protoOpts, deleteMethod.protoOpts);
        assert.strictEqual(reqOpts, deleteMethod.reqOpts);
        callback(); // done()
      };

      grpcServiceObject.delete(done);
    });

    it('should not require a callback', done => {
      grpcServiceObject.request = (protoOpts, reqOpts, callback) => {
        assert.doesNotThrow(callback);
        done();
      };

      grpcServiceObject.delete();
    });
  });

  describe('getMetadata', () => {
    it('should make the correct request', done => {
      grpcServiceObject.request = (protoOpts, reqOpts, callback) => {
        const getMetadataMethod = grpcServiceObject.methods.getMetadata;
        assert.strictEqual(protoOpts, getMetadataMethod.protoOpts);
        assert.strictEqual(reqOpts, getMetadataMethod.reqOpts);
        callback(); // done()
      };

      grpcServiceObject.getMetadata(done);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        grpcServiceObject.request = (protoOpts, reqOpts, callback) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        grpcServiceObject.getMetadata((err, metadata, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {};

      beforeEach(() => {
        grpcServiceObject.request = (protoOpts, reqOpts, callback) => {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with metadata & API response', done => {
        grpcServiceObject.getMetadata((err, metadata, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should update the metadata on the instance', done => {
        grpcServiceObject.getMetadata(err => {
          assert.ifError(err);
          assert.strictEqual(grpcServiceObject.metadata, apiResponse);
          done();
        });
      });
    });
  });

  describe('setMetadata', () => {
    const DEFAULT_REQ_OPTS = {a: 'b'};
    const METADATA = {a: 'c'};

    it('should make the correct request', done => {
      const setMetadataMethod = grpcServiceObject.methods.setMetadata;
      const expectedReqOpts = extend(true, {}, DEFAULT_REQ_OPTS, METADATA);

      grpcServiceObject.methods.setMetadata.reqOpts = DEFAULT_REQ_OPTS;

      grpcServiceObject.request = (protoOpts, reqOpts, callback) => {
        assert.strictEqual(protoOpts, setMetadataMethod.protoOpts);
        assert.deepStrictEqual(reqOpts, expectedReqOpts);
        callback(); // done()
      };

      grpcServiceObject.setMetadata(METADATA, done);
    });

    it('should not require a callback', done => {
      grpcServiceObject.request = (protoOpts, reqOpts, callback) => {
        assert.doesNotThrow(callback);
        done();
      };

      grpcServiceObject.setMetadata(METADATA);
    });
  });

  describe('request', () => {
    it('should call the parent instance request method', () => {
      const args = [1, 2, 3];
      const expectedReturnValue = {};

      grpcServiceObject.parent = {
        request() {
          assert.strictEqual(this, grpcServiceObject.parent);
          assert.deepStrictEqual([].slice.call(arguments), args);
          return expectedReturnValue;
        },
      };

      const ret = grpcServiceObject.request.apply(grpcServiceObject, args);
      assert.strictEqual(ret, expectedReturnValue);
    });
  });

  describe('requestStream', () => {
    it('should call the parent instance requestStream method', () => {
      const args = [1, 2, 3];
      const expectedReturnValue = {};

      grpcServiceObject.parent = {
        requestStream() {
          assert.strictEqual(this, grpcServiceObject.parent);
          assert.deepStrictEqual([].slice.call(arguments), args);
          return expectedReturnValue;
        },
      };

      const ret = grpcServiceObject.requestStream.apply(
        grpcServiceObject,
        args,
      );
      assert.strictEqual(ret, expectedReturnValue);
    });
  });

  describe('requestWritableStream', () => {
    it('should call the parent requestWritableStream method', () => {
      const args = [1, 2, 3];
      const expectedReturnValue = {};

      grpcServiceObject.parent = {
        requestWritableStream() {
          assert.strictEqual(this, grpcServiceObject.parent);
          assert.deepStrictEqual([].slice.call(arguments), args);
          return expectedReturnValue;
        },
      };

      const ret = grpcServiceObject.requestWritableStream.apply(
        grpcServiceObject,
        args,
      );
      assert.strictEqual(ret, expectedReturnValue);
    });
  });
});
