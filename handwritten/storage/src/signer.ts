// Copyright 2020 Google LLC
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
import * as dateFormat from 'date-and-time';
import * as http from 'http';
import * as url from 'url';
import {ExceptionMessages} from './storage';
import {encodeURI, qsStringify, objectEntries} from './util';

interface GetCredentialsResponse {
  client_email?: string;
}

export interface AuthClient {
  sign(blobToSign: string): Promise<string>;
  getCredentials(): Promise<GetCredentialsResponse>;
}

export interface BucketI {
  name: string;
}

export interface FileI {
  name: string;
}

export interface Query {
  [key: string]: string;
}

export interface GetSignedUrlConfigInternal {
  expiration: number;
  accessibleAt?: Date;
  method: string;
  extensionHeaders?: http.OutgoingHttpHeaders;
  queryParams?: Query;
  cname?: string;
  contentMd5?: string;
  contentType?: string;
  bucket: string;
  file?: string;
}

interface SignedUrlQuery {
  generation?: number;
  'response-content-type'?: string;
  'response-content-disposition'?: string;
}

interface V2SignedUrlQuery extends SignedUrlQuery {
  GoogleAccessId: string;
  Expires: number;
  Signature: string;
}

export interface SignerGetSignedUrlConfig {
  method: 'GET' | 'PUT' | 'DELETE' | 'POST';
  expires: string | number | Date;
  accessibleAt?: string | number | Date;
  virtualHostedStyle?: boolean;
  version?: 'v2' | 'v4';
  cname?: string;
  extensionHeaders?: http.OutgoingHttpHeaders;
  queryParams?: Query;
  contentMd5?: string;
  contentType?: string;
}

export type SignerGetSignedUrlResponse = string;

export type GetSignedUrlResponse = [SignerGetSignedUrlResponse];

export interface GetSignedUrlCallback {
  (err: Error | null, url?: string): void;
}
type ValueOf<T> = T[keyof T];
type HeaderValue = ValueOf<http.OutgoingHttpHeaders>;

export enum SignerExceptionMessages {
  ACCESSIBLE_DATE_INVALID = 'The accessible at date provided was invalid.',
  EXPIRATION_BEFORE_ACCESSIBLE_DATE = 'An expiration date cannot be before accessible date.',
  X_GOOG_CONTENT_SHA256 = 'The header X-Goog-Content-SHA256 must be a hexadecimal string.',
}

/*
 * Default signing version for getSignedUrl is 'v2'.
 */
const DEFAULT_SIGNING_VERSION = 'v2';

const SEVEN_DAYS = 7 * 24 * 60 * 60;

/**
 * @const {string}
 * @private
 */
export const PATH_STYLED_HOST = 'https://storage.googleapis.com';

export class URLSigner {
  private authClient: AuthClient;
  private bucket: BucketI;
  private file?: FileI;

  constructor(authClient: AuthClient, bucket: BucketI, file?: FileI) {
    this.bucket = bucket;
    this.file = file;
    this.authClient = authClient;
  }

