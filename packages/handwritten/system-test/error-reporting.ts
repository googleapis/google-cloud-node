/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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

import * as assert from 'assert';
import * as is from 'is';
import * as nock from 'nock';

import {ErrorReporting} from '../src';
import {ErrorMessage} from '../src/classes/error-message';
import {RequestHandler} from '../src/google-apis/auth-client';
import {createLogger} from '../src/logger';
import {FakeConfiguration as Configuration} from '../test/fixtures/configuration';
import {deepStrictEqual} from '../test/util';
import {ErrorGroupStats, ErrorsApiTransport} from '../utils/errors-api-transport';

import pick = require('lodash.pick');
import omitBy = require('lodash.omitby');
import * as request from 'request';
import * as uuid from 'uuid';
import * as util from 'util';
import * as path from 'path';

const ERR_TOKEN = '_@google_STACKDRIVER_INTEGRATION_TEST_ERROR__';
const TIMEOUT = 120000;

const envKeys = [
  'GOOGLE_APPLICATION_CREDENTIALS',
  'GCLOUD_PROJECT',
  'NODE_ENV',
];

class InstancedEnv {
  injectedEnv: {[key: string]: string|undefined};
  _originalEnv: Partial<Pick<{[key: string]: string | undefined}, string>>;
  apiKey!: string;
  projectId!: string;

  constructor(injectedEnv: {[key: string]: string|undefined}) {
    Object.assign(this, injectedEnv);
    this.injectedEnv = injectedEnv;
    this._originalEnv = this._captureProcessProperties();
  }

  _captureProcessProperties() {
    return omitBy(pick(process.env, envKeys), value => !is.string(value));
  }

  sterilizeProcess() {
    envKeys.forEach(key => delete process.env[key]);
    return this;
  }

  setProjectId() {
    Object.assign(process.env, {
      GCLOUD_PROJECT: this.injectedEnv.projectId,
    });
    return this;
  }

  setProjectNumber() {
    Object.assign(process.env, {
      GCLOUD_PROJECT: this.injectedEnv.projectNumber,
    });
    return this;
  }

  setKeyFilename() {
    Object.assign(process.env, {
      GOOGLE_APPLICATION_CREDENTIALS: this.injectedEnv.keyFilename,
    });
    return this;
  }

  setProduction() {
    Object.assign(process.env, {
      NODE_ENV: 'production',
    });
    return this;
  }

  restoreProcessToOriginalState() {
    Object.assign(process.env, this._originalEnv);
    return this;
  }

  injected() {
    return Object.assign({}, this.injectedEnv);
  }
}

// eslint-disable-next-line node/no-missing-require
const env = new InstancedEnv({
  projectId: process.env.GCLOUD_TESTS_PROJECT_ID,
  keyFilename: process.env.GCLOUD_TESTS_KEY,
  apiKey: process.env.GCLOUD_TESTS_API_KEY,
  projectNumber: process.env.GCLOUD_TESTS_PROJECT_NUMBER
});

function shouldRun() {
  let shouldRun = true;
  if (!is.string(env.injected().projectId)) {
    console.log('The project id (projectId) was not set in the env');
    shouldRun = false;
  }

  if (!is.string(env.injected().apiKey)) {
    console.log('The api key (apiKey) was not set as an env variable');
    shouldRun = false;
  }

  if (!is.string(env.injected().projectNumber)) {
    console.log('The project number (projectNumber) was not set in the env');
    shouldRun = false;
  }

  if (!is.string(env.injected().keyFilename)) {
    console.log('The key filename (keyFilename) was not set in the env');
    shouldRun = false;
  }

  return shouldRun;
}

if (!shouldRun()) {
  console.log('Skipping error-reporting system tests');
  // eslint-disable-next-line no-process-exit
  process.exit(1);
}

function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

