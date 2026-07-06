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

import {util} from '@google-cloud/common';
import {CallbackifyAllOptions} from '@google-cloud/promisify';
import arrify = require('arrify');
import * as assert from 'assert';
import {describe, it, beforeEach, before} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import {
  Logging as LOGGING,
  LoggingOptions,
  GetLogsRequest,
  Log,
  CreateSinkRequest,
  GetSinksRequest,
  Sink,
} from '../src/index';
import {Duplex, PassThrough} from 'stream';
import {Policy} from '@google-cloud/pubsub';
import {GetEntriesRequest} from '../src/log';
import {Dataset} from '@google-cloud/bigquery';
import {Bucket} from '@google-cloud/storage';
import * as metadata from '../src/utils/metadata';

import * as sinon from 'sinon';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {v2} = require('../src');
const version = require('../../package.json').version;

interface AbortableDuplex extends Duplex {
  cancel: Function;
  abort: Function;
}

const through = () =>
  new PassThrough({objectMode: true}) as {} as AbortableDuplex;

const noop = () => {};
let extended = false;
const fakePaginator = {
  paginator: {
    extend(klass: Function, methods: string[]) {
      if (klass.name !== 'Logging') {
        return;
      }
      extended = true;
      methods = arrify(methods);
      assert.deepStrictEqual(methods, ['getEntries', 'getLogs', 'getSinks']);
    },
    streamify(methodName: string) {
      return methodName;
    },
  },
};

let googleAuthOverride: Function | null;
function fakeGoogleAuth() {
  // eslint-disable-next-line prefer-spread,prefer-rest-params
  return (googleAuthOverride || noop).apply(null, arguments);
}

let isCustomTypeOverride: Function | null;
let callbackified = false;
let replaceProjectIdTokenOverride: Function | null;
const fakeUtil = extend({}, util, {
  isCustomType() {
    if (isCustomTypeOverride) {
      // eslint-disable-next-line prefer-spread,prefer-rest-params
      return isCustomTypeOverride.apply(null, arguments);
    }
    return false;
  },
});
const fakeCallbackify = {
  callbackifyAll(c: Function, options: CallbackifyAllOptions) {
    if (c.name !== 'Logging') {
      return;
    }
    callbackified = true;
    assert.deepStrictEqual(options.exclude, ['request']);
  },
};
const fakeProjectify = {
  replaceProjectIdToken(reqOpts: {}) {
    if (replaceProjectIdTokenOverride) {
      // eslint-disable-next-line prefer-spread,prefer-rest-params
      return replaceProjectIdTokenOverride.apply(null, arguments);
    }
    return reqOpts;
  },
};

const originalFakeUtil = extend(true, {}, fakeUtil);

function fakeV2() {}

class FakeEntry {
  calledWith_: IArguments;
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
  static fromApiResponse_() {
    // eslint-disable-next-line prefer-rest-params
    return arguments;
  }
}

class FakeLog {
  calledWith_: IArguments;
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

class FakeSink {
  calledWith_: IArguments;
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

describe('Logging', () => {
  let Logging: typeof LOGGING;
  let logging: LOGGING;

  const PROJECT_ID = 'project-id';

  before(() => {
    Logging = proxyquire('../src', {
      '@google-cloud/common': {
        util: fakeUtil,
      },
      '@google-cloud/promisify': fakeCallbackify,
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/projectify': fakeProjectify,
      'google-gax': {
        GoogleAuth: fakeGoogleAuth,
      },
      './log': {Log: FakeLog},
      './log-sync': {LogSync: FakeLog},
      './entry': {Entry: FakeEntry},
      './sink': {Sink: FakeSink},
      './v2': fakeV2,
    }).Logging;
  });

  beforeEach(() => {
    extend(fakeUtil, originalFakeUtil);
    googleAuthOverride = null;
    isCustomTypeOverride = null;
    replaceProjectIdTokenOverride = null;
    logging = new Logging({
      projectId: PROJECT_ID,
    });
  });

  describe('instantiation', () => {
    const EXPECTED_SCOPES: string[] = [];
    const clientClasses = [
      v2.ConfigServiceV2Client,
      v2.LoggingServiceV2Client,
      v2.MetricsServiceV2Client,
    ];

    for (const clientClass of clientClasses) {
      for (const scope of clientClass.scopes) {
        if (EXPECTED_SCOPES.indexOf(scope) === -1) {
          EXPECTED_SCOPES.push(scope);
        }
      }
    }

    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should callbackify all the things', () => {
      assert(callbackified);
    });

    it('should initialize the API object', () => {
      assert.deepStrictEqual(logging.api, {});
    });

    it('should cache a local GoogleAuth instance', () => {
      const fakeGoogleAuthInstance = {};
      const options = {
        a: 'b',
        c: 'd',
      } as LoggingOptions;

      googleAuthOverride = (options_: {}) => {
        assert.deepStrictEqual(
          options_,
          extend(
            {
              libName: 'gccl',
              libVersion: version,
              scopes: EXPECTED_SCOPES,
            },
            options
          )
        );
        return fakeGoogleAuthInstance;
      };

      const logging = new Logging(options);
      assert.strictEqual(logging.auth, fakeGoogleAuthInstance);
    });

    it('should localize the options', () => {
      const options = {
        a: 'b',
        c: 'd',
        clientConfig: {},
        port: 443,
        servicePath: 'logging.googleapis.com',
      } as LoggingOptions;

      const logging = new Logging(options);
      assert.notStrictEqual(logging.options, options);

      assert.deepStrictEqual(
        logging.options,
        extend(
          {
            libName: 'gccl',
            libVersion: version,
            scopes: EXPECTED_SCOPES,
          },
          options
        )
      );
    });

    it('should set the projectId', () => {
      assert.strictEqual(logging.projectId, PROJECT_ID);
    });

    it('should default the projectId to the token', () => {
      const logging = new Logging({});
      assert.strictEqual(logging.projectId, '{{projectId}}');
    });
  });

