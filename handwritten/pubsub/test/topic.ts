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
import {CallOptions, ServiceError} from 'google-gax';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';

import {google} from '../protos/protos';
import {ExistsCallback, RequestCallback, RequestConfig} from '../src/pubsub';
import {
  CreateSubscriptionOptions,
  Subscription,
  SubscriptionOptions,
} from '../src/subscription';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {GetTopicMetadataCallback, Topic} from '../src/topic';
import * as util from '../src/util';

let promisified = false;
const fakeUtil = Object.assign({}, util, {
  promisifySome(
    class_: Function,
    classProtos: object,
    methods: string[],
  ): void {
    if (class_.name === 'Topic') {
      promisified = true;
      assert.deepStrictEqual(methods, [
        'flush',
        'create',
        'createSubscription',
        'delete',
        'exists',
        'get',
        'getMetadata',
        'getSubscriptions',
        'setMetadata',
      ]);
      // Defeats the method name type check.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      util.promisifySome(class_, classProtos, methods as any);
    }
  },
});

class FakeIAM {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakePublisher {
  calledWith_: Array<{}>;
  published_!: Array<{}>;
  options_!: object;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
  publishMessage(...args: Array<{}>) {
    this.published_ = args;
  }
  publishWhenReady(...args: Array<{}>) {
    this.published_ = args;
  }
  setOptions(options: object) {
    this.options_ = options;
  }
  getOptionDefaults() {
    return this.options_;
  }
}

let extended = false;
const fakePaginator = {
  extend(klass: Function, methods: string[]) {
    if (klass.name !== 'Topic') {
      return;
    }
    assert.deepStrictEqual(methods, ['getSubscriptions']);
    extended = true;
  },
  streamify(methodName: string) {
    return methodName;
  },
};

describe('Topic', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Topic: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let topic: typeof Topic;

  const PROJECT_ID = 'test-project';
  const TOPIC_NAME = 'projects/' + PROJECT_ID + '/topics/test-topic';
  const TOPIC_UNFORMATTED_NAME = TOPIC_NAME.split('/').pop();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const PUBSUB: any = {
    projectId: PROJECT_ID,
    createTopic: util.noop,
    request: util.noop,
  };

  before(() => {
    Topic = proxyquire('../src/topic.js', {
      './util': fakeUtil,
      '@google-cloud/paginator': {
        paginator: fakePaginator,
      },
      './iam': {IAM: FakeIAM},
      './publisher': {Publisher: FakePublisher},
    }).Topic;
  });

  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    topic = new Topic(PUBSUB, TOPIC_NAME);
    topic.parent = PUBSUB;
  });
  afterEach(() => sandbox.restore());

  describe('initialization', () => {
    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(topic.getSubscriptionsStream, 'getSubscriptions');
    });

    it('should promisify some of the things', () => {
      assert(promisified);
    });

    it('should format the name', () => {
      const formattedName = 'a/b/c/d';

      const formatName_ = Topic.formatName_;
      Topic.formatName_ = (projectId: string, name: string) => {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, TOPIC_NAME);

        Topic.formatName_ = formatName_;

        return formattedName;
      };

      const topic = new Topic(PUBSUB, TOPIC_NAME);
      assert.strictEqual(topic.name, formattedName);
    });

    it('should create a publisher', () => {
      const fakeOptions = {};
      const topic = new Topic(PUBSUB, TOPIC_NAME, fakeOptions);

      const [t, options] = topic.publisher.calledWith_;

      assert.strictEqual(t, topic);
      assert.strictEqual(options, fakeOptions);
    });

    it('should localize the parent object', () => {
      assert.strictEqual(topic.parent, PUBSUB);
      assert.strictEqual(topic.pubsub, PUBSUB);
    });

    it('should localize the request function', done => {
      PUBSUB.request = () => {
        done();
      };

      const topic = new Topic(PUBSUB, TOPIC_NAME);
      topic.request(assert.ifError);
    });

    it('should create an iam object', () => {
      assert.deepStrictEqual(topic.iam.calledWith_, [PUBSUB, topic]);
    });
  });

  describe('formatName_', () => {
    it('should format name', () => {
      const formattedName = Topic.formatName_(
        PROJECT_ID,
        TOPIC_UNFORMATTED_NAME,
      );
      assert.strictEqual(formattedName, TOPIC_NAME);
    });

    it('should format name when given a complete name', () => {
      const formattedName = Topic.formatName_(PROJECT_ID, TOPIC_NAME);
      assert.strictEqual(formattedName, TOPIC_NAME);
    });
  });

  describe('create', () => {
    it('should call the parent createTopic method', done => {
      const options_ = {};

      PUBSUB.createTopic = (name: string, options: CallOptions) => {
        assert.strictEqual(name, topic.name);
        assert.strictEqual(options, options_);
        done();
      };

      topic.create(options_, assert.ifError);
    });
  });

  describe('createSubscription', () => {
    it('should call the parent createSubscription method', done => {
      const NAME = 'sub-name';
      const OPTIONS = {a: 'a'};

      PUBSUB.createSubscription = (
        topic_: Topic,
        name: string,
        options: CreateSubscriptionOptions,
      ) => {
        assert.strictEqual(topic_, topic);
        assert.strictEqual(name, NAME);
        assert.strictEqual(options, OPTIONS);
        done();
      };

      topic.createSubscription(NAME, OPTIONS, assert.ifError);
    });
  });

  describe('delete', () => {
    it('should make the proper request', done => {
      topic.request = (config: RequestConfig) => {
        assert.strictEqual(config.client, 'PublisherClient');
        assert.strictEqual(config.method, 'deleteTopic');
        assert.deepStrictEqual(config.reqOpts, {topic: topic.name});
        done();
      };

      topic.delete(assert.ifError);
    });

    it('should optionally accept gax options', done => {
      const options = {};

      topic.request = (config: RequestConfig) => {
        assert.strictEqual(config.gaxOpts, options);
        done();
      };

      topic.delete(options, assert.ifError);
    });
  });

  describe('get', () => {
    it('should delete the autoCreate option', done => {
      const options = {
        autoCreate: true,
        a: 'a',
      };

      topic.getMetadata = (gaxOpts: CallOptions) => {
        assert.strictEqual(gaxOpts, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((gaxOpts as any).autoCreate, undefined);
        done();
      };

      topic.get(options, assert.ifError);
    });

    describe('success', () => {
      const fakeMetadata = {};

      beforeEach(() => {
        topic.getMetadata = (
          gaxOpts: CallOptions,
          callback: RequestCallback<google.pubsub.v1.ITopic>,
        ) => {
          callback(null, fakeMetadata);
        };
      });

      it('should call through to getMetadata', done => {
        topic.get(
          (err: Error, _topic: Topic, resp: google.pubsub.v1.ITopic) => {
            assert.ifError(err);
            assert.strictEqual(_topic, topic);
            assert.strictEqual(resp, fakeMetadata);
            done();
          },
        );
      });

      it('should optionally accept options', done => {
        const options = {};

        topic.getMetadata = (gaxOpts: CallOptions) => {
          assert.strictEqual(gaxOpts, options);
          done();
        };

        topic.get(options, assert.ifError);
      });
    });

    describe('error', () => {
      it('should pass back errors when not auto-creating', done => {
        const error = {code: 4} as ServiceError;
        const apiResponse = {} as Topic;

        topic.getMetadata = (
          gaxOpts: CallOptions,
          callback: GetTopicMetadataCallback,
        ) => {
          callback(error, apiResponse);
        };

        topic.get(
          (err: Error, _topic: Topic, resp: google.pubsub.v1.ITopic) => {
            assert.strictEqual(err, error);
            assert.strictEqual(_topic, null);
            assert.strictEqual(resp, apiResponse);
            done();
          },
        );
      });

      it('should pass back 404 errors if autoCreate is false', done => {
        const error = {code: 5} as ServiceError;
        const apiResponse = {} as Topic;

        topic.getMetadata = (
          gaxOpts: CallOptions,
          callback: GetTopicMetadataCallback,
        ) => {
          callback(error, apiResponse);
        };

        topic.get(
          (err: Error, _topic: Topic, resp: google.pubsub.v1.ITopic) => {
            assert.strictEqual(err, error);
            assert.strictEqual(_topic, null);
            assert.strictEqual(resp, apiResponse);
            done();
          },
        );
      });

      it('should create the topic if 404 + autoCreate is true', done => {
        const error = {code: 5} as ServiceError;
        const apiResponse = {} as Topic;

        const fakeOptions = {
          autoCreate: true,
        };

        topic.getMetadata = (
          gaxOpts: CallOptions,
          callback: GetTopicMetadataCallback,
        ) => {
          callback(error, apiResponse);
        };

        topic.create = (options: CallOptions) => {
          assert.strictEqual(options, fakeOptions);
          done();
        };

        topic.get(fakeOptions, assert.ifError);
      });
    });
  });

  describe('exists', () => {
    it('should return true if it finds metadata', done => {
      topic.getMetadata = (callback: GetTopicMetadataCallback) => {
        callback(null, {});
      };

      topic.exists((err: Error, exists: ExistsCallback) => {
        assert.ifError(err);
        assert(exists);
        done();
      });
    });

    it('should return false if a not found error occurs', done => {
      const error = {code: 5} as ServiceError;
      topic.getMetadata = (callback: GetTopicMetadataCallback) => {
        callback(error);
      };

      topic.exists((err: Error, exists: ExistsCallback) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should pass back any other type of error', done => {
      const error = {code: 4} as ServiceError;

      topic.getMetadata = (callback: GetTopicMetadataCallback) => {
        callback(error);
      };

      topic.exists((err: Error, exists: ExistsCallback) => {
        assert.strictEqual(err, error);
        assert.strictEqual(exists, undefined);
        done();
      });
    });
  });

  describe('getMetadata', () => {
    it('should make the proper request', done => {
      topic.request = (config: RequestConfig) => {
        assert.strictEqual(config.client, 'PublisherClient');
        assert.strictEqual(config.method, 'getTopic');
        assert.deepStrictEqual(config.reqOpts, {topic: topic.name});
        done();
      };

      topic.getMetadata(assert.ifError);
    });

    it('should optionally accept gax options', done => {
      const options = {};

      topic.request = (config: RequestConfig) => {
        assert.strictEqual(config.gaxOpts, options);
        done();
      };

      topic.getMetadata(options, assert.ifError);
    });

    it('should pass back any errors that occur', done => {
      const error = new Error('err') as ServiceError;
      const apiResponse = {};

      topic.request = (
        config: RequestConfig,
        callback: GetTopicMetadataCallback,
      ) => {
        callback(error, apiResponse);
      };

      topic.getMetadata((err: Error, metadata: google.pubsub.v1.ITopic) => {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, apiResponse);
        done();
      });
    });

    it('should set the metadata if no error occurs', done => {
      const apiResponse = {};

      topic.request = (
        config: RequestConfig,
        callback: GetTopicMetadataCallback,
      ) => {
        callback(null, apiResponse);
      };

      topic.getMetadata((err: Error, metadata: google.pubsub.v1.ITopic) => {
        assert.ifError(err);
        assert.strictEqual(metadata, apiResponse);
        assert.strictEqual(topic.metadata, apiResponse);
        done();
      });
    });
  });

  describe('getSubscriptions', () => {
    it('should make the correct request', done => {
      interface testOptions {
        a: string;
        b: string;
        gaxOpts?: {
          e: string;
        };
        autoPaginate?: boolean;
      }
      const options: testOptions = {
        a: 'a',
        b: 'b',
        gaxOpts: {
          e: 'f',
        },
        autoPaginate: false,
      };

      const expectedOptions = Object.assign(
        {
          topic: topic.name,
        },
        options,
      );

      const expectedGaxOpts = Object.assign(
        {
          autoPaginate: options.autoPaginate,
        },
        options.gaxOpts,
      );

      delete expectedOptions.gaxOpts;
      delete expectedOptions.autoPaginate;

      topic.request = (config: RequestConfig) => {
        assert.strictEqual(config.client, 'PublisherClient');
        assert.strictEqual(config.method, 'listTopicSubscriptions');
        assert.deepStrictEqual(config.reqOpts, expectedOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      topic.getSubscriptions(options, assert.ifError);
    });

    it('should accept only a callback', done => {
      topic.request = (config: RequestConfig) => {
        assert.deepStrictEqual(config.reqOpts, {topic: topic.name});
        assert.deepStrictEqual(config.gaxOpts, {autoPaginate: undefined});
        done();
      };

      topic.getSubscriptions(assert.ifError);
    });

    it('should create subscription objects', done => {
      const fakeSubs = ['a', 'b', 'c'];

      topic.subscription = (name: string) => {
        return {
          name,
        };
      };

      topic.request = (
        config: RequestConfig,
        callback: RequestCallback<string[]>,
      ) => {
        callback(null, fakeSubs);
      };

      topic.getSubscriptions((err: Error, subscriptions: Subscription[]) => {
        assert.ifError(err);
        assert.deepStrictEqual(subscriptions, [
          {name: 'a'},
          {name: 'b'},
          {name: 'c'},
        ]);
        done();
      });
    });

    it('should pass all params to the callback', done => {
      const err_ = new Error('err');
      const subs_ = undefined;
      const nextQuery_ = {};
      const apiResponse_ = {};

      topic.request =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (config: RequestConfig, callback: (...args: any[]) => void) => {
          callback(err_, subs_, nextQuery_, apiResponse_);
        };

      topic.getSubscriptions(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: Error, subs: boolean, nextQuery: any, apiResponse: any) => {
          assert.strictEqual(err, err_);
          assert.deepStrictEqual(subs, subs_);
          assert.strictEqual(nextQuery, nextQuery_);
          assert.strictEqual(apiResponse, apiResponse_);
          done();
        },
      );
    });
  });

  describe('publish', () => {
    it('should call through to Topic#publishMessage', () => {
      const fdata = Buffer.from('Hello, world!');
      const fattributes = {};
      const fcallback = () => {};

      const stub = sandbox.stub(topic, 'publishMessage');

      topic.publish(fdata, fattributes, fcallback);

      const [{data, attributes}, callback] = stub.lastCall.args;
      assert.strictEqual(data, fdata);
      assert.strictEqual(attributes, fattributes);
      assert.strictEqual(callback, fcallback);
    });
  });

  describe('publishJSON', () => {
    it('should throw an error for non-object types', () => {
      const expectedError = /First parameter should be an object\./;

      assert.throws(() => topic.publishJSON('hi'), expectedError);
    });

    it('should pass along the attributes and callback', () => {
      const stub = sandbox.stub(topic, 'publishMessage');
      const fakeAttributes = {};
      const fakeCallback = () => {};

      topic.publishJSON({}, fakeAttributes, fakeCallback);

      const [{attributes}, callback] = stub.lastCall.args;
      assert.strictEqual(attributes, fakeAttributes);
      assert.strictEqual(callback, fakeCallback);
    });
  });

  describe('publishMessage', () => {
    it('should call through to Publisher#publishMessage', () => {
      const stub = sandbox.stub(topic.publisher, 'publishMessage');

      const fdata = Buffer.from('Hello, world!');
      const fattributes = {};
      const fcallback = () => {};

      topic.publish(fdata, fattributes, fcallback);

      const [{data, attributes}, callback] = stub.lastCall.args;
      assert.strictEqual(data, fdata);
      assert.strictEqual(attributes, fattributes);
      assert.strictEqual(callback, fcallback);
    });

    it('should transform JSON into a Buffer', () => {
      const json = {foo: 'bar'};
      const expectedBuffer = Buffer.from(JSON.stringify(json));
      const stub = sandbox.stub(topic.publisher, 'publishMessage');

      topic.publishMessage({json});

      const [{data}] = stub.lastCall.args;
      assert.deepStrictEqual(data, expectedBuffer);
    });

    it('should return the return value of Publisher#publishMessage', () => {
      const fakePromise = Promise.resolve();
      sandbox.stub(topic.publisher, 'publishMessage').resolves(fakePromise);

      const promise = topic.publishMessage({data: Buffer.from('hi')});
      assert.strictEqual(promise, fakePromise);
    });
  });

  describe('setMetadata', () => {
    const METADATA = {
      labels: {yee: 'haw'},
      messageRetentionDuration: {moo: 'cows'},
    };

    let requestStub: sinon.SinonStub;

    beforeEach(() => {
      requestStub = sandbox.stub(topic, 'request');
    });

    it('should call the correct rpc', () => {
      topic.setMetadata(METADATA, assert.ifError);

      const [{client, method}] = requestStub.lastCall.args;
      assert.strictEqual(client, 'PublisherClient');
      assert.strictEqual(method, 'updateTopic');
    });

    it('should send the correct request options', () => {
      topic.setMetadata(METADATA, assert.ifError);

      const expectedTopic = Object.assign({name: topic.name}, METADATA);
      const expectedUpdateMask = {
        paths: ['labels', 'message_retention_duration'],
      };

      const [{reqOpts}] = requestStub.lastCall.args;
      assert.deepStrictEqual(reqOpts.topic, expectedTopic);
      assert.deepStrictEqual(reqOpts.updateMask, expectedUpdateMask);
    });

    it('should accept call options', () => {
      const callOptions = {};

      topic.setMetadata(METADATA, callOptions, assert.ifError);

      const [{gaxOpts}] = requestStub.lastCall.args;
      assert.strictEqual(gaxOpts, callOptions);
    });

    it('should pass the user callback to request', () => {
      const spy = sandbox.spy();

      topic.setMetadata(METADATA, spy);

      const [, callback] = requestStub.lastCall.args;
      assert.strictEqual(callback, spy);
    });
  });

  describe('setPublishOptions', () => {
    it('should call through to Publisher#setOptions', () => {
      const fakeOptions = {};
      const stub = sandbox
        .stub(topic.publisher, 'setOptions')
        .withArgs(fakeOptions);

      topic.setPublishOptions(fakeOptions);

      assert.strictEqual(stub.callCount, 1);
    });

    it('should call through to Publisher#getOptionDefaults', () => {
      topic.publisher.options_ = {};
      const defaults = topic.getPublishOptionDefaults();
      assert.strictEqual(defaults, topic.publisher.options_);
    });
  });

  describe('subscription', () => {
    it('should pass correct arguments to pubsub#subscription', done => {
      const subscriptionName = 'subName';
      const opts = {};

      topic.parent.subscription = (
        name: string,
        options: SubscriptionOptions,
      ) => {
        assert.strictEqual(name, subscriptionName);
        assert.deepStrictEqual(options, opts);
        done();
      };

      topic.subscription(subscriptionName, opts);
    });

    it('should attach the topic instance to the options', done => {
      topic.parent.subscription = (
        name: string,
        options: SubscriptionOptions,
      ) => {
        assert.strictEqual(options.topic, topic);
        done();
      };

      topic.subscription();
    });

    it('should return the result', done => {
      topic.parent.subscription = () => {
        return done;
      };

      const doneFn = topic.subscription();
      doneFn();
    });
  });
});
