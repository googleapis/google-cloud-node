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

import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {GaxiosError} from 'gaxios';
import * as gaxios from 'gaxios';
import {
  AuthClient,
  Compute,
  DEFAULT_UNIVERSE,
  gcpMetadata,
  GoogleAuth,
  PassThroughClient,
} from 'google-auth-library';

const credentialUniverseCache = new WeakMap<
  object,
  Promise<string | undefined>
>();

interface GoogleAuthInternal {
  jsonContent?: Record<string, unknown> | null;
  cachedCredential?: AuthClient | null;
  apiKey?: string | null;
  keyFilename?: string;
  isGCE?: boolean;
}

/**
 * Resolves the effective universe domain from an explicit option,
 * `GOOGLE_CLOUD_UNIVERSE_DOMAIN` environment variable, or `DEFAULT_UNIVERSE`,
 * ignoring empty or whitespace-only strings.
 *
 * @internal
 */
export function resolveUniverseDomain(universeDomain?: string): string {
  const configured = universeDomain?.trim();
  if (configured) {
    return configured;
  }
  const fromEnv = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN']?.trim();
  return fromEnv || DEFAULT_UNIVERSE;
}

/**
 * Resolves the IAM credentials signing endpoint, defaulting to the configured
 * `universeDomain` when an explicit `signingEndpoint` is not provided.
 *
 * @internal
 */
export function resolveSigningEndpoint(
  signingEndpoint?: string | URL,
  universeDomain?: string,
): string | undefined {
  if (signingEndpoint) {
    return signingEndpoint.toString();
  }
  const resolvedUniverse = universeDomain?.trim();
  if (resolvedUniverse) {
    return `https://iamcredentials.${resolvedUniverse}/v1/projects/-/serviceAccounts/`;
  }
  return undefined;
}

function extractUniverseFromJSON(json: Record<string, unknown>): string {
  const direct =
    (typeof json.universe_domain === 'string' && json.universe_domain.trim()) ||
    (typeof json.universeDomain === 'string' && json.universeDomain.trim());
  if (direct) {
    return direct;
  }
  if (
    json.type === 'impersonated_service_account' &&
    json.source_credentials &&
    typeof json.source_credentials === 'object'
  ) {
    return extractUniverseFromJSON(
      json.source_credentials as Record<string, unknown>,
    );
  }
  return DEFAULT_UNIVERSE;
}

async function readUniverseFromFile(
  filePath: string,
  treatNonJsonAsDefaultUniverse: boolean,
): Promise<string | undefined> {
  let raw: string;
  try {
    raw = await fs.promises.readFile(path.resolve(filePath), 'utf8');
  } catch {
    return undefined;
  }

  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return extractUniverseFromJSON(parsed as Record<string, unknown>);
    }
    return treatNonJsonAsDefaultUniverse ? DEFAULT_UNIVERSE : undefined;
  } catch {
    return treatNonJsonAsDefaultUniverse ? DEFAULT_UNIVERSE : undefined;
  }
}

function getWellKnownAdcFilePath(): string | undefined {
  let configDir = process.env['CLOUDSDK_CONFIG'];
  if (!configDir) {
    if (os.platform().toLowerCase().startsWith('win')) {
      if (process.env['APPDATA']) {
        configDir = path.join(process.env['APPDATA'], 'gcloud');
      }
    } else {
      const home = process.env['HOME'];
      if (home) {
        configDir = path.join(home, '.config', 'gcloud');
      }
    }
  }
  if (!configDir) {
    return undefined;
  }
  return path.join(configDir, 'application_default_credentials.json');
}

async function queryMetadataUniverse(): Promise<string> {
  try {
    const fromMeta = await gcpMetadata.universe('universe-domain');
    return (
      (typeof fromMeta === 'string' && fromMeta.trim()) || DEFAULT_UNIVERSE
    );
  } catch (e) {
    if ((e as GaxiosError)?.response?.status === 404) {
      return DEFAULT_UNIVERSE;
    }
    throw e;
  }
}

function resolveComputeUniverse(
  computeClient: Compute,
  isFromGceAdc = false,
): Promise<string> {
  const explicitUniverse = computeClient.universeDomain?.trim();
  if (
    !isFromGceAdc &&
    explicitUniverse &&
    explicitUniverse !== DEFAULT_UNIVERSE
  ) {
    return Promise.resolve(explicitUniverse);
  }

  const existing = credentialUniverseCache.get(computeClient);
  if (existing) {
    return existing as Promise<string>;
  }

  const pending = (async () => {
    if (!(await gcpMetadata.isAvailable())) {
      return DEFAULT_UNIVERSE;
    }
    return queryMetadataUniverse();
  })().catch(err => {
    credentialUniverseCache.delete(computeClient);
    throw err;
  });
  credentialUniverseCache.set(computeClient, pending);
  return pending;
}

