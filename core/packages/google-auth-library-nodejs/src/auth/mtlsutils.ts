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
import {createPrivateKey, X509Certificate} from 'crypto';
import {getWellKnownCertificateConfigFileLocation, isValidFile} from '../util';

interface WorkloadCertConfigJson {
  cert_path: string;
  key_path: string;
}

interface CertificateConfigFileJson {
  version: number;
  cert_configs: {
    workload?: WorkloadCertConfigJson;
  };
}

export const CERTIFICATE_CONFIGURATION_ENV_VARIABLE =
  'GOOGLE_API_CERTIFICATE_CONFIG';

/**
 * Thrown when the certificate source cannot be located or accessed.
 */
export class CertificateSourceUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CertificateSourceUnavailableError';
  }
}

/**
 * Thrown for invalid configuration that is not related to file availability.
 * Re-exported for use in CertificateSubjectTokenSupplier validation.
 */
export class InvalidConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidConfigurationError';
  }
}

/**
 * Endpoint usage policy for mutual TLS (mTLS).
 */
export enum MtlsEndpointUsagePolicy {
  ALWAYS = 'always',
  NEVER = 'never',
  AUTO = 'auto',
}

/**
 * Resolves the mTLS endpoint usage policy based on the `GOOGLE_API_USE_MTLS_ENDPOINT`
 * environment variable.
 *
 * @returns The resolved MtlsEndpointUsagePolicy.
 */
export function getMtlsEndpointUsagePolicy(): MtlsEndpointUsagePolicy {
  const policy = process.env.GOOGLE_API_USE_MTLS_ENDPOINT;
  if (policy === 'never') {
    return MtlsEndpointUsagePolicy.NEVER;
  } else if (policy === 'always') {
    return MtlsEndpointUsagePolicy.ALWAYS;
  }
  return MtlsEndpointUsagePolicy.AUTO;
}

/**
 * Centralized helper method to determine if mutual TLS (mTLS) can be enabled.
 *
 * Checks for the environment policy constraints and parses the certificate configuration file.
 *
 * @param certConfigPathOverride Optional path to override the certificate configuration file.
 * @returns A promise that resolves to `true` if mTLS can be enabled, `false` otherwise.
 * @throws {Error} If a configuration file is resolved but contains malformed contents or missing files.
 */
export async function canMtlsBeEnabled(
  certConfigPathOverride?: string,
): Promise<boolean> {
  const policy = getMtlsEndpointUsagePolicy();
  if (process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE === 'false') {
    if (policy === MtlsEndpointUsagePolicy.ALWAYS) {
      throw new CertificateSourceUnavailableError(
        'mTLS is configured to ALWAYS, but client certificate usage was explicitly disabled via GOOGLE_API_USE_CLIENT_CERTIFICATE=false.',
      );
    }
    return false;
  }
  if (policy === MtlsEndpointUsagePolicy.NEVER) {
    return false;
  }
  if (policy === MtlsEndpointUsagePolicy.ALWAYS) {
    return true;
  }

  // Check for certificate configuration file
  if (
    certConfigPathOverride ||
    process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE]
  ) {
    const configPath =
      certConfigPathOverride ||
      process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE]!;
    if (!(await isValidFile(configPath))) {
      throw new CertificateSourceUnavailableError(
        `Certificate configuration file does not exist or is not a file: ${configPath}`,
      );
    }
    return true;
  }

  const wellKnownPath = getWellKnownCertificateConfigFileLocation();
  if (await isValidFile(wellKnownPath)) {
    return true;
  }

  return false;
}

/**
 * Resolves the path to the certificate configuration JSON file.
 * Checks the override path, standard environment variable, and well-known location.
 *
 * @param certConfigPathOverride Optional override path.
 * @returns The resolved absolute path to the configuration file.
 * @throws {CertificateSourceUnavailableError} If the configuration file cannot be found.
 */
