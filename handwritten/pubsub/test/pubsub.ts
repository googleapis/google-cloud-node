// Copyright 2014 Google LLC
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

import * as pjy from '@google-cloud/projectify';
import arrify = require('arrify');
import * as assert from 'assert';
import {describe, it, before, beforeEach, after, afterEach} from 'mocha';
import * as gax from 'google-gax';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import defer = require('p-defer');

import {google} from '../protos/protos';
import * as pubsubTypes from '../src/pubsub';
import {Snapshot} from '../src/snapshot';
import * as subby from '../src/subscription';
import * as tracing from '../src/telemetry-tracing';
import {Topic} from '../src/topic';
import * as util from '../src/util';
import {Schema, SchemaTypes, ISchema, SchemaViews} from '../src/schema';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PKG = require('../../package.json');
const sandbox = sinon.createSandbox();

const fakeCreds = {} as gax.grpc.ChannelCredentials;

const subscriptionCached = subby.Subscription;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let subscriptionOverride: any;

function Subscription(
  pubsub: pubsubTypes.PubSub,
  name: string,
  options: subby.SubscriptionOptions,
) {
  const overrideFn = subscriptionOverride || subscriptionCached;
  return new overrideFn(pubsub, name, options);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Subscription as any).formatName_ = (): string => {
  return 'formatted';
};

let promisified = false;
const fakeUtil = Object.assign({}, util, {
  promisifySome(
    class_: Function,
    classProtos: object,
    methods: string[],
  ): void {
    if (class_.name === 'PubSub') {
      promisified = true;
      assert.deepStrictEqual(methods, [
        'close',
        'createSubscription',
        'createTopic',
        'detachSubscription',
        'getSnapshots',
        'getSubscriptions',
        'getTopics',
      ]);
    }
    // Defeats the method name type check.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    util.promisifySome(class_, classProtos, methods as any);
  },
});

let pjyOverride: Function;
function fakePjy(...args: Array<{}>) {
  return (pjyOverride || pjy.replaceProjectIdToken)(...args);
}

class FakeSnapshot {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakeTopic {
  calledWith_: Array<{}>;
  getSubscriptions?: Function;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }

  // Simulate the on-demand name getter for Topic, unless a test
  // explicitly sets one.
  setName?: string;
  get name() {
    if (this.setName) {
      return this.setName;
    }
    const pubsub = this.calledWith_[0] as pubsubTypes.PubSub;
    return pubsub.projectId + '/foo';
  }
  set name(val: string) {
    this.setName = val;
  }

  static formatName_(): string {
    return 'foo';
  }
}

let extended = false;
const fakePaginator = {
  // tslint:disable-next-line variable-name
  extend(Class: typeof pubsubTypes.PubSub, methods: string[]) {
    if (Class.name !== 'PubSub') {
      return;
    }

    methods = arrify(methods);
    assert.strictEqual(Class.name, 'PubSub');
    assert.deepStrictEqual(methods, [
      'getSnapshots',
      'getSubscriptions',
      'getTopics',
    ]);

    extended = true;
  },
  streamify(methodName: string) {
    return methodName;
  },
};

let googleAuthOverride: Function | null;
function fakeGoogleAuth(...args: Array<{}>) {
  return (googleAuthOverride || util.noop)(...args);
}

const v1Override = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let v1ClientOverrides: any = {};

function defineOverridableClient(clientName: string) {
  class DefaultClient {
    static scopes = [] as string[];
    fakeMethod() {}
  }

  Object.defineProperty(v1Override, clientName, {
    get() {
      return v1ClientOverrides[clientName] || DefaultClient;
    },
  });
}

defineOverridableClient('FakeClient');
defineOverridableClient('PublisherClient');
defineOverridableClient('SubscriberClient');

