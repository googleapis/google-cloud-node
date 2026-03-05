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

import {FilterInternal} from './filter-internal';
import {FieldFilterInternal} from './field-filter-internal';

export class CompositeFilterInternal extends FilterInternal {
  constructor(
    private filters: FilterInternal[],
    private operator: api.StructuredQuery.CompositeFilter.Operator,
  ) {
    super();
  }

  // Memoized list of all field filters that can be found by traversing the tree of filters
  // contained in this composite filter.
  private memoizedFlattenedFilters: FieldFilterInternal[] | null = null;

  public getFilters(): FilterInternal[] {
    return this.filters;
  }

  public isConjunction(): boolean {
    return this.operator === 'AND';
  }

  /**
   * @private
   * @internal
   */
  public _getOperator(): api.StructuredQuery.CompositeFilter.Operator {
    return this.operator;
  }

  public getFlattenedFilters(): FieldFilterInternal[] {
    if (this.memoizedFlattenedFilters !== null) {
      return this.memoizedFlattenedFilters;
    }

    this.memoizedFlattenedFilters = this.filters.reduce(
      (allFilters: FieldFilterInternal[], subfilter: FilterInternal) =>
        allFilters.concat(subfilter.getFlattenedFilters()),
      [],
    );

    return this.memoizedFlattenedFilters;
  }

  public toProto(): api.StructuredQuery.IFilter {
    if (this.filters.length === 1) {
      return this.filters[0].toProto();
    }

    const proto: api.StructuredQuery.IFilter = {
      compositeFilter: {
        op: this.operator,
        filters: this.filters.map(filter => filter.toProto()),
      },
    };

    return proto;
  }

  isEqual(other: FilterInternal): boolean {
    if (other instanceof CompositeFilterInternal) {
      const otherFilters = other.getFilters();
      return (
        this.operator === other.operator &&
        this.getFilters().length === other.getFilters().length &&
        this.getFilters().every((filter, index) =>
          filter.isEqual(otherFilters[index]),
        )
      );
    } else {
      return false;
    }
  }
}
