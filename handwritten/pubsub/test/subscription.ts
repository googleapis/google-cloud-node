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

import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import {EventEmitter} from 'events';
import {ServiceError} from 'google-gax';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';

import {PubSub, RequestConfig} from '../src/pubsub';
import {Snapshot} from '../src/snapshot';
import {Message, SubscriberOptions} from '../src/subscriber';
import * as subby from '../src/subscription';
import * as util from '../src/util';
import {DebugMessage} from '../src/debug';

let promisified = false;
const fakeUtil = Object.assign({}, util, {
  promisifySome(
    class_: Function,
    classProtos: object,
    methods: string[],
  ): void {
    if (class_.name === 'Subscription') {
      promisified = true;
      assert.deepStrictEqual(methods, [
        'close',
        'create',
        'createSnapshot',
        'delete',
        'detached',
        'exists',
        'get',
        'getMetadata',
        'modifyPushConfig',
        'seek',
        'setMetadata',
      ]);
    }
    // Defeats the method name type check.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    util.promisifySome(class_, classProtos, methods as any);
  },
});

class FakeIAM {
  calledWith_: IArguments;
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

class FakeSnapshot {
  calledWith_: IArguments;
  static formatName_?: Function;
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

let subscriber: FakeSubscriber;

class FakeSubscriber extends EventEmitter {
  calledWith_: IArguments;
  isOpen = false;
  constructor() {
    super();
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    subscriber = this;
  }
  open(): void {
    this.isOpen = true;
  }
  async close(): Promise<void> {
    this.isOpen = false;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOptions(options: SubscriberOptions): void {}
}

describe('Subscription', () => {
  // tslint:disable-next-line variable-name
  let Subscription: typeof subby.Subscription;
  let subscription: Partial<subby.Subscription>;

  const PROJECT_ID = 'test-project';
  const SUB_NAME = 'test-subscription';
  const SUB_FULL_NAME = 'projects/' + PROJECT_ID + '/subscriptions/' + SUB_NAME;

  const PUBSUB = {
    projectId: PROJECT_ID,
    request: util.noop,
    createSubscription: util.noop,
  } as {} as PubSub;

  before(() => {
    Subscription = proxyquire('../src/subscription.js', {
      './util': fakeUtil,
      './iam.js': {IAM: FakeIAM},
      './snapshot.js': {Snapshot: FakeSnapshot},
      './subscriber.js': {Subscriber: FakeSubscriber},
    }).Subscription;
  });

  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    PUBSUB.request = util.noop;
    subscription = new Subscription(PUBSUB, SUB_NAME);
  });

  afterEach(() => sandbox.restore());

  describe('initialization', () => {
    it('should promisify some of the things', () => {
      assert(promisified);
    });

    it('should localize the pubsub object', () => {
      assert.strictEqual(subscription.pubsub, PUBSUB);
    });

    it('should localize the project id', () => {
      assert.strictEqual(subscription.projectId, PROJECT_ID);
    });

    it('should localize pubsub request method', done => {
      PUBSUB.request = () => {
        done();
      };

      const subscription = new Subscription(PUBSUB, SUB_NAME);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (subscription as any).request(assert.ifError);
    });

    it('should format the sub name', () => {
      const formattedName = 'a/b/c/d';
      const formatName = Subscription.formatName_;

      Subscription.formatName_ = (projectId: string, name: string) => {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, SUB_NAME);

        Subscription.formatName_ = formatName;

        return formattedName;
      };

      const subscription = new Subscription(PUBSUB, SUB_NAME);
      assert.strictEqual(subscription.name, formattedName);
    });

    it('should create an IAM object', () => {
      assert(subscription.iam instanceof FakeIAM);
      const args = (subscription.iam as {} as FakeIAM).calledWith_;
      assert.strictEqual(args[0], PUBSUB);
      assert.strictEqual(args[1], subscription);
    });

    it('should create a Subscriber', () => {
      const options = {};
      const subscription = new Subscription(PUBSUB, SUB_NAME, options);

      const [sub, opts] = subscriber.calledWith_;
      assert.strictEqual(sub, subscription);
      assert.strictEqual(opts, options);
    });

    it('should open the subscriber when a listener is attached', () => {
      const stub = sandbox.stub(subscriber, 'open');

      subscription.on?.('message', () => {});
      assert.strictEqual(stub.callCount, 1);
    });

    it('should close the subscriber when no listeners are attached', () => {
      const stub = sandbox.stub(subscriber, 'close');
      const cb = () => {};

      subscription.on?.('message', cb);
      subscription.removeListener?.('message', cb);

      assert.strictEqual(stub.callCount, 1);
    });

    it('should emit messages', done => {
      const message = {
        subSpans: {
          processingStart() {},
          processingEnd() {},
        },
      };

      subscription.on?.('message', (msg: Message) => {
        assert.strictEqual(msg, message);
        done();
      });

      subscriber.emit('message', message);
    });

    it('should emit errors', done => {
      const error = new Error('err');

      subscription.on?.('error', (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });

      subscriber.emit('error', error);
    });

    it('should emit close events', done => {
      subscription.on?.('close', done);
      subscriber.emit('close');
    });
  });