  describe('createSink', () => {
    const SINK_NAME = 'name';

    beforeEach(() => {
      logging.configService.createSink = async () => [{}];
    });

    it('should throw if a name is not provided', () => {
      const error = new Error('A sink name must be provided.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (logging as any).createSink().then(noop, (err: Error) => {
        assert.deepStrictEqual(err, error);
      });
    });

    it('should throw if a config object is not provided', () => {
      const error = new Error('A sink configuration object must be provided.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (logging as any).createSink(SINK_NAME).then(noop, (err: Error) => {
        assert.deepStrictEqual(err, error);
      });
    });

    it('should set acls for a Dataset destination', async () => {
      const dataset = {};

      const CONFIG = {
        destination: dataset,
      };

      isCustomTypeOverride = (destination: {}, type: string) => {
        assert.strictEqual(destination, dataset);
        return type === 'bigquery/dataset';
      };

      logging.setAclForDataset_ = async config => {
        assert.strictEqual(config, CONFIG);
      };

      await logging.createSink(SINK_NAME, CONFIG);
    });

    it('should set acls for a Topic destination', async () => {
      const topic = {};

      const CONFIG = {
        destination: topic,
      };

      isCustomTypeOverride = (destination: {}, type: string) => {
        assert.strictEqual(destination, topic);
        return type === 'pubsub/topic';
      };

      logging.setAclForTopic_ = async config => {
        assert.strictEqual(config, CONFIG);
      };

      await logging.createSink(SINK_NAME, CONFIG);
    });

    it('should set acls for a Bucket destination', async () => {
      const bucket = {};

      const CONFIG = {
        destination: bucket,
      };

      isCustomTypeOverride = (destination: {}, type: string) => {
        assert.strictEqual(destination, bucket);
        return type === 'storage/bucket';
      };

      logging.setAclForBucket_ = async config => {
        assert.strictEqual(config, CONFIG);
      };

      await logging.createSink(SINK_NAME, CONFIG);
    });

    describe('API request', () => {
      it('should call GAX method', async () => {
        const config = {
          a: 'b',
          c: 'd',
        } as {} as CreateSinkRequest;

        const expectedConfig = extend({}, config, {
          name: SINK_NAME,
        });

        logging.configService.createSink = async (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          reqOpts: any,
          gaxOpts: {}
        ) => {
          const expectedParent = 'projects/' + logging.projectId;
          assert.strictEqual(reqOpts.parent, expectedParent);
          assert.deepStrictEqual(reqOpts.sink, expectedConfig);
          assert.strictEqual(gaxOpts, undefined);
          return [{}];
        };

        await logging.createSink(SINK_NAME, config);
      });

      it('should accept uniqueWriterIdentity', async () => {
        const config = {
          destination: '...',
          uniqueWriterIdentity: '...',
        };

        logging.configService.createSink = async (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          reqOpts: any,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          gaxOpts: {}
        ) => {
          assert.strictEqual(
            reqOpts.uniqueWriterIdentity,
            config.uniqueWriterIdentity
          );
          assert.strictEqual(reqOpts.sink.uniqueWriterIdentity, undefined);
          return [{}];
        };

        await logging.createSink(SINK_NAME, config);
      });

      it('should accept GAX options', async () => {
        const config = {
          a: 'b',
          c: 'd',
          gaxOptions: {},
        } as {} as CreateSinkRequest;

        logging.configService.createSink = async (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          reqOpts: any,
          gaxOpts: {}
        ) => {
          assert.strictEqual(reqOpts.sink.gaxOptions, undefined);
          assert.strictEqual(gaxOpts, config.gaxOptions);
          return [{}];
        };

        await logging.createSink(SINK_NAME, config);
      });

      describe('error', () => {
        const error = new Error('Error.');
        const apiResponse = {};

        beforeEach(() => {
          (logging.request as Function) = (config: {}, callback: Function) => {
            callback(error, apiResponse);
          };
        });

        it('should reject Promise with an error', () => {
          logging.configService.createSink = async () => {
            throw error;
          };

          logging
            .createSink(SINK_NAME, {} as CreateSinkRequest)
            .then(noop, (err: Error) => assert.deepStrictEqual(err, error));
        });
      });

      describe('success', () => {
        const apiResponse = {
          name: SINK_NAME,
        };

        beforeEach(() => {
          (logging.request as Function) = (config: {}, callback: Function) => {
            callback(null, apiResponse);
          };
        });

        it('should resolve Promise Sink & API response', async () => {
          const sink = {} as Sink;

          logging.sink = name_ => {
            assert.strictEqual(name_, SINK_NAME);
            return sink;
          };

          logging.configService.createSink = async () => {
            return [apiResponse];
          };

          const [sink_, apiResponse_] = await logging.createSink(
            SINK_NAME,
            {} as CreateSinkRequest
          );
          assert.strictEqual(sink_, sink);
          assert.strictEqual(sink_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
        });
      });
    });
  });

