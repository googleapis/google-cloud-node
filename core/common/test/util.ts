// Copyright 2014 Google LLC
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

import * as assert from 'assert';
import {
  MissingProjectIdError,
  replaceProjectIdToken,
} from '@google-cloud/projectify';
import * as extend from 'extend';
import {
  AuthClient,
  GoogleAuth,
  GoogleAuthOptions,
  OAuth2Client,
} from 'google-auth-library';
import * as nock from 'nock';
import * as r from 'teeny-request';
import * as retryRequest from 'retry-request';
import * as stream from 'stream';
import {teenyRequest} from 'teeny-request';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockRequestOverride: any;
function mockFakeRequest(...args: any[]) {
  const actualTeenyRequest = jest.requireActual('teeny-request');
  return (mockRequestOverride || actualTeenyRequest.teenyRequest).apply(null, args);
}

mockFakeRequest.defaults = () => {
  return mockFakeRequest;
};

let mockRetryRequestOverride: Function | null;
function mockFakeRetryRequest(...args: any[]) {
  const actualRetryRequest = jest.requireActual('retry-request');
  return (mockRetryRequestOverride || actualRetryRequest).apply(null, args);
}

let mockReplaceProjectIdTokenOverride: Function | null;
function mockFakeReplaceProjectIdToken(...args: any[]) {
  const actualProjectify = jest.requireActual('@google-cloud/projectify');
  return (mockReplaceProjectIdTokenOverride || actualProjectify.replaceProjectIdToken).apply(
    null,
    args,
  );
}

const mockFakeGoogleAuth = {
  AuthClient: class CustomAuthClient extends (jest.requireActual('google-auth-library').AuthClient) {
    async getAccessToken() {
      return {token: '', res: undefined};
    }

    async getRequestHeaders() {
      return {} as Headers;
    }

    request = jest.requireActual('google-auth-library').OAuth2Client.prototype.request.bind(this);
  },
  GoogleAuth: class {
    constructor(config?: GoogleAuthOptions) {
      const actualAuth = jest.requireActual('google-auth-library');
      return new actualAuth.GoogleAuth(config);
    }
  },
};

jest.mock('google-auth-library', () => mockFakeGoogleAuth);
jest.mock('retry-request', () => {
  return (a: any, b: any, c: any, d: any) => mockFakeRetryRequest(a, b, c, d);
});
jest.mock('teeny-request', () => {
  const fakeReq = (a: any, b: any, c: any, d: any) => mockFakeRequest(a, b, c, d);
  fakeReq.defaults = () => fakeReq;
  return {
    teenyRequest: fakeReq,
  };
});
jest.mock('@google-cloud/projectify', () => {
  const actualProjectify = jest.requireActual('@google-cloud/projectify');
  return {
    ...actualProjectify,
    replaceProjectIdToken: (a: any, b: any, c: any) => mockFakeReplaceProjectIdToken(a, b, c),
  };
});

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
  ParsedHttpResponseBody,
  Util,
  util as actualUtil,
} from '../src/util';
import {DEFAULT_PROJECT_ID_TOKEN} from '../src/service';

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

