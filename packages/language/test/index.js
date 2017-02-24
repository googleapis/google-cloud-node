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

'use strict';

var assert = require('assert');
var extend = require('extend');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Language') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['document', 'html', 'text']);
  }
});

function FakeDocument() {
  this.calledWith_ = arguments;
}

var fakeV1Override;
function fakeV1() {
  if (fakeV1Override) {
    return fakeV1Override.apply(null, arguments);
  }

  return {
    languageServiceClient: util.noop
  };
}

describe('Language', function() {
  var Language;
  var language;

  var OPTIONS = {};

  before(function() {
    Language = proxyquire('../src/index.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      './document.js': FakeDocument,
      './v1': fakeV1
    });
  });

  beforeEach(function() {
    fakeV1Override = null;
    language = new Language(OPTIONS);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should normalize the arguments', function() {
      var options = {
        projectId: 'project-id',
        credentials: 'credentials',
        email: 'email',
        keyFilename: 'keyFile'
      };

      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options_) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, options_);
        return options_;
      };

      Language.call(fakeContext, options);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should create a gax api client', function() {
      var expectedLanguageService = {};

      fakeV1Override = function(options) {
        var expected = {
          libName: 'gccl',
          libVersion: require('../package.json').version
        };
        assert.deepStrictEqual(options, expected);

        return {
          languageServiceClient: function(options) {
            assert.deepStrictEqual(options, expected);
            return expectedLanguageService;
          }
        };
      };

      var language = new Language(OPTIONS);

      assert.deepEqual(language.api, {
        Language: expectedLanguageService
      });
    });
  });

  describe('annotate', function() {
    var CONTENT = '...';
    var OPTIONS = {
      property: 'value'
    };

    var EXPECTED_OPTIONS = {
      withCustomOptions: extend({}, OPTIONS, {
        content: CONTENT
      }),

      withoutCustomOptions: extend({}, {
        content: CONTENT
      })
    };

    it('should call annotate on a Document', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);

        return {
          annotate: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);
            callback(); // done()
          }
        };
      };

      language.annotate(CONTENT, OPTIONS, done);
    });

    it('should not require options', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);

        return {
          annotate: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);
            callback(); // done()
          }
        };
      };

      language.annotate(CONTENT, done);
    });
  });

  describe('detectEntities', function() {
    var CONTENT = '...';
    var OPTIONS = {
      property: 'value'
    };

    var EXPECTED_OPTIONS = {
      withCustomOptions: extend({}, OPTIONS, {
        content: CONTENT
      }),

      withoutCustomOptions: extend({}, {
        content: CONTENT
      })
    };

    it('should call detectEntities on a Document', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);

        return {
          detectEntities: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);
            callback(); // done()
          }
        };
      };

      language.detectEntities(CONTENT, OPTIONS, done);
    });

    it('should not require options', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);

        return {
          detectEntities: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);
            callback(); // done()
          }
        };
      };

      language.detectEntities(CONTENT, done);
    });
  });

  describe('detectSentiment', function() {
    var CONTENT = '...';
    var OPTIONS = {
      property: 'value'
    };

    var EXPECTED_OPTIONS = {
      withCustomOptions: extend({}, OPTIONS, {
        content: CONTENT
      }),

      withoutCustomOptions: extend({}, {
        content: CONTENT
      })
    };

    it('should call detectSentiment on a Document', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);

        return {
          detectSentiment: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);
            callback(); // done()
          }
        };
      };

      language.detectSentiment(CONTENT, OPTIONS, done);
    });

    it('should not require options', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);

        return {
          detectSentiment: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);
            callback(); // done()
          }
        };
      };

      language.detectSentiment(CONTENT, done);
    });
  });

  describe('detectSyntax', function() {
    var CONTENT = '...';
    var OPTIONS = {
      property: 'value'
    };

    var EXPECTED_OPTIONS = {
      withCustomOptions: extend({}, OPTIONS, {
        content: CONTENT
      }),

      withoutCustomOptions: extend({}, {
        content: CONTENT
      })
    };

    it('should call detectSyntax on a Document', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);

        return {
          detectSyntax: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withCustomOptions);
            callback(); // done()
          }
        };
      };

      language.detectSyntax(CONTENT, OPTIONS, done);
    });

    it('should not require options', function(done) {
      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);

        return {
          detectSyntax: function(options, callback) {
            assert.deepEqual(options, EXPECTED_OPTIONS.withoutCustomOptions);
            callback(); // done()
          }
        };
      };

      language.detectSyntax(CONTENT, done);
    });
  });


  describe('document', function() {
    var CONFIG = {};

    it('should create a Document', function() {
      var document = language.document(CONFIG);

      assert.strictEqual(document.calledWith_[0], language);
      assert.strictEqual(document.calledWith_[1], CONFIG);
    });
  });

  describe('html', function() {
    var CONTENT = '...';
    var OPTIONS = {
      property: 'value'
    };

    var EXPECTED_OPTIONS = extend({}, OPTIONS, {
      type: 'HTML',
      content: CONTENT
    });

    it('should create a Document', function() {
      var document = {};

      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS);
        return document;
      };

      assert.strictEqual(language.html(CONTENT, OPTIONS), document);
    });
  });

  describe('text', function() {
    var CONTENT = '...';
    var OPTIONS = {
      property: 'value'
    };

    var EXPECTED_OPTIONS = extend({}, OPTIONS, {
      type: 'PLAIN_TEXT',
      content: CONTENT
    });

    it('should create a Document', function() {
      var document = {};

      language.document = function(options) {
        assert.deepEqual(options, EXPECTED_OPTIONS);
        return document;
      };

      assert.strictEqual(language.text(CONTENT, OPTIONS), document);
    });
  });
});
