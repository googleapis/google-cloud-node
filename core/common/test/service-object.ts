import * as assert from 'assert';
// Copyright 2015 Google LLC
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

import {
  promisify,
  promisifyAll,
  PromisifyAllOptions,
} from '@google-cloud/promisify';
import * as extend from 'extend';
import * as r from 'teeny-request';

import {Service} from '../src';
import * as SO from '../src/service-object';

let mockPromisified = false;
jest.mock('@google-cloud/promisify', () => {
  const actual = jest.requireActual('@google-cloud/promisify');
  return {
    ...actual,
    promisifyAll(Class: Function, options: PromisifyAllOptions) {
      if (Class.name === 'ServiceObject') {
        mockPromisified = true;
        expect(options.exclude).toEqual(['getRequestInterceptors']);
      }
      return actual.promisifyAll(Class, options);
    },
  };
});

import {ServiceObject} from '../src/service-object';

import {
  ApiError,
  BodyResponseCallback,
  DecorateRequestOptions,
  util,
} from '../src/util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FakeServiceObject = any;
interface InternalServiceObject {
  request_: (
    reqOpts: DecorateRequestOptions,
    callback?: BodyResponseCallback,
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
    jest.restoreAllMocks();
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      expect(mockPromisified).toBeTruthy();
    });

    it('should create an empty metadata object', () => {
      expect(serviceObject.metadata).toEqual({});
    });

    it('should localize the baseUrl', () => {
      expect(serviceObject.baseUrl).toBe(CONFIG.baseUrl);
    });

    it('should localize the parent instance', () => {
      expect(serviceObject.parent).toBe(CONFIG.parent);
    });

    it('should localize the ID', () => {
      expect(serviceObject.id).toBe(CONFIG.id);
    });

    it('should localize the createMethod', () => {
      expect(asInternal(serviceObject).createMethod).toBe(CONFIG.createMethod,);
    });

    it('should localize the methods', () => {
      const methods = {};
      const config = extend({}, CONFIG, {methods});
      const serviceObject = new ServiceObject(config);
      expect(asInternal(serviceObject).methods).toEqual(methods);
    });

    it('should default methods to an empty object', () => {
      expect(asInternal(serviceObject).methods).toEqual({});
    });

    it('should clear out methods that are not asked for', () => {
      const config = extend({}, CONFIG, {
        methods: {
          create: true,
        },
      });
      const serviceObject = new ServiceObject(config);
      expect(typeof serviceObject.create).toBe('function');
      expect(serviceObject.delete).toBe(undefined);
    });

    it('should always expose the request method', () => {
      const methods = {};
      const config = extend({}, CONFIG, {methods});
      const serviceObject = new ServiceObject(config);
      expect(typeof serviceObject.request).toBe('function');
    });

    it('should always expose the getRequestInterceptors method', () => {
      const methods = {};
      const config = extend({}, CONFIG, {methods});
      const serviceObject = new ServiceObject(config);
      expect(typeof serviceObject.getRequestInterceptors).toBe('function',);
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
        callback: (err: Error | null, a: {}, b: {}) => void,
      ) {
        expect(id).toBe(config.id);
        expect(options_).toBe(options);
        callback(null, {}, {}); // calls done()
      }

      const serviceObject = new ServiceObject(config);
      serviceObject.create(options, done);
    });

    it('should not change id', done => {
      const config = extend({}, CONFIG, {
        createMethod,
      });
      const options = {};

      function createMethod(
        id: string,
        options_: {},
        callback: (err: Error | null, a: {}, b: {}) => void,
      ) {
        expect(id).toBe(config.id);
        expect(options_).toBe(options);
        callback(null, {metadata: {id: 14}}, {});
      }

      const serviceObject = new ServiceObject(config);
      serviceObject.create(options);
      assert.notStrictEqual(serviceObject.id, 14);
      done();
    });

    it('should not require options', done => {
      const config = extend({}, CONFIG, {
        createMethod,
      });

      function createMethod(id: string, options: Function, callback: Function) {
        expect(id).toBe(config.id);
        expect(typeof options).toBe('function');
        expect(callback).toBe(undefined);
        options(null, {}, {}); // calls done()
      }

      const serviceObject = new ServiceObject(config);
      serviceObject.create(done);
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
          expect(err).toBe(error);
          expect(instance).toBe(null);
          expect(apiResponse_).toBe(apiResponse);
          done();
        },
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
      expect(instance_).toBe(serviceObject);
      expect(apiResponse_).toBe(apiResponse);
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
      expect(instance_.metadata).toBe(instance.metadata);
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
        expect([].slice.call(args)).toEqual(args);
        done();
      });
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts: any, callback: any) => {
          expect((reqOpts as DecorateRequestOptions).method).toBe('DELETE',);
          expect((reqOpts as DecorateRequestOptions).uri).toBe('');
          done();
          (callback as any)(null, null, {} as r.Response);
        });
      serviceObject.delete(assert.ifError);
    });

    it('should accept options', done => {
      const options = {queryOptionProperty: true};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts: any, callback: any) => {
          expect((reqOpts as DecorateRequestOptions).qs).toEqual(options,);
          done();
          (callback as any)(null, null, {} as r.Response);
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

      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts_: any, callback: any) => {
          expect(serviceObject.methods.delete).toEqual(cachedMethodConfig,);
          expect((reqOpts_ as DecorateRequestOptions).uri).toEqual('v2',);
          expect((reqOpts_ as DecorateRequestOptions).method).toEqual('PATCH',);
          done();
          (callback as any)(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.delete = methodConfig;
      serviceObject.delete();
    });

    it('should respect ignoreNotFound opion', done => {
      const options = {ignoreNotFound: true};
      const error = new ApiError({code: 404, response: {} as r.Response});
      jest.spyOn(ServiceObject.prototype, 'request').mockImplementation((_0: any, cb: any) => cb(error));
      serviceObject.delete(options, (err, apiResponse_) => {
        expect(err).toBeFalsy();
        expect(apiResponse_).toBe(undefined);
        done();
      });
    });

    it('should propagate other then 404 error', done => {
      const options = {ignoreNotFound: true};
      const error = new ApiError({code: 406, response: {} as r.Response});
      jest.spyOn(ServiceObject.prototype, 'request').mockImplementation((_0: any, cb: any) => cb(error));
      serviceObject.delete(options, (err, apiResponse_) => {
        expect(err).toBe(error);
        expect(apiResponse_).toBe(undefined);
        done();
      });
    });

    it('should not pass ignoreNotFound to request', done => {
      const options = {ignoreNotFound: true};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts: any, callback: any) => {
          expect((reqOpts as DecorateRequestOptions).qs.ignoreNotFound).toBe(undefined,);
          done();
          (callback as any)(null, null, {} as r.Response);
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

      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts_: any, callback: any) => {
          expect(serviceObject.methods.delete).toEqual(cachedMethodConfig,);
          assert.deepStrictEqual((reqOpts_ as DecorateRequestOptions).qs, {
            defaultProperty: true,
            optionalProperty: true,
            thisPropertyWasOverridden: true,
          });
          done();
          (callback as any)(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.delete = methodConfig;
      serviceObject.delete({
        optionalProperty: true,
        thisPropertyWasOverridden: true,
      });
    });

    it('should not require a callback', () => {
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((_0: any, cb: any) => cb(null, null, {}));
      assert.doesNotThrow(() => {
        void serviceObject.delete();
      });
    });

    it('should execute callback with correct arguments', done => {
      const error = new Error('🦃');
      jest.spyOn(ServiceObject.prototype, 'request').mockImplementation((_0: any, cb: any) => cb(error));
      const serviceObject = new ServiceObject(CONFIG);
      serviceObject.delete((err: Error, apiResponse_: {}) => {
        expect(err).toBe(error);
        expect(apiResponse_).toBe(undefined);
        done();
      });
    });
  });

  describe('exists', () => {
    it('should call get', done => {
      jest.spyOn(serviceObject, 'get').mockImplementation(() => done());
      void serviceObject.exists(() => {});
    });

    it('should accept options', done => {
      const options = {queryOptionProperty: true};
      jest
        .spyOn(ServiceObject.prototype, 'get')
        .mockImplementation((options_: any, callback: any) => {
          expect(options_).toEqual(options);
          done();
          (callback as any)(null, null, {} as r.Response);
        });
      serviceObject.exists(options, assert.ifError);
    });

    it('should execute callback with false if 404', done => {
      const error = new ApiError('');
      error.code = 404;
      jest.spyOn(serviceObject, 'get').mockImplementation((_0: any, cb: any) => cb(error));
      void serviceObject.exists((err: Error, exists: boolean) => {
        expect(err).toBeFalsy();
        expect(exists).toBe(false);
        done();
      });
    });

    it('should execute callback with error if not 404', done => {
      const error = new ApiError('');
      error.code = 500;
      jest.spyOn(serviceObject, 'get').mockImplementation((_0: any, cb: any) => cb(error));
      void serviceObject.exists((err: Error, exists: boolean) => {
        expect(err).toBe(error);
        expect(exists).toBe(undefined);
        done();
      });
    });

    it('should execute callback with true if no error', done => {
      jest.spyOn(serviceObject, 'get').mockImplementation((_0: any, cb: any) => cb(null));
      void serviceObject.exists((err: Error, exists: boolean) => {
        expect(err).toBeFalsy();
        expect(exists).toBe(true);
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
          expect(options).toEqual(options_);
          done();
        },
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
        },
      );

      serviceObject.get((err, instance, metadata_) => {
        expect(err).toBe(error);
        expect(instance).toBe(null);
        expect(metadata_).toBe(metadata);

        done();
      });
    });

    it('should execute callback with instance & metadata', done => {
      const metadata = {} as SO.Metadata;

      serviceObject.getMetadata = promisify(
        (options: SO.GetMetadataOptions, callback: SO.MetadataCallback) => {
          callback(null, metadata);
        },
      );

      serviceObject.get((err, instance, metadata_) => {
        expect(err).toBeFalsy();

        expect(instance).toBe(serviceObject);
        expect(metadata_).toBe(metadata);

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
          },
        );
      });

      it('should keep the original options intact', () => {
        const expectedConfig = Object.assign({}, AUTO_CREATE_CONFIG);
        serviceObject.get(AUTO_CREATE_CONFIG, () => {});
        expect(AUTO_CREATE_CONFIG).toEqual(expectedConfig);
      });

      it('should not auto create if there is no create method', done => {
        (serviceObject as FakeServiceObject).create = undefined;

        serviceObject.get(AUTO_CREATE_CONFIG, err => {
          expect(err).toBe(ERROR);
          done();
        });
      });

      it('should pass config to create if it was provided', done => {
        const expectedConfig = {maxResults: 5} as SO.GetConfig;
        const config = extend({}, AUTO_CREATE_CONFIG, expectedConfig);

        jest.spyOn(serviceObject, 'create').mockImplementation(config_ => {
          expect(config_).toEqual(expectedConfig);
          done();
        });
        serviceObject.get(config, assert.ifError);
      });

      it('should pass only a callback to create if no config', done => {
        jest.spyOn(serviceObject, 'create').mockImplementation((cb: any) => cb(null));
        serviceObject.get(AUTO_CREATE_CONFIG, done);
      });

      describe('error', () => {
        it('should execute callback with error & API response', done => {
          const error = new Error('Error.');
          const apiResponse = {} as r.Response;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (jest.spyOn(serviceObject, 'create') as any).mockImplementation(
            (optsOrCb: {}, cb: Function) => {
              const callback = typeof optsOrCb === 'function' ? optsOrCb : cb;
              jest.spyOn(serviceObject, 'get').mockImplementation((cfg: any, callback: any) => {
                expect(cfg).toEqual({});
                callback!(null); // done()
              });
              callback!(error, null, apiResponse);
            },
          );

          serviceObject.get(AUTO_CREATE_CONFIG, (err, instance, resp) => {
            expect(err).toBe(error);
            expect(instance).toBe(null);
            expect(resp).toBe(apiResponse);
            done();
          });
        });

        it('should refresh the metadata after a 409', done => {
          const error = new ApiError('errrr');
          error.code = 409;
          jest.spyOn(serviceObject, 'create').mockImplementation(callback => {
            jest.spyOn(serviceObject, 'get').mockImplementation((cfgOrCb: any, cb: any) => {
              const config = typeof cfgOrCb === 'object' ? cfgOrCb : {};
              const callback = typeof cfgOrCb === 'function' ? cfgOrCb : cb;
              expect(config).toEqual({});
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
      jest.spyOn(ServiceObject.prototype, 'request').mockImplementation(function (
        this: SO.ServiceObject,
        reqOpts,
        callback,
      ) {
        expect(this).toBe(serviceObject);
        expect((reqOpts as DecorateRequestOptions).uri).toBe('');
        done();
        (callback as any)(null, null, {} as r.Response);
      });
      void serviceObject.getMetadata(() => {});
    });

    it('should accept options', done => {
      const options = {queryOptionProperty: true};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts: any, callback: any) => {
          expect((reqOpts as DecorateRequestOptions).qs).toEqual(options,);
          done();
          (callback as any)(null, null, {} as r.Response);
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

      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts_: any, callback: any) => {
          expect(serviceObject.methods.getMetadata).toEqual(cachedMethodConfig,);
          expect((reqOpts_ as DecorateRequestOptions).uri).toEqual('v2',);
          done();
          (callback as any)(null, null, null!);
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

      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts_: any, callback: any) => {
          expect(serviceObject.methods.getMetadata).toEqual(cachedMethodConfig,);
          assert.deepStrictEqual((reqOpts_ as DecorateRequestOptions).qs, {
            defaultProperty: true,
            optionalProperty: true,
            thisPropertyWasOverridden: true,
          });
          done();
          (callback as any)(null, null, null!);
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
      jest.spyOn(ServiceObject.prototype, 'request').mockImplementation((_0: any, cb: any) => cb(error));
      void serviceObject.getMetadata((err: Error, metadata: {}) => {
        expect(err).toBe(error);
        expect(metadata).toBe(undefined);
        done();
      });
    });

    it('should update metadata', done => {
      const apiResponse = {};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((_0: any, cb: any) => cb(null, {}, apiResponse));
      void serviceObject.getMetadata((err: Error) => {
        expect(err).toBeFalsy();
        expect(serviceObject.metadata).toEqual(apiResponse);
        done();
      });
    });

    it('should execute callback with metadata & API response', done => {
      const apiResponse = {};
      const requestResponse = {body: apiResponse};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((_0: any, cb: any) => cb(null, apiResponse, requestResponse));
      void serviceObject.getMetadata((err: Error, metadata: {}) => {
        expect(err).toBeFalsy();
        expect(metadata).toBe(apiResponse);
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
          interceptor => interceptor.request,
        );
      };

      const reqOpts: DecorateRequestOptions = {uri: ''};
      const requestInterceptors = serviceObject.getRequestInterceptors();
      requestInterceptors.forEach((requestInterceptor: Function) => {
        Object.assign(reqOpts, requestInterceptor(reqOpts));
      });
      expect(reqOpts.uri).toBe('1234');
    });

    it('should not affect original interceptor arrays', () => {
      function request(reqOpts: DecorateRequestOptions) {
        return reqOpts;
      }

      serviceObject.parent.interceptors = [{request}];
      serviceObject.interceptors = [{request}];

      const originalParentInterceptors = [].slice.call(
        serviceObject.parent.interceptors,
      );
      const originalLocalInterceptors = [].slice.call(
        serviceObject.interceptors,
      );

      serviceObject.getRequestInterceptors();

      expect(serviceObject.parent.interceptors).toEqual(originalParentInterceptors,);
      expect(serviceObject.interceptors).toEqual(originalLocalInterceptors,);
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
      jest.spyOn(ServiceObject.prototype, 'request').mockImplementation(function (
        this: SO.ServiceObject,
        reqOpts,
        callback,
      ) {
        expect(this).toBe(serviceObject);
        expect((reqOpts as DecorateRequestOptions).method).toBe('PATCH');
        expect((reqOpts as DecorateRequestOptions).uri).toBe('');
        expect((reqOpts as DecorateRequestOptions).json).toEqual(metadata,);
        done();
        (callback as any)(null, null, {} as r.Response);
      });
      void serviceObject.setMetadata(metadata, () => {});
    });

    it('should accept options', done => {
      const metadata = {};
      const options = {queryOptionProperty: true};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts: any, callback: any) => {
          expect((reqOpts as DecorateRequestOptions).qs).toEqual(options,);
          done();
          (callback as any)(null, null, {} as r.Response);
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

      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts_: any, callback: any) => {
          expect(serviceObject.methods.setMetadata).toEqual(cachedMethodConfig,);
          expect((reqOpts_ as DecorateRequestOptions).uri).toEqual('v2',);
          expect((reqOpts_ as DecorateRequestOptions).method).toEqual('PUT',);
          done();
          (callback as any)(null, null, null!);
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

      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((reqOpts_: any, callback: any) => {
          expect(serviceObject.methods.setMetadata).toEqual(cachedMethodConfig,);
          assert.deepStrictEqual((reqOpts_ as DecorateRequestOptions).qs, {
            defaultProperty: true,
            optionalProperty: true,
            thisPropertyWasOverridden: true,
          });
          done();
          (callback as any)(null, null, null!);
        });

      const serviceObject = new ServiceObject(CONFIG) as FakeServiceObject;
      serviceObject.methods.setMetadata = methodConfig;
      serviceObject.setMetadata(
        {},
        {
          optionalProperty: true,
          thisPropertyWasOverridden: true,
        },
      );
    });

    it('should execute callback with error & apiResponse', done => {
      const error = new Error('Error.');
      jest.spyOn(ServiceObject.prototype, 'request').mockImplementation((_0: any, cb: any) => cb(error));
      void serviceObject.setMetadata({}, (err: Error, apiResponse_: {}) => {
        expect(err).toBe(error);
        expect(apiResponse_).toBe(undefined);
        done();
      });
    });

    it('should update metadata', done => {
      const apiResponse = {};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((_0: any, cb: any) => cb(undefined, apiResponse));
      void serviceObject.setMetadata({}, (err: Error) => {
        expect(err).toBeFalsy();
        expect(serviceObject.metadata).toBe(apiResponse);
        done();
      });
    });

    it('should execute callback with metadata & API response', done => {
      const body = {};
      const apiResponse = {body};
      jest
        .spyOn(ServiceObject.prototype, 'request')
        .mockImplementation((_0: any, cb: any) => cb(null, body, apiResponse));
      void serviceObject.setMetadata({}, (err: Error, metadata: {}) => {
        expect(err).toBeFalsy();
        expect(metadata).toBe(body);
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
        expect(reqOpts_.uri).toBe(expectedUri);
        expect(reqOpts_.interceptors_).toEqual([]);
        callback(null, null, {} as r.Response);
      };
      asInternal(serviceObject).request_(reqOpts, () => done());
    });

    it('should not require a service object ID', done => {
      const expectedUri = [serviceObject.baseUrl, reqOpts.uri].join('/');
      serviceObject.parent.request = (reqOpts, callback) => {
        expect(reqOpts.uri).toBe(expectedUri);
        callback(null, null, {} as r.Response);
      };
      serviceObject.id = undefined;
      asInternal(serviceObject).request_(reqOpts, () => done());
    });

    it('should support absolute uris', done => {
      const expectedUri = 'http://www.google.com';
      serviceObject.parent.request = (reqOpts, callback) => {
        expect(reqOpts.uri).toBe(expectedUri);
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
        expect(reqOpts_.uri).toBe(expectedUri);
        callback(null, null, {} as r.Response);
      };
      asInternal(serviceObject).request_(reqOpts, () => done());
    });

    it('should trim slashes', done => {
      const reqOpts = {
        uri: '//1/2//',
      };
      const expectedUri = [serviceObject.baseUrl, serviceObject.id, '1/2'].join(
        '/',
      );
      serviceObject.parent.request = (reqOpts_, callback) => {
        expect(reqOpts_.uri).toBe(expectedUri);
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
        extend({}, CONFIG, {parent}),
      ) as FakeServiceObject;
      child.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts as any).child = true;
          return reqOpts;
        },
      });

      jest
        .spyOn(parent.parent as SO.ServiceObject, 'request')
        .mockImplementation((reqOpts: any, callback: any) => {
          assert.deepStrictEqual(
            reqOpts.interceptors_![0].request({} as DecorateRequestOptions),
            {
              child: true,
            },
          );
          assert.deepStrictEqual(
            reqOpts.interceptors_![1].request({} as DecorateRequestOptions),
            {
              parent: true,
            },
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
        expect(reqOpts.interceptors_).toEqual(serviceObjectInterceptors,);
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
        expect(reqOpts_.uri).toBe(expectedUri);
        expect(reqOpts_.interceptors_).toEqual([]);
        return fakeObj as r.Request;
      };

      const opts = extend(true, reqOpts, {shouldReturnStream: true});
      const res = asInternal(serviceObject).request_(opts);
      expect(res).toBe(fakeObj);
    });
  });

  describe('request', () => {
    it('should call through to request_', async () => {
      const fakeOptions = {} as DecorateRequestOptions;
      jest
        .spyOn(asInternal(serviceObject), 'request_')
        .mockImplementation((reqOpts: any, callback: any) => {
          expect(reqOpts).toBe(fakeOptions);
          callback!(null, null, {} as r.Response);
        });
      await serviceObject.request(fakeOptions);
    });

    it('should accept a callback', done => {
      const response = {body: {abc: '123'}, statusCode: 200} as r.Response;
      jest
        .spyOn(asInternal(serviceObject), 'request_')
        .mockImplementation((_0: any, cb: any) => cb(null, response.body, response));
      serviceObject.request({} as DecorateRequestOptions, (err, body, res) => {
        expect(err).toBeFalsy();
        expect(res).toEqual(response);
        expect(body).toEqual(response.body);
        done();
      });
    });

    it('should return response with a request error and callback', done => {
      const errorBody = '🤮';
      const response = {body: {error: errorBody}, statusCode: 500};
      const err = new Error(errorBody);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err as any).response = response;
      jest
        .spyOn(asInternal(serviceObject), 'request_')
        .mockImplementation((_0: any, cb: any) => cb(err, response.body, response));
      serviceObject.request({} as DecorateRequestOptions, (err, body, res) => {
        expect(err instanceof Error).toBeTruthy();
        expect(res).toEqual(response);
        expect(body).toEqual(response.body);
        done();
      });
    });
  });

  describe('requestStream', () => {
    it('should call through to request_', async () => {
      const fakeOptions = {} as DecorateRequestOptions;
      const serviceObject = new ServiceObject(CONFIG);
      asInternal(serviceObject).request_ = reqOpts => {
        expect(reqOpts).toEqual({shouldReturnStream: true});
      };
      serviceObject.requestStream(fakeOptions);
    });
  });
});