describe('Request/Response lifecycle mocking', () => {
  const sampleError = new Error(ERR_TOKEN);
  const errorMessage = new ErrorMessage().setMessage(sampleError.message);
  let fakeService: {reply: Function; query: Function;};
  let client: RequestHandler;
  let logger;
  before(() => {
    env.sterilizeProcess();
  });

  beforeEach(() => {
    env.setProjectId().setKeyFilename().setProduction();
    fakeService =
        nock(
            'https://clouderrorreporting.googleapis.com/v1beta1/projects/' +
            process.env.GCLOUD_PROJECT)
            .persist()
            .post('/events:report?');
    logger = createLogger({logLevel: 5});
    client = new RequestHandler(
        new Configuration({ignoreEnvironmentCheck: true}, logger), logger);
  });

  afterEach(() => {
    env.sterilizeProcess();
    nock.cleanAll();
  });

  after(() => {
    env.restoreProcessToOriginalState();
  });

  it('Should fail when receiving non-retryable errors', function(this, done) {
    this.timeout(5000);
    client.sendError({} as ErrorMessage, (err, response) => {
      assert(err instanceof Error);
      assert.strictEqual(
          err!.message.toLowerCase(), 'message cannot be empty.');
      assert(is.object(response));
      assert.strictEqual(response!.statusCode, 400);
      done();
    });
  });

  it('Should retry when receiving retryable errors', function(this, done) {
    this.timeout(25000);
    let tries = 0;
    const intendedTries = 4;
    fakeService.reply(429, () => {
      tries += 1;
      console.log('Mock Server Received Request:', tries + '/' + intendedTries);
      return {error: 'Please try again later'};
    });
    client.sendError(errorMessage, () => {
      assert.strictEqual(tries, intendedTries);
      done();
    });
  });

  it('Should provide the key as a query string on outgoing requests when ' +
         'using an API key',
     done => {
       env.sterilizeProcess().setProjectId().setProduction();
       const key = env.apiKey;
       const logger = createLogger({logLevel: 5});
       const client = new RequestHandler(
           new Configuration({key, ignoreEnvironmentCheck: true}, logger),
           logger);
       fakeService.query({key}).reply(200, (uri: string) => {
         assert(uri.indexOf('key=' + key) > -1);
         return {};
       });
       client.sendError(errorMessage, () => {
         done();
       });
     });

  it('Should still execute the request with a callback-less invocation',
     done => {
       fakeService.reply(200, () => {
         done();
       });
       client.sendError(errorMessage);
     });
});

describe('Client creation', () => {
  const sampleError = new Error(ERR_TOKEN);
  const errorMessage = new ErrorMessage().setMessage(sampleError.stack!);
  after(() => {
    env.sterilizeProcess();
  });

  it('Should not throw on initialization when using only project id as a ' +
         'runtime argument',
     function(this, done) {
       env.sterilizeProcess().setKeyFilename();
       const logger = createLogger({logLevel: 5});
       const cfg = new Configuration(
           {
             projectId: env.injected().projectId,
             ignoreEnvironmentCheck: true,
           },
           logger);
       this.timeout(10000);
       assert.doesNotThrow(() => {
         new RequestHandler(cfg, logger)
             .sendError(errorMessage, (err, response, body) => {
               assert.strictEqual(err, null);
               assert.strictEqual(response!.statusCode, 200);
               assert(is.object(body) && is.empty(body));
               done();
             });
       });
     });

  it('Should not throw on initialization when using only project id as an ' +
         'env variable',
     function(this, done) {
       env.sterilizeProcess().setProjectId().setKeyFilename();
       const logger = createLogger({logLevel: 5});
       const cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
       this.timeout(10000);
       assert.doesNotThrow(() => {
         new RequestHandler(cfg, logger)
             .sendError(errorMessage, (err, response, body) => {
               assert.strictEqual(err, null);
               assert.strictEqual(response!.statusCode, 200);
               assert(is.object(body) && is.empty(body));
               done();
             });
       });
     });

  it('Should not throw on initialization when using only project number as ' +
         'a runtime argument',
     function(this, done) {
       env.sterilizeProcess().setKeyFilename();
       const logger = createLogger({logLevel: 5});
       const cfg = new Configuration(
           {
             projectId: '' + Number(env.injected().projectNumber),
             ignoreEnvironmentCheck: true,
           },
           logger);
       this.timeout(10000);
       assert.doesNotThrow(() => {
         new RequestHandler(cfg, logger)
             .sendError(errorMessage, (err, response, body) => {
               assert.strictEqual(err, null);
               assert.strictEqual(response!.statusCode, 200);
               assert(is.object(body) && is.empty(body));
               done();
             });
       });
     });

  it('Should not throw on initialization when using only project number as ' +
         'an env variable',
     function(this, done) {
       env.sterilizeProcess().setKeyFilename().setProjectNumber();
       const logger = createLogger({logLevel: 5});
       const cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
       this.timeout(10000);
       assert.doesNotThrow(() => {
         new RequestHandler(cfg, logger)
             .sendError(errorMessage, (err, response, body) => {
               assert.strictEqual(err, null);
               assert.strictEqual(response!.statusCode, 200);
               assert(is.object(body) && is.empty(body));
               done();
             });
       });
     });
});

