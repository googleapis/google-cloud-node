/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

import {
  MissingProjectIdError,
  replaceProjectIdToken,
} from '@google-cloud/projectify';
import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import * as extend from 'extend';
import {
  AuthClient,
  GoogleAuth,
  GoogleAuthOptions,
  OAuth2Client,
} from 'google-auth-library';
import * as nock from 'nock';
import * as proxyquire from 'proxyquire';
import * as r from 'teeny-request';
import * as retryRequest from 'retry-request';
import * as sinon from 'sinon';
import * as stream from 'stream';
import {teenyRequest} from 'teeny-request';

import {
  Abortable,
  ApiError,
  DecorateRequestOptions,
  Duplexify,
  DuplexifyConstructor,
  GoogleErrorBody,
  GoogleInnerError,
  MakeAuthenticatedRequestFactoryConfig,
  MakeRequestConfig,
  ParsedHttpRespMessage,
  Util,
} from '../../src/nodejs-common/util';
import {DEFAULT_PROJECT_ID_TOKEN} from '../../src/nodejs-common/service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const duplexify: DuplexifyConstructor = require('duplexify');

nock.disableNetConnect();

const fakeResponse = {
  statusCode: 200,
  body: {star: 'trek'},
} as r.Response;

const fakeBadResp = {
  statusCode: 400,
  statusMessage: 'Not Good',
} as r.Response;

const fakeReqOpts: DecorateRequestOptions = {
  uri: 'http://so-fake',
  method: 'GET',
};

const fakeError = new Error('this error is like so fake');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let requestOverride: any;
function fakeRequest() {
  // eslint-disable-next-line prefer-spread, prefer-rest-params
  return (requestOverride || teenyRequest).apply(null, arguments);
}

fakeRequest.defaults = (defaults: r.CoreOptions) => {
  assert.ok(
    /^gl-node\/(?<nodeVersion>[^W]+) gccl\/(?<gccl>[^W]+) gccl-invocation-id\/(?<gcclInvocationId>[^W]+)$/.test(
      defaults.headers!['x-goog-api-client']
    )
  );
  return fakeRequest;
};

let retryRequestOverride: Function | null;
function fakeRetryRequest() {
  // eslint-disable-next-line prefer-spread, prefer-rest-params
  return (retryRequestOverride || retryRequest).apply(null, arguments);
}

let replaceProjectIdTokenOverride: Function | null;
function fakeReplaceProjectIdToken() {
  // eslint-disable-next-line prefer-spread, prefer-rest-params
  return (replaceProjectIdTokenOverride || replaceProjectIdToken).apply(
    null,
    // eslint-disable-next-line prefer-spread, prefer-rest-params
    arguments
  );
}

