// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Operator, Filter as IFilter} from './query';
import {entity} from './entity';

const OP_TO_OPERATOR = new Map([
  ['=', 'EQUAL'],
  ['>', 'GREATER_THAN'],
  ['>=', 'GREATER_THAN_OR_EQUAL'],
  ['<', 'LESS_THAN'],
  ['<=', 'LESS_THAN_OR_EQUAL'],
  ['HAS_ANCESTOR', 'HAS_ANCESTOR'],
  ['!=', 'NOT_EQUAL'],
  ['IN', 'IN'],
  ['NOT_IN', 'NOT_IN'],
]);

enum CompositeOperator {
  AND = 'AND',
  OR = 'OR',
}

export function and(filters: EntityFilter[]): CompositeFilter {
  return new CompositeFilter(filters, CompositeOperator.AND);
}

export function or(filters: EntityFilter[]): CompositeFilter {
  return new CompositeFilter(filters, CompositeOperator.OR);
}

/**
 * A Filter is a class that contains data for a filter that can be translated
 * into a proto when needed.
 *
 * @see {@link https://cloud.google.com/datastore/docs/concepts/queries#filters| Filters Reference}
 *
 */
export abstract class EntityFilter {
  /**
   * Gets the proto for the filter.
   *
   */
  // eslint-disable-next-line
  abstract toProto(): any;
}

/**
 * A PropertyFilter is a filter that gets applied to a query directly.
 *
 * @see {@link https://cloud.google.com/datastore/docs/concepts/queries#property_filters| Property filters Reference}
 *
 * @class
 */
export class PropertyFilter extends EntityFilter implements IFilter {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  val: any;
  op: Operator;

  /**
   * Build a Property Filter object.
   *
   * @param {string} Property
   * @param {Operator} operator
   * @param {any} val
   */
  constructor(property: string, operator: Operator, val: any) {
    super();
    this.name = property;
    this.op = operator;
    this.val = val;
  }

  private encodedValue(): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = {};
    if (this.name === '__key__') {
      value.keyValue = entity.keyToKeyProto(this.val);
    } else {
      value = entity.encodeValue(this.val, this.name);
    }
    return value;
  }

  /**
   * Gets the proto for the filter.
   *
   */
  // eslint-disable-next-line
  toProto(): any {
    const value = new PropertyFilter(
      this.name,
      this.op,
      this.val
    ).encodedValue();
    return {
      propertyFilter: {
        property: {
          name: this.name,
        },
        op: OP_TO_OPERATOR.get(this.op),
        value,
      },
    };
  }
}

/**
 * A CompositeFilter is a filter that combines other filters and applies that
 * combination to a query.
 *
 * @see {@link https://cloud.google.com/datastore/docs/concepts/queries#composite_filters| Composite filters Reference}
 *
 * @class
 */
class CompositeFilter extends EntityFilter {
  filters: EntityFilter[];
  op: string;

  /**
   * Build a Composite Filter object.
   *
   * @param {EntityFilter[]} filters
   */
  constructor(filters: EntityFilter[], op: CompositeOperator) {
    super();
    this.filters = filters;
    this.op = op;
  }

  /**
   * Gets the proto for the filter.
   *
   */
  // eslint-disable-next-line
  toProto(): any {
    return {
      compositeFilter: {
        filters: this.filters.map(filter => filter.toProto()),
        op: this.op,
      },
    };
  }
}

export function isFilter(filter: any): filter is EntityFilter {
  return (filter as EntityFilter).toProto !== undefined;
}