describe('Expected Behavior', () => {
  const ERROR_STRING = [
    'Stackdriver error reporting client has not been configured to send',
    'errors, please check the NODE_ENV environment variable and make',
    'sure it is set to "production" or set the ignoreEnvironmentCheck',
    'property to true in the runtime configuration object',
  ].join(' ');

  const er = new Error(ERR_TOKEN);
  const em = new ErrorMessage().setMessage(er.stack!);

  after(() => {
    env.sterilizeProcess();
  });

  it('Should callback with an error with a configuration to not report errors',
     done => {
       env.sterilizeProcess().setKeyFilename().setProjectId();
       process.env.NODE_ENV = 'null';
       const logger = createLogger({logLevel: 5});
       const client =
           new RequestHandler(new Configuration(undefined, logger), logger);
       client.sendError({} as ErrorMessage, (err, response) => {
         assert(err instanceof Error);
         assert.strictEqual(err!.message, ERROR_STRING);
         assert.strictEqual(response, null);
         done();
       });
     });

  it('Should succeed in its request given a valid project id', done => {
    env.sterilizeProcess().setKeyFilename();
    const logger = createLogger({logLevel: 5});
    const cfg = new Configuration(
        {
          projectId: env.injected().projectId,
          ignoreEnvironmentCheck: true,
        },
        logger);
    const client = new RequestHandler(cfg, logger);

    client.sendError(em, (err, response, body) => {
      assert.strictEqual(err, null);
      assert(is.object(body));
      assert(is.empty(body));
      assert.strictEqual(response!.statusCode, 200);
      done();
    });
  });

  it('Should succeed in its request given a valid project number', done => {
    env.sterilizeProcess().setKeyFilename();
    const logger = createLogger({logLevel: 5});
    const cfg = new Configuration(
        {
          projectId: '' + Number(env.injected().projectNumber),
          ignoreEnvironmentCheck: true,
        },
        logger);
    const client = new RequestHandler(cfg, logger);
    client.sendError(em, (err, response, body) => {
      assert.strictEqual(err, null);
      assert(is.object(body));
      assert(is.empty(body));
      assert.strictEqual(response!.statusCode, 200);
      done();
    });
  });
});

