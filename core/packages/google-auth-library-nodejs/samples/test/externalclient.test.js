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

// Prerequisites:
// Make sure to run the setup in samples/scripts/externalclient-setup.js
// and copy the logged constant strings (AUDIENCE_OIDC, AUDIENCE_AWS and
// AWS_ROLE_ARN) into this file before running this test suite.
// Once that is done, this test can be run indefinitely.
//
// The only requirement for this test suite to run is to set the environment
// variable GOOGLE_APPLICATION_CREDENTIALS to point to the same service account
// keys used in the setup script.
//
// This script follows the following logic.
// 1. OIDC provider (file-sourced and url-sourced credentials):
// Use the service account keys to generate a Google ID token using the
// iamcredentials generateIdToken API, using the default STS audience.
// This will use the service account client ID as the sub field of the token.
// This OIDC token will be used as the external subject token to be exchanged
// for a Google access token via GCP STS endpoint and then to impersonate the
// original service account key. This is abstracted by the GoogleAuth library.
// 2. AWS provider:
// Use the service account keys to generate a Google ID token using the
// iamcredentials generateIdToken API, using the client_id as audience.
// Exchange the OIDC ID token for AWS security keys using AWS STS
// AssumeRoleWithWebIdentity API. These values will be set as AWS environment
// variables to simulate an AWS VM. The Auth library can now read these
// variables and create a signed request to AWS GetCallerIdentity. This will
// be used as the external subject token to be exchanged for a Google access
// token via GCP STS endpoint and then to impersonate the original service
// account key. This is abstracted by the GoogleAuth library.
//
// OIDC provider tests for file-sourced and url-sourced credentials
// ----------------------------------------------------------------
// The test suite will run tests for file-sourced and url-sourced credentials.
// In both cases, the same Google OIDC token is used as the underlying subject
// token.
//
// AWS provider tests for AWS credentials
// -------------------------------------
// The test suite will also run tests for AWS credentials. This works as
// follows. (Note prerequisite setup is needed. This is documented in
// externalclient-setup.js).
// - iamcredentials:generateIdToken is used to generate a Google ID token using
//   the service account access token. The service account client_id is used as
//   audience.
// - AWS STS AssumeRoleWithWebIdentity API is used to exchange this token for
//   temporary AWS security credentials for a specified AWS ARN role.
// - AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN
//   environment variables are set using these credentials before the test is
//   run simulating an AWS VM.
// - The test can now be run.
//
// For each test, a sample script is run in a child process with
// GOOGLE_APPLICATION_CREDENTIALS environment variable pointing to a temporary
// workload identity pool credentials configuration. A Cloud API is called in
// the process and the expected output is confirmed.

const cp = require('child_process');
const {assert} = require('chai');
const {describe, it, before, afterEach} = require('mocha');
const fs = require('fs');
const {promisify} = require('util');
const {GoogleAuth, IdentityPoolClient, gaxios} = require('google-auth-library');
const os = require('os');
const path = require('path');
const http = require('http');

/**
 * Runs the provided command using asynchronous child_process.exec.
 * Unlike execSync, this works with another local HTTP server running in the
 * background.
 * @param {string} cmd The actual command string to run.
 * @param {*} opts The optional parameters for child_process.exec.
 * @return {Promise<string>} A promise that resolves with a string
 *   corresponding with the terminal output.
 */
const execAsync = async (cmd, opts) => {
  const {stdout, stderr} = await exec(cmd, opts);
  return stdout + stderr;
};

/**
 * Generates a Google ID token using the iamcredentials generateIdToken API.
 * https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials#sa-credentials-oidc
 *
 * @param {GoogleAuth} auth The GoogleAuth instance.
 * @param {string} aud The Google ID token audience.
 * @param {string} clientEmail The service account client email.
 * @return {Promise<string>} A promise that resolves with the generated Google
 *   ID token.
 */
const generateGoogleIdToken = async (auth, aud, clientEmail) => {
  // roles/iam.serviceAccountTokenCreator role needed.
  const response = await auth.request({
    url:
      'https://iamcredentials.googleapis.com/v1/' +
      `projects/-/serviceAccounts/${clientEmail}:generateIdToken`,
    method: 'POST',
    data: {
      audience: aud,
      includeEmail: true,
    },
  });
  return response.data.token;
};

/**
 * Rudimentary value lookup within an XML file by tagName.
 * @param {string} rawXml The raw XML string.
 * @param {string} tagName The name of the tag whose value is to be returned.
 * @return {?string} The value if found, null otherwise.
 */
