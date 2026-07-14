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

import { Gaxios, GaxiosOptions } from 'gaxios';
import { log as makeLog } from 'google-logging-utils';
import * as https from 'https';
import {
  canMtlsBeEnabled,
  getClientCertAndKey,
  getMtlsEndpointUsagePolicy,
  MtlsEndpointUsagePolicy,
} from './mtlsutils';

const log = makeLog('auth');

export const SERVICE_ACCOUNT_LOOKUP_ENDPOINT =
  'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/{service_account_email}/allowedLocations';

export const WORKLOAD_LOOKUP_ENDPOINT =
  'https://iamcredentials.googleapis.com/v1/projects/{project_id}/locations/global/workloadIdentityPools/{pool_id}/allowedLocations';

export const WORKFORCE_LOOKUP_ENDPOINT =
  'https://iamcredentials.googleapis.com/v1/locations/global/workforcePools/{pool_id}/allowedLocations';

export const REGIONAL_ACCESS_BOUNDARY_HEADER = 'x-allowed-locations';

/**
 * RAB is considered valid for 6 hours.
 */
const RAB_TTL_MILLIS = 6 * 60 * 60 * 1000;

/**
 * Grace period before hard expiry to trigger a background refresh (1 hour).
 */
const RAB_SOFT_EXPIRY_GRACE_PERIOD_MILLIS = 1 * 60 * 60 * 1000;

/**
 * Initial cooldown period for RAB lookup failures (15 minutes).
 */
const RAB_INITIAL_COOLDOWN_MILLIS = 15 * 60 * 1000;

/**
 * Maximum cooldown period for RAB lookup failures.
 * Set as 6 hours.
 */
const RAB_MAX_COOLDOWN_MILLIS = 6 * 60 * 60 * 1000;

/**
 * Holds regional access boundary related information like locations
 * where the credentials can be used.
 */
export interface RegionalAccessBoundaryData {
  /**
   * The readable text format of the allowed regional access boundary locations.
   */
  locations?: string[];

  /**
   * The encoded text format of allowed regional access boundary locations.
   */
  encodedLocations: string;
}

export interface RegionalAccessBoundaryManagerOptions {
  transporter: Gaxios;
  getLookupUrl: () => Promise<string | null>;
  isUniverseDomainDefault: () => boolean;
}

export class RegionalAccessBoundaryManager {
  private regionalAccessBoundary: RegionalAccessBoundaryData | null = null;
  private regionalAccessBoundaryExpiry = 0;
  private regionalAccessBoundaryRefreshPromise: Promise<void> | null = null;
  private regionalAccessBoundaryCooldownTime = 0;
  private regionalAccessBoundaryCooldownBackoff = RAB_INITIAL_COOLDOWN_MILLIS;
  private options: RegionalAccessBoundaryManagerOptions;
  private lookupUrl: string | null | undefined = undefined;

  constructor(options: RegionalAccessBoundaryManagerOptions) {
    this.options = options;
  }

  /**
   * @internal
   */
  get data(): RegionalAccessBoundaryData | null {
    return this.regionalAccessBoundary;
  }

  /**
   * @internal
   */
  get cooldownTime(): number {
    return this.regionalAccessBoundaryCooldownTime;
  }

  /**
   * Returns the encoded locations string if the RAB is active and valid.
   * Also triggers a background refresh if needed.
   * @param url Optional endpoint URL being accessed. If missing, assumed global.
   * @param headers The headers of the current request.
   */
  getRegionalAccessBoundaryHeader(
    url: string | URL | undefined,
    headers: Headers,
  ): string | null {
    if (!this.options.isUniverseDomainDefault()) {
      return null;
    }

    // Only attach/refresh for global endpoints
    if (url && !this.isGlobalEndpoint(url)) {
      return null;
    }

    // Attempt to trigger refresh if we have a token.
    const authHeader = headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      // authHeader.substring(7) as auth header is of type 'Bearer XYZ...'
      this.maybeTriggerRegionalAccessBoundaryRefresh(authHeader.substring(7));
    }

