// Copyright 2016 Google LLC
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

import * as is from 'is';
import has = require('lodash.has');
import * as assert from 'assert';
import {describe, it, beforeEach, before, afterEach} from 'mocha';
import {makeHapiPlugin as hapiInterface} from '../../../src/interfaces/hapi';
import {ErrorMessage} from '../../../src/classes/error-message';
import {Fuzzer} from '../../../utils/fuzzer';
import {EventEmitter} from 'events';
import * as config from '../../../src/configuration';
import {RequestHandler} from '../../../src/google-apis/auth-client';
import {FakeConfiguration as Configuration} from '../../fixtures/configuration';
import * as http from 'http';
import * as hapi from '@hapi/hapi';
import * as boom from 'boom';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../../../package.json');

interface HapiPlugin {
  register: ((server: {}, options: {}, next: Function) => void) & {
    attributes?: {name: string; version: string};
  };
}

describe('Hapi interface', () => {
  describe('Fuzzing the setup handler', () => {
    it('Should not throw when fuzzed with invalid types', () => {
      const f = new Fuzzer();
      assert.doesNotThrow(() => {
        f.fuzzFunctionForTypes(hapiInterface, ['object', 'object']);
        return;
      });
    });
  });
  describe('Providing valid input to the setup handler', () => {
    const givenConfig = {
      getVersion() {
        return '1';
      },
    };
    let plugin: HapiPlugin;
    beforeEach(() => {
      plugin = hapiInterface(
        null!,
        (givenConfig as {}) as config.Configuration
      );
    });
    it('should have plain object as plugin', () => {
      assert(is.object(plugin));
    });
    it('plugin should have a register function property', () => {
      assert(has(plugin, 'register') && is.function(plugin.register));
    });
    it("the plugin's register property should have an attributes property", () => {
      assert(
        has(plugin.register, 'attributes') &&
          is.object(plugin.register.attributes)
      );
    });
    it("the plugin's attribute property should have a name property", () => {
      assert(has(plugin.register.attributes, 'name'));
      assert.strictEqual(
        plugin.register!.attributes!.name,
        '@google-cloud/error-reporting'
      );
    });
    it("the plugin's attribute property should have a version property", () => {
      assert(has(plugin.register.attributes, 'version'));
    });
  });
  describe('hapiRegisterFunction behaviour', () => {
    let fakeServer: EventEmitter;
    beforeEach(() => {
      fakeServer = new EventEmitter();
    });
    it('Should call fn when the request-error event is emitted', () => {
      const fakeClient = ({
        sendError(errMsg: ErrorMessage) {
          assert(
            errMsg instanceof ErrorMessage,
            'should be an instance of Error message'
          );
        },
      } as {}) as RequestHandler;
      const plugin = hapiInterface(fakeClient, ({
        lacksCredentials() {
          return false;
        },
        getVersion() {
          return '1';
        },
        getServiceContext() {
          return {service: 'node'};
        },
      } as {}) as config.Configuration);
      plugin.register(fakeServer, null!, null!);
      fakeServer.emit('request-error');
    });
  });
  describe('Behaviour around the request/response lifecycle', () => {
    const EVENT = 'onPreResponse';
    const fakeClient = ({sendError() {}} as {}) as RequestHandler;
    let fakeServer: EventEmitter & {ext?: Function},
      config: Configuration & {lacksCredentials?: () => boolean},
      plugin: HapiPlugin;
    before(() => {
      config = new Configuration({
        projectId: 'xyz',
        serviceContext: {
          service: 'x',
          version: '1.x',
        },
      });
      config.lacksCredentials = () => {
        return false;
      };
      plugin = hapiInterface(fakeClient, config);
    });
    beforeEach(() => {
      fakeServer = new EventEmitter();
      fakeServer.ext = fakeServer.on;
    });
    afterEach(() => {
      fakeServer.removeAllListeners();
    });
    it('Should call continue when a boom is emitted if reply is an object', done => {
      plugin.register(fakeServer, null!, () => {});
      fakeServer.emit(
        EVENT,
        {response: new boom('message', {statusCode: 427})},
        {
          continue() {
            // The continue function should be called
            done();
          },
        }
      );
    });
    it('Should call continue when a boom is emitted if reply is a function', done => {
      // Manually testing has shown that in actual usage the `reply` object
      // provided to listeners of the `onPreResponse` event can be a
      // function that has a `continue` property that is a function. If
      // `reply.continue()` is not invoked in this situation, the Hapi app
      // will become unresponsive.
      plugin.register(fakeServer, null!, () => {});
      const reply: Function & {continue?: Function} = () => {};
      reply.continue = () => {
        // The continue function should be called
        done();
      };
      fakeServer.emit(
        EVENT,
        {response: new boom('message', {statusCode: 427})},
        reply
      );
    });
    it('Should call sendError when a boom is received', done => {
      const fakeClient = ({
        sendError(err: ErrorMessage) {
          assert(err instanceof ErrorMessage);
          done();
        },
      } as {}) as RequestHandler;
      const plugin = hapiInterface(fakeClient, config);
      plugin.register(fakeServer, null!, () => {});
      fakeServer.emit('onPreResponse', {
        response: new boom('message', {statusCode: 427}),
      });
    });
    it('Should call next when completing a request', done => {
      plugin.register(fakeServer, null!, () => {
        // The next function should be called
        done();
      });
      fakeServer.emit(
        EVENT,
        {response: new boom('message', {statusCode: 427})},
        {continue() {}}
      );
    });
  });
  describe('Hapi17', () => {
    const errorsSent: ErrorMessage[] = [];
    // the only method in the client that should be used is `sendError`
    const fakeClient = ({
      sendError: (
        errorMessage: ErrorMessage,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        userCb?: (
          err: Error | null,
          response: http.ServerResponse | null,
          body: {}
        ) => void
      ) => {
        errorsSent.push(errorMessage);
      },
    } as {}) as RequestHandler;

    // the configuration should be not be needed to send errors correctly
    const plugin = hapiInterface(fakeClient, {} as Configuration);

    afterEach(() => {
      errorsSent.length = 0;
    });

    it('Plugin should have name and version properties', () => {
      assert.strictEqual(plugin.name, packageJson.name);
      assert.strictEqual(plugin.version, packageJson.version);
    });

    it("Should record 'log' events correctly", () => {
      const fakeServer = {events: new EventEmitter()};

      // emulate how the hapi server would register itself
      plugin.register(fakeServer, {});

      // emulate the hapi server emitting a log event
      const testError = new Error('Error emitted through a log event');

      // this event should not be recorded
      fakeServer.events.emit('log', {error: testError, channel: 'internal'});

      // this event should be recorded
      fakeServer.events.emit('log', {error: testError, channel: 'app'});

      assert.strictEqual(errorsSent.length, 1);
      const errorMessage = errorsSent[0];

      // note: the error's stack contains the error message
      assert.strictEqual(errorMessage.message, testError.stack);
    });

    it("Should record 'request' events correctly", () => {
      const fakeServer = {events: new EventEmitter()};

      // emulate how the hapi server would register itself
      plugin.register(fakeServer, {});

      // emulate the hapi server emitting a request event
      // a cast to hapi.Request is being done since only the listed
      // properties are the properties that are being tested.  In
      // addition other properties of hapi.Request should be needed
      // to properly send the error.
      const fakeRequest = ({
        method: 'custom-method',
        url: 'custom-url',
        headers: {
          'user-agent': 'custom-user-agent',
          referrer: 'custom-referrer',
          'x-forwarded-for': 'some-remote-address',
        },
        response: {statusCode: 42},
      } as {}) as hapi.Request;

      const testError = new Error('Error emitted through a request event');

      // this event should not be recorded
      fakeServer.events.emit('request', fakeRequest, {
        error: testError,
        channel: 'internal',
      });

      // this event should be recorded
      fakeServer.events.emit('request', fakeRequest, {
        error: testError,
        channel: 'error',
      });

      assert.strictEqual(errorsSent.length, 1);
      const errorMessage = errorsSent[0];

      // note: the error's stack contains the error message
      assert.strictEqual(errorMessage.message, testError.stack);
      assert.strictEqual(
        errorMessage.context.httpRequest.method,
        'custom-method'
      );
      assert.strictEqual(errorMessage.context.httpRequest.url, 'custom-url');
      assert.strictEqual(
        errorMessage.context.httpRequest.userAgent,
        'custom-user-agent'
      );
      assert.strictEqual(
        errorMessage.context.httpRequest.referrer,
        'custom-referrer'
      );
      assert.strictEqual(
        errorMessage.context.httpRequest.remoteIp,
        'some-remote-address'
      );
      assert.strictEqual(
        errorMessage.context.httpRequest.responseStatusCode,
        42
      );
    });
  });
});
