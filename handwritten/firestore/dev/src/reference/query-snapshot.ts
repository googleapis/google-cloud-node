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
import {QueryDocumentSnapshot} from '../document';
import {DocumentChange} from '../document-change';
import {Timestamp} from '../timestamp';
import {validateFunction} from '../validate';
import {isArrayEqual} from '../util';
import {Query} from './query';

/**
 * A QuerySnapshot contains zero or more
 * [QueryDocumentSnapshot]{@link QueryDocumentSnapshot} objects
 * representing the results of a query. The documents can be accessed as an
 * array via the [documents]{@link QuerySnapshot#documents} property
 * or enumerated using the [forEach]{@link QuerySnapshot#forEach}
 * method. The number of documents can be determined via the
 * [empty]{@link QuerySnapshot#empty} and
 * [size]{@link QuerySnapshot#size} properties.
 *
 * @class QuerySnapshot
 */
export class QuerySnapshot<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> implements firestore.QuerySnapshot<AppModelType, DbModelType>
{
  private _materializedDocs: Array<
    QueryDocumentSnapshot<AppModelType, DbModelType>
  > | null = null;
  private _materializedChanges: Array<
    DocumentChange<AppModelType, DbModelType>
  > | null = null;
  private _docs:
    | (() => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>)
    | null = null;
  private _changes:
    | (() => Array<DocumentChange<AppModelType, DbModelType>>)
    | null = null;

  /**
   * @private
   *
   * @param _query The originating query.
   * @param _readTime The time when this query snapshot was obtained.
   * @param _size The number of documents in the result set.
   * @param docs A callback returning a sorted array of documents matching
   * this query
   * @param changes A callback returning a sorted array of document change
   * events for this snapshot.
   */
  constructor(
    private readonly _query: Query<AppModelType, DbModelType>,
    private readonly _readTime: Timestamp,
    private readonly _size: number,
    docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>,
    changes: () => Array<DocumentChange<AppModelType, DbModelType>>,
  ) {
    this._docs = docs;
    this._changes = changes;
  }

  /**
   * The query on which you called get() or onSnapshot() in order to get this
   * QuerySnapshot.
   *
   * @type {Query}
   * @name QuerySnapshot#query
   * @readonly
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.limit(10).get().then(querySnapshot => {
   *   console.log(`Returned first batch of results`);
   *   let query = querySnapshot.query;
   *   return query.offset(10).get();
   * }).then(() => {
   *   console.log(`Returned second batch of results`);
   * });
   * ```
   */
  get query(): Query<AppModelType, DbModelType> {
    return this._query;
  }

  /**
   * An array of all the documents in this QuerySnapshot.
   *
   * @type {Array.<QueryDocumentSnapshot>}
   * @name QuerySnapshot#docs
   * @readonly
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.get().then(querySnapshot => {
   *   let docs = querySnapshot.docs;
   *   for (let doc of docs) {
   *     console.log(`Document found at path: ${doc.ref.path}`);
   *   }
   * });
   * ```
   */
  get docs(): Array<QueryDocumentSnapshot<AppModelType, DbModelType>> {
    if (this._materializedDocs) {
      return this._materializedDocs!;
    }
    this._materializedDocs = this._docs!();
    this._docs = null;
    return this._materializedDocs!;
  }

  /**
   * True if there are no documents in the QuerySnapshot.
   *
   * @type {boolean}
   * @name QuerySnapshot#empty
   * @readonly
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.get().then(querySnapshot => {
   *   if (querySnapshot.empty) {
   *     console.log('No documents found.');
   *   }
   * });
   * ```
   */
  get empty(): boolean {
    return this._size === 0;
  }

  /**
   * The number of documents in the QuerySnapshot.
   *
   * @type {number}
   * @name QuerySnapshot#size
   * @readonly
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.get().then(querySnapshot => {
   *   console.log(`Found ${querySnapshot.size} documents.`);
   * });
   * ```
   */
  get size(): number {
    return this._size;
  }

  /**
   * The time this query snapshot was obtained.
   *
   * @type {Timestamp}
   * @name QuerySnapshot#readTime
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.get().then((querySnapshot) => {
   *   let readTime = querySnapshot.readTime;
   *   console.log(`Query results returned at '${readTime.toDate()}'`);
   * });
   * ```
   */
  get readTime(): Timestamp {
    return this._readTime;
  }

  /**
   * Returns an array of the documents changes since the last snapshot. If
   * this is the first snapshot, all documents will be in the list as added
   * changes.
   *
   * @returns {Array.<DocumentChange>}
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.onSnapshot(querySnapshot => {
   *   let changes = querySnapshot.docChanges();
   *   for (let change of changes) {
   *     console.log(`A document was ${change.type}.`);
   *   }
   * });
   * ```
   */
  docChanges(): Array<DocumentChange<AppModelType, DbModelType>> {
    if (this._materializedChanges) {
      return this._materializedChanges!;
    }
    this._materializedChanges = this._changes!();
    this._changes = null;
    return this._materializedChanges!;
  }

  /**
   * Enumerates all of the documents in the QuerySnapshot. This is a convenience
   * method for running the same callback on each {@link QueryDocumentSnapshot}
   * that is returned.
   *
   * @param {function} callback A callback to be called with a
   * [QueryDocumentSnapshot]{@link QueryDocumentSnapshot} for each document in
   * the snapshot.
   * @param {*=} thisArg The `this` binding for the callback..
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Document found at path: ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  forEach(
    callback: (
      result: firestore.QueryDocumentSnapshot<AppModelType, DbModelType>,
    ) => void,
    thisArg?: unknown,
  ): void {
    validateFunction('callback', callback);

    for (const doc of this.docs) {
      callback.call(thisArg, doc);
    }
  }

  /**
   * Returns true if the document data in this `QuerySnapshot` is equal to the
   * provided value.
   *
   * @param {*} other The value to compare against.
   * @returns {boolean} true if this `QuerySnapshot` is equal to the provided
   * value.
   */
  isEqual(other: firestore.QuerySnapshot<AppModelType, DbModelType>): boolean {
    // Since the read time is different on every query read, we explicitly
    // ignore all metadata in this comparison.

    if (this === other) {
      return true;
    }

    if (!(other instanceof QuerySnapshot)) {
      return false;
    }

    if (this._size !== other._size) {
      return false;
    }

    if (!this._query.isEqual(other._query)) {
      return false;
    }

    if (this._materializedDocs && !this._materializedChanges) {
      // If we have only materialized the documents, we compare them first.
      return (
        isArrayEqual(this.docs, other.docs) &&
        isArrayEqual(this.docChanges(), other.docChanges())
      );
    }

    // Otherwise, we compare the changes first as we expect there to be fewer.
    return (
      isArrayEqual(this.docChanges(), other.docChanges()) &&
      isArrayEqual(this.docs, other.docs)
    );
  }
}
