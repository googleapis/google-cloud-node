/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import * as extend from 'extend';
import * as nock from 'nock';
import * as pify from 'pify';
import * as sinon from 'sinon';
import {instance, mock, when} from 'ts-mockito';
import * as zlib from 'zlib';

import {perftools} from '../../proto/profile';
import {ProfilerConfig} from '../src/config';
import {Profiler} from '../src/profiler';
import {HeapProfiler} from '../src/profilers/heap-profiler';
import {TimeProfiler} from '../src/profilers/time-profiler';
import {Common} from '../third_party/types/common-types';

import {decodedHeapProfile, decodedTimeProfile, heapProfile, timeProfile} from './profiles-for-tests';

const common: Common = require('@google-cloud/common');
const v8TimeProfiler = require('bindings')('time_profiler');

const fakeCredentials =
    require('../../ts/test/fixtures/gcloud-credentials.json');

const testConfig: ProfilerConfig = {
  projectId: 'test-projectId',
  logLevel: 0,
  serviceContext: {service: 'test-service', version: 'test-version'},
  instance: 'test-instance',
  zone: 'test-zone',
  disableTime: false,
  disableHeap: false,
  credentials: fakeCredentials,
  timeIntervalMicros: 1000,
  heapIntervalBytes: 512 * 1024,
  heapMaxStackDepth: 64,
  backoffMillis: 1000
};

const API = 'https://cloudprofiler.googleapis.com/v2';

const mockTimeProfiler = mock(TimeProfiler);
when(mockTimeProfiler.profile(10 * 1000)).thenReturn(new Promise((resolve) => {
  resolve(timeProfile);
}));

const mockHeapProfiler = mock(HeapProfiler);
when(mockHeapProfiler.profile()).thenReturn(heapProfile);

nock.disableNetConnect();
function nockOauth2(): nock.Scope {
  return nock('https://accounts.google.com')
      .post(
          '/o/oauth2/token',
          (body: {}) => {
            return true;
          })
      .once()
      .reply(200, {
        refresh_token: 'hello',
        access_token: 'goodbye',
        expiry_date: new Date(9999, 1, 1)
      });
}

