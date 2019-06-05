// Copyright 2019 Google LLC
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

'use strict';

const assert = require('assert');

const recaptchaenterpriseModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('RecaptchaEnterpriseServiceV1Beta1Client', () => {
  it('has servicePath', () => {
    const servicePath =
      recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client
        .port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client();
    assert(client);
  });

  describe('createAssessment', () => {
    it('invokes createAssessment without error', done => {
      const client = new recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const assessment = {};
      const request = {
        parent: formattedParent,
        assessment: assessment,
      };

      // Mock response
      const name = 'name3373707';
      const score = 1.0926453e7;
      const expectedResponse = {
        name: name,
        score: score,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAssessment = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createAssessment(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createAssessment with error', done => {
      const client = new recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const assessment = {};
      const request = {
        parent: formattedParent,
        assessment: assessment,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAssessment = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createAssessment(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('annotateAssessment', () => {
    it('invokes annotateAssessment without error', done => {
      const client = new recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.assessmentPath('[PROJECT]', '[ASSESSMENT]');
      const annotation = 'ANNOTATION_UNSPECIFIED';
      const request = {
        name: formattedName,
        annotation: annotation,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.annotateAssessment = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.annotateAssessment(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes annotateAssessment with error', done => {
      const client = new recaptchaenterpriseModule.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.assessmentPath('[PROJECT]', '[ASSESSMENT]');
      const annotation = 'ANNOTATION_UNSPECIFIED';
      const request = {
        name: formattedName,
        annotation: annotation,
      };

      // Mock Grpc layer
      client._innerApiCalls.annotateAssessment = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.annotateAssessment(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
