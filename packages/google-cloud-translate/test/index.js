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
var prop = require('propprop');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var PKG = require('../package.json');

var makeRequestOverride;
var fakeUtil = extend({}, util, {
  makeRequest: function() {
    if (makeRequestOverride) {
      return makeRequestOverride.apply(null, arguments);
    }

    return util.makeRequest.apply(null, arguments);
  }
});

describe('Translate', function() {
  var API_KEY = 'api-key';

  var Translate;
  var translate;

  before(function() {
    Translate = proxyquire('../', {
      '@google-cloud/common': {
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    makeRequestOverride = null;

    translate = new Translate({
      key: API_KEY
    });
  });

  describe('instantiation', function() {
    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { key: API_KEY };
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

    it('should throw if an API key is not provided', function() {
      assert.throws(function() {
        new Translate({});
      }, 'An API key is required to use the Translate API.');
    });

    it('should localize the options', function() {
      var options = { key: API_KEY };
      var translate = new Translate(options);
      assert.strictEqual(translate.options, options);
    });

    it('should localize the api key', function() {
      assert.equal(translate.key, API_KEY);
    });
  });

  describe('detect', function() {
    var INPUT = 'input';

    it('should make the correct API request', function(done) {
      translate.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/detect');
        assert.strictEqual(reqOpts.useQuerystring, true);
        assert.deepEqual(reqOpts.qs.q, [INPUT]);
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
    });
  });

  describe('getLanguages', function() {
    it('should make the correct API request', function(done) {
      translate.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/languages');
        done();
      };

      translate.getLanguages(assert.ifError);
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
              language: 'en'
            },
            {
              language: 'es'
            }
          ]
        }
      };

      var expectedResults = apiResponse.data.languages.map(prop('language'));

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
    var SOURCE_LANG_CODE = 'en';
    var TARGET_LANG_CODE = 'es';

    var OPTIONS = {
      from: SOURCE_LANG_CODE,
      to: TARGET_LANG_CODE
    };

    describe('options = target langauge', function() {
      it('should make the correct API request', function(done) {
        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.qs.target, TARGET_LANG_CODE);
          done();
        };

        translate.translate(INPUT, TARGET_LANG_CODE, assert.ifError);
      });
    });

    describe('options = { source & target }', function() {
      it('should throw if `to` is not provided', function() {
        assert.throws(function() {
          translate.translate(INPUT, { from: SOURCE_LANG_CODE }, util.noop);
        }, 'A target language is required to perform a translation.');
      });

      it('should make the correct API request', function(done) {
        translate.request = function(reqOpts) {
          assert.strictEqual(reqOpts.qs.source, SOURCE_LANG_CODE);
          assert.strictEqual(reqOpts.qs.target, TARGET_LANG_CODE);
          done();
        };

        translate.translate(INPUT, {
          from: SOURCE_LANG_CODE,
          to: TARGET_LANG_CODE
        }, assert.ifError);
      });
    });

    it('should make the correct API request', function(done) {
      translate.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.useQuerystring, true);
        assert.deepEqual(reqOpts.qs, {
          q: [INPUT],
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
    });
  });

  describe('request', function() {
    it('should make the correct request', function(done) {
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
          'User-Agent': PKG.name + '/' + PKG.version
        }
      });
      var BASE_URL = 'https://www.googleapis.com/language/translate/v2';
      expectedReqOpts.uri = BASE_URL + reqOpts.uri;

      makeRequestOverride = function(reqOpts, options, callback) {
        assert.deepEqual(reqOpts, expectedReqOpts);
        assert.strictEqual(options, translate.options);
        callback(); // done()
      };

      translate.request(reqOpts, done);
    });
  });
});
