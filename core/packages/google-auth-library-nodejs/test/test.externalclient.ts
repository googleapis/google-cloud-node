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
import {describe, it} from 'mocha';
import {AwsClient} from '../src/auth/awsclient';
import {IdentityPoolClient} from '../src/auth/identitypoolclient';
import {ExternalAccountClient} from '../src/auth/externalclient';
import {getAudience, getTokenUrl} from './externalclienthelper';
import {PluggableAuthClient} from '../src/auth/pluggable-auth-client';

const serviceAccountKeys = {
  type: 'service_account',
  project_id: 'PROJECT_ID',
  private_key_id: 'PRIVATE_KEY_ID',
  private_key:
    '-----BEGIN PRIVATE KEY-----\n' + 'REDACTED\n-----END PRIVATE KEY-----\n',
  client_email: '$PROJECT_ID@appspot.gserviceaccount.com',
  client_id: 'CLIENT_ID',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://accounts.google.com/o/oauth2/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/' +
    'PROEJCT_ID%40appspot.gserviceaccount.com',
};

const fileSourcedOptions = {
  type: 'external_account',
  audience: getAudience(),
  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
  token_url: getTokenUrl(),
  credential_source: {
    file: './test/fixtures/external-subject-token.txt',
  },
};

const metadataBaseUrl = 'http://169.254.169.254';
const awsCredentialSource = {
  environment_id: 'aws1',
  region_url: `${metadataBaseUrl}/latest/meta-data/placement/availability-zone`,
  url: `${metadataBaseUrl}/latest/meta-data/iam/security-credentials`,
  regional_cred_verification_url:
    'https://sts.{region}.amazonaws.com?' +
    'Action=GetCallerIdentity&Version=2011-06-15',
};
const awsOptions = {
  type: 'external_account',
  audience: getAudience(),
  subject_token_type: 'urn:ietf:params:aws:token-type:aws4_request',
  token_url: getTokenUrl(),
  credential_source: awsCredentialSource,
};

const pluggableAuthCredentialSource = {
  executable: {
    command: 'exampleCommand',
    timeout_millis: 30000,
    output_file: 'output.txt',
  },
};
const pluggableAuthClientOptions = {
  type: 'external_account',
  audience: getAudience(),
  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
  token_url: getTokenUrl(),
  credential_source: pluggableAuthCredentialSource,
};