describe('Error Reporting API', () => {
  [{
    name: 'when a valid API key is given',
    getKey: () => env.apiKey,
    message: 'Message cannot be empty.',
    statusCode: 400
  },
   {
     name: 'when an empty API key is given',
     getKey: () => '',
     message: 'The request is missing a valid API key.',
     // TODO: Determine if 403 is the correct expected status code.
     //       Prior to the code migration, the expected status code
     //       was 400.  However, the service is now reporting 403.
     statusCode: 403
   },
   {
     name: 'when an invalid API key is given',
     getKey: () => env.apiKey.slice(1) + env.apiKey[0],
     message: 'API key not valid. Please pass a valid API key.',
     statusCode: 400
   },
  ].forEach(testCase => {
    it(`should return an expected message ${testCase.name}`,
       function(this, done) {
         this.timeout(60000);
         const API = 'https://clouderrorreporting.googleapis.com/v1beta1';
         const key = testCase.getKey();
         request.post(
             {
               url: `${API}/projects/${env.projectId}/events:report?key=${key}`,
               json: {},
             },
             (err, response, body) => {
               assert.ok(!err && body.error);
               assert.strictEqual(response.statusCode, testCase.statusCode);
               assert.strictEqual(body.error.message, testCase.message);
               done();
             });
       });
  });
});

