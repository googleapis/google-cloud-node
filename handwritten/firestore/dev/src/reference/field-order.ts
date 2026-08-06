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

import {FieldPath} from '../path';

/**
 * A Query order-by field.
 *
 * @private
 * @internal
 * @class
 */
export class FieldOrder {
  readonly direction: api.StructuredQuery.Direction;

  /**
   * @param field The name of a document field (member) on which to order query
   * results.
   * @param _direction One of 'ASCENDING' (default) or 'DESCENDING' to
   * set the ordering direction to ascending or descending, respectively.
   */
  constructor(
    readonly field: FieldPath,
    _direction:
      | api.StructuredQuery.Direction
      | keyof typeof api.StructuredQuery.Direction = api.StructuredQuery.Direction.ASCENDING,
  ) {
    this.direction =
      typeof _direction === 'string'
        ? api.StructuredQuery.Direction[_direction]
        : _direction;
  }

  /**
   * Generates the proto representation for this field order.
   * @private
   * @internal
   */
  toProto(): api.StructuredQuery.IOrder {
    return {
      field: {
        fieldPath: this.field.formattedName,
      },
      direction: this.direction,
    };
  }
}