const getXmlValueByTagName = (rawXml, tagName) => {
  const startIndex = rawXml.indexOf(`<${tagName}>`);
  const endIndex = rawXml.indexOf(`</${tagName}>`, startIndex);
  if (startIndex >= 0 && endIndex > startIndex) {
    return rawXml.substring(startIndex + tagName.length + 2, endIndex);
  }
  return null;
};

/**
 * Generates a Google OIDC ID token and exchanges it for AWS security credentials
 * using the AWS STS AssumeRoleWithWebIdentity API.
 * @param {GoogleAuth} auth The GoogleAuth instance.
 * @param {string} aud The Google ID token audience.
 * @param {string} clientEmail The service account client email.
 * @param {string} awsRoleArn The Amazon Resource Name (ARN) of the role that
 *   the caller is assuming.
 * @return {Promise<Object>} A promise that resolves with the generated AWS
 *   security credentials.
 */
const assumeRoleWithWebIdentity = async (
  auth,
  aud,
  clientEmail,
  awsRoleArn,
) => {
  // API documented at:
  // https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html
  // Note that a role for web identity or OIDC federation will need to have
  // been configured:
  // https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html
  const oidcToken = await generateGoogleIdToken(auth, aud, clientEmail);
  const transporter = new gaxios.Gaxios();

  const url = new URL('https://sts.amazonaws.com/');
  url.searchParams.append('Action', 'AssumeRoleWithWebIdentity');
  url.searchParams.append('Version', '2011-06-15');
  url.searchParams.append('DurationSeconds', '3600');
  url.searchParams.append('RoleSessionName', 'nodejs-test');
  url.searchParams.append('RoleArn', awsRoleArn);
  url.searchParams.append('WebIdentityToken', oidcToken);

  // The response is in XML format but we will parse it as text.
  const response = await transporter.request({url, responseType: 'text'});
  const rawXml = response.data;
  return {
    awsAccessKeyId: getXmlValueByTagName(rawXml, 'AccessKeyId'),
    awsSecretAccessKey: getXmlValueByTagName(rawXml, 'SecretAccessKey'),
    awsSessionToken: getXmlValueByTagName(rawXml, 'SessionToken'),
  };
};

/**
 * Generates a random string of the specified length, optionally using the
 * specified alphabet.
 *
 * @param {number} length The length of the string to generate.
 * @return {string} A random string of the provided length.
 */
const generateRandomString = length => {
  const chars = [];
  const allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  while (length > 0) {
    chars.push(
      allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)),
    );
    length--;
  }
  return chars.join('');
};

//////////////////////////////////////////////////////////////////////////
// Copy values from the output of samples/scripts/externalclient-setup.js.
// OIDC provider STS audience.
const AUDIENCE_OIDC =
  '//iam.googleapis.com/projects/1046198160504/locations/global/' +
  'workloadIdentityPools/pool-95vux39vzm/providers/oidc-95vux39vzm';
// AWS provider STS audience.
const AUDIENCE_AWS =
  '//iam.googleapis.com/projects/1046198160504/locations/global/' +
  'workloadIdentityPools/pool-95vux39vzm/providers/aws-95vux39vzm';
// AWS ARN role used for federating from GCP to AWS via
// AssumeRoleWithWebIdentity.
const AWS_ROLE_ARN = 'arn:aws:iam::077071391996:role/ci-nodejs-test';
//////////////////////////////////////////////////////////////////////////
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const exec = promisify(cp.exec);
const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;

