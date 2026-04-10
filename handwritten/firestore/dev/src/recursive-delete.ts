/*!
 * Copyright 2021 Google LLC
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

import * as assert from 'assert';

import Firestore, {
  BulkWriter,
  CollectionReference,
  DocumentReference,
  FieldPath,
  Query,
  QueryDocumentSnapshot,
} from '.';
import {Deferred, wrapError} from './util';
import type {GoogleError} from 'google-gax';
import {BulkWriterError} from './bulk-writer';
import {QueryOptions} from './reference/query-options';
import {StatusCode} from './status-code';

/*!
 * Datastore allowed numeric IDs where Firestore only allows strings. Numeric
 * IDs are exposed to Firestore as __idNUM__, so this is the lowest possible
 * negative numeric value expressed in that format.
 *
 * This constant is used to specify startAt/endAt values when querying for all
 * descendants in a single collection.
 */
export const REFERENCE_NAME_MIN_ID = '__id-9223372036854775808__';

/*!
 * The query limit used for recursive deletes when fetching all descendants of
 * the specified reference to delete. This is done to prevent the query stream
 * from streaming documents faster than Firestore can delete.
 */
// Visible for testing.
export const RECURSIVE_DELETE_MAX_PENDING_OPS = 5000;

/*!
 * The number of pending BulkWriter operations at which RecursiveDelete
 * starts the next limit query to fetch descendants. By starting the query
 * while there are pending operations, Firestore can improve BulkWriter
 * throughput. This helps prevent BulkWriter from idling while Firestore
 * fetches the next query.
 */
export const RECURSIVE_DELETE_MIN_PENDING_OPS = 1000;

/**
 * Class used to store state required for running a recursive delete operation.
 * Each recursive delete call should use a new instance of the class.
 * @private
 * @internal
 */
export class RecursiveDelete {
  /**
   * The number of deletes that failed with a permanent error.
   * @private
   * @internal
   */
  private errorCount = 0;

  /**
   * The most recently thrown error. Used to populate the developer-facing
   * error message when the recursive delete operation completes.
   * @private
   * @internal
   */
  private lastError: GoogleError | BulkWriterError | undefined;

  /**
   * Whether there are still documents to delete that still need to be fetched.
   * @private
   * @internal
   */
  private documentsPending = true;

  /**
   * Whether run() has been called.
   * @private
   * @internal
   */
  private started = false;

  /**
   * Query limit to use when fetching all descendants.
   * @private
   * @internal
   */
  private readonly maxPendingOps: number;

  /**
   * The number of pending BulkWriter operations at which RecursiveDelete
   * starts the next limit query to fetch descendants.
   * @private
   * @internal
   */
  private readonly minPendingOps: number;

  /**
   * A deferred promise that resolves when the recursive delete operation
   * is completed.
   * @private
   * @internal
   */
  private readonly completionDeferred = new Deferred<void>();

  /**
   * Whether a query stream is currently in progress. Only one stream can be
   * run at a time.
   * @private
   * @internal
   */
  private streamInProgress = false;

  /**
   * The last document snapshot returned by the stream. Used to set the
   * startAfter() field in the subsequent stream.
   * @private
   * @internal
   */
  private lastDocumentSnap: QueryDocumentSnapshot | undefined;

  /**
   * The number of pending BulkWriter operations. Used to determine when the
   * next query can be run.
   * @private
   * @internal
   */
  private pendingOpsCount = 0;

  private errorStack = '';

  /**
   *
   * @param firestore The Firestore instance to use.
   * @param writer The BulkWriter instance to use for delete operations.
   * @param ref The document or collection reference to recursively delete.
   * @param maxLimit The query limit to use when fetching descendants
   * @param minLimit The number of pending BulkWriter operations at which
   * RecursiveDelete starts the next limit query to fetch descendants.
   */
  constructor(
    private readonly firestore: Firestore,
    private readonly writer: BulkWriter,
    private readonly ref:
      | firestore.CollectionReference<unknown>
      | firestore.DocumentReference<unknown>,
    private readonly maxLimit: number,
    private readonly minLimit: number,
  ) {
    this.maxPendingOps = maxLimit;
    this.minPendingOps = minLimit;
  }

  /**
   * Recursively deletes the reference provided in the class constructor.
   * Returns a promise that resolves when all descendants have been deleted, or
   * if an error occurs.
   */
  run(): Promise<void> {
    assert(!this.started, 'RecursiveDelete.run() should only be called once.');

    // Capture the error stack to preserve stack tracing across async calls.
    this.errorStack = Error().stack!;

    this.writer._verifyNotClosed();
    this.setupStream();
    return this.completionDeferred.promise;
  }

