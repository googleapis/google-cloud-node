/**
 * Copyright 2022 Google LLC
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

import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import {grpc} from 'google-gax';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as pfy from '@google-cloud/promisify';
import * as sinon from 'sinon';

import * as instConfig from '../src/instance-config';
import {Spanner, GetInstanceConfigResponse} from '../src';
import {CLOUD_RESOURCE_HEADER} from '../src/common';

let promisified = false;
const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'InstanceConfig') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['exists']);
  },
});

class FakeGrpcServiceObject {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

describe('InstanceConfig', () => {
  // tslint:disable-next-line variable-name
  let InstanceConfig: typeof instConfig.InstanceConfig;
  let instanceConfig: instConfig.InstanceConfig;

  const sandbox = sinon.createSandbox();

  const SPANNER = {
    request: () => {},
    requestStream: () => {},
    getInstanceConfig: () => {},
    projectId: 'project-id',
    instances_: new Map(),
    instanceConfigs_: new Map(),
    projectFormattedName_: 'projects/project-id',
  } as {} as Spanner;

  const NAME = 'instance-config-name';

  before(() => {
    InstanceConfig = proxyquire('../src/instance-config.js', {
      './common-grpc/service-object': {
        GrpcServiceObject: FakeGrpcServiceObject,
      },
      '@google-cloud/promisify': fakePfy,
    }).InstanceConfig;
  });

  beforeEach(() => {
    instanceConfig = new InstanceConfig(SPANNER, NAME);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should format the name', () => {
      const formatName_ = InstanceConfig.formatName_;
      const formattedName = 'formatted-name';

      InstanceConfig.formatName_ = (projectId, name) => {
        InstanceConfig.formatName_ = formatName_;

        assert.strictEqual(projectId, SPANNER.projectId);
        assert.strictEqual(name, NAME);

        return formattedName;
      };

      const instanceConfig = new InstanceConfig(SPANNER, NAME);
      assert(instanceConfig.formattedName_, formattedName);
    });

    it('should localize the request function', done => {
      const spannerInstance = extend({}, SPANNER);

      spannerInstance.request = function () {
        assert.strictEqual(this, spannerInstance);
        done();
      };

      const instanceConfig = new InstanceConfig(spannerInstance, NAME);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instanceConfig as any).request();
    });

    it('should inherit from ServiceObject', done => {
      const options = {};
      const spannerInstance = extend({}, SPANNER, {
        createInstanceConfig(name, options_, callback) {
          assert.strictEqual(name, instanceConfig.formattedName_);
          assert.strictEqual(options_, options);
          callback(); // done()
        },
      });

      const instanceConfig = new InstanceConfig(spannerInstance, NAME);
      assert(instanceConfig instanceof FakeGrpcServiceObject);

      const calledWith = instanceConfig.calledWith_[0];

      assert.strictEqual(calledWith.parent, spannerInstance);
      assert.strictEqual(calledWith.id, NAME);
      assert.deepStrictEqual(calledWith.methods, {create: true});

      calledWith.createMethod(null, options, done);
    });

    it('should set the resourceHeader_', () => {
      assert.deepStrictEqual(instanceConfig.resourceHeader_, {
        [CLOUD_RESOURCE_HEADER]: instanceConfig.formattedName_,
      });
    });
  });

  describe('formatName_', () => {
    const PATH = 'projects/' + SPANNER.projectId + '/instanceConfigs/' + NAME;

    it('should return the name if already formatted', () => {
      assert.strictEqual(
        InstanceConfig.formatName_(SPANNER.projectId, PATH),
        PATH,
      );
    });

    it('should format the name', () => {
      const formattedName = InstanceConfig.formatName_(SPANNER.projectId, NAME);
      assert.strictEqual(formattedName, PATH);
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      instanceConfig.parent = SPANNER;
    });

    it('should make the correct request', done => {
      instanceConfig.request = (config, callback: Function) => {
        assert.strictEqual(config.client, 'InstanceAdminClient');
        assert.strictEqual(config.method, 'deleteInstanceConfig');
        assert.deepStrictEqual(config.reqOpts, {
          name: instanceConfig.formattedName_,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(config.headers, instanceConfig.resourceHeader_);
        callback(); // done()
      };

      instanceConfig.delete(done);
    });

    it('should remove the InstanceConfig from the cache', done => {
      const cache = instanceConfig.parent.instanceConfigs_;

      instanceConfig.request = (config, callback) => {
        callback(null);
      };

      cache.set(instanceConfig.id, instanceConfig);
      assert.strictEqual(cache.get(instanceConfig.id), instanceConfig);

      instanceConfig.delete(err => {
        assert.ifError(err);
        assert.strictEqual(cache.has(instanceConfig.id), false);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      instanceConfig.request = (config, callback: Function) => {
        assert.deepStrictEqual(config.gaxOpts, gaxOptions);
        callback(); // done()
      };

      instanceConfig.delete(gaxOptions, done);
    });
  });

  describe('exists', () => {
    beforeEach(() => (instanceConfig.parent = SPANNER));
    afterEach(() => sandbox.restore());

    it('should return any non-404 like errors', async () => {
      const err = {code: grpc.status.INTERNAL};
      instanceConfig.get = async () => {
        throw err;
      };

      try {
        await instanceConfig.exists();
        assert.fail('Should have rethrown error');
      } catch (thrown) {
        assert.deepStrictEqual(thrown, err);
      }
    });

    it('should return true if error is absent', async () => {
      const INSTANCE_CONFIG_INFO_RESPONSE: GetInstanceConfigResponse = [{}];
      instanceConfig.get = async () => INSTANCE_CONFIG_INFO_RESPONSE;

      const doesExist = await instanceConfig.exists();
      assert.strictEqual(doesExist, true);
    });

    it('should return false if instance config does not exist', async () => {
      instanceConfig.get = async () => {
        throw {code: grpc.status.NOT_FOUND};
      };

      const doesExist = await instanceConfig.exists();
      assert.strictEqual(doesExist, false);
    });
  });

  describe('get', () => {
    beforeEach(() => {
      instanceConfig.parent = SPANNER;
    });
    afterEach(() => {
      sandbox.restore();
    });

    it('should call getInstanceConfig', done => {
      const options = {};

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      sandbox.stub(SPANNER, 'getInstanceConfig').callsFake(_ => done());

      instanceConfig.get(options, assert.ifError);
    });

    it('should accept and pass gaxOptions to getInstanceConfig', done => {
      const gaxOptions = {};

      sandbox.stub(SPANNER, 'getInstanceConfig').callsFake((_, options) => {
        assert.strictEqual(options.gaxOptions, gaxOptions);
        done();
      });

      instanceConfig.get({gaxOptions}, assert.ifError);
    });

    it('should not require an options object', done => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      sandbox.stub(SPANNER, 'getInstanceConfig').callsFake(_ => done());
      instanceConfig.get(assert.ifError);
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.') as grpc.ServiceError;

      sandbox
        .stub(SPANNER, 'getInstanceConfig')
        .callsFake((_, opts_: {}, callback) => callback!(error));

      instanceConfig.get(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const apiResponse = {} as instConfig.IInstanceConfig;
      sandbox
        .stub(SPANNER, 'getInstanceConfig')
        .callsFake((_, opts_: {}, callback) => callback!(null, apiResponse));

      instanceConfig.get((err, instanceConfigMetadata_) => {
        assert.ifError(err);
        assert.strictEqual(instanceConfigMetadata_, apiResponse);
        done();
      });
    });
  });

  describe('setMetadata', () => {
    const METADATA = {
      needsToBeSnakeCased: true,
    } as instConfig.IInstanceConfig;
    const ORIGINAL_METADATA = extend({}, METADATA);

    it('should make and return the request', () => {
      const requestReturnValue = {};

      function callback() {}

      instanceConfig.request = (config, callback_) => {
        assert.strictEqual(config.client, 'InstanceAdminClient');
        assert.strictEqual(config.method, 'updateInstanceConfig');

        const expectedReqOpts = extend(
          {},
          extend({}, METADATA, {
            name: instanceConfig.formattedName_,
          }),
        ) as instConfig.IInstanceConfig as instConfig.SetInstanceConfigMetadataRequest;

        assert.deepStrictEqual(config.reqOpts.instanceConfig, expectedReqOpts);
        assert.deepStrictEqual(config.reqOpts.updateMask, {
          paths: ['needs_to_be_snake_cased'],
        });

        assert.deepStrictEqual(METADATA, ORIGINAL_METADATA);
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(config.headers, instanceConfig.resourceHeader_);

        assert.strictEqual(callback_, callback);

        return requestReturnValue;
      };

      const returnValue = instanceConfig.setMetadata(
        Object.assign({}, {instanceConfig: METADATA}),
        callback,
      );
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      instanceConfig.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instanceConfig.setMetadata(
        Object.assign({}, {instanceConfig: METADATA}, {gaxOpts: gaxOptions}),
        assert.ifError,
      );
    });

    it('should not require a callback', () => {
      assert.doesNotThrow(async () => {
        await instanceConfig.setMetadata(
          Object.assign({}, {instanceConfig: METADATA}),
        );
      });
    });
  });
});
