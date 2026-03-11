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

import * as deepEqual from 'fast-deep-equal';

import * as protos from '../../protos/firestore_v1_proto_api';
import api = protos.google.firestore.v1;
import {FilterInternal} from './filter-internal';
import {Serializer} from '../serializer';
import {FieldPath} from '../path';

/**
 * A field constraint for a Query where clause.
 *
 * @private
 * @internal
 * @class
 */
export class FieldFilterInternal extends FilterInternal {
  public getFlattenedFilters(): FieldFilterInternal[] {
    return [this];
  }

  public getFilters(): FilterInternal[] {
    return [this];
  }

  /**
   * @param serializer The Firestore serializer
   * @param field The path of the property value to compare.
   * @param op A comparison operation.
   * @param value The value to which to compare the field for inclusion in a
   * query.
   */
  constructor(
    private readonly serializer: Serializer,
    readonly field: FieldPath,
    readonly op: api.StructuredQuery.FieldFilter.Operator,
    readonly value: unknown,
  ) {
    super();
  }

  /**
   * Returns whether this FieldFilter uses an equals comparison.
   *
   * @private
   * @internal
   */
  isInequalityFilter(): boolean {
    switch (this.op) {
      case 'GREATER_THAN':
      case 'GREATER_THAN_OR_EQUAL':
      case 'LESS_THAN':
      case 'LESS_THAN_OR_EQUAL':
      case 'NOT_EQUAL':
      case 'NOT_IN':
        return true;
      default:
        return false;
    }
  }

  /**
   * @private
   * @internal
   */
  isNanChecking(): boolean {
    return typeof this.value === 'number' && isNaN(this.value);
  }

  /**
   * @private
   * @internal
   */
  nanOp(): 'IS_NAN' | 'IS_NOT_NAN' {
    return this.op === 'EQUAL' ? 'IS_NAN' : 'IS_NOT_NAN';
  }

  /**
   * @private
   * @internal
   */
  isNullChecking(): boolean {
    return this.value === null;
  }

  /**
   * @private
   * @internal
   */
  nullOp(): 'IS_NULL' | 'IS_NOT_NULL' {
    return this.op === 'EQUAL' ? 'IS_NULL' : 'IS_NOT_NULL';
  }

  /**
   * Generates the proto representation for this field filter.
   *
   * @private
   * @internal
   */
  toProto(): api.StructuredQuery.IFilter {
    if (this.isNanChecking()) {
      return {
        unaryFilter: {
          field: {
            fieldPath: this.field.formattedName,
          },
          op: this.nanOp(),
        },
      };
    }

    if (this.isNullChecking()) {
      return {
        unaryFilter: {
          field: {
            fieldPath: this.field.formattedName,
          },
          op: this.nullOp(),
        },
      };
    }

    return {
      fieldFilter: {
        field: {
          fieldPath: this.field.formattedName,
        },
        op: this.op,
        value: this.serializer.encodeValue(this.value),
      },
    };
  }

  isEqual(other: FilterInternal): boolean {
    return (
      other instanceof FieldFilterInternal &&
      this.field.isEqual(other.field) &&
      this.op === other.op &&
      deepEqual(this.value, other.value)
    );
  }
}