  describe('formatMetadata_', () => {
    it('should make a copy of the metadata', () => {
      const metadata = {a: 'a'} as subby.SubscriptionMetadata;
      const formatted = Subscription.formatMetadata_(metadata);

      assert.deepStrictEqual(metadata, formatted);
      assert.notStrictEqual(metadata, formatted);
    });

    it('should format messageRetentionDuration', () => {
      const threeDaysInSeconds = 3 * 24 * 60 * 60;

      const metadata = {
        messageRetentionDuration: threeDaysInSeconds,
      };

      const formatted = Subscription.formatMetadata_(metadata);

      assert.strictEqual(formatted.messageRetentionDuration!.nanos, 0);

      assert.strictEqual(
        formatted.messageRetentionDuration!.seconds,
        threeDaysInSeconds,
      );
    });

    it('should format pushEndpoint', () => {
      const pushEndpoint = 'http://noop.com/push';

      const metadata = {
        pushEndpoint,
      };

      const formatted = Subscription.formatMetadata_(metadata);

      assert.strictEqual(formatted.pushConfig!.pushEndpoint, pushEndpoint);
      assert.strictEqual(
        (formatted as subby.SubscriptionMetadata).pushEndpoint,
        undefined,
      );
    });

    it('should format oidcToken', () => {
      const oidcToken = {
        serviceAccount: 'pubsub-test@appspot.gserviceaccount.com',
        audience: 'audience',
      };

      const metadata = {
        oidcToken,
      };

      const formatted = Subscription.formatMetadata_(metadata);

      assert.strictEqual(formatted.pushConfig!.oidcToken, oidcToken);
      assert.strictEqual(
        (formatted as subby.SubscriptionMetadata).oidcToken,
        undefined,
      );
    });

    it('should format both pushEndpoint and oidcToken', () => {
      const pushEndpoint = 'http://noop.com/push';

      const oidcToken = {
        serviceAccount: 'pubsub-test@appspot.gserviceaccount.com',
        audience: 'audience',
      };

      const metadata = {
        pushEndpoint,
        oidcToken,
      };

      const formatted = Subscription.formatMetadata_(metadata);

      assert.strictEqual(formatted.pushConfig!.pushEndpoint, pushEndpoint);
      assert.strictEqual(
        (formatted as subby.SubscriptionMetadata).pushEndpoint,
        undefined,
      );

      assert.strictEqual(formatted.pushConfig!.oidcToken, oidcToken);
      assert.strictEqual(
        (formatted as subby.SubscriptionMetadata).oidcToken,
        undefined,
      );
    });
  });

  describe('formatName_', () => {
    it('should format name', () => {
      const formattedName = Subscription.formatName_(PROJECT_ID, SUB_NAME);
      assert.strictEqual(formattedName, SUB_FULL_NAME);
    });

    it('should format name when given a complete name', () => {
      const formattedName = Subscription.formatName_(PROJECT_ID, SUB_FULL_NAME);
      assert.strictEqual(formattedName, SUB_FULL_NAME);
    });
  });

