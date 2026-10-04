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

import {Client} from './lib/client.js';
import {Pool} from './lib/pool.js';
import {Query} from './lib/query.js';
import {types} from './lib/types.js';
import {DatabaseError} from './lib/errors.js';

export {Client, Pool, Query, types, DatabaseError};
export const native = {Client, Pool};

export const defaults = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '',
  database: 'postgres',
};

export const escapeIdentifier = (str: string) => `"${str.replace(/"/g, '""')}"`;
export const escapeLiteral = (str: string) => `'${str.replace(/'/g, "''")}'`;
