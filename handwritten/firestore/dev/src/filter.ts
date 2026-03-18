/*!
 * Copyright 2023 Google LLC. All Rights Reserved.
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

/**
 * A `Filter` represents a restriction on one or more field values and can
 * be used to refine the results of a {@link Query}.
 * `Filters`s are created by invoking {@link Filter#where}, {@link Filter#or},
 * or {@link Filter#and} and can then be passed to {@link Query#where}
 * to create a new {@link Query} instance that also contains this `Filter`.
 */
export abstract class Filter {
  /**
   * Creates and returns a new [Filter]{@link Filter}, which can be
   * applied to [Query.where()]{@link Query#where}, [Filter.or()]{@link Filter#or},
   * or [Filter.and()]{@link Filter#and}. When applied to a [Query]{@link Query}
   * it requires that documents must contain the specified field and that its value should
   * satisfy the relation constraint provided.
   *
   * @param {string|FieldPath} fieldPath The name of a property value to compare.
   * @param {string} opStr A comparison operation in the form of a string.
   * Acceptable operator strings are "<", "<=", "==", "!=", ">=", ">", "array-contains",
   * "in", "not-in", and "array-contains-any".
   * @param {*} value The value to which to compare the field for inclusion in
   * a query.
   * @returns {Filter} The created Filter.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   *
   * collectionRef.where(Filter.where('foo', '==', 'bar')).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  public static where(
    fieldPath: string | firestore.FieldPath,
    opStr: firestore.WhereFilterOp,
    value: unknown,
  ): Filter {
    return new UnaryFilter(fieldPath, opStr, value);
  }

  /**
   * Creates and returns a new [Filter]{@link Filter} that is a
   * disjunction of the given {@link Filter}s. A disjunction filter includes
   * a document if it satisfies any of the given {@link Filter}s.
   *
   * The returned Filter can be applied to [Query.where()]{@link Query#where},
   * [Filter.or()]{@link Filter#or}, or [Filter.and()]{@link Filter#and}. When
   * applied to a [Query]{@link Query} it requires that documents must satisfy
   * one of the provided {@link Filter}s.
   *
   * @param {...Filter} filters  Optional. The {@link Filter}s
   * for OR operation. These must be created with calls to {@link Filter#where},
   * {@link Filter#or}, or {@link Filter#and}.
   * @returns {Filter} The created {@link Filter}.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   *
   * // doc.foo == 'bar' || doc.baz > 0
   * let orFilter = Filter.or(Filter.where('foo', '==', 'bar'), Filter.where('baz', '>', 0));
   *
   * collectionRef.where(orFilter).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  public static or(...filters: Filter[]): Filter {
    return new CompositeFilter(filters, 'OR');
  }

  /**
   * Creates and returns a new [Filter]{@link Filter} that is a
   * conjunction of the given {@link Filter}s. A conjunction filter includes
   * a document if it satisfies all of the given {@link Filter}s.
   *
   * The returned Filter can be applied to [Query.where()]{@link Query#where},
   * [Filter.or()]{@link Filter#or}, or [Filter.and()]{@link Filter#and}. When
   * applied to a [Query]{@link Query} it requires that documents must satisfy
   * one of the provided {@link Filter}s.
   *
   * @param {...Filter} filters  Optional. The {@link Filter}s
   * for AND operation. These must be created with calls to {@link Filter#where},
   * {@link Filter#or}, or {@link Filter#and}.
   * @returns {Filter} The created {@link Filter}.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   *
   * // doc.foo == 'bar' && doc.baz > 0
   * let andFilter = Filter.and(Filter.where('foo', '==', 'bar'), Filter.where('baz', '>', 0));
   *
   * collectionRef.where(andFilter).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  public static and(...filters: Filter[]): Filter {
    return new CompositeFilter(filters, 'AND');
  }
}

/**
 * A `UnaryFilter` represents a restriction on one field value and can
 * be used to refine the results of a {@link Query}.
 * `UnaryFilter`s are created by invoking {@link Filter#where} and can then
 * be passed to {@link Query#where} to create a new {@link Query} instance
 * that also contains this `UnaryFilter`.
 *
 * @private
 * @internal
 */
export class UnaryFilter extends Filter {
  /**
   @private
   @internal
   */
  public constructor(
    private field: string | firestore.FieldPath,
    private operator: firestore.WhereFilterOp,
    private value: unknown,
  ) {
    super();
  }

  /**
   @private
   @internal
   */
  public _getField(): string | firestore.FieldPath {
    return this.field;
  }

  /**
   @private
   @internal
   */
  public _getOperator(): firestore.WhereFilterOp {
    return this.operator;
  }

  /**
   @private
   @internal
   */
  public _getValue(): unknown {
    return this.value;
  }
}

/**
 * A `CompositeFilter` is used to narrow the set of documents returned
 * by a Firestore query by performing the logical OR or AND of multiple
 * {@link Filters}s. `CompositeFilters`s are created by invoking {@link Filter#or}
 * or {@link Filter#and} and can then be passed to {@link Query#where}
 * to create a new query instance that also contains the `CompositeFilter`.
 *
 * @private
 * @internal
 */
export class CompositeFilter extends Filter {
  /**
   @private
   @internal
   */
  public constructor(
    private filters: Filter[],
    private operator: CompositeOperator,
  ) {
    super();
  }

  /**
   @private
   @internal
   */
  public _getFilters(): Filter[] {
    return this.filters;
  }

  /**
   @private
   @internal
   */
  public _getOperator(): CompositeOperator {
    return this.operator;
  }
}

/**
 * Composition operator of a `CompositeFilter`. This operator specifies the
 * behavior of the `CompositeFilter`.
 *
 * @private
 * @internal
 */
export type CompositeOperator = 'AND' | 'OR';
