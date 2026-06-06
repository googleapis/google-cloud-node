// Copyright 2025 Google LLC
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

import {SubjectTokenSupplier} from './identitypoolclient';
import * as fs from 'fs';
import {X509Certificate} from 'crypto';
import * as https from 'https';
import {
  CertificateSourceUnavailableError,
  InvalidConfigurationError,
  getClientCertAndKey,
} from './mtlsutils';

/**
 * Defines options for creating a {@link CertificateSubjectTokenSupplier}.
 */
export interface CertificateSubjectTokenSupplierOptions {
  /**
   * If true, uses the default well-known location for the certificate config.
   * Either this or `certificateConfigLocation` must be provided.
   */
  useDefaultCertificateConfig?: boolean;
  /**
   * The file path to the certificate configuration JSON file.
   * Required if `useDefaultCertificateConfig` is not true.
   */
  certificateConfigLocation?: string;
  /**
   * The file path to the trust chain (PEM format).
   */
  trustChainPath?: string;
}

/**
 * Represents the "workload" block within the certificate configuration file.
 * @internal
 */

/**
 * A subject token supplier that uses a client certificate for authentication.
 * It provides the certificate chain as the subject token for identity federation.
 */
export class CertificateSubjectTokenSupplier implements SubjectTokenSupplier {
  private certificateConfigPath: string;
  private readonly trustChainPath?: string;
  private cert?: Buffer;
  private key?: Buffer;

  /**
   * Initializes a new instance of the CertificateSubjectTokenSupplier.
   * @param opts The configuration options for the supplier.
   */
  constructor(opts: CertificateSubjectTokenSupplierOptions) {
    if (!opts.useDefaultCertificateConfig && !opts.certificateConfigLocation) {
      throw new InvalidConfigurationError(
        'Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.',
      );
    }
    if (opts.useDefaultCertificateConfig && opts.certificateConfigLocation) {
      throw new InvalidConfigurationError(
        'Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.',
      );
    }
    this.trustChainPath = opts.trustChainPath;
    this.certificateConfigPath = opts.certificateConfigLocation ?? '';
  }

  /**
   * Creates an HTTPS agent configured with the client certificate and private key for mTLS.
   * @returns An mTLS-configured https.Agent.
   */
  public async createMtlsHttpsAgent(): Promise<https.Agent> {
    if (!this.key || !this.cert) {
      throw new InvalidConfigurationError(
        'Cannot create mTLS Agent with missing certificate or key',
      );
    }
    return new https.Agent({key: this.key, cert: this.cert});
  }

  /**
   * Constructs the subject token, which is the base64-encoded certificate chain.
   * @returns A promise that resolves with the subject token.
   */
  public async getSubjectToken(): Promise<string> {
    // The "subject token" in this context is the processed certificate chain.

    // getClientCertAndKey handles path resolution, file reading, and validation
    ({cert: this.cert, key: this.key} = await getClientCertAndKey(
      this.certificateConfigPath,
    ));

    return await this.#processChainFromPaths(this.cert);
  }

  /**
   * Reads the leaf certificate and trust chain, combines them,
   * and returns a JSON array of base64-encoded certificates.
   * @returns A stringified JSON array of the certificate chain.
   */
  async #processChainFromPaths(leafCertBuffer: Buffer): Promise<string> {
    const leafCert = new X509Certificate(leafCertBuffer);

    // If no trust chain is provided, just use the successfully parsed leaf certificate.
    if (!this.trustChainPath) {
      return JSON.stringify([leafCert.raw.toString('base64')]);
    }

    // Handle the trust chain logic.
    try {
      const chainPems = await fs.promises.readFile(this.trustChainPath, 'utf8');

      const pemBlocks =
        chainPems.match(
          /-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g,
        ) ?? [];

      const chainCerts: X509Certificate[] = pemBlocks.map((pem, index) => {
        try {
          return new X509Certificate(pem);
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          // Throw a more precise error if a single certificate in the chain is invalid.
          throw new InvalidConfigurationError(
            `Failed to parse certificate at index ${index} in trust chain file ${
              this.trustChainPath
            }: ${message}`,
          );
        }
      });

      const leafIndex = chainCerts.findIndex(chainCert =>
        leafCert.raw.equals(chainCert.raw),
      );

      let finalChain: X509Certificate[];

      if (leafIndex === -1) {
        // Leaf not found, so prepend it to the chain.
        finalChain = [leafCert, ...chainCerts];
      } else if (leafIndex === 0) {
        // Leaf is already the first element, so the chain is correctly ordered.
        finalChain = chainCerts;
      } else {
        // Leaf is in the chain but not at the top, which is invalid.
        throw new InvalidConfigurationError(
          `Leaf certificate exists in the trust chain but is not the first entry (found at index ${leafIndex}).`,
        );
      }

      return JSON.stringify(
        finalChain.map(cert => cert.raw.toString('base64')),
      );
    } catch (err) {
      // Re-throw our specific configuration errors.
      if (err instanceof InvalidConfigurationError) throw err;

      const message = err instanceof Error ? err.message : String(err);
      throw new CertificateSourceUnavailableError(
        `Failed to process certificate chain from ${this.trustChainPath}: ${message}`,
      );
    }
  }
}