  describe('close', () => {
    it('should call the success callback', done => {
      sandbox.stub(subscriber, 'close').resolves();
      subscription.close?.(done);
    });

    it('should pass back any errors that occurs', done => {
      const fakeErr = new Error('err');

      sandbox.stub(subscriber, 'close').rejects(fakeErr);

      subscription!.close!((err: Error | undefined) => {
        assert.strictEqual(err, fakeErr);
        done();
      });
    });
  });

  describe('create', () => {
    const TOPIC_NAME = 'hi-ho-silver';

    beforeEach(() => {
      subscription.topic = TOPIC_NAME;
    });

    it('should throw an error if there is no topic', async () => {
      const expectedError =
        /Subscriptions can only be created when accessed through Topics/;
      delete subscription.topic;
      await assert.rejects(subscription.create!(), expectedError);
    });

    it('should pass the correct params', () => {
      const fakeOptions = {};
      const stub = sandbox.stub(PUBSUB, 'createSubscription');

      subscription.create?.(fakeOptions, assert.ifError);

      const [topic, name, options] = stub.lastCall.args;
      assert.strictEqual(topic, TOPIC_NAME);
      assert.strictEqual(name, SUB_NAME);
      assert.strictEqual(options, fakeOptions);
    });

    it('should optionally accept options', () => {
      const stub = sandbox.stub(PUBSUB, 'createSubscription');

      subscription.create?.(assert.ifError);

      const options = stub.lastCall.args[2];
      assert.deepStrictEqual(options, {});
    });

    it('should return any request errors', done => {
      const fakeErr = new Error('err');
      const fakeResponse = {};
      const stub = sandbox.stub(PUBSUB, 'createSubscription');

      subscription.create?.((err, sub, resp) => {
        assert.strictEqual(err, fakeErr);
        assert.strictEqual(sub, null);
        assert.strictEqual(resp, fakeResponse);
        done();
      });

      const callback = stub.lastCall.args[3];
      setImmediate(callback, fakeErr as ServiceError, null, fakeResponse);
    });

    it('should update the subscription', done => {
      const stub = sandbox.stub(PUBSUB, 'createSubscription');
      const fakeSub = new Subscription(PUBSUB, SUB_FULL_NAME);
      const fakeResponse = {};

      subscription.create?.(err => {
        assert.ifError(err);
        assert.strictEqual(subscription.metadata, fakeResponse);
        done();
      });

      const callback = stub.lastCall.args[3];
      fakeSub.metadata = fakeResponse;
      setImmediate(callback, null, fakeSub, fakeResponse);
    });

    it('should pass back all the things', done => {
      const fakeResponse = {};
      const stub = sandbox.stub(PUBSUB, 'createSubscription');

      subscription.create?.((err, sub, resp) => {
        assert.ifError(err);
        assert.strictEqual(sub, subscription);
        assert.strictEqual(resp, fakeResponse);
        done();
      });

      const callback = stub.lastCall.args[3];
      setImmediate(callback, null, null, fakeResponse);
    });
  });

  describe('createSnapshot', () => {
    const SNAPSHOT_NAME = 'test-snapshot';

    beforeEach(() => {
      subscription.snapshot = (name: string) => {
        return {
          name,
        } as Snapshot;
      };
    });

    it('should throw an error if a snapshot name is not found', async () => {
      await assert.rejects(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (subscription as any).createSnapshot();
      }, /A name is required to create a snapshot\./);
    });

    it('should make the correct request', done => {
      subscription.request = config => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'createSnapshot');
        assert.deepStrictEqual(config.reqOpts, {
          name: SNAPSHOT_NAME,
          subscription: subscription.name,
        });
        done();
      };

      subscription.createSnapshot?.(SNAPSHOT_NAME, assert.ifError);
    });

    it('should optionally accept gax options', done => {
      const gaxOpts = {};

      subscription.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.createSnapshot?.(SNAPSHOT_NAME, gaxOpts, assert.ifError);
    });

