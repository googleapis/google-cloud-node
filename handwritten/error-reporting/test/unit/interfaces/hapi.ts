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

import has = require('lodash.has');
import * as is from 'is';
const isFunction = (is as {} as {fn: Function}).fn;
const isObject = is.object;
import * as assert from 'assert';
import {makeHapiPlugin as hapiInterface} from '../../../src/interfaces/hapi';
import {ErrorMessage} from '../../../src/classes/error-message';
import {Fuzzer} from '../../../utils/fuzzer';
import {EventEmitter} from 'events';
import * as config from '../../../src/configuration';
import {RequestHandler} from '../../../src/google-apis/auth-client';
import {FakeConfiguration as Configuration} from '../../fixtures/configuration';

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
    let plugin;
    beforeEach(() => {
      plugin = hapiInterface(null!, givenConfig as {} as config.Configuration);
    });
    it('should have plain object as plugin', () => {
      assert(isObject(plugin));
    });
    it('plugin should have a register function property', () => {
      assert(has(plugin, 'register') && isFunction(plugin.register));
    });
    it('the plugin\'s register property should have an attributes property',
       () => {
         assert(
             has(plugin.register, 'attributes') &&
             isObject(plugin.register.attributes));
       });
    it('the plugin\'s attribute property should have a name property', () => {
      assert(has(plugin.register.attributes, 'name'));
      assert.strictEqual(
          plugin.register.attributes.name, '@google-cloud/error-reporting');
    });
    it('the plugin\'s attribute property should have a version property',
       () => {
         assert(has(plugin.register.attributes, 'version'));
       });
  });
  describe('hapiRegisterFunction behaviour', () => {
    let fakeServer;
    beforeEach(() => {
      fakeServer = new EventEmitter();
    });
    it('Should call fn when the request-error event is emitted', () => {
      const fakeClient = {
        sendError(errMsg) {
          assert(
              errMsg instanceof ErrorMessage,
              'should be an instance of Error message');
        },
      } as {} as RequestHandler;
      const plugin = hapiInterface(fakeClient, {
        lacksCredentials() {
          return false;
        },
        getVersion() {
          return '1';
        },
        getServiceContext() {
          return {service: 'node'};
        },
      } as {} as config.Configuration);
      plugin.register(fakeServer, null!, null!);
      fakeServer.emit('request-error');
    });
  });
  describe('Behaviour around the request/response lifecycle', () => {
    const EVENT = 'onPreResponse';
    const fakeClient = {sendError() {}} as {} as RequestHandler;
    let fakeServer, config, plugin;
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
    it('Should call continue when a boom is emitted if reply is an object',
       done => {
         plugin.register(fakeServer, null, () => {});
         fakeServer.emit(EVENT, {response: {isBoom: true}}, {
           continue() {
             // The continue function should be called
             done();
           },
         });
       });
    it('Should call continue when a boom is emitted if reply is a function',
       done => {
         // Manually testing has shown that in actual usage the `reply` object
         // provided to listeners of the `onPreResponse` event can be a function
         // that has a `continue` property that is a function.
         // If `reply.continue()` is not invoked in this situation, the Hapi
         // app will become unresponsive.
         plugin.register(fakeServer, null, () => {});
         const reply: Function&{continue?: Function} = () => {};
         reply.continue = () => {
           // The continue function should be called
           done();
         };
         fakeServer.emit(EVENT, {response: {isBoom: true}}, reply);
       });
    it('Should call sendError when a boom is received', done => {
      const fakeClient = {
        sendError(err) {
          assert(err instanceof ErrorMessage);
          done();
        },
      } as {} as RequestHandler;
      const plugin = hapiInterface(fakeClient, config);
      plugin.register(fakeServer, null!, () => {});
      fakeServer.emit('onPreResponse', {response: {isBoom: true}});
    });
    it('Should call next when completing a request', done => {
      plugin.register(fakeServer, null, () => {
        // The next function should be called
        done();
      });
      fakeServer.emit(EVENT, {response: {isBoom: true}}, {continue() {}});
    });
  });
});