    if (
      this.regionalAccessBoundary &&
      this.regionalAccessBoundary.encodedLocations &&
      Date.now() < this.regionalAccessBoundaryExpiry
    ) {
      return this.regionalAccessBoundary.encodedLocations;
    }
    return null;
  }

  /**
   * Checks if the given URL is a global endpoint (not regional).
   * @param url The URL to check.
   */
  private isGlobalEndpoint(url: string | URL): boolean {
    try {
      const hostname =
        url instanceof URL ? url.hostname : new URL(url).hostname;
      return (
        !hostname.endsWith('.rep.googleapis.com') &&
        !hostname.endsWith('.rep.sandbox.googleapis.com')
      );
    } catch {
      // If the URL is relative or malformed, assume it is global.
      return true;
    }
  }

  /**
   * Triggers an asynchronous regional access boundary refresh if needed.
   * @param accessToken The access token to use for the lookup.
   */
  private maybeTriggerRegionalAccessBoundaryRefresh(accessToken: string): void {
    if (this.lookupUrl === null) {
      return;
    }

    if (this.regionalAccessBoundaryRefreshPromise) {
      return;
    }

    const now = Date.now();

    // Check if in cooldown
    if (now < this.regionalAccessBoundaryCooldownTime) {
      return;
    }

    // Check if expired or never fetched (using soft expiry grace period)
    const softExpiryThreshold =
      this.regionalAccessBoundaryExpiry - RAB_SOFT_EXPIRY_GRACE_PERIOD_MILLIS;
    if (!this.regionalAccessBoundary || now >= softExpiryThreshold) {
      this.regionalAccessBoundaryRefreshPromise =
        this.backgroundRefreshRegionalAccessBoundary(accessToken);
    }
  }

  /**
   * Performs the background refresh of the regional access boundary.
   * @param accessToken The access token to use for the lookup.
   */
  private async backgroundRefreshRegionalAccessBoundary(
    accessToken: string,
  ): Promise<void> {
    try {
      const data = await this.fetchRegionalAccessBoundary(accessToken);
      if (data) {
        this.regionalAccessBoundary = data;
        this.regionalAccessBoundaryExpiry = Date.now() + RAB_TTL_MILLIS;
        // Reset cooldown on success.
        this.regionalAccessBoundaryCooldownTime = 0;
        this.regionalAccessBoundaryCooldownBackoff =
          RAB_INITIAL_COOLDOWN_MILLIS;
      }
    } catch (error) {
      // Non-retryable or all retries failed: enter cooldown,
      // initially for 15 mins which doubles after each failed cooldown 'exit' attempt.
      this.regionalAccessBoundaryCooldownTime =
        Date.now() + this.regionalAccessBoundaryCooldownBackoff;
      this.regionalAccessBoundaryCooldownBackoff = Math.min(
        this.regionalAccessBoundaryCooldownBackoff * 2,
        RAB_MAX_COOLDOWN_MILLIS,
      );
      log.debug(
        'RegionalAccessBoundary: Lookup failed. Entering cooldown.',
        error,
      );
    } finally {
      this.regionalAccessBoundaryRefreshPromise = null;
    }
  }

  /**
   * Internal method to fetch RAB data.
   * Retries for retryable 5xx errors from the RAB lookup endpoint.
   * Throws if response from lookup is malformed.
   */
  private async fetchRegionalAccessBoundary(
    accessToken?: string,
  ): Promise<RegionalAccessBoundaryData | null> {
    if (this.lookupUrl === undefined) {
      this.lookupUrl = await this.options.getLookupUrl();
    }
    if (!this.lookupUrl) {
      return null;
    }

    if (!accessToken) {
      throw new Error(
        'RegionalAccessBoundary: Error calling lookup endpoint without valid access token',
      );
    }

    const headers = new Headers({
      authorization: 'Bearer ' + accessToken,
    });

    const opts: GaxiosOptions = {
      retry: true,
      retryConfig: {
        retry: 9, // Approximately 1 minute with default exponential backoff
        retryDelay: 100,
        httpMethodsToRetry: ['GET'],
        statusCodesToRetry: [
          [500, 500],
          [502, 504],
        ],
      },
      headers,
      url: this.lookupUrl,
    };

    // If mTLS can be enabled, use mTLS agent and switch to the mTLS endpoint
    try {
      if (await canMtlsBeEnabled()) {
        const { cert, key } = await getClientCertAndKey();
        opts.agent = new https.Agent({ cert, key });
        opts.url = this.lookupUrl.replace(
          'iamcredentials.googleapis.com',
          'iamcredentials.mtls.googleapis.com',
        );
      }
    } catch (e) {
      log.error('RegionalAccessBoundary: Failed to initialize mTLS: ', e);
      // If mTLS is configured to ALWAYS, propagate the error instead of falling back to the standard endpoint.
      if (getMtlsEndpointUsagePolicy() === MtlsEndpointUsagePolicy.ALWAYS) {
        throw e;
      }
    }

    const { data: regionalAccessBoundaryData } =
      await this.options.transporter.request<RegionalAccessBoundaryData>(opts);

    if (!regionalAccessBoundaryData?.encodedLocations) {
      throw new Error(
        'RegionalAccessBoundary: Malformed response from lookup endpoint.',
      );
    }

    return regionalAccessBoundaryData;
  }
}