describe('PubSub', () => {
  // tslint:disable-next-line variable-name
  let PubSub: typeof pubsubTypes.PubSub;
  const PROJECT_ID = 'test-project';

  let pubsub: Partial<pubsubTypes.PubSub>;
  const OPTIONS = {
    projectId: PROJECT_ID,
  } as pubsubTypes.ClientConfig;

  const PUBSUB_EMULATOR_HOST = process.env.PUBSUB_EMULATOR_HOST;

  before(() => {
    delete process.env.PUBSUB_EMULATOR_HOST;
    PubSub = proxyquire('../src/pubsub', {
      '@google-cloud/paginator': {
        paginator: fakePaginator,
      },
      '@google-cloud/projectify': {
        replaceProjectIdToken: fakePjy,
      },
      'google-auth-library': {
        GoogleAuth: fakeGoogleAuth,
      },
      grpc: gax.grpc,
      './snapshot': {Snapshot: FakeSnapshot},
      './subscription': {Subscription},
      './topic': {Topic: FakeTopic},
      './v1': v1Override,
      './util': fakeUtil,
    }).PubSub;
  });

  after(() => {
    if (PUBSUB_EMULATOR_HOST) {
      process.env.PUBSUB_EMULATOR_HOST = PUBSUB_EMULATOR_HOST;
    }
  });

  beforeEach(() => {
    v1ClientOverrides = {};
    googleAuthOverride = null;
    pubsub = new PubSub(OPTIONS);
    pubsub.projectId = PROJECT_ID;
    sandbox.stub(gax.grpc.credentials, 'createInsecure').returns(fakeCreds);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    const maxMetadataSizeKey = 'grpc.max_metadata_size';
    const keepaliveTimeKey = 'grpc.keepalive_time_ms';
    const keepaliveTimeoutKey = 'grpc.keepalive_timeout_ms';

    const DEFAULT_OPTIONS = {
      libName: 'gccl',
      libVersion: PKG.version,
      scopes: [],
      [maxMetadataSizeKey]: 4 * 1024 * 1024,
      [keepaliveTimeKey]: 300000,
      [keepaliveTimeoutKey]: 20000,
    };

    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(pubsub.getSnapshotsStream, 'getSnapshots');
      assert.strictEqual(pubsub.getSubscriptionsStream, 'getSubscriptions');
      assert.strictEqual(pubsub.getTopicsStream, 'getTopics');
    });

    it('should promisify some of the things', () => {
      assert(promisified);
    });

    it('should return an instance', () => {
      assert(new PubSub() instanceof PubSub);
    });

    it('should augment the gRPC options', () => {
      let pubsub = new PubSub();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let optionsAny: any = pubsub.options;
      assert.strictEqual(optionsAny[maxMetadataSizeKey], 4 * 1024 * 1024);
      assert.strictEqual(optionsAny[keepaliveTimeKey], 300000);
      assert.strictEqual(optionsAny[keepaliveTimeoutKey], 20000);

      optionsAny = {
        [maxMetadataSizeKey]: 1 * 1024 * 1024,
        [keepaliveTimeKey]: 30,
        [keepaliveTimeoutKey]: 100,
      };
      pubsub = new PubSub(optionsAny);
      optionsAny = pubsub.options;
      assert.strictEqual(optionsAny[maxMetadataSizeKey], 1 * 1024 * 1024);
      assert.strictEqual(optionsAny[keepaliveTimeKey], 30);
      assert.strictEqual(optionsAny[keepaliveTimeoutKey], 100);
    });

    it('should combine all required scopes', () => {
      v1ClientOverrides.SubscriberClient = {};
      v1ClientOverrides.SubscriberClient.scopes = ['a', 'b', 'c'];

      v1ClientOverrides.PublisherClient = {};
      v1ClientOverrides.PublisherClient.scopes = ['b', 'c', 'd', 'e'];

      const pubsub = new PubSub({});
      const options = {scopes: ['a', 'b', 'c', 'd', 'e']};
      const expectedOptions = Object.assign({}, DEFAULT_OPTIONS, options);
      assert.deepStrictEqual(pubsub.options, expectedOptions);
    });

    it('should attempt to determine the service path and port', () => {
      const determineBaseUrl_ = PubSub.prototype.determineBaseUrl_;
      let called = false;

      PubSub.prototype.determineBaseUrl_ = () => {
        PubSub.prototype.determineBaseUrl_ = determineBaseUrl_;
        called = true;
      };

      // tslint:disable-next-line no-unused-expression
      new PubSub({});
      assert(called);
    });

    it('should initialize the API object', () => {
      assert.deepStrictEqual(pubsub.api, {});
    });

    it('should default to the opened state', () => {
      assert.strictEqual(pubsub.isOpen, true);
    });

    it('should enable OpenTelemetry if requested', () => {
      const options: pubsubTypes.ClientConfig = {
        enableOpenTelemetryTracing: true,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const pubsub = new PubSub(options);
      assert.strictEqual(
        tracing.isEnabled(),
        tracing.OpenTelemetryLevel.Modern,
      );
    });

    it('should not be in the opened state after close()', async () => {
      await pubsub.close?.();
      assert.strictEqual(pubsub.isOpen, false);
    });

    it('should cache a local google-auth-library instance', () => {
      const fakeGoogleAuthInstance = {};
      const options = {
        a: 'b',
        c: 'd',
      } as pubsubTypes.ClientConfig;
      const expectedOptions = Object.assign({}, DEFAULT_OPTIONS, options);

      googleAuthOverride = (options_: pubsubTypes.ClientConfig) => {
        assert.deepStrictEqual(options_, expectedOptions);
        return fakeGoogleAuthInstance;
      };

      const pubsub = new PubSub(options);
      assert.strictEqual(pubsub.auth, fakeGoogleAuthInstance);
    });

    it('should localize the options provided', () => {
      const expectedOptions = Object.assign({}, DEFAULT_OPTIONS, OPTIONS);

      assert.deepStrictEqual(pubsub.options, expectedOptions);
    });

    it('should set the projectId', () => {
      assert.strictEqual(pubsub.projectId, PROJECT_ID);
    });

    it('should default the projectId to the token', () => {
      const pubsub = new PubSub({});
      assert.strictEqual(pubsub.projectId, '{{projectId}}');
    });

    it('should set isEmulator to false by default', () => {
      assert.strictEqual(pubsub.isEmulator, false);
    });

    describe('tracing', () => {
      beforeEach(() => {
        tracing.setGloballyEnabled(false);
      });
      afterEach(() => {
        tracing.setGloballyEnabled(false);
      });
      it('should not enable OTel when tracing is disabled', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _pubsub = new PubSub({});
        assert.strictEqual(
          tracing.isEnabled(),
          tracing.OpenTelemetryLevel.None,
        );
      });

      it('should enable OTel when tracing is enabled through constructor', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _pubsub = new PubSub({
          enableOpenTelemetryTracing: true,
        });
        assert.strictEqual(
          tracing.isEnabled(),
          tracing.OpenTelemetryLevel.Modern,
        );
      });
    });
  });

  describe('createSubscription', () => {
    const TOPIC_NAME = 'topic';
    pubsub = new pubsubTypes.PubSub({});
    const TOPIC = Object.assign(new FakeTopic(), {
      name: 'projects/' + PROJECT_ID + '/topics/' + TOPIC_NAME,
    }) as {} as Topic;

    const SUB_NAME = 'subscription';
    const SUBSCRIPTION = {
      name: 'projects/' + PROJECT_ID + '/subscriptions/' + SUB_NAME,
    };

    const apiResponse = {
      name: 'subscription-name',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subClass = Subscription as any;

    beforeEach(() => {
      subClass.formatMetadata_ = (metadata: {}) => {
        return Object.assign({}, metadata);
      };
    });

    it('should throw if no Topic is provided', async () => {
      await assert.rejects(async () => {
        await pubsub.createSubscription?.(undefined!, undefined!);
      }, /A Topic is required for a new subscription\./);
    });

    it('should throw if no subscription name is provided', async () => {
      await assert.rejects(async () => {
        await pubsub.createSubscription?.(TOPIC_NAME, undefined!);
      }, /A subscription name is required./);
    });

    it('should not require configuration options', done => {
      pubsub.request = (config, callback: Function) => {
        callback(null, apiResponse);
      };

      pubsub.createSubscription?.(TOPIC, SUB_NAME, done);
    });

    it('should allow undefined/optional configuration options', done => {
      pubsub.request = (config, callback: Function) => {
        callback(null, apiResponse);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (pubsub as any).createSubscription(TOPIC, SUB_NAME, undefined, done);
    });

    it('should create a Subscription', done => {
      const opts = {a: 'b', c: 'd'} as subby.CreateSubscriptionOptions;

      pubsub.request = util.noop;

      pubsub.subscription = (subName, options) => {
        assert.strictEqual(subName, SUB_NAME);
        assert.deepStrictEqual(options, opts);
        setImmediate(done);
        return SUBSCRIPTION as subby.Subscription;
      };
      pubsub.createSubscription?.(TOPIC, SUB_NAME, opts, assert.ifError);
    });

    it('should create a Topic object from a string', done => {
      pubsub.request = util.noop;

      pubsub.topic = topicName => {
        assert.strictEqual(topicName, TOPIC_NAME);
        setImmediate(done);
        return TOPIC;
      };

      pubsub.createSubscription?.(TOPIC_NAME, SUB_NAME, assert.ifError);
    });

    it('should send correct request', done => {
      const options = {
        gaxOpts: {},
      };

      pubsub.topic = topicName => {
        return {
          name: topicName,
        } as Topic;
      };
      pubsub.subscription = subName => {
        return {
          name: subName,
        } as subby.Subscription;
      };

      const reqOpts = {topic: TOPIC.name, name: SUB_NAME};

      pubsub.request = config => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'createSubscription');
        assert.deepStrictEqual(config.reqOpts, reqOpts);
        assert.deepStrictEqual(config.gaxOpts, options.gaxOpts);
        done();
      };

      pubsub.createSubscription?.(TOPIC, SUB_NAME, options, assert.ifError);
    });

    it('should pass options to the api request', done => {
      const options = {
        retainAckedMessages: true,
        pushEndpoint: 'https://domain/push',
      };

      const expectedBody = Object.assign(
        {topic: TOPIC.name, name: SUB_NAME},
        options,
      );

      pubsub.topic = () => {
        return {
          name: TOPIC_NAME,
        } as Topic;
      };

      pubsub.subscription = () => {
        return {
          name: SUB_NAME,
        } as subby.Subscription;
      };

      pubsub.request = config => {
        assert.notStrictEqual(config.reqOpts, options);
        assert.deepStrictEqual(config.reqOpts, expectedBody);
        done();
      };

      pubsub.createSubscription?.(TOPIC, SUB_NAME, options, assert.ifError);
    });

    it('should discard flow control options', done => {
      const options = {
        flowControl: {},
      };

      const expectedBody = {
        topic: TOPIC.name,
        name: SUB_NAME,
      };

      pubsub.topic = () => {
        return {
          name: TOPIC_NAME,
        } as Topic;
      };

      pubsub.subscription = () => {
        return {
          name: SUB_NAME,
        } as subby.Subscription;
      };

      pubsub.request = config => {
        assert.notStrictEqual(config.reqOpts, options);
        assert.deepStrictEqual(config.reqOpts, expectedBody);
        done();
      };

      pubsub.createSubscription?.(TOPIC, SUB_NAME, options, assert.ifError);
    });

    it('should format the metadata', done => {
      const fakeMetadata = {};
      const formatted = {
        a: 'a',
      };

      subClass.formatMetadata_ = (metadata: {}) => {
        assert.deepStrictEqual(metadata, fakeMetadata);
        return formatted;
      };

      pubsub.request = (config: pubsubTypes.RequestConfig) => {
        assert.strictEqual(config.reqOpts, formatted);
        done();
      };

      pubsub.createSubscription?.(
        TOPIC,
        SUB_NAME,
        fakeMetadata,
        assert.ifError,
      );
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {name: SUB_NAME};

      beforeEach(() => {
        pubsub.request = (config, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should return error & API response to the callback', done => {
        pubsub.request = (config, callback: Function) => {
          callback(error, apiResponse);
        };

        function callback(
          err?: Error | null,
          sub?: subby.Subscription | null,
          resp?: google.pubsub.v1.ISubscription | null,
        ) {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        }

        pubsub.createSubscription?.(TOPIC_NAME, SUB_NAME, callback);
      });
    });

    describe('success', () => {
      const apiResponse = {name: SUB_NAME};

      beforeEach(() => {
        pubsub.request = (config, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should return Subscription & resp to the callback', done => {
        const subscription = {};
        sandbox.stub(pubsub, 'subscription').callsFake(() => {
          return subscription as subby.Subscription;
        });

        sandbox
          .stub(pubsub, 'request')
          .callsFake((config, callback: Function) => {
            callback(null, apiResponse);
          });

        function callback(
          err?: Error | null,
          sub?: subby.Subscription | null,
          resp?: google.pubsub.v1.ISubscription | null,
        ) {
          assert.ifError(err);
          assert.strictEqual(sub, subscription);
          assert.strictEqual(resp, apiResponse);
          done();
        }

        pubsub.createSubscription?.(TOPIC_NAME, SUB_NAME, callback);
      });

      it('should fill the subscription object name if projectId was empty', async () => {
        // Simulate the project ID not being resolved.
        pubsub.projectId = '{{projectId}}';

        sandbox
          .stub(pubsub, 'request')
          .callsFake((config, callback: Function) => {
            pubsub.projectId = 'something';
            callback(null, apiResponse);
          });

        const [sub, resp] = await pubsub.createSubscription!(
          TOPIC_NAME,
          SUB_NAME,
        )!;
        assert.strictEqual(sub.name.includes('{{'), false);
        assert.strictEqual(resp, apiResponse);
      });
    });
  });

  describe('createTopic', () => {
    it('should make the correct API request', done => {
      const pubsub = new pubsubTypes.PubSub();
      const topicName = 'new-topic-name';
      const formattedName = 'formatted-name';
      const gaxOpts = {};

      pubsub.topic = name => {
        assert.strictEqual(name, topicName);

        return {
          name: formattedName,
        } as Topic;
      };

      pubsub.request = config => {
        assert.strictEqual(config.client, 'PublisherClient');
        assert.strictEqual(config.method, 'createTopic');
        assert.deepStrictEqual(config.reqOpts, {name: formattedName});
        assert.deepStrictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      pubsub.createTopic(topicName, gaxOpts, () => {});
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        pubsub.request = (config, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should return an error & API response', done => {
        pubsub.createTopic?.('new-topic', (err, topic, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(topic, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'new-topic',
      };

      // Types changed, so this is needed instead of `unknown`.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let requestStub: sinon.SinonStub<any[], any>;

      beforeEach(() => {
        requestStub = sandbox
          .stub(pubsub, 'request')
          .callsFake((config, callback: Function) => {
            callback(null, apiResponse);
          });
      });

      it('should return a Topic object', done => {
        const topicName = 'new-topic';
        const topicInstance = {};

        pubsub.topic = name => {
          assert.strictEqual(name, topicName);
          return topicInstance as Topic;
        };

        pubsub.createTopic?.(topicName, (err, topic) => {
          assert.ifError(err);
          assert.strictEqual(topic, topicInstance);
          done();
        });
      });

      it('should pass apiResponse to callback', done => {
        pubsub.createTopic?.('new-topic', (err, topic, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should fill the topic object name if projectId was empty', async () => {
        const topicName = 'new-topic';

        // Simulate the project ID not being resolved.
        pubsub.projectId = '{{projectId}}';

        requestStub.restore();
        sandbox
          .stub(pubsub, 'request')
          .callsFake((config, callback: Function) => {
            pubsub.projectId = 'projectId';
            callback(null, apiResponse);
          });

        const [topic, resp] = await pubsub.createTopic!(topicName)!;
        assert.strictEqual(topic.name.includes('{{'), false);
        assert.strictEqual(resp, apiResponse);
      });
    });
  });

  describe('detachSubscription', () => {
    pubsub = new pubsubTypes.PubSub({});
    const SUB_NAME = 'subscription';
    const SUBSCRIPTION = {
      name: 'projects/' + PROJECT_ID + '/subscriptions/' + SUB_NAME,
    };
    const apiResponse = 'responseToCheck';

    it('should throw if no subscription name is provided', async () => {
      await assert.rejects(async () => {
        await pubsub.detachSubscription?.(undefined!);
      }, /A subscription name is required./);
    });

    it('should not require configuration options', done => {
      sandbox
        .stub(pubsub, 'request')
        .callsArgOnWith(1, undefined, undefined, apiResponse);

      pubsub.detachSubscription?.(SUB_NAME, (err, response) => {
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should allow undefined/optional configuration options', done => {
      sandbox
        .stub(pubsub, 'request')
        .callsArgOnWith(1, undefined, undefined, apiResponse);

      pubsub.detachSubscription?.(SUB_NAME, undefined!, (_err, _response) => {
        assert.strictEqual(_response, apiResponse);
        done();
      });
    });

    it('should detach a Subscription from a string', async () => {
      sandbox.stub(pubsub, 'request').callsArg(1);
      sandbox.stub(pubsub, 'subscription').callsFake(subName => {
        assert.strictEqual(subName, SUB_NAME);
        return SUBSCRIPTION as subby.Subscription;
      });

      await pubsub.detachSubscription?.(SUB_NAME);
    });

    it('should send correct request', done => {
      const options = {};

      sandbox.stub(pubsub, 'subscription').callsFake(subName => {
        assert.strictEqual(subName, SUB_NAME);
        return SUBSCRIPTION as subby.Subscription;
      });

      const reqOpts = {subscription: SUBSCRIPTION.name};

      sandbox.stub(pubsub, 'request').callsFake(config => {
        assert.strictEqual(config.client, 'PublisherClient');
        assert.strictEqual(config.method, 'detachSubscription');
        assert.deepStrictEqual(config.reqOpts, reqOpts);
        assert.deepStrictEqual(config.gaxOpts, options);
        done();
      });

      pubsub.detachSubscription?.(SUB_NAME, options, assert.ifError);
    });

    it('should pass options to the api request', done => {
      const options = {
        pageSize: 5,
        maxResults: 10,
      };

      sandbox.stub(pubsub, 'subscription').returns({
        name: SUB_NAME,
      } as subby.Subscription);

      sandbox.stub(pubsub, 'request').callsFake(config => {
        assert.notStrictEqual(config.reqOpts, options);
        assert.deepStrictEqual(config.gaxOpts, options);
        done();
      });

      pubsub.detachSubscription?.(SUB_NAME, options, assert.ifError);
    });
  });

  describe('determineBaseUrl_', () => {
    function setHost(host: string) {
      process.env.PUBSUB_EMULATOR_HOST = host;
    }

    function setSdkUrl(url: string) {
      process.env.CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB = url;
    }

    function unsetVariables() {
      delete process.env.PUBSUB_EMULATOR_HOST;
      delete process.env.CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB;
    }

    beforeEach(() => {
      unsetVariables();
    });

    it('should do nothing if correct options are not set', () => {
      pubsub.determineBaseUrl_?.();

      assert.strictEqual(pubsub.options?.servicePath, undefined);
      assert.strictEqual(pubsub.options?.port, undefined);
    });

    it('should use the apiEndpoint option', () => {
      const defaultBaseUrl_ = 'defaulturl';
      const testingUrl = 'localhost:8085';

      setHost(defaultBaseUrl_);
      pubsub!.options!.apiEndpoint = testingUrl;
      pubsub.determineBaseUrl_?.();

      assert.strictEqual(pubsub.options?.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, 8085);
      assert.strictEqual(pubsub.options.sslCreds, fakeCreds);
      assert.strictEqual(pubsub.isEmulator, true);
    });

    it('should allow overriding fake cred mode (on)', () => {
      pubsub!.options!.apiEndpoint = 'something.googleapis.com';
      pubsub!.options!.emulatorMode = true;
      pubsub.determineBaseUrl_?.();

      assert.strictEqual(pubsub.options!.sslCreds, fakeCreds);
      assert.strictEqual(pubsub.isEmulator, true);
    });

    it('should allow overriding fake cred mode (off)', () => {
      const defaultBaseUrl_ = 'defaulturl';
      const testingUrl = 'localhost:8085';

      setHost(defaultBaseUrl_);
      pubsub!.options!.apiEndpoint = testingUrl;
      pubsub!.options!.emulatorMode = false;
      pubsub.determineBaseUrl_?.();

      assert.strictEqual(pubsub.options?.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, 8085);
      assert.ok(pubsub.options.sslCreds === undefined);
      assert.strictEqual(pubsub.isEmulator, false);
    });

    it('should remove slashes from the baseUrl', () => {
      setHost('localhost:8080/');
      pubsub.determineBaseUrl_?.();
      assert.strictEqual(pubsub.options?.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, 8080);

      setHost('localhost:8081//');
      pubsub.determineBaseUrl_?.();
      assert.strictEqual(pubsub.options.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, 8081);
    });

    it('should set the port to undefined if not set', () => {
      setHost('localhost');
      pubsub.determineBaseUrl_?.();
      assert.strictEqual(pubsub.options?.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, undefined);
    });

    it('should set the port to 80 for http with no port specified', () => {
      setHost('http://localhost/');
      pubsub.determineBaseUrl_?.();
      assert.strictEqual(pubsub.options?.servicePath, 'localhost');
      assert.strictEqual(pubsub.options?.port, 80);
    });

    it('should set the port to 443 for https with no port specified', () => {
      setHost('https://localhost/');
      pubsub.determineBaseUrl_?.();
      assert.strictEqual(pubsub.options?.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, 443);
    });

    it('should create credentials from local grpc if present', () => {
      const fakeCredentials = {};
      const fakeGrpc = {
        credentials: {
          createInsecure: () => fakeCredentials,
        },
      };

      setHost('localhost');
      pubsub!.options!.grpc = fakeGrpc as unknown as typeof gax.grpc;
      pubsub.determineBaseUrl_?.();
      assert.strictEqual(pubsub.options?.sslCreds, fakeCredentials);
    });

    // This tests both the EMULATOR environment variable and detecting
    // an emulator URL.
    describe('with PUBSUB_EMULATOR_HOST environment variable', () => {
      const PUBSUB_EMULATOR_HOST = 'localhost:9090';

      beforeEach(() => {
        setHost(PUBSUB_EMULATOR_HOST);
      });

      after(() => {
        unsetVariables();
      });

      it('should use the PUBSUB_EMULATOR_HOST env var', () => {
        pubsub.determineBaseUrl_?.();
        assert.strictEqual(pubsub.options?.servicePath, 'localhost');
        assert.strictEqual(pubsub.options.port, 9090);
        assert.strictEqual(pubsub.isEmulator, true);
      });
    });

    // This tests both the CLOUDSDK environment variable and detecting
    // a non-emulator URL.
    describe('with CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB environment variable', () => {
      const server = 'some.test.server.googleapis.com';
      const apiUrl = `https://${server}/`;

      beforeEach(() => {
        setSdkUrl(apiUrl);
      });

      after(() => {
        unsetVariables();
      });

      it('should use the CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB env var', () => {
        pubsub.determineBaseUrl_?.();
        assert.strictEqual(pubsub.options?.servicePath, server);
        assert.strictEqual(pubsub.options?.port, 443);
        assert.strictEqual(pubsub.isEmulator, false);
        assert.strictEqual(pubsub.options.sslCreds, undefined);
      });
    });
  });

  describe('getSnapshots', () => {
    const SNAPSHOT_NAME = 'fake-snapshot';
    const apiResponse = {snapshots: [{name: SNAPSHOT_NAME}]};

    beforeEach(() => {
      pubsub.request = (config, callback: Function) => {
        callback(null, apiResponse.snapshots, {}, apiResponse);
      };
    });

    it('should accept a query and a callback', done => {
      pubsub.getSnapshots?.({}, done);
    });

    it('should accept just a callback', done => {
      pubsub.getSnapshots?.(done);
    });

    it('should build the right request', done => {
      const options = {
        a: 'b',
        c: 'd',
        gaxOpts: {
          e: 'f',
        },
        autoPaginate: false,
      } as {} as pubsubTypes.PageOptions;

      const expectedOptions = Object.assign({}, options, {
        project: 'projects/' + pubsub.projectId,
      });

      const expectedGaxOpts = Object.assign(
        {
          autoPaginate: options.autoPaginate,
        },
        options.gaxOpts,
      );

      delete expectedOptions.gaxOpts;
      delete expectedOptions.autoPaginate;

      pubsub.request = config => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'listSnapshots');
        assert.deepStrictEqual(config.reqOpts, expectedOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      pubsub.getSnapshots?.(options, assert.ifError);
    });

    it('should return Snapshot instances with metadata', done => {
      const snapshot = {};

      sandbox.stub(pubsub, 'snapshot').callsFake(name => {
        assert.strictEqual(name, SNAPSHOT_NAME);
        return snapshot as Snapshot;
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pubsub.getSnapshots?.((err: any, snapshots: any) => {
        assert.ifError(err);
        assert.strictEqual(snapshots![0], snapshot);
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (snapshots![0] as any).metadata,
          apiResponse.snapshots[0],
        );
        done();
      });
    });

    it('should pass back all parameters', done => {
      const err_ = new Error('abc');
      const snapshots_ = undefined;
      const nextQuery_ = {};
      const apiResponse_ = {};

      pubsub.request = (config, callback: Function) => {
        callback(err_, snapshots_, nextQuery_, apiResponse_);
      };

      pubsub.getSnapshots?.((err, snapshots, apiResponse) => {
        assert.strictEqual(err, err_);
        assert.deepStrictEqual(snapshots, snapshots_);
        assert.strictEqual(apiResponse, nextQuery_);
        done();
      });
    });
  });

  describe('getSubscriptions', () => {
    const apiResponse = {subscriptions: [{name: 'fake-subscription'}]};

    beforeEach(() => {
      pubsub.request = (config, callback: Function) => {
        callback(null, apiResponse.subscriptions, {}, apiResponse);
      };
    });

    it('should accept a query and a callback', done => {
      pubsub.getSubscriptions?.({}, done);
    });

    it('should accept just a callback', done => {
      pubsub.getSubscriptions?.(done);
    });

    it('should pass the correct arguments to the API', done => {
      const options = {
        gaxOpts: {
          a: 'b',
        },
        autoPaginate: false,
      } as {} as pubsubTypes.GetSubscriptionsOptions;

      const expectedGaxOpts = Object.assign(
        {
          autoPaginate: options.autoPaginate,
        },
        options.gaxOpts,
      );

      const project = 'projects/' + pubsub.projectId;

      pubsub.request = config => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'listSubscriptions');
        assert.deepStrictEqual(config.reqOpts, {project});
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      pubsub.getSubscriptions?.(options, assert.ifError);
    });

    it('should pass options to API request', done => {
      const opts = {pageSize: 10, pageToken: 'abc'};

      pubsub.request = config => {
        const reqOpts = config.reqOpts;
        const expectedOptions = Object.assign({}, opts, {
          project: 'projects/' + pubsub.projectId,
        });
        assert.deepStrictEqual(reqOpts, expectedOptions);
        done();
      };

      pubsub.getSubscriptions?.(opts, assert.ifError);
    });

    it('should return Subscription instances', done => {
      pubsub.getSubscriptions?.(
        (
          err: gax.grpc.ServiceError | null,
          subscriptions?: subby.Subscription[] | null,
        ) => {
          assert.ifError(err);
          assert(subscriptions![0] instanceof subscriptionCached);
          done();
        },
      );
    });

    it('should pass back all params', done => {
      const err_ = new Error('err');
      const subs_ = undefined;
      const nextQuery_ = {};
      const apiResponse_ = {};

      pubsub.request = (config, callback: Function) => {
        callback(err_, subs_, nextQuery_, apiResponse_);
      };

      pubsub.getSubscriptions?.(
        (
          err: gax.grpc.ServiceError | null,
          subs?: subby.Subscription[] | null,
          apiResponse?: google.pubsub.v1.IListSubscriptionsResponse | null,
        ) => {
          assert.strictEqual(err, err_);
          assert.deepStrictEqual(subs, subs_);
          assert.strictEqual(apiResponse, nextQuery_);
          done();
        },
      );
    });

    describe('with topic', () => {
      const TOPIC_NAME = 'topic-name';

      it('should call topic.getSubscriptions', done => {
        const topic = new FakeTopic();

        const opts = {
          topic,
        } as {} as pubsubTypes.GetSubscriptionsOptions;

        topic.getSubscriptions = (options: pubsubTypes.PageOptions) => {
          assert.strictEqual(options, opts);
          done();
        };

        pubsub.getSubscriptions?.(opts, assert.ifError);
      });

      it('should create a topic instance from a name', done => {
        const opts = {
          topic: TOPIC_NAME,
        } as {} as pubsubTypes.GetSubscriptionsOptions;

        const fakeTopic = {
          getSubscriptions(options: pubsubTypes.PageOptions) {
            assert.strictEqual(options, opts);
            done();
          },
        };

        pubsub.topic = (name: string) => {
          assert.strictEqual(name, TOPIC_NAME);
          return fakeTopic as Topic;
        };

        pubsub.getSubscriptions?.(opts, assert.ifError);
      });
    });
  });

  describe('getTopics', () => {
    const topicName = 'fake-topic';
    const apiResponse = {topics: [{name: topicName}]};

    beforeEach(() => {
      pubsub.request = (config, callback: Function) => {
        callback(null, apiResponse.topics, {}, apiResponse);
      };
    });

    it('should accept a query and a callback', done => {
      pubsub.getTopics?.({}, done);
    });

    it('should accept just a callback', done => {
      pubsub.getTopics?.(done);
    });

    it('should build the right request', done => {
      const options = {
        a: 'b',
        c: 'd',
        gaxOpts: {
          e: 'f',
        },
        autoPaginate: false,
      } as {} as pubsubTypes.PageOptions;

      const expectedOptions = Object.assign({}, options, {
        project: 'projects/' + pubsub.projectId,
      });

      const expectedGaxOpts = Object.assign(
        {
          autoPaginate: options.autoPaginate,
        },
        options.gaxOpts,
      );

      delete expectedOptions.gaxOpts;
      delete expectedOptions.autoPaginate;

      pubsub.request = config => {
        assert.strictEqual(config.client, 'PublisherClient');
        assert.strictEqual(config.method, 'listTopics');
        assert.deepStrictEqual(config.reqOpts, expectedOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      pubsub.getTopics?.(options, assert.ifError);
    });

    it('should return Topic instances with metadata', done => {
      const topic = {};

      pubsub.topic = name => {
        assert.strictEqual(name, topicName);
        return topic as Topic;
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pubsub.getTopics?.((err: any, topics: any) => {
        assert.ifError(err);
        assert.strictEqual(topics![0], topic);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((topics![0] as any).metadata, apiResponse.topics[0]);
        done();
      });
    });

    it('should pass back all params', done => {
      const err_ = new Error('err');
      const topics_ = undefined;
      const nextQuery_ = {};
      const apiResponse_ = {};

      pubsub.request = (config, callback: Function) => {
        callback(err_, topics_, nextQuery_, apiResponse_);
      };

      pubsub.getTopics?.((err, topics, apiResponse) => {
        assert.strictEqual(err, err_);
        assert.deepStrictEqual(topics, topics_);
        assert.strictEqual(apiResponse, nextQuery_);
        done();
      });
    });
  });

  describe('request', () => {
    const CONFIG = {
      client: 'PublisherClient',
      method: 'fakeMethod',
      reqOpts: {a: 'a'},
      gaxOpts: {b: 'b'},
    } as pubsubTypes.RequestConfig;

    beforeEach(() => {
      delete pubsub.projectId;
      afterEach(() => sandbox.restore());

      sandbox.stub(pubsub, 'auth').value({
        getProjectId: () => Promise.resolve(PROJECT_ID),
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pjyOverride = (reqOpts: any) => {
        return reqOpts;
      };
    });

    it('should throw if the PubSub is already closed', done => {
      pubsub.close?.((err: Error | null) => {
        assert.strictEqual(err, null);

        pubsub.request?.(CONFIG, (errInner: Error | null) => {
          assert.notStrictEqual(errInner, null);
          assert.strictEqual(
            errInner!.message.indexOf('closed PubSub object') >= 0,
            true,
          );
          done();
        });
      });
    });

    it('should call getClient_ with the correct config', done => {
      pubsub.getClient_ = config => {
        assert.strictEqual(config, CONFIG);
        done();
      };

      pubsub.request?.(CONFIG, assert.ifError);
    });

    it('should return error from getClient_', done => {
      const expectedError = new Error('some error');
      pubsub.getClient_ = (config, callback: Function) => {
        callback(expectedError);
      };

      pubsub.request?.(CONFIG, (err: gax.grpc.ServiceError | null) => {
        assert.strictEqual(expectedError, err);
        done();
      });
    });

    it('should call client method with correct options', done => {
      const fakeClient = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fakeClient as any).fakeMethod = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        reqOpts: any,
        gaxOpts: gax.CallOptions,
      ) => {
        assert.deepStrictEqual(CONFIG.reqOpts, reqOpts);
        assert.deepStrictEqual(CONFIG.gaxOpts, gaxOpts);
        done();
      };
      pubsub.getClient_ = (config, callback: Function) => {
        callback(null, fakeClient);
      };
      pubsub.request?.(CONFIG, assert.ifError);
    });

    it('should replace the project id token on reqOpts', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pjyOverride = (reqOpts: any, projectId: string) => {
        assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
        assert.strictEqual(projectId, PROJECT_ID);
        done();
      };
      pubsub.request?.(CONFIG, assert.ifError);
    });
  });

  describe('getClientAsync_', () => {
    const FAKE_CLIENT_INSTANCE = class {
      close() {}
    };
    const CONFIG = {
      client: 'FakeClient',
    } as {} as pubsubTypes.GetClientConfig;

    beforeEach(() => {
      sandbox.stub(pubsub, 'auth').value({getProjectId: () => util.noop});
      v1ClientOverrides.FakeClient = FAKE_CLIENT_INSTANCE;
    });

    afterEach(() => sandbox.restore());

    describe('closeAllClients_', () => {
      it('should close out any open client', async () => {
        // Create a client that we'll close.
        const client = await pubsub!.getClientAsync_!(CONFIG);

        // Stub out its close method, and verify it gets called.
        const stub = sandbox.stub(client, 'close').resolves();
        await pubsub.closeAllClients_?.();

        assert.strictEqual(stub.called, true);
      });
    });

    describe('project ID', () => {
      beforeEach(() => {
        delete pubsub.projectId;
        pubsub.isEmulator = false;
      });

      it('should get and cache the project ID', async () => {
        sandbox.stub(pubsub!.auth!, 'getProjectId').resolves(PROJECT_ID);

        await pubsub.getClientAsync_?.(CONFIG);

        assert.strictEqual(pubsub.projectId, PROJECT_ID);
        assert.strictEqual(pubsub.options?.projectId, PROJECT_ID);
      });

      it('should get the project ID if placeholder', async () => {
        pubsub.projectId = '{{projectId}}';
        sandbox.stub(pubsub!.auth!, 'getProjectId').resolves(PROJECT_ID);

        await pubsub.getClientAsync_?.(CONFIG);

        assert.strictEqual(pubsub.projectId, PROJECT_ID);
      });

      it('should return auth errors that occur', async () => {
        const error = new Error('err');
        sandbox.stub(pubsub!.auth!, 'getProjectId').rejects(error);

        try {
          await pubsub.getClientAsync_?.(CONFIG);
          throw new Error('getClientAsync_ should have thrown an error');
        } catch (e) {
          assert.strictEqual(e, error);
        }
      });

      it('should ignore auth errors when using the emulator', async () => {
        pubsub.isEmulator = true;

        const error = new Error('err');
        sandbox.stub(pubsub!.auth!, 'getProjectId').rejects(error);

        await pubsub.getClientAsync_?.(CONFIG);
        assert.strictEqual(pubsub.projectId, '');
      });

      it('should not get the project ID if already known', async () => {
        pubsub.projectId = PROJECT_ID;

        const error = new Error('getProjectId should not be called.');
        sandbox.stub(pubsub!.auth!, 'getProjectId').rejects(error);

        await pubsub.getClientAsync_?.(CONFIG);
      });
    });

    it('should cache the client', async () => {
      delete pubsub.api?.fakeClient;

      let numTimesFakeClientInstantiated = 0;

      // tslint:disable-next-line only-arrow-functions
      v1ClientOverrides.FakeClient = function () {
        numTimesFakeClientInstantiated++;
        return FAKE_CLIENT_INSTANCE;
      };

      await pubsub.getClientAsync_?.(CONFIG);
      assert.strictEqual(pubsub.api?.FakeClient, FAKE_CLIENT_INSTANCE);

      await pubsub.getClientAsync_?.(CONFIG);
      assert.strictEqual(numTimesFakeClientInstantiated, 1);
    });

    it('should return the correct client', async () => {
      // tslint:disable-next-line only-arrow-functions no-any
      v1ClientOverrides.FakeClient = function (
        options: pubsubTypes.ClientConfig,
      ) {
        assert.strictEqual(options, pubsub.options);
        return FAKE_CLIENT_INSTANCE;
      };

      const client = await pubsub.getClientAsync_?.(CONFIG);
      assert.strictEqual(client, FAKE_CLIENT_INSTANCE);
    });
  });

  describe('getClient_', () => {
    const FAKE_CLIENT_INSTANCE = {} as unknown as gax.ClientStub;
    const CONFIG = {
      client: 'FakeClient',
    } as {} as pubsubTypes.GetClientConfig;

    it('should get the client', done => {
      sandbox
        .stub(pubsub, 'getClientAsync_')
        .withArgs(CONFIG)
        .resolves(FAKE_CLIENT_INSTANCE);

      pubsub.getClient_?.(CONFIG, (err, client) => {
        assert.ifError(err);
        assert.strictEqual(client, FAKE_CLIENT_INSTANCE);
        done();
      });
    });

    it('should pass back any errors', done => {
      const error = new Error('err');
      sandbox.stub(pubsub, 'getClientAsync_').rejects(error);

      pubsub.getClient_?.(CONFIG, err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('request', () => {
    const CONFIG = {
      client: 'SubscriberClient',
      method: 'fakeMethod',
      reqOpts: {a: 'a'},
      gaxOpts: {},
    } as pubsubTypes.RequestConfig;

    const FAKE_CLIENT_INSTANCE = {
      [CONFIG.method]: util.noop,
    };

    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pjyOverride = (reqOpts: any) => {
        return reqOpts;
      };

      pubsub.getClient_ = (config, callback: Function) => {
        callback(null, FAKE_CLIENT_INSTANCE);
      };
    });
    afterEach(() => sandbox.restore());
    it('should get the client', done => {
      pubsub.getClient_ = config => {
        assert.strictEqual(config, CONFIG);
        done();
      };

      pubsub.request?.(CONFIG, assert.ifError);
    });

    it('should return error from getting the client', done => {
      const error = new Error('Error.');

      pubsub.getClient_ = (config, callback) => {
        callback(error);
      };

      pubsub.request?.(CONFIG, (err: gax.ServiceError | null) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should replace the project id token on reqOpts', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pjyOverride = (reqOpts: any, projectId: string) => {
        assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
        assert.strictEqual(projectId, PROJECT_ID);
        done();
      };

      pubsub.request?.(CONFIG, assert.ifError);
    });

    it('should call the client method correctly', done => {
      const CONFIG = {
        client: 'FakeClient',
        method: 'fakeMethod',
        reqOpts: {a: 'a'},
        gaxOpts: {},
      } as {} as pubsubTypes.RequestConfig;

      const replacedReqOpts = {};

      pjyOverride = () => {
        return replacedReqOpts;
      };

      const fakeClient = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fakeMethod(reqOpts: any, gaxOpts: gax.CallOptions) {
          assert.strictEqual(reqOpts, replacedReqOpts);
          assert.strictEqual(gaxOpts, CONFIG.gaxOpts);
          done();
        },
      };

      pubsub.getClient_ = (config, callback: Function) => {
        callback(null, fakeClient);
      };

      pubsub.request?.(CONFIG, assert.ifError);
    });
  });

  describe('snapshot', () => {
    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (pubsub as any).snapshot();
      }, /You must supply a valid name for the snapshot\./);
    });

    it('should return a Snapshot object', () => {
      const SNAPSHOT_NAME = 'new-snapshot';
      const snapshot = pubsub.snapshot?.(SNAPSHOT_NAME);
      const args = (snapshot as {} as FakeSnapshot).calledWith_;

      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(args[0], pubsub);
      assert.strictEqual(args[1], SNAPSHOT_NAME);
    });
  });

  describe('subscription', () => {
    const SUB_NAME = 'new-sub-name';
    const CONFIG = {};

    it('should return a Subscription object', () => {
      // tslint:disable-next-line only-arrow-functions
      subscriptionOverride = function () {};
      const subscription = pubsub.subscription?.(SUB_NAME, {});
      assert(subscription instanceof subscriptionOverride);
    });

    it('should pass specified name to the Subscription', done => {
      // tslint:disable-next-line only-arrow-functions
      subscriptionOverride = function (
        pubsub: pubsubTypes.PubSub,
        name: string,
      ) {
        assert.strictEqual(name, SUB_NAME);
        done();
      };
      pubsub.subscription?.(SUB_NAME);
    });

    it('should honor settings', done => {
      // tslint:disable-next-line only-arrow-functions
      subscriptionOverride = function (
        pubsub: pubsubTypes.PubSub,
        name: string,
        options: subby.SubscriptionOptions,
      ) {
        assert.strictEqual(options, CONFIG);
        done();
      };
      pubsub.subscription?.(SUB_NAME, CONFIG);
    });

    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (pubsub as any).subscription();
      }, /A name must be specified for a subscription\./);
    });
  });

  describe('topic', () => {
    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (pubsub as any).topic();
      }, /A name must be specified for a topic\./);
    });

    it('should return a Topic object', () => {
      assert(pubsub.topic?.('new-topic') instanceof FakeTopic);
    });

    it('should pass the correct args', () => {
      const fakeName = 'with-options';
      const fakeOptions = {};
      const topic = pubsub.topic?.(fakeName, fakeOptions);

      const [ps, name, options] = (topic as {} as FakeTopic).calledWith_;

      assert.strictEqual(ps, pubsub);
      assert.strictEqual(name, fakeName);
      assert.strictEqual(options, fakeOptions);
    });
  });

  describe('schema', () => {
    function* toAsync<T>(arr: T[]) {
      for (const i of arr) {
        yield i;
      }
    }

    it('should close the schema client when it has been opened', async () => {
      // Force it to create a client.
      const client = await pubsub.getSchemaClient?.();
      sandbox.stub(client!, 'close').resolves();
      await pubsub.close?.();
    });

    // I feel like this ought to be a test, but something in getSchemaClient_()
    // is trying to talk to auth services, so I'm skipping it for now.
    /* it('getSchemaClient_ creates a schema client', async () => {
      const client = await pubsub.getSchemaClient_();
      assert.notStrictEqual(client, undefined);
      assert.notStrictEqual(client, null);
      await pubsub.close();
    }); */

    it('calls down to createSchema correctly', async () => {
      const schemaId = 'id';
      const type = SchemaTypes.Avro;
      const definition = 'def';
      const name = Schema.formatName_(pubsub.projectId!, schemaId);

      // Grab the schema client it'll be using so we can stub it.
      const client = await pubsub.getSchemaClient!();
      const def = defer();
      sandbox.stub(client, 'createSchema').callsFake(req => {
        assert.strictEqual(req.parent, pubsub.name);
        assert.strictEqual(req.schemaId, schemaId);
        assert.strictEqual(req.schema!.name, name);
        assert.strictEqual(req.schema!.type, type);
        assert.strictEqual(req.schema!.definition, definition);
        def.resolve();
      });
      const result = await Promise.all([
        pubsub.createSchema!(schemaId, type, definition),
        def,
      ]);
      assert.strictEqual(result[0].id, schemaId);
    });

    it('calls down to listSchemas correctly', async () => {
      // Grab the schema client it'll be using so we can stub it.
      const client = await pubsub.getSchemaClient!();

      sandbox.stub(client, 'listSchemasAsync').callsFake((req, gaxOpts) => {
        assert.strictEqual(req!.parent, pubsub.name);
        assert.strictEqual(req!.view, 'BASIC');
        assert.deepStrictEqual(gaxOpts, {});
        return toAsync([
          {
            name: 'foo1',
          },
          {
            name: 'foo2',
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ]) as any;
      });

      const ids = [] as string[];
      for await (const s of pubsub.listSchemas!(SchemaViews.Basic, {})) {
        ids.push(s.name!);
      }

      const expectedIds = ['foo1', 'foo2'];
      assert.deepStrictEqual(ids, expectedIds);
    });

    it('defaults to BASIC for listSchemas', async () => {
      // Grab the schema client it'll be using so we can stub it.
      const client = await pubsub.getSchemaClient?.();

      sandbox.stub(client!, 'listSchemasAsync').callsFake(req => {
        assert.strictEqual(req!.view, 'BASIC');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return toAsync([]) as any;
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const s of pubsub.listSchemas!()) {
        break;
      }
    });

    it('returns a proper Schema object from schema()', async () => {
      const schema = pubsub.schema?.('foo');
      assert.strictEqual(schema!.id, 'foo');

      const name = await schema!.getName();
      assert.strictEqual(name, Schema.formatName_(pubsub!.projectId!, 'foo'));
    });

    it('calls validateSchema() on the client when validateSchema() is called', async () => {
      const client = await pubsub.getSchemaClient!();
      const ischema: ISchema = {
        name: 'test',
        type: SchemaTypes.Avro,
        definition: 'foo',
      };

      let called = false;
      sandbox
        .stub(client, 'validateSchema')
        .callsFake(async (params, gaxOpts) => {
          assert.strictEqual(params.parent, pubsub.name);
          assert.deepStrictEqual(params.schema, ischema);
          assert.ok(gaxOpts);
          called = true;
        });

      await pubsub.validateSchema!(ischema, {});
      assert.ok(called);
    });
  });
});
