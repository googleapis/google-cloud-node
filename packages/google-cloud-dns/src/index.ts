/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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

import {GoogleAuthOptions, Metadata, Service} from '@google-cloud/common';
import {paginator} from '@google-cloud/paginator';
import {promisifyAll} from '@google-cloud/promisify';
import arrify = require('arrify');
import {Stream} from 'stream';

import {Zone} from './zone';

export {Record, RecordMetadata} from './record';

export interface GetZonesRequest {
  autoPaginate?: boolean;
  maxApiCalls?: number;
  maxResults?: number;
  pageToken?: string;
}

export interface DNSConfig extends GoogleAuthOptions {
  autoRetry?: boolean;
  maxRetries?: number;
}

export interface GetZonesCallback {
  (
    err: Error | null,
    zones: Zone[] | null,
    nextQuery?: GetZonesRequest | null,
    apiResponse?: Metadata
  ): void;
}

export type GetZonesResponse = [Zone[], GetZonesRequest | null, Metadata];

export interface GetZoneCallback {
  (err: Error | null, zone?: Zone | null, apiResponse?: Metadata): void;
}

export interface CreateZoneRequest {
  dnsName: string;
  description?: string;
  name?: string;
  dnssecConfig?: ManagedZoneDnsSecConfig;
}

export interface ManagedZoneDnsSecConfig {
  /**
   * Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF.
   */
  defaultKeySpecs?: DnsKeySpec[];
  kind?: string | null;
  /**
   * Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF.
   */
  nonExistence?: string | null;
  /**
   * Specifies whether DNSSEC is enabled, and what mode it is in.
   */
  state?: 'on' | 'off' | null;
}

export interface DnsKeySpec {
  /**
   * String mnemonic specifying the DNSSEC algorithm of this key.
   */
  algorithm?: string | null;
  /**
   * Length of the keys in bits.
   */
  keyLength?: number | null;
  /**
   * Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, will only be used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and will be used to sign all other types of resource record sets.
   */
  keyType?: string | null;
  kind?: string | null;
}

export type CreateZoneResponse = [Zone, Metadata];
export type CreateZoneCallback = GetZoneCallback;

export interface DNSOptions extends GoogleAuthOptions {
  /**
   * The API endpoint of the service used to make requests.
   * Defaults to `dns.googleapis.com`.
   */
  apiEndpoint?: string;
}

/**
 * @typedef {object} ClientConfig
 * @property {string} [projectId] The project ID from the Google Developer's
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link
 * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
 * Application Default Credentials}, your project ID will be detected
 * automatically.
 * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
 *     downloaded from the Google Developers Console. If you provide a path to a
 *     JSON file, the `projectId` option above is not necessary. NOTE: .pem and
 *     .p12 require you to specify the `email` option as well.
 * @property {string} [email] Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object} [credentials] Credentials object.
 * @property {string} [credentials.client_email]
 * @property {string} [credentials.private_key]
 * @property {boolean} [autoRetry=true] Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default.
 * @property {number} [maxRetries=3] Maximum number of automatic retries
 *     attempted before returning the error.
 * @property {Constructor} [promise] Custom promise module to use instead of
 *     native Promises.
 */
/**
 * [Cloud DNS](https://cloud.google.com/dns/what-is-cloud-dns) is a
 * high-performance, resilient, global DNS service that provides a
 * cost-effective way to make your applications and services available to your
 * users. This programmable, authoritative DNS service can be used to easily
 * publish and manage DNS records using the same infrastructure relied upon by
 * Google.
 *
 * @class
 *
 * @see [What is Cloud DNS?]{@link https://cloud.google.com/dns/what-is-cloud-dns}
 *
 * @param {ClientConfig} [options] Configuration options.
 *
 * @example <caption>Import the client library</caption>
 * const {DNS} = require('@google-cloud/dns');
 *
 * @example <caption>Create a client that uses <a
 * href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application
 * Default Credentials (ADC)</a>:</caption> const dns = new DNS();
 *
 * @example <caption>Create a client with <a
 * href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit
 * credentials</a>:</caption> const dns = new DNS({ projectId:
 * 'your-project-id', keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:dns_quickstart
 * Full quickstart example:
 */
