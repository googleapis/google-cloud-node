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

import * as firestore from '@google-cloud/firestore';
import {invalidArgumentMessage, validateEnumValue} from '../validate';
import {validateUserInput} from '../serializer';
import {DocumentReference} from './document-reference';
import {comparisonOperators, directionOperators} from './constants';

/**
 * Validates the input string as a field order direction.
 *
 * @private
 * @internal
 * @param arg The argument name or argument index (for varargs methods).
 * @param op Order direction to validate.
 * @throws when the direction is invalid
 * @returns a validated input value, which may be different from the provided
 * value.
 */
export function validateQueryOrder(
  arg: string,
  op: unknown,
): firestore.OrderByDirection | undefined {
  // For backwards compatibility, we support both lower and uppercase values.
  op = typeof op === 'string' ? op.toLowerCase() : op;
  validateEnumValue(arg, op, Object.keys(directionOperators), {optional: true});
  return op as firestore.OrderByDirection | undefined;
}

/**
 * Validates the input string as a field comparison operator.
 *
 * @private
 * @internal
 * @param arg The argument name or argument index (for varargs methods).
 * @param op Field comparison operator to validate.
 * @param fieldValue Value that is used in the filter.
 * @throws when the comparison operation is invalid
 * @returns a validated input value, which may be different from the provided
 * value.
 */
export function validateQueryOperator(
  arg: string | number,
  op: unknown,
  fieldValue: unknown,
): firestore.WhereFilterOp {
  // For backwards compatibility, we support both `=` and `==` for "equals".
  if (op === '=') {
    op = '==';
  }

  validateEnumValue(arg, op, Object.keys(comparisonOperators));

  if (
    typeof fieldValue === 'number' &&
    isNaN(fieldValue) &&
    op !== '==' &&
    op !== '!='
  ) {
    throw new Error(
      "Invalid query. You can only perform '==' and '!=' comparisons on NaN.",
    );
  }

  if (fieldValue === null && op !== '==' && op !== '!=') {
    throw new Error(
      "Invalid query. You can only perform '==' and '!=' comparisons on Null.",
    );
  }

  return op as firestore.WhereFilterOp;
}

/**
 * Validates that 'value' is a DocumentReference.
 *
 * @private
 * @internal
 * @param arg The argument name or argument index (for varargs methods).
 * @param value The argument to validate.
 * @returns the DocumentReference if valid
 */
export function validateDocumentReference<
  AppModelType,
  DbModelType extends firestore.DocumentData,
>(
  arg: string | number,
  value: firestore.DocumentReference<AppModelType, DbModelType>,
): DocumentReference<AppModelType, DbModelType> {
  if (!(value instanceof DocumentReference)) {
    throw new Error(invalidArgumentMessage(arg, 'DocumentReference'));
  }
  return value;
}

/**
 * Validates that 'value' can be used as a query value.
 *
 * @private
 * @internal
 * @param arg The argument name or argument index (for varargs methods).
 * @param value The argument to validate.
 * @param allowUndefined Whether to allow nested properties that are `undefined`.
 */
export function validateQueryValue(
  arg: string | number,
  value: unknown,
  allowUndefined: boolean,
): void {
  validateUserInput(arg, value, 'query constraint', {
    allowDeletes: 'none',
    allowTransforms: false,
    allowUndefined,
  });
}

/**
 * Returns the first non-undefined value or `undefined` if no such value exists.
 * @private
 * @internal
 */
export function coalesce<T>(...values: Array<T | undefined>): T | undefined {
  return values.find(value => value !== undefined);
}
