/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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
  promisify,
  promisifyAll,
  PromisifyAllOptions,
} from '@google-cloud/promisify';
import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as r from 'teeny-request';
import * as sinon from 'sinon';
import {Service} from '../../src/nodejs-common';
import * as SO from '../../src/nodejs-common/service-object';

let promisified = false;
const fakePromisify = {
  // tslint:disable-next-line:variable-name
  promisifyAll(Class: Function, options: PromisifyAllOptions) {
    if (Class.name === 'ServiceObject') {
      promisified = true;
      assert.deepStrictEqual(options.exclude, ['getRequestInterceptors']);
    }

    return promisifyAll(Class, options);
  },
};
const ServiceObject = proxyquire('../../src/nodejs-common/service-object', {
  '@google-cloud/promisify': fakePromisify,
}).ServiceObject;

import {
  ApiError,
  BodyResponseCallback,
  DecorateRequestOptions,
  util,
} from '../../src/nodejs-common/util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FakeServiceObject = any;
interface InternalServiceObject {
  request_: (
    reqOpts: DecorateRequestOptions,
    callback?: BodyResponseCallback
  ) => void | r.Request;
  createMethod?: Function;
  methods: SO.Methods;
  interceptors: SO.Interceptor[];
}

function asInternal(serviceObject: SO.ServiceObject) {
  return serviceObject as {} as InternalServiceObject;
}

