// Copyright 2021 Google LLC
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

import {GaxiosOptions} from 'gaxios';
import {describe, it} from 'mocha';
import * as assert from 'assert';
import * as querystring from 'querystring';

import {
  ClientAuthentication,
  OAuthClientAuthHandler,
  getErrorFromOAuthErrorResponse,
} from '../src/auth/oauth2common';

/** Test class to test abstract class OAuthClientAuthHandler. */
class TestOAuthClientAuthHandler extends OAuthClientAuthHandler {
  testApplyClientAuthenticationOptions(
    opts: GaxiosOptions,
    bearerToken?: string,
  ) {
    return this.applyClientAuthenticationOptions(opts, bearerToken);
  }
}

/** Custom error object for testing additional fields on an Error. */
class CustomError extends Error {
  public readonly code?: string;
  constructor(
    message: string,
    stack?: ReturnType<JSON['parse']>,
    code?: string,
  ) {
    super(message);
    this.name = 'CustomError';
    this.stack = stack;
    this.code = code;
  }
}

function prepareExpectedOptions(options: GaxiosOptions) {
  return {
    ...options,
    headers: new Headers(options.headers),
  };
}

describe('OAuthClientAuthHandler', () => {
  const basicAuth: ClientAuthentication = {
    confidentialClientType: 'basic',
    clientId: 'username',
    clientSecret: 'password',
  };
  // Base64 encoding of "username:password"
  const expectedBase64EncodedCred = 'dXNlcm5hbWU6cGFzc3dvcmQ=';
  const basicAuthNoSecret: ClientAuthentication = {
    confidentialClientType: 'basic',
    clientId: 'username',
  };
  // Base64 encoding of "username:"
  const expectedBase64EncodedCredNoSecret = 'dXNlcm5hbWU6';
  const reqBodyAuth = {
    confidentialClientType: 'request-body',
    clientId: 'username',
    clientSecret: 'password',
  } as const;
  const reqBodyAuthNoSecret: ClientAuthentication = {
    confidentialClientType: 'request-body',
    clientId: 'username',
  };

  it('should not process request when no client authentication is used', () => {
    const handler = new TestOAuthClientAuthHandler();
    const options: GaxiosOptions = {
      url: 'https://www.example.com/path/to/api',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const expectedOptions = prepareExpectedOptions(options);
    handler.testApplyClientAuthenticationOptions(options);
    assert.deepStrictEqual(options, expectedOptions);
  });

  it('should process request with basic client auth', () => {
    const handler = new TestOAuthClientAuthHandler(basicAuth);
    const options: GaxiosOptions = {
      url: 'https://www.example.com/path/to/api',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const expectedOptions = prepareExpectedOptions(options);
    expectedOptions.headers.set(
      'authorization',
      `Basic ${expectedBase64EncodedCred}`,
    );

    handler.testApplyClientAuthenticationOptions(options);
    assert.deepStrictEqual(options, expectedOptions);
  });

  it('should process request with secretless basic client auth', () => {
    const handler = new TestOAuthClientAuthHandler(basicAuthNoSecret);
    const options: GaxiosOptions = {
      url: 'https://www.example.com/path/to/api',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const expectedOptions = prepareExpectedOptions(options);
    expectedOptions.headers.set(
      'authorization',
      `Basic ${expectedBase64EncodedCredNoSecret}`,
    );

    handler.testApplyClientAuthenticationOptions(options);
    assert.deepStrictEqual(options, expectedOptions);
  });

  it('should process GET (non-request-body) with basic client auth', () => {
    const handler = new TestOAuthClientAuthHandler(basicAuth);
    const options: GaxiosOptions = {
      url: 'https://www.example.com/path/to/api',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    const expectedOptions = prepareExpectedOptions(options);
    expectedOptions.headers.set(
      'authorization',
      `Basic ${expectedBase64EncodedCred}`,
    );

    handler.testApplyClientAuthenticationOptions(options);
    assert.deepStrictEqual(options, expectedOptions);
  });

  describe('with request-body client auth', () => {
    const unsupportedMethods: ReturnType<JSON['parse']>[] = [
      undefined,
      'GET',
      'DELETE',
      'TRACE',
      'OPTIONS',
      'HEAD',
    ];
    unsupportedMethods.forEach(method => {
      it(`should throw on requests with unsupported HTTP method ${method}`, () => {
        const expectedError = new Error(
          `${method || 'GET'} HTTP method does not support request-body ` +
            'client authentication',
        );
        const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
        const originalOptions: GaxiosOptions = {
          method,
          url: 'https://www.example.com/path/to/api',
        };

        assert.throws(() => {
          handler.testApplyClientAuthenticationOptions(originalOptions);
        }, expectedError);
      });
    });

    it('should throw on unsupported content-types', () => {
      const expectedError = new Error(
        'text/html content-types are not supported with request-body ' +
          'client authentication',
      );
      const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
      const originalOptions: GaxiosOptions = {
        headers: {
          'content-type': 'text/html',
        },
        method: 'POST',
        url: 'https://www.example.com/path/to/api',
      };

      assert.throws(() => {
        handler.testApplyClientAuthenticationOptions(originalOptions);
      }, expectedError);
    });

    it('should inject creds in non-empty json content', () => {
      const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
      const options = {
        url: 'https://www.example.com/path/to/api',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          key1: 'value1',
          key2: 'value2',
        },
      };

      const expectedOptions = prepareExpectedOptions(options);
      expectedOptions.data = {
        ...options.data,
        client_id: reqBodyAuth.clientId,
        client_secret: reqBodyAuth.clientSecret,
      };

      handler.testApplyClientAuthenticationOptions(options);
      assert.deepStrictEqual(options, expectedOptions);
    });

    it('should inject secretless creds in json content', () => {
      const handler = new TestOAuthClientAuthHandler(reqBodyAuthNoSecret);
      const options = {
        url: 'https://www.example.com/path/to/api',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          key1: 'value1',
          key2: 'value2',
        },
      };

      const expectedOptions = prepareExpectedOptions(options);
      expectedOptions.data = {
        ...options.data,
        client_id: reqBodyAuthNoSecret.clientId,
        client_secret: '',
      };

      handler.testApplyClientAuthenticationOptions(options);
      assert.deepStrictEqual(options, expectedOptions);
    });

    it('should inject creds in empty json content', () => {
      const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
      const options: GaxiosOptions = {
        url: 'https://www.example.com/path/to/api',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      };

      const expectedOptions = prepareExpectedOptions(options);
      expectedOptions.data = {
        client_id: reqBodyAuth.clientId,
        client_secret: reqBodyAuth.clientSecret,
      };

      handler.testApplyClientAuthenticationOptions(options);
      assert.deepStrictEqual(options, expectedOptions);
    });

    it('should inject creds in non-empty x-www-form-urlencoded content', () => {
      const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
      const options: GaxiosOptions = {
        url: 'https://www.example.com/path/to/api',
        method: 'POST',
        headers: new Headers({
          'content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }),
        data: querystring.stringify({key1: 'value1', key2: 'value2'}),
      };

      const expectedOptions = prepareExpectedOptions(options);
      expectedOptions.data = new URLSearchParams({
        key1: 'value1',
        key2: 'value2',
        client_id: reqBodyAuth.clientId,
        client_secret: reqBodyAuth.clientSecret,
      });

      handler.testApplyClientAuthenticationOptions(options);
      assert.deepStrictEqual(options, expectedOptions);
    });

    it('should inject creds in non-empty URLSearchParams content', () => {
      const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
      const options: GaxiosOptions = {
        url: 'https://www.example.com/path/to/api',
        method: 'POST',
        data: new URLSearchParams({key1: 'value1', key2: 'value2'}),
      };

      const expectedOptions = prepareExpectedOptions(options);
      expectedOptions.data = new URLSearchParams({
        key1: 'value1',
        key2: 'value2',
        client_id: reqBodyAuth.clientId,
        client_secret: reqBodyAuth.clientSecret,
      });

      handler.testApplyClientAuthenticationOptions(options);
      assert.deepStrictEqual(options, expectedOptions);
    });

    it('should inject secretless creds in x-www-form-urlencoded content', () => {
      const handler = new TestOAuthClientAuthHandler(reqBodyAuthNoSecret);
      const options: GaxiosOptions = {
        url: 'https://www.example.com/path/to/api',
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        data: querystring.stringify({key1: 'value1', key2: 'value2'}),
      };

      const expectedOptions = prepareExpectedOptions(options);
      expectedOptions.data = new URLSearchParams({
        key1: 'value1',
        key2: 'value2',
        client_id: reqBodyAuth.clientId,
        client_secret: '',
      });

      handler.testApplyClientAuthenticationOptions(options);
      assert.deepStrictEqual(options, expectedOptions);
    });

    it('should inject creds in empty x-www-form-urlencoded content', () => {
      const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
      const options: GaxiosOptions = {
        url: 'https://www.example.com/path/to/api',
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      };

      const expectedOptions = prepareExpectedOptions(options);
      expectedOptions.data = new URLSearchParams({
        client_id: reqBodyAuth.clientId,
        client_secret: reqBodyAuth.clientSecret,
      });

      handler.testApplyClientAuthenticationOptions(options);
      assert.deepStrictEqual(options, expectedOptions);
    });
  });

  it('should process request with bearer token when provided', () => {
    const bearerToken = 'BEARER_TOKEN';
    const handler = new TestOAuthClientAuthHandler();
    const options: GaxiosOptions = {
      url: 'https://www.example.com/path/to/api',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const expectedOptions = prepareExpectedOptions(options);
    expectedOptions.headers.set('authorization', `Bearer ${bearerToken}`);

    handler.testApplyClientAuthenticationOptions(options, bearerToken);

    assert(options.headers instanceof Headers);
    assert.deepStrictEqual(options, expectedOptions);
  });

  it('should prioritize bearer token over basic auth', () => {
    const bearerToken = 'BEARER_TOKEN';
    const handler = new TestOAuthClientAuthHandler(basicAuth);
    const options: GaxiosOptions = {
      url: 'https://www.example.com/path/to/api',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const expectedOptions = prepareExpectedOptions(options);
    expectedOptions.headers.set('authorization', `Bearer ${bearerToken}`);

    handler.testApplyClientAuthenticationOptions(options, bearerToken);
    assert.deepStrictEqual(options, expectedOptions);
  });

  it('should prioritize bearer token over request body', () => {
    const bearerToken = 'BEARER_TOKEN';
    const handler = new TestOAuthClientAuthHandler(reqBodyAuth);
    const options: GaxiosOptions = {
      url: 'https://www.example.com/path/to/api',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const expectedOptions = prepareExpectedOptions(options);
    expectedOptions.headers.set('authorization', `Bearer ${bearerToken}`);

    handler.testApplyClientAuthenticationOptions(options, bearerToken);
    assert.deepStrictEqual(options, expectedOptions);
  });
});

describe('getErrorFromOAuthErrorResponse', () => {
  it('should create expected error with code, description and uri', () => {
    const resp = {
      error: 'unsupported_grant_type',
      error_description: 'The provided grant_type is unsupported',
      error_uri: 'https://tools.ietf.org/html/rfc6749',
    };
    const error = getErrorFromOAuthErrorResponse(resp);
    assert.strictEqual(
      error.message,
      `Error code ${resp.error}: ${resp.error_description} ` +
        `- ${resp.error_uri}`,
    );
  });

  it('should create expected error with code and description', () => {
    const resp = {
      error: 'unsupported_grant_type',
      error_description: 'The provided grant_type is unsupported',
    };
    const error = getErrorFromOAuthErrorResponse(resp);
    assert.strictEqual(
      error.message,
      `Error code ${resp.error}: ${resp.error_description}`,
    );
  });

  it('should create expected error with code only', () => {
    const resp = {
      error: 'unsupported_grant_type',
    };
    const error = getErrorFromOAuthErrorResponse(resp);
    assert.strictEqual(error.message, `Error code ${resp.error}`);
  });

  it('should preserve the original error properties', () => {
    const originalError = new CustomError(
      'Original error message',
      'Error stack',
      '123456',
    );
    const resp = {
      error: 'unsupported_grant_type',
      error_description: 'The provided grant_type is unsupported',
      error_uri: 'https://tools.ietf.org/html/rfc6749',
    };
    const expectedError = new CustomError(
      `Error code ${resp.error}: ${resp.error_description} ` +
        `- ${resp.error_uri}`,
      'Error stack',
      '123456',
    );

    const actualError = getErrorFromOAuthErrorResponse(resp, originalError);
    assert.strictEqual(actualError.message, expectedError.message);
    assert.strictEqual(
      (actualError as ReturnType<JSON['parse']>).code,
      expectedError.code,
    );
    assert.strictEqual(actualError.name, expectedError.name);
    assert.strictEqual(actualError.stack, expectedError.stack);
  });
});
