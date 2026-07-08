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

import {ClientConfig} from './client.js';

export function resolveDsn(config?: string | ClientConfig): string {
  let resolvedDsn = '';

  const connectionString =
    typeof config === 'string'
      ? config
      : config?.connectionString || process.env.DATABASE_URL || process.env.PGCONNECTSTRING;
  if (connectionString) {
    resolvedDsn = connectionString;
  } else {
    // Build DSN from parts
    const cfg = config as ClientConfig;
    const database = (cfg && cfg.database) || process.env.PGDATABASE;
    const project = (cfg && cfg.project) || process.env.SPANNER_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT;
    const instance = (cfg && cfg.instance) || process.env.SPANNER_INSTANCE_ID;

    if (!database || !project || !instance) {
      throw new Error(
        'No connection configuration specified. Either connectionString must be provided, or database, project, and instance must all be specified (or provided via env variables)'
      );
    }

    const dbPath = `projects/${project}/instances/${instance}/databases/${database}`;
    const queryParams: string[] = [];

    if (cfg && cfg.host) {
      const endpoint = cfg.port ? `${cfg.host}:${cfg.port}` : cfg.host;
      queryParams.push(`api_endpoint=${endpoint}`);
    }

    if (queryParams.length > 0) {
      resolvedDsn = `${dbPath}?${queryParams.join(';')}`;
    } else {
      resolvedDsn = dbPath;
    }
  }

  // Unified emulator host parameter injection
  if (
    process.env.SPANNER_EMULATOR_HOST &&
    !resolvedDsn.includes('auto_config_emulator=')
  ) {
    const isPostgresUrl = resolvedDsn.startsWith('postgresql://') || resolvedDsn.startsWith('postgres://');
    const separator = isPostgresUrl ? '&' : ';';
    resolvedDsn = resolvedDsn.includes('?')
      ? `${resolvedDsn}${separator}auto_config_emulator=true`
      : `${resolvedDsn}?auto_config_emulator=true`;
  }

  return resolvedDsn;
}
