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

/**
 * Resolves a pg-compatible config or connection string into a Spanner-compatible DSN.
 */
export function resolveDsn(config?: string | ClientConfig): string {
  if (
    !config ||
    (typeof config === 'object' && !config.database && !config.connectionString)
  ) {
    const pgConnStr = process.env.DATABASE_URL || process.env.PGCONNECTSTRING;
    if (pgConnStr) {
      return parseConnectionString(pgConnStr);
    }
    if (!config) {
      throw new Error('No connection configuration specified');
    }
  }

  if (typeof config === 'string') {
    return parseConnectionString(config);
  }

  if (config.connectionString) {
    return parseConnectionString(config.connectionString);
  }

  // Build DSN from parts
  let dbPath = '';
  if (config.database) {
    if (
      config.database.startsWith('postgresql://') ||
      config.database.startsWith('postgres://')
    ) {
      dbPath = parseConnectionString(config.database);
    } else if (config.database.includes('projects/')) {
      dbPath = config.database;
    } else if (config.project && config.instance) {
      dbPath = `projects/${config.project}/instances/${config.instance}/databases/${config.database}`;
    } else {
      throw new Error(
        'Database must be a full resource path or project/instance must be specified',
      );
    }
  } else {
    throw new Error('Database name not specified');
  }

  if (dbPath.startsWith('/')) {
    dbPath = dbPath.substring(1);
  }

  const queryParams: string[] = [];

  if (config.host) {
    const port = config.port || 5432;
    if (!(config.host === 'localhost' && port === 5432)) {
      queryParams.push(`api_endpoint=${config.host}:${port}`);
    }
  }

  if (process.env.SPANNER_EMULATOR_HOST) {
    queryParams.push('auto_config_emulator=true');
  }

  if (queryParams.length > 0) {
    return `${dbPath}?${queryParams.join('&')}`;
  }

  return dbPath;
}

function parseConnectionString(connStr: string): string {
  if (
    connStr.startsWith('postgresql://') ||
    connStr.startsWith('postgres://')
  ) {
    const url = new URL(connStr);
    let dbPath = url.pathname;
    if (dbPath.startsWith('/')) {
      dbPath = dbPath.substring(1);
    }

    if (!dbPath.includes('projects/')) {
      throw new Error(
        `Invalid Spanner database path in connection URL: ${url.pathname}. Expected format: projects/PROJECT/instances/INSTANCE/databases/DATABASE`,
      );
    }

    const queryParams: string[] = [];
    url.searchParams.forEach((value, key) => {
      queryParams.push(`${key}=${value}`);
    });

    if (
      process.env.SPANNER_EMULATOR_HOST &&
      !url.searchParams.has('auto_config_emulator')
    ) {
      queryParams.push('auto_config_emulator=true');
    }

    if (queryParams.length > 0) {
      return `${dbPath}?${queryParams.join('&')}`;
    }
    return dbPath;
  }

  return connStr;
}
