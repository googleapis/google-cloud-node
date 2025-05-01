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

import {Query} from './index';
import {RunQueryOptions, RunQueryResponse} from './query';
import {RequestCallback} from './request';
const AGGREGATE_QUERY = Symbol('AGGREGATE_QUERY');

/**
 * An AggregateQuery is a class that can be used to obtain results from an
 * aggregate query request.
 *
 * @see {@link https://cloud.google.com/datastore/docs/aggregation-queries| Aggregation queries Reference}
 *
 * @class
 */
class AggregateQuery {
  type = AGGREGATE_QUERY;
  aggregations: Array<AggregateField>;
  query: Query | undefined;

  /**
   * Build an AggregateQuery object.
   *
   * @param {Query} query A Query object
   */
  constructor(query: Query) {
    this.query = query;
    this.aggregations = [];
  }

  /**
   * Add a `count` aggregate query to the list of aggregations.
   *
   * @param {string} alias The label used in the results to describe this
   * aggregate field when a query is run.
   * @returns {AggregateQuery}
   */
  count(alias?: string): AggregateQuery {
    this.aggregations.push(AggregateField.count().alias(alias));
    return this;
  }

  /**
   * Add a `sum` aggregate query to the list of aggregations.
   *
   * @param {string} property The property to use for the sum calculation.
   * @param {string} alias The label used in the results to describe this
   * aggregate field when a query is run.
   * @returns {AggregateQuery}
   */
  sum(property: string, alias?: string): AggregateQuery {
    this.aggregations.push(AggregateField.sum(property).alias(alias));
    return this;
  }

  /**
   * Add a `average` aggregate query to the list of aggregations.
   *
   * @param {string} property The property to use for the average calculation.
   * @param {string} alias The label used in the results to describe this
   * aggregate field when a query is run.
   * @returns {AggregateQuery}
   */
  average(property: string, alias?: string): AggregateQuery {
    this.aggregations.push(AggregateField.average(property).alias(alias));
    return this;
  }

  /**
   * Add a custom aggregation to the list of aggregations.
   *
   * @param {AggregateField} aggregation The aggregate field to perform the
   * aggregation query over.
   * @returns {AggregateQuery}
   */
  addAggregation(aggregation: AggregateField): AggregateQuery {
    this.aggregations.push(aggregation);
    return this;
  }

  /**
   * Add a list of custom aggregations to the list of aggregations.
   *
   * @param {AggregateField[]} aggregations The aggregate fields to perform the
   * aggregation query over.
   * @returns {AggregateQuery}
   */
  addAggregations(aggregations: AggregateField[]): AggregateQuery {
    for (const aggregation of aggregations) {
      this.aggregations.push(aggregation);
    }
    return this;
  }

  /**
   * Run the aggregation query and return the results.
   *
   * @param {RunQueryOptions | RequestCallback} [optionsOrCallback]
   * @param {function} cb The callback function.
   * @returns {void | Promise<RunQueryResponse>}
   */
  run(
    optionsOrCallback?: RunQueryOptions | RequestCallback,
    cb?: RequestCallback,
  ): void | Promise<RunQueryResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const scope = this.query!.scope;
    const runAggregationQuery = scope!.runAggregationQuery.bind(scope);
    return runAggregationQuery(this, options, callback);
  }

  /**
   * Get the proto for the list of aggregations.
   *
   */
  toProto(): any {
    return this.aggregations.map(aggregation => aggregation.toProto());
  }
}

/**
 * An AggregateField is a class that contains data that defines an aggregation.
 *
 */
abstract class AggregateField {
  alias_?: string;

  /**
   * Gets a copy of the Count aggregate field.
   *
   * @returns {Count}
   */
  static count(): Count {
    return new Count();
  }

  /**
   * Gets a copy of the Sum aggregate field.
   *
   * @param {string} property The property to use for the average calculation.
   * @returns {Sum}
   */
  static sum(property: string): Sum {
    return new Sum(property);
  }

  /**
   * Gets a copy of the Average aggregate field.
   *
   * @param {string} property The property to use for the average calculation.
   * @returns {Average}
   */
  static average(property: string): Average {
    return new Average(property);
  }

  /**
   * Sets the alias on the aggregate field that should be used.
   *
   * @param {string} alias The label used in the results to describe this
   * aggregate field when a query is run.
   * @returns {AggregateField}
   */
  alias(alias?: string): AggregateField {
    if (alias) {
      this.alias_ = alias;
    }
    return this;
  }

  /**
   * Gets the proto for the aggregate field.
   *
   */
  abstract toProto(): any;
}

/**
 * A Count is a class that contains data that defines a Count aggregation.
 *
 */
class Count extends AggregateField {
  /**
   * Gets the proto for the count aggregate field.
   *
   */
  toProto(): any {
    const count = Object.assign({});
    return Object.assign({count}, this.alias_ ? {alias: this.alias_} : null);
  }
}

/**
 * A PropertyAggregateField is a class that contains data that defines any
 * aggregation that is performed on a property.
 *
 */
abstract class PropertyAggregateField extends AggregateField {
  abstract operator: string;

  /**
   * Build a PropertyAggregateField object.
   *
   * @param {string} property The property to aggregate over.
   */
  constructor(public property_: string) {
    super();
  }

  /**
   * Gets the proto for the property aggregate field.
   *
   */
  toProto(): any {
    const aggregation = this.property_
      ? {property: {name: this.property_}}
      : {};
    return Object.assign(
      {operator: this.operator},
      this.alias_ ? {alias: this.alias_} : null,
      {[this.operator]: aggregation},
    );
  }
}

/**
 * A Sum is a class that contains data that defines a Sum aggregation.
 *
 */
class Sum extends PropertyAggregateField {
  operator = 'sum';
}

/**
 * An Average is a class that contains data that defines an Average aggregation.
 *
 */
class Average extends PropertyAggregateField {
  operator = 'avg';
}

export {AggregateField, AggregateQuery, AGGREGATE_QUERY};
