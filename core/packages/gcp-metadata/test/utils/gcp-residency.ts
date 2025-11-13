/**
 * Copyright 2023 Google LLC
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

import {strict as assert} from 'assert';
import fs from 'fs';
import os from 'os';

import {SinonSandbox, SinonStub} from 'sinon';

import * as gcpResidency from '../../src/gcp-residency';

export class GCPResidencyUtil {
  /**
   * Stubs used in this utility. These are used within the provided sandbox.
   * */
  stubs: {
    [key in
      | 'fsReadFileSync'
      | 'fsStatSync'
      | 'processEnv'
      | 'osNetworkInterfaces'
      | 'osPlatform']?: SinonStub | void;
  } = {};

  constructor(public sandbox: SinonSandbox) {}

  /**
   * A simple utility for stubbing the networkInterface for GCE emulation.
   *
   * @param isGCE determines if the address should begin with `42:01` or not
   */
  setGCENetworkInterface(isGCE = true) {
    const mac = isGCE ? '42:01:00:00:00:00' : '00:00:00:00:00:00';

    this.stubs.osNetworkInterfaces ??= this.sandbox.stub(
      os,
      'networkInterfaces',
    );
    this.stubs.osNetworkInterfaces.returns({
      'test-interface': [{mac} as os.NetworkInterfaceInfo],
    });
  }

  /**
   * A simple utility for stubbing the platform for GCE emulation.
   *
   * @param platform a Node.js platform
   */
  setGCEPlatform(platform: NodeJS.Platform = 'linux') {
    this.stubs.osPlatform ??= this.sandbox.stub(os, 'platform');

    this.stubs.osPlatform.returns(platform);
  }

  /**
   * A simple utility for stubbing the Linux BIOS files for GCE emulation.
   *
   * @param isGCE options:
   *   - set `true` to simulate the files exist and are GCE
   *   - set `false` for exist, but are not GCE
   *   - set `null` for simulate ENOENT
   */
  setGCELinuxBios(isGCE: boolean | null) {
    this.stubs.fsReadFileSync ??= this.sandbox.stub(fs, 'readFileSync');
    this.stubs.fsStatSync ??= this.sandbox.stub(fs, 'statSync');

    this.stubs.fsStatSync
      .withArgs(gcpResidency.GCE_LINUX_BIOS_PATHS.BIOS_DATE)
      .callsFake(() => {
        return undefined;
      });

    this.stubs.fsReadFileSync
      .withArgs(gcpResidency.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, 'utf8')
      .callsFake(() => {
        if (isGCE === true) {
          return 'x Google x';
        } else if (isGCE === false) {
          return 'Sandwich Co.';
        } else {
          throw new Error("File doesn't exist");
        }
      });

    this.stubs.fsStatSync.callThrough();
    this.stubs.fsReadFileSync.callThrough();
  }

  /**
   * Removes serverless-related environment variables from the
   * environment (such as Cloud Run and Cloud Functions).
   */
  removeServerlessEnvironmentVariables() {
    const customEnv = {...process.env};

    delete customEnv.CLOUD_RUN_JOB;
    delete customEnv.FUNCTION_NAME;
    delete customEnv.K_SERVICE;

    this.stubs.processEnv ??= this.sandbox.stub(process, 'env');
    this.stubs.processEnv.value(customEnv);
  }

  /**
   * Sets the environment as non-GCP by stubbing and setting/removing the
   * environment variables.
   */
  setNonGCP() {
    // `isGoogleCloudServerless` = false
    this.removeServerlessEnvironmentVariables();

    // `isGoogleComputeEngine` = false
    this.setGCENetworkInterface(false);
    this.setGCELinuxBios(false);
  }
}
