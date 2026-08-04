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

import * as protos from "@google-cloud/firestore-api/build/protos/protos";
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
    asc: api.StructuredQuery.Direction.ASCENDING,
    desc: api.StructuredQuery.Direction.DESCENDING,
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
  '<': api.StructuredQuery.FieldFilter.Operator.LESS_THAN,
  '<=': api.StructuredQuery.FieldFilter.Operator.LESS_THAN_OR_EQUAL,
  '==': api.StructuredQuery.FieldFilter.Operator.EQUAL,
  '!=': api.StructuredQuery.FieldFilter.Operator.NOT_EQUAL,
  '>': api.StructuredQuery.FieldFilter.Operator.GREATER_THAN,
  '>=': api.StructuredQuery.FieldFilter.Operator.GREATER_THAN_OR_EQUAL,
  'array-contains': api.StructuredQuery.FieldFilter.Operator.ARRAY_CONTAINS,
  in: api.StructuredQuery.FieldFilter.Operator.IN,
  'not-in': api.StructuredQuery.FieldFilter.Operator.NOT_IN,
  'array-contains-any': api.StructuredQuery.FieldFilter.Operator.ARRAY_CONTAINS_ANY,
};

export const NOOP_MESSAGE = Symbol('a noop message');
