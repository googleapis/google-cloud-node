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

import * as path from 'path';
import * as fs from 'fs';
import {promisify} from 'util';
import {ErrorWithCode} from './errorWithCode';

const readFile = fs.readFile
  ? promisify(fs.readFile)
  : async () => {
      // if running in the web-browser, fs.readFile may not have been shimmed.
      throw new ErrorWithCode(
        'use key rather than keyFile.',
        'MISSING_CREDENTIALS',
      );
    };

/**
 * Credentials object.
 */
interface Credentials {
  privateKey: string;
  clientEmail?: string;
}

enum ExtensionFiles {
  JSON = '.json',
  DER = '.der',
  CRT = '.crt',
  PEM = '.pem',
  P12 = '.p12',
  PFX = '.pfx',
}

/**
 * Interface for credential providers.
 */
interface ICredentialsProvider {
  /**
   * Retrieves credentials.
   * @returns A promise that resolves with the credentials.
   */
  getCredentials(): Promise<Credentials>;
}

/**
 * Provides credentials from a JSON key file.
 */
class JsonCredentialsProvider implements ICredentialsProvider {
  constructor(private keyFilePath: string) {}

  /**
   * Reads a JSON key file and extracts the private key and client email.
   * @returns A promise that resolves with the credentials.
   */
  async getCredentials(): Promise<Credentials> {
    const key = await readFile(this.keyFilePath, 'utf8');
    let body: any;
    try {
      body = JSON.parse(key);
    } catch (error) {
      const err = error as Error;
      throw new Error(`Invalid JSON key file: ${err.message}`);
    }
    const privateKey = body.private_key;
    const clientEmail = body.client_email;
    if (!privateKey || !clientEmail) {
      throw new ErrorWithCode(
        'private_key and client_email are required.',
        'MISSING_CREDENTIALS',
      );
    }
    return {privateKey, clientEmail};
  }
}

/**
 * Provides credentials from a PEM-like key file.
 */
class PemCredentialsProvider implements ICredentialsProvider {
  constructor(private keyFilePath: string) {}

  /**
   * Reads a PEM-like key file.
   * @returns A promise that resolves with the private key.
   */
  async getCredentials(): Promise<Credentials> {
    const privateKey = await readFile(this.keyFilePath, 'utf8');
    return {privateKey};
  }
}

/**
 * Handles unsupported P12/PFX certificate types.
 */
class P12CredentialsProvider implements ICredentialsProvider {
  /**
   * Throws an error as P12/PFX certificates are not supported.
   * @returns A promise that rejects with an error.
   */
  async getCredentials(): Promise<Credentials> {
    throw new ErrorWithCode(
      '*.p12 certificates are not supported after v6.1.2. ' +
        'Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.',
      'UNKNOWN_CERTIFICATE_TYPE',
    );
  }
}

/**
 * Factory class to create the appropriate credentials provider.
 */
class CredentialsProviderFactory {
  /**
   * Creates a credential provider based on the key file extension.
   * @param keyFilePath The path to the key file.
   * @returns An instance of a class that implements ICredentialsProvider.
   */
  static create(keyFilePath: string): ICredentialsProvider {
    const keyFileExtension = path.extname(keyFilePath);
    switch (keyFileExtension) {
      case ExtensionFiles.JSON:
        return new JsonCredentialsProvider(keyFilePath);
      case ExtensionFiles.DER:
      case ExtensionFiles.CRT:
      case ExtensionFiles.PEM:
        return new PemCredentialsProvider(keyFilePath);
      case ExtensionFiles.P12:
      case ExtensionFiles.PFX:
        return new P12CredentialsProvider();
      default:
        throw new ErrorWithCode(
          'Unknown certificate type. Type is determined based on file extension. ' +
            'Current supported extensions are *.json, and *.pem.',
          'UNKNOWN_CERTIFICATE_TYPE',
        );
    }
  }
}

/**
 * Given a keyFile, extract the key and client email if available
 * @param keyFile Path to a json, pem, or p12 file that contains the key.
 * @returns an object with privateKey and clientEmail properties
 */
async function getCredentials(keyFilePath: string): Promise<Credentials> {
  const provider = CredentialsProviderFactory.create(keyFilePath);
  return provider.getCredentials();
}

export {getCredentials, Credentials};
