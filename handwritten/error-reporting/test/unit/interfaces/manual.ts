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
import * as manual from '../../../src/interfaces/manual';
import {FakeConfiguration as Configuration} from '../../fixtures/configuration';
var config = new Configuration({});
(config as {} as {lacksCredentials: Function}).lacksCredentials = function() {
  return false;
};
import {ErrorMessage} from '../../../src/classes/error-message';
import { RequestHandler } from '../../../src/google-apis/auth-client';
import { Logger } from '@google-cloud/common';
import { RequestInformationContainer } from '../../../src/classes/request-information-container';
// var nock = require('nock');

describe('Manual handler', function() {
  // nock.disableNetConnect();
  // Mocked client
  var client: RequestHandler = {
    sendError: function(e, cb) {
      // immediately callback
      if (cb) {
        setImmediate(cb);
      }
    },
  } as {} as RequestHandler;
  var report = manual.handlerSetup(client, config, {
    warn: function(message) {
      // The use of `report` in this class should issue the following warning
      // becasue the `report` class is used directly and, as such, cannot
      // by itself have information where a ErrorMesasge was constructed.  It
      // only knows that an error has been reported.
      // Thus, the ErrorMessage objects given to the `report` method in the
      // tests do not have construction site information to verify that if
      // that information is not available, the user is issued a warning.
      assert.strictEqual(
          message,
          'Encountered a manually constructed error ' +
              'with message "builder test" but without a construction site stack ' +
              'trace.  This error might not be visible in the error reporting ' +
              'console.');
    },
  } as Logger);
  describe('Report invocation behaviour', function() {
    it('Should allow argument-less invocation', function() {
      var r = report(null!);
      assert(r instanceof ErrorMessage, 'should be an inst of ErrorMessage');
    });
    it('Should allow single string', function() {
      var r = report('doohickey');
      assert(r instanceof ErrorMessage, 'should be an inst of ErrorMessage');
      assert(r.message.match(/doohickey/), 'string error should propagate');
    });
    it('Should allow single inst of Error', function() {
      var r = report(new Error('hokeypokey'));
      assert(r.message.match(/hokeypokey/));
    });
    it('Should allow a function as a malformed error input', function(done) {
      this.timeout(2000);
      var r = report(function() {
        assert(false, 'callback should not be called');
        done();
      });
      assert(r instanceof ErrorMessage, 'should be an inst of ErrorMessage');
      setTimeout(function() {
        done();
      }, 1000);
    });
    it('Should callback to the supplied function', function(done) {
      var r = report('malarkey', function() {
        done();
      });
      assert(r.message.match(/malarkey/), 'string error should propagate');
    });
    it('replace the error string with the additional message', function(done) {
      var r = report('monkey', 'wrench', function() {
        done();
      });
      assert.strictEqual(
          r.message, 'wrench', 'additional message should replace');
    });
    it('Should allow a full array of optional arguments', function(done) {
      var r = report('donkey', {method: 'FETCH'}, 'cart', function() {
        done();
      });
      assert.strictEqual(r.message, 'cart', 'additional message replace');
      assert.strictEqual(r.context.httpRequest.method, 'FETCH');
    });
    it('Should allow all optional arguments except the callback', function() {
      var r = report('whiskey', {method: 'SIP'}, 'sour');
      assert.strictEqual(r.message, 'sour', 'additional message replace');
      assert.strictEqual(r.context.httpRequest.method, 'SIP');
    });
    it('Should allow a lack of additional message', function(done) {
      var r = report('ticky', {method: 'TACKEY'}, function() {
        done();
      });
      assert(
          r.message.match(/ticky/) && !r.message.match(/TACKEY/),
          'original message should be preserved');
      assert.strictEqual(r.context.httpRequest.method, 'TACKEY');
    });
    it('Should ignore arguments', function(done) {
      var r = report('hockey', function() {
        done();
      }, 'field');
      assert(
          r.message.match('hockey') && !r.message.match('field'),
          'string after callback should be ignored');
    });
    it('Should ignore arguments', function(done) {
      var r = report('passkey', function() {
        done();
      }, {method: 'HONK'});
      assert.notEqual(r.context.httpRequest.method, 'HONK');
    });
    it('Should allow null arguments as placeholders', function(done) {
      var r = report('pokey', null!, null!, function() {
        done();
      });
      assert(r.message.match(/pokey/), 'string error should propagate');
    });
    it('Should allow explicit undefined', function(done) {
      var r = report('Turkey', undefined, undefined, function() {
        done();
      });
      assert(r.message.match(/Turkey/), 'string error should propagate');
    });
    it('Should allow request to be supplied as undefined', function(done) {
      var r = report('turnkey', undefined, 'solution', function() {
        done();
      });
      assert.strictEqual(r.message, 'solution', 'error should propagate');
    });
    it('Should allow additional message', function(done) {
      var r = report('Mickey', {method: 'SNIFF'}, undefined, function() {
        done();
      });
      assert(
          r.message.match(/Mickey/) && !r.message.match(/SNIFF/),
          'string error should propagate');
      assert.strictEqual(r.context.httpRequest.method, 'SNIFF');
    });
  });

  describe('Custom Payload Builder', function() {
    it('Should accept builder inst as only argument', function() {
      var msg = 'builder test';
      var r = report(new ErrorMessage().setMessage(msg));
      assert(
          r.message.startsWith(msg),
          'string message should propagate from error message inst');
    });
    it('Should accept builder and request as arguments', function() {
      var msg = 'builder test';
      var oldReq = {method: 'GET'};
      var newReq = {method: 'POST'};
      var r = report(
          new ErrorMessage().setMessage(msg).consumeRequestInformation(oldReq as RequestInformationContainer),
          newReq);
      assert(
          r.message.startsWith(msg),
          'string message should propagate from error message inst');
      assert.strictEqual(r.context.httpRequest.method, newReq.method, [
        'request argument supplied at report invocation should propagte and',
        'if supplied, should overwrite any prexisting data in the field.',
      ].join('\n'));
    });
    it('Should accept message and additional message params as', function() {
      var oldMsg = 'builder test';
      var newMsg = 'analysis';
      var r = report(new ErrorMessage().setMessage(oldMsg), newMsg);
      assert.strictEqual(r.message, newMsg, [
        'message supplied at report invocation should propagte and, if',
        'supplied, should overwrite any prexisting data in the message field.',
      ].join('\n'));
    });
    it('Should accept message and callback function', function(done) {
      var oldMsg = 'builder test';
      report(new ErrorMessage().setMessage(oldMsg), function() {
        done();
      });
    });
  });
});
