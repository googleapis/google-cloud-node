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

import type {Client} from './client.js';
import type {ITypeOverrides} from './types.js';

/**
 * Configuration options for establishing a connection to Google Spanner.
 */
export interface ClientConfig {
  /** Connection DSN string or postgresql:// URL. */
  connectionString?: string;
  /** Custom host name or endpoint IP. */
  host?: string;
  /** Port number. */
  port?: number;
  /** GCP Project ID. */
  project?: string;
  /** Spanner Instance ID. */
  instance?: string;
  /** Spanner Database ID. */
  database?: string;
  /** Custom type parsers registry. */
  types?: ITypeOverrides;
}

/**
 * Configuration options for establishing a pooled connection manager (`Pool`).
 */
export interface PoolConfig extends ClientConfig {
  /** Maximum number of clients in the pool. Defaults to 10. */
  max?: number;
  /** Minimum number of idle clients to maintain in the pool. Defaults to 0. */
  min?: number;
  /** How long a client can remain idle before being closed (in milliseconds). Defaults to 10000 (10s). */
  idleTimeoutMillis?: number;
  /**
   * Maximum time to wait for connection acquisition, handshake, and onConnect initialization (in milliseconds).
   * Defaults to 0 (no timeout / wait indefinitely).
   */
  connectionTimeoutMillis?: number;
  /** Allows Node.js event loop to exit when all clients in the pool are idle. Defaults to false. */
  allowExitOnIdle?: boolean;
  /** Maximum number of times a client can be checked out before being closed and replaced. Defaults to Infinity. */
  maxUses?: number;
  /** Maximum lifespan of a client connection in seconds. Defaults to 0 (disabled). */
  maxLifetimeSeconds?: number;
  /**
   * Async initialization callback executed once when a new client is connected, before it is made available to the pool.
   * Use `onConnect` to run async setup commands (e.g. session configuration). Unlike the `pool.on('connect')` event listener,
   * `onConnect` is awaited before the connection is placed in the pool or returned to callers.
   */
  onConnect?: (client: Client) => void | Promise<void>;
}

/**
 * Resolves a Spanner DSN connection string from a connection string, configuration object, or environment variables.
 *
 * Priority order:
 * 1. String connection DSN or postgresql:// URL passed directly.
 * 2. `config.connectionString`.
 * 3. `config` object parts (`project`, `instance`, `database`, `host`, `port`).
 * 4. GCP Project environment variable fallback (`GOOGLE_CLOUD_PROJECT`).
 *
 * Formats host prefix as `[host:port/]projects/project/instances/instance/databases/database` matching `go-sql-spanner`.
 *
 * @param config - String DSN URL or ClientConfig configuration object.
 * @returns Fully formatted Spanner DSN resource string or connection URL.
 */
export function resolveDsn(config?: string | ClientConfig): string {
  if (typeof config === 'string') {
    return config;
  }
  const cfg =
    typeof config === 'object' && config !== null && !Array.isArray(config)
      ? config
      : undefined;
  if (cfg?.connectionString) {
    return cfg.connectionString;
  }

  const project = cfg?.project || process.env.GOOGLE_CLOUD_PROJECT;
  const instance = cfg?.instance;
  const database = cfg?.database;

  if (project && instance && database) {
    const resourcePath = `projects/${project}/instances/${instance}/databases/${database}`;
    if (cfg?.host) {
      const endpoint = cfg.port ? `${cfg.host}:${cfg.port}` : cfg.host;
      return `${endpoint}/${resourcePath}`;
    }
    return resourcePath;
  }

  return '';
}