  describe('entry', () => {
    const RESOURCE = {};
    const DATA = {};

    it('should return an Entry object', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const entry = logging.entry(RESOURCE, DATA) as any;
      assert(entry instanceof FakeEntry);
      assert.strictEqual(entry.calledWith_[0], RESOURCE);
      assert.strictEqual(entry.calledWith_[1], DATA);
    });
  });

  describe('getEntries', () => {
    beforeEach(() => {
      logging.auth.getProjectId = async () => PROJECT_ID;
    });

    it('should exec without options (with defaults)', async () => {
      logging.loggingService.listLogEntries = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        reqOpts: any,
        gaxOpts: {}
      ) => {
        assert.deepStrictEqual(reqOpts, {
          filter: reqOpts?.filter,
          orderBy: 'timestamp desc',
          resourceNames: ['projects/' + logging.projectId],
        });
        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
        });
        assert.ok(reqOpts?.filter.includes('timestamp'));
        return [[]];
      };

      await logging.getEntries();
    });

    it('should not add projectId if resourceNames is provided', async () => {
      const resourceNames = ['projects/other-project/buckets/my-bucket'];
      const options = {
        resourceNames: resourceNames,
      };

      logging.loggingService.listLogEntries = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        reqOpts: any
      ) => {
        assert.deepStrictEqual(reqOpts.resourceNames, resourceNames);
        return [[]];
      };

      await logging.getEntries(options);
    });

    it('should accept options (and not overwrite timestamp)', async () => {
      const options = {filter: 'timestamp > "2020-11-11T15:01:23.045123456Z"'};

      logging.loggingService.listLogEntries = async (
        reqOpts: {},
        gaxOpts: {}
      ) => {
        assert.deepStrictEqual(
          reqOpts,
          extend(options, {
            filter: 'timestamp > "2020-11-11T15:01:23.045123456Z"',
            orderBy: 'timestamp desc',
            resourceNames: ['projects/' + logging.projectId],
          })
        );

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
        });
        return [[]];
      };

      await logging.getEntries(options);
    });

    it('should append default timestamp to existing filters', async () => {
      const options = {filter: 'test'};

      logging.loggingService.listLogEntries = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        reqOpts: any,
        gaxOpts: {}
      ) => {
        assert.deepStrictEqual(
          reqOpts,
          extend(options, {
            filter: reqOpts?.filter,
            orderBy: 'timestamp desc',
            resourceNames: ['projects/' + logging.projectId],
          })
        );
        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
        });
        assert.ok(reqOpts?.filter.includes('test AND timestamp'));
        return [[]];
      };

      await logging.getEntries(options);
    });

    it('should not push the same resourceName again', async () => {
      const options = {
        resourceNames: ['projects/' + logging.projectId],
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      logging.loggingService.listLogEntries = async (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.resourceNames, [
          'projects/' + logging.projectId,
        ]);
        return [[]];
      };

      logging.getEntries(options, assert.ifError);
    });

    it('should allow overriding orderBy', async () => {
      const options = {
        orderBy: 'timestamp asc',
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      logging.loggingService.listLogEntries = async (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.orderBy, options.orderBy);
        return [[]];
      };

      await logging.getEntries(options);
    });

    it('should accept GAX options', async () => {
      const options = {
        a: 'b',
        c: 'd',
        gaxOptions: {
          autoPaginate: true,
        },
      };

      logging.loggingService.listLogEntries = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        reqOpts: any,
        gaxOpts: {}
      ) => {
        assert.deepStrictEqual(reqOpts, {
          a: 'b',
          c: 'd',
          filter: reqOpts?.filter,
          orderBy: 'timestamp desc',
          resourceNames: ['projects/' + logging.projectId],
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((reqOpts as any).gaxOptions, undefined);
        assert.deepStrictEqual(gaxOpts, options.gaxOptions);
        assert.ok(reqOpts?.filter.includes('timestamp'));
        return [[]];
      };

      await logging.getEntries(options);
    });

    describe('error', () => {
      const error = new Error('Error.');

      beforeEach(() => {
        logging.loggingService.listLogEntries = async () => {
          throw error;
        };
      });

      it('should reject promise with error', () => {
        logging.getEntries().then(noop, err => assert.strictEqual(err, error));
      });
    });

    describe('success', () => {
      const expectedResponse = [
        [
          {
            logName: 'syslog',
          },
        ],
      ];

      beforeEach(() => {
        logging.loggingService.listLogEntries = async () => {
          return expectedResponse;
        };
      });

      it('should resolve promise with entries & API resp', async () => {
        const [entries] = await logging.getEntries();
        assert.strictEqual(entries[0], expectedResponse[0][0]);
      });
    });
  });

  describe('getEntriesStream', () => {
    const OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd',
      },
    } as GetEntriesRequest;

    let GAX_STREAM: AbortableDuplex;
    const RESULT = {};

    beforeEach(() => {
      GAX_STREAM = through();
      GAX_STREAM.push(RESULT);
      logging.loggingService.listLogEntriesStream = () => GAX_STREAM;
      logging.auth.getProjectId = async () => PROJECT_ID;
    });

    it('should make request once reading', done => {
      logging.loggingService.listLogEntriesStream = (
        reqOpts: {},
        gaxOpts: {}
      ) => {
        assert.deepStrictEqual(reqOpts, {
          resourceNames: ['projects/' + logging.projectId],
          orderBy: 'timestamp desc',
          a: 'b',
          c: 'd',
        });

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd',
        });

        setImmediate(done);

        return GAX_STREAM;
      };

      const stream = logging.getEntriesStream(OPTIONS);
      stream.emit('reading');
    });

    it('should set logName filter if has logName flag', done => {
      const logName = 'log-name';
      logging = new LOGGING({projectId: PROJECT_ID});
      logging.loggingService.listLogEntriesStream = (
        reqOpts: {},
        gaxOpts: {}
      ) => {
        assert.deepStrictEqual(reqOpts, {
          resourceNames: ['projects/' + logging.projectId],
          orderBy: 'timestamp desc',
          a: 'b',
          c: 'd',
          filter: `logName="${[
            'projects',
            PROJECT_ID,
            'logs',
            encodeURIComponent(logName),
          ].join('/')}"`,
        });

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd',
        });

        setImmediate(done);

        return GAX_STREAM;
      };

      const log = logging.log('log-name');
      const stream = log.getEntriesStream(OPTIONS);
      stream.emit('reading');
    });

    it('should add logName filter to user provided filter', done => {
      const logName = 'log-name';
      const OPTIONS_WITH_FILTER = extend(
        {
          filter: 'custom filter',
        },
        OPTIONS
      );
      logging = new LOGGING({projectId: PROJECT_ID});
      logging.loggingService.listLogEntriesStream = (
        reqOpts: {},
        gaxOpts: {}
      ) => {
        assert.deepStrictEqual(reqOpts, {
          resourceNames: ['projects/' + logging.projectId],
          orderBy: 'timestamp desc',
          a: 'b',
          c: 'd',
          filter: `(${OPTIONS_WITH_FILTER.filter}) AND logName="${[
            'projects',
            PROJECT_ID,
            'logs',
            encodeURIComponent(logName),
          ].join('/')}"`,
        });

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd',
        });

        setImmediate(done);

        return GAX_STREAM;
      };

      const log = logging.log('log-name');
      const stream = log.getEntriesStream(OPTIONS_WITH_FILTER);
      stream.emit('reading');
    });

    it('should destroy request stream if gax fails', done => {
      const error = new Error('Error.');
      logging.loggingService.listLogEntriesStream = () => {
        throw error;
      };
      const stream = logging.getEntriesStream(OPTIONS);
      stream.emit('reading');
      stream.once('error', err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should destroy request stream if gaxStream catches error', done => {
      const error = new Error('Error.');
      const stream = logging.getEntriesStream(OPTIONS);
      stream.emit('reading');
      stream.on('error', err => {
        assert.strictEqual(err, error);
        done();
      });
      setImmediate(() => {
        GAX_STREAM.emit('error', error);
      });
    });

    it('should return if in snippet sandbox', done => {
      logging.setProjectId = async () => {
        return done(new Error('Should not have gotten project ID'));
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global as any).GCLOUD_SANDBOX_ENV = true;
      const stream = logging.getEntriesStream(OPTIONS);
      stream.emit('reading');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (global as any).GCLOUD_SANDBOX_ENV;
      assert(stream instanceof require('stream'));
      done();
    });

    it('should convert results from request to Entry', done => {
      const stream = logging.getEntriesStream(OPTIONS);
      stream.on('data', entry => {
        const argsPassedToFromApiResponse_ = entry[0];
        assert.strictEqual(argsPassedToFromApiResponse_, RESULT);
        done();
      });
      stream.emit('reading');
    });

    it('should expose abort function', done => {
      GAX_STREAM.cancel = done;
      const stream = logging.getEntriesStream(OPTIONS) as AbortableDuplex;
      stream.emit('reading');
      setImmediate(() => {
        stream.abort();
      });
    });

    it('should not require an options object', () => {
      assert.doesNotThrow(() => {
        const stream = logging.getEntriesStream();
        stream.emit('reading');
      });
    });
  });

  describe('getLogs', () => {
    beforeEach(() => {
      (logging.auth.getProjectId as Function) = async () => {};
    });
    const OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd',
      },
    } as GetLogsRequest;

    it('should exec without options', async () => {
      logging.loggingService.listLogs = async (reqOpts: {}, gaxOpts: {}) => {
        assert.deepStrictEqual(gaxOpts, {autoPaginate: undefined});
        return [[]];
      };
      await logging.getLogs();
    });

    it('should call gax method', async () => {
      logging.loggingService.listLogs = async (reqOpts: {}, gaxOpts: {}) => {
        assert.deepStrictEqual(reqOpts, {
          parent: 'projects/' + logging.projectId,
          a: 'b',
          c: 'd',
        });

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd',
        });

        return [[]];
      };

      await logging.getLogs(OPTIONS);
    });

    describe('error', () => {
      it('should reject promise with error', () => {
        const error = new Error('Error.');
        logging.loggingService.listLogs = async () => {
          throw error;
        };
        logging
          .getLogs(OPTIONS)
          .then(noop, err => assert.strictEqual(err, error));
      });
    });

    describe('success', () => {
      const RESPONSE = ['log1'];

      beforeEach(() => {
        logging.loggingService.listLogs = async () => {
          return [RESPONSE];
        };
      });

      it('should resolve promise with Logs & API resp', async () => {
        const logInstance = {} as Log;
        logging.log = name => {
          assert.strictEqual(name, RESPONSE[0]);
          return logInstance;
        };
        const [logs] = await logging.getLogs(OPTIONS);
        assert.strictEqual(logs[0], logInstance);
      });
    });
  });

  describe('getLogsStream', () => {
    const OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd',
      },
    } as GetLogsRequest;

    let GAX_STREAM: AbortableDuplex;
    const RESPONSE = ['log1'];

    beforeEach(() => {
      GAX_STREAM = through();
      GAX_STREAM.push(RESPONSE[0]);
      logging.loggingService.listLogsStream = () => GAX_STREAM;
      (logging.auth.getProjectId as Function) = async () => {};
    });

    it('should make request once reading', done => {
      logging.loggingService.listLogsStream = (reqOpts: {}, gaxOpts: {}) => {
        assert.deepStrictEqual(reqOpts, {
          parent: 'projects/' + logging.projectId,
          a: 'b',
          c: 'd',
        });

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd',
        });

        setImmediate(done);

        return GAX_STREAM;
      };

      const stream = logging.getLogsStream(OPTIONS);
      stream.emit('reading');
    });

    it('should destroy request stream if gax fails', done => {
      const error = new Error('Error.');
      logging.loggingService.listLogsStream = () => {
        throw error;
      };
      const stream = logging.getLogsStream(OPTIONS);
      stream.emit('reading');
      stream.once('error', err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should destroy request stream if gaxStream catches error', done => {
      const error = new Error('Error.');
      const stream = logging.getLogsStream(OPTIONS);
      stream.emit('reading');
      stream.on('error', err => {
        assert.strictEqual(err, error);
        done();
      });
      setImmediate(() => {
        GAX_STREAM.emit('error', error);
      });
    });

    it('should convert results from request to Log', done => {
      const stream = logging.getLogsStream(OPTIONS);

      const logInstance = {} as Log;

      logging.log = (name: string) => {
        assert.strictEqual(name, RESPONSE[0]);
        return logInstance;
      };

      stream.on('data', log => {
        assert.strictEqual(log, logInstance);
        done();
      });

      stream.emit('reading');
    });

    it('should expose abort function', done => {
      GAX_STREAM.cancel = done;
      const stream = logging.getLogsStream(OPTIONS) as AbortableDuplex;
      stream.emit('reading');
      setImmediate(() => {
        stream.abort();
      });
    });
  });

  describe('getSinks', () => {
    beforeEach(() => {
      (logging.auth.getProjectId as Function) = async () => {};
    });
    const OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd',
      },
    } as GetSinksRequest;

    it('should exec without options', async () => {
      logging.configService.listSinks = async (reqOpts: {}, gaxOpts: {}) => {
        assert.deepStrictEqual(gaxOpts, {autoPaginate: undefined});
        return [[]];
      };
      await logging.getSinks();
    });

    it('should call gax method', async () => {
      logging.configService.listSinks = async (reqOpts: {}, gaxOpts: {}) => {
        assert.deepStrictEqual(reqOpts, {
          parent: 'projects/' + logging.projectId,
          a: 'b',
          c: 'd',
        });

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd',
        });

        return [[]];
      };

      await logging.getSinks(OPTIONS);
    });

    describe('error', () => {
      it('should reject promise with error', () => {
        const error = new Error('Error.');
        logging.configService.listSinks = async () => {
          throw error;
        };
        logging
          .getSinks(OPTIONS)
          .then(noop, err => assert.strictEqual(err, error));
      });
    });

    describe('success', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ARGS: any = [
        [
          {
            name: 'sink-name',
          },
        ],
        {},
      ];

      beforeEach(() => {
        logging.configService.listSinks = async () => {
          return ARGS;
        };
      });

      it('should resolve promise with Logs & API resp', async () => {
        const sinkInstance = {} as Sink;
        logging.sink = name => {
          assert.strictEqual(name, ARGS[0]![0].name);
          return sinkInstance;
        };
        const [sinks] = await logging.getSinks(OPTIONS);
        assert.strictEqual(sinks[0], sinkInstance);
        assert.strictEqual(sinks[0].metadata, ARGS[0][0].metadata);
      });
    });
  });

  describe('getSinksStream', () => {
    const OPTIONS = {
      a: 'b',
      c: 'd',
      gaxOptions: {
        a: 'b',
        c: 'd',
      },
    } as GetSinksRequest;

    let GAX_STREAM: AbortableDuplex;
    const RESULT = {
      name: 'sink-name',
    };

    beforeEach(() => {
      GAX_STREAM = through();
      GAX_STREAM.push(RESULT);
      logging.configService.listSinksStream = () => GAX_STREAM;
      (logging.auth.getProjectId as Function) = async () => {};
    });

    it('should make request once reading', done => {
      logging.configService.listSinksStream = (reqOpts: {}, gaxOpts: {}) => {
        assert.deepStrictEqual(reqOpts, {
          parent: 'projects/' + logging.projectId,
          a: 'b',
          c: 'd',
        });

        assert.deepStrictEqual(gaxOpts, {
          autoPaginate: undefined,
          a: 'b',
          c: 'd',
        });

        setImmediate(done);

        return GAX_STREAM;
      };

      const stream = logging.getSinksStream(OPTIONS);
      stream.emit('reading');
    });

    it('should destroy request stream if gax fails', done => {
      const error = new Error('Error.');
      logging.configService.listSinksStream = () => {
        throw error;
      };
      const stream = logging.getSinksStream(OPTIONS);
      stream.emit('reading');
      stream.once('error', err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should destroy request stream if gaxStream catches error', done => {
      const error = new Error('Error.');
      const stream = logging.getSinksStream(OPTIONS);
      stream.emit('reading');
      stream.on('error', err => {
        assert.strictEqual(err, error);
        done();
      });
      setImmediate(() => {
        GAX_STREAM.emit('error', error);
      });
    });

    it('should return if in snippet sandbox', done => {
      logging.setProjectId = async () => {
        return done(new Error('Should not have gotten project ID'));
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global as any).GCLOUD_SANDBOX_ENV = true;
      const stream = logging.getSinksStream(OPTIONS);
      stream.emit('reading');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (global as any).GCLOUD_SANDBOX_ENV;
      assert(stream instanceof require('stream'));
      done();
    });

    it('should convert results from request to Sink', done => {
      const stream = logging.getSinksStream(OPTIONS);

      const sinkInstance = {} as Sink;

      logging.sink = (name: string) => {
        assert.strictEqual(name, RESULT.name);
        return sinkInstance;
      };

      stream.on('data', sink => {
        assert.strictEqual(sink, sinkInstance);
        assert.strictEqual(sink.metadata, RESULT);
        done();
      });

      stream.emit('reading');
    });

    it('should expose abort function', done => {
      GAX_STREAM.cancel = done;
      const stream = logging.getSinksStream(OPTIONS) as AbortableDuplex;
      stream.emit('reading');
      setImmediate(() => {
        stream.abort();
      });
    });
  });

  describe('log', () => {
    const NAME = 'log-name';

    it('should return a Log object', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const log = logging.log(NAME) as any;
      assert(log instanceof FakeLog);
      assert.strictEqual(log.calledWith_[0], logging);
      assert.strictEqual(log.calledWith_[1], NAME);
    });
  });

  describe('logSync', () => {
    const NAME = 'log-name';

    it('should return a LogSync object', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const log = logging.logSync(NAME) as any;
      assert(log instanceof FakeLog);
      assert.strictEqual(log.calledWith_[0], logging);
      assert.strictEqual(log.calledWith_[1], NAME);
    });

    it('should pass useMessageField properly', () => {
      const log = logging.logSync(NAME, undefined, {
        useMessageField: false,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any;
      assert(log instanceof FakeLog);
      assert.strictEqual(log.calledWith_[0], logging);
      assert.strictEqual(log.calledWith_[1], NAME);
      assert.strictEqual(log.calledWith_[2], undefined);
      assert.strictEqual(log.calledWith_[3].useMessageField, false);
    });
  });

  describe('request', () => {
    const CONFIG = {
      client: 'client',
      method: 'method',
      reqOpts: {
        a: 'b',
        c: 'd',
      },
      gaxOpts: {},
    };

    const PROJECT_ID = 'project-id';

    beforeEach(() => {
      (logging.auth as {}) = {
        getProjectId: (callback: Function) => {
          callback(null, PROJECT_ID);
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (logging.api as any)[CONFIG.client] = {
        [CONFIG.method]: noop,
      };
    });

    describe('prepareGaxRequest', () => {
      it('should get the project ID', done => {
        (logging.auth.getProjectId as Function) = () => done();
        logging.request(CONFIG, assert.ifError);
      });

      it('should cache the project ID', done => {
        (logging.auth.getProjectId as Function) = () => {
          setImmediate(() => {
            assert.strictEqual(logging.projectId, PROJECT_ID);
            done();
          });
        };

        logging.request(CONFIG, assert.ifError);
      });

      it('should return error if getting project ID failed', done => {
        const error = new Error('Error.');

        (logging.auth.getProjectId as Function) = (callback: Function) => {
          callback(error);
        };

        logging.request(CONFIG, err => {
          assert.deepStrictEqual(err, error);
          done();
        });
      });

      it('should initiate and cache the client', () => {
        const fakeClient = {
          [CONFIG.method]: noop,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeV2 as any)[CONFIG.client] = class {
          constructor(options: {}) {
            assert.strictEqual(options, logging.options);
            return fakeClient;
          }
        };
        logging.api = {};
        logging.request(CONFIG, assert.ifError);
        assert.strictEqual(logging.api[CONFIG.client], fakeClient);
      });

      it('should use the cached client', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeV2 as any)[CONFIG.client] = () => {
          done(new Error('Should not re-instantiate a GAX client.'));
        };
        logging.request(CONFIG);
        done();
      });

      it('should replace the project ID token', done => {
        const replacedReqOpts = {};
        replaceProjectIdTokenOverride = (reqOpts: {}, projectId: string) => {
          assert.notStrictEqual(reqOpts, CONFIG.reqOpts);
          assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
          assert.strictEqual(projectId, PROJECT_ID);
          return replacedReqOpts;
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (logging.api as any)[CONFIG.client][CONFIG.method] = {
          bind(gaxClient: {}, reqOpts: {}) {
            assert.strictEqual(reqOpts, replacedReqOpts);
            setImmediate(done);
            return noop;
          },
        };

        logging.request(CONFIG, assert.ifError);
      });
    });

    describe('makeRequestCallback', () => {
      it('should return if in snippet sandbox', done => {
        (logging.auth.getProjectId as Function) = () => {
          done(new Error('Should not have gotten project ID.'));
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (global as any).GCLOUD_SANDBOX_ENV = true;
        const returnValue = logging.request(CONFIG, assert.ifError);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (global as any).GCLOUD_SANDBOX_ENV;

        assert.strictEqual(returnValue, undefined);
        done();
      });

      it('should prepare the request', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (logging.api as any)[CONFIG.client][CONFIG.method] = {
          bind(gaxClient: {}, reqOpts: {}, gaxOpts: {}) {
            assert.strictEqual(gaxClient, logging.api[CONFIG.client]);
            assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
            assert.strictEqual(gaxOpts, CONFIG.gaxOpts);
            setImmediate(done);
            return noop;
          },
        };
        logging.request(CONFIG, assert.ifError);
      });

      it('should execute callback with error', done => {
        const error = new Error('Error.');

        logging.api[CONFIG.client][CONFIG.method] = (...args: Array<{}>) => {
          const callback = args.pop() as Function;
          callback(error);
        };

        logging.request(CONFIG, err => {
          assert.deepStrictEqual(err, error);
          done();
        });
      });

      it('should execute the request function', () => {
        logging.api[CONFIG.client][CONFIG.method] = (
          done: boolean,
          ...args: Array<{}>
        ) => {
          const callback = args.pop() as Function;
          callback(null, done); // so it ends the test
        };

        logging.request(CONFIG, assert.ifError);
      });
    });

    describe('makeRequestStream', () => {
      let GAX_STREAM: AbortableDuplex;

      beforeEach(() => {
        GAX_STREAM = through();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (logging.api as any)[CONFIG.client][CONFIG.method] = {
          bind() {
            return () => GAX_STREAM;
          },
        };
      });

      it('should return if in snippet sandbox', done => {
        (logging.auth.getProjectId as Function) = () => {
          done(new Error('Should not have gotten project ID.'));
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (global as any).GCLOUD_SANDBOX_ENV = true;
        const returnValue = logging.request(CONFIG);
        returnValue.emit('reading');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (global as any).GCLOUD_SANDBOX_ENV;

        assert(returnValue instanceof require('stream'));
        done();
      });

      it('should expose an abort function', done => {
        GAX_STREAM.cancel = done;
        const requestStream = logging.request(CONFIG) as AbortableDuplex;
        requestStream.emit('reading');
        requestStream.abort();
      });

      it('should prepare the request once reading', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (logging.api as any)[CONFIG.client][CONFIG.method] = {
          bind(gaxClient: {}, reqOpts: {}, gaxOpts: {}) {
            assert.strictEqual(gaxClient, logging.api[CONFIG.client]);
            assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
            assert.strictEqual(gaxOpts, CONFIG.gaxOpts);
            setImmediate(done);
            return () => GAX_STREAM;
          },
        };

        const requestStream = logging.request(CONFIG);
        requestStream.emit('reading');
      });

      it('should destroy the stream with prepare error', done => {
        const error = new Error('Error.');

        (logging.auth.getProjectId as Function) = (callback: Function) => {
          callback(error);
        };

        const requestStream = logging.request(CONFIG);
        requestStream.emit('reading');

        requestStream.on('error', err => {
          assert.deepStrictEqual(err, error);
          done();
        });
      });

      it('should destroy the stream with GAX error', done => {
        const error = new Error('Error.');

        const requestStream = logging.request(CONFIG);
        requestStream.emit('reading');

        requestStream.on('error', err => {
          assert.deepStrictEqual(err, error);
          done();
        });

        GAX_STREAM.emit('error', error);
      });
    });
  });

  describe('sink', () => {
    const NAME = 'sink-name';

    it('should return a Log object', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sink = logging.sink(NAME) as any;
      assert(sink instanceof FakeSink);
      assert.strictEqual(sink.calledWith_[0], logging);
      assert.strictEqual(sink.calledWith_[1], NAME);
    });
  });

  describe('setAclForBucket_', () => {
    let CONFIG: CreateSinkRequest;

    let bucket: Bucket;

    beforeEach(() => {
      bucket = {
        name: 'bucket-name',
        acl: {
          owners: {
            addGroup: noop,
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      CONFIG = {
        destination: bucket,
      };
    });

    it('should add cloud-logs as an owner', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bucket.acl.owners as any).addGroup = async (entity: {}) => {
        assert.strictEqual(entity, 'cloud-logs@google.com');
      };

      await logging.setAclForBucket_(CONFIG);
    });

    describe('error', () => {
      const error = new Error('Error.');

      beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (bucket.acl.owners as any).addGroup = async () => {
          throw error;
        };
      });

      it('should return error', () => {
        logging
          .setAclForBucket_(CONFIG)
          .then(noop, err => assert.deepStrictEqual(err, error));
      });
    });

    describe('success', () => {
      beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (bucket.acl.owners as any).addGroup = async () => {};
      });

      it('should set string destination', async () => {
        const expectedDestination = 'storage.googleapis.com/' + bucket.name;

        await logging.setAclForBucket_(CONFIG);
        assert.strictEqual(CONFIG.destination, expectedDestination);
      });
    });
  });

  describe('setAclForDataset_', () => {
    let CONFIG: CreateSinkRequest;
    let dataset: Dataset;

    beforeEach(() => {
      dataset = {
        id: 'dataset-id',
        parent: {
          projectId: PROJECT_ID,
        },
      } as {} as Dataset;

      CONFIG = {
        destination: dataset,
      };
    });

    describe('metadata refresh', () => {
      describe('error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          dataset.getMetadata = async () => {
            throw error;
          };
        });

        it('should reject with error', () => {
          logging
            .setAclForDataset_(CONFIG)
            .then(noop, err => assert.deepStrictEqual(err, error));
        });
      });

      describe('success', () => {
        const apiResponse = {
          access: [{}, {}],
        };

        const originalAccess = [].slice.call(apiResponse.access);

        beforeEach(() => {
          (dataset.getMetadata as Function) = async () => {
            return [apiResponse, apiResponse];
          };
        });

        it('should set the correct metadata', async () => {
          const access = {
            role: 'WRITER',
            groupByEmail: 'cloud-logs@google.com',
          };

          const expectedAccess =
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ([] as any[]).slice.call(originalAccess).concat(access);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (dataset.setMetadata as Function) = async (metadata: any) => {
            assert.deepStrictEqual(apiResponse.access, originalAccess);
            assert.deepStrictEqual(metadata.access, expectedAccess);
          };

          await logging.setAclForDataset_(CONFIG);
        });

        describe('updating metadata error', () => {
          const error = new Error('Error.');

          beforeEach(() => {
            dataset.setMetadata = async () => {
              throw error;
            };
          });

          it('should reject with error', () => {
            logging
              .setAclForDataset_(CONFIG)
              .then(noop, err => assert.deepStrictEqual(err, error));
          });
        });

        describe('updating metadata success', () => {
          beforeEach(() => {
            (dataset.setMetadata as Function) = async () => {};
          });

          it('should set string destination', async () => {
            const expectedDestination = [
              'bigquery.googleapis.com',
              'projects',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (dataset.parent as any).projectId,
              'datasets',
              dataset.id,
            ].join('/');

            await logging.setAclForDataset_(CONFIG);
            assert.strictEqual(CONFIG.destination, expectedDestination);
          });
        });
      });
    });
  });

  describe('setAclForTopic_', () => {
    let CONFIG: CreateSinkRequest;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let topic: any;

    beforeEach(() => {
      topic = {
        name: 'topic-name',
        iam: {
          getPolicy: noop,
          setPolicy: noop,
        },
      };

      CONFIG = {
        destination: topic,
      };
    });

    describe('get policy', () => {
      describe('error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          topic.iam.getPolicy = async () => {
            throw error;
          };
        });

        it('should throw error', () => {
          logging
            .setAclForTopic_(CONFIG)
            .then(noop, err => assert.deepStrictEqual(err, error));
        });
      });

      describe('success', () => {
        const apiResponse = {
          bindings: [{}, {}],
        };

        const originalBindings = [].slice.call(apiResponse.bindings);

        beforeEach(() => {
          (topic.iam.getPolicy as Function) = async () => {
            return [apiResponse, apiResponse];
          };
        });

        it('should set the correct policy bindings', async () => {
          const binding = {
            role: 'roles/pubsub.publisher',
            members: ['serviceAccount:cloud-logs@system.gserviceaccount.com'],
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const expectedBindings = ([] as any[]).slice.call(originalBindings);
          expectedBindings.push(binding);

          (topic.iam.setPolicy as Function) = async (policy: Policy) => {
            assert.strictEqual(policy, apiResponse);
            assert.deepStrictEqual(policy.bindings, expectedBindings);
          };

          await logging.setAclForTopic_(CONFIG);
        });

        describe('updating policy error', () => {
          const error = new Error('Error.');

          beforeEach(() => {
            topic.iam.setPolicy = async () => {
              throw error;
            };
          });

          it('should throw error', () => {
            logging
              .setAclForTopic_(CONFIG)
              .then(noop, err => assert.deepStrictEqual(err, error));
          });
        });

        describe('updating policy success', () => {
          beforeEach(() => {
            (topic.iam.setPolicy as Function) = async () => {};
          });

          it('should set string destination', async () => {
            const expectedDestination = 'pubsub.googleapis.com/' + topic.name;
            await logging.setAclForTopic_(CONFIG);
            assert.strictEqual(CONFIG.destination, expectedDestination);
          });
        });
      });
    });
  });

  describe('setProjectId', () => {
    it('should update project id in case of default placeholder', async () => {
      logging = new Logging({projectId: '{{projectId}}'});
      logging.auth.getProjectId = async () => {
        return PROJECT_ID;
      };
      await logging.setProjectId({});
      assert.strictEqual(logging.projectId, PROJECT_ID);
    });
  });

  describe('setDetectedResource', () => {
    it('should update detected resource if none', async () => {
      logging = new Logging();
      sinon.stub(metadata, 'getDefaultResource').resolves({type: 'bar'});
      await logging.setDetectedResource();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      assert.strictEqual((logging.detectedResource as any).type, 'bar');
      sinon.restore();
    });
  });
});
