// Copyright 2015 Google LLC
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

import * as extend from 'extend';
import {AuthClient, GoogleAuth, OAuth2Client} from 'google-auth-library';

import {Interceptor} from '../src';
import {
  DEFAULT_PROJECT_ID_TOKEN,
  Service,
  ServiceConfig,
  ServiceOptions,
} from '../src/service';
import {
  BodyResponseCallback,
  DecorateRequestOptions,
  MakeAuthenticatedRequest,
  MakeAuthenticatedRequestFactoryConfig,
  util,
} from '../src/util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asAny = (o: any) => o as any;

const fakeCfg = {} as ServiceConfig;

describe('Service', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let service: any;

  const CONFIG = {
    scopes: [],
    baseUrl: 'base-url',
    projectIdRequired: false,
    apiEndpoint: 'common.endpoint.local',
    packageJson: {
      name: '@google-cloud/service',
      version: '0.2.0',
    },
  };

  const OPTIONS = {
    authClient: new GoogleAuth(),
    credentials: {},
    keyFile: {},
    email: 'email',
    projectId: 'project-id',
    token: 'token',
  } as ServiceOptions;

  beforeEach(() => {
    service = new Service(CONFIG, OPTIONS);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('instantiation', () => {
    it('should not require options', () => {
      expect(() => {
        new Service(CONFIG);
      }).not.toThrow();
    });

    it('should create an authenticated request factory', () => {
      const authenticatedRequest = {} as MakeAuthenticatedRequest;

      jest.spyOn(util, 'makeAuthenticatedRequestFactory').mockImplementation(
        (config: MakeAuthenticatedRequestFactoryConfig) => {
          const expectedConfig = extend({}, CONFIG, {
            authClient: OPTIONS.authClient,
            credentials: OPTIONS.credentials,
            keyFile: OPTIONS.keyFilename,
            email: OPTIONS.email,
            projectIdRequired: CONFIG.projectIdRequired,
            projectId: OPTIONS.projectId,
            token: OPTIONS.token,
          });

          expect(config).toEqual(expectedConfig);

          return authenticatedRequest;
        }
      );

      const svc = new Service(CONFIG, OPTIONS);
      expect(svc.makeAuthenticatedRequest).toBe(authenticatedRequest);
    });

    it('should localize the authClient', () => {
      const authClient = {};
      jest.spyOn(util, 'makeAuthenticatedRequestFactory').mockImplementation(() => {
        return {
          authClient,
        } as MakeAuthenticatedRequest;
      });
      const service = new Service(CONFIG, OPTIONS);
      expect(service.authClient).toBe(authClient);
    });

    it('should localize the provided authClient', () => {
      const service = new Service(CONFIG, OPTIONS);
      expect(service.authClient).toBe(OPTIONS.authClient);
    });

    describe('`AuthClient` support', () => {
      // Using a custom `AuthClient` to ensure any `AuthClient` would work
      class CustomAuthClient extends AuthClient {
        async getAccessToken() {
          return {token: '', res: undefined};
        }

        async getRequestHeaders() {
          return {} as Headers;
        }

        request = OAuth2Client.prototype.request.bind(this);
      }

      it('should accept an `AuthClient` passed to config', async () => {
        const authClient = new CustomAuthClient();
        const serviceObject = new Service({...CONFIG, authClient});

        // The custom `AuthClient` should be passed to `GoogleAuth` and used internally
        const client = await serviceObject.authClient.getClient();

        expect(client).toBe(authClient);
      });

      it('should accept an `AuthClient` passed to options', async () => {
        const authClient = new CustomAuthClient();
        const serviceObject = new Service(CONFIG, {authClient});

        // The custom `AuthClient` should be passed to `GoogleAuth` and used internally
        const client = await serviceObject.authClient.getClient();

        expect(client).toBe(authClient);
      });
    });

    it('should localize the baseUrl', () => {
      expect(service.baseUrl).toBe(CONFIG.baseUrl);
    });

    it('should localize the apiEndpoint', () => {
      expect(service.apiEndpoint).toBe(CONFIG.apiEndpoint);
    });

    it('should default the timeout to undefined', () => {
      expect(service.timeout).toBeUndefined();
    });

    it('should localize the timeout', () => {
      const timeout = 10000;
      const options = extend({}, OPTIONS, {timeout});
      const service = new Service(fakeCfg, options);
      expect(service.timeout).toBe(timeout);
    });

    it('should localize the getCredentials method', () => {
      function getCredentials() {}

      jest.spyOn(util, 'makeAuthenticatedRequestFactory').mockImplementation(() => {
        return {
          authClient: {},
          getCredentials,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any;
      });

      const service = new Service(CONFIG, OPTIONS);
      expect(asAny(service).getCredentials).toBe(getCredentials);
    });

    it('should default globalInterceptors to an empty array', () => {
      expect(asAny(service).globalInterceptors).toEqual([]);
    });

    it('should preserve the original global interceptors', () => {
      const globalInterceptors: Interceptor[] = [];
      const options = extend({}, OPTIONS);
      options.interceptors_ = globalInterceptors;
      const service = new Service(fakeCfg, options);
      expect(asAny(service).globalInterceptors).toBe(globalInterceptors);
    });

    it('should default interceptors to an empty array', () => {
      expect(service.interceptors).toEqual([]);
    });

    it('should localize package.json', () => {
      expect(service.packageJson).toBe(CONFIG.packageJson);
    });

    it('should localize the projectId', () => {
      expect(service.projectId).toBe(OPTIONS.projectId);
    });

    it('should default projectId with placeholder', () => {
      const service = new Service(fakeCfg, {});
      expect(service.projectId).toBe(DEFAULT_PROJECT_ID_TOKEN);
    });

    it('should localize the projectIdRequired', () => {
      expect(asAny(service).projectIdRequired).toBe(CONFIG.projectIdRequired);
    });

    it('should default projectIdRequired to true', () => {
      const service = new Service(fakeCfg, OPTIONS);
      expect(asAny(service).projectIdRequired).toBe(true);
    });

    it('should disable forever agent for Cloud Function envs', () => {
      process.env.FUNCTION_NAME = 'cloud-function-name';
      const service = new Service(CONFIG, OPTIONS);
      delete process.env.FUNCTION_NAME;

      const interceptor = service.interceptors[0];

      const modifiedReqOpts = interceptor.request(asAny({forever: true}));
      expect(modifiedReqOpts.forever).toBe(false);
    });
  });

  describe('getRequestInterceptors', () => {
    it('should call the request interceptors in order', () => {
      // Called first.
      asAny(service).globalInterceptors.push({
        request(reqOpts: {order: string}) {
          reqOpts.order = '1';
          return reqOpts;
        },
      });

      // Called third.
      service.interceptors.push({
        request(reqOpts: {order: string}) {
          reqOpts.order += '3';
          return reqOpts;
        },
      });

      // Called second.
      asAny(service).globalInterceptors.push({
        request(reqOpts: {order: string}) {
          reqOpts.order += '2';
          return reqOpts;
        },
      });

      // Called fourth.
      service.interceptors.push({
        request(reqOpts: {order: string}) {
          reqOpts.order += '4';
          return reqOpts;
        },
      });

      const reqOpts: {order?: string} = {};
      const requestInterceptors = service.getRequestInterceptors();
      requestInterceptors.forEach((requestInterceptor: Function) => {
        Object.assign(reqOpts, requestInterceptor(reqOpts));
      });
      expect(reqOpts.order).toBe('1234');
    });

    it('should not affect original interceptor arrays', () => {
      function request(reqOpts: DecorateRequestOptions) {
        return reqOpts;
      }

      asAny(service).globalInterceptors = [{request}];
      service.interceptors = [{request}];

      const originalGlobalInterceptors = [].slice.call(
        asAny(service).globalInterceptors,
      );
      const originalLocalInterceptors = [].slice.call(service.interceptors);

      service.getRequestInterceptors();

      expect(asAny(service).globalInterceptors).toEqual(originalGlobalInterceptors);
      expect(service.interceptors).toEqual(originalLocalInterceptors);
    });

    it('should not call unrelated interceptors', () => {
      service.interceptors.push({
        anotherInterceptor() {
          throw new Error('Unrelated interceptor was called.');
        },
        request() {
          return {};
        },
      });

      const requestInterceptors = service.getRequestInterceptors();
      requestInterceptors.forEach((requestInterceptor: Function) => {
        requestInterceptor();
      });
    });
  });

  describe('getProjectId', () => {
    it('should get the project ID from the auth client', done => {
      asAny(service).authClient = {
        getProjectId() {
          done();
        },
      };

      service.getProjectId(() => {});
    });

    it('should return error from auth client', done => {
      const error = new Error('Error.');

      asAny(service).authClient = {
        async getProjectId() {
          throw error;
        },
      };

      service.getProjectId((err: Error | null) => {
        expect(err).toBe(error);
        done();
      });
    });

    it('should update and return the project ID if found', done => {
      const service = new Service(fakeCfg, {});
      const projectId = 'detected-project-id';

      asAny(service).authClient = {
        async getProjectId() {
          return projectId;
        },
      };

      service.getProjectId((err: Error | null, projectId_?: string) => {
        expect(err).toBeNull();
        expect(service.projectId).toBe(projectId);
        expect(projectId_).toBe(projectId);
        done();
      });
    });

    it('should return a promise if no callback is provided', () => {
      const value = {};
      service.getProjectIdAsync = () => value;
      expect(service.getProjectId()).toBe(value);
    });
  });

  describe('request_', () => {
    let reqOpts: DecorateRequestOptions;

    beforeEach(() => {
      reqOpts = {
        uri: 'uri',
      };
    });

    it('should compose the correct request', done => {
      const expectedUri = [service.baseUrl, reqOpts.uri].join('/');
      asAny(service).makeAuthenticatedRequest = (
        reqOpts_: DecorateRequestOptions,
        callback: BodyResponseCallback,
      ) => {
        expect(reqOpts_).not.toBe(reqOpts);
        expect(reqOpts_.uri).toBe(expectedUri);
        expect(reqOpts.interceptors_).toBeUndefined();
        callback(null); // done()
      };
      asAny(service).request_(reqOpts, () => done());
    });

    it('should support absolute uris', done => {
      const expectedUri = 'http://www.google.com';

      asAny(service).makeAuthenticatedRequest = (reqOpts: DecorateRequestOptions) => {
        expect(reqOpts.uri).toBe(expectedUri);
        done();
      };

      asAny(service).request_({uri: expectedUri}, () => {});
    });

    it('should trim slashes', done => {
      const reqOpts = {
        uri: '//1/2//',
      };

      const expectedUri = [service.baseUrl, '1/2'].join('/');

      asAny(service).makeAuthenticatedRequest = (reqOpts_: DecorateRequestOptions) => {
        expect(reqOpts_.uri).toBe(expectedUri);
        done();
      };

      asAny(service).request_(reqOpts, () => {});
    });

    it('should replace path/:subpath with path:subpath', done => {
      const reqOpts = {
        uri: ':test',
      };

      const expectedUri = service.baseUrl + reqOpts.uri;
      asAny(service).makeAuthenticatedRequest = (reqOpts_: DecorateRequestOptions) => {
        expect(reqOpts_.uri).toBe(expectedUri);
        done();
      };
      asAny(service).request_(reqOpts, () => {});
    });

    it('should not set timeout', done => {
      asAny(service).makeAuthenticatedRequest = (reqOpts_: DecorateRequestOptions) => {
        expect(reqOpts_.timeout).toBeUndefined();
        done();
      };
      asAny(service).request_(reqOpts, () => {});
    });

    it('should set reqOpt.timeout', done => {
      const timeout = 10000;
      const config = extend({}, CONFIG);
      const options = extend({}, OPTIONS, {timeout});
      const service = new Service(config, options);

      asAny(service).makeAuthenticatedRequest = (reqOpts_: DecorateRequestOptions) => {
        expect(reqOpts_.timeout).toBe(timeout);
        done();
      };
      asAny(service).request_(reqOpts, () => {});
    });

    it('should add the User Agent', done => {
      const userAgent = 'user-agent/0.0.0';

      jest.spyOn(util, 'getUserAgentFromPackageJson').mockImplementation((packageJson) => {
        expect(packageJson).toBe(service.packageJson);
        return userAgent;
      });

      asAny(service).makeAuthenticatedRequest = (reqOpts: DecorateRequestOptions) => {
        expect(reqOpts.headers!['User-Agent']).toBe(userAgent);
        done();
      };

      asAny(service).request_(reqOpts, () => {});
    });

    it('should add the provided User Agent', done => {
      const userAgent = 'user-agent/0.0.0';
      const providedUserAgent = 'test';

      service.providedUserAgent = providedUserAgent;

      jest.spyOn(util, 'getUserAgentFromPackageJson').mockImplementation((packageJson) => {
        expect(packageJson).toBe(service.packageJson);
        return userAgent;
      });

      asAny(service).makeAuthenticatedRequest = (reqOpts: DecorateRequestOptions) => {
        expect(reqOpts.headers!['User-Agent']).toBe(
          `${providedUserAgent} ${userAgent}`
        );
        done();
      };

      asAny(service).request_(reqOpts, () => {});
    });

    it('should add the api-client header', done => {
      asAny(service).makeAuthenticatedRequest = (reqOpts: DecorateRequestOptions) => {
        const pkg = service.packageJson;
        expect(reqOpts.headers!['x-goog-api-client']).toBe(
          `gl-node/${process.versions.node} gccl/${pkg.version}`
        );
        done();
      };

      asAny(service).request_(reqOpts, () => {});
    });

    describe('projectIdRequired', () => {
      describe('false', () => {
        it('should include the projectId', done => {
          const config = extend({}, CONFIG, {projectIdRequired: false});
          const service = new Service(config, OPTIONS);

          const expectedUri = [service.baseUrl, reqOpts.uri].join('/');

          asAny(service).makeAuthenticatedRequest = (
            reqOpts_: DecorateRequestOptions,
          ) => {
            expect(reqOpts_.uri).toBe(expectedUri);
            done();
          };

          asAny(service).request_(reqOpts, () => {});
        });
      });

      describe('true', () => {
        it('should not include the projectId', done => {
          const config = extend({}, CONFIG, {projectIdRequired: true});
          const service = new Service(config, OPTIONS);

          const expectedUri = [
            service.baseUrl,
            'projects',
            service.projectId,
            reqOpts.uri,
          ].join('/');

          asAny(service).makeAuthenticatedRequest = (
            reqOpts_: DecorateRequestOptions,
          ) => {
            expect(reqOpts_.uri).toBe(expectedUri);
            done();
          };

          asAny(service).request_(reqOpts, () => {});
        });

        it('should use projectId override', done => {
          const config = extend({}, CONFIG, {projectIdRequired: true});
          const service = new Service(config, OPTIONS);
          const projectOverride = 'turing';

          reqOpts.projectId = projectOverride;

          const expectedUri = [
            service.baseUrl,
            'projects',
            projectOverride,
            reqOpts.uri,
          ].join('/');

          asAny(service).makeAuthenticatedRequest = (
            reqOpts_: DecorateRequestOptions,
          ) => {
            expect(reqOpts_.uri).toBe(expectedUri);
            done();
          };

          asAny(service).request_(reqOpts, () => {});
        });
      });
    });

    describe('request interceptors', () => {
      type FakeRequestOptions = DecorateRequestOptions & {a: string; b: string};

      it('should include request interceptors', done => {
        const requestInterceptors = [
          (reqOpts: FakeRequestOptions) => {
            reqOpts.a = 'a';
            return reqOpts;
          },
          (reqOpts: FakeRequestOptions) => {
            reqOpts.b = 'b';
            return reqOpts;
          },
        ];

        service.getRequestInterceptors = () => {
          return requestInterceptors;
        };

        asAny(service).makeAuthenticatedRequest = (reqOpts: FakeRequestOptions) => {
          expect(reqOpts.a).toBe('a');
          expect(reqOpts.b).toBe('b');
          done();
        };

        asAny(service).request_(reqOpts, () => {});
      });

      it('should combine reqOpts interceptors', done => {
        const requestInterceptors = [
          (reqOpts: FakeRequestOptions) => {
            reqOpts.a = 'a';
            return reqOpts;
          },
        ];

        service.getRequestInterceptors = () => {
          return requestInterceptors;
        };

        reqOpts.interceptors_ = [
          {
            request: (reqOpts: FakeRequestOptions) => {
              reqOpts.b = 'b';
              return reqOpts;
            },
          },
        ];

        asAny(service).makeAuthenticatedRequest = (reqOpts: FakeRequestOptions) => {
          expect(reqOpts.a).toBe('a');
          expect(reqOpts.b).toBe('b');
          expect(typeof reqOpts.interceptors_).toBe('undefined');
          done();
        };

        asAny(service).request_(reqOpts, () => {});
      });
    });

    describe('error handling', () => {
      it('should re-throw any makeAuthenticatedRequest callback error', done => {
        const err = new Error('🥓');
        const res = {body: undefined};
        asAny(service).makeAuthenticatedRequest = (_: void, callback: Function) => {
          callback(err, res.body, res);
        };
        asAny(service).request_({uri: ''}, (e: Error) => {
          expect(e).toBe(err);
          done();
        });
      });
    });
  });

  describe('request', () => {
    it('should call through to _request', async () => {
      const fakeOpts = {};
      jest.spyOn(Service.prototype as any, 'request_').mockImplementation(async (reqOpts) => {
        expect(reqOpts).toBe(fakeOpts);
        return {};
      });
      await service.request(fakeOpts);
    });

    it('should accept a callback', done => {
      const fakeOpts = {};
      const response = {body: {abc: '123'}, statusCode: 200};
      jest.spyOn(Service.prototype as any, 'request_').mockImplementation((reqOpts, callback: any) => {
        expect(reqOpts).toBe(fakeOpts);
        callback(null, response.body, response);
      });

      service.request(fakeOpts, (err: Error | null, body: {}, res: {}) => {
        expect(err).toBeNull();
        expect(res).toEqual(response);
        expect(body).toEqual(response.body);
        done();
      });
    });
  });

  describe('requestStream', () => {
    it('should return whatever _request returns', async () => {
      const fakeOpts = {};
      const fakeStream = {};

      jest.spyOn(Service.prototype as any, 'request_').mockImplementation(async (reqOpts) => {
        expect(reqOpts).toBe(fakeOpts);
        return fakeStream;
      });

      const stream = await service.requestStream(fakeOpts);
      expect(stream).toBe(fakeStream);
    });
  });
});