  getSignedUrl(
    cfg: SignerGetSignedUrlConfig
  ): Promise<SignerGetSignedUrlResponse> {
    const expiresInSeconds = this.parseExpires(cfg.expires);
    const method = cfg.method;
    const accessibleAtInSeconds = this.parseAccessibleAt(cfg.accessibleAt);

    if (expiresInSeconds < accessibleAtInSeconds) {
      throw new Error(
        SignerExceptionMessages.EXPIRATION_BEFORE_ACCESSIBLE_DATE
      );
    }

    let customHost: string | undefined;
    // Default style is `path`.
    const isVirtualHostedStyle = cfg.virtualHostedStyle || false;

    if (cfg.cname) {
      customHost = cfg.cname;
    } else if (isVirtualHostedStyle) {
      customHost = `https://${this.bucket.name}.storage.googleapis.com`;
    }

    const secondsToMilliseconds = 1000;
    const config: GetSignedUrlConfigInternal = Object.assign({}, cfg, {
      method,
      expiration: expiresInSeconds,
      accessibleAt: new Date(secondsToMilliseconds * accessibleAtInSeconds),
      bucket: this.bucket.name,
      file: this.file ? encodeURI(this.file.name, false) : undefined,
    });

    if (customHost) {
      config.cname = customHost;
    }

    const version = cfg.version || DEFAULT_SIGNING_VERSION;

    let promise: Promise<SignedUrlQuery>;
    if (version === 'v2') {
      promise = this.getSignedUrlV2(config);
    } else if (version === 'v4') {
      promise = this.getSignedUrlV4(config);
    } else {
      throw new Error(
        `Invalid signed URL version: ${version}. Supported versions are 'v2' and 'v4'.`
      );
    }

    return promise.then(query => {
      query = Object.assign(query, cfg.queryParams);

      const signedUrl = new url.URL(config.cname || PATH_STYLED_HOST);
      signedUrl.pathname = this.getResourcePath(
        !!config.cname,
        this.bucket.name,
        config.file
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      signedUrl.search = qsStringify(query as any);
      return signedUrl.href;
    });
  }

  private getSignedUrlV2(
    config: GetSignedUrlConfigInternal
  ): Promise<SignedUrlQuery> {
    const canonicalHeadersString = this.getCanonicalHeaders(
      config.extensionHeaders || {}
    );
    const resourcePath = this.getResourcePath(
      false,
      config.bucket,
      config.file
    );

    const blobToSign = [
      config.method,
      config.contentMd5 || '',
      config.contentType || '',
      config.expiration,
      canonicalHeadersString + resourcePath,
    ].join('\n');

    const sign = async () => {
      const authClient = this.authClient;
      try {
        const signature = await authClient.sign(blobToSign);
        const credentials = await authClient.getCredentials();

        return {
          GoogleAccessId: credentials.client_email!,
          Expires: config.expiration,
          Signature: signature,
        } as V2SignedUrlQuery;
      } catch (err) {
        const signingErr = new SigningError(err.message);
        signingErr.stack = err.stack;
        throw signingErr;
      }
    };
    return sign();
  }

  private getSignedUrlV4(
    config: GetSignedUrlConfigInternal
  ): Promise<SignedUrlQuery> {
    config.accessibleAt = config.accessibleAt
      ? config.accessibleAt
      : new Date();
    const millisecondsToSeconds = 1.0 / 1000.0;
    const expiresPeriodInSeconds =
      config.expiration - config.accessibleAt.valueOf() * millisecondsToSeconds;

    // v4 limit expiration to be 7 days maximum
    if (expiresPeriodInSeconds > SEVEN_DAYS) {
      throw new Error(
        `Max allowed expiration is seven days (${SEVEN_DAYS} seconds).`
      );
    }

    const extensionHeaders = Object.assign({}, config.extensionHeaders);
    const fqdn = new url.URL(config.cname || PATH_STYLED_HOST);
    extensionHeaders.host = fqdn.host;
    if (config.contentMd5) {
      extensionHeaders['content-md5'] = config.contentMd5;
    }
    if (config.contentType) {
      extensionHeaders['content-type'] = config.contentType;
    }

    let contentSha256: string;
    const sha256Header = extensionHeaders['x-goog-content-sha256'];
    if (sha256Header) {
      if (
        typeof sha256Header !== 'string' ||
        !/[A-Fa-f0-9]{40}/.test(sha256Header)
      ) {
        throw new Error(SignerExceptionMessages.X_GOOG_CONTENT_SHA256);
      }
      contentSha256 = sha256Header;
    }

    const signedHeaders = Object.keys(extensionHeaders)
      .map(header => header.toLowerCase())
      .sort()
      .join(';');

    const extensionHeadersString = this.getCanonicalHeaders(extensionHeaders);

    const datestamp = dateFormat.format(config.accessibleAt, 'YYYYMMDD', true);
    const credentialScope = `${datestamp}/auto/storage/goog4_request`;

    const sign = async () => {
      const credentials = await this.authClient.getCredentials();
      const credential = `${credentials.client_email}/${credentialScope}`;
      const dateISO = dateFormat.format(
        config.accessibleAt ? config.accessibleAt : new Date(),
        'YYYYMMDD[T]HHmmss[Z]',
        true
      );
      const queryParams: Query = {
        'X-Goog-Algorithm': 'GOOG4-RSA-SHA256',
        'X-Goog-Credential': credential,
        'X-Goog-Date': dateISO,
        'X-Goog-Expires': expiresPeriodInSeconds.toString(10),
        'X-Goog-SignedHeaders': signedHeaders,
        ...(config.queryParams || {}),
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const canonicalQueryParams = this.getCanonicalQueryParams(queryParams);

      const canonicalRequest = this.getCanonicalRequest(
        config.method,
        this.getResourcePath(!!config.cname, config.bucket, config.file),
        canonicalQueryParams,
        extensionHeadersString,
        signedHeaders,
        contentSha256
      );

      const hash = crypto
        .createHash('sha256')
        .update(canonicalRequest)
        .digest('hex');

      const blobToSign = [
        'GOOG4-RSA-SHA256',
        dateISO,
        credentialScope,
        hash,
      ].join('\n');

      try {
        const signature = await this.authClient.sign(blobToSign);
        const signatureHex = Buffer.from(signature, 'base64').toString('hex');
        const signedQuery: Query = Object.assign({}, queryParams, {
          'X-Goog-Signature': signatureHex,
        });
        return signedQuery;
      } catch (err) {
        const signingErr = new SigningError(err.message);
        signingErr.stack = err.stack;
        throw signingErr;
      }
    };

    return sign();
  }

  /**
   * Create canonical headers for signing v4 url.
   *
   * The canonical headers for v4-signing a request demands header names are
   * first lowercased, followed by sorting the header names.
   * Then, construct the canonical headers part of the request:
   *  <lowercasedHeaderName> + ":" + Trim(<value>) + "\n"
   *  ..
   *  <lowercasedHeaderName> + ":" + Trim(<value>) + "\n"
   *
   * @param headers
   * @private
   */
  getCanonicalHeaders(headers: http.OutgoingHttpHeaders) {
    // Sort headers by their lowercased names
    const sortedHeaders = objectEntries(headers)
      // Convert header names to lowercase
      .map<[string, HeaderValue]>(([headerName, value]) => [
        headerName.toLowerCase(),
        value,
      ])
      .sort((a, b) => a[0].localeCompare(b[0]));

    return sortedHeaders
      .filter(([, value]) => value !== undefined)
      .map(([headerName, value]) => {
        // - Convert Array (multi-valued header) into string, delimited by
        //      ',' (no space).
        // - Trim leading and trailing spaces.
        // - Convert sequential (2+) spaces into a single space
        const canonicalValue = `${value}`.trim().replace(/\s{2,}/g, ' ');

        return `${headerName}:${canonicalValue}\n`;
      })
      .join('');
  }

  getCanonicalRequest(
    method: string,
    path: string,
    query: string,
    headers: string,
    signedHeaders: string,
    contentSha256?: string
  ) {
    return [
      method,
      path,
      query,
      headers,
      signedHeaders,
      contentSha256 || 'UNSIGNED-PAYLOAD',
    ].join('\n');
  }

  getCanonicalQueryParams(query: Query) {
    return objectEntries(query)
      .map(([key, value]) => [encodeURI(key, true), encodeURI(value, true)])
      .sort((a, b) => (a[0] < b[0] ? -1 : 1))
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }

  getResourcePath(cname: boolean, bucket: string, file?: string): string {
    if (cname) {
      return '/' + (file || '');
    } else if (file) {
      return `/${bucket}/${file}`;
    } else {
      return `/${bucket}`;
    }
  }

  parseExpires(
    expires: string | number | Date,
    current: Date = new Date()
  ): number {
    const expiresInMSeconds = new Date(expires).valueOf();

    if (isNaN(expiresInMSeconds)) {
      throw new Error(ExceptionMessages.EXPIRATION_DATE_INVALID);
    }

    if (expiresInMSeconds < current.valueOf()) {
      throw new Error(ExceptionMessages.EXPIRATION_DATE_PAST);
    }

    return Math.round(expiresInMSeconds / 1000); // The API expects seconds.
  }

  parseAccessibleAt(accessibleAt?: string | number | Date): number {
    const accessibleAtInMSeconds = new Date(
      accessibleAt || new Date()
    ).valueOf();

    if (isNaN(accessibleAtInMSeconds)) {
      throw new Error(SignerExceptionMessages.ACCESSIBLE_DATE_INVALID);
    }

    return Math.floor(accessibleAtInMSeconds / 1000); // The API expects seconds.
  }
}

/**
 * Custom error type for errors related to getting signed errors and policies.
 *
 * @private
 */
export class SigningError extends Error {
  name = 'SigningError';
}
