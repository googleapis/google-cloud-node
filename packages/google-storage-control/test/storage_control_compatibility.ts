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

import * as assert from 'assert';
import {StorageControlClient as UberStorageControlClient} from '../src/storage_control_client';
import {StorageControlClient as OriginalStorageControlClient} from '../src/v2/storage_control_client';

describe('Backwards compatibility', () => {
  it('uber client should have all the methods of the original client', () => {
    const uberClient = new UberStorageControlClient();
    const originalClient = new OriginalStorageControlClient();

    const uberClientMethods = Object.getOwnPropertyNames(
      Object.getPrototypeOf(uberClient),
    );
    const originalClientMethods = Object.getOwnPropertyNames(
      Object.getPrototypeOf(originalClient),
    );

    for (const method of originalClientMethods) {
      if (method !== 'constructor') {
        assert.ok(
          uberClientMethods.includes(method),
          `Method ${method} is missing from the uber client`,
        );
      }
    }
  });

  it('should have a storageControlInternal property that is an instance of StorageControlClient', () => {
    const uberClient = new UberStorageControlClient();
    assert.ok(
      uberClient.storageControlInternal instanceof OriginalStorageControlClient,
      'storageControlInternal should be an instance of StorageControlClient',
    );
  });

  it('uber client should have all the static members of the original client', () => {
    const uberClientStatics = Object.getOwnPropertyNames(
      UberStorageControlClient,
    );
    const originalClientStatics = Object.getOwnPropertyNames(
      OriginalStorageControlClient,
    );

    for (const staticMember of originalClientStatics) {
      if (staticMember !== 'constructor') {
        assert.ok(
          uberClientStatics.includes(staticMember),
          `Static member ${staticMember} is missing from the uber client`,
        );
      }
    }
  });

  it('uber client should have all the instance properties and accessors of the original client', () => {
    const uberClient = new UberStorageControlClient();
    const originalClient = new OriginalStorageControlClient();

    const uberClientProperties = Object.getOwnPropertyNames(uberClient);
    const originalClientProperties = Object.getOwnPropertyNames(originalClient);

    for (const prop of originalClientProperties) {
      if (!prop.startsWith('_')) {
        assert.ok(
          uberClientProperties.includes(prop),
          `Property or accessor ${prop} is missing from the uber client`,
        );
      }
    }
  });

  it('uber client methods should have the same arity as the original client methods', () => {
    const uberClient = new UberStorageControlClient();
    const originalClient = new OriginalStorageControlClient();

    const originalClientMethods = Object.getOwnPropertyNames(
      Object.getPrototypeOf(originalClient),
    );

    for (const method of originalClientMethods) {
      if (method !== 'constructor') {
        const uberClientMethod = (uberClient as any)[method];
        const originalClientMethod = (originalClient as any)[method];
        if (
          typeof uberClientMethod === 'function' &&
          typeof originalClientMethod === 'function'
        ) {
          assert.strictEqual(
            uberClientMethod.length,
            originalClientMethod.length,
            `Method ${method} has a different arity in the uber client`,
          );
        }
      }
    }
  });
});
