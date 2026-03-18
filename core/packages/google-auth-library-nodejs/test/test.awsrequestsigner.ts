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

import * as assert from 'assert';
import {describe, it, afterEach, beforeEach} from 'mocha';
import * as sinon from 'sinon';
import {AwsRequestSigner} from '../src/auth/awsrequestsigner';
import {GaxiosOptions} from 'gaxios';
import {TestUtils} from './utils';
/** Defines the interface to facilitate testing of AWS request signing. */
interface AwsRequestSignerTest {
  // Test description.
  description: string;
  // The mock time when the signature is generated.
  referenceDate: Date;
  // AWS request signer instance.
  instance: AwsRequestSigner;
  // The raw input request.
  originalRequest: GaxiosOptions;
  // The expected signed output request.
  getSignedRequest: () => GaxiosOptions;
}

describe('AwsRequestSigner', () => {
  let clock: sinon.SinonFakeTimers;
  // Load AWS credentials from a sample security_credentials response.
  const awsSecurityCredentials = require('../../test/fixtures/aws-security-credentials-fake.json');
  const accessKeyId = awsSecurityCredentials.AccessKeyId;
  const secretAccessKey = awsSecurityCredentials.SecretAccessKey;
  const token = awsSecurityCredentials.Token;

  beforeEach(() => {
    clock = TestUtils.useFakeTimers(sinon);
  });

  afterEach(() => {
    if (clock) {
      clock.restore();
    }
  });

  describe('getRequestOptions()', () => {
    const awsError = new Error('Error retrieving AWS security credentials');
    // Successful AWS credentials retrieval.
    // In this case, temporary credentials are returned.
    const getCredentials = async () => {
      return {
        accessKeyId,
        secretAccessKey,
        token,
      };
    };
    // Successful AWS credentials retrieval.
    // In this case, permanent credentials are returned (no session token).
    const getCredentialsWithoutToken = async () => {
      return {
        accessKeyId,
        secretAccessKey,
      };
    };
    // Failing AWS credentials retrieval.
    const getCredentialsUnsuccessful = async () => {
      throw awsError;
    };
    // Sample request parameters.
    const requestParams = {
      KeySchema: [
        {
          KeyType: 'HASH',
          AttributeName: 'Id',
        },
      ],
      TableName: 'TestTable',
      AttributeDefinitions: [
        {
          AttributeName: 'Id',
          AttributeType: 'S',
        },
      ],
      ProvisionedThroughput: {
        WriteCapacityUnits: 5,
        ReadCapacityUnits: 5,
      },
    };
    // List of various requests and their expected signatures.
    // Examples source:
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-signed-request-examples.html
    const getRequestOptionsTests: AwsRequestSignerTest[] = [
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-vanilla.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-vanilla.sreq
        description: 'signed GET request (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'GET',
          url: 'https://host.foo.com',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          },
        },
        getSignedRequest: () => {
          const signature =
            'b27ccfbfa7df52a200ff74193ca6e32d4b48b8856fab7ebf1c595d0670a7e470';
          return {
            url: 'https://host.foo.com',
            method: 'GET',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-relative-relative.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-relative-relative.sreq
        description:
          'signed GET request with relative path (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'GET',
          url: 'https://host.foo.com/foo/bar/../..',
          headers: new Headers({
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          }),
        },
        getSignedRequest: () => {
          const signature =
            'b27ccfbfa7df52a200ff74193ca6e32d4b48b8856fab7ebf1c595d0670a7e470';
          return {
            url: 'https://host.foo.com/foo/bar/../..',
            method: 'GET',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-slash-dot-slash.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-slash-dot-slash.sreq
        description: 'signed GET request with /./ path (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'GET',
          url: 'https://host.foo.com/./',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          },
        },
        getSignedRequest: () => {
          const signature =
            'b27ccfbfa7df52a200ff74193ca6e32d4b48b8856fab7ebf1c595d0670a7e470';
          return {
            url: 'https://host.foo.com/./',
            method: 'GET',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-slash-pointless-dot.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-slash-pointless-dot.sreq
        description:
          'signed GET request with pointless dot path (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'GET',
          url: 'https://host.foo.com/./foo',
          headers: new Headers({
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          }),
        },
        getSignedRequest: () => {
          const signature =
            '910e4d6c9abafaf87898e1eb4c929135782ea25bb0279703146455745391e63a';
          return {
            url: 'https://host.foo.com/./foo',
            method: 'GET',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-utf8.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-utf8.sreq
        description: 'signed GET request with utf8 path (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'GET',
          url: 'https://host.foo.com/%E1%88%B4',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          },
        },
        getSignedRequest: () => {
          const signature =
            '8d6634c189aa8c75c2e51e106b6b5121bed103fdb351f7d7d4381c738823af74';
          return {
            url: 'https://host.foo.com/%E1%88%B4',
            method: 'GET',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-vanilla-query-order-key-case.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-vanilla-query-order-key-case.sreq
        description:
          'signed GET request with uplicate query key (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'GET',
          url: 'https://host.foo.com/?foo=Zoo&foo=aha',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          },
        },
        getSignedRequest: () => {
          const signature =
            'be7148d34ebccdc6423b19085378aa0bee970bdc61d144bd1a8c48c33079ab09';
          return {
            url: 'https://host.foo.com/?foo=Zoo&foo=aha',
            method: 'GET',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-vanilla-ut8-query.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-vanilla-ut8-query.sreq
        description: 'signed GET request with utf8 query (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'GET',
          url: 'https://host.foo.com/?ሴ=bar',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          },
        },
        getSignedRequest: () => {
          const signature =
            '6fb359e9a05394cc7074e0feb42573a2601abc0c869a953e8c5c12e4e01f1a8c';
          return {
            url: 'https://host.foo.com/?ሴ=bar',
            method: 'GET',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-header-key-sort.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-header-key-sort.sreq
        description:
          'signed POST request with sorted headers (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'POST',
          url: 'https://host.foo.com/',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            ZOO: 'zoobar',
          },
        },
        getSignedRequest: () => {
          const signature =
            'b7a95a52518abbca0964a999a880429ab734f35ebbf1235bd79a5de87756dc4a';
          return {
            url: 'https://host.foo.com/',
            method: 'POST',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host;zoo, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
              zoo: 'zoobar',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-header-value-case.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-header-value-case.sreq
        description:
          'signed POST request with upper case header value from ' +
          'AWS Python test harness',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'POST',
          url: 'https://host.foo.com/',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            zoo: 'ZOOBAR',
          },
        },
        getSignedRequest: () => {
          const signature =
            '273313af9d0c265c531e11db70bbd653f3ba074c1009239e8559d3987039cad7';
          return {
            url: 'https://host.foo.com/',
            method: 'POST',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host;zoo, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
              zoo: 'ZOOBAR',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.sreq
        description:
          'signed POST request with header and no body (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'POST',
          url: 'https://host.foo.com',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            p: 'phfft',
          },
        },
        getSignedRequest: () => {
          const signature =
            'debf546796015d6f6ded8626f5ce98597c33b47b9164cf6b17b4642036fcb592';
          return {
            url: 'https://host.foo.com',
            method: 'POST',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host;p, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
              p: 'phfft',
            }),
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-x-www-form-urlencoded.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-x-www-form-urlencoded.sreq
        description:
          'signed POST request with body and no header (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'POST',
          url: 'https://host.foo.com',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          },
          body: 'foo=bar',
        },
        getSignedRequest: () => {
          const signature =
            '5a15b22cf462f047318703b92e6f4f38884e4a7ab7b1d6426ca46a8bd1c26cbc';
          return {
            url: 'https://host.foo.com',
            method: 'POST',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                'aws4_request, SignedHeaders=content-type;date;host, ' +
                `Signature=${signature}`,
              host: 'host.foo.com',
              'content-type': 'application/x-www-form-urlencoded',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
            body: 'foo=bar',
          };
        },
      },
      {
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-vanilla-query.req
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/post-vanilla-query.sreq
        description:
          'signed POST request with querystring (AWS botocore tests)',
        referenceDate: new Date('2011-09-09T23:36:00.000Z'),
        instance: new AwsRequestSigner(async () => {
          return {
            accessKeyId: 'AKIDEXAMPLE',
            secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
          };
        }, 'us-east-1'),
        originalRequest: {
          method: 'POST',
          url: 'https://host.foo.com/?foo=bar',
          headers: {
            date: 'Mon, 09 Sep 2011 23:36:00 GMT',
          },
        },
        getSignedRequest: () => {
          const signature =
            'b6e3b79003ce0743a491606ba1035a804593b0efb1e20a11cba83f8c25a57a92';
          return {
            url: 'https://host.foo.com/?foo=bar',
            method: 'POST',
            headers: new Headers({
              authorization:
                'AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20110909/us-east-1/host/' +
                `aws4_request, SignedHeaders=date;host, Signature=${signature}`,
              host: 'host.foo.com',
              date: 'Mon, 09 Sep 2011 23:36:00 GMT',
            }),
          };
        },
      },
      {
        description: 'signed GET request',
        referenceDate: new Date('2020-08-11T06:55:22.345Z'),
        instance: new AwsRequestSigner(getCredentials, 'us-east-2'),
        originalRequest: {
          url:
            'https://ec2.us-east-2.amazonaws.com?' +
            'Action=DescribeRegions&Version=2013-10-15',
        },
        getSignedRequest: () => {
          const amzDate = '20200811T065522Z';
          const dateStamp = '20200811';
          const signature =
            '631ea80cddfaa545fdadb120dc92c9f18166e38a5c47b50fab9fce476e022855';
          return {
            url:
              'https://ec2.us-east-2.amazonaws.com?' +
              'Action=DescribeRegions&Version=2013-10-15',
            method: 'GET',
            headers: new Headers({
              authorization:
                `AWS4-HMAC-SHA256 Credential=${accessKeyId}/` +
                `${dateStamp}/us-east-2/ec2/aws4_request, SignedHeaders=host;` +
                `x-amz-date;x-amz-security-token, Signature=${signature}`,
              host: 'ec2.us-east-2.amazonaws.com',
              'x-amz-date': amzDate,
              'x-amz-security-token': token,
            }),
          };
        },
      },
      {
        description: 'signed POST request',
        referenceDate: new Date('2020-08-11T06:55:22.345Z'),
        instance: new AwsRequestSigner(getCredentials, 'us-east-2'),
        originalRequest: {
          url:
            'https://sts.us-east-2.amazonaws.com' +
            '?Action=GetCallerIdentity&Version=2011-06-15',
          method: 'POST',
        },
        getSignedRequest: () => {
          const amzDate = '20200811T065522Z';
          const dateStamp = '20200811';
          const signature =
            '73452984e4a880ffdc5c392355733ec3f5ba310d5e0609a89244440cadfe7a7a';
          return {
            url:
              'https://sts.us-east-2.amazonaws.com' +
              '?Action=GetCallerIdentity&Version=2011-06-15',
            method: 'POST',
            headers: new Headers({
              'x-amz-date': amzDate,
              authorization:
                `AWS4-HMAC-SHA256 Credential=${accessKeyId}/` +
                `${dateStamp}/us-east-2/sts/aws4_request, SignedHeaders=host;` +
                `x-amz-date;x-amz-security-token, Signature=${signature}`,
              host: 'sts.us-east-2.amazonaws.com',
              'x-amz-security-token': token,
            }),
          };
        },
      },
      {
        description: 'signed request when AWS credentials have no token',
        referenceDate: new Date('2020-08-11T06:55:22.345Z'),
        instance: new AwsRequestSigner(getCredentialsWithoutToken, 'us-east-2'),
        originalRequest: {
          url:
            'https://sts.us-east-2.amazonaws.com' +
            '?Action=GetCallerIdentity&Version=2011-06-15',
          method: 'POST',
        },
        getSignedRequest: () => {
          const amzDate = '20200811T065522Z';
          const dateStamp = '20200811';
          const signature =
            'd095ba304919cd0d5570ba8a3787884ee78b860f268ed040ba23831d55536d56';
          return {
            url:
              'https://sts.us-east-2.amazonaws.com' +
              '?Action=GetCallerIdentity&Version=2011-06-15',
            method: 'POST',
            headers: new Headers({
              'x-amz-date': amzDate,
              authorization:
                `AWS4-HMAC-SHA256 Credential=${accessKeyId}/` +
                `${dateStamp}/us-east-2/sts/aws4_request, SignedHeaders=host;` +
                `x-amz-date, Signature=${signature}`,
              host: 'sts.us-east-2.amazonaws.com',
            }),
          };
        },
      },
      {
        description: 'signed POST request with additional headers/body',
        referenceDate: new Date('2020-08-11T06:55:22.345Z'),
        instance: new AwsRequestSigner(getCredentials, 'us-east-2'),
        originalRequest: {
          url: 'https://dynamodb.us-east-2.amazonaws.com/',
          method: 'POST',
          headers: {
            'content-type': 'application/x-amz-json-1.0',
            'x-amz-target': 'DynamoDB_20120810.CreateTable',
          },
          body: JSON.stringify(requestParams),
        },
        getSignedRequest: () => {
          const amzDate = '20200811T065522Z';
          const dateStamp = '20200811';
          const signature =
            'fdaa5b9cc9c86b80fe61eaf504141c0b3523780349120f2bd8145448456e0385';
          return {
            url: 'https://dynamodb.us-east-2.amazonaws.com/',
            method: 'POST',
            headers: new Headers({
              authorization:
                `AWS4-HMAC-SHA256 Credential=${accessKeyId}/` +
                `${dateStamp}/us-east-2/dynamodb/aws4_request, SignedHeaders=` +
                'content-type;host;x-amz-date;x-amz-security-token;x-amz-target' +
                `, Signature=${signature}`,
              'content-type': 'application/x-amz-json-1.0',
              host: 'dynamodb.us-east-2.amazonaws.com',
              'x-amz-date': amzDate,
              'x-amz-security-token': token,
              'x-amz-target': 'DynamoDB_20120810.CreateTable',
            }),
            body: JSON.stringify(requestParams),
          };
        },
      },
      {
        description: 'signed POST request with additional headers/data',
        referenceDate: new Date('2020-08-11T06:55:22.345Z'),
        instance: new AwsRequestSigner(getCredentials, 'us-east-2'),
        originalRequest: {
          url: 'https://dynamodb.us-east-2.amazonaws.com/',
          method: 'POST',
          headers: {
            'content-type': 'application/x-amz-json-1.0',
            'x-amz-target': 'DynamoDB_20120810.CreateTable',
          },
          data: requestParams,
        },
        getSignedRequest: () => {
          const amzDate = '20200811T065522Z';
          const dateStamp = '20200811';
          const signature =
            'fdaa5b9cc9c86b80fe61eaf504141c0b3523780349120f2bd8145448456e0385';
          return {
            url: 'https://dynamodb.us-east-2.amazonaws.com/',
            method: 'POST',
            headers: new Headers({
              authorization:
                `AWS4-HMAC-SHA256 Credential=${accessKeyId}/` +
                `${dateStamp}/us-east-2/dynamodb/aws4_request, SignedHeaders=` +
                'content-type;host;x-amz-date;x-amz-security-token;x-amz-target' +
                `, Signature=${signature}`,
              'content-type': 'application/x-amz-json-1.0',
              host: 'dynamodb.us-east-2.amazonaws.com',
              'x-amz-date': amzDate,
              'x-amz-security-token': token,
              'x-amz-target': 'DynamoDB_20120810.CreateTable',
            }),
            body: JSON.stringify(requestParams),
          };
        },
      },
    ];

    getRequestOptionsTests.forEach(test => {
      it(`should resolve with the expected ${test.description}`, async () => {
        clock.tick(test.referenceDate.getTime());
        const actualSignedRequest = await test.instance.getRequestOptions(
          test.originalRequest,
        );
        assert.deepStrictEqual(actualSignedRequest, test.getSignedRequest());
      });
    });

    it('should reject with underlying getCredentials error', async () => {
      const awsRequestSigner = new AwsRequestSigner(
        getCredentialsUnsuccessful,
        'us-east-2',
      );
      const options: GaxiosOptions = {
        url:
          'https://sts.us-east-2.amazonaws.com' +
          '?Action=GetCallerIdentity&Version=2011-06-15',
        method: 'POST',
      };

      await assert.rejects(
        awsRequestSigner.getRequestOptions(options),
        awsError,
      );
    });

    it('should reject when no URL is available', async () => {
      const invalidOptionsError = new RangeError(
        '"url" is required in "amzOptions"',
      );
      const awsRequestSigner = new AwsRequestSigner(
        getCredentials,
        'us-east-2',
      );

      await assert.rejects(
        awsRequestSigner.getRequestOptions({}),
        invalidOptionsError,
      );
    });
  });
});