class DNS extends Service {
  getZonesStream: (query: GetZonesRequest) => Stream;
  constructor(options: DNSOptions = {}) {
    options.apiEndpoint = options.apiEndpoint || 'dns.googleapis.com';
    const config = {
      apiEndpoint: options.apiEndpoint,
      baseUrl: `https://${options.apiEndpoint}/dns/v1`,
      scopes: [
        'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
        'https://www.googleapis.com/auth/cloud-platform',
      ],
      packageJson: require('../../package.json'),
    };
    super(config, options);

    /**
     * Get {@link Zone} objects for all of the zones in your project as
     * a readable object stream.
     *
     * @method DNS#getZonesStream
     * @param {GetZonesRequest} [query] Query object for listing zones.
     * @returns {ReadableStream} A readable stream that emits {@link Zone} instances.
     *
     * @example
     * const {DNS} = require('@google-cloud/dns');
     * const dns = new DNS();
     *
     * dns.getZonesStream()
     *   .on('error', console.error)
     *   .on('data', function(zone) {
     *     // zone is a Zone object.
     *   })
     *   .on('end', () => {
     *     // All zones retrieved.
     *   });
     *
     * //-
     * // If you anticipate many results, you can end a stream early to prevent
     * // unnecessary processing and API requests.
     * //-
     * dns.getZonesStream()
     *   .on('data', function(zone) {
     *     this.end();
     *   });
     */
    this.getZonesStream = paginator.streamify('getZones');
  }