describe('common/util', () => {
  let util: Util & {[index: string]: Function};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function stub(method: keyof Util, meth: (...args: any[]) => void) {
    return sandbox.stub(util, method).callsFake(meth);
  }

  function createExpectedErrorMessage(errors: string[]): string {
    if (errors.length < 2) {
      return errors[0];
    }

    errors = errors.map((error, i) => `    ${i + 1}. ${error}`);
    errors.unshift(
      'Multiple errors occurred during the request. Please see the `errors` array for complete details.\n'
    );
    errors.push('\n');

    return errors.join('\n');
  }

  const fakeGoogleAuth = {
    // Using a custom `AuthClient` to ensure any `AuthClient` would work
    AuthClient: class CustomAuthClient extends AuthClient {
      async getAccessToken() {
        return {token: '', res: undefined};
      }

      async getRequestHeaders() {
        return {};
      }

      request = OAuth2Client.prototype.request.bind(this);
    },
    GoogleAuth: class {
      constructor(config?: GoogleAuthOptions) {
        return new GoogleAuth(config);
      }
    },
  };

  before(() => {
    util = proxyquire('../../src/nodejs-common/util', {
      'google-auth-library': fakeGoogleAuth,
      'retry-request': fakeRetryRequest,
      'teeny-request': {teenyRequest: fakeRequest},
      '@google-cloud/projectify': {
        replaceProjectIdToken: fakeReplaceProjectIdToken,
      },
    }).util;
  });

  let sandbox: sinon.SinonSandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    requestOverride = null;
    retryRequestOverride = null;
    replaceProjectIdTokenOverride = null;
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('ApiError', () => {
    it('should accept just a message', () => {
      const expectedMessage = 'Hi, I am an error message!';
      const apiError = new ApiError(expectedMessage);

      assert.strictEqual(apiError.message, expectedMessage);
    });

    it('should use message in stack', () => {
      const expectedMessage = 'Message is in the stack too!';
      const apiError = new ApiError(expectedMessage);
      assert(apiError.stack?.includes(expectedMessage));
    });

    it('should build correct ApiError', () => {
      const fakeMessage = 'Formatted Error.';
      const fakeResponse = {statusCode: 200} as r.Response;
      const errors = [{message: 'Hi'}, {message: 'Bye'}];
      const error = {
        errors,
        code: 100,
        message: 'Uh oh',
        response: fakeResponse,
      };

      sandbox
        .stub(ApiError, 'createMultiErrorMessage')
        .withArgs(error, errors)
        .returns(fakeMessage);

      const apiError = new ApiError(error);
      assert.strictEqual(apiError.errors, error.errors);
      assert.strictEqual(apiError.code, error.code);
      assert.strictEqual(apiError.response, error.response);
      assert.strictEqual(apiError.message, fakeMessage);
    });

    it('should parse the response body for errors', () => {
      const fakeMessage = 'Formatted Error.';
      const error = {message: 'Error.'};
      const errors = [error, error];

      const errorBody = {
        code: 123,
        response: {
          body: JSON.stringify({
            error: {
              errors,
            },
          }),
        } as r.Response,
      };

      sandbox
        .stub(ApiError, 'createMultiErrorMessage')
        .withArgs(errorBody, errors)
        .returns(fakeMessage);

      const apiError = new ApiError(errorBody);
      assert.strictEqual(apiError.message, fakeMessage);
    });

    describe('createMultiErrorMessage', () => {
      it('should append the custom error message', () => {
        const errorMessage = 'API error message';
        const customErrorMessage = 'Custom error message';

        const errors = [new Error(errorMessage)];
        const error = {
          code: 100,
          response: {} as r.Response,
          message: customErrorMessage,
        };

        const expectedErrorMessage = createExpectedErrorMessage([
          customErrorMessage,
          errorMessage,
        ]);
        const multiError = ApiError.createMultiErrorMessage(error, errors);
        assert.strictEqual(multiError, expectedErrorMessage);
      });

      it('should use any inner errors', () => {
        const messages = ['Hi, I am an error!', 'Me too!'];
        const errors: GoogleInnerError[] = messages.map(message => ({message}));
        const error: GoogleErrorBody = {
          code: 100,
          response: {} as r.Response,
        };

        const expectedErrorMessage = createExpectedErrorMessage(messages);
        const multiError = ApiError.createMultiErrorMessage(error, errors);
        assert.strictEqual(multiError, expectedErrorMessage);
      });

      it('should parse and append the decoded response body', () => {
        const errorMessage = 'API error message';
        const responseBodyMsg = 'Response body message &lt;';

        const error = {
          message: errorMessage,
          code: 100,
          response: {
            body: Buffer.from(responseBodyMsg),
          } as r.Response,
        };

        const expectedErrorMessage = createExpectedErrorMessage([
          'API error message',
          'Response body message <',
        ]);
        const multiError = ApiError.createMultiErrorMessage(error);
        assert.strictEqual(multiError, expectedErrorMessage);
      });

      it('should use default message if there are no errors', () => {
        const fakeResponse = {statusCode: 200} as r.Response;
        const expectedErrorMessage = 'A failure occurred during this request.';
        const error = {
          code: 100,
          response: fakeResponse,
        };

        const multiError = ApiError.createMultiErrorMessage(error);
        assert.strictEqual(multiError, expectedErrorMessage);
      });

      it('should filter out duplicate errors', () => {
        const expectedErrorMessage = 'Error during request.';
        const error = {
          code: 100,
          message: expectedErrorMessage,
          response: {
            body: expectedErrorMessage,
          } as r.Response,
        };

        const multiError = ApiError.createMultiErrorMessage(error);
        assert.strictEqual(multiError, expectedErrorMessage);
      });
    });
  });

  describe('PartialFailureError', () => {
    it('should build correct PartialFailureError', () => {
      const fakeMessage = 'Formatted Error.';
      const errors = [{}, {}];
      const error = {
        code: 123,
        errors,
        response: fakeResponse,
        message: 'Partial failure occurred',
      };

      sandbox
        .stub(util.ApiError, 'createMultiErrorMessage')
        .withArgs(error, errors)
        .returns(fakeMessage);

      const partialFailureError = new util.PartialFailureError(error);

      assert.strictEqual(partialFailureError.errors, error.errors);
      assert.strictEqual(partialFailureError.name, 'PartialFailureError');
      assert.strictEqual(partialFailureError.response, error.response);
      assert.strictEqual(partialFailureError.message, fakeMessage);
    });
  });

  describe('handleResp', () => {
    it('should handle errors', done => {
      const error = new Error('Error.');

      util.handleResp(error, fakeResponse, null, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('uses a no-op callback if none is sent', () => {
      util.handleResp(null, fakeResponse, '');
    });

    it('should parse response', done => {
      stub('parseHttpRespMessage', resp_ => {
        assert.deepStrictEqual(resp_, fakeResponse);
        return {
          resp: fakeResponse,
        };
      });

      stub('parseHttpRespBody', body_ => {
        assert.strictEqual(body_, fakeResponse.body);
        return {
          body: fakeResponse.body,
        };
      });

      util.handleResp(
        fakeError,
        fakeResponse,
        fakeResponse.body,
        (err, body, resp) => {
          assert.deepStrictEqual(err, fakeError);
          assert.deepStrictEqual(body, fakeResponse.body);
          assert.deepStrictEqual(resp, fakeResponse);
          done();
        }
      );
    });

    it('should parse response for error', done => {
      const error = new Error('Error.');

      sandbox.stub(util, 'parseHttpRespMessage').callsFake(() => {
        return {err: error} as ParsedHttpRespMessage;
      });

      util.handleResp(null, fakeResponse, {}, err => {
        assert.deepStrictEqual(err, error);
        done();
      });
    });

    it('should parse body for error', done => {
      const error = new Error('Error.');

      stub('parseHttpRespBody', () => {
        return {err: error};
      });

      util.handleResp(null, fakeResponse, {}, err => {
        assert.deepStrictEqual(err, error);
        done();
      });
    });

    it('should not parse undefined response', done => {
      stub('parseHttpRespMessage', () => done()); // Will throw.
      util.handleResp(null, null, null, done);
    });

    it('should not parse undefined body', done => {
      stub('parseHttpRespBody', () => done()); // Will throw.
      util.handleResp(null, null, null, done);
    });

    it('should handle non-JSON body', done => {
      const unparseableBody = '<html>Unparseable body.</html>';

      util.handleResp(null, null, unparseableBody, (err, body) => {
        assert(body.includes(unparseableBody));
        done();
      });
    });

    it('should include the status code when the error body cannot be JSON-parsed', done => {
      const unparseableBody = 'Bad gateway';
      const statusCode = 502;

      util.handleResp(
        null,
        {body: unparseableBody, statusCode} as r.Response,
        unparseableBody,
        err => {
          assert(err, 'there should be an error');
          const apiError = err! as ApiError;
          assert.strictEqual(apiError.code, statusCode);

          const response = apiError.response;
          if (!response) {
            assert.fail('there should be a response property on the error');
          } else {
            assert.strictEqual(response.body, unparseableBody);
          }

          done();
        }
      );
    });
  });

  describe('parseHttpRespMessage', () => {
    it('should build ApiError with non-200 status and message', () => {
      const res = util.parseHttpRespMessage(fakeBadResp);
      const error_ = res.err!;
      assert.strictEqual(error_.code, fakeBadResp.statusCode);
      assert.strictEqual(error_.message, fakeBadResp.statusMessage);
      assert.strictEqual(error_.response, fakeBadResp);
    });

    it('should return the original response message', () => {
      const parsedHttpRespMessage = util.parseHttpRespMessage(fakeBadResp);
      assert.strictEqual(parsedHttpRespMessage.resp, fakeBadResp);
    });
  });

  describe('parseHttpRespBody', () => {
    it('should detect body errors', () => {
      const apiErr = {
        errors: [{message: 'bar'}],
        code: 400,
        message: 'an error occurred',
      };

      const parsedHttpRespBody = util.parseHttpRespBody({error: apiErr});
      const expectedErrorMessage = createExpectedErrorMessage([
        apiErr.message,
        apiErr.errors[0].message,
      ]);

      const err = parsedHttpRespBody.err as ApiError;
      assert.deepStrictEqual(err.errors, apiErr.errors);
      assert.strictEqual(err.code, apiErr.code);
      assert.deepStrictEqual(err.message, expectedErrorMessage);
    });

    it('should try to parse JSON if body is string', () => {
      const httpRespBody = '{ "foo": "bar" }';
      const parsedHttpRespBody = util.parseHttpRespBody(httpRespBody);

      assert.strictEqual(parsedHttpRespBody.body.foo, 'bar');
    });

    it('should return the original body', () => {
      const httpRespBody = {};
      const parsedHttpRespBody = util.parseHttpRespBody(httpRespBody);
      assert.strictEqual(parsedHttpRespBody.body, httpRespBody);
    });
  });

  describe('makeWritableStream', () => {
    it('should use defaults', done => {
      const dup = duplexify();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const metadata = {a: 'b', c: 'd'} as any;
      util.makeWritableStream(dup, {
        metadata,
        makeAuthenticatedRequest(request: DecorateRequestOptions) {
          assert.strictEqual(request.method, 'POST');
          assert.strictEqual(request.qs.uploadType, 'multipart');
          assert.strictEqual(request.timeout, 0);
          assert.strictEqual(request.maxRetries, 0);
          assert.strictEqual(Array.isArray(request.multipart), true);

          const mp = request.multipart as r.RequestPart[];

          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (mp[0] as any)['Content-Type'],
            'application/json'
          );
          assert.strictEqual(mp[0].body, JSON.stringify(metadata));

          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (mp[1] as any)['Content-Type'],
            'application/octet-stream'
          );
          // (is a writable stream:)
          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            typeof (mp[1].body as any)._writableState,
            'object'
          );

          done();
        },
      });
    });

    it('should allow overriding defaults', done => {
      const dup = duplexify();

      const req = {
        uri: 'http://foo',
        method: 'PUT',
        qs: {
          uploadType: 'media',
        },
      } as DecorateRequestOptions;

      util.makeWritableStream(dup, {
        metadata: {
          contentType: 'application/json',
        },
        makeAuthenticatedRequest(request) {
          assert.strictEqual(request.method, req.method);
          assert.deepStrictEqual(request.qs, req.qs);
          assert.strictEqual(request.uri, req.uri);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mp = request.multipart as any[];
          assert.strictEqual(mp[1]['Content-Type'], 'application/json');

          done();
        },

        request: req,
      });
    });

    it('should emit an error', done => {
      const error = new Error('Error.');

      const ws = duplexify();
      ws.on('error', err => {
        assert.strictEqual(err, error);
        done();
      });

      util.makeWritableStream(ws, {
        makeAuthenticatedRequest(request, opts) {
          opts!.onAuthenticated(error);
        },
      });
    });

    it('should set the writable stream', done => {
      const dup = duplexify();

      dup.setWritable = () => {
        done();
      };

      util.makeWritableStream(dup, {makeAuthenticatedRequest() {}});
    });

    it('dup should emit a progress event with the bytes written', done => {
      let happened = false;

      const dup = duplexify();
      dup.on('progress', () => {
        happened = true;
      });

      util.makeWritableStream(dup, {makeAuthenticatedRequest() {}}, util.noop);
      dup.write(Buffer.from('abcdefghijklmnopqrstuvwxyz'), 'utf-8', util.noop);

      assert.strictEqual(happened, true);
      done();
    });

    it('should emit an error if the request fails', done => {
      const dup = duplexify();
      const fakeStream = new stream.Writable();
      const error = new Error('Error.');
      fakeStream.write = () => false;
      dup.end = () => dup;

      stub('handleResp', (err, res, body, callback) => {
        callback(error);
      });

      requestOverride = (
        reqOpts: DecorateRequestOptions,
        callback: (err: Error) => void
      ) => {
        callback(error);
      };

      requestOverride.defaults = () => requestOverride;

      dup.on('error', err => {
        assert.strictEqual(err, error);
        done();
      });

      util.makeWritableStream(dup, {
        makeAuthenticatedRequest(request, opts) {
          opts.onAuthenticated(null);
        },
      });

      setImmediate(() => {
        fakeStream.emit('complete', {});
      });
    });

    it('should emit the response', done => {
      const dup = duplexify();
      const fakeStream = new stream.Writable();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fakeStream as any).write = () => {};

      stub('handleResp', (err, res, body, callback) => {
        callback();
      });

      requestOverride = (
        reqOpts: DecorateRequestOptions,
        callback: (err: Error | null, res: r.Response) => void
      ) => {
        callback(null, fakeResponse);
      };

      requestOverride.defaults = () => requestOverride;
      const options = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        makeAuthenticatedRequest(request: DecorateRequestOptions, opts: any) {
          opts.onAuthenticated();
        },
      };

      dup.on('response', resp => {
        assert.strictEqual(resp, fakeResponse);
        done();
      });

      util.makeWritableStream(dup, options, util.noop);
    });

    it('should pass back the response data to the callback', done => {
      const dup = duplexify();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fakeStream: any = new stream.Writable();
      const fakeResponse = {};

      fakeStream.write = () => {};

      stub('handleResp', (err, res, body, callback) => {
        callback(null, fakeResponse);
      });

      requestOverride = (
        reqOpts: DecorateRequestOptions,
        callback: () => void
      ) => {
        callback();
      };
      requestOverride.defaults = () => {
        return requestOverride;
      };

      const options = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        makeAuthenticatedRequest(request: DecorateRequestOptions, opts: any) {
          opts.onAuthenticated();
        },
      };

      util.makeWritableStream(dup, options, (data: {}) => {
        assert.strictEqual(data, fakeResponse);
        done();
      });

      setImmediate(() => {
        fakeStream.emit('complete', {});
      });
    });
  });

  describe('makeAuthenticatedRequestFactory', () => {
    const AUTH_CLIENT_PROJECT_ID = 'authclient-project-id';
    const authClient = {
      getCredentials() {},
      getProjectId: () => Promise.resolve(AUTH_CLIENT_PROJECT_ID),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    it('should create an authClient', done => {
      const config = {test: true} as MakeAuthenticatedRequestFactoryConfig;

      sandbox
        .stub(fakeGoogleAuth, 'GoogleAuth')
        .callsFake((config_: GoogleAuthOptions) => {
          assert.deepStrictEqual(config_, {...config, authClient: undefined});
          setImmediate(done);
          return authClient;
        });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should pass an `AuthClient` to `GoogleAuth` when provided', done => {
      const customAuthClient = new fakeGoogleAuth.AuthClient();

      const config: MakeAuthenticatedRequestFactoryConfig = {
        authClient: customAuthClient,
      };

      sandbox
        .stub(fakeGoogleAuth, 'GoogleAuth')
        .callsFake((config_: GoogleAuthOptions) => {
          assert.deepStrictEqual(config_, config);
          setImmediate(done);
          return authClient;
        });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should not pass projectId token to google-auth-library', done => {
      const config = {projectId: DEFAULT_PROJECT_ID_TOKEN};

      sandbox.stub(fakeGoogleAuth, 'GoogleAuth').callsFake(config_ => {
        assert.strictEqual(config_.projectId, undefined);
        setImmediate(done);
        return authClient;
      });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should not remove projectId from config object', done => {
      const config = {projectId: DEFAULT_PROJECT_ID_TOKEN};

      sandbox.stub(fakeGoogleAuth, 'GoogleAuth').callsFake(() => {
        assert.strictEqual(config.projectId, DEFAULT_PROJECT_ID_TOKEN);
        setImmediate(done);
        return authClient;
      });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should return a function', () => {
      assert.strictEqual(
        typeof util.makeAuthenticatedRequestFactory({}),
        'function'
      );
    });

    it('should return a getCredentials method', done => {
      function getCredentials() {
        done();
      }

      sandbox.stub(fakeGoogleAuth, 'GoogleAuth').callsFake(() => {
        return {getCredentials};
      });

      const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory({});
      makeAuthenticatedRequest.getCredentials(util.noop);
    });

    it('should return the authClient', () => {
      const authClient = {getCredentials() {}};
      sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
      const mar = util.makeAuthenticatedRequestFactory({});
      assert.strictEqual(mar.authClient, authClient);
    });

    describe('customEndpoint (no authentication attempted)', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let makeAuthenticatedRequest: any;
      const config = {customEndpoint: true};

      beforeEach(() => {
        sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
        makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(config);
      });

      it('should decorate the request', done => {
        const decoratedRequest = {};
        stub('decorateRequest', reqOpts_ => {
          assert.strictEqual(reqOpts_, fakeReqOpts);
          return decoratedRequest;
        });

        makeAuthenticatedRequest(fakeReqOpts, {
          onAuthenticated(
            err: Error,
            authenticatedReqOpts: DecorateRequestOptions
          ) {
            assert.ifError(err);
            assert.strictEqual(authenticatedReqOpts, decoratedRequest);
            done();
          },
        });
      });

      it('should return an error while decorating', done => {
        const error = new Error('Error.');
        stub('decorateRequest', () => {
          throw error;
        });
        makeAuthenticatedRequest(fakeReqOpts, {
          onAuthenticated(err: Error) {
            assert.strictEqual(err, error);
            done();
          },
        });
      });

      it('should pass options back to callback', done => {
        const reqOpts = {a: 'b', c: 'd'};
        makeAuthenticatedRequest(reqOpts, {
          onAuthenticated(
            err: Error,
            authenticatedReqOpts: DecorateRequestOptions
          ) {
            assert.ifError(err);
            assert.deepStrictEqual(reqOpts, authenticatedReqOpts);
            done();
          },
        });
      });

      it('should not authenticate requests with a custom API', done => {
        const reqOpts = {a: 'b', c: 'd'};

        stub('makeRequest', rOpts => {
          assert.deepStrictEqual(rOpts, reqOpts);
          done();
        });

        makeAuthenticatedRequest(reqOpts, assert.ifError);
      });
    });

    describe('customEndpoint (authentication attempted)', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let makeAuthenticatedRequest: any;
      const config = {customEndpoint: true, useAuthWithCustomEndpoint: true};

      beforeEach(() => {
        sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
        makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(config);
      });

      it('should authenticate requests with a custom API', done => {
        const reqOpts = {a: 'b', c: 'd'};

        stub('makeRequest', rOpts => {
          assert.deepStrictEqual(rOpts, reqOpts);
          done();
        });

        authClient.authorizeRequest = async (opts: {}) => {
          assert.strictEqual(opts, reqOpts);
          done();
        };

        makeAuthenticatedRequest(reqOpts, assert.ifError);
      });
    });

    describe('authentication', () => {
      it('should pass correct args to authorizeRequest', done => {
        const fake = extend(true, authClient, {
          authorizeRequest: async (rOpts: {}) => {
            assert.deepStrictEqual(rOpts, fakeReqOpts);
            setImmediate(done);
            return rOpts;
          },
        });
        retryRequestOverride = () => {
          return new stream.PassThrough();
        };
        sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(fake);
        const mar = util.makeAuthenticatedRequestFactory({});
        mar(fakeReqOpts);
      });

      it('should return a stream if callback is missing', () => {
        sandbox.stub(fakeGoogleAuth, 'GoogleAuth').callsFake(() => {
          return extend(true, authClient, {
            authorizeRequest: async (rOpts: {}) => {
              return rOpts;
            },
          });
        });
        retryRequestOverride = () => {
          return new stream.PassThrough();
        };
        const mar = util.makeAuthenticatedRequestFactory({});
        const s = mar(fakeReqOpts);
        assert(s instanceof stream.Stream);
      });

      describe('projectId', () => {
        const reqOpts = {} as DecorateRequestOptions;

        it('should default to authClient projectId', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          stub('decorateRequest', (reqOpts, projectId) => {
            assert.strictEqual(projectId, AUTH_CLIENT_PROJECT_ID);
            setImmediate(done);
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {customEndpoint: true}
          );

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: assert.ifError,
          });
        });

        it('should prefer user-provided projectId', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);

          const config = {
            customEndpoint: true,
            projectId: 'user-provided-project-id',
          };

          stub('decorateRequest', (reqOpts, projectId) => {
            assert.strictEqual(projectId, config.projectId);
            setImmediate(done);
          });

          const makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory(config);

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: assert.ifError,
          });
        });

        it('should use default `projectId` and not call `authClient#getProjectId` when !`projectIdRequired`', done => {
          const getProjectIdSpy = sandbox.spy(authClient, 'getProjectId');

          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);

          const config = {
            customEndpoint: true,
            projectIdRequired: false,
          };

          stub('decorateRequest', (reqOpts, projectId) => {
            assert.strictEqual(projectId, DEFAULT_PROJECT_ID_TOKEN);
          });

          const makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory(config);

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: e => {
              assert.ifError(e);
              assert(getProjectIdSpy.notCalled);
              done(e);
            },
          });
        });

        it('should fallback to checking for a `projectId` on when missing a `projectId` when !`projectIdRequired`', done => {
          const getProjectIdSpy = sandbox.spy(authClient, 'getProjectId');

          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);

          const config = {
            customEndpoint: true,
            projectIdRequired: false,
          };

          const decorateRequestStub = sandbox.stub(util, 'decorateRequest');

          decorateRequestStub.onFirstCall().callsFake(() => {
            throw new MissingProjectIdError();
          });

          decorateRequestStub.onSecondCall().callsFake((reqOpts, projectId) => {
            assert.strictEqual(projectId, AUTH_CLIENT_PROJECT_ID);
            return reqOpts;
          });

          const makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory(config);

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: e => {
              assert.ifError(e);
              assert(getProjectIdSpy.calledOnce);
              done(e);
            },
          });
        });
      });

      describe('authentication errors', () => {
        const error = new Error('🤮');

        beforeEach(() => {
          authClient.authorizeRequest = async () => {
            throw error;
          };
        });

        it('should attempt request anyway', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {}
          );

          const correctReqOpts = {} as DecorateRequestOptions;
          const incorrectReqOpts = {} as DecorateRequestOptions;

          authClient.authorizeRequest = async () => {
            throw new Error('Could not load the default credentials');
          };

          makeAuthenticatedRequest(correctReqOpts, {
            onAuthenticated(err, reqOpts) {
              assert.ifError(err);
              assert.strictEqual(reqOpts, correctReqOpts);
              assert.notStrictEqual(reqOpts, incorrectReqOpts);
              done();
            },
          });
        });

        it('should block 401 API errors', done => {
          const authClientError = new Error(
            'Could not load the default credentials'
          );
          authClient.authorizeRequest = async () => {
            throw authClientError;
          };
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);

          const makeRequestArg1 = new Error('API 401 Error.') as ApiError;
          makeRequestArg1.code = 401;
          const makeRequestArg2 = {};
          const makeRequestArg3 = {};
          stub('makeRequest', (authenticatedReqOpts, cfg, callback) => {
            callback(makeRequestArg1, makeRequestArg2, makeRequestArg3);
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {}
          );
          makeAuthenticatedRequest(
            {} as DecorateRequestOptions,
            (arg1, arg2, arg3) => {
              assert.strictEqual(arg1, authClientError);
              assert.strictEqual(arg2, makeRequestArg2);
              assert.strictEqual(arg3, makeRequestArg3);
              done();
            }
          );
        });

        it('should not block 401 errors if auth client succeeds', done => {
          authClient.authorizeRequest = async () => {
            return {};
          };
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);

          const makeRequestArg1 = new Error('API 401 Error.') as ApiError;
          makeRequestArg1.code = 401;
          const makeRequestArg2 = {};
          const makeRequestArg3 = {};
          stub('makeRequest', (authenticatedReqOpts, cfg, callback) => {
            callback(makeRequestArg1, makeRequestArg2, makeRequestArg3);
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {}
          );
          makeAuthenticatedRequest(
            {} as DecorateRequestOptions,
            (arg1, arg2, arg3) => {
              assert.strictEqual(arg1, makeRequestArg1);
              assert.strictEqual(arg2, makeRequestArg2);
              assert.strictEqual(arg3, makeRequestArg3);
              done();
            }
          );
        });

        it('should block decorateRequest error', done => {
          const decorateRequestError = new Error('Error.');
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          stub('decorateRequest', () => {
            throw decorateRequestError;
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {}
          );
          makeAuthenticatedRequest(fakeReqOpts, {
            onAuthenticated(err) {
              assert.notStrictEqual(err, decorateRequestError);
              assert.strictEqual(err, error);
              done();
            },
          });
        });

        it('should invoke the callback with error', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          const mar = util.makeAuthenticatedRequestFactory({});
          mar(fakeReqOpts, err => {
            assert.strictEqual(err, error);
            done();
          });
        });

        it('should exec onAuthenticated callback with error', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          const mar = util.makeAuthenticatedRequestFactory({});
          mar(fakeReqOpts, {
            onAuthenticated(err) {
              assert.strictEqual(err, error);
              done();
            },
          });
        });

        it('should emit an error and end the stream', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          const mar = util.makeAuthenticatedRequestFactory({});
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const stream = mar(fakeReqOpts) as any;
          stream.on('error', (err: Error) => {
            assert.strictEqual(err, error);
            setImmediate(() => {
              assert.strictEqual(stream.destroyed, true);
              done();
            });
          });
        });
      });

      describe('authentication success', () => {
        const reqOpts = fakeReqOpts;
        beforeEach(() => {
          authClient.authorizeRequest = async () => reqOpts;
        });

        it('should return authenticated request to callback', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          stub('decorateRequest', reqOpts_ => {
            assert.deepStrictEqual(reqOpts_, reqOpts);
            return reqOpts;
          });

          const mar = util.makeAuthenticatedRequestFactory({});
          mar(reqOpts, {
            onAuthenticated(err, authenticatedReqOpts) {
              assert.strictEqual(authenticatedReqOpts, reqOpts);
              done();
            },
          });
        });

        it('should make request with correct options', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          const config = {keyFile: 'foo'};
          stub('decorateRequest', reqOpts_ => {
            assert.deepStrictEqual(reqOpts_, reqOpts);
            return reqOpts;
          });
          stub('makeRequest', (authenticatedReqOpts, cfg, cb) => {
            assert.deepStrictEqual(authenticatedReqOpts, reqOpts);
            assert.deepStrictEqual(cfg, config);
            cb();
          });
          const mar = util.makeAuthenticatedRequestFactory(config);
          mar(reqOpts, done);
        });

        it('should return abort() from the active request', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          const retryRequest = {
            abort: done,
          };
          sandbox.stub(util, 'makeRequest').returns(retryRequest);
          const mar = util.makeAuthenticatedRequestFactory({});
          const req = mar(reqOpts, assert.ifError) as Abortable;
          req.abort();
        });

        it('should only abort() once', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          const retryRequest = {
            abort: done, // Will throw if called more than once.
          };
          stub('makeRequest', () => {
            return retryRequest;
          });

          const mar = util.makeAuthenticatedRequestFactory({});
          const authenticatedRequest = mar(
            reqOpts,
            assert.ifError
          ) as Abortable;

          authenticatedRequest.abort(); // done()
          authenticatedRequest.abort(); // done()
        });

        it('should provide stream to makeRequest', done => {
          sandbox.stub(fakeGoogleAuth, 'GoogleAuth').returns(authClient);
          stub('makeRequest', (authenticatedReqOpts, cfg) => {
            setImmediate(() => {
              assert.strictEqual(cfg.stream, stream);
              done();
            });
          });
          const mar = util.makeAuthenticatedRequestFactory({});
          const stream = mar(reqOpts);
        });
      });
    });
  });

  describe('shouldRetryRequest', () => {
    it('should return false if there is no error', () => {
      assert.strictEqual(util.shouldRetryRequest(), false);
    });

    it('should return false from generic error', () => {
      const error = new ApiError('Generic error with no code');
      assert.strictEqual(util.shouldRetryRequest(error), false);
    });

    it('should return true with error code 408', () => {
      const error = new ApiError('408');
      error.code = 408;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 429', () => {
      const error = new ApiError('429');
      error.code = 429;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 500', () => {
      const error = new ApiError('500');
      error.code = 500;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 502', () => {
      const error = new ApiError('502');
      error.code = 502;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 503', () => {
      const error = new ApiError('503');
      error.code = 503;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 504', () => {
      const error = new ApiError('504');
      error.code = 504;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should detect rateLimitExceeded reason', () => {
      const rateLimitError = new ApiError('Rate limit error without code.');
      rateLimitError.errors = [{reason: 'rateLimitExceeded'}];
      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });

    it('should detect userRateLimitExceeded reason', () => {
      const rateLimitError = new ApiError('Rate limit error without code.');
      rateLimitError.errors = [{reason: 'userRateLimitExceeded'}];
      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });

    it('should retry on EAI_AGAIN error code', () => {
      const eaiAgainError = new ApiError('EAI_AGAIN');
      eaiAgainError.errors = [
        {reason: 'getaddrinfo EAI_AGAIN pubsub.googleapis.com'},
      ];
      assert.strictEqual(util.shouldRetryRequest(eaiAgainError), true);
    });
  });

  describe('makeRequest', () => {
    const reqOpts = {
      method: 'GET',
    } as DecorateRequestOptions;

    function testDefaultRetryRequestConfig(done: () => void) {
      return (reqOpts_: DecorateRequestOptions, config: MakeRequestConfig) => {
        assert.strictEqual(reqOpts_, reqOpts);
        assert.strictEqual(config.retries, 3);

        const error = new Error('Error.');
        stub('parseHttpRespMessage', () => {
          return {err: error};
        });
        stub('shouldRetryRequest', err => {
          assert.strictEqual(err, error);
          done();
        });

        config.shouldRetryFn!();
      };
    }
    const errorMessage = 'Error.';
    const customRetryRequestFunctionConfig = {
      retryOptions: {
        retryableErrorFn: function (err: ApiError) {
          return err.message === errorMessage;
        },
      },
    };
    function testCustomFunctionRetryRequestConfig(done: () => void) {
      return (reqOpts_: DecorateRequestOptions, config: MakeRequestConfig) => {
        assert.strictEqual(reqOpts_, reqOpts);
        assert.strictEqual(config.retries, 3);
        extend({}, config, customRetryRequestFunctionConfig);

        const error = new Error(errorMessage);
        stub('parseHttpRespMessage', () => {
          return {err: error};
        });
        stub('shouldRetryRequest', err => {
          assert.strictEqual(err, error);
          done();
        });

        assert.strictEqual(config.shouldRetryFn!(), true);
        done();
      };
    }

    const noRetryRequestConfig = {autoRetry: false};
    function testNoRetryRequestConfig(done: () => void) {
      return (
        reqOpts: DecorateRequestOptions,
        config: retryRequest.Options
      ) => {
        assert.strictEqual(config.retries, 0);
        done();
      };
    }

    const retryOptionsConfig = {
      retryOptions: {
        autoRetry: false,
        maxRetries: 7,
        retryDelayMultiplier: 3,
        totalTimeout: 60,
        maxRetryDelay: 640,
      },
    };
    function testRetryOptions(done: () => void) {
      return (
        reqOpts: DecorateRequestOptions,
        config: retryRequest.Options
      ) => {
        assert.strictEqual(
          config.retries,
          0 //autoRetry was set to false, so shouldn't retry
        );
        assert.strictEqual(
          config.noResponseRetries,
          0 //autoRetry was set to false, so shouldn't retry
        );
        assert.strictEqual(
          config.retryDelayMultiplier,
          retryOptionsConfig.retryOptions.retryDelayMultiplier
        );
        assert.strictEqual(
          config.totalTimeout,
          retryOptionsConfig.retryOptions.totalTimeout
        );
        assert.strictEqual(
          config.maxRetryDelay,
          retryOptionsConfig.retryOptions.maxRetryDelay
        );
        done();
      };
    }

    const customRetryRequestConfig = {maxRetries: 10};
    function testCustomRetryRequestConfig(done: () => void) {
      return (reqOpts: DecorateRequestOptions, config: MakeRequestConfig) => {
        assert.strictEqual(config.retries, customRetryRequestConfig.maxRetries);
        done();
      };
    }

    describe('stream mode', () => {
      it('should forward the specified events to the stream', done => {
        const requestStream = duplexify();
        const userStream = duplexify();

        const error = new Error('Error.');
        const response = {};
        const complete = {};

        userStream
          .on('error', error_ => {
            assert.strictEqual(error_, error);
            requestStream.emit('response', response);
          })
          .on('response', response_ => {
            assert.strictEqual(response_, response);
            requestStream.emit('complete', complete);
          })
          .on('complete', complete_ => {
            assert.strictEqual(complete_, complete);
            done();
          });

        retryRequestOverride = () => {
          setImmediate(() => {
            requestStream.emit('error', error);
          });

          return requestStream;
        };

        util.makeRequest(reqOpts, {stream: userStream}, util.noop);
      });

      describe('GET requests', () => {
        it('should use retryRequest', done => {
          const userStream = duplexify();
          retryRequestOverride = (reqOpts_: DecorateRequestOptions) => {
            assert.strictEqual(reqOpts_, reqOpts);
            setImmediate(done);
            return new stream.Stream();
          };
          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
        });

        it('should set the readable stream', done => {
          const userStream = duplexify();
          const retryRequestStream = new stream.Stream();
          retryRequestOverride = () => {
            return retryRequestStream;
          };
          userStream.setReadable = stream => {
            assert.strictEqual(stream, retryRequestStream);
            done();
          };
          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
        });

        it('should expose the abort method from retryRequest', done => {
          const userStream = duplexify() as Duplexify & Abortable;

          retryRequestOverride = () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const requestStream: any = new stream.Stream();
            requestStream.abort = done;
            return requestStream;
          };

          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
          userStream.abort();
        });
      });

      describe('non-GET requests', () => {
        it('should not use retryRequest', done => {
          const userStream = duplexify();
          const reqOpts = {
            method: 'POST',
          } as DecorateRequestOptions;

          retryRequestOverride = done; // will throw.
          requestOverride = (reqOpts_: DecorateRequestOptions) => {
            assert.strictEqual(reqOpts_, reqOpts);
            setImmediate(done);
            return userStream;
          };
          requestOverride.defaults = () => requestOverride;
          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
        });

        it('should set the writable stream', done => {
          const userStream = duplexify();
          const requestStream = new stream.Stream();
          requestOverride = () => requestStream;
          requestOverride.defaults = () => requestOverride;
          userStream.setWritable = stream => {
            assert.strictEqual(stream, requestStream);
            done();
          };
          util.makeRequest(
            {method: 'POST'} as DecorateRequestOptions,
            {stream: userStream},
            util.noop
          );
        });

        it('should expose the abort method from request', done => {
          const userStream = duplexify() as Duplexify & Abortable;

          requestOverride = Object.assign(
            () => {
              const requestStream = duplexify() as Duplexify & Abortable;
              requestStream.abort = done;
              return requestStream;
            },
            {defaults: () => requestOverride}
          );

          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
          userStream.abort();
        });
      });
    });

    describe('callback mode', () => {
      it('should pass the default options to retryRequest', done => {
        retryRequestOverride = testDefaultRetryRequestConfig(done);
        util.makeRequest(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          reqOpts,
          {},
          assert.ifError
        );
      });

      it('should allow setting a custom retry function', done => {
        retryRequestOverride = testCustomFunctionRetryRequestConfig(done);
        util.makeRequest(
          reqOpts,
          customRetryRequestFunctionConfig,
          assert.ifError
        );
      });

      it('should allow turning off retries to retryRequest', done => {
        retryRequestOverride = testNoRetryRequestConfig(done);
        util.makeRequest(reqOpts, noRetryRequestConfig, assert.ifError);
      });

      it('should override number of retries to retryRequest', done => {
        retryRequestOverride = testCustomRetryRequestConfig(done);
        util.makeRequest(reqOpts, customRetryRequestConfig, assert.ifError);
      });

      it('should use retryOptions if provided', done => {
        retryRequestOverride = testRetryOptions(done);
        util.makeRequest(reqOpts, retryOptionsConfig, assert.ifError);
      });

      it('should allow request options to control retry setting', done => {
        retryRequestOverride = testCustomRetryRequestConfig(done);
        const reqOptsWithRetrySettings = extend(
          {},
          reqOpts,
          customRetryRequestConfig
        );
        util.makeRequest(
          reqOptsWithRetrySettings,
          noRetryRequestConfig,
          assert.ifError
        );
      });

      it('should return the instance of retryRequest', () => {
        const requestInstance = {};
        retryRequestOverride = () => {
          return requestInstance;
        };
        const res = util.makeRequest(reqOpts, {}, assert.ifError);
        assert.strictEqual(res, requestInstance);
      });

      it('should let handleResp handle the response', done => {
        const error = new Error('Error.');
        const body = fakeResponse.body;

        retryRequestOverride = (
          rOpts: DecorateRequestOptions,
          opts: MakeRequestConfig,
          callback: r.RequestCallback
        ) => {
          callback(error, fakeResponse, body);
        };

        stub('handleResp', (err, resp, body_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(resp, fakeResponse);
          assert.strictEqual(body_, body);
          done();
        });

        util.makeRequest(fakeReqOpts, {}, assert.ifError);
      });
    });
  });

  describe('decorateRequest', () => {
    const projectId = 'not-a-project-id';
    it('should delete qs.autoPaginate', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          autoPaginate: true,
        } as DecorateRequestOptions,
        projectId
      );

      assert.strictEqual(decoratedReqOpts.autoPaginate, undefined);
    });

    it('should delete qs.autoPaginateVal', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          autoPaginateVal: true,
        } as DecorateRequestOptions,
        projectId
      );

      assert.strictEqual(decoratedReqOpts.autoPaginateVal, undefined);
    });

    it('should delete objectMode', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          objectMode: true,
        } as DecorateRequestOptions,
        projectId
      );

      assert.strictEqual(decoratedReqOpts.objectMode, undefined);
    });

    it('should delete qs.autoPaginate', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          qs: {
            autoPaginate: true,
          },
        } as DecorateRequestOptions,
        projectId
      );

      assert.strictEqual(decoratedReqOpts.qs.autoPaginate, undefined);
    });

    it('should delete qs.autoPaginateVal', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          qs: {
            autoPaginateVal: true,
          },
        } as DecorateRequestOptions,
        projectId
      );

      assert.strictEqual(decoratedReqOpts.qs.autoPaginateVal, undefined);
    });

    it('should delete json.autoPaginate', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          json: {
            autoPaginate: true,
          },
        } as DecorateRequestOptions,
        projectId
      );

      assert.strictEqual(decoratedReqOpts.json.autoPaginate, undefined);
    });

    it('should delete json.autoPaginateVal', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          json: {
            autoPaginateVal: true,
          },
        } as DecorateRequestOptions,
        projectId
      );

      assert.strictEqual(decoratedReqOpts.json.autoPaginateVal, undefined);
    });

    it('should replace project ID tokens for qs object', () => {
      const projectId = 'project-id';
      const reqOpts = {
        uri: 'http://',
        qs: {},
      };
      const decoratedQs = {};

      replaceProjectIdTokenOverride = (qs: {}, projectId_: string) => {
        if (qs === reqOpts.uri) {
          return;
        }
        assert.deepStrictEqual(qs, reqOpts.qs);
        assert.strictEqual(projectId_, projectId);
        return decoratedQs;
      };

      const decoratedRequest = util.decorateRequest(reqOpts, projectId);
      assert.deepStrictEqual(decoratedRequest.qs, decoratedQs);
    });

    it('should replace project ID tokens for multipart array', () => {
      const projectId = 'project-id';
      const reqOpts = {
        uri: 'http://',
        multipart: [
          {
            'Content-Type': '...',
            body: '...',
          },
        ],
      };
      const decoratedPart = {};

      replaceProjectIdTokenOverride = (part: {}, projectId_: string) => {
        if (part === reqOpts.uri) {
          return;
        }
        assert.deepStrictEqual(part, reqOpts.multipart[0]);
        assert.strictEqual(projectId_, projectId);
        return decoratedPart;
      };

      const decoratedRequest = util.decorateRequest(reqOpts, projectId);
      assert.deepStrictEqual(decoratedRequest.multipart, [decoratedPart]);
    });

    it('should replace project ID tokens for json object', () => {
      const projectId = 'project-id';
      const reqOpts = {
        uri: 'http://',
        json: {},
      };
      const decoratedJson = {};

      replaceProjectIdTokenOverride = (json: {}, projectId_: string) => {
        if (json === reqOpts.uri) {
          return;
        }
        assert.strictEqual(reqOpts.json, json);
        assert.strictEqual(projectId_, projectId);
        return decoratedJson;
      };

      const decoratedRequest = util.decorateRequest(reqOpts, projectId);
      assert.deepStrictEqual(decoratedRequest.json, decoratedJson);
    });

    it('should decorate the request', () => {
      const projectId = 'project-id';
      const reqOpts = {
        uri: 'http://',
      };
      const decoratedUri = 'http://decorated';

      replaceProjectIdTokenOverride = (uri: string, projectId_: string) => {
        assert.strictEqual(uri, reqOpts.uri);
        assert.strictEqual(projectId_, projectId);
        return decoratedUri;
      };

      assert.deepStrictEqual(util.decorateRequest(reqOpts, projectId), {
        uri: decoratedUri,
      });
    });
  });

  describe('isCustomType', () => {
    class PubSub {}

    class MiddleLayer {
      parent = new PubSub();
    }

    class Subscription {
      parent = new MiddleLayer();
    }

    const pubsub = new PubSub();
    const subscription = new Subscription();

    describe('Service objects', () => {
      it('should match by constructor name', () => {
        assert(util.isCustomType(pubsub, 'pubsub'));
      });

      it('should support any casing', () => {
        assert(util.isCustomType(pubsub, 'PubSub'));
      });

      it('should not match if the wrong Service', () => {
        assert(!util.isCustomType(subscription, 'BigQuery'));
      });
    });

    describe('ServiceObject objects', () => {
      it('should match by constructor names', () => {
        assert(util.isCustomType(subscription, 'pubsub'));
        assert(util.isCustomType(subscription, 'pubsub/subscription'));

        assert(util.isCustomType(subscription, 'middlelayer'));
        assert(util.isCustomType(subscription, 'middlelayer/subscription'));
      });

      it('should support any casing', () => {
        assert(util.isCustomType(subscription, 'PubSub/Subscription'));
      });

      it('should not match if the wrong ServiceObject', () => {
        assert(!util.isCustomType(subscription, 'pubsub/topic'));
      });
    });
  });

  describe('getUserAgentFromPackageJson', () => {
    it('should format a User Agent string from a package.json', () => {
      const userAgent = util.getUserAgentFromPackageJson({
        name: '@google-cloud/storage',
        version: '0.1.0',
      });

      assert.strictEqual(userAgent, 'gcloud-node-storage/0.1.0');
    });
  });

  describe('maybeOptionsOrCallback', () => {
    it('should allow passing just a callback', () => {
      const optionsOrCallback = () => {};
      const [opts, cb] = util.maybeOptionsOrCallback(optionsOrCallback);
      assert.strictEqual(optionsOrCallback, cb);
      assert.deepStrictEqual(opts, {});
    });

    it('should allow passing both opts and callback', () => {
      const optionsOrCallback = {};
      const callback = () => {};
      const [opts, cb] = util.maybeOptionsOrCallback(
        optionsOrCallback,
        callback
      );
      assert.strictEqual(opts, optionsOrCallback);
      assert.strictEqual(cb, callback);
    });
  });
});