describe('common/util', () => {
  let util: Util & {[index: string]: Function};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function stub(method: any, meth: (...args: any[]) => any) {
    return jest.spyOn(util as any, method).mockImplementation(meth);
  }

  function createExpectedErrorMessage(errors: string[]): string {
    if (errors.length < 2) {
      return errors[0];
    }

    errors = errors.map((error, i) => `    ${i + 1}. ${error}`);
    errors.unshift(
      'Multiple errors occurred during the request. Please see the `errors` array for complete details.\n',
    );
    errors.push('\n');

    return errors.join('\n');
  }

  beforeAll(() => {
    util = actualUtil as any;
  });

  beforeEach(() => {
    mockRequestOverride = null;
    mockRetryRequestOverride = null;
    mockReplaceProjectIdTokenOverride = null;
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('ApiError', () => {
    it('should accept just a message', () => {
      const expectedMessage = 'Hi, I am an error message!';
      const apiError = new ApiError(expectedMessage);

      expect(apiError.message).toBe(expectedMessage);
    });

    it('should use message in stack', () => {
      const expectedMessage = 'Message is in the stack too!';
      const apiError = new ApiError(expectedMessage);
      expect(apiError.stack?.includes(expectedMessage)).toBeTruthy();
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

      jest
        .spyOn(ApiError, 'createMultiErrorMessage')
        .mockReturnValue(fakeMessage);

      const apiError = new ApiError(error);
      expect(apiError.errors).toBe(error.errors);
      expect(apiError.code).toBe(error.code);
      expect(apiError.response).toBe(error.response);
      expect(apiError.message).toBe(fakeMessage);
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

      jest
        .spyOn(ApiError, 'createMultiErrorMessage')
        .mockReturnValue(fakeMessage);

      const apiError = new ApiError(errorBody);
      expect(apiError.message).toBe(fakeMessage);
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
        expect(multiError).toBe(expectedErrorMessage);
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
        expect(multiError).toBe(expectedErrorMessage);
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
        expect(multiError).toBe(expectedErrorMessage);
      });

      it('should use default message if there are no errors', () => {
        const fakeResponse = {statusCode: 200} as r.Response;
        const expectedErrorMessage = 'A failure occurred during this request.';
        const error = {
          code: 100,
          response: fakeResponse,
        };

        const multiError = ApiError.createMultiErrorMessage(error);
        expect(multiError).toBe(expectedErrorMessage);
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
        expect(multiError).toBe(expectedErrorMessage);
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

      jest
        .spyOn(util.ApiError, 'createMultiErrorMessage')
        .mockReturnValue(fakeMessage);

      const partialFailureError = new util.PartialFailureError(error);

      expect(partialFailureError.errors).toBe(error.errors);
      expect(partialFailureError.name).toBe('PartialFailureError');
      expect(partialFailureError.response).toBe(error.response);
      expect(partialFailureError.message).toBe(fakeMessage);
    });
  });

  describe('handleResp', () => {
    it('should handle errors', done => {
      const error = new Error('Error.');

      util.handleResp(error, fakeResponse, null, err => {
        expect(err).toBe(error);
        done();
      });
    });

    it('uses a no-op callback if none is sent', () => {
      util.handleResp(null, fakeResponse, '');
    });

    it('should parse response', done => {
      stub('parseHttpRespMessage', resp_ => {
        expect(resp_).toEqual(fakeResponse);
        return {
          resp: fakeResponse,
        };
      });

      stub('parseHttpRespBody', body_ => {
        expect(body_).toBe(fakeResponse.body);
        return {
          body: fakeResponse.body,
        };
      });

      util.handleResp(
        fakeError,
        fakeResponse,
        fakeResponse.body,
        (err, body, resp) => {
          expect(err).toEqual(fakeError);
          expect(body).toEqual(fakeResponse.body);
          expect(resp).toEqual(fakeResponse);
          done();
        },
      );
    });

    it('should parse response for error', done => {
      const error = new Error('Error.');

      jest.spyOn(util, 'parseHttpRespMessage').mockImplementation(() => {
        return {err: error} as ParsedHttpRespMessage;
      });

      util.handleResp(null, fakeResponse, {}, err => {
        expect(err).toEqual(error);
        done();
      });
    });

    it('should parse body for error', done => {
      const error = new Error('Error.');

      stub('parseHttpRespBody', () => {
        return {err: error};
      });

      util.handleResp(null, fakeResponse, {}, err => {
        expect(err).toEqual(error);
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
        expect(body.includes(unparseableBody)).toBeTruthy();
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
          expect(err).toBeTruthy();
          const apiError = err! as ApiError;
          expect(apiError.code).toBe(statusCode);

          const response = apiError.response;
          if (!response) {
            assert.fail('there should be a response property on the error');
          } else {
            expect(response.body).toBe(unparseableBody);
          }

          done();
        },
      );
    });
  });

  describe('parseHttpRespMessage', () => {
    it('should build ApiError with non-200 status and message', () => {
      const res = util.parseHttpRespMessage(fakeBadResp);
      const error_ = res.err!;
      expect(error_.code).toBe(fakeBadResp.statusCode);
      expect(error_.message).toBe(fakeBadResp.statusMessage);
      expect(error_.response).toBe(fakeBadResp);
    });

    it('should return the original response message', () => {
      const parsedHttpRespMessage = util.parseHttpRespMessage(fakeBadResp);
      expect(parsedHttpRespMessage.resp).toBe(fakeBadResp);
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
      expect(err.errors).toEqual(apiErr.errors);
      expect(err.code).toBe(apiErr.code);
      expect(err.message).toEqual(expectedErrorMessage);
    });

    it('should try to parse JSON if body is string', () => {
      const httpRespBody = '{ "foo": "bar" }';
      const parsedHttpRespBody = util.parseHttpRespBody(httpRespBody);

      expect(parsedHttpRespBody.body.foo).toBe('bar');
    });

    it('should return the original body', () => {
      const httpRespBody = {};
      const parsedHttpRespBody = util.parseHttpRespBody(httpRespBody);
      expect(parsedHttpRespBody.body).toBe(httpRespBody);
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
          expect(request.method).toBe('POST');
          expect(request.qs.uploadType).toBe('multipart');
          expect(request.timeout).toBe(0);
          expect(request.maxRetries).toBe(0);

          expect(Array.isArray(request.multipart)).toBe(true);

          const mp = request.multipart as r.RequestPart[];

          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (mp[0] as any)['Content-Type'],
            'application/json',
          );
          expect(mp[0].body).toBe(JSON.stringify(metadata));

          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (mp[1] as any)['Content-Type'],
            'application/octet-stream',
          );
          // (is a writable stream:)
          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            typeof (mp[1].body as any)._writableState,
            'object',
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
          expect(request.method).toBe(req.method);
          expect(request.qs).toEqual(req.qs);
          expect(request.uri).toBe(req.uri);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mp = request.multipart as any[];
          expect(mp[1]['Content-Type']).toBe('application/json');

          done();
        },

        request: req,
      });
    });

    it('should emit an error', done => {
      const error = new Error('Error.');

      const ws = duplexify();
      ws.on('error', err => {
        expect(err).toBe(error);
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

      expect(happened).toBe(true);
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

      mockRequestOverride = (
        reqOpts: DecorateRequestOptions,
        callback: (err: Error) => void,
      ) => {
        callback(error);
      };

      mockRequestOverride.defaults = () => mockRequestOverride;

      dup.on('error', err => {
        expect(err).toBe(error);
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

      mockRequestOverride = (
        reqOpts: DecorateRequestOptions,
        callback: (err: Error | null, res: r.Response) => void,
      ) => {
        callback(null, fakeResponse);
      };

      mockRequestOverride.defaults = () => mockRequestOverride;
      const options = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        makeAuthenticatedRequest(request: DecorateRequestOptions, opts: any) {
          opts.onAuthenticated();
        },
      };

      dup.on('response', resp => {
        expect(resp).toBe(fakeResponse);
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

      mockRequestOverride = (
        reqOpts: DecorateRequestOptions,
        callback: () => void,
      ) => {
        callback();
      };
      mockRequestOverride.defaults = () => {
        return mockRequestOverride;
      };

      const options = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        makeAuthenticatedRequest(request: DecorateRequestOptions, opts: any) {
          opts.onAuthenticated();
        },
      };

      util.makeWritableStream(dup, options, (data: {}) => {
        expect(data).toBe(fakeResponse);
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

      jest
        .spyOn(mockFakeGoogleAuth, 'GoogleAuth')
        .mockImplementation((config_?: any) => {
          expect(config_).toEqual({...config, authClient: undefined});
          setImmediate(done);
          return authClient;
        });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should pass an `AuthClient` to `GoogleAuth` when provided', done => {
      const customAuthClient = new mockFakeGoogleAuth.AuthClient() as any;

      const config: MakeAuthenticatedRequestFactoryConfig = {
        authClient: customAuthClient,
      };

      jest
        .spyOn(mockFakeGoogleAuth, 'GoogleAuth')
        .mockImplementation((config_?: any) => {
          expect(config_).toEqual(config);
          setImmediate(done);
          return authClient;
        });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should not pass projectId token to google-auth-library', done => {
      const config = {projectId: DEFAULT_PROJECT_ID_TOKEN};

      jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation((config_?: any) => {
        expect(config_?.projectId).toBe(undefined);
        setImmediate(done);
        return authClient;
      });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should not remove projectId from config object', done => {
      const config = {projectId: DEFAULT_PROJECT_ID_TOKEN};

      jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => {
        expect(config.projectId).toBe(DEFAULT_PROJECT_ID_TOKEN);
        setImmediate(done);
        return authClient;
      });

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should return a function', () => {
      expect(typeof util.makeAuthenticatedRequestFactory({})).toBe('function',);
    });

    it('should return a getCredentials method', done => {
      function getCredentials() {
        done();
      }

      jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => {
        return {getCredentials};
      });

      const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory({});
      makeAuthenticatedRequest.getCredentials(util.noop);
    });

    it('should return the authClient', () => {
      const authClient = {getCredentials() {}};
      jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
      const mar = util.makeAuthenticatedRequestFactory({});
      expect(mar.authClient).toBe(authClient);
    });

    describe('customEndpoint (no authentication attempted)', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let makeAuthenticatedRequest: any;
      const config = {customEndpoint: true};

      beforeEach(() => {
        jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
        makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(config);
      });

      it('should decorate the request', done => {
        const decoratedRequest = {};
        stub('decorateRequest', reqOpts_ => {
          expect(reqOpts_).toBe(fakeReqOpts);
          return decoratedRequest;
        });

        makeAuthenticatedRequest(fakeReqOpts, {
          onAuthenticated(
            err: Error,
            authenticatedReqOpts: DecorateRequestOptions,
          ) {
            expect(err).toBeFalsy();
            expect(authenticatedReqOpts).toBe(decoratedRequest);
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
            expect(err).toBe(error);
            done();
          },
        });
      });

      it('should pass options back to callback', done => {
        const reqOpts = {a: 'b', c: 'd'};
        makeAuthenticatedRequest(reqOpts, {
          onAuthenticated(
            err: Error,
            authenticatedReqOpts: DecorateRequestOptions,
          ) {
            expect(err).toBeFalsy();
            expect(reqOpts).toEqual(authenticatedReqOpts);
            done();
          },
        });
      });

      it('should not authenticate requests with a custom API', done => {
        const reqOpts = {a: 'b', c: 'd'};

        stub('makeRequest', rOpts => {
          expect(rOpts).toEqual(reqOpts);
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
        jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
        makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(config);
      });

      it('should authenticate requests with a custom API', done => {
        const reqOpts = {a: 'b', c: 'd'};

        stub('makeRequest', rOpts => {
          expect(rOpts).toEqual(reqOpts);
          done();
        });

        authClient.authorizeRequest = async (opts: {}) => {
          expect(opts).toBe(reqOpts);
          return opts;
        };

        makeAuthenticatedRequest(reqOpts, assert.ifError);
      });
    });

    describe('authentication', () => {
      it('should pass correct args to authorizeRequest', done => {
        const fake = extend(true, {}, authClient, {
          getProjectId: async () => 'fake-project-id',
          authorizeRequest: async (rOpts: {}) => {
            expect(rOpts).toEqual(fakeReqOpts);
            setImmediate(done);
            return rOpts;
          },
        });
        mockRetryRequestOverride = () => {
          return new stream.PassThrough();
        };
        jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => fake as any);
        const mar = util.makeAuthenticatedRequestFactory({});
        mar(fakeReqOpts, assert.ifError);
      });

      it('should return a stream if callback is missing', () => {
        jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => {
          return extend(true, {}, authClient, {
            getProjectId: async () => 'fake-project-id',
            authorizeRequest: async (rOpts: {}) => {
              return rOpts;
            },
          });
        });
        mockRetryRequestOverride = () => {
          return new stream.PassThrough();
        };
        const mar = util.makeAuthenticatedRequestFactory({});
        const s = mar(fakeReqOpts);
        expect(s instanceof stream.Stream).toBeTruthy();
      });

      describe('projectId', () => {
        const reqOpts = {} as DecorateRequestOptions;

        it('should default to authClient projectId', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          stub('decorateRequest', (reqOpts, projectId) => {
            expect(projectId).toBe(AUTH_CLIENT_PROJECT_ID);
            setImmediate(done);
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {customEndpoint: true},
          );

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: assert.ifError,
          });
        });

        it('should prefer user-provided projectId', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);

          const config = {
            customEndpoint: true,
            projectId: 'user-provided-project-id',
          };

          stub('decorateRequest', (reqOpts, projectId) => {
            expect(projectId).toBe(config.projectId);
            setImmediate(done);
          });

          const makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory(config);

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: assert.ifError,
          });
        });

        it('should use default `projectId` and not call `authClient#getProjectId` when !`projectIdRequired`', done => {
          const getProjectIdSpy = jest.spyOn(authClient, 'getProjectId');

          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);

          const config = {
            customEndpoint: true,
            projectIdRequired: false,
          };

          stub('decorateRequest', (reqOpts, projectId) => {
            expect(projectId).toBe(DEFAULT_PROJECT_ID_TOKEN);
          });

          const makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory(config);

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: e => {
              expect(e).toBeNull();
              expect(getProjectIdSpy).not.toHaveBeenCalled();
              done(e);
            },
          });
        });

        it('should fallback to checking for a `projectId` on when missing a `projectId` when !`projectIdRequired`', done => {
          const getProjectIdSpy = jest.spyOn(authClient, 'getProjectId');

          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);

          const config = {
            customEndpoint: true,
            projectIdRequired: false,
          };

          jest.spyOn(util, 'decorateRequest')
            .mockImplementationOnce(() => {
              throw new MissingProjectIdError();
            })
            .mockImplementationOnce((reqOpts: any, projectId: any) => {
              expect(projectId).toBe(AUTH_CLIENT_PROJECT_ID);
              return reqOpts;
            });

          const makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory(config);

          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: e => {
              expect(e).toBeNull();
              expect(getProjectIdSpy).toHaveBeenCalledTimes(1);
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
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {},
          );

          const correctReqOpts = {} as DecorateRequestOptions;
          const incorrectReqOpts = {} as DecorateRequestOptions;

          authClient.authorizeRequest = async () => {
            throw new Error('Could not load the default credentials');
          };

          makeAuthenticatedRequest(correctReqOpts, {
            onAuthenticated(err, reqOpts) {
              expect(err).toBeFalsy();
              expect(reqOpts).toBe(correctReqOpts);
              assert.notStrictEqual(reqOpts, incorrectReqOpts);
              done();
            },
          });
        });

        it('should block 401 API errors', done => {
          const authClientError = new Error(
            'Could not load the default credentials',
          );
          authClient.authorizeRequest = async () => {
            throw authClientError;
          };
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);

          const makeRequestArg1 = new Error('API 401 Error.') as ApiError;
          makeRequestArg1.code = 401;
          const makeRequestArg2 = {};
          const makeRequestArg3 = {};
          stub('makeRequest', (authenticatedReqOpts, cfg, callback) => {
            callback(makeRequestArg1, makeRequestArg2, makeRequestArg3);
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {},
          );
          makeAuthenticatedRequest(
            {} as DecorateRequestOptions,
            (arg1, arg2, arg3) => {
              expect(arg1).toBe(authClientError);
              expect(arg2).toBe(makeRequestArg2);
              expect(arg3).toBe(makeRequestArg3);
              done();
            },
          );
        });

        it('should not block 401 errors if auth client succeeds', done => {
          authClient.authorizeRequest = async () => {
            return {};
          };
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);

          const makeRequestArg1 = new Error('API 401 Error.') as ApiError;
          makeRequestArg1.code = 401;
          const makeRequestArg2 = {};
          const makeRequestArg3 = {};
          stub('makeRequest', (authenticatedReqOpts, cfg, callback) => {
            callback(makeRequestArg1, makeRequestArg2, makeRequestArg3);
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {},
          );
          makeAuthenticatedRequest(
            {} as DecorateRequestOptions,
            (arg1, arg2, arg3) => {
              expect(arg1).toBe(makeRequestArg1);
              expect(arg2).toBe(makeRequestArg2);
              expect(arg3).toBe(makeRequestArg3);
              done();
            },
          );
        });

        it('should block decorateRequest error', done => {
          const decorateRequestError = new Error('Error.');
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          stub('decorateRequest', () => {
            throw decorateRequestError;
          });

          const makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(
            {},
          );
          makeAuthenticatedRequest(fakeReqOpts, {
            onAuthenticated(err) {
              assert.notStrictEqual(err, decorateRequestError);
              expect(err).toBe(error);
              done();
            },
          });
        });

        it('should invoke the callback with error', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          const mar = util.makeAuthenticatedRequestFactory({});
          mar(fakeReqOpts, err => {
            expect(err).toBe(error);
            done();
          });
        });

        it('should exec onAuthenticated callback with error', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          const mar = util.makeAuthenticatedRequestFactory({});
          mar(fakeReqOpts, {
            onAuthenticated(err) {
              expect(err).toBe(error);
              done();
            },
          });
        });

        it('should emit an error and end the stream', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          const mar = util.makeAuthenticatedRequestFactory({});
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const stream = mar(fakeReqOpts) as any;
          stream.on('error', (err: Error) => {
            expect(err).toBe(error);
            setImmediate(() => {
              expect(stream.destroyed).toBe(true);
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
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          stub('decorateRequest', reqOpts_ => {
            expect(reqOpts_).toEqual(reqOpts);
            return reqOpts;
          });

          const mar = util.makeAuthenticatedRequestFactory({});
          mar(reqOpts, {
            onAuthenticated(err, authenticatedReqOpts) {
              expect(authenticatedReqOpts).toBe(reqOpts);
              done();
            },
          });
        });

        it('should make request with correct options', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          const config = {keyFile: 'foo'};
          stub('decorateRequest', reqOpts_ => {
            expect(reqOpts_).toEqual(reqOpts);
            return reqOpts;
          });
          stub('makeRequest', (authenticatedReqOpts, cfg, cb) => {
            expect(authenticatedReqOpts).toEqual(reqOpts);
            expect(cfg).toEqual(config);
            cb();
          });
          const mar = util.makeAuthenticatedRequestFactory(config);
          mar(reqOpts, done);
        });

        it('should return abort() from the active request', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          const retryRequest = {
            abort: done,
          };
          jest.spyOn(util, 'makeRequest').mockReturnValue(retryRequest);
          const mar = util.makeAuthenticatedRequestFactory({});
          const req = mar(reqOpts, assert.ifError) as Abortable;
          req.abort();
        });

        it('should only abort() once', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          const retryRequest = {
            abort: done, // Will throw if called more than once.
          };
          stub('makeRequest', () => {
            return retryRequest;
          });

          const mar = util.makeAuthenticatedRequestFactory({});
          const authenticatedRequest = mar(
            reqOpts,
            assert.ifError,
          ) as Abortable;

          authenticatedRequest.abort(); // done()
          authenticatedRequest.abort(); // done()
        });

        it('should provide stream to makeRequest', done => {
          jest.spyOn(mockFakeGoogleAuth, 'GoogleAuth').mockImplementation(() => authClient as any);
          stub('makeRequest', (authenticatedReqOpts, cfg) => {
            setImmediate(() => {
              expect(cfg.stream).toBe(stream);
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
      expect(util.shouldRetryRequest()).toBe(false);
    });

    it('should return false from generic error', () => {
      const error = new ApiError('Generic error with no code');
      expect(util.shouldRetryRequest(error)).toBe(false);
    });

    it('should return true with error code 408', () => {
      const error = new ApiError('408');
      error.code = 408;
      expect(util.shouldRetryRequest(error)).toBe(true);
    });

    it('should return true with error code 429', () => {
      const error = new ApiError('429');
      error.code = 429;
      expect(util.shouldRetryRequest(error)).toBe(true);
    });

    it('should return true with error code 500', () => {
      const error = new ApiError('500');
      error.code = 500;
      expect(util.shouldRetryRequest(error)).toBe(true);
    });

    it('should return true with error code 502', () => {
      const error = new ApiError('502');
      error.code = 502;
      expect(util.shouldRetryRequest(error)).toBe(true);
    });

    it('should return true with error code 503', () => {
      const error = new ApiError('503');
      error.code = 503;
      expect(util.shouldRetryRequest(error)).toBe(true);
    });

    it('should return true with error code 504', () => {
      const error = new ApiError('504');
      error.code = 504;
      expect(util.shouldRetryRequest(error)).toBe(true);
    });

    it('should detect rateLimitExceeded reason', () => {
      const rateLimitError = new ApiError('Rate limit error without code.');
      rateLimitError.errors = [{reason: 'rateLimitExceeded'}];
      expect(util.shouldRetryRequest(rateLimitError)).toBe(true);
    });

    it('should detect userRateLimitExceeded reason', () => {
      const rateLimitError = new ApiError('Rate limit error without code.');
      rateLimitError.errors = [{reason: 'userRateLimitExceeded'}];
      expect(util.shouldRetryRequest(rateLimitError)).toBe(true);
    });

    it('should retry on EAI_AGAIN error code', () => {
      const eaiAgainError = new ApiError('EAI_AGAIN');
      eaiAgainError.errors = [
        {reason: 'getaddrinfo EAI_AGAIN pubsub.googleapis.com'},
      ];
      expect(util.shouldRetryRequest(eaiAgainError)).toBe(true);
    });
  });

  describe('makeRequest', () => {
    const reqOpts = {
      method: 'GET',
    } as DecorateRequestOptions;

    function testDefaultRetryRequestConfig(done: () => void) {
      return (reqOpts_: DecorateRequestOptions, config: MakeRequestConfig) => {
        expect(reqOpts_).toBe(reqOpts);
        expect(config.retries).toBe(3);

        const error = new Error('Error.');
        stub('parseHttpRespMessage', () => {
          return {err: error};
        });
        stub('shouldRetryRequest', err => {
          expect(err).toBe(error);
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
        expect(reqOpts_).toBe(reqOpts);
        expect(config.retries).toBe(3);
        extend({}, config, customRetryRequestFunctionConfig);

        const error = new Error(errorMessage);
        stub('parseHttpRespMessage', () => {
          return {err: error};
        });
        stub('shouldRetryRequest', err => {
          expect(err).toBe(error);
          done();
        });

        expect(config.shouldRetryFn!()).toBe(true);
        done();
      };
    }

    const noRetryRequestConfig = {autoRetry: false};
    function testNoRetryRequestConfig(done: () => void) {
      return (
        reqOpts: DecorateRequestOptions,
        config: retryRequest.Options,
      ) => {
        expect(config.retries).toBe(0);
        done();
      };
    }

    const retryOptionsTwoMaxRetries = {
      retryOptions: {
        maxRetries: 7,
      },
      maxRetries: 7,
    };

    const retryOptionsTwoAutoRetry = {
      retryOptions: {
        autoRetry: false,
      },
      autoRetry: false,
    };

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
        config: retryRequest.Options,
      ) => {
        expect(config.retries).toBe(0);
        expect(config.noResponseRetries).toBe(0);
        expect(config.retryDelayMultiplier).toBe(retryOptionsConfig.retryOptions.retryDelayMultiplier);
        expect(config.totalTimeout).toBe(retryOptionsConfig.retryOptions.totalTimeout);
        expect(config.maxRetryDelay).toBe(retryOptionsConfig.retryOptions.maxRetryDelay);
        done();
      };
    }

    const customRetryRequestConfig = {maxRetries: 10};
    function testCustomRetryRequestConfig(done: () => void) {
      return (reqOpts: DecorateRequestOptions, config: MakeRequestConfig) => {
        expect(config.retries).toBe(customRetryRequestConfig.maxRetries);
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
            expect(error_).toBe(error);
            requestStream.emit('response', response);
          })
          .on('response', response_ => {
            expect(response_).toBe(response);
            requestStream.emit('complete', complete);
          })
          .on('complete', complete_ => {
            expect(complete_).toBe(complete);
            done();
          });

        mockRetryRequestOverride = () => {
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
          mockRetryRequestOverride = (reqOpts_: DecorateRequestOptions) => {
            expect(reqOpts_).toBe(reqOpts);
            setImmediate(done);
            return new stream.Stream();
          };
          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
        });

        it('should set the readable stream', done => {
          const userStream = duplexify();
          const retryRequestStream = new stream.Stream();
          mockRetryRequestOverride = () => {
            return retryRequestStream;
          };
          userStream.setReadable = stream => {
            expect(stream).toBe(retryRequestStream);
            done();
          };
          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
        });

        it('should expose the abort method from retryRequest', done => {
          const userStream = duplexify() as Duplexify & Abortable;

          mockRetryRequestOverride = () => {
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

          mockRetryRequestOverride = done; // will throw.
          mockRequestOverride = (reqOpts_: DecorateRequestOptions) => {
            expect(reqOpts_).toBe(reqOpts);
            setImmediate(done);
            return userStream;
          };
          mockRequestOverride.defaults = () => mockRequestOverride;
          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
        });

        it('should set the writable stream', done => {
          const userStream = duplexify();
          const requestStream = new stream.Stream();
          mockRequestOverride = () => requestStream;
          mockRequestOverride.defaults = () => mockRequestOverride;
          userStream.setWritable = stream => {
            expect(stream).toBe(requestStream);
            done();
          };
          util.makeRequest(
            {method: 'POST'} as DecorateRequestOptions,
            {stream: userStream},
            util.noop,
          );
        });

        it('should expose the abort method from request', done => {
          const userStream = duplexify() as Duplexify & Abortable;

          mockRequestOverride = Object.assign(
            () => {
              const requestStream = duplexify() as Duplexify & Abortable;
              requestStream.abort = done;
              return requestStream;
            },
            {defaults: () => mockRequestOverride},
          );

          util.makeRequest(reqOpts, {stream: userStream}, util.noop);
          userStream.abort();
        });
      });
    });

    describe('callback mode', () => {
      it('should pass the default options to retryRequest', done => {
        mockRetryRequestOverride = testDefaultRetryRequestConfig(done);
        util.makeRequest(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          reqOpts,
          {},
          assert.ifError,
        );
      });

      it('should allow setting a custom retry function', done => {
        mockRetryRequestOverride = testCustomFunctionRetryRequestConfig(done);
        util.makeRequest(
          reqOpts,
          customRetryRequestFunctionConfig,
          assert.ifError,
        );
      });

      it('should allow turning off retries to retryRequest', done => {
        mockRetryRequestOverride = testNoRetryRequestConfig(done);
        util.makeRequest(reqOpts, noRetryRequestConfig, assert.ifError);
      });

      it('should override number of retries to retryRequest', done => {
        mockRetryRequestOverride = testCustomRetryRequestConfig(done);
        util.makeRequest(reqOpts, customRetryRequestConfig, assert.ifError);
      });

      it('should use retryOptions if provided', done => {
        mockRetryRequestOverride = testRetryOptions(done);
        util.makeRequest(reqOpts, retryOptionsConfig, assert.ifError);
      });

      it('should throw if autoRetry is specified twice', done => {
        assert.throws(() => {
          util.makeRequest(reqOpts, retryOptionsTwoAutoRetry, util.noop);
        }, /autoRetry is deprecated. Use retryOptions.autoRetry instead\./);
        done();
      });

      it('should throw if maxRetries is specified twice', done => {
        assert.throws(() => {
          util.makeRequest(reqOpts, retryOptionsTwoMaxRetries, util.noop);
        }, /maxRetries is deprecated. Use retryOptions.maxRetries instead\./);
        done();
      });

      it('should allow request options to control retry setting', done => {
        mockRetryRequestOverride = testCustomRetryRequestConfig(done);
        const reqOptsWithRetrySettings = extend(
          {},
          reqOpts,
          customRetryRequestConfig,
        );
        util.makeRequest(
          reqOptsWithRetrySettings,
          noRetryRequestConfig,
          assert.ifError,
        );
      });

      it('should return the instance of retryRequest', () => {
        const requestInstance = {};
        mockRetryRequestOverride = () => {
          return requestInstance;
        };
        const res = util.makeRequest(reqOpts, {}, assert.ifError);
        expect(res).toBe(requestInstance);
      });

      it('should let handleResp handle the response', done => {
        const error = new Error('Error.');
        const body = fakeResponse.body;

        mockRetryRequestOverride = (
          rOpts: DecorateRequestOptions,
          opts: MakeRequestConfig,
          callback: r.RequestCallback,
        ) => {
          callback(error, fakeResponse, body);
        };

        stub('handleResp', (err, resp, body_) => {
          expect(err).toBe(error);
          expect(resp).toBe(fakeResponse);
          expect(body_).toBe(body);
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
        projectId,
      );

      expect(decoratedReqOpts.autoPaginate).toBe(undefined);
    });

    it('should delete qs.autoPaginateVal', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          autoPaginateVal: true,
        } as DecorateRequestOptions,
        projectId,
      );

      expect(decoratedReqOpts.autoPaginateVal).toBe(undefined);
    });

    it('should delete objectMode', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          objectMode: true,
        } as DecorateRequestOptions,
        projectId,
      );

      expect(decoratedReqOpts.objectMode).toBe(undefined);
    });

    it('should delete qs.autoPaginate', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          qs: {
            autoPaginate: true,
          },
        } as DecorateRequestOptions,
        projectId,
      );

      expect(decoratedReqOpts.qs.autoPaginate).toBe(undefined);
    });

    it('should delete qs.autoPaginateVal', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          qs: {
            autoPaginateVal: true,
          },
        } as DecorateRequestOptions,
        projectId,
      );

      expect(decoratedReqOpts.qs.autoPaginateVal).toBe(undefined);
    });

    it('should delete json.autoPaginate', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          json: {
            autoPaginate: true,
          },
        } as DecorateRequestOptions,
        projectId,
      );

      expect(decoratedReqOpts.json.autoPaginate).toBe(undefined);
    });

    it('should delete json.autoPaginateVal', () => {
      const decoratedReqOpts = util.decorateRequest(
        {
          json: {
            autoPaginateVal: true,
          },
        } as DecorateRequestOptions,
        projectId,
      );

      expect(decoratedReqOpts.json.autoPaginateVal).toBe(undefined);
    });

    it('should replace project ID tokens for qs object', () => {
      const projectId = 'project-id';
      const reqOpts = {
        uri: 'http://',
        qs: {},
      };
      const decoratedQs = {};

      mockReplaceProjectIdTokenOverride = (qs: {}, projectId_: string) => {
        if (qs === reqOpts.uri) {
          return;
        }
        expect(qs).toEqual(reqOpts.qs);
        expect(projectId_).toBe(projectId);
        return decoratedQs;
      };

      const decoratedRequest = util.decorateRequest(reqOpts, projectId);
      expect(decoratedRequest.qs).toEqual(decoratedQs);
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

      mockReplaceProjectIdTokenOverride = (part: {}, projectId_: string) => {
        if (part === reqOpts.uri) {
          return;
        }
        expect(part).toEqual(reqOpts.multipart[0]);
        expect(projectId_).toBe(projectId);
        return decoratedPart;
      };

      const decoratedRequest = util.decorateRequest(reqOpts, projectId);
      expect(decoratedRequest.multipart).toEqual([decoratedPart]);
    });

    it('should replace project ID tokens for json object', () => {
      const projectId = 'project-id';
      const reqOpts = {
        uri: 'http://',
        json: {},
      };
      const decoratedJson = {};

      mockReplaceProjectIdTokenOverride = (json: {}, projectId_: string) => {
        if (json === reqOpts.uri) {
          return;
        }
        expect(reqOpts.json).toBe(json);
        expect(projectId_).toBe(projectId);
        return decoratedJson;
      };

      const decoratedRequest = util.decorateRequest(reqOpts, projectId);
      expect(decoratedRequest.json).toEqual(decoratedJson);
    });

    it('should decorate the request', () => {
      const projectId = 'project-id';
      const reqOpts = {
        uri: 'http://',
      };
      const decoratedUri = 'http://decorated';

      mockReplaceProjectIdTokenOverride = (uri: string, projectId_: string) => {
        expect(uri).toBe(reqOpts.uri);
        expect(projectId_).toBe(projectId);
        return decoratedUri;
      };

      expect(util.decorateRequest(reqOpts, projectId)).toEqual({
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
        expect(util.isCustomType(pubsub, 'pubsub')).toBeTruthy();
      });

      it('should support any casing', () => {
        expect(util.isCustomType(pubsub, 'PubSub')).toBeTruthy();
      });

      it('should not match if the wrong Service', () => {
        expect(util.isCustomType(subscription, 'BigQuery')).toBeFalsy();
      });
    });

    describe('ServiceObject objects', () => {
      it('should match by constructor names', () => {
        expect(util.isCustomType(subscription, 'pubsub')).toBeTruthy();
        expect(util.isCustomType(subscription, 'pubsub/subscription')).toBeTruthy();

        expect(util.isCustomType(subscription, 'middlelayer')).toBeTruthy();
        expect(util.isCustomType(subscription, 'middlelayer/subscription')).toBeTruthy();
      });

      it('should support any casing', () => {
        expect(util.isCustomType(subscription, 'PubSub/Subscription')).toBeTruthy();
      });

      it('should not match if the wrong ServiceObject', () => {
        expect(util.isCustomType(subscription, 'pubsub/topic')).toBeFalsy();
      });
    });
  });

  describe('getUserAgentFromPackageJson', () => {
    it('should format a User Agent string from a package.json', () => {
      const userAgent = util.getUserAgentFromPackageJson({
        name: '@google-cloud/storage',
        version: '0.1.0',
      });

      expect(userAgent).toBe('gcloud-node-storage/0.1.0');
    });
  });

  describe('maybeOptionsOrCallback', () => {
    it('should allow passing just a callback', () => {
      const optionsOrCallback = () => {};
      const [opts, cb] = util.maybeOptionsOrCallback(optionsOrCallback);
      expect(optionsOrCallback).toBe(cb);
      expect(opts).toEqual({});
    });

    it('should allow passing both opts and callback', () => {
      const optionsOrCallback = {};
      const callback = () => {};
      const [opts, cb] = util.maybeOptionsOrCallback(
        optionsOrCallback,
        callback,
      );
      expect(opts).toBe(optionsOrCallback);
      expect(cb).toBe(callback);
    });
  });
});