    it('should pass back any errors to the callback', done => {
      const error = new Error('err');
      const apiResponse = {};

      subscription.request = (config, callback: Function) => {
        callback(error, apiResponse);
      };

      subscription.createSnapshot?.(SNAPSHOT_NAME, (err, snapshot, resp) => {
        assert.strictEqual(err, error);
        assert.strictEqual(snapshot, null);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });

    it('should return a snapshot object with metadata', done => {
      const apiResponse = {};
      const fakeSnapshot = {};

      subscription.snapshot = () => {
        return fakeSnapshot as Snapshot;
      };

      subscription.request = (config, callback: Function) => {
        callback(null, apiResponse);
      };

      subscription.createSnapshot?.(SNAPSHOT_NAME, (err, snapshot, resp) => {
        assert.ifError(err);
        assert.strictEqual(snapshot, fakeSnapshot);
        assert.strictEqual(snapshot!.metadata, apiResponse);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('debug', () => {
    const error = new Error('err') as ServiceError;
    const msg = new DebugMessage(error.message, error);

    beforeEach(() => {
      subscription.request = (config, callback) => {
        callback(error);
      };
    });

    it('should return the debug events to the callback', done => {
      subscription.on?.('debug', (msg: DebugMessage) => {
        assert.strictEqual(msg.error, error);
        done();
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (subscription as any)._subscriber.emit('debug', msg);
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      sandbox.stub(subscription, 'removeAllListeners').yields(util.noop);
      sandbox.stub(subscription, 'close').yields(util.noop);
    });

    it('should make the correct request', done => {
      subscription.request = (config: RequestConfig) => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'deleteSubscription');
        assert.deepStrictEqual(config.reqOpts, {
          subscription: subscription.name,
        });
        done();
      };

      subscription.delete?.(assert.ifError);
    });

    it('should optionally accept gax options', done => {
      const gaxOpts = {};

      subscription.request = (config: RequestConfig) => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.delete?.(gaxOpts, assert.ifError);
    });

    describe('success', () => {
      const apiResponse = {};

      beforeEach(() => {
        subscription.request = (config, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should return the api response', done => {
        subscription.delete?.((err, resp) => {
          assert.ifError(err);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should close the subscriber if open', done => {
        const stub = sandbox.stub(subscriber, 'close');

        subscription.open?.();

        subscription.delete?.(err => {
          assert.ifError(err);
          assert.strictEqual(stub.callCount, 1);
          done();
        });
      });
    });

    describe('error', () => {
      const error = new Error('err') as ServiceError;

      beforeEach(() => {
        subscription.request = (config, callback) => {
          callback(error);
        };
      });

      it('should return the error to the callback', done => {
        subscription.delete?.(err => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should not remove all the listeners', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (subscription as any).removeAllListeners = () => {
          done(new Error('Should not be called.'));
        };

        subscription.delete?.(() => {
          done();
        });
      });

      it('should not close the subscription', done => {
        subscription.close = async () => {
          done(new Error('Should not be called.'));
        };

        subscription.delete?.(() => {
          done();
        });
      });
    });
  });

  describe('exists', () => {
    it('should return true if it finds metadata', done => {
      sandbox.stub(subscription, 'getMetadata').yields(null, {});

      subscription.exists?.((err, exists) => {
        assert.ifError(err);
        assert(exists);
        done();
      });
    });

    it('should return false if a not found error occurs', done => {
      const error = {code: 5} as ServiceError;
      sandbox.stub(subscription, 'getMetadata').yields(error);

      subscription.exists?.((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should pass back any other type of error', done => {
      const error = {code: 4} as ServiceError;
      sandbox.stub(subscription, 'getMetadata').yields(error);

      subscription.exists?.((err, exists) => {
        assert.strictEqual(err, error);
        assert.strictEqual(exists, undefined);
        done();
      });
    });
  });

  describe('get', () => {
    it('should delete the autoCreate option', done => {
      const options = {
        autoCreate: true,
        a: 'a',
      };
      sandbox.stub(subscription, 'getMetadata').callsFake(gaxOpts => {
        assert.strictEqual(gaxOpts, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((gaxOpts as typeof options).autoCreate, undefined);
        done();
      });

      subscription.get?.(options, assert.ifError);
    });

    describe('success', () => {
      const fakeMetadata = {};

      it('should call through to getMetadata', done => {
        sandbox
          .stub(subscription, 'getMetadata')
          .callsFake((gaxOpts, callback) => {
            callback(null, fakeMetadata);
          });

        subscription.get?.((err, sub, resp) => {
          assert.ifError(err);
          assert.strictEqual(sub, subscription);
          assert.strictEqual(resp, fakeMetadata);
          done();
        });
      });

      it('should optionally accept options', done => {
        const options = {};
        sandbox
          .stub(subscription, 'getMetadata')
          .callsFake((gaxOpts, callback) => {
            assert.strictEqual(gaxOpts, options);
            callback(null); // the done fn
          });

        subscription.get?.(options, done);
      });
    });

    describe('error', () => {
      it('should pass back errors when not auto-creating', done => {
        const error = {code: 4} as ServiceError;
        const apiResponse = {};
        sandbox
          .stub(subscription, 'getMetadata')
          .callsArgWith(1, error, apiResponse);

        subscription.get?.((err, sub, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should pass back 404 errors if autoCreate is false', done => {
        const error = {code: 5} as ServiceError;
        const apiResponse = {};
        sandbox
          .stub(subscription, 'getMetadata')
          .callsArgWith(1, error, apiResponse);

        subscription.get?.((err, sub, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should pass back 404 errors if create doesnt exist', done => {
        const error = {code: 5} as ServiceError;
        const apiResponse = {};
        sandbox
          .stub(subscription, 'getMetadata')
          .callsArgWith(1, error, apiResponse);

        delete subscription.create;

        subscription.get?.((err, sub, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should create the sub if 404 + autoCreate is true', done => {
        const error = {code: 5} as ServiceError;
        const apiResponse = {};

        const fakeOptions = {
          autoCreate: true,
        };
        sandbox
          .stub(subscription, 'getMetadata')
          .callsArgWith(1, error, apiResponse);

        sandbox.stub(subscription, 'create').callsFake(options => {
          assert.strictEqual(options.gaxOpts, fakeOptions);
          done();
        });

        subscription.topic = 'hi-ho-silver';
        subscription.get?.(fakeOptions, assert.ifError);
      });
    });
  });

  describe('getMetadata', () => {
    it('should make the correct request', done => {
      subscription.request = config => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'getSubscription');
        assert.deepStrictEqual(config.reqOpts, {
          subscription: subscription.name,
        });
        done();
      };

      subscription.getMetadata?.(assert.ifError);
    });

    it('should optionally accept gax options', done => {
      const gaxOpts = {};

      subscription.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.getMetadata?.(gaxOpts, assert.ifError);
    });

    it('should pass back any errors that occur', done => {
      const error = new Error('err');
      const apiResponse = {};

      subscription.request = (config, callback: Function) => {
        callback(error, apiResponse);
      };

      subscription.getMetadata?.((err, metadata) => {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, apiResponse);
        done();
      });
    });

    it('should set the metadata if no error occurs', done => {
      const apiResponse = {};

      subscription.request = (config, callback: Function) => {
        callback(null, apiResponse);
      };

      subscription.getMetadata?.((err, metadata) => {
        assert.ifError(err);
        assert.strictEqual(metadata, apiResponse);
        assert.strictEqual(subscription.metadata, apiResponse);
        done();
      });
    });
  });

  describe('modifyPushConfig', () => {
    const fakeConfig = {};

    it('should make the correct request', done => {
      subscription.request = config => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'modifyPushConfig');
        assert.deepStrictEqual(config.reqOpts, {
          subscription: subscription.name,
          pushConfig: fakeConfig,
        });
        done();
      };

      subscription.modifyPushConfig?.(fakeConfig, assert.ifError);
    });

    it('should optionally accept gaxOpts', done => {
      const gaxOpts = {};

      subscription.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.modifyPushConfig?.(fakeConfig, gaxOpts, assert.ifError);
    });
  });

  describe('open', () => {
    it('should open the subscriber', () => {
      const stub = sandbox.stub(subscriber, 'open');

      subscription.open?.();

      assert.strictEqual(stub.callCount, 1);
    });

    it('should noop if already open', () => {
      const spy = sandbox.spy(subscriber, 'open');

      subscription.open?.();
      subscription.open?.();

      assert.strictEqual(spy.callCount, 1);
    });
  });

  describe('seek', () => {
    const FAKE_SNAPSHOT_NAME = 'a';
    const FAKE_FULL_SNAPSHOT_NAME = 'a/b/c/d';

    beforeEach(() => {
      FakeSnapshot.formatName_ = () => {
        return FAKE_FULL_SNAPSHOT_NAME;
      };
    });

    it('should throw if a name or date is not provided', async () => {
      await assert.rejects(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (subscription as any).seek();
      }, /Either a snapshot name or Date is needed to seek to\./);
    });

    it('should make the correct api request', done => {
      FakeSnapshot.formatName_ = (projectId: string, name: string) => {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, FAKE_SNAPSHOT_NAME);
        return FAKE_FULL_SNAPSHOT_NAME;
      };

      subscription.request = (config: RequestConfig) => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'seek');
        assert.deepStrictEqual(config.reqOpts, {
          subscription: subscription.name,
          snapshot: FAKE_FULL_SNAPSHOT_NAME,
        });
        done();
      };

      subscription.seek?.(FAKE_SNAPSHOT_NAME, assert.ifError);
    });

    it('should optionally accept a Date object', done => {
      const date = new Date();
      const reqOpts = {
        subscription: SUB_FULL_NAME,
        time: {
          seconds: Math.floor(date.getTime() / 1000),
          nanos: Math.floor(date.getTime() % 1000) * 1000,
        },
      };
      subscription.request = (config: RequestConfig) => {
        assert.deepStrictEqual(config.reqOpts, reqOpts);
        done();
      };

      subscription.seek?.(date, assert.ifError);
    });

    it('should optionally accept gax options', done => {
      const gaxOpts = {};

      subscription.request = (config: RequestConfig) => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.seek?.(FAKE_SNAPSHOT_NAME, gaxOpts, assert.ifError);
    });
  });

  describe('setMetadata', () => {
    const METADATA = {
      pushEndpoint: 'http://noop.com/push',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subClass = subby.Subscription as any;

    beforeEach(() => {
      subClass.formatMetadata_ = (metadata: {}) => {
        return Object.assign({}, metadata);
      };
    });

    it('should make the correct request', done => {
      const formattedMetadata = {
        pushConfig: {
          pushEndpoint: METADATA.pushEndpoint,
        },
      };

      const expectedBody = Object.assign(
        {
          name: SUB_FULL_NAME,
        },
        formattedMetadata,
      );

      Subscription.formatMetadata_ = metadata => {
        assert.strictEqual(metadata, METADATA);
        return formattedMetadata;
      };

      const reqOpts = {
        subscription: expectedBody,
        updateMask: {
          paths: ['push_config'],
        },
      };

      subscription.request = (config: RequestConfig) => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'updateSubscription');
        assert.deepStrictEqual(config.reqOpts, reqOpts);
        done();
      };

      subscription.setMetadata?.(METADATA, done);
    });

    it('should optionally accept gax options', done => {
      const gaxOpts = {};

      subscription.request = (config: RequestConfig) => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };
      subscription.setMetadata?.(METADATA, gaxOpts, done);
    });
  });

  describe('setOptions', () => {
    it('should pass the options to the subscriber', () => {
      const options = {};
      const stub = sandbox.stub(subscriber, 'setOptions').withArgs(options);
      subscription.setOptions?.(options);
      assert.strictEqual(stub.callCount, 1);
    });
  });

  describe('snapshot', () => {
    const SNAPSHOT_NAME = 'a';

    it('should call through to pubsub.snapshot', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (PUBSUB as any).snapshot = function (name: string) {
        assert.strictEqual(this, subscription);
        assert.strictEqual(name, SNAPSHOT_NAME);
        done();
      };

      subscription.snapshot?.(SNAPSHOT_NAME);
    });
  });
});
