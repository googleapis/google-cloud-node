/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var assert = require('assert');
var proxyquire = require('proxyquire');
var v1 = require('../src/v1');
var v1beta2 = require('../src/v1beta2');

function FakeLanguageServiceClient() {
  this.calledWith_ = arguments;
  return this;
}

function FakeV1() {
  this.calledWith_ = arguments;
  return {
    languageServiceClient: FakeLanguageServiceClient
  };
}

function FakeV1Beta2() {
  this.calledWith_ = arguments;
  return {
    languageServiceClient: FakeLanguageServiceClient
  };
}

describe('Language', function() {
  var Language;
  var PROJECT_ID = 'some-project-id';

  before(function() {
    Language = proxyquire('../', {
      './v1': FakeV1,
      './v1beta2': FakeV1Beta2
    });
  });

  describe('instantiation v1', function() {
    it('should not be considered custom endpoint if default', function() {
      var language = new Language.v1({ projectId: PROJECT_ID });
      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.customEndpoint, false);
    });

    it('should use servicePath and port if defined', function() {
      var servicePath = 'localhost';
      var port = 9090;

      var language = new Language.v1({
        projectId: PROJECT_ID,
        servicePath: servicePath,
        port: port
      });

      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, servicePath);
      assert.strictEqual(calledWith.port, port);
      assert.strictEqual(calledWith.customEndpoint, true);
    });

    it('should use GOOGLE_CLOUD_LANGUAGE_ENDPOINT if defined', function() {
      var servicePath = 'localhost';
      var port = '7979';
      process.env.GOOGLE_CLOUD_LANGUAGE_ENDPOINT = servicePath + ':' + port;
      var language = new Language.v1({ projectId: PROJECT_ID });
      delete process.env.GOOGLE_CLOUD_LANGUAGE_ENDPOINT;

      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, servicePath);
      assert.strictEqual(calledWith.port, port);
      assert.strictEqual(calledWith.customEndpoint, true);
    });

    it('should fallback to the defaults otherwise', function() {
      var language = new Language.v1({ projectId: PROJECT_ID });
      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, v1.SERVICE_ADDRESS);
      assert.strictEqual(calledWith.port, v1.DEFAULT_SERVICE_PORT);
      assert.strictEqual(calledWith.customEndpoint, false);
    });

    it('should trim the protocol in custom endpoint', function() {
      var servicePath = 'local';
      var servicePathWithProtocol = 'http://' + servicePath;

      var language = new Language.v1({
        projectId: PROJECT_ID,
        servicePath: servicePathWithProtocol
      });

      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, servicePath);
      assert.strictEqual(calledWith.customEndpoint, true);
    });
  });

  describe('instantiation v1beta2', function() {
    it('should not be considered custom endpoint if default', function() {
      var language = new Language.v1beta2({ projectId: PROJECT_ID });
      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.customEndpoint, false);
    });

    it('should use servicePath and port if defined', function() {
      var servicePath = 'localhost';
      var port = 9090;

      var language = new Language.v1beta2({
        projectId: PROJECT_ID,
        servicePath: servicePath,
        port: port
      });

      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, servicePath);
      assert.strictEqual(calledWith.port, port);
      assert.strictEqual(calledWith.customEndpoint, true);
    });

    it('should use GOOGLE_CLOUD_LANGUAGE_ENDPOINT if defined', function() {
      var servicePath = 'localhost';
      var port = '7979';
      process.env.GOOGLE_CLOUD_LANGUAGE_ENDPOINT = servicePath + ':' + port;
      var language = new Language.v1beta2({ projectId: PROJECT_ID });
      delete process.env.GOOGLE_CLOUD_LANGUAGE_ENDPOINT;

      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, servicePath);
      assert.strictEqual(calledWith.port, port);
      assert.strictEqual(calledWith.customEndpoint, true);
    });

    it('should fallback to the defaults otherwise', function() {
      var language = new Language.v1beta2({ projectId: PROJECT_ID });
      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, v1beta2.SERVICE_ADDRESS);
      assert.strictEqual(calledWith.port, v1beta2.DEFAULT_SERVICE_PORT);
      assert.strictEqual(calledWith.customEndpoint, false);
    });

    it('should trim the protocol in custom endpoint', function() {
      var servicePath = 'local';
      var servicePathWithProtocol = 'http://' + servicePath;

      var language = new Language.v1beta2({
        projectId: PROJECT_ID,
        servicePath: servicePathWithProtocol
      });

      var calledWith = language.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, servicePath);
      assert.strictEqual(calledWith.customEndpoint, true);
    });
  });
});