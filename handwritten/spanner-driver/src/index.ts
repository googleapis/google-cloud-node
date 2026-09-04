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
import {ClientConfig, PoolConfig} from './lib/config.js';
import {DatabaseError} from './lib/errors.js';
import {BuiltinOids, TypeOverrides, types} from './lib/pg/types.js';
import {escapeIdentifier, escapeLiteral} from './lib/pg/utilities.js';
import {Pool} from './lib/pool.js';
import {Query} from './lib/query.js';
import {
  FieldDef,
  ITypeOverrides,
  QueryConfig,
  QueryResult,
  TypeParser,
} from './lib/types.js';

export {
  BuiltinOids,
  Client,
  ClientConfig,
  DatabaseError,
  FieldDef,
  ITypeOverrides,
  Pool,
  PoolConfig,
  Query,
  QueryConfig,
  QueryResult,
  TypeOverrides,
  TypeParser,
  escapeIdentifier,
  escapeLiteral,
  types,
};
