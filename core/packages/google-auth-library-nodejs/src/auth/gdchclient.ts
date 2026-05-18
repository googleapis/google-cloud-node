// Copyright 2026 Google LLC
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

import * as crypto from 'crypto';
import * as fs from 'fs';
import * as https from 'https';
import {GaxiosOptions} from 'gaxios';
import {
  GetTokenResponse,
  OAuth2Client,
  OAuth2ClientOptions,
} from './oauth2client';
import {CredentialRequest, Credentials} from './credentials';

const DEFAULT_LIFETIME_IN_SECONDS = 3600;
export const GDCH_CREDENTIALS_TYPE = 'gdch_credentials';

export interface GdchClientOptions extends OAuth2ClientOptions {
  projectId?: string | null;
  privateKeyId?: string;
  privateKey?: string;
  serviceIdentityName?: string;
  tokenServerUri?: string;
  caCertPath?: string;
  apiAudience?: string;
  lifetime?: number;
}

export interface GdchCredentialsInput {
  type: 'gdch_credentials';
  format_version: string;
  project: string;
  private_key_id: string;
  private_key: string;
  name: string;
  token_uri: string;
  ca_cert_path?: string;
}

export class GdchClient extends OAuth2Client {
  projectId?: string;
  privateKeyId?: string;
  privateKey?: string;
  serviceIdentityName?: string;
  tokenServerUri?: string;
  caCertPath?: string;
  apiAudience?: string;
  lifetime: number;
  private gdchOptions: GdchClientOptions;

  constructor(options: GdchClientOptions = {}) {
    super(options);
    this.gdchOptions = options;
    this.projectId = options.projectId || undefined;
    this.privateKeyId = options.privateKeyId;
    this.privateKey = options.privateKey;
    this.serviceIdentityName = options.serviceIdentityName;
    this.tokenServerUri = options.tokenServerUri;
    this.caCertPath = options.caCertPath;
    this.apiAudience = options.apiAudience;
    this.lifetime = options.lifetime || DEFAULT_LIFETIME_IN_SECONDS;

    // Start with an expired refresh token, which will automatically be
    // refreshed before the first API call is made.
    this.credentials = {refresh_token: 'gdch-placeholder', expiry_date: 1};
  }

  createWithGdchAudience(apiAudience: string): GdchClient {
    if (!apiAudience) {
      throw new Error(
        'Audience cannot be null or empty for GDCH service account credentials.'
      );
    }
    return new GdchClient({
      ...this.gdchOptions,
      projectId: this.projectId,
      privateKeyId: this.privateKeyId,
      privateKey: this.privateKey,
      serviceIdentityName: this.serviceIdentityName,
      tokenServerUri: this.tokenServerUri,
      caCertPath: this.caCertPath,
      lifetime: this.lifetime,
      apiAudience,
    });
  }

  fromJSON(json: GdchCredentialsInput): void {
    if (!json) {
      throw new Error(
        'Must pass in a JSON object containing the GDCH credentials settings.'
      );
    }
    if (json.type !== GDCH_CREDENTIALS_TYPE) {
      throw new Error(
        `The incoming JSON object does not have the "${GDCH_CREDENTIALS_TYPE}" type`
      );
    }
    if (json.format_version !== '1') {
      throw new Error('Only format version 1 is supported.');
    }
    if (!json.project) {
      throw new Error('The incoming JSON object does not contain a project field');
    }
    if (!json.private_key_id) {
      throw new Error(
        'The incoming JSON object does not contain a private_key_id field'
      );
    }
    if (!json.private_key) {
      throw new Error('The incoming JSON object does not contain a private_key field');
    }
    if (!json.name) {
      throw new Error('The incoming JSON object does not contain a name field');
    }
    if (!json.token_uri) {
      throw new Error('The incoming JSON object does not contain a token_uri field');
    }

    this.projectId = json.project;
    this.privateKeyId = json.private_key_id;
    this.privateKey = json.private_key;
    this.serviceIdentityName = json.name;
    this.tokenServerUri = json.token_uri;
    this.caCertPath = json.ca_cert_path;
  }

  protected async refreshTokenNoCache(): Promise<GetTokenResponse> {
    if (!this.apiAudience) {
      throw new Error(
        'Audience cannot be null or empty for GDCH service account credentials. ' +
          'Specify the audience by calling createWithGdchAudience.'
      );
    }
    if (!this.privateKey) {
      throw new Error('Private key is not configured for GDCH credentials.');
    }
    if (!this.privateKeyId) {
      throw new Error('Private key ID is not configured for GDCH credentials.');
    }
    if (!this.projectId) {
      throw new Error('Project is not configured for GDCH credentials.');
    }
    if (!this.serviceIdentityName) {
      throw new Error('Service identity name is not configured for GDCH credentials.');
    }
    if (!this.tokenServerUri) {
      throw new Error('Token server URI is not configured for GDCH credentials.');
    }

    const assertion = this.createAssertion();

    const data = {
      audience: this.apiAudience,
      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
      requested_token_type: 'urn:ietf:params:oauth:token-type:access_token',
      subject_token: assertion,
      subject_token_type: 'urn:k8s:params:oauth:token-type:serviceaccount',
    };

    const requestOpts: GaxiosOptions = {
      url: this.tokenServerUri,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
      responseType: 'json',
    };

    if (this.caCertPath) {
      try {
        const ca = fs.readFileSync(this.caCertPath);
        requestOpts.agent = new https.Agent({ ca });
      } catch (err) {
        if (err instanceof Error) {
          err.message = `Error reading certificate file from CA cert path, value '${this.caCertPath}': ${err.message}`;
        }
        throw err;
      }
    }

    try {
      const res = await this.transporter.request<CredentialRequest>(requestOpts);
      const tokenResponse = res.data;
      const tokens: Credentials = {
        access_token: tokenResponse.access_token,
        token_type: 'Bearer',
      };

      if (tokenResponse.expires_in) {
        tokens.expiry_date = new Date().getTime() + tokenResponse.expires_in * 1000;
      }

      this.emit('tokens', tokens);
      return {res, tokens};
    } catch (e) {
      if (e instanceof Error) {
        e.message = `Error getting access token for GDCH service account: ${e.message}, iss: ${this.serviceIdentityName}`;
      }
      throw e;
    }
  }

  private createAssertion(): string {
    const header = {
      alg: 'ES256',
      typ: 'JWT',
      kid: this.privateKeyId,
    };

    const issSub = `system:serviceaccount:${this.projectId}:${this.serviceIdentityName}`;
    const currentTime = Math.floor(Date.now() / 1000);
    const payload = {
      iss: issSub,
      sub: issSub,
      iat: currentTime,
      exp: currentTime + this.lifetime,
      aud: this.tokenServerUri,
    };

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
    const signingInput = `${encodedHeader}.${encodedPayload}`;

    const signature = crypto.sign(
      'sha256',
      Buffer.from(signingInput),
      {
        key: this.privateKey!,
        dsaEncoding: 'ieee-p1363',
      }
    );

    const encodedSignature = this.base64UrlEncode(signature);
    return `${signingInput}.${encodedSignature}`;
  }

  private base64UrlEncode(str: string | Buffer): string {
    const buffer = typeof str === 'string' ? Buffer.from(str) : str;
    return buffer
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }
}