describe('Profiler', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('profile', () => {
    it('should return expected profile when profile type is WALL.',
       async () => {
         const profiler = new Profiler(testConfig);
         profiler.timeProfiler = instance(mockTimeProfiler);
         const requestProf = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {instance: 'test-instance'}
         };
         const prof = await profiler.profile(requestProf);
         const decodedBytes =
             Buffer.from(prof.profileBytes as 'string', 'base64');
         const unzippedBytes = await pify(zlib.gunzip)(decodedBytes);
         const outProfile = perftools.profiles.Profile.decode(unzippedBytes);
         assert.deepEqual(decodedTimeProfile, outProfile);
       });
    it('should return expected profile when profile type is HEAP.',
       async () => {
         const profiler = new Profiler(testConfig);
         profiler.heapProfiler = instance(mockHeapProfiler);
         const requestProf = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'HEAP',
           duration: '10s',
           labels: {instance: 'test-instance'}
         };
         const prof = await profiler.profile(requestProf);
         const decodedBytes =
             Buffer.from(prof.profileBytes as 'string', 'base64');
         const unzippedBytes = await pify(zlib.gunzip)(decodedBytes);
         const outProfile = perftools.profiles.Profile.decode(unzippedBytes);
         assert.deepEqual(decodedHeapProfile, outProfile);
       });
    it('should throw error when unexpected profile type is requested.',
       async () => {
         const profiler = new Profiler(testConfig);
         profiler.timeProfiler = instance(mockTimeProfiler);
         const requestProf = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'UNKNOWN',
           duration: '10s',
           labels: {instance: 'test-instance'}
         };
         try {
           await profiler.profile(requestProf);
           assert.fail('Expected an error to be thrown,');
         } catch (err) {
           assert.equal(err.message, 'Unexpected profile type UNKNOWN.');
         }
       });
  });
  describe('writeTimeProfile', () => {
    it('should return request with base64-encoded profile when time profiling' +
           ' enabled',
       async () => {
         const profiler = new Profiler(testConfig);
         profiler.timeProfiler = instance(mockTimeProfiler);

         const requestProf = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {'instance': 'test-instance'}
         };

         const outRequestProfile = await profiler.writeTimeProfile(requestProf);
         const encodedBytes = outRequestProfile.profileBytes;

         if (encodedBytes === undefined) {
           assert.fail('profile bytes are undefined.');
         }

         const decodedBytes = Buffer.from(encodedBytes as string, 'base64');
         const unzippedBytes = await pify(zlib.gunzip)(decodedBytes);
         const outProfile = perftools.profiles.Profile.decode(unzippedBytes);

         // compare to decodedTimeProfile, which is equivalent to timeProfile,
         // but numbers are replaced with longs.
         assert.deepEqual(decodedTimeProfile, outProfile);
       });
    it('should throw error when time profiling is not enabled.', async () => {
      const config = extend(true, {}, testConfig);
      config.disableTime = true;
      const profiler = new Profiler(config);
      const requestProf = {
        name: 'projects/12345678901/test-projectId',
        profileType: 'WALL',
        duration: '10s',
        labels: {instance: 'test-instance'}
      };
      try {
        await profiler.writeTimeProfile(requestProf);
        assert.fail('expected error, no error thrown');
      } catch (err) {
        assert.equal(
            err.message,
            'Cannot collect time profile, time profiler not enabled.');
      }
    });
  });
  describe('writeHeapProfile', () => {
    it('should return request with base64-encoded profile when time profiling' +
           ' enabled',
       async () => {
         const profiler = new Profiler(testConfig);
         profiler.heapProfiler = instance(mockHeapProfiler);

         const requestProf = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'HEAP',
           duration: '10s',
           labels: {instance: 'test-instance'}
         };

         const outRequestProfile = await profiler.writeHeapProfile(requestProf);
         const encodedBytes = outRequestProfile.profileBytes;

         if (encodedBytes === undefined) {
           assert.fail('profile bytes are undefined.');
         }

         const decodedBytes = Buffer.from(encodedBytes as string, 'base64');
         const unzippedBytes = await pify(zlib.gunzip)(decodedBytes);
         const outProfile = perftools.profiles.Profile.decode(unzippedBytes);

         // compare to decodedTimeProfile, which is equivalent to timeProfile,
         // but numbers are replaced with longs.
         assert.deepEqual(decodedHeapProfile, outProfile);
       });
    it('should throw error when heap profiling is not enabled.', async () => {
      const config = extend(true, {}, testConfig);
      config.disableHeap = true;
      const profiler = new Profiler(config);
      const requestProf = {
        name: 'projects/12345678901/test-projectId',
        profileType: 'HEAP',
        duration: '10s',
        labels: {instance: 'test-instance'}
      };
      try {
        await profiler.writeHeapProfile(requestProf);
        assert.fail('expected error, no error thrown');
      } catch (err) {
        assert.equal(
            err.message,
            'Cannot collect heap profile, heap profiler not enabled.');
      }
    });
  });
  describe('profileAndUpload', () => {
    let requestStub: undefined|sinon.SinonStub;
    afterEach(() => {
      if (requestStub) {
        requestStub.restore();
      }
    });
    it('should send request to upload time profile.', async () => {
      const requestProf = {
        name: 'projects/12345678901/test-projectId',
        duration: '10s',
        profileType: 'WALL',
        labels: {instance: 'test-instance'}
      };

      requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                        .onCall(0)
                        .returns(new Promise(resolve => {
                          resolve([{}, {statusCode: 200}]);
                        }));

      const profiler = new Profiler(testConfig);
      profiler.timeProfiler = instance(mockTimeProfiler);
      await profiler.profileAndUpload(requestProf);

      const uploaded = requestStub.firstCall.args[0].body;
      const decodedBytes =
          Buffer.from(uploaded.profileBytes as string, 'base64');
      const unzippedBytes = await pify(zlib.gunzip)(decodedBytes);
      const outProfile = perftools.profiles.Profile.decode(unzippedBytes);
      assert.deepEqual(decodedTimeProfile, outProfile);

      uploaded.profileBytes = undefined;
      assert.deepEqual(uploaded, requestProf);
    });
    it('should send request to upload heap profile.', async () => {
      const requestProf = {
        name: 'projects/12345678901/test-projectId',
        duration: '10s',
        profileType: 'HEAP',
        labels: {instance: 'test-instance'}
      };

      requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                        .onCall(0)
                        .returns(new Promise(resolve => {
                          resolve([{}, {statusCode: 200}]);
                        }));

      const profiler = new Profiler(testConfig);
      profiler.heapProfiler = instance(mockHeapProfiler);
      await profiler.profileAndUpload(requestProf);

      const uploaded = requestStub.firstCall.args[0].body;
      const decodedBytes =
          Buffer.from(uploaded.profileBytes as string, 'base64');
      const unzippedBytes = await pify(zlib.gunzip)(decodedBytes);
      const outProfile = perftools.profiles.Profile.decode(unzippedBytes);
      assert.deepEqual(decodedHeapProfile, outProfile);

      uploaded.profileBytes = undefined;
      assert.deepEqual(uploaded, requestProf);
    });
    it('should throw error when profile type unknown.', async () => {
      const requestProf = {
        name: 'projects/12345678901/test-projectId',
        duration: '10s',
        profileType: 'UNKNOWN_PROFILE_TYPE',
        labels: {instance: 'test-instance'}
      };
      const profiler = new Profiler(testConfig);
      try {
        await profiler.profileAndUpload(requestProf);
        assert.fail('expected error, no error thrown');
      } catch (err) {
        assert.equal(
            err.message, 'Unexpected profile type UNKNOWN_PROFILE_TYPE.');
      }
    });
    it('should throw error when error thrown by http request.', async () => {
      const requestProf = {
        name: 'projects/12345678901/test-projectId',
        duration: '10s',
        profileType: 'WALL',
        labels: {instance: 'test-instance'}
      };
      requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                        .rejects(new Error('Network error'));
      const profiler = new Profiler(testConfig);
      profiler.timeProfiler = instance(mockTimeProfiler);
      try {
        await profiler.profileAndUpload(requestProf);
        assert.fail('expected error, no error thrown');
      } catch (err) {
        assert.equal(err.message, 'Network error');
      }
    });
    it('should throw error when non-200 status code returned.', async () => {
      const requestProf = {
        name: 'projects/12345678901/test-projectId',
        duration: '10s',
        profileType: 'WALL',
        labels: {instance: 'test-instance'}
      };
      requestStub =
          sinon.stub(common.ServiceObject.prototype, 'request')
              .returns(new Promise(resolve => {
                resolve(
                    [undefined, {statusCode: 500, statusMessage: 'Error 500'}]);
              }));
      const profiler = new Profiler(testConfig);
      profiler.timeProfiler = instance(mockTimeProfiler);
      try {
        await profiler.profileAndUpload(requestProf);
        assert.fail('expected error, no error thrown');
      } catch (err) {
        assert.equal(err.message, 'Could not upload profile: Error 500.');
      }
    });
  });
  describe('createProfile', () => {
    let requestStub: undefined|sinon.SinonStub;
    afterEach(() => {
      if (requestStub) {
        requestStub.restore();
      }
    });
    it('should send request for only wall profile when heap disabled.',
       async () => {
         const config = extend(true, {}, testConfig);
         config.disableHeap = true;
         const response = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {instance: config.instance}
         };
         nockOauth2();
         const requestProfileMock =
             nock(API)
                 .post('/projects/' + testConfig.projectId + '/profiles')
                 .once()
                 .reply(200, response);
         const profiler = new Profiler(testConfig);
         const actualResponse = await profiler.createProfile();
         assert.deepEqual(response, actualResponse);
         assert.ok(
             requestProfileMock.isDone(), 'expected call to create profile');
       });
    it('should not have instance and zone in request body when instance and' +
           ' zone undefined',
       async () => {
         const config = extend(true, {}, testConfig);
         config.instance = undefined;
         config.zone = undefined;
         const response = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
         };
         requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                           .onCall(0)
                           .returns(new Promise(resolve => {
                             resolve([response, {statusCode: 200}]);
                           }));
         const expRequestBody = {
           deployment: {
             labels: {version: 'test-version'},
             projectId: 'test-projectId',
             target: 'test-service'
           },
           profileType: ['WALL', 'HEAP']
         };
         const profiler = new Profiler(config);
         const actualResponse = await profiler.createProfile();
         assert.deepEqual(response, actualResponse);
         assert.deepEqual(expRequestBody, requestStub.firstCall.args[0].body);
       });
    it('should not have instance and zone in request body when instance and' +
           ' zone empty strings',
       async () => {
         const config = extend(true, {}, testConfig);
         config.instance = '';
         config.zone = '';
         const response = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
         };
         requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                           .onCall(0)
                           .returns(new Promise(resolve => {
                             resolve([response, {statusCode: 200}]);
                           }));
         const expRequestBody = {
           deployment: {
             labels: {version: 'test-version'},
             projectId: 'test-projectId',
             target: 'test-service'
           },
           profileType: ['WALL', 'HEAP']
         };
         const profiler = new Profiler(config);
         const actualResponse = await profiler.createProfile();
         assert.deepEqual(response, actualResponse);
         assert.deepEqual(expRequestBody, requestStub.firstCall.args[0].body);
       });
    it('should keep additional fields in request profile.', async () => {
      const config = extend(true, {}, testConfig);
      config.disableHeap = true;
      const response = {
        name: 'projects/12345678901/test-projectId',
        profileType: 'WALL',
        duration: '10s',
        labels: {instance: config.instance},
        additionalField: 'additionalField'
      };
      nockOauth2();
      const requestProfileMock =
          nock(API)
              .post('/projects/' + testConfig.projectId + '/profiles')
              .once()
              .reply(200, response);
      const profiler = new Profiler(testConfig);
      const actualResponse = await profiler.createProfile();
      assert.deepEqual(response, actualResponse);
    });
    it('should throw error when error thrown by http request.', async () => {
      const config = extend(true, {}, testConfig);
      config.disableHeap = true;
      const response = {
        name: 'projects/12345678901/test-projectId',
        profileType: 'WALL',
        duration: '10s',
        labels: {instance: config.instance}
      };
      requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                        .onCall(0)
                        .returns(Promise.reject(new Error('Network error')));
      const profiler = new Profiler(testConfig);
      try {
        await profiler.createProfile();
        assert.fail('expected error, no error thrown');
      } catch (err) {
        assert.equal(err.message, 'Network error');
      }
    });
    it('should throw status message when response has non-200 status.',
       async () => {
         const config = extend(true, {}, testConfig);
         const response = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {instance: config.instance}
         };
         requestStub =
             sinon.stub(common.ServiceObject.prototype, 'request')
                 .onCall(0)
                 .returns(new Promise(resolve => {
                   resolve([
                     {}, {statusCode: 500, statusMessage: '500 status code'}
                   ]);
                 }));

         const profiler = new Profiler(testConfig);
         try {
           await profiler.createProfile();
           assert.fail('expected error, no error thrown');
         } catch (err) {
           assert.equal(err.message, '500 status code');
         }
       });
    it('should throw status code when response has non-200 status and no status message.',
       async () => {
         const config = extend(true, {}, testConfig);
         const response = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {instance: config.instance}
         };
         requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                           .onCall(0)
                           .returns(new Promise(resolve => {
                             resolve([{}, {statusCode: 500}]);
                           }));

         const profiler = new Profiler(testConfig);
         try {
           await profiler.createProfile();
           assert.fail('expected error, no error thrown');
         } catch (err) {
           assert.equal(err.message, '500');
         }
       });
  });
  describe('collectProfile', () => {
    let requestStub: undefined|sinon.SinonStub;
    afterEach(() => {
      if (requestStub) {
        requestStub.restore();
      }
    });
    it('should indicate collectProfile should be called immediately when no errors',
       async () => {
         const config = extend(true, {}, testConfig);
         const requestProfileResponseBody = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {instance: config.instance}
         };
         requestStub =
             sinon.stub(common.ServiceObject.prototype, 'request')
                 .onCall(0)
                 .returns(new Promise(resolve => {
                   resolve([requestProfileResponseBody, {statusCode: 200}]);
                 }))
                 .onCall(1)
                 .returns(new Promise(resolve => {
                   resolve([{}, {statusCode: 200}]);
                 }));


         const profiler = new Profiler(testConfig);
         profiler.timeProfiler = instance(mockTimeProfiler);
         const delayMillis = await profiler.collectProfile();
         assert.equal(
             0, delayMillis, 'No delay before asking to collect next profile');
       });
    it('should indicate collectProfile should be called after some backoff' +
           'when error in requesting profile',
       async () => {
         const config = extend(true, {}, testConfig);
         const requestProfileResponseBody = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {instance: config.instance}
         };
         requestStub = sinon.stub(common.ServiceObject.prototype, 'request')
                           .onCall(0)
                           .returns(new Promise(resolve => {
                             resolve([{}, {statusCode: 404}]);
                           }));


         const profiler = new Profiler(testConfig);
         profiler.timeProfiler = instance(mockTimeProfiler);
         const delayMillis = await profiler.collectProfile();
         assert.equal(
             1000, delayMillis,
             'No delay before asking to collect next profile');
       });
    it('should indicate collectProfile should be called immediately error' +
           ' in collecting and uploading profile.',
       async () => {
         const config = extend(true, {}, testConfig);
         const requestProfileResponseBody = {
           name: 'projects/12345678901/test-projectId',
           profileType: 'WALL',
           duration: '10s',
           labels: {instance: config.instance}
         };
         requestStub =
             sinon.stub(common.ServiceObject.prototype, 'request')
                 .onCall(0)
                 .returns(new Promise(resolve => {
                   resolve([requestProfileResponseBody, {statusCode: 200}]);
                 }))
                 .onCall(1)
                 .returns(Promise.reject('Error uploading profile'));
         const profiler = new Profiler(testConfig);
         profiler.timeProfiler = instance(mockTimeProfiler);
         const delayMillis = await profiler.collectProfile();
         assert.equal(
             0, delayMillis, 'No delay before asking to collect next profile');
       });
  });
});
