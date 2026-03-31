// Copyright 2018 Google LLC
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

import * as promisify from '@google-cloud/promisify';
import * as assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import * as proxyquire from 'proxyquire';
import {CallOptions} from 'google-gax';

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll(klass: Function) {
    if (klass.name === 'AppProfile') {
      promisified = true;
    }
  },
});

describe('Bigtable/AppProfile', () => {
  const APP_PROFILE_ID = 'my-app-profile';
  const PROJECT_ID = 'grape-spaceship-123';

  const INSTANCE = {
    name: `projects/${PROJECT_ID}/instances/i`,
    bigtable: {projectId: PROJECT_ID},
  };

  const APP_PROFILE_NAME = `${INSTANCE.name}/appProfiles/${APP_PROFILE_ID}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let AppProfile: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let appProfile: any;

  class FakeCluster {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: any;
    name: string;
    bigtable: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(instance: any, id: any) {
      this.instance = instance;
      this.id = id;
      this.name = 'cluster-name';
      this.bigtable = instance.bigtable;
    }
  }

  before(() => {
    AppProfile = proxyquire('../src/app-profile.js', {
      '../src/cluster.js': {Cluster: FakeCluster},
      '@google-cloud/promisify': fakePromisify,
    }).AppProfile;
  });

  beforeEach(() => {
    appProfile = new AppProfile(INSTANCE, APP_PROFILE_NAME);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize Bigtable instance', () => {
      assert.strictEqual(appProfile.bigtable, INSTANCE.bigtable);
    });

    it('should localize Instance instance', () => {
      assert.strictEqual(appProfile.instance, INSTANCE);
    });

    it('should expand name into full resource path', () => {
      assert.strictEqual(appProfile.name, APP_PROFILE_NAME);
    });

    it('should leave full app profile name unaltered', () => {
      const appProfile = new AppProfile(INSTANCE, APP_PROFILE_NAME);
      assert.strictEqual(appProfile.name, APP_PROFILE_NAME);
    });

    it('should localize the name from the ID', () => {
      assert.strictEqual(appProfile.id, APP_PROFILE_ID);
    });

    it('should leave full app profile name unaltered and localize the id from the name', () => {
      const appProfile = new AppProfile(INSTANCE, APP_PROFILE_NAME);
      assert.strictEqual(appProfile.name, APP_PROFILE_NAME);
      assert.strictEqual(appProfile.id, APP_PROFILE_ID);
    });

    it('should throw if cluster id in wrong format', () => {
      const id = `appProfiles/${APP_PROFILE_ID}`;
      assert.throws(() => {
        new AppProfile(INSTANCE, id);
      }, Error);
    });
  });

  describe('formatAppProfile_', () => {
    const errorReg =
      /An app profile routing policy can only contain "any" for multi cluster routing, a `Cluster` for single routing, or a set of clusterIds as strings or `Clusters` for multi cluster routing\./;

    it("should accept an 'any' cluster routing policy", () => {
      const formattedAppProfile = AppProfile.formatAppProfile_({
        routing: 'any',
      });
      assert.deepStrictEqual(formattedAppProfile.multiClusterRoutingUseAny, {});
    });

    describe('with a single cluster routing policy', () => {
      const clusterId = 'my-cluster';
      const cluster = new FakeCluster(INSTANCE, clusterId);

      it('should accept allowTransactionalWrites not being set', () => {
        const formattedAppProfile = AppProfile.formatAppProfile_({
          routing: cluster,
        });
        assert.deepStrictEqual(formattedAppProfile.singleClusterRouting, {
          clusterId,
        });
      });

      it('should accept allowTransactionalWrites', () => {
        const formattedAppProfile = AppProfile.formatAppProfile_({
          routing: cluster,
          allowTransactionalWrites: true,
        });
        assert.deepStrictEqual(formattedAppProfile.singleClusterRouting, {
          clusterId,
          allowTransactionalWrites: true,
        });
      });

      it('should accept description', () => {
        const description = 'my-description';
        const formattedAppProfile = AppProfile.formatAppProfile_({
          description,
        });
        assert.strictEqual(formattedAppProfile.description, description);
      });

      it('should throw for an invalid routing policy', () => {
        assert.throws(
          AppProfile.formatAppProfile_.bind(null, {
            routing: 'not-any',
          }),
          errorReg,
        );
      });
    });

    describe('with a multi cluster routing policy', () => {
      it('should use multi cluster routing when providing an array of clusters', () => {
        const clusterIds = ['clusterId1', 'clusterId2'];
        const clusters = clusterIds.map(
          clusterId => new FakeCluster(INSTANCE, clusterId),
        );
        const formattedAppProfile = AppProfile.formatAppProfile_({
          routing: new Set(clusters),
        });
        assert.deepStrictEqual(
          new Set(formattedAppProfile.multiClusterRoutingUseAny.clusterIds),
          new Set(clusterIds),
        );
      });
      it('should ensure elements in the array are clusters', () => {
        const notAllClusters = [
          new FakeCluster(INSTANCE, 'clusterId'),
          'not a cluster',
        ];
        assert.throws(
          AppProfile.formatAppProfile_.bind(null, {
            routing: notAllClusters,
          }),
          errorReg,
        );
      });
    });
  });

  describe('create', () => {
    it('should call createAppProfile from instance', done => {
      const options = {};

      appProfile.instance.createAppProfile = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options_: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: any,
      ) => {
        assert.strictEqual(id, appProfile.id);
        assert.strictEqual(options_, options);
        callback();
      };

      appProfile.create(options, done);
    });

    it('should not require options', done => {
      appProfile.instance.createAppProfile = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: any,
      ) => {
        assert.deepStrictEqual(options, {});
        callback();
      };

      appProfile.create(done);
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any, callback: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'deleteAppProfile');

        assert.deepStrictEqual(config.reqOpts, {
          name: appProfile.name,
        });

        callback();
      };

      appProfile.delete(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      appProfile.delete({gaxOptions}, assert.ifError);
    });

    it('should accept ignoreWarnings', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.ignoreWarnings, true);
        done();
      };

      appProfile.delete({ignoreWarnings: true}, assert.ifError);
    });
  });

  describe('exists', () => {
    it('should not require gaxOptions', done => {
      appProfile.getMetadata = (gaxOptions: CallOptions) => {
        assert.deepStrictEqual(gaxOptions, {});
        done();
      };

      appProfile.exists(assert.ifError);
    });

    it('should pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};

      appProfile.getMetadata = (gaxOptions_: CallOptions) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };

      appProfile.exists(gaxOptions, assert.ifError);
    });

    it('should return false if error code is 5', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 5;

      appProfile.getMetadata = (
        gaxOptions: CallOptions,
        callback: Function,
      ) => {
        callback(error);
      };

      appProfile.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should return error if code is not 5', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 'NOT-5';

      appProfile.getMetadata = (
        gaxOptions: CallOptions,
        callback: Function,
      ) => {
        callback(error);
      };

      appProfile.exists((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return true if no error', done => {
      appProfile.getMetadata = (
        gaxOptions: CallOptions,
        callback: Function,
      ) => {
        callback(null, {});
      };

      appProfile.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const gaxOptions = {};

      appProfile.getMetadata = (gaxOptions_: CallOptions) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };

      appProfile.get(gaxOptions, assert.ifError);
    });

    it('should not require gaxOptions', done => {
      appProfile.getMetadata = (gaxOptions: CallOptions) => {
        assert.deepStrictEqual(gaxOptions, {});
        done();
      };

      appProfile.get(assert.ifError);
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.');

      appProfile.getMetadata = (
        gaxOptions: CallOptions,
        callback: Function,
      ) => {
        callback(error);
      };

      appProfile.get((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const metadata = {};

      appProfile.getMetadata = (
        gaxOptions: CallOptions,
        callback: Function,
      ) => {
        callback(null, metadata);
      };

      appProfile.get((err: Error, appProfile_: {}, metadata_: {}) => {
        assert.ifError(err);
        assert.strictEqual(appProfile_, appProfile);
        assert.strictEqual(metadata_, metadata);
        done();
      });
    });
  });

  describe('getMetadata', () => {
    it('should make correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'getAppProfile');

        assert.deepStrictEqual(config.reqOpts, {
          name: appProfile.name,
        });

        assert.deepStrictEqual(config.gaxOpts, {});

        done();
      };

      appProfile.getMetadata(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      appProfile.getMetadata(gaxOptions, assert.ifError);
    });

    it('should update metadata', done => {
      const metadata = {};

      appProfile.bigtable.request = (config: {}, callback: Function) => {
        callback(null, metadata);
      };

      appProfile.getMetadata(() => {
        assert.strictEqual(appProfile.metadata, metadata);
        done();
      });
    });

    it('should execute callback with original arguments', done => {
      const args = [{}, {}, {}];

      appProfile.bigtable.request = (config: {}, callback: Function) => {
        callback(...args);
      };

      appProfile.getMetadata((...argies: Array<{}>) => {
        assert.deepStrictEqual([].slice.call(argies), args);
        done();
      });
    });
  });

  describe('setMetadata', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'updateAppProfile');
        assert.strictEqual(config.reqOpts.appProfile.name, APP_PROFILE_NAME);
        callback();
      };

      appProfile.setMetadata({}, done);
    });

    it('should respect the description option', done => {
      const options = {description: 'my-description'};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any) => {
        assert(
          config.reqOpts.updateMask.paths.indexOf('description') !== -1,
          "updateMask does not should include 'description'",
        );
        assert.strictEqual(
          config.reqOpts.appProfile.description,
          options.description,
        );
        done();
      };

      appProfile.setMetadata(options, assert.ifError);
    });

    it('should respect the ignoreWarnings option', done => {
      const options = {ignoreWarnings: true};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appProfile.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.ignoreWarnings, true);
        done();
      };

      appProfile.setMetadata(options, assert.ifError);
    });

    describe('should respect the routing option when', () => {
      const clusterId = 'my-cluster';
      const cluster = new FakeCluster(INSTANCE, clusterId);

      it("has an 'any' value", done => {
        const options = {routing: 'any'};

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        appProfile.bigtable.request = (config: any) => {
          assert(
            config.reqOpts.updateMask.paths.indexOf(
              'multi_cluster_routing_use_any',
            ) !== -1,
            "updateMask does not should include 'multi_cluster_routing_use_any'",
          );
          assert.deepStrictEqual(
            config.reqOpts.appProfile.multiClusterRoutingUseAny,
            {},
          );
          done();
        };

        appProfile.setMetadata(options, assert.ifError);
      });

      it('has a cluster value', done => {
        const options = {routing: cluster};

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        appProfile.bigtable.request = (config: any) => {
          assert(
            config.reqOpts.updateMask.paths.indexOf(
              'single_cluster_routing',
            ) !== -1,
            "updateMask does not should include 'single_cluster_routing'",
          );
          assert.deepStrictEqual(
            config.reqOpts.appProfile.singleClusterRouting,
            {clusterId},
          );
          done();
        };

        appProfile.setMetadata(options, assert.ifError);
      });
    });

    it('should execute callback with all arguments', done => {
      const args = [{}, {}, {}];
      appProfile.bigtable.request = (config: {}, callback: Function) => {
        callback(...args);
      };
      appProfile.setMetadata({}, (...argies: Array<{}>) => {
        assert.deepStrictEqual([].slice.call(argies), args);
        done();
      });
    });
  });
});