describe('error-reporting', () => {
  const SRC_ROOT = path.join(__dirname, '..', 'src');
  const UUID = uuid.v4();
  const BASE_NAME = 'error-reporting-system-test';
  function buildName(suffix: string) {
    return [UUID, BASE_NAME, suffix].join('_');
  }

  const SERVICE = buildName('service-name');
  const VERSION = buildName('service-version');

  let errors: ErrorReporting;
  let transport: ErrorsApiTransport;
  let oldLogger: (text: string) => void;
  let logOutput = '';
  before(async () => {
    // This test assumes that only the error-reporting library will be
    // adding listeners to the 'unhandledRejection' event.  Thus we need to
    // make sure that no listeners for that event exist.  If this check
    // fails, then the reinitialize() method below will need to updated to
    // more carefully reinitialize the error-reporting library without
    // interfering with existing listeners of the 'unhandledRejection' event.
    assert.strictEqual(process.listenerCount('unhandledRejection'), 0);
    oldLogger = console.error;
    console.error = function(this) {
      const text = util.format.apply(null, arguments);
      oldLogger(text);
      logOutput += text;
    };
    reinitialize();
    await transport.deleteAllEvents();
  });

  function reinitialize(extraConfig?: {}) {
    process.removeAllListeners('unhandledRejection');
    const initConfiguration = Object.assign(
        {
          ignoreEnvironmentCheck: true,
          serviceContext: {
            service: SERVICE,
            version: VERSION,
          },
          projectId: env.projectId,
          keyFilename: process.env.GCLOUD_TESTS_KEY
        },
        extraConfig || {});
    errors = new ErrorReporting(initConfiguration);
    const logger = createLogger(initConfiguration);
    const configuration = new Configuration(initConfiguration, logger);
    transport = new ErrorsApiTransport(configuration, logger);
  }

  after(async () => {
    if (transport) {
      await transport.deleteAllEvents();
    }
  });

  afterEach(() => {
    logOutput = '';
  });

  async function verifyAllGroups(
      messageTest: (message: string) => void, maxCount: number,
      timeout: number) {
    const start = Date.now();
    let groups: ErrorGroupStats[] = [];
    while (groups.length < maxCount && (Date.now() - start) <= timeout) {
      const allGroups = await transport.getAllGroups();
      assert.ok(allGroups, 'Failed to get groups from the Error Reporting API');

      const filteredGroups = allGroups!.filter(errItem => {
        return (
            errItem && errItem.representative &&
            errItem.representative.serviceContext &&
            errItem.representative.serviceContext.service === SERVICE &&
            errItem.representative.serviceContext.version === VERSION &&
            messageTest(errItem.representative.message));
      });
      groups = groups.concat(filteredGroups);
      await sleep(1000);
    }

    return groups;
  }

  async function verifyServerResponse(
      messageTest: (message: string) => void, maxCount: number,
      timeout: number) {
    const matchedErrors = await verifyAllGroups(messageTest, maxCount, timeout);
    assert.strictEqual(
        matchedErrors.length, maxCount,
        `Expected to find ${maxCount} error items but found ${
            matchedErrors.length}: ${JSON.stringify(matchedErrors, null, 2)}`);
    const errItem = matchedErrors[0];
    assert.ok(
        errItem,
        'Retrieved an error item from the Error Reporting API but it is falsy.');
    const rep = errItem.representative;
    assert.ok(rep, 'Expected the error item to have representative');
    // Ensure the stack trace in the message does not contain any frames
    // specific to the error-reporting library.
    assert.strictEqual(
        rep.message.indexOf(SRC_ROOT), -1,
        `Expected the error item's representative's message to start with ${
            SRC_ROOT} but found '${rep.message}'`);
    // Ensure the stack trace in the mssage contains the frame corresponding
    // to the 'expectedTopOfStack' function because that is the name of
    // function used in this file that is the topmost function in the call
    // stack that is not internal to the error-reporting library.
    // This ensures that only the frames specific to the
    // error-reporting library are removed from the stack trace.
    const expectedTopOfStack = 'expectedTopOfStack';
    assert.notStrictEqual(
        rep.message.indexOf(expectedTopOfStack), -1,
        `Expected the error item's representative's message to not contain ${
            expectedTopOfStack} but found '${rep.message}'`);
    const context = rep.serviceContext;
    assert.ok(
        context, `Expected the error item's representative to have a context`);
    assert.strictEqual(context.service, SERVICE);
    assert.strictEqual(context.version, VERSION);
  }

  // the `errOb` argument can be anything, including `null` and `undefined`
  async function verifyReporting(
      errOb: any,  // tslint:disable-line:no-any
      messageTest: (message: string) => void, maxCount: number,
      timeout: number) {
    function expectedTopOfStack() {
      return new Promise((resolve, reject) => {
        errors.report(
            errOb, undefined, undefined, async (err, response, body) => {
              try {
                assert.ifError(err);
                assert(is.object(response));
                deepStrictEqual(body, {});
                await verifyServerResponse(messageTest, maxCount, timeout);
                resolve();
              } catch (e) {
                reject(e);
              }
            });
      });
    }
    await expectedTopOfStack();
  }

  // For each test below, after an error is reported, the test waits
  // TIMEOUT ms before verifying the error has been reported to ensure
  // the system had enough time to receive the error report and process it.
  // As such, each test is set to fail due to a timeout only if sufficiently
  // more than TIMEOUT ms has elapsed to avoid test fragility.

  it('Should correctly publish an error that is an Error object',
     async function verifyErrors() {
       this.timeout(TIMEOUT * 2);
       const errorId = buildName('with-error-constructor');
       function expectedTopOfStack() {
         return new Error(errorId);
       }
       const errOb = expectedTopOfStack();
       await verifyReporting(errOb, message => {
         return message.startsWith('Error: ' + errorId + '\n');
       }, 1, TIMEOUT);
     });

  it('Should correctly publish an error that is a string',
     async function(this) {
       this.timeout(TIMEOUT * 2);
       const errorId = buildName('with-string');
       await verifyReporting(errorId, message => {
         return message.startsWith(errorId + '\n');
       }, 1, TIMEOUT);
     });

  it('Should correctly publish an error that is undefined',
     async function(this) {
       this.timeout(TIMEOUT * 2);
       await verifyReporting(undefined, message => {
         return message.startsWith('undefined\n');
       }, 1, TIMEOUT);
     });

  it('Should correctly publish an error that is null', async function(this) {
    this.timeout(TIMEOUT * 2);
    await verifyReporting(null, message => {
      return message.startsWith('null\n');
    }, 1, TIMEOUT);
  });

  it('Should correctly publish an error that is a plain object',
     async function(this) {
       this.timeout(TIMEOUT * 2);
       await verifyReporting({someKey: 'someValue'}, message => {
         return message.startsWith('[object Object]\n');
       }, 1, TIMEOUT);
     });

  it('Should correctly publish an error that is a number',
     async function(this) {
       this.timeout(TIMEOUT * 2);
       const num = new Date().getTime();
       await verifyReporting(num, message => {
         return message.startsWith('' + num + '\n');
       }, 1, TIMEOUT);
     });

  it('Should correctly publish an error that is of an unknown type',
     async function(this) {
       this.timeout(TIMEOUT * 2);
       const bool = true;
       await verifyReporting(bool, message => {
         return message.startsWith('true\n');
       }, 1, TIMEOUT);
     });

  it('Should correctly publish errors using an error builder',
     async function(this) {
       this.timeout(TIMEOUT * 2);
       const errorId = buildName('with-error-builder');
       // Use an IIFE with the name `definitionSiteFunction` to use later to
       // ensure the stack trace of the point where the error message was
       // constructed is used. Use an IIFE with the name `expectedTopOfStack` so
       // that the test can verify that the stack trace used does not contain
       // any frames specific to the error-reporting library.
       function definitionSiteFunction() {
         function expectedTopOfStack() {
           return errors.event().setMessage(errorId);
         }
         return expectedTopOfStack();
       }
       const errOb = definitionSiteFunction();
       async function callingSiteFunction() {
         await verifyReporting(errOb, message => {
           // Verify that the stack trace of the constructed error
           // uses the stack trace at the point where the error was constructed
           // and not the stack trace at the point where the `report` method
           // was called.
           return (
               message.startsWith(errorId) &&
               message.indexOf('callingSiteFunction') === -1 &&
               message.indexOf('definitionSiteFunction') !== -1);
         }, 1, TIMEOUT);
       }
       await callingSiteFunction();
     });

  it('Should report unhandledRejections if enabled', async function(this) {
    this.timeout(TIMEOUT * 4);
    reinitialize({reportUnhandledRejections: true});
    const rejectValue = buildName('promise-rejection');
    function expectedTopOfStack() {
      // An Error is used for the rejection value so that it's stack
      // contains the stack trace at the point the rejection occured and is
      // rejected within a function named `expectedTopOfStack` so that the
      // test can verify that the collected stack is correct.
      Promise.reject(new Error(rejectValue));
    }
    expectedTopOfStack();
    const rejectText = 'Error: ' + rejectValue;
    await new Promise((resolve, reject) => {
      setImmediate(async () => {
        try {
          const expected = 'UnhandledPromiseRejectionWarning: Unhandled ' +
              'promise rejection: ' + rejectText +
              '.  This rejection has been reported to the ' +
              'Google Cloud Platform error-reporting console.';
          assert.notStrictEqual(logOutput.indexOf(expected), -1);
          await verifyServerResponse(message => {
            return message.startsWith(rejectText);
          }, 1, TIMEOUT);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
  });

  it('Should not report unhandledRejections if disabled', async function(this) {
    this.timeout(TIMEOUT * 2);
    reinitialize({reportUnhandledRejections: false});
    const rejectValue = buildName('promise-rejection');
    function expectedTopOfStack() {
      Promise.reject(rejectValue);
    }
    expectedTopOfStack();
    await new Promise((resolve, reject) => {
      setImmediate(async () => {
        try {
          const notExpected = 'UnhandledPromiseRejectionWarning: Unhandled ' +
              'promise rejection: ' + rejectValue +
              '.  This rejection has been reported to the error-reporting console.';
          assert.strictEqual(logOutput.indexOf(notExpected), -1);
          // Get all groups that that start with the rejection value and hence
          // all of the groups corresponding to the above rejection (Since the
          // buildName() creates a string unique enough to single out only the
          // above rejection.) and verify that there are no such groups
          // reported.
          const matchedErrors = await verifyAllGroups(message => {
            return message.startsWith(rejectValue);
          }, 1, TIMEOUT);
          assert.strictEqual(matchedErrors.length, 0);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
  });
});
