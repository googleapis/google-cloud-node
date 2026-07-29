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

/**
 * Configuration options for establishing a connection to Google Cloud Spanner.
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
  /** Spanner Database ID or full database resource path. */
  database?: string;
  /** Custom type parsers registry. */
  types?: unknown;
}

/**
 * Resolves a Spanner DSN connection string from a connection string, configuration object, or environment variables.
 *
 * Priority order:
 * 1. String connection DSN or postgresql:// URL passed directly.
 * 2. `config.connectionString` or explicit `config.database` resource path (`projects/...`).
 * 3. `config` object parts (`project`, `instance`, `database`, `host`, `port`). Explicit `config.database` overrides environment variables.
 * 4. Environment variable fallbacks (`DATABASE_URL`, `PGCONNECTSTRING`, `SPANNER_PROJECT_ID`, `SPANNER_INSTANCE_ID`, `PGDATABASE`).
 * 5. Preserves existing DSN query parameters and appends `auto_config_emulator=true` if `SPANNER_EMULATOR_HOST` is set.
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

  if (cfg?.database && cfg.database.startsWith('projects/')) {
    return cfg.database;
  }

  const baseDsn = process.env.DATABASE_URL || process.env.PGCONNECTSTRING || '';
  let project =
    cfg?.project ||
    process.env.SPANNER_PROJECT_ID ||
    process.env.GOOGLE_CLOUD_PROJECT;
  let instance = cfg?.instance || process.env.SPANNER_INSTANCE_ID;
  let database = cfg?.database || process.env.PGDATABASE;

  if (database && database.startsWith('projects/')) {
    return database;
  }

  const projectsIndex = baseDsn ? baseDsn.indexOf('projects/') : -1;
  if (baseDsn && projectsIndex !== -1) {
    const resourcePath = baseDsn.substring(projectsIndex);
    const parts = resourcePath.split('/');
    if (parts.length >= 6) {
      if (!project) project = parts[1];
      if (!instance) instance = parts[3];
      if (
        !cfg?.database &&
        (!database ||
          database === 'postgres' ||
          (process.env.PGDATABASE && database === process.env.PGDATABASE))
      ) {
        database = parts[5].split('?')[0];
      }
    }
  }

  let resolvedDsn = '';
  const hasCfgOverrides = !!(
    cfg &&
    (cfg.project || cfg.instance || cfg.database || cfg.host)
  );

  const isFullDsn =
    baseDsn &&
    (baseDsn.startsWith('projects/') ||
      baseDsn.startsWith('postgresql://') ||
      baseDsn.startsWith('postgres://'));

  if (isFullDsn && !hasCfgOverrides) {
    resolvedDsn = baseDsn;
  } else if (project && instance && database) {
    resolvedDsn = `projects/${project}/instances/${instance}/databases/${database}`;
    const params: string[] = [];
    if (cfg?.host) {
      const endpoint = cfg.port ? `${cfg.host}:${cfg.port}` : cfg.host;
      params.push(`api_endpoint=${endpoint}`);
    }
    if (baseDsn && baseDsn.includes('?')) {
      const queryParams = baseDsn.substring(baseDsn.indexOf('?') + 1);
      if (queryParams) {
        params.push(queryParams);
      }
    }
    if (params.length > 0) {
      resolvedDsn += '?' + params.join(';');
    }
  } else {
    resolvedDsn = baseDsn;
  }

  // Unified emulator host parameter injection
  if (
    resolvedDsn &&
    process.env.SPANNER_EMULATOR_HOST &&
    !resolvedDsn.includes('auto_config_emulator=')
  ) {
    const isPostgresUrl =
      resolvedDsn.startsWith('postgresql://') ||
      resolvedDsn.startsWith('postgres://');
    const separator = isPostgresUrl ? '&' : ';';
    resolvedDsn = resolvedDsn.includes('?')
      ? `${resolvedDsn}${separator}auto_config_emulator=true`
      : `${resolvedDsn}?auto_config_emulator=true`;
  }

  return resolvedDsn;
}
