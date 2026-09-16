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
  if (typeof config === 'string') {
    return config;
  }
  const cfg = typeof config === 'object' ? (config as ClientConfig) : undefined;
  if (cfg?.connectionString) {
    return cfg.connectionString;
  }

  if (cfg?.database && cfg.database.startsWith('projects/')) {
    return cfg.database;
  }

  const baseDsn = process.env.DATABASE_URL || process.env.PGCONNECTSTRING || '';
  let project = cfg?.project || process.env.SPANNER_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT;
  let instance = cfg?.instance || process.env.SPANNER_INSTANCE_ID;
  let database = cfg?.database || process.env.PGDATABASE;

  if (database && database.startsWith('projects/')) {
    return database;
  }

  if (baseDsn && baseDsn.startsWith('projects/')) {
    const parts = baseDsn.split('/');
    if (parts.length >= 6) {
      if (!project) project = parts[1];
      if (!instance) instance = parts[3];
      if (!database || database === 'postgres' || (process.env.PGDATABASE && database === process.env.PGDATABASE)) {
        database = parts[5].split('?')[0];
      }
    }
  }

  let resolvedDsn = '';
  if (project && instance && database) {
    resolvedDsn = `projects/${project}/instances/${instance}/databases/${database}`;
    if (cfg?.host) {
      const endpoint = cfg.port ? `${cfg.host}:${cfg.port}` : cfg.host;
      resolvedDsn += `?api_endpoint=${endpoint}`;
    }
  } else {
    resolvedDsn = baseDsn;
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
