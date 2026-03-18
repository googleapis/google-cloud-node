// Copyright 2025 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

('use strict');
require('dotenv').config();

const {AwsClient} = require('google-auth-library');
const {fromNodeProviderChain} = require('@aws-sdk/credential-providers');
const {STSClient} = require('@aws-sdk/client-sts');

/**
 * Custom AWS Security Credentials Supplier.
 *
 * This implementation resolves AWS credentials using the default Node provider
 * chain from the AWS SDK. This allows fetching credentials from environment
 * variables, shared credential files (~/.aws/credentials), or IAM roles
 * for service accounts (IRSA) in EKS, etc.
 */
class CustomAwsSupplier {
  constructor() {
    // Will be cached upon first resolution.
    this.region = null;

    // Initialize the AWS credential provider.
    // The AWS SDK handles memoization (caching) and proactive refreshing internally.
    this.awsCredentialsProvider = fromNodeProviderChain();
  }

  /**
   * Returns the AWS region. This is required for signing the AWS request.
   * It resolves the region automatically by using the default AWS region
   * provider chain, which searches for the region in the standard locations
   * (environment variables, AWS config file, etc.).
   */
  async getAwsRegion(_context) {
    if (this.region) {
      return this.region;
    }

    const client = new STSClient({});
    this.region = await client.config.region();

    if (!this.region) {
      throw new Error(
        'CustomAwsSupplier: Unable to resolve AWS region. Please set the AWS_REGION environment variable or configure it in your ~/.aws/config file.',
      );
    }

    return this.region;
  }

  /**
   * Retrieves AWS security credentials using the AWS SDK's default provider chain.
   */
  async getAwsSecurityCredentials(_context) {
    // Call the initialized provider. It will return cached creds or refresh if needed.
    const awsCredentials = await this.awsCredentialsProvider();

    // This check is often redundant as the SDK provider throws on failure,
    // but serves as an extra safeguard.
    if (!awsCredentials.accessKeyId || !awsCredentials.secretAccessKey) {
      throw new Error(
        'Unable to resolve AWS credentials from the node provider chain. ' +
          'Ensure your AWS CLI is configured, or AWS environment variables (like AWS_ACCESS_KEY_ID) are set.',
      );
    }

    // Map the AWS SDK format to the google-auth-library format.
    const awsSecurityCredentials = {
      accessKeyId: awsCredentials.accessKeyId,
      secretAccessKey: awsCredentials.secretAccessKey,
      token: awsCredentials.sessionToken,
    };

    return awsSecurityCredentials;
  }
}

async function main() {
  const gcpAudience = process.env.GCP_WORKLOAD_AUDIENCE;
  const saImpersonationUrl = process.env.GCP_SERVICE_ACCOUNT_IMPERSONATION_URL;
  const gcsBucketName = process.env.GCS_BUCKET_NAME;

  if (!gcpAudience || !saImpersonationUrl || !gcsBucketName) {
    throw new Error(
      'Missing required environment variables. Please check your .env file or environment settings. Required: GCP_WORKLOAD_AUDIENCE, GCP_SERVICE_ACCOUNT_IMPERSONATION_URL, GCS_BUCKET_NAME',
    );
  }

  // 1. Instantiate the custom supplier.
  const customSupplier = new CustomAwsSupplier();

  // 2. Configure the AwsClient options using the constants.
  const clientOptions = {
    audience: gcpAudience,
    subject_token_type: 'urn:ietf:params:aws:token-type:aws4_request',
    service_account_impersonation_url: saImpersonationUrl,
    aws_security_credentials_supplier: customSupplier,
  };

  // 3. Create the auth client
  const client = new AwsClient(clientOptions);

  // 4. Construct the URL for the Cloud Storage JSON API to get bucket metadata.

  const bucketUrl = `https://storage.googleapis.com/storage/v1/b/${gcsBucketName}`;
  console.log(`[Test] Getting metadata for bucket: ${gcsBucketName}...`);
  console.log(`[Test] Request URL: ${bucketUrl}`);

  // 5. Use the client to make an authenticated request.
  const res = await client.request({url: bucketUrl});

  console.log('\n--- SUCCESS! ---');
  console.log('Successfully authenticated and retrieved bucket data:');
  console.log(JSON.stringify(res.data, null, 2));
}

// Execute the test.
main().catch(error => {
  console.error('\n--- FAILED ---');
  const fullError = error.response?.data || error;
  console.error(JSON.stringify(fullError, null, 2));
  process.exitCode = 1;
});
