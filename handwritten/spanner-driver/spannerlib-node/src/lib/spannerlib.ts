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

import { ffi } from '../ffi/utils.js';

export type ResourceCleanupInfo =
  | { type: 'pool'; poolId: number }
  | { type: 'connection'; poolId: number; connectionId: number }
  | { type: 'rows'; poolId: number; connectionId: number; rowsId: number };

/**
 * Internal registry and state manager for SpannerLib native resources.
 *
 * This class utilizes JavaScript's `FinalizationRegistry` to automatically
 * trigger the cleanup of native Go resources (pools, connections, and rows)
 * when their corresponding JavaScript wrapper objects are garbage collected
 * by the V8 engine. This prevents native memory leaks even if explicit
 * `.close()` calls are omitted.
 *
 * It also intercepts process exit signals to ensure all active Spanner pools
 * and sessions are cleanly deleted from the GCP backend before termination.
 */
export class SpannerLib {
  private registry: FinalizationRegistry<ResourceCleanupInfo>;
  private activeResources = new Set<ResourceCleanupInfo>();
  private resourceMap = new WeakMap<object, ResourceCleanupInfo>();

  constructor() {
    this.registry = new FinalizationRegistry((info: ResourceCleanupInfo) => {
      this.activeResources.delete(info);
      this.cleanup(info).catch(() => {});
    });

    if (typeof process !== 'undefined') {
      // Hook beforeExit for natural exit cleanup
      process.once('beforeExit', () => {
        this.cleanupAll().catch(() => {});
      });
    }
  }

  private async cleanup(info: ResourceCleanupInfo): Promise<void> {
    switch (info.type) {
      case 'pool':
        await ffi.invokeAsync('ClosePool', info.poolId);
        break;
      case 'connection':
        await ffi.invokeAsync(
          'CloseConnection',
          info.poolId,
          info.connectionId
        );
        break;
      case 'rows':
        await ffi.invokeAsync(
          'CloseRows',
          info.poolId,
          info.connectionId,
          info.rowsId
        );
        break;
    }
  }

  public async cleanupAll(): Promise<void> {
    const resources = Array.from(this.activeResources);
    this.activeResources.clear();
    this.resourceMap = new WeakMap<object, ResourceCleanupInfo>();

    const rows = resources.filter((r) => r.type === 'rows');
    const connections = resources.filter((r) => r.type === 'connection');
    const pools = resources.filter((r) => r.type === 'pool');

    // Clean rows first, then connections, then pools in parallel chunks
    await Promise.all(
      rows.map((info) =>
        ffi
          .invokeAsync('CloseRows', info.poolId, info.connectionId, info.rowsId)
          .catch(() => {})
      )
    );
    await Promise.all(
      connections.map((info) =>
        ffi
          .invokeAsync('CloseConnection', info.poolId, info.connectionId)
          .catch(() => {})
      )
    );
    await Promise.all(
      pools.map((info) =>
        ffi.invokeAsync('ClosePool', info.poolId).catch(() => {})
      )
    );
  }

  register(refInstance: object, info: ResourceCleanupInfo): void {
    this.activeResources.add(info);
    this.resourceMap.set(refInstance, info);
    this.registry.register(refInstance, info, refInstance);
  }

  unregister(refInstance: object): void {
    this.registry.unregister(refInstance);
    const info = this.resourceMap.get(refInstance);
    if (info) {
      this.activeResources.delete(info);
      this.resourceMap.delete(refInstance);
    }
  }
}

export const spannerLib = new SpannerLib();