  createZone(
    name: string,
    config: CreateZoneRequest
  ): Promise<CreateZoneResponse>;
  createZone(
    name: string,
    config: CreateZoneRequest,
    callback: GetZoneCallback
  ): void;
  /**
   * Config to set for the zone.
   *
   * @typedef {object} CreateZoneRequest
   * @property {string} dnsName DNS name for the zone. E.g. "example.com."
   * @property {string} [description] Description text for the zone.
   */
  /**
   * @typedef {array} CreateZoneResponse
   * @property {Zone} 0 The new {@link Zone}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateZoneCallback
   * @param {?Error} err Request error, if any.
   * @param {Zone} zone The new {@link Zone}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a managed zone.
   *
   * @method DNS#createZone
   * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
   *
   * @throws {error} If a zone name is not provided.
   * @throws {error} If a zone dnsName is not provided.
   *
   * @param {string} name Name of the zone to create, e.g. "my-zone".
   * @param {CreateZoneRequest} config Config to set for the zone.
   * @param {CreateZoneCallback} [callback] Callback function.
   * @returns {Promise<CreateZoneResponse>}
   * @throws {Error} If a name is not provided.
   * @see Zone#create
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   *
   * const config = {
   *   dnsName: 'example.com.', // note the period at the end of the domain.
   *   description: 'This zone is awesome!'
   * };
   *
   * dns.createZone('my-awesome-zone', config, (err, zone, apiResponse) => {
   *   if (!err) {
   *     // The zone was created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * dns.createZone('my-awesome-zone', config).then((data) => {
   *   const zone = data[0];
   *   const apiResponse = data[1];
   * });
   */
  createZone(
    name: string,
    config: CreateZoneRequest,
    callback?: GetZoneCallback
  ): void | Promise<CreateZoneResponse> {
    if (!name) {
      throw new Error('A zone name is required.');
    }
    if (!config || !config.dnsName) {
      throw new Error('A zone dnsName is required.');
    }
    config.name = name;
    // Required by the API.
    config.description = config.description || '';
    this.request(
      {
        method: 'POST',
        uri: '/managedZones',
        json: config,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, resp);
          return;
        }
        const zone = this.zone(resp.name);
        zone.metadata = resp;
        callback!(null, zone, resp);
      }
    );
  }

  getZones(query?: GetZonesRequest): Promise<GetZonesResponse>;
  getZones(callback: GetZonesCallback): void;
  getZones(query: GetZonesRequest, callback: GetZonesCallback): void;
  /**
   * Query object for listing zones.
   *
   * @typedef {object} GetZonesRequest
   * @property {boolean} [autoPaginate=true] Have pagination handled
   *     automatically.
   * @property {number} [maxApiCalls] Maximum number of API calls to make.
   * @property {number} [maxResults] Maximum number of items plus prefixes to
   *     return.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   */
  /**
   * @typedef {array} GetZonesResponse
   * @property {Zone[]} 0 Array of {@link Zone} instances.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetZonesCallback
   * @param {?Error} err Request error, if any.
   * @param {Zone[]} zones Array of {@link Zone} instances.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Gets a list of managed zones for the project.
   *
   * @method DNS#getZones
   * @see [ManagedZones: list API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/list}
   *
   * @param {GetZonesRequest} [query] Query object for listing zones.
   * @param {GetZonesCallback} [callback] Callback function.
   * @returns {Promise<GetZonesResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   *
   * dns.getZones((err, zones, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * dns.getZones().then(data => {
   *   const zones = data[0];
   * });
   */
  getZones(
    queryOrCallback?: GetZonesRequest | GetZonesCallback,
    callback?: GetZonesCallback
  ): void | Promise<GetZonesResponse> {
    const query = typeof queryOrCallback === 'object' ? queryOrCallback : {};
    callback =
      typeof queryOrCallback === 'function' ? queryOrCallback : callback;
    this.request(
      {
        uri: '/managedZones',
        qs: query,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, null, resp);
          return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const zones = arrify(resp.managedZones).map((zone: any) => {
          const zoneInstance = this.zone(zone.name);
          zoneInstance.metadata = zone;
          return zoneInstance;
        });
        let nextQuery: GetZonesRequest | null = null;
        if (resp.nextPageToken) {
          nextQuery = Object.assign({}, query, {
            pageToken: resp.nextPageToken,
          });
        }
        callback!(null, zones, nextQuery, resp);
      }
    );
  }

  /**
   * Get a reference to a Zone.
   *
   * @param {string} name The unique name of the zone.
   * @returns {Zone}
   * @see Zone
   *
   * @throws {error} If a zone name is not provided.
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   *
   * const zone = dns.zone('my-zone');
   */
  zone(name: string) {
    if (!name) {
      throw new Error('A zone name is required.');
    }
    return new Zone(this, name);
  }
}

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
paginator.extend(DNS, 'getZones');

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(DNS, {
  exclude: ['zone'],
});

/**
 * {@link Zone} class.
 *
 * @name DNS.Zone
 * @see Zone
 * @type {Constructor}
 */
export {Zone};

/**
 * The default export of the `@google-cloud/dns` package is the {@link DNS}
 * class.
 *
 * See {@link DNS} and {@link ClientConfig} for client methods and
 * configuration options.
 *
 * @module {DNS} @google-cloud/dns
 * @alias nodejs-dns
 *
 * @example <caption>Install the client library with <a
 * href="https://www.npmjs.com/">npm</a>:</caption> npm install --save
 * @google-cloud/dns
 *
 * @example <caption>Import the client library</caption>
 * const {DNS} = require('@google-cloud/dns');
 *
 * @example <caption>Create a client that uses <a
 * href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application
 * Default Credentials (ADC)</a>:</caption> const dns = new DNS();
 *
 * @example <caption>Create a client with <a
 * href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit
 * credentials</a>:</caption> const dns = new DNS({ projectId:
 * 'your-project-id', keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:dns_quickstart
 * Full quickstart example:
 */
export {DNS};
