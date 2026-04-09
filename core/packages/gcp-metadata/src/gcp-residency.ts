/**
 * Copyright 2022 Google LLC
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

import {readFileSync, statSync} from 'fs';
import {networkInterfaces, platform} from 'os';

/**
 * Known paths unique to Google Compute Engine Linux instances
 */
export const GCE_LINUX_BIOS_PATHS = {
  BIOS_DATE: '/sys/class/dmi/id/bios_date',
  BIOS_VENDOR: '/sys/class/dmi/id/bios_vendor',
};

const GCE_MAC_ADDRESS_REGEX = /^42:01/;

/**
 * Determines if the process is running on a Google Cloud Serverless environment (Cloud Run or Cloud Functions instance).
 *
 * Uses the:
 * - {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
 * - {@link https://cloud.google.com/functions/docs/env-var Cloud Functions environment variables}.
 *
 * @returns {boolean} `true` if the process is running on GCP serverless, `false` otherwise.
 */
export function isGoogleCloudServerless(): boolean {
  /**
   * `CLOUD_RUN_JOB` is used for Cloud Run Jobs
   * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
   *
   * `FUNCTION_NAME` is used in older Cloud Functions environments:
   * - See {@link https://cloud.google.com/functions/docs/env-var Python 3.7 and Go 1.11}.
   *
   * `K_SERVICE` is used in Cloud Run and newer Cloud Functions environments:
   * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
   * - See {@link https://cloud.google.com/functions/docs/env-var Cloud Functions newer runtimes}.
   */
  const isGFEnvironment =
    process.env.CLOUD_RUN_JOB ||
    process.env.FUNCTION_NAME ||
    process.env.K_SERVICE;

  return !!isGFEnvironment;
}

/**
 * Determines if the process is running on a Linux Google Compute Engine instance.
 *
 * @returns {boolean} `true` if the process is running on Linux GCE, `false` otherwise.
 */
export function isGoogleComputeEngineLinux(): boolean {
  if (platform() !== 'linux') return false;

  try {
    // ensure this file exist
    statSync(GCE_LINUX_BIOS_PATHS.BIOS_DATE);

    // ensure this file exist and matches
    const biosVendor = readFileSync(GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, 'utf8');

    return /Google/.test(biosVendor);
  } catch {
    return false;
  }
}

/**
 * Determines if the process is running on a Google Compute Engine instance with a known
 * MAC address.
 *
 * @returns {boolean} `true` if the process is running on GCE (as determined by MAC address), `false` otherwise.
 */
export function isGoogleComputeEngineMACAddress(): boolean {
  const interfaces = networkInterfaces();

  for (const item of Object.values(interfaces)) {
    if (!item) continue;

    for (const {mac} of item) {
      if (GCE_MAC_ADDRESS_REGEX.test(mac)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Determines if the process is running on a Google Compute Engine instance.
 *
 * @returns {boolean} `true` if the process is running on GCE, `false` otherwise.
 */
export function isGoogleComputeEngine(): boolean {
  return isGoogleComputeEngineLinux() || isGoogleComputeEngineMACAddress();
}

/**
 * Determines if the process is running on Google Cloud Platform.
 *
 * @returns {boolean} `true` if the process is running on GCP, `false` otherwise.
 */
export function detectGCPResidency(): boolean {
  return isGoogleCloudServerless() || isGoogleComputeEngine();
}