describe('ServiceObject', () => {
  let serviceObject: SO.ServiceObject<FakeServiceObject>;
  const sandbox = sinon.createSandbox();

  const CONFIG = {
    baseUrl: 'base-url',
    parent: {} as Service,
    id: 'id',
    createMethod: util.noop,
  };

  beforeEach(() => {
    serviceObject = new ServiceObject(CONFIG);
    serviceObject.parent.interceptors = [];
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should create an empty metadata object', () => {
      assert.deepStrictEqual(serviceObject.metadata, {});
    });

    it('should localize the baseUrl', () => {
      assert.strictEqual(serviceObject.baseUrl, CONFIG.baseUrl);
    });

    it('should localize the parent instance', () => {
      assert.strictEqual(serviceObject.parent, CONFIG.parent);
    });

    it('should localize the ID', () => {
      assert.strictEqual(serviceObject.id, CONFIG.id);
    });

    it('should localize the createMethod', () => {
      assert.strictEqual(
        asInternal(serviceObject).createMethod,
        CONFIG.createMethod
      );
    });

    it('should localize the methods', () => {
      const methods = {};
      const config = extend({}, CONFIG, {methods});
      const serviceObject = new ServiceObject(config);
      assert.deepStrictEqual(asInternal(serviceObject).methods, methods);
    });

    it('should default methods to an empty object', () => {
      assert.deepStrictEqual(asInternal(serviceObject).methods, {});
    });

    it('should clear out methods that are not asked for', () => {
      const config = extend({}, CONFIG, {
        methods: {
          create: true,
        },
      });
      const serviceObject = new ServiceObject(config);
      assert.strictEqual(typeof serviceObject.create, 'function');
      assert.strictEqual(serviceObject.delete, undefined);
    });

    it('should always expose the request method', () => {
      const methods = {};
      const config = extend({}, CONFIG, {methods});
      const serviceObject = new ServiceObject(config);
      assert.strictEqual(typeof serviceObject.request, 'function');
    });

    it('should always expose the getRequestInterceptors method', () => {
      const methods = {};
      const config = extend({}, CONFIG, {methods});
      const serviceObject = new ServiceObject(config);
      assert.strictEqual(
        typeof serviceObject.getRequestInterceptors,
        'function'
      );
    });
  });

  describe('create', () => {
    it('should call createMethod', done => {
      const config = extend({}, CONFIG, {
        createMethod,
      });
      const options = {};

      function createMethod(
        id: string,
        options_: {},
        callback: (err: Error | null, a: {}, b: {}) => void
      ) {
        assert.strictEqual(id, config.id);
        assert.strictEqual(options_, options);
        callback(null, {}, {}); // calls done()
      }

      const serviceObject = new ServiceObject(config);
      serviceObject.create(options, done);
    });

    it('should not require options', done => {
      const config = extend({}, CONFIG, {
        createMethod,
      });

      function createMethod(id: string, options: Function, callback: Function) {
        assert.strictEqual(id, config.id);
        assert.strictEqual(typeof options, 'function');
        assert.strictEqual(callback, undefined);
        options(null, {}, {}); // calls done()
      }

      const serviceObject = new ServiceObject(config);
      serviceObject.create(done);
    });

    it('should update id with metadata id', done => {
      const config = extend({}, CONFIG, {
        createMethod,
      });
      const options = {};

      function createMethod(
        id: string,
        options_: {},
        callback: (err: Error | null, a: {}, b: {}) => void
      ) {
        assert.strictEqual(id, config.id);
        assert.strictEqual(options_, options);
        callback(null, {metadata: {id: 14}}, {});
      }

      const serviceObject = new ServiceObject(config);
      serviceObject.create(options);
      assert.strictEqual(serviceObject.id, 14);
      done();
    });

    it('should pass error to callback', done => {
      const config = extend({}, CONFIG, {createMethod});
      const options = {};
      const error = new Error('Error.');
      const apiResponse = {};
      function createMethod(id: string, options_: {}, callback: Function) {
        callback(error, null, apiResponse);
      }

      const serviceObject = new ServiceObject(config);
      serviceObject.create(
        options,
        (err: Error | null, instance: {}, apiResponse_: {}) => {
          assert.strictEqual(err, error);
          assert.strictEqual(instance, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        }
      );
    });

    it('should return instance and apiResponse to callback', async () => {
      const config = extend({}, CONFIG, {
        createMethod,
      });
      const options = {};
      const apiResponse = {};
      function createMethod(id: string, options_: {}, callback: Function) {
        callback(null, {}, apiResponse);
      }

      const serviceObject = new ServiceObject(config);
      const [instance_, apiResponse_] = await serviceObject.create(options);
      assert.strictEqual(instance_, serviceObject);
      assert.strictEqual(apiResponse_, apiResponse);
    });

    it('should assign metadata', async () => {
      const config = extend({}, CONFIG, {
        createMethod,
      });
      const options = {};
      const instance = {
        metadata: {},
      };
      function createMethod(id: string, options_: {}, callback: Function) {
        callback(null, instance, {});
      }
      const serviceObject = new ServiceObject(config);
      const [instance_] = await serviceObject.create(options);
      assert.strictEqual(instance_.metadata, instance.metadata);
    });

    it('should execute callback with any amount of arguments', done => {
      const config = extend({}, CONFIG, {
        createMethod,
      });
      const options = {};

      const args = ['a', 'b', 'c', 'd', 'e', 'f'];

      function createMethod(id: string, options_: {}, callback: Function) {
        callback(...args);
      }

      const serviceObject = new ServiceObject(config);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      serviceObject.create(options, (...args: any[]) => {
        assert.deepStrictEqual([].slice.call(args), args);
        done();
      });
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(reqOpts.method, 'DELETE');
          assert.strictEqual(reqOpts.uri, '');
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.delete(assert.ifError);
    });

    it('should accept options', done => {
      const options = {queryOptionProperty: true};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts, callback) => {
          assert.deepStrictEqual(reqOpts.qs, options);
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.delete(options, assert.ifError);
    });

    it('should override method and uri field in request with methodConfig', done => {
      const methodConfig = {
        reqOpts: {
          uri: 'v2',
          method: 'PATCH',
        },
      };

      const cachedMethodConfig = extend(true, {}, methodConfig);

      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts_, callback) => {
          assert.deepStrictEqual(
            serviceObject.methods.delete,
            cachedMethodConfig
          );
          assert.deepStrictEqual(reqOpts_.uri, 'v2');
          assert.deepStrictEqual(reqOpts_.method, 'PATCH');
          done();
          callback(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.delete = methodConfig;
      serviceObject.delete();
    });

    it('should respect ignoreNotFound opion', done => {
      const options = {ignoreNotFound: true};
      const error = new ApiError({code: 404, response: {} as r.Response});
      sandbox.stub(ServiceObject.prototype, 'request').callsArgWith(1, error);
      serviceObject.delete(options, (err, apiResponse_) => {
        assert.ifError(err);
        assert.strictEqual(apiResponse_, undefined);
        done();
      });
    });

    it('should propagate other then 404 error', done => {
      const options = {ignoreNotFound: true};
      const error = new ApiError({code: 406, response: {} as r.Response});
      sandbox.stub(ServiceObject.prototype, 'request').callsArgWith(1, error);
      serviceObject.delete(options, (err, apiResponse_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, undefined);
        done();
      });
    });

    it('should not pass ignoreNotFound to request', done => {
      const options = {ignoreNotFound: true};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(reqOpts.qs.ignoreNotFound, undefined);
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.delete(options, assert.ifError);
    });

    it('should extend the defaults with request options', done => {
      const methodConfig = {
        reqOpts: {
          qs: {
            defaultProperty: true,
            thisPropertyWasOverridden: false,
          },
        },
      };

      const cachedMethodConfig = extend(true, {}, methodConfig);

      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts_, callback) => {
          assert.deepStrictEqual(
            serviceObject.methods.delete,
            cachedMethodConfig
          );
          assert.deepStrictEqual(reqOpts_.qs, {
            defaultProperty: true,
            optionalProperty: true,
            thisPropertyWasOverridden: true,
          });
          done();
          callback(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.delete = methodConfig;
      serviceObject.delete({
        optionalProperty: true,
        thisPropertyWasOverridden: true,
      });
    });

    it('should not require a callback', () => {
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsArgWith(1, null, null, {});
      assert.doesNotThrow(() => {
        serviceObject.delete();
      });
    });

    it('should execute callback with correct arguments', done => {
      const error = new Error('🦃');
      sandbox.stub(ServiceObject.prototype, 'request').callsArgWith(1, error);
      const serviceObject = new ServiceObject(CONFIG);
      serviceObject.delete((err: Error, apiResponse_: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, undefined);
        done();
      });
    });
  });

  describe('exists', () => {
    it('should call get', done => {
      sandbox.stub(serviceObject, 'get').callsFake(() => done());
      serviceObject.exists(() => {});
    });

    it('should accept options', done => {
      const options = {queryOptionProperty: true};
      sandbox
        .stub(ServiceObject.prototype, 'get')
        .callsFake((options_, callback) => {
          assert.deepStrictEqual(options_, options);
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.exists(options, assert.ifError);
    });

    it('should execute callback with false if 404', done => {
      const error = new ApiError('');
      error.code = 404;
      sandbox.stub(serviceObject, 'get').callsArgWith(1, error);
      serviceObject.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should execute callback with error if not 404', done => {
      const error = new ApiError('');
      error.code = 500;
      sandbox.stub(serviceObject, 'get').callsArgWith(1, error);
      serviceObject.exists((err: Error, exists: boolean) => {
        assert.strictEqual(err, error);
        assert.strictEqual(exists, undefined);
        done();
      });
    });

    it('should execute callback with true if no error', done => {
      sandbox.stub(serviceObject, 'get').callsArgWith(1, null);
      serviceObject.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('get', () => {
    it('should get the metadata', done => {
      serviceObject.getMetadata = promisify((): void => {
        done();
      });

      serviceObject.get(assert.ifError);
    });

    it('should accept options', done => {
      const options = {};
      serviceObject.getMetadata = promisify(
        (options_: SO.GetMetadataOptions): void => {
          assert.deepStrictEqual(options, options_);
          done();
        }
      );
      serviceObject.exists(options, assert.ifError);
    });

    it('handles not getting a config', done => {
      serviceObject.getMetadata = promisify((): void => {
        done();
      });
      (serviceObject as FakeServiceObject).get(assert.ifError);
    });

    it('should execute callback with error & metadata', done => {
      const error = new Error('Error.');
      const metadata = {} as SO.Metadata;

      serviceObject.getMetadata = promisify(
        (options: SO.GetMetadataOptions, callback: SO.MetadataCallback) => {
          callback(error, metadata);
        }
      );

      serviceObject.get((err, instance, metadata_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(instance, null);
        assert.strictEqual(metadata_, metadata);

        done();
      });
    });

    it('should execute callback with instance & metadata', done => {
      const metadata = {} as SO.Metadata;

      serviceObject.getMetadata = promisify(
        (options: SO.GetMetadataOptions, callback: SO.MetadataCallback) => {
          callback(null, metadata);
        }
      );

      serviceObject.get((err, instance, metadata_) => {
        assert.ifError(err);

        assert.strictEqual(instance, serviceObject);
        assert.strictEqual(metadata_, metadata);

        done();
      });
    });

    describe('autoCreate', () => {
      let AUTO_CREATE_CONFIG: {};

      const ERROR = new ApiError('bad');
      ERROR.code = 404;
      const METADATA = {} as SO.Metadata;

      beforeEach(() => {
        AUTO_CREATE_CONFIG = {
          autoCreate: true,
        };

        serviceObject.getMetadata = promisify(
          (options: SO.GetMetadataOptions, callback: SO.MetadataCallback) => {
            callback(ERROR, METADATA);
          }
        );
      });

      it('should keep the original options intact', () => {
        const expectedConfig = Object.assign({}, AUTO_CREATE_CONFIG);
        serviceObject.get(AUTO_CREATE_CONFIG, () => {});
        assert.deepStrictEqual(AUTO_CREATE_CONFIG, expectedConfig);
      });

      it('should not auto create if there is no create method', done => {
        (serviceObject as FakeServiceObject).create = undefined;

        serviceObject.get(AUTO_CREATE_CONFIG, err => {
          assert.strictEqual(err, ERROR);
          done();
        });
      });

      it('should pass config to create if it was provided', done => {
        const expectedConfig = {maxResults: 5} as SO.GetConfig;
        const config = extend({}, AUTO_CREATE_CONFIG, expectedConfig);

        sandbox.stub(serviceObject, 'create').callsFake(config_ => {
          assert.deepStrictEqual(config_, expectedConfig);
          done();
        });
        serviceObject.get(config, assert.ifError);
      });

      it('should pass only a callback to create if no config', done => {
        sandbox.stub(serviceObject, 'create').callsArgWith(0, null);
        serviceObject.get(AUTO_CREATE_CONFIG, done);
      });

      describe('error', () => {
        it('should execute callback with error & API response', done => {
          const error = new Error('Error.');
          const apiResponse = {} as r.Response;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (sandbox.stub(serviceObject, 'create') as any).callsFake(
            (optsOrCb: {}, cb: Function) => {
              const callback = typeof optsOrCb === 'function' ? optsOrCb : cb;
              sandbox.stub(serviceObject, 'get').callsFake((cfg, callback) => {
                assert.deepStrictEqual(cfg, {});
                callback!(null); // done()
              });
              callback!(error, null, apiResponse);
            }
          );

          serviceObject.get(AUTO_CREATE_CONFIG, (err, instance, resp) => {
            assert.strictEqual(err, error);
            assert.strictEqual(instance, null);
            assert.strictEqual(resp, apiResponse);
            done();
          });
        });

        it('should refresh the metadata after a 409', done => {
          const error = new ApiError('errrr');
          error.code = 409;
          sandbox.stub(serviceObject, 'create').callsFake(callback => {
            sandbox.stub(serviceObject, 'get').callsFake((cfgOrCb, cb) => {
              const config = typeof cfgOrCb === 'object' ? cfgOrCb : {};
              const callback = typeof cfgOrCb === 'function' ? cfgOrCb : cb;
              assert.deepStrictEqual(config, {});
              callback!(null, null, {} as r.Response); // done()
            });
            callback(error, null, undefined);
          });
          serviceObject.get(AUTO_CREATE_CONFIG, done);
        });
      });
    });
  });

  describe('getMetadata', () => {
    it('should make the correct request', done => {
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake(function (this: SO.ServiceObject, reqOpts, callback) {
          assert.strictEqual(this, serviceObject);
          assert.strictEqual(reqOpts.uri, '');
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.getMetadata(() => {});
    });

    it('should accept options', done => {
      const options = {queryOptionProperty: true};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts, callback) => {
          assert.deepStrictEqual(reqOpts.qs, options);
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.getMetadata(options, assert.ifError);
    });

    it('should override uri field in request with methodConfig', done => {
      const methodConfig = {
        reqOpts: {
          uri: 'v2',
        },
      };

      const cachedMethodConfig = extend(true, {}, methodConfig);

      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts_, callback) => {
          assert.deepStrictEqual(
            serviceObject.methods.getMetadata,
            cachedMethodConfig
          );
          assert.deepStrictEqual(reqOpts_.uri, 'v2');
          done();
          callback(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.getMetadata = methodConfig;
      serviceObject.getMetadata();
    });

    it('should extend the defaults with request options', done => {
      const methodConfig = {
        reqOpts: {
          qs: {
            defaultProperty: true,
            thisPropertyWasOverridden: false,
          },
        },
      };

      const cachedMethodConfig = extend(true, {}, methodConfig);

      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts_, callback) => {
          assert.deepStrictEqual(
            serviceObject.methods.getMetadata,
            cachedMethodConfig
          );
          assert.deepStrictEqual(reqOpts_.qs, {
            defaultProperty: true,
            optionalProperty: true,
            thisPropertyWasOverridden: true,
          });
          done();
          callback(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.getMetadata = methodConfig;
      serviceObject.getMetadata({
        optionalProperty: true,
        thisPropertyWasOverridden: true,
      });
    });

    it('should execute callback with error & apiResponse', done => {
      const error = new Error('ಠ_ಠ');
      sandbox.stub(ServiceObject.prototype, 'request').callsArgWith(1, error);
      serviceObject.getMetadata((err: Error, metadata: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, undefined);
        done();
      });
    });

    it('should update metadata', done => {
      const apiResponse = {};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsArgWith(1, null, {}, apiResponse);
      serviceObject.getMetadata((err: Error) => {
        assert.ifError(err);
        assert.deepStrictEqual(serviceObject.metadata, apiResponse);
        done();
      });
    });

    it('should execute callback with metadata & API response', done => {
      const apiResponse = {};
      const requestResponse = {body: apiResponse};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsArgWith(1, null, apiResponse, requestResponse);
      serviceObject.getMetadata((err: Error, metadata: {}) => {
        assert.ifError(err);
        assert.strictEqual(metadata, apiResponse);
        done();
      });
    });
  });

  describe('getRequestInterceptors', () => {
    it('should call the request interceptors in order', () => {
      // Called first.
      serviceObject.parent.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          reqOpts.uri = '1';
          return reqOpts;
        },
      });

      // Called third.
      serviceObject.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          reqOpts.uri += '3';
          return reqOpts;
        },
      });

      // Called second.
      serviceObject.parent.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          reqOpts.uri += '2';
          return reqOpts;
        },
      });

      // Called fourth.
      serviceObject.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          reqOpts.uri += '4';
          return reqOpts;
        },
      });

      serviceObject.parent.getRequestInterceptors = () => {
        return serviceObject.parent.interceptors.map(
          interceptor => interceptor.request
        );
      };

      const reqOpts: DecorateRequestOptions = {uri: ''};
      const requestInterceptors = serviceObject.getRequestInterceptors();
      requestInterceptors.forEach((requestInterceptor: Function) => {
        Object.assign(reqOpts, requestInterceptor(reqOpts));
      });
      assert.strictEqual(reqOpts.uri, '1234');
    });

    it('should not affect original interceptor arrays', () => {
      function request(reqOpts: DecorateRequestOptions) {
        return reqOpts;
      }

      serviceObject.parent.interceptors = [{request}];
      serviceObject.interceptors = [{request}];

      const originalParentInterceptors = [].slice.call(
        serviceObject.parent.interceptors
      );
      const originalLocalInterceptors = [].slice.call(
        serviceObject.interceptors
      );

      serviceObject.getRequestInterceptors();

      assert.deepStrictEqual(
        serviceObject.parent.interceptors,
        originalParentInterceptors
      );
      assert.deepStrictEqual(
        serviceObject.interceptors,
        originalLocalInterceptors
      );
    });

    it('should not call unrelated interceptors', () => {
      (serviceObject.interceptors as object[]).push({
        anotherInterceptor() {
          throw new Error('Unrelated interceptor was called.');
        },
        request(reqOpts: DecorateRequestOptions) {
          return reqOpts;
        },
      });

      const requestInterceptors = serviceObject.getRequestInterceptors();
      requestInterceptors.forEach((requestInterceptor: Function) => {
        requestInterceptor();
      });
    });
  });

  describe('setMetadata', () => {
    it('should make the correct request', done => {
      const metadata = {metadataProperty: true};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake(function (this: SO.ServiceObject, reqOpts, callback) {
          assert.strictEqual(this, serviceObject);
          assert.strictEqual(reqOpts.method, 'PATCH');
          assert.strictEqual(reqOpts.uri, '');
          assert.deepStrictEqual(reqOpts.json, metadata);
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.setMetadata(metadata, () => {});
    });

    it('should accept options', done => {
      const metadata = {};
      const options = {queryOptionProperty: true};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts, callback) => {
          assert.deepStrictEqual(reqOpts.qs, options);
          done();
          callback(null, null, {} as r.Response);
        });
      serviceObject.setMetadata(metadata, options, () => {});
    });

    it('should override uri and method with methodConfig', done => {
      const methodConfig = {
        reqOpts: {
          uri: 'v2',
          method: 'PUT',
        },
      };
      const cachedMethodConfig = extend(true, {}, methodConfig);

      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts_, callback) => {
          assert.deepStrictEqual(
            serviceObject.methods.setMetadata,
            cachedMethodConfig
          );
          assert.deepStrictEqual(reqOpts_.uri, 'v2');
          assert.deepStrictEqual(reqOpts_.method, 'PUT');
          done();
          callback(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.setMetadata = methodConfig;
      serviceObject.setMetadata({});
    });

    it('should extend the defaults with request options', done => {
      const methodConfig = {
        reqOpts: {
          qs: {
            defaultProperty: true,
            thisPropertyWasOverridden: false,
          },
        },
      };
      const cachedMethodConfig = extend(true, {}, methodConfig);

      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsFake((reqOpts_, callback) => {
          assert.deepStrictEqual(
            serviceObject.methods.setMetadata,
            cachedMethodConfig
          );
          assert.deepStrictEqual(reqOpts_.qs, {
            defaultProperty: true,
            optionalProperty: true,
            thisPropertyWasOverridden: true,
          });
          done();
          callback(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.setMetadata = methodConfig;
      serviceObject.setMetadata(
        {},
        {
          optionalProperty: true,
          thisPropertyWasOverridden: true,
        }
      );
    });

    it('should execute callback with error & apiResponse', done => {
      const error = new Error('Error.');
      sandbox.stub(ServiceObject.prototype, 'request').callsArgWith(1, error);
      serviceObject.setMetadata({}, (err: Error, apiResponse_: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, undefined);
        done();
      });
    });

    it('should update metadata', done => {
      const apiResponse = {};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsArgWith(1, undefined, apiResponse);
      serviceObject.setMetadata({}, (err: Error) => {
        assert.ifError(err);
        assert.strictEqual(serviceObject.metadata, apiResponse);
        done();
      });
    });

    it('should execute callback with metadata & API response', done => {
      const body = {};
      const apiResponse = {body};
      sandbox
        .stub(ServiceObject.prototype, 'request')
        .callsArgWith(1, null, body, apiResponse);
      serviceObject.setMetadata({}, (err: Error, metadata: {}) => {
        assert.ifError(err);
        assert.strictEqual(metadata, body);
        done();
      });
    });
  });

  describe('request_', () => {
    let reqOpts: DecorateRequestOptions;
    beforeEach(() => {
      reqOpts = {
        uri: 'uri',
      };
    });

    it('should compose the correct request', done => {
      const expectedUri = [
        serviceObject.baseUrl,
        serviceObject.id,
        reqOpts.uri,
      ].join('/');

      serviceObject.parent.request = (reqOpts_, callback) => {
        assert.notStrictEqual(reqOpts_, reqOpts);
        assert.strictEqual(reqOpts_.uri, expectedUri);
        assert.deepStrictEqual(reqOpts_.interceptors_, []);
        callback(null, null, {} as r.Response);
      };
      asInternal(serviceObject).request_(reqOpts, () => done());
    });

    it('should not require a service object ID', done => {
      const expectedUri = [serviceObject.baseUrl, reqOpts.uri].join('/');
      serviceObject.parent.request = (reqOpts, callback) => {
        assert.strictEqual(reqOpts.uri, expectedUri);
        callback(null, null, {} as r.Response);
      };
      serviceObject.id = undefined;
      asInternal(serviceObject).request_(reqOpts, () => done());
    });

    it('should support absolute uris', done => {
      const expectedUri = 'http://www.google.com';
      serviceObject.parent.request = (reqOpts, callback) => {
        assert.strictEqual(reqOpts.uri, expectedUri);
        callback(null, null, {} as r.Response);
      };
      asInternal(serviceObject).request_({uri: expectedUri}, () => {
        done();
      });
    });

    it('should remove empty components', done => {
      const reqOpts = {uri: ''};
      const expectedUri = [
        serviceObject.baseUrl,
        serviceObject.id,
        // reqOpts.uri (reqOpts.uri is an empty string, so it should be removed)
      ].join('/');
      serviceObject.parent.request = (reqOpts_, callback) => {
        assert.strictEqual(reqOpts_.uri, expectedUri);
        callback(null, null, {} as r.Response);
      };
      asInternal(serviceObject).request_(reqOpts, () => done());
    });

    it('should trim slashes', done => {
      const reqOpts = {
        uri: '//1/2//',
      };
      const expectedUri = [serviceObject.baseUrl, serviceObject.id, '1/2'].join(
        '/'
      );
      serviceObject.parent.request = (reqOpts_, callback) => {
        assert.strictEqual(reqOpts_.uri, expectedUri);
        callback(null, null, {} as r.Response);
      };
      asInternal(serviceObject).request_(reqOpts, () => {
        done();
      });
    });

    it('should extend interceptors from child ServiceObjects', async () => {
      const parent = new ServiceObject(CONFIG) as FakeServiceObject;
      parent.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts as any).parent = true;
          return reqOpts;
        },
      });

      const child = new ServiceObject(
        extend({}, CONFIG, {parent})
      ) as FakeServiceObject;
      child.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts as any).child = true;
          return reqOpts;
        },
      });

      sandbox
        .stub(parent.parent as SO.ServiceObject, 'request')
        .callsFake((reqOpts, callback) => {
          assert.deepStrictEqual(
            reqOpts.interceptors_![0].request({} as DecorateRequestOptions),
            {
              child: true,
            }
          );
          assert.deepStrictEqual(
            reqOpts.interceptors_![1].request({} as DecorateRequestOptions),
            {
              parent: true,
            }
          );
          callback(null, null, {} as r.Response);
        });

      await child.request_({uri: ''});
    });

    it('should pass a clone of the interceptors', done => {
      asInternal(serviceObject).interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts as any).one = true;
          return reqOpts;
        },
      });

      serviceObject.parent.request = (reqOpts, callback) => {
        const serviceObjectInterceptors =
          asInternal(serviceObject).interceptors;
        assert.deepStrictEqual(
          reqOpts.interceptors_,
          serviceObjectInterceptors
        );
        assert.notStrictEqual(reqOpts.interceptors_, serviceObjectInterceptors);
        callback(null, null, {} as r.Response);
        done();
      };
      asInternal(serviceObject).request_({uri: ''}, () => {});
    });

    it('should call the parent requestStream method', () => {
      const fakeObj = {};
      const expectedUri = [
        serviceObject.baseUrl,
        serviceObject.id,
        reqOpts.uri,
      ].join('/');

      serviceObject.parent.requestStream = reqOpts_ => {
        assert.notStrictEqual(reqOpts_, reqOpts);
        assert.strictEqual(reqOpts_.uri, expectedUri);
        assert.deepStrictEqual(reqOpts_.interceptors_, []);
        return fakeObj as r.Request;
      };

      const opts = extend(true, reqOpts, {shouldReturnStream: true});
      const res = asInternal(serviceObject).request_(opts);
      assert.strictEqual(res, fakeObj);
    });
  });

  describe('request', () => {
    it('should call through to request_', async () => {
      const fakeOptions = {} as DecorateRequestOptions;
      sandbox
        .stub(asInternal(serviceObject), 'request_')
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(reqOpts, fakeOptions);
          callback!(null, null, {} as r.Response);
        });
      await serviceObject.request(fakeOptions);
    });

    it('should accept a callback', done => {
      const response = {body: {abc: '123'}, statusCode: 200} as r.Response;
      sandbox
        .stub(asInternal(serviceObject), 'request_')
        .callsArgWith(1, null, response.body, response);
      serviceObject.request({} as DecorateRequestOptions, (err, body, res) => {
        assert.ifError(err);
        assert.deepStrictEqual(res, response);
        assert.deepStrictEqual(body, response.body);
        done();
      });
    });

    it('should return response with a request error and callback', done => {
      const errorBody = '🤮';
      const response = {body: {error: errorBody}, statusCode: 500};
      const err = new Error(errorBody);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err as any).response = response;
      sandbox
        .stub(asInternal(serviceObject), 'request_')
        .callsArgWith(1, err, response.body, response);
      serviceObject.request({} as DecorateRequestOptions, (err, body, res) => {
        assert(err instanceof Error);
        assert.deepStrictEqual(res, response);
        assert.deepStrictEqual(body, response.body);
        done();
      });
    });
  });

  describe('requestStream', () => {
    it('should call through to request_', async () => {
      const fakeOptions = {} as DecorateRequestOptions;
      const serviceObject = new ServiceObject(CONFIG);
      asInternal(serviceObject).request_ = reqOpts => {
        assert.deepStrictEqual(reqOpts, {shouldReturnStream: true});
      };
      serviceObject.requestStream(fakeOptions);
    });
  });
});