export async function resolveCertificateConfigFilePath(
  certConfigPathOverride?: string,
): Promise<string> {
  // Step 1: Check if an override path was passed directly (highest precedence)
  if (certConfigPathOverride) {
    if (await isValidFile(certConfigPathOverride)) {
      return certConfigPathOverride;
    }
    throw new CertificateSourceUnavailableError(
      `Provided certificate config path is invalid: ${certConfigPathOverride}`,
    );
  }

  // Step 2: Check if the configuration path environment variable is defined
  const envPath = process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
  if (envPath) {
    if (await isValidFile(envPath)) {
      return envPath;
    }
    throw new CertificateSourceUnavailableError(
      `Path from environment variable "${CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${envPath}`,
    );
  }

  // Step 3: Check in the default well-known gcloud location (lowest precedence)
  const wellKnownPath = getWellKnownCertificateConfigFileLocation();
  if (await isValidFile(wellKnownPath)) {
    return wellKnownPath;
  }

  // Step 4: Throw error if no configuration file could be resolved
  throw new CertificateSourceUnavailableError(
    'Could not find certificate configuration file. Searched override path, ' +
      `the "${CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${wellKnownPath}).`,
  );
}

/**
 * Reads and parses the certificate configuration JSON file to extract the
 * certificate and private key file paths from the workload configuration block.
 *
 * @param configPath Absolute path to the certificate config file.
 * @returns The file paths to the certificate and key.
 * @throws {CertificateSourceUnavailableError} If the configuration file is unreadable.
 * @throws {InvalidConfigurationError} If the JSON contents are invalid or missing required paths.
 */
export async function getCertAndKeyFilePathsFromConfig(
  configPath: string,
): Promise<{certPath: string; keyPath: string}> {
  let fileContents: string;
  try {
    fileContents = await fs.promises.readFile(configPath, 'utf8');
  } catch (err) {
    throw new CertificateSourceUnavailableError(
      `Failed to read certificate config file at: ${configPath}`,
    );
  }

  try {
    const config = JSON.parse(fileContents) as CertificateConfigFileJson;
    const certPath = config?.cert_configs?.workload?.cert_path;
    const keyPath = config?.cert_configs?.workload?.key_path;

    if (!certPath || !keyPath) {
      throw new InvalidConfigurationError(
        `Certificate config file (${configPath}) is missing required "cert_path" or "key_path" in the workload config.`,
      );
    }
    return {certPath, keyPath};
  } catch (e) {
    if (
      e instanceof InvalidConfigurationError ||
      e instanceof CertificateSourceUnavailableError
    ) {
      throw e;
    }
    throw new InvalidConfigurationError(
      `Failed to parse certificate config from ${configPath}: ${
        (e as Error).message
      }`,
    );
  }
}

/**
 * Loads the actual certificate and private key bytes from disk.
 * Prioritizes the configuration file. Validates the loaded files are in the correct format.
 *
 * @param certConfigPathOverride Optional override path.
 * @returns The loaded cert and private key buffers.
 * @throws {Error} If no credentials could be resolved or if validation fails.
 */
export async function getClientCertAndKey(
  certConfigPathOverride?: string,
): Promise<{cert: Buffer; key: Buffer}> {
  const configPath = await resolveCertificateConfigFilePath(
    certConfigPathOverride,
  );
  const {certPath, keyPath} =
    await getCertAndKeyFilePathsFromConfig(configPath);

  let cert, key;
  try {
    cert = await fs.promises.readFile(certPath);
    new X509Certificate(cert);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new CertificateSourceUnavailableError(
      `Failed to read certificate file at ${certPath}: ${message}`,
    );
  }
  try {
    key = await fs.promises.readFile(keyPath);
    createPrivateKey(key);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new CertificateSourceUnavailableError(
      `Failed to read private key file at ${keyPath}: ${message}`,
    );
  }

  return {cert, key};
}
