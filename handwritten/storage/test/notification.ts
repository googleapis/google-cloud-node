/**
 * Copyright 2019 Google LLC
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

import {
  DecorateRequestOptions,
  ServiceObject,
  ServiceObjectConfig,
  util,
} from '@google-cloud/common';
import * as assert from 'assert';
import * as proxyquire from 'proxyquire';

import {Bucket} from '../src';

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('Notification', () => {
  // tslint:disable-next-line:variable-name no-any
  let Notification: any;
  // tslint:disable-next-line: no-any
  let notification: any;
  let promisified = false;
  const fakeUtil = Object.assign({}, util);
  const fakePromisify = {
    // tslint:disable-next-line:variable-name
    promisifyAll(Class: Function) {
      if (Class.name === 'Notification') {
        promisified = true;
      }
    },
  };

  const BUCKET = {
    createNotification: fakeUtil.noop,
  };

  const ID = '123';

  before(() => {
    Notification = proxyquire('../src/notification.js', {
      '@google-cloud/promisify': fakePromisify,
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    }).Notification;
  });

  beforeEach(() => {
    BUCKET.createNotification = fakeUtil.noop = () => {};
    notification = new Notification(BUCKET, ID);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from ServiceObject', () => {
      assert(notification instanceof FakeServiceObject);

      const calledWith = notification.calledWith_[0];

      assert.strictEqual(calledWith.parent, BUCKET);
      assert.strictEqual(calledWith.baseUrl, '/notificationConfigs');
      assert.strictEqual(calledWith.id, ID);

      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
      });
    });

    it('should use Bucket#createNotification for the createMethod', () => {
      const bound = () => {};

      Object.assign(BUCKET.createNotification, {
        bind(context: Bucket) {
          assert.strictEqual(context, BUCKET);
          return bound;
        },
      });

      const notification = new Notification(BUCKET, ID);
      const calledWith = notification.calledWith_[0];
      assert.strictEqual(calledWith.createMethod, bound);
    });

    it('should convert number IDs to strings', () => {
      const notification = new Notification(BUCKET, 1);
      const calledWith = notification.calledWith_[0];

      assert.strictEqual(calledWith.id, '1');
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      const options = {};

      notification.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.qs, options);
        callback(); // the done fn
      };

      notification.delete(options, done);
    });

    it('should optionally accept options', done => {
      notification.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        callback(); // the done fn
      };

      notification.delete(done);
    });

    it('should optionally accept a callback', done => {
      fakeUtil.noop = done;

      notification.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(); // the done fn
      };

      notification.delete();
    });
  });

  describe('get', () => {
    it('should get the metadata', done => {
      notification.getMetadata = () => {
        done();
      };

      notification.get(assert.ifError);
    });

    it('should accept an options object', done => {
      const options = {};

      notification.getMetadata = (options_: {}) => {
        assert.strictEqual(options_, options);
        done();
      };

      notification.get(options, assert.ifError);
    });

    it('should execute callback with error & metadata', done => {
      const error = new Error('Error.');
      const metadata = {};

      notification.getMetadata = (options: {}, callback: Function) => {
        callback(error, metadata);
      };

      notification.get((err: Error, instance: {}, metadata_: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(instance, null);
        assert.strictEqual(metadata_, metadata);

        done();
      });
    });

    it('should execute callback with instance & metadata', done => {
      const metadata = {};

      notification.getMetadata = (options: {}, callback: Function) => {
        callback(null, metadata);
      };

      notification.get((err: Error, instance: {}, metadata_: {}) => {
        assert.ifError(err);

        assert.strictEqual(instance, notification);
        assert.strictEqual(metadata_, metadata);

        done();
      });
    });

    describe('autoCreate', () => {
      let AUTO_CREATE_CONFIG: {};

      const ERROR = {code: 404};
      const METADATA = {};

      beforeEach(() => {
        AUTO_CREATE_CONFIG = {
          autoCreate: true,
        };

        notification.getMetadata = (options: {}, callback: Function) => {
          callback(ERROR, METADATA);
        };
      });

      it('should pass config to create if it was provided', done => {
        const config = Object.assign({}, AUTO_CREATE_CONFIG, {
          maxResults: 5,
        });

        notification.create = (config_: {}) => {
          assert.strictEqual(config_, config);
          done();
        };

        notification.get(config, assert.ifError);
      });

      it('should pass only a callback to create if no config', done => {
        notification.create = (callback: Function) => {
          callback(); // done()
        };

        notification.get(AUTO_CREATE_CONFIG, done);
      });

      describe('error', () => {
        it('should execute callback with error & API response', done => {
          const error = new Error('Error.');
          const apiResponse = {};

          notification.create = (callback: Function) => {
            notification.get = (config: {}, callback: Function) => {
              assert.deepStrictEqual(config, {});
              callback(); // done()
            };

            callback(error, null, apiResponse);
          };

          notification.get(
            AUTO_CREATE_CONFIG,
            (err: Error, instance: {}, resp: {}) => {
              assert.strictEqual(err, error);
              assert.strictEqual(instance, null);
              assert.strictEqual(resp, apiResponse);
              done();
            }
          );
        });

        it('should refresh the metadata after a 409', done => {
          const error = {
            code: 409,
          };

          notification.create = (callback: Function) => {
            notification.get = (config: {}, callback: Function) => {
              assert.deepStrictEqual(config, {});
              callback(); // done()
            };

            callback(error);
          };

          notification.get(AUTO_CREATE_CONFIG, done);
        });
      });
    });
  });

  describe('getMetadata', () => {
    it('should make the correct request', done => {
      const options = {};

      notification.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      notification.getMetadata(options, assert.ifError);
    });

    it('should optionally accept options', done => {
      notification.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      notification.getMetadata(assert.ifError);
    });

    it('should return any errors to the callback', done => {
      const error = new Error('err');
      const response = {};

      notification.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error, response);
      };

      notification.getMetadata((err: Error, metadata: {}, resp: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, null);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should set and return the metadata', done => {
      const response = {};

      notification.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, response);
      };

      notification.getMetadata((err: Error, metadata: {}, resp: {}) => {
        assert.ifError(err);
        assert.strictEqual(metadata, response);
        assert.strictEqual(notification.metadata, response);
        assert.strictEqual(resp, response);
        done();
      });
    });
  });
});
