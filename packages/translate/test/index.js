/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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

'use strict';

var assert = require('assert');
var extend = require('extend');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var makeRequestOverride;
var promisified = false;
var fakeUtil = extend({}, util, {
  makeRequest: function() {
    if (makeRequestOverride) {
      return makeRequestOverride.apply(null, arguments);
    }

    return util.makeRequest.apply(null, arguments);
  },
  promisifyAll: function(Class) {
    if (Class.name === 'Translate') {
      promisified = true;
    }
  }
});

function FakeService() {
  this.calledWith_ = arguments;
}

describe('Translate', function() {
  var OPTIONS = {
    projectId: 'test-project'
  };

  var Translate;
  var translate;

  before(function() {
    Translate = proxyquire('../', {
      '@google-cloud/common': {
        util: fakeUtil,
        Service: FakeService
      }
    });
  });

  beforeEach(function() {
    makeRequestOverride = null;

    translate = new Translate(OPTIONS);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = extend({}, OPTIONS);
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options, cfg) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        assert.strictEqual(cfg.projectIdRequired, false);
        return options;
      };

      Translate.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should inherit from Service', function() {
      assert(translate instanceof FakeService);

      var calledWith = translate.calledWith_[0];
      var baseUrl = 'https://translation.googleapis.com/language/translate/v2';

      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/cloud-platform'
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
      assert.strictEqual(calledWith.projectIdRequired, false);
    });

    describe('Using an API Key', function() {
      var KEY_OPTIONS = {
        key: 'api-key'
      };

      beforeEach(function() {
        translate = new Translate(KEY_OPTIONS);
      });

      it('should localize the options', function() {
        var options = { key: '...' };
        var translate = new Translate(options);
        assert.strictEqual(translate.options, options);
      });

      it('should localize the api key', function() {
        assert.strictEqual(translate.key, KEY_OPTIONS.key);
      });
    });

    describe('GOOGLE_CLOUD_TRANSLATE_ENDPOINT', function() {
      var CUSTOM_ENDPOINT = '...';
      var translate;

      before(function() {
        process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT = CUSTOM_ENDPOINT;
        translate = new Translate(OPTIONS);
      });

      after(function() {
        delete process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT;
      });

      it('should correctly set the baseUrl', function() {
        var baseUrl = translate.calledWith_[0].baseUrl;

        assert.strictEqual(baseUrl, CUSTOM_ENDPOINT);
      });

      it('should remove trailing slashes', function() {
        var expectedBaseUrl = 'http://localhost:8080';

        process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT = 'http://localhost:8080//';

        var translate = new Translate(OPTIONS);
        var baseUrl = translate.calledWith_[0].baseUrl;

        assert.strictEqual(baseUrl, expectedBaseUrl);
      });
    });
  });

  describe('detect', function() {
    var INPUT = 'input';

    it('should make the correct API request', function(done) {
      translate.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/detect');
        assert.strictEqual(reqOpts.method, 'POST');
        assert.deepEqual(reqOpts.json, { q: [INPUT] });
        done();
      };

      translate.detect(INPUT, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        translate.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API resp', function(done) {
        translate.detect(INPUT, function(err, results, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(results, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        data: {
          detections: [
            [
              {
                isReliable: true,
                a: 'b',
                c: 'd'
              }
            ]
          ]
        }
      };

      var originalApiResponse = extend({}, apiResponse);

      var expectedResults = {
        a: 'b',
        c: 'd',
        input: INPUT
      };

      beforeEach(function() {
        translate.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with results & API response', function(done) {
        translate.detect(INPUT, function(err, results, apiResponse_) {
          assert.ifError(err);
          assert.deepEqual(results, expectedResults);
          assert.strictEqual(apiResponse_, apiResponse);
          assert.deepEqual(apiResponse_, originalApiResponse);
          done();
        });
      });

      it('should execute callback with multiple results', function(done) {
        translate.detect([INPUT, INPUT], function(err, results) {
          assert.ifError(err);
          assert.deepEqual(results, [expectedResults]);
          done();
        });
      });

      it('should return an array if input was an array', function(done) {
        translate.detect([INPUT], function(err, results, apiResponse_) {
          assert.ifError(err);
          assert.deepEqual(results, [expectedResults]);
          assert.strictEqual(apiResponse_, apiResponse);
          assert.deepEqual(apiResponse_, originalApiResponse);
          done();
        });
      });
    });
  });

  describe('getLanguages', function() {
    it('should make the correct API request', function(done) {
      translate.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/languages');
        assert.deepEqual(reqOpts.qs, {
          target: 'en'
        });
        done();
      };

      translate.getLanguages(assert.ifError);
    });

    it('should make the correct API request with target', function(done) {
      translate.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/languages');
        assert.deepEqual(reqOpts.qs, {
          target: 'es'
        });
        done();
      };

      translate.getLanguages('es', assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        translate.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec callback with error & API response', function(done) {
        translate.getLanguages(function(err, languages, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(languages, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        data: {
          languages: [
            {
              language: 'en',
              name: 'English'
            },
            {
              language: 'es',
              name: 'Spanish'
            }
          ]
        }
      };

      var expectedResults = [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'es',
          name: 'Spanish'
        }
      ];

      beforeEach(function() {
        translate.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with languages', function(done) {
        translate.getLanguages(function(err, languages, apiResponse_) {
          assert.ifError(err);
          assert.deepEqual(languages, expectedResults);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('translate', function() {
    var INPUT = 'Hello';
    var INPUT_HTML = '<html><body>Hello</body></html>';
    var SOURCE_LANG_CODE = 'en';
    var TARGET_LANG_CODE = 'es';

    var OPTIONS = {
      from: SOURCE_LANG_CODE,
      to: TARGET_LANG_CODE
    };

    describe('options = target langauge', function() {
      it('should make the correct API request', function(done) {
        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.target, TARGET_LANG_CODE);
          done();
        };

        translate.translate(INPUT, TARGET_LANG_CODE, assert.ifError);
      });
    });

    describe('options = { source & target }', function() {
      it('should throw if `to` is not provided', function() {
        assert.throws(function() {
          translate.translate(INPUT, { from: SOURCE_LANG_CODE }, util.noop);
        }, /A target language is required to perform a translation\./);
      });

      it('should make the correct API request', function(done) {
        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.source, SOURCE_LANG_CODE);
          assert.strictEqual(reqOpts.json.target, TARGET_LANG_CODE);
          done();
        };

        translate.translate(INPUT, {
          from: SOURCE_LANG_CODE,
          to: TARGET_LANG_CODE
        }, assert.ifError);
      });
    });

    describe('options.format', function() {
      it('should default to text', function(done) {
        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.format, 'text');
          done();
        };

        translate.translate(INPUT, OPTIONS, assert.ifError);
      });

      it('should recognize HTML', function(done) {
        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.format, 'html');
          done();
        };

        translate.translate(INPUT_HTML, OPTIONS, assert.ifError);
      });

      it('should allow overriding the format', function(done) {
        var options = extend({}, OPTIONS, {
          format: 'custom format'
        });

        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.format, options.format);
          done();
        };

        translate.translate(INPUT_HTML, options, assert.ifError);
      });
    });

    describe('options.model', function() {
      it('should set the model option when available', function(done) {
        var fakeOptions = {
          model: 'nmt',
          to: 'es'
        };

        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.model, 'nmt');
          done();
        };

        translate.translate(INPUT, fakeOptions, assert.ifError);
      });
    });

    it('should make the correct API request', function(done) {
      translate.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.method, 'POST');
        assert.deepEqual(reqOpts.json, {
          q: [INPUT],
          format: 'text',
          source: SOURCE_LANG_CODE,
          target: TARGET_LANG_CODE
        });
        done();
      };

      translate.translate(INPUT, OPTIONS, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        translate.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec callback with error & API response', function(done) {
        translate.translate(INPUT, OPTIONS, function(err, translations, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(translations, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        data: {
          translations: [
            {
              translatedText: 'text',
              a: 'b',
              c: 'd'
            }
          ]
        }
      };

      var expectedResults = apiResponse.data.translations[0].translatedText;

      beforeEach(function() {
        translate.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with results & API response', function(done) {
        translate.translate(INPUT, OPTIONS, function(err, translations, resp) {
          assert.ifError(err);
          assert.deepEqual(translations, expectedResults);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should execute callback with multiple results', function(done) {
        var input = [INPUT, INPUT];
        translate.translate(input, OPTIONS, function(err, translations) {
          assert.ifError(err);
          assert.deepEqual(translations, [expectedResults]);
          done();
        });
      });

      it('should return an array if input was an array', function(done) {
        translate.translate([INPUT], OPTIONS, function(err, translations) {
          assert.ifError(err);
          assert.deepEqual(translations, [expectedResults]);
          done();
        });
      });
    });
  });

  describe('request', function() {
    describe('OAuth mode', function() {
      var request;

      beforeEach(function() {
        request = FakeService.prototype.request;
      });

      afterEach(function() {
        FakeService.prototype.request = request;
      });

      it('should make the correct request', function(done) {
        var fakeOptions = {
          uri: '/test',
          a: 'b',
          json: {
            a: 'b'
          }
        };

        FakeService.prototype.request = function(reqOpts, callback) {
          assert.strictEqual(reqOpts, fakeOptions);
          callback();
        };

        translate.request(fakeOptions, done);
      });
    });

    describe('API key mode', function() {
      var KEY_OPTIONS = {
        key: 'api-key'
      };

      beforeEach(function() {
        translate = new Translate(KEY_OPTIONS);
      });

      it('should make the correct request', function(done) {
        var userAgent = 'user-agent/0.0.0';

        var getUserAgentFn = fakeUtil.getUserAgentFromPackageJson;
        fakeUtil.getUserAgentFromPackageJson = function(packageJson) {
          fakeUtil.getUserAgentFromPackageJson = getUserAgentFn;
          assert.deepEqual(packageJson, require('../package.json'));
          return userAgent;
        };

        var reqOpts = {
          uri: '/test',
          a: 'b',
          c: 'd',
          qs: {
            a: 'b',
            c: 'd'
          }
        };

        var expectedReqOpts = extend(true, {}, reqOpts, {
          qs: {
            key: translate.key
          },
          headers: {
            'User-Agent': userAgent
          }
        });

        expectedReqOpts.uri = translate.baseUrl + reqOpts.uri;

        makeRequestOverride = function(reqOpts, options, callback) {
          assert.deepEqual(reqOpts, expectedReqOpts);
          assert.strictEqual(options, translate.options);
          callback(); // done()
        };

        translate.request(reqOpts, done);
      });
    });
  });
});
