/**
 * Copyright 2024 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as protos from '../../protos/firestore_v1_proto_api';
import api = protos.google.firestore.v1;

/**
 * The direction of a `Query.orderBy()` clause is specified as 'desc' or 'asc'
 * (descending or ascending).
 *
 * @private
 * @internal
 */
export const directionOperators: {[k: string]: api.StructuredQuery.Direction} =
  {
    asc: 'ASCENDING',
    desc: 'DESCENDING',
  };

/**
 * Filter conditions in a `Query.where()` clause are specified using the
 * strings '<', '<=', '==', '!=', '>=', '>', 'array-contains', 'in', 'not-in',
 * and 'array-contains-any'.
 *
 * @private
 * @internal
 */
export const comparisonOperators: {
  [k: string]: api.StructuredQuery.FieldFilter.Operator;
} = {
  '<': 'LESS_THAN',
  '<=': 'LESS_THAN_OR_EQUAL',
  '==': 'EQUAL',
  '!=': 'NOT_EQUAL',
  '>': 'GREATER_THAN',
  '>=': 'GREATER_THAN_OR_EQUAL',
  'array-contains': 'ARRAY_CONTAINS',
  in: 'IN',
  'not-in': 'NOT_IN',
  'array-contains-any': 'ARRAY_CONTAINS_ANY',
};

export const NOOP_MESSAGE = Symbol('a noop message');
