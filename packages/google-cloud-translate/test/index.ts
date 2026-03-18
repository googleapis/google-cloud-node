// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {DecorateRequestOptions, util} from '@google-cloud/common';
import {
  BodyResponseCallback,
  MakeRequestConfig,
} from '@google-cloud/common/build/src/util';
import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {after, afterEach, before, beforeEach, describe, it} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as r from 'request';

import * as orig from '../src';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkgJson = require('../../package.json');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let makeRequestOverride: any;
let promisified = false;
const fakePromisify = extend({}, pfy, {
  promisifyAll(c: Function) {
    if (c.name === 'Translate') {
      promisified = true;
    }
  },
});

const fakeUtil = extend({}, util, {
  makeRequest(
    opts: DecorateRequestOptions,
    cfg: MakeRequestConfig,
    cb: BodyResponseCallback
  ) {
    if (makeRequestOverride) {
      return makeRequestOverride(opts, cfg, cb);
    }
    return util.makeRequest(opts, cfg, cb);
  },
});
const originalFakeUtil = extend(true, {}, fakeUtil);

class FakeService {
  calledWith_: IArguments;
  request?: Function;
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

describe('Translate v2', () => {
  const OPTIONS = {
    projectId: 'test-project',
  };

  // tslint:disable-next-line variable-name
  let Translate: typeof orig.v2.Translate;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let translate: any;

  before(() => {
    Translate = proxyquire('../src/v2', {
      '@google-cloud/common': {
        util: fakeUtil,
        Service: FakeService,
      },
      '@google-cloud/promisify': fakePromisify,
    }).Translate;
  });

  beforeEach(() => {
    extend(fakeUtil, originalFakeUtil);
    makeRequestOverride = null;

    translate = new Translate(OPTIONS);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from Service', () => {
      assert(translate instanceof FakeService);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const calledWith = (translate as any).calledWith_[0];
      const baseUrl =
        'https://translation.googleapis.com/language/translate/v2';

      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/cloud-platform',
      ]);
      assert.deepStrictEqual(calledWith.packageJson, pkgJson);
      assert.strictEqual(calledWith.projectIdRequired, false);
    });

    it('should allow apiEndpoint override', () => {
      const apiEndpoint = 'fake.endpoint';
      translate = new Translate({
        projectId: 'test-project',
        apiEndpoint,
      });
      const calledWith = translate.calledWith_[0];
      assert.strictEqual(calledWith.apiEndpoint, apiEndpoint);
    });

    describe('Using an API Key', () => {
      const KEY_OPTIONS = {
        key: 'api-key',
      };

      beforeEach(() => {
        translate = new Translate(KEY_OPTIONS);
      });

      it('should localize the options', () => {
        const options = {key: '...'};
        const translate = new Translate(options);
        assert.strictEqual(translate.options.key, options.key);
      });

      it('should localize the api key', () => {
        assert.strictEqual(translate.key, KEY_OPTIONS.key);
      });
    });