async function readAuthClientObjectUniverse(client: object): Promise<string> {
  let raw: string | undefined;
  if (
    typeof (client as {getUniverseDomain?: unknown}).getUniverseDomain ===
    'function'
  ) {
    raw = await (
      client as {getUniverseDomain(): Promise<string | undefined>}
    ).getUniverseDomain();
  } else if (
    typeof (client as {universeDomain?: unknown}).universeDomain === 'string'
  ) {
    raw = (client as {universeDomain: string}).universeDomain;
  }
  return (typeof raw === 'string' && raw.trim()) || DEFAULT_UNIVERSE;
}

async function resolveGoogleAuthUniverse(
  authClient: GoogleAuth,
): Promise<string | undefined> {
  if (authClient.getUniverseDomain !== GoogleAuth.prototype.getUniverseDomain) {
    const u = await authClient.getUniverseDomain();
    return (typeof u === 'string' && u.trim()) || DEFAULT_UNIVERSE;
  }

  let cached = credentialUniverseCache.get(authClient);
  if (!cached) {
    cached = (async (): Promise<string | undefined> => {
      const internal = authClient as unknown as GoogleAuthInternal;

      if (internal.jsonContent && typeof internal.jsonContent === 'object') {
        return extractUniverseFromJSON(internal.jsonContent);
      }

      if (internal.keyFilename) {
        return readUniverseFromFile(internal.keyFilename, true);
      }

      if (internal.apiKey) {
        return undefined;
      }

      if (internal.cachedCredential) {
        if (internal.cachedCredential instanceof PassThroughClient) {
          return undefined;
        }
        if (internal.cachedCredential instanceof Compute) {
          return resolveComputeUniverse(
            internal.cachedCredential,
            internal.isGCE === true,
          );
        }
        return readAuthClientObjectUniverse(internal.cachedCredential);
      }

      const envAdcPath =
        process.env['GOOGLE_APPLICATION_CREDENTIALS'] ||
        process.env['google_application_credentials'];
      if (envAdcPath) {
        return readUniverseFromFile(envAdcPath, false);
      }

      const wellKnownPath = getWellKnownAdcFilePath();
      if (wellKnownPath) {
        try {
          const raw = await fs.promises.readFile(wellKnownPath, 'utf8');
          try {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
              return extractUniverseFromJSON(parsed as Record<string, unknown>);
            }
          } catch {
            // Malformed ADC file; skip so GoogleAuth surfaces its parse error
          }
          return undefined;
        } catch (err) {
          const code = (err as NodeJS.ErrnoException)?.code;
          if (code !== 'ENOENT' && code !== 'ENOTDIR') {
            return undefined;
          }
        }
      }

      if (await gcpMetadata.isAvailable()) {
        return queryMetadataUniverse();
      }

      return undefined;
    })().catch(err => {
      credentialUniverseCache.delete(authClient);
      throw err;
    });
    credentialUniverseCache.set(authClient, cached);
  }

  return cached;
}

/**
 * Validates that the universe domain of `authClient` matches
 * `expectedUniverseDomain`, throwing before any network, token, or signing
 * call on mismatch.
 *
 * @internal
 */
export async function validateUniverseDomain(
  authClient: unknown,
  expectedUniverseDomain?: string,
): Promise<void> {
  if (
    !authClient ||
    typeof authClient !== 'object' ||
    authClient === gaxios ||
    authClient instanceof PassThroughClient
  ) {
    return;
  }

  let actual: string | undefined;
  if (authClient instanceof GoogleAuth) {
    actual = await resolveGoogleAuthUniverse(authClient);
  } else if (authClient instanceof Compute) {
    actual = await resolveComputeUniverse(authClient);
  } else {
    actual = await readAuthClientObjectUniverse(authClient);
  }

  if (actual === undefined) {
    return;
  }

  const expected = resolveUniverseDomain(expectedUniverseDomain);
  if (actual !== expected) {
    throw new Error(
      `The configured universe domain (${expected}) does not match the universe domain found in the credentials (${actual}). Please check your universe domain configuration.`,
    );
  }
}