describe('samples for external-account', () => {
  let httpServer;
  let clientEmail;
  let oidcToken;
  let awsCredentials;
  const port = 8088;
  const suffix = generateRandomString(10);
  const configFilePath = path.join(os.tmpdir(), `config-${suffix}.json`);
  const oidcTokenFilePath = path.join(os.tmpdir(), `token-${suffix}.txt`);
  const executableFilePath = path.join(os.tmpdir(), `executable-${suffix}.sh`);
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/cloud-platform',
  });

  before(async () => {
    const keys = JSON.parse(await readFile(keyFile, 'utf8'));
    const clientId = keys.client_id;
    clientEmail = keys.client_email;

    // Generate the Google OIDC token. This will be used as the external
    // subject token for the following OIDC file-sourced and url-sourced
    // credential tests.
    oidcToken = await generateGoogleIdToken(auth, AUDIENCE_OIDC, clientEmail);
    // Generate the AWS security keys. These will be used to similate an
    // AWS VM to test external account AWS credentials.
    awsCredentials = await assumeRoleWithWebIdentity(
      auth,
      clientId,
      clientEmail,
      AWS_ROLE_ARN,
    );
  });

  afterEach(async () => {
    // Delete temporary files.
    if (fs.existsSync(configFilePath)) {
      await unlink(configFilePath);
    }
    if (fs.existsSync(oidcTokenFilePath)) {
      await unlink(oidcTokenFilePath);
    }
    if (fs.existsSync(executableFilePath)) {
      await unlink(executableFilePath);
    }
    // Close any open http servers.
    if (httpServer) {
      httpServer.close();
    }
  });

  it('should acquire ADC for file-sourced creds', async () => {
    // Create file-sourced configuration JSON file.
    // The created OIDC token will be used as the subject token and will be
    // retrieved from a file location.
    const config = {
      type: 'external_account',
      audience: AUDIENCE_OIDC,
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      token_url: 'https://sts.googleapis.com/v1/token',
      service_account_impersonation_url:
        'https://iamcredentials.googleapis.com/v1/projects/' +
        `-/serviceAccounts/${clientEmail}:generateAccessToken`,
      credential_source: {
        file: oidcTokenFilePath,
      },
    };
    await writeFile(oidcTokenFilePath, oidcToken);
    await writeFile(configFilePath, JSON.stringify(config));

    // Run sample script with GOOGLE_APPLICATION_CREDENTIALS envvar
    // pointing to the temporarily created configuration file.
    const output = await execAsync(`${process.execPath} adc`, {
      env: {
        ...process.env,
        GOOGLE_APPLICATION_CREDENTIALS: configFilePath,
      },
    });
    // Confirm expected script output.
    assert.match(output, /DNS Info:/, output);
  });

  it('should sign the blobs with IAM credentials API', async () => {
    // Create file-sourced configuration JSON file.
    // The created OIDC token will be used as the subject token and will be
    // retrieved from a file location.
    const config = {
      type: 'external_account',
      audience: AUDIENCE_OIDC,
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      token_url: 'https://sts.googleapis.com/v1/token',
      service_account_impersonation_url:
        'https://iamcredentials.googleapis.com/v1/projects/' +
        `-/serviceAccounts/${clientEmail}:generateAccessToken`,
      credential_source: {
        file: oidcTokenFilePath,
      },
    };
    await writeFile(oidcTokenFilePath, oidcToken);
    await writeFile(configFilePath, JSON.stringify(config));

    // Run sample script with GOOGLE_APPLICATION_CREDENTIALS envvar
    // pointing to the temporarily created configuration file.
    // This script will use signBlob to sign some data using
    // service account impersonated workload identity pool credentials.
    const output = await execAsync(`${process.execPath} signBlob`, {
      env: {
        ...process.env,
        GOOGLE_APPLICATION_CREDENTIALS: configFilePath,
      },
    });
    assert.ok(output.length > 0);
  });

  it('should acquire ADC for url-sourced creds', async () => {
    // Create url-sourced configuration JSON file.
    // The created OIDC token will be used as the subject token and will be
    // retrieved from a local server.
    const config = {
      type: 'external_account',
      audience: AUDIENCE_OIDC,
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      token_url: 'https://sts.googleapis.com/v1/token',
      service_account_impersonation_url:
        'https://iamcredentials.googleapis.com/v1/projects/' +
        `-/serviceAccounts/${clientEmail}:generateAccessToken`,
      credential_source: {
        url: `http://localhost:${port}/token`,
        headers: {
          'my-header': 'some-value',
        },
        format: {
          type: 'json',
          subject_token_field_name: 'access_token',
        },
      },
    };
    await writeFile(configFilePath, JSON.stringify(config));
    // Start local metadata server. This will expose a /token
    // endpoint to return the OIDC token in JSON format.
    httpServer = http.createServer((req, res) => {
      if (req.url === '/token' && req.method === 'GET') {
        // Confirm expected header is passed along the request.
        if (req.headers['my-header'] === 'some-value') {
          res.setHeader('content-type', 'application/json');
          res.writeHead(200);
          res.end(
            JSON.stringify({
              access_token: oidcToken,
            }),
          );
        } else {
          res.setHeader('content-type', 'application/json');
          res.writeHead(400);
          res.end(
            JSON.stringify({
              error: 'missing-header',
            }),
          );
        }
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({error: 'Resource not found'}));
      }
    });
    await new Promise(resolve => {
      httpServer.listen(port, resolve);
    });

    // Run sample script with GOOGLE_APPLICATION_CREDENTIALS environment
    // variable pointing to the temporarily created configuration file.
    const output = await execAsync(`${process.execPath} adc`, {
      env: {
        ...process.env,
        GOOGLE_APPLICATION_CREDENTIALS: configFilePath,
      },
    });
    // Confirm expected script output.
    assert.match(output, /DNS Info:/, output);
  });

  it('should acquire ADC for AWS creds', async () => {
    // Create AWS configuration JSON file.
    const config = {
      type: 'external_account',
      audience: AUDIENCE_AWS,
      subject_token_type: 'urn:ietf:params:aws:token-type:aws4_request',
      token_url: 'https://sts.googleapis.com/v1/token',
      service_account_impersonation_url:
        'https://iamcredentials.googleapis.com/v1/projects/' +
        `-/serviceAccounts/${clientEmail}:generateAccessToken`,
      credential_source: {
        environment_id: 'aws1',
        regional_cred_verification_url:
          'https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15',
      },
    };
    await writeFile(configFilePath, JSON.stringify(config));

    // Run sample script with GOOGLE_APPLICATION_CREDENTIALS environment
    // variable pointing to the temporarily created configuration file.
    // Populate AWS environment variables to simulate an AWS VM.
    const output = await execAsync(`${process.execPath} adc`, {
      env: {
        ...process.env,
        // AWS environment variables: hardcoded region + AWS security
        // credentials.
        AWS_REGION: 'us-east-2',
        AWS_ACCESS_KEY_ID: awsCredentials.awsAccessKeyId,
        AWS_SECRET_ACCESS_KEY: awsCredentials.awsSecretAccessKey,
        AWS_SESSION_TOKEN: awsCredentials.awsSessionToken,
        // GOOGLE_APPLICATION_CREDENTIALS environment variable used for ADC.
        GOOGLE_APPLICATION_CREDENTIALS: configFilePath,
      },
    });
    // Confirm expected script output.
    assert.match(output, /DNS Info:/, output);
  });

  it('should acquire ADC for PluggableAuth creds', async () => {
    // Create Pluggable Auth configuration JSON file.
    const config = {
      type: 'external_account',
      audience: AUDIENCE_OIDC,
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      token_url: 'https://sts.googleapis.com/v1/token',
      service_account_impersonation_url:
        'https://iamcredentials.googleapis.com/v1/projects/' +
        `-/serviceAccounts/${clientEmail}:generateAccessToken`,
      credential_source: {
        executable: {
          command: executableFilePath,
          timeout_millis: 5000,
        },
      },
    };
    await writeFile(configFilePath, JSON.stringify(config));

    const expirationTime = Date.now() / 1000 + 60;
    const responseJson = {
      version: 1,
      success: true,
      expiration_time: expirationTime,
      token_type: 'urn:ietf:params:oauth:token-type:jwt',
      id_token: oidcToken,
    };
    let exeContent = '#!/bin/bash\n';
    exeContent += 'echo ';
    exeContent += JSON.stringify(JSON.stringify(responseJson));
    exeContent += '\n';
    await writeFile(executableFilePath, exeContent, {mode: 0x766});
    // Run sample script with GOOGLE_APPLICATION_CREDENTIALS environment
    // variable pointing to the temporarily created configuration file.
    const output = await execAsync(`${process.execPath} adc`, {
      env: {
        ...process.env,
        // Set environment variable to allow pluggable auth executable to run.
        GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES: 1,
        // GOOGLE_APPLICATION_CREDENTIALS environment variable used for ADC.
        GOOGLE_APPLICATION_CREDENTIALS: configFilePath,
      },
    });
    // Confirm expected script output.
    assert.match(output, /DNS Info:/, output);
  });

  it('should acquire access token with service account impersonation options', async () => {
    // Create file-sourced configuration JSON file.
    // The created OIDC token will be used as the subject token and will be
    // retrieved from a file location.
    const config = {
      type: 'external_account',
      audience: AUDIENCE_OIDC,
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      token_url: 'https://sts.googleapis.com/v1/token',
      service_account_impersonation_url:
        'https://iamcredentials.googleapis.com/v1/projects/' +
        `-/serviceAccounts/${clientEmail}:generateAccessToken`,
      service_account_impersonation: {
        token_lifetime_seconds: 2800,
      },
      credential_source: {
        file: oidcTokenFilePath,
      },
    };
    await writeFile(oidcTokenFilePath, oidcToken);
    const client = new IdentityPoolClient(config);

    const minExpireTime = new Date().getTime() + (2800 * 1000 - 5 * 1000);
    const maxExpireTime = new Date().getTime() + (2800 * 1000 + 5 * 1000);
    const token = await client.getAccessToken();
    const actualExpireTime = new Date(token.res.data.expireTime).getTime();

    assert.isTrue(
      minExpireTime <= actualExpireTime && actualExpireTime <= maxExpireTime,
    );
  });
});
