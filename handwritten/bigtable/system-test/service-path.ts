// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {describe, it} from 'mocha';
import * as assert from 'assert';
import {ServiceError} from 'google-gax';
import {Bigtable} from '../src';
import {BigtableClient, BigtableInstanceAdminClient} from '../src/v2';

describe('Service Path', () => {
  it('Setting universe domain should set the service path', async () => {
    // Set the environment variable
    process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = 'otherDomain';

    const universeDomain = 'someUniverseDomain'; // or your universe domain if not using emulator
    const options = {
      universeDomain,
    };
    const bigtable = new Bigtable({
      BigtableClient: options,
      BigtableInstanceAdminClient: options,
      BigtableTableAdminClient: options,
    });
    // Need to mock getProjectId_ since it normally uses auth and auth isn't
    // available in unit tests.
    bigtable.getProjectId_ = (
      callback: (err: Error | null, projectId?: string) => void,
    ) => {
      callback(null, 'projectId');
    };
    try {
      // This is necessary to initialize the bigtable instance admin client.
      await bigtable.getInstances({timeout: 1000});
    } catch (e) {
      const expectedMessage =
        'Total timeout of API google.bigtable.admin.v2.BigtableInstanceAdmin exceeded 1000 milliseconds retrying error Error: 14 UNAVAILABLE: Name resolution failed for target dns:bigtableadmin.someUniverseDomain:443  before any response was received.';
      assert.strictEqual(
        (e as ServiceError).message.substring(0, expectedMessage.length),
        expectedMessage,
      );
    } finally {
      assert.strictEqual(
        (
          bigtable.api
            .BigtableInstanceAdminClient as BigtableInstanceAdminClient
        )['_opts'].servicePath,
        `bigtableadmin.${universeDomain}`,
      );
    }
    try {
      // This will fail in unit tests, but is necessary to initialize the
      // bigtable client.
      const instance = bigtable.instance('instanceId');
      const table = instance.table('tableId');
      await table.getRows({gaxOptions: {timeout: 1000}});
    } catch (e) {
      const expectedMessage =
        '14 UNAVAILABLE: Name resolution failed for target dns:bigtable.someUniverseDomain:443';
      assert.strictEqual(
        (e as ServiceError).message.substring(0, expectedMessage.length),
        expectedMessage,
      );
    } finally {
      assert.strictEqual(
        (bigtable.api.BigtableClient as BigtableClient)['_opts'].servicePath,
        `bigtable.${universeDomain}`,
      );
    }

    // Clean up the environment variable after the test
    delete process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN;
  });
  it('Setting universe domain and custom endpoint should set the service path to custom endpoint', async () => {
    // Set the environment variable
    process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = 'otherDomain';

    const universeDomain = 'someUniverseDomain'; // or your universe domain if not using emulator
    const apiEndpoint = 'someApiEndpoint';
    const options = {
      universeDomain,
    };
    const bigtable = new Bigtable({
      apiEndpoint,
      BigtableClient: options,
      BigtableInstanceAdminClient: options,
      BigtableTableAdminClient: options,
    });
    // Need to mock getProjectId_ since it normally uses auth and auth isn't
    // available in unit tests.
    bigtable.getProjectId_ = (
      callback: (err: Error | null, projectId?: string) => void,
    ) => {
      callback(null, 'projectId');
    };
    try {
      // This is necessary to initialize the bigtable instance admin client.
      await bigtable.getInstances({timeout: 1000});
    } catch (e) {
      const expectedMessage =
        'Total timeout of API google.bigtable.admin.v2.BigtableInstanceAdmin exceeded 1000 milliseconds retrying error Error: 14 UNAVAILABLE: Name resolution failed for target dns:someApiEndpoint:443  before any response was received.';
      assert.strictEqual(
        (e as ServiceError).message.substring(0, expectedMessage.length),
        expectedMessage,
      );
    } finally {
      assert.strictEqual(
        (
          bigtable.api
            .BigtableInstanceAdminClient as BigtableInstanceAdminClient
        )['_opts'].servicePath,
        apiEndpoint,
      );
    }
    try {
      // This will fail in unit tests, but is necessary to initialize the
      // bigtable client.
      const instance = bigtable.instance('instanceId');
      const table = instance.table('tableId');
      await table.getRows({gaxOptions: {timeout: 1000}});
    } catch (e) {
      const expectedMessage =
        '14 UNAVAILABLE: Name resolution failed for target dns:someApiEndpoint:443';
      assert.strictEqual(
        (e as ServiceError).message.substring(0, expectedMessage.length),
        expectedMessage,
      );
    } finally {
      assert.strictEqual(
        (bigtable.api.BigtableClient as BigtableClient)['_opts'].servicePath,
        apiEndpoint,
      );
    }

    // Clean up the environment variable after the test
    delete process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN;
  });
  it('Setting GOOGLE_CLOUD_UNIVERSE_DOMAIN should set the service path', async () => {
    const universeDomain = 'someUniverseDomain'; // or your universe domain if not using emulator

    // Set the environment variable
    process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = universeDomain;
    const bigtable = new Bigtable(); // No options needed, it will pick up the env var

    // Need to mock getProjectId_ since it normally uses auth and auth isn't
    // available in unit tests.
    bigtable.getProjectId_ = (
      callback: (err: Error | null, projectId?: string) => void,
    ) => {
      callback(null, 'projectId');
    };

    try {
      // This is necessary to initialize the bigtable instance admin client.
      await bigtable.getInstances({timeout: 1000});
    } catch (e) {
      const expectedMessage =
        'Total timeout of API google.bigtable.admin.v2.BigtableInstanceAdmin exceeded 1000 milliseconds retrying error Error: 14 UNAVAILABLE: Name resolution failed for target dns:bigtableadmin.someUniverseDomain:443  before any response was received.';
      assert.strictEqual(
        (e as ServiceError).message.substring(0, expectedMessage.length),
        expectedMessage,
      );
    } finally {
      assert.strictEqual(
        (
          bigtable.api
            .BigtableInstanceAdminClient as BigtableInstanceAdminClient
        )['_opts'].servicePath,
        `bigtableadmin.${universeDomain}`,
      );
    }

    try {
      // This will fail in unit tests, but is necessary to initialize the
      // bigtable client.
      const instance = bigtable.instance('instanceId');
      const table = instance.table('tableId');
      await table.getRows({gaxOptions: {timeout: 1000}});
    } catch (e) {
      const expectedMessage =
        '14 UNAVAILABLE: Name resolution failed for target dns:bigtable.someUniverseDomain:443';
      assert.strictEqual(
        (e as ServiceError).message.substring(0, expectedMessage.length),
        expectedMessage,
      );
    } finally {
      assert.strictEqual(
        (bigtable.api.BigtableClient as BigtableClient)['_opts'].servicePath,
        `bigtable.${universeDomain}`,
      );
    }

    // Clean up the environment variable after the test
    delete process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN;
  });
});