    describe('GOOGLE_CLOUD_TRANSLATE_ENDPOINT', () => {
      const CUSTOM_ENDPOINT = '...';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let translate: any;

      before(() => {
        process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT = CUSTOM_ENDPOINT;
        translate = new Translate(OPTIONS);
      });

      after(() => {
        delete process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT;
      });

      it('should correctly set the baseUrl', () => {
        const baseUrl = translate.calledWith_[0].baseUrl;

        assert.strictEqual(baseUrl, CUSTOM_ENDPOINT);
      });

      it('should remove trailing slashes', () => {
        const expectedBaseUrl = 'http://localhost:8080';

        process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT = 'http://localhost:8080//';

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const translate: any = new Translate(OPTIONS);
        const baseUrl = translate.calledWith_[0].baseUrl;

        assert.strictEqual(baseUrl, expectedBaseUrl);
      });
    });
  });

  describe('detect', () => {
    const INPUT = 'input';

    it('should make the correct API request', done => {
      translate.request = (reqOpts: r.OptionsWithUri) => {
        assert.strictEqual(reqOpts.uri, '/detect');
        assert.strictEqual(reqOpts.method, 'POST');
        assert.deepStrictEqual(reqOpts.json, {q: [INPUT]});
        done();
      };

      translate.detect(INPUT, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        translate.request = (reqOpts: r.OptionsWithUri, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API resp', done => {
        translate.detect(INPUT, (err: Error, results: {}, apiResponse_: {}) => {
          assert.strictEqual(err, error);
          assert.strictEqual(results, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        data: {
          detections: [
            [
              {
                isReliable: true,
                a: 'b',
                c: 'd',
              },
            ],
          ],
        },
      };

      const originalApiResponse = extend({}, apiResponse);

      const expectedResults = {
        a: 'b',
        c: 'd',
        input: INPUT,
      };

      beforeEach(() => {
        translate.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with results & API response', done => {
        translate.detect(INPUT, (err: Error, results: {}, apiResponse_: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(results, expectedResults);
          assert.strictEqual(apiResponse_, apiResponse);
          assert.deepStrictEqual(apiResponse_, originalApiResponse);
          done();
        });
      });

      it('should execute callback with multiple results', done => {
        translate.detect([INPUT, INPUT], (err: Error, results: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(results, [expectedResults]);
          done();
        });
      });

      it('should return an array if input was an array', done => {
        translate.detect(
          [INPUT],
          (err: Error, results: {}, apiResponse_: {}) => {
            assert.ifError(err);
            assert.deepStrictEqual(results, [expectedResults]);
            assert.strictEqual(apiResponse_, apiResponse);
            assert.deepStrictEqual(apiResponse_, originalApiResponse);
            done();
          }
        );
      });
    });
  });

  describe('getLanguages', () => {
    it('should make the correct API request', done => {
      translate.request = (reqOpts: r.OptionsWithUri) => {
        assert.strictEqual(reqOpts.uri, '/languages');
        assert.deepStrictEqual(reqOpts.qs, {
          target: 'en',
        });
        done();
      };

      translate.getLanguages(assert.ifError);
    });

    it('should make the correct API request with target', done => {
      translate.request = (reqOpts: r.OptionsWithUri) => {
        assert.strictEqual(reqOpts.uri, '/languages');
        assert.deepStrictEqual(reqOpts.qs, {
          target: 'es',
        });
        done();
      };

      translate.getLanguages('es', assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        translate.request = (reqOpts: {}, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should exec callback with error & API response', done => {
        translate.getLanguages(
          (err: Error, languages: {}, apiResponse_: {}) => {
            assert.strictEqual(err, error);
            assert.strictEqual(languages, null);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {
        data: {
          languages: [
            {
              language: 'en',
              name: 'English',
            },
            {
              language: 'es',
              name: 'Spanish',
            },
          ],
        },
      };

      const expectedResults = [
        {
          code: 'en',
          name: 'English',
        },
        {
          code: 'es',
          name: 'Spanish',
        },
      ];

      beforeEach(() => {
        translate.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with languages', done => {
        translate.getLanguages(
          (err: Error, languages: {}, apiResponse_: {}) => {
            assert.ifError(err);
            assert.deepStrictEqual(languages, expectedResults);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });
  });

  describe('translate', () => {
    const INPUT = 'Hello';
    const INPUT_HTML = '<html><body>Hello</body></html>';
    const SOURCE_LANG_CODE = 'en';
    const TARGET_LANG_CODE = 'es';

    const OPTIONS = {
      from: SOURCE_LANG_CODE,
      to: TARGET_LANG_CODE,
    };

    describe('options = target langauge', () => {
      it('should make the correct API request', done => {
        translate.request = (reqOpts: r.Options) => {
          assert.strictEqual(reqOpts.json.target, TARGET_LANG_CODE);
          done();
        };

        translate.translate(INPUT, TARGET_LANG_CODE, assert.ifError);
      });
    });

    describe('options = { source & target }', () => {
      it('should throw if `to` is not provided', () => {
        assert.throws(() => {
          translate.translate(INPUT, {from: SOURCE_LANG_CODE}, util.noop);
        }, /A target language is required to perform a translation\./);
      });

      it('should make the correct API request', done => {
        translate.request = (reqOpts: r.Options) => {
          assert.strictEqual(reqOpts.json.source, SOURCE_LANG_CODE);
          assert.strictEqual(reqOpts.json.target, TARGET_LANG_CODE);
          done();
        };

        translate.translate(
          INPUT,
          {
            from: SOURCE_LANG_CODE,
            to: TARGET_LANG_CODE,
          },
          assert.ifError
        );
      });
    });

    describe('options.format', () => {
      it('should default to text', done => {
        translate.request = (reqOpts: r.Options) => {
          assert.strictEqual(reqOpts.json.format, 'text');
          done();
        };

        translate.translate(INPUT, OPTIONS, assert.ifError);
      });

      it('should recognize HTML', done => {
        translate.request = (reqOpts: r.Options) => {
          assert.strictEqual(reqOpts.json.format, 'html');
          done();
        };

        translate.translate(INPUT_HTML, OPTIONS, assert.ifError);
      });

      it('should allow overriding the format', done => {
        const options = extend({}, OPTIONS, {
          format: 'custom format',
        });

        translate.request = (reqOpts: r.Options) => {
          assert.strictEqual(reqOpts.json.format, options.format);
          done();
        };

        translate.translate(INPUT_HTML, options, assert.ifError);
      });
    });

    describe('options.model', () => {
      it('should set the model option when available', done => {
        const fakeOptions = {
          model: 'nmt',
          to: 'es',
        };

        translate.request = (reqOpts: r.Options) => {
          assert.strictEqual(reqOpts.json.model, 'nmt');
          done();
        };

        translate.translate(INPUT, fakeOptions, assert.ifError);
      });
    });

    it('should make the correct API request', done => {
      translate.request = (reqOpts: r.OptionsWithUri) => {
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.method, 'POST');
        assert.deepStrictEqual(reqOpts.json, {
          q: [INPUT],
          format: 'text',
          source: SOURCE_LANG_CODE,
          target: TARGET_LANG_CODE,
        });
        done();
      };

      translate.translate(INPUT, OPTIONS, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        translate.request = (reqOpts: r.Options, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should exec callback with error & API response', done => {
        translate.translate(
          INPUT,
          OPTIONS,
          (err: Error, translations: {}, resp: r.Response) => {
            assert.strictEqual(err, error);
            assert.strictEqual(translations, null);
            assert.strictEqual(resp, apiResponse);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {
        data: {
          translations: [
            {
              translatedText: 'text',
              a: 'b',
              c: 'd',
            },
          ],
        },
      };

      const expectedResults = apiResponse.data.translations[0].translatedText;

      beforeEach(() => {
        translate.request = (reqOpts: r.Options, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with results & API response', done => {
        translate.translate(
          INPUT,
          OPTIONS,
          (err: Error, translations: {}, resp: r.Response) => {
            assert.ifError(err);
            assert.deepStrictEqual(translations, expectedResults);
            assert.strictEqual(resp, apiResponse);
            done();
          }
        );
      });

      it('should execute callback with multiple results', done => {
        const input = [INPUT, INPUT];
        translate.translate(input, OPTIONS, (err: Error, translations: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(translations, [expectedResults]);
          done();
        });
      });

      it('should return an array if input was an array', done => {
        translate.translate(
          [INPUT],
          OPTIONS,
          (err: Error, translations: {}) => {
            assert.ifError(err);
            assert.deepStrictEqual(translations, [expectedResults]);
            done();
          }
        );
      });
    });
  });

  describe('request', () => {
    describe('OAuth mode', () => {
      let request: Function;

      beforeEach(() => {
        request = FakeService.prototype.request!;
      });

      afterEach(() => {
        FakeService.prototype.request = request;
      });

      it('should make the correct request', done => {
        translate.request = () => {
          done();
        };
        const fakeOptions = {
          uri: '/test',
          a: 'b',
          json: {
            a: 'b',
          },
        };

        FakeService.prototype.request = (
          reqOpts: r.Options,
          callback: Function
        ) => {
          assert.strictEqual(reqOpts, fakeOptions);
          callback();
        };

        translate.request(fakeOptions, done);
      });
    });

    describe('API key mode', () => {
      const KEY_OPTIONS = {
        key: 'api-key',
      };

      beforeEach(() => {
        translate = new Translate(KEY_OPTIONS);
      });

      it('should make the correct request', done => {
        translate.request = () => {
          done();
        };
        const userAgent = 'user-agent/0.0.0';

        const getUserAgentFn = fakeUtil.getUserAgentFromPackageJson;
        fakeUtil.getUserAgentFromPackageJson = packageJson => {
          fakeUtil.getUserAgentFromPackageJson = getUserAgentFn;
          assert.deepStrictEqual(packageJson, pkgJson);
          return userAgent;
        };

        const reqOpts = {
          uri: '/test',
          a: 'b',
          c: 'd',
          qs: {
            a: 'b',
            c: 'd',
          },
        };

        const expectedReqOpts = extend(true, {}, reqOpts, {
          qs: {
            key: translate.key,
          },
          headers: {
            'User-Agent': userAgent,
          },
        });

        expectedReqOpts.uri = translate.baseUrl + reqOpts.uri;

        makeRequestOverride = (
          reqOpts: r.Options,
          options: {},
          callback: Function
        ) => {
          assert.deepStrictEqual(reqOpts, expectedReqOpts);
          assert.strictEqual(options, translate.options);
          callback(); // done()
        };

        translate.request(reqOpts, done);
      });
    });
  });
});