describe('ExternalAccountClient', () => {
  describe('Constructor', () => {
    it('should throw on initialization', () => {
      assert.throws(() => {
        return new ExternalAccountClient();
      }, /ExternalAccountClients should be initialized via/);
    });
  });

  describe('fromJSON()', () => {
    const refreshOptions = {
      eagerRefreshThresholdMillis: 1000 * 10,
      forceRefreshOnFailure: true,
    };

    const invalidWorkforceIdentityPoolClientAudiences = [
      '//iam.googleapis.com/locations/global/workloadIdentityPools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcepools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools//providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools/providers/oidc',
      '//iam.googleapis.com/locations/global/workloadIdentityPools/workforcePools/pool/providers/oidc',
      '//iam.googleapis.com//locations/global/workforcePools/pool/providers/oidc',
      '//iam.googleapis.com/project/123/locations/global/workforcePools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools/workloadIdentityPools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools/pool/providers',
      '//iam.googleapis.com/locations/global/workforcePools/pool/providers/',
      '//iam.googleapis.com/locations//workforcePools/pool/providers/oidc',
      '//iam.googleapis.com/locations/workforcePools/pool/providers/oidc',
    ];

    it('should return IdentityPoolClient on IdentityPoolClientOptions', () => {
      const expectedClient = new IdentityPoolClient(fileSourcedOptions);

      assert.deepStrictEqual(
        ExternalAccountClient.fromJSON(fileSourcedOptions),
        expectedClient,
      );
    });

    it('should return IdentityPoolClient with expected RefreshOptions', () => {
      const expectedClient = new IdentityPoolClient({
        ...fileSourcedOptions,
        ...refreshOptions,
      });

      assert.deepStrictEqual(
        ExternalAccountClient.fromJSON({
          ...fileSourcedOptions,
          ...refreshOptions,
        }),
        expectedClient,
      );
    });

    it('should return AwsClient on AwsClientOptions', () => {
      const expectedClient = new AwsClient(awsOptions);

      assert.deepStrictEqual(
        ExternalAccountClient.fromJSON(awsOptions),
        expectedClient,
      );
    });

    it('should return AwsClient with expected RefreshOptions', () => {
      const expectedClient = new AwsClient({...awsOptions, ...refreshOptions});

      assert.deepStrictEqual(
        ExternalAccountClient.fromJSON({...awsOptions, ...refreshOptions}),
        expectedClient,
      );
    });

    it('should return an IdentityPoolClient with a workforce config', () => {
      const validWorkforceIdentityPoolClientAudiences = [
        '//iam.googleapis.com/locations/global/workforcePools/workforcePools/providers/provider',
        '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
        '//iam.googleapis.com/locations/global/workforcePools/workloadPools/providers/oidc',
      ];
      const workforceFileSourcedOptions = Object.assign(
        {},
        fileSourcedOptions,
        {
          workforce_pool_user_project: 'workforce_pool_user_project',
          subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
        },
      );
      for (const validWorkforceIdentityPoolClientAudience of validWorkforceIdentityPoolClientAudiences) {
        workforceFileSourcedOptions.audience =
          validWorkforceIdentityPoolClientAudience;
        const expectedClient = new IdentityPoolClient(
          workforceFileSourcedOptions,
        );

        assert.deepStrictEqual(
          ExternalAccountClient.fromJSON(workforceFileSourcedOptions),
          expectedClient,
        );
      }
    });

    it('should return PluggableAuthClient on PluggableAuthClientOptions', () => {
      const expectedClient = new PluggableAuthClient(
        pluggableAuthClientOptions,
      );

      assert.deepStrictEqual(
        ExternalAccountClient.fromJSON(pluggableAuthClientOptions),
        expectedClient,
      );
    });

    it('should return PluggableAuthClient with expected RefreshOptions', () => {
      const expectedClient = new PluggableAuthClient({
        ...pluggableAuthClientOptions,
        ...refreshOptions,
      });

      assert.deepStrictEqual(
        ExternalAccountClient.fromJSON({
          ...pluggableAuthClientOptions,
          ...refreshOptions,
        }),
        expectedClient,
      );
    });

    invalidWorkforceIdentityPoolClientAudiences.forEach(
      invalidWorkforceIdentityPoolClientAudience => {
        const workforceIdentityPoolClientInvalidOptions = Object.assign(
          {},
          fileSourcedOptions,
          {
            workforce_pool_user_project: 'workforce_pool_user_project',
            subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
          },
        );
        it(`should throw an error when an invalid workforce audience ${invalidWorkforceIdentityPoolClientAudience} is provided with a workforce user project`, () => {
          workforceIdentityPoolClientInvalidOptions.audience =
            invalidWorkforceIdentityPoolClientAudience;

          assert.throws(() => {
            return ExternalAccountClient.fromJSON(
              workforceIdentityPoolClientInvalidOptions,
            );
          });
        });
      },
    );

    it('should return null when given non-ExternalAccountClientOptions', () => {
      assert(
        ExternalAccountClient.fromJSON(
          serviceAccountKeys as ReturnType<JSON['parse']>,
        ) === null,
      );
    });

    it('should throw when given invalid ExternalAccountClient', () => {
      const invalidOptions = Object.assign({}, fileSourcedOptions);
      delete (invalidOptions as Partial<typeof fileSourcedOptions>)
        .credential_source;

      assert.throws(() => {
        return ExternalAccountClient.fromJSON(invalidOptions);
      });
    });

    it('should throw when given invalid IdentityPoolClient', () => {
      const invalidOptions = Object.assign({}, fileSourcedOptions);
      (invalidOptions as ReturnType<JSON['parse']>).credential_source = {};

      assert.throws(() => {
        return ExternalAccountClient.fromJSON(invalidOptions);
      });
    });

    it('should throw when given invalid AwsClientOptions', () => {
      const invalidOptions = Object.assign({}, awsOptions);
      invalidOptions.credential_source.environment_id = 'invalid';

      assert.throws(() => {
        return ExternalAccountClient.fromJSON(invalidOptions);
      });
    });

    it('should throw when given invalid PluggableAuthClientOptions', () => {
      const invalidOptions = Object.assign({}, pluggableAuthClientOptions);
      invalidOptions.credential_source.executable.command = 'command';
      invalidOptions.credential_source.executable.timeout_millis = -1;

      assert.throws(() => {
        return ExternalAccountClient.fromJSON(invalidOptions);
      });
    });
  });
});