  /**
   * Creates a query stream and attaches event handlers to it.
   * @private
   * @internal
   */
  private setupStream(): void {
    const stream = this.getAllDescendants(
      this.ref instanceof CollectionReference
        ? (this.ref as CollectionReference<unknown>)
        : (this.ref as DocumentReference<unknown>),
    );
    this.streamInProgress = true;
    let streamedDocsCount = 0;
    stream
      .on('error', err => {
        err.code = StatusCode.UNAVAILABLE;
        err.stack = 'Failed to fetch children documents: ' + err.stack;
        this.lastError = err;
        this.onQueryEnd();
      })
      .on('data', (snap: QueryDocumentSnapshot) => {
        streamedDocsCount++;
        this.lastDocumentSnap = snap;
        this.deleteRef(snap.ref);
      })
      .on('end', () => {
        this.streamInProgress = false;
        // If there are fewer than the number of documents specified in the
        // limit() field, we know that the query is complete.
        if (streamedDocsCount < this.minPendingOps) {
          this.onQueryEnd();
        } else if (this.pendingOpsCount === 0) {
          this.setupStream();
        }
      });
  }

  /**
   * Retrieves all descendant documents nested under the provided reference.
   * @param ref The reference to fetch all descendants for.
   * @private
   * @internal
   * @returns {Stream<QueryDocumentSnapshot>} Stream of descendant documents.
   */
  private getAllDescendants(
    ref: CollectionReference<unknown> | DocumentReference<unknown>,
  ): NodeJS.ReadableStream {
    // The parent is the closest ancestor document to the location we're
    // deleting. If we are deleting a document, the parent is the path of that
    // document. If we are deleting a collection, the parent is the path of the
    // document containing that collection (or the database root, if it is a
    // root collection).
    let parentPath = ref._resourcePath;
    if (ref instanceof CollectionReference) {
      parentPath = parentPath.popLast();
    }
    const collectionId =
      ref instanceof CollectionReference
        ? ref.id
        : (ref as DocumentReference<unknown>).parent.id;

    let query: Query = new Query(
      this.firestore,
      QueryOptions.forKindlessAllDescendants(
        parentPath,
        collectionId,
        /* requireConsistency= */ false,
      ),
    );

    // Query for names only to fetch empty snapshots.
    query = query.select(FieldPath.documentId()).limit(this.maxPendingOps);

    if (ref instanceof CollectionReference) {
      // To find all descendants of a collection reference, we need to use a
      // composite filter that captures all documents that start with the
      // collection prefix. The MIN_KEY constant represents the minimum key in
      // this collection, and a null byte + the MIN_KEY represents the minimum
      // key is the next possible collection.
      const nullChar = String.fromCharCode(0);
      const startAt = collectionId + '/' + REFERENCE_NAME_MIN_ID;
      const endAt = collectionId + nullChar + '/' + REFERENCE_NAME_MIN_ID;
      query = query
        .where(FieldPath.documentId(), '>=', startAt)
        .where(FieldPath.documentId(), '<', endAt);
    }

    if (this.lastDocumentSnap) {
      query = query.startAfter(this.lastDocumentSnap);
    }

    return query.stream();
  }

  /**
   * Called when all descendants of the provided reference have been streamed
   * or if a permanent error occurs during the stream. Deletes the developer
   * provided reference and wraps any errors that occurred.
   * @private
   * @internal
   */
  private onQueryEnd(): void {
    this.documentsPending = false;
    if (this.ref instanceof DocumentReference) {
      this.writer.delete(this.ref).catch(err => this.incrementErrorCount(err));
    }
    void this.writer.flush().then(async () => {
      if (this.lastError === undefined) {
        this.completionDeferred.resolve();
      } else {
        let error = new (require('google-gax/fallback').GoogleError)(
          `${this.errorCount} ` +
            `${this.errorCount !== 1 ? 'deletes' : 'delete'} ` +
            'failed. The last delete failed with: ',
        );
        if (this.lastError.code !== undefined) {
          error.code = this.lastError.code as number;
        }
        error = wrapError(error, this.errorStack);

        // Wrap the BulkWriter error last to provide the full stack trace.
        this.completionDeferred.reject(
          this.lastError.stack
            ? wrapError(error, this.lastError.stack ?? '')
            : error,
        );
      }
    });
  }

  /**
   * Deletes the provided reference and starts the next stream if conditions
   * are met.
   * @private
   * @internal
   */
  private deleteRef(docRef: DocumentReference): void {
    this.pendingOpsCount++;
    void this.writer
      .delete(docRef)
      .catch(err => {
        this.incrementErrorCount(err);
      })
      .then(() => {
        this.pendingOpsCount--;

        // We wait until the previous stream has ended in order to sure the
        // startAfter document is correct. Starting the next stream while
        // there are pending operations allows Firestore to maximize
        // BulkWriter throughput.
        if (
          this.documentsPending &&
          !this.streamInProgress &&
          this.pendingOpsCount < this.minPendingOps
        ) {
          this.setupStream();
        }
      });
  }

  private incrementErrorCount(err: Error): void {
    this.errorCount++;
    this.lastError = err;
  }
}
