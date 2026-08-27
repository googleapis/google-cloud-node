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
import {GaxiosOptions, GaxiosResponse} from 'gaxios';
import {
  GetTokenResponse,
  OAuth2Client,
  OAuth2ClientOptions,
} from './oauth2client';
import {CredentialRequest, Credentials} from './credentials';

const DEFAULT_LIFETIME_IN_SECONDS = 3600;
export const GDCH_SERVICE_ACCOUNT_TYPE = 'gdch_service_account';

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
  type: 'gdch_service_account';
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
  private caAgentPromise?: Promise<https.Agent>;
  private cachedCaCertPath?: string;
  private lastCaCertReadTime = 0;
  private readonly CA_CERT_TTL_MS = 5 * 60 * 1000;

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
    if (json.type !== GDCH_SERVICE_ACCOUNT_TYPE) {
      throw new Error(
        `The incoming JSON object does not have the "${GDCH_SERVICE_ACCOUNT_TYPE}" type`
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

    this.gdchOptions = {
      ...this.gdchOptions,
      projectId: json.project,
      privateKeyId: json.private_key_id,
      privateKey: json.private_key,
      serviceIdentityName: json.name,
      tokenServerUri: json.token_uri,
      caCertPath: json.ca_cert_path,
    };
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
      grant_type: 'urn:ietf:params:oauth:token-type:token-exchange',
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
      timeout: 10000,
      retry: true,
      retryConfig: {
        httpMethodsToRetry: ['POST'],
        statusCodesToRetry: [[500, 599]],
        noResponseRetries: 3,
      },
    };

    if (this.caCertPath) {
      requestOpts.agent = await this.getCaAgent();
    }

    try {
      const res = await this.transporter.request<CredentialRequest>(requestOpts);
      const tokenResponse = res.data;
      if (!tokenResponse.access_token) {
        throw new Error('Token response did not contain an access_token.');
      }
      if (!tokenResponse.expires_in) {
        throw new Error('Token response did not contain an expires_in field.');
      }
      const tokens: Credentials = {
        access_token: tokenResponse.access_token,
        token_type: 'STS-Bearer',
        expiry_date: Date.now() + tokenResponse.expires_in * 1000,
      };

      this.emit('tokens', tokens);
      return {res, tokens};
    } catch (e: any) {
      if (e && e.config && e.config.data) {
        try {
          if (typeof e.config.data === 'string') {
            const parsedData = JSON.parse(e.config.data);
            if (parsedData.subject_token) {
              parsedData.subject_token = '***REDACTED***';
              e.config.data = JSON.stringify(parsedData);
            }
          } else if (typeof e.config.data === 'object' && e.config.data.subject_token) {
            e.config.data.subject_token = '***REDACTED***';
          }
        } catch {}
      }
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


  override async requestAsync<T>(
    opts: GaxiosOptions,
    retry = false
  ): Promise<GaxiosResponse<T>> {
    if (this.caCertPath && !opts.agent) {
      const url = (opts.url || '').toString();
      if (!url.includes('googleapis.com') && !url.includes('google.com')) {
        opts.agent = await this.getCaAgent();
      }
    }
    return super.requestAsync(opts, retry);
  }

  private getCaAgent(): Promise<https.Agent> | undefined {
    if (!this.caCertPath) {
      this.caAgentPromise = undefined;
      this.cachedCaCertPath = undefined;
      this.lastCaCertReadTime = 0;
      return undefined;
    }

    const now = Date.now();
    const isCacheExpired = now - this.lastCaCertReadTime > this.CA_CERT_TTL_MS;

    if (
      this.caAgentPromise &&
      this.caCertPath === this.cachedCaCertPath &&
      !isCacheExpired
    ) {
      return this.caAgentPromise;
    }

    this.cachedCaCertPath = this.caCertPath;
    this.lastCaCertReadTime = now;
    const currentPath = this.caCertPath;
    this.caAgentPromise = (async () => {
      try {
        const ca = await fs.promises.readFile(currentPath);
        return new https.Agent({ca});
      } catch (err) {
        if (this.cachedCaCertPath === currentPath) {
          this.caAgentPromise = undefined;
          this.cachedCaCertPath = undefined;
          this.lastCaCertReadTime = 0;
        }
        if (err instanceof Error) {
          err.message = `Error reading certificate file from CA cert path, value '${currentPath}': ${err.message}`;
        }
        throw err;
      }
    })();

    return this.caAgentPromise;
  }

  toJSON(): Record<string, any> {
    return {
      ...this,
      privateKey: this.privateKey ? '***REDACTED***' : undefined,
      _clientSecret: this._clientSecret ? '***REDACTED***' : undefined,
      apiKey: this.apiKey ? '***REDACTED***' : undefined,
      gdchOptions: this.gdchOptions
        ? {
            ...this.gdchOptions,
            privateKey: this.gdchOptions.privateKey ? '***REDACTED***' : undefined,
            clientSecret: this.gdchOptions.clientSecret ? '***REDACTED***' : undefined,
            client_secret: this.gdchOptions.client_secret ? '***REDACTED***' : undefined,
            apiKey: this.gdchOptions.apiKey ? '***REDACTED***' : undefined,
            credentials: this.gdchOptions.credentials
              ? {
                  ...this.gdchOptions.credentials,
                  access_token: this.gdchOptions.credentials.access_token
                    ? '***REDACTED***'
                    : undefined,
                  refresh_token: this.gdchOptions.credentials.refresh_token
                    ? '***REDACTED***'
                    : undefined,
                }
              : undefined,
          }
        : undefined,
      credentials: {
        ...this.credentials,
        access_token: this.credentials?.access_token ? '***REDACTED***' : undefined,
        refresh_token: this.credentials?.refresh_token ? '***REDACTED***' : undefined,
      },
    };
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    return this.toJSON();
  }

  private base64UrlEncode(str: string | Buffer): string {
    const buffer = typeof str === 'string' ? Buffer.from(str) : str;
    return buffer.toString('base64url');
  }
}
