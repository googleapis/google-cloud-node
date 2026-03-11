/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import * as rbtree from 'functional-red-black-tree';
import {GoogleError, Status} from 'google-gax';
import {Duplex} from 'stream';

import {google} from '../protos/firestore_v1_proto_api';
import {delayExecution, ExponentialBackoff} from './backoff';
import {DocumentSnapshotBuilder, QueryDocumentSnapshot} from './document';
import {DocumentChange, DocumentChangeType} from './document-change';
import {DocumentReference, Firestore, Query} from './index';
import {logger} from './logger';
import {QualifiedResourcePath} from './path';
import {Timestamp} from './timestamp';
import {defaultConverter, RBTree} from './types';
import {requestTag} from './util';

import api = google.firestore.v1;
import {DocumentData} from '@google-cloud/firestore';

/*!
 * Target ID used by watch. Watch uses a fixed target id since we only support
 * one target per stream.
 * @type {number}
 */
const WATCH_TARGET_ID = 0x1;

/*!
 * Idle timeout used to detect Watch streams that stall (see
 * https://github.com/googleapis/nodejs-firestore/issues/1057, b/156308554).
 * Under normal load, the Watch backend will send a TARGET_CHANGE message
 * roughly every 30 seconds. As discussed with the backend team, we reset the
 * Watch stream if we do not receive any message within 120 seconds.
 */
export const WATCH_IDLE_TIMEOUT_MS = 120 * 1000;

/*!
 * Sentinel value for a document remove.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const REMOVED = {} as DocumentSnapshotBuilder<any, any>;

/*!
 * The change type for document change events.
 */
// tslint:disable-next-line:variable-name
const ChangeType: {[k: string]: DocumentChangeType} = {
  added: 'added',
  modified: 'modified',
  removed: 'removed',
};

/*!
 * The comparator used for document watches (which should always get called with
 * the same document).
 */
const DOCUMENT_WATCH_COMPARATOR: <
  AppModelType,
  DbModelType extends DocumentData,
>(
  doc1: QueryDocumentSnapshot<AppModelType, DbModelType>,
  doc2: QueryDocumentSnapshot<AppModelType, DbModelType>,
) => number = (doc1, doc2) => {
  assert(doc1 === doc2, 'Document watches only support one document.');
  return 0;
};

const EMPTY_FUNCTION: () => void = () => {};

/**
 * @private
 * @internal
 * @callback docsCallback
 * @returns {Array.<QueryDocumentSnapshot>} An ordered list of documents.
 */

/**
 * @private
 * @internal
 * @callback changeCallback
 * @returns {Array.<DocumentChange>} An ordered list of document
 * changes.
 */

/**
 * onSnapshot() callback that receives the updated query state.
 *
 * @private
 * @internal
 * @callback watchSnapshotCallback
 *
 * @param {Timestamp} readTime The time at which this snapshot was obtained.
 * @param {number} size The number of documents in the result set.
 * @param {docsCallback} docs A callback that returns the ordered list of
 * documents stored in this snapshot.
 * @param {changeCallback} changes A callback that returns the list of
 * changed documents since the last snapshot delivered for this watch.
 */

type DocumentComparator<
  AppModelType,
  DbModelType extends firestore.DocumentData,
> = (
  l: QueryDocumentSnapshot<AppModelType, DbModelType>,
  r: QueryDocumentSnapshot<AppModelType, DbModelType>,
) => number;

interface DocumentChangeSet<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> {
  deletes: string[];
  adds: Array<QueryDocumentSnapshot<AppModelType, DbModelType>>;
  updates: Array<QueryDocumentSnapshot<AppModelType, DbModelType>>;
}

/**
 * Watch provides listen functionality and exposes the 'onSnapshot' observer. It
 * can be used with a valid Firestore Listen target.
 *
 * @class
 * @private
 * @internal
 */
abstract class Watch<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> {
  protected readonly firestore: Firestore;
  private readonly backoff: ExponentialBackoff;
  private readonly requestTag: string;

  /**
   * Indicates whether we are interested in data from the stream. Set to false in the
   * 'unsubscribe()' callback.
   * @private
   * @internal
   */
  private isActive = true;

  /**
   * The current stream to the backend.
   * @private
   * @internal
   */
  private currentStream: Duplex | null = null;

  /**
   * The server assigns and updates the resume token.
   * @private
   * @internal
   */
  private resumeToken: Uint8Array | undefined = undefined;

  /**
   * A map of document names to QueryDocumentSnapshots for the last sent snapshot.
   * @private
   * @internal
   */
  private docMap = new Map<
    string,
    QueryDocumentSnapshot<AppModelType, DbModelType>
  >();

  /**
   * The accumulated map of document changes (keyed by document name) for the
   * current snapshot.
   * @private
   * @internal
   */
  private changeMap = new Map<
    string,
    DocumentSnapshotBuilder<AppModelType, DbModelType>
  >();

  /**
   * The current state of the query results. *
   * @private
   * @internal
   */
  private current = false;

  /**
   * The sorted tree of QueryDocumentSnapshots as sent in the last snapshot.
   * We only look at the keys.
   * @private
   * @internal
   */
  private docTree: RBTree | undefined;

  /**
   * We need this to track whether we've pushed an initial set of changes,
   * since we should push those even when there are no changes, if there
   * aren't docs.
   * @private
   * @internal
   */
  private hasPushed = false;

  /**
   * The handler used to restart the Watch stream if it has been idle for more
   * than WATCH_IDLE_TIMEOUT_MS.
   */
  private idleTimeoutHandle?: NodeJS.Timeout;

  private onNext: (
    readTime: Timestamp,
    size: number,
    docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>,
    changes: () => Array<DocumentChange<AppModelType, DbModelType>>,
  ) => void;

  private onError: (error: Error) => void;

  /**
   * @private
   * @internal
   *
   * @param firestore The Firestore Database client.
   */
  constructor(
    firestore: Firestore,
    readonly _converter = defaultConverter<AppModelType, DbModelType>(),
  ) {
    this.firestore = firestore;
    this.backoff = new ExponentialBackoff();
    this.requestTag = requestTag();
    this.onNext = EMPTY_FUNCTION;
    this.onError = EMPTY_FUNCTION;
  }

  /**  Returns a 'Target' proto denoting the target to listen on. */
  protected abstract getTarget(resumeToken?: Uint8Array): api.ITarget;

  /**
   * Returns a comparator for QueryDocumentSnapshots that is used to order the
   * document snapshots returned by this watch.
   */
  protected abstract getComparator(): DocumentComparator<
    AppModelType,
    DbModelType
  >;

  /**
   * Starts a watch and attaches a listener for document change events.
   *
   * @private
   * @internal
   * @param onNext A callback to be called every time a new snapshot is
   * available.
   * @param onError A callback to be called if the listen fails or is cancelled.
   * No further callbacks will occur.
   *
   * @returns An unsubscribe function that can be called to cancel the snapshot
   * listener.
   */
  onSnapshot(
    onNext: (
      readTime: Timestamp,
      size: number,
      docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>,
      changes: () => Array<DocumentChange<AppModelType, DbModelType>>,
    ) => void,
    onError: (error: Error) => void,
  ): () => void {
    assert(
      this.onNext === EMPTY_FUNCTION,
      'onNext should not already be defined.',
    );
    assert(
      this.onError === EMPTY_FUNCTION,
      'onError should not already be defined.',
    );
    assert(
      this.docTree === undefined,
      'docTree should not already be defined.',
    );
    this.onNext = onNext;
    this.onError = onError;
    this.docTree = rbtree(this.getComparator());

    this.initStream();

    const unsubscribe: () => void = () => {
      logger('Watch.onSnapshot', this.requestTag, 'Unsubscribe called');
      // Prevent further callbacks.
      this.onNext = () => {};
      this.onError = () => {};
      this.shutdown();
    };
    this.firestore.registerListener();
    return unsubscribe;
  }

  /**
   * Returns the current count of all documents, including the changes from
   * the current changeMap.
   * @private
   * @internal
   */
  private currentSize(): number {
    const changes = this.extractCurrentChanges(Timestamp.now());
    return this.docMap.size + changes.adds.length - changes.deletes.length;
  }

  /**
   * Splits up document changes into removals, additions, and updates.
   * @private
   * @internal
   */
  private extractCurrentChanges(
    readTime: Timestamp,
  ): DocumentChangeSet<AppModelType, DbModelType> {
    const deletes: string[] = [];
    const adds: Array<QueryDocumentSnapshot<AppModelType, DbModelType>> = [];
    const updates: Array<QueryDocumentSnapshot<AppModelType, DbModelType>> = [];

    this.changeMap.forEach((value, name) => {
      if (value === REMOVED) {
        if (this.docMap.has(name)) {
          deletes.push(name);
        }
      } else if (this.docMap.has(name)) {
        value.readTime = readTime;
        updates.push(
          value.build() as QueryDocumentSnapshot<AppModelType, DbModelType>,
        );
      } else {
        value.readTime = readTime;
        adds.push(
          value.build() as QueryDocumentSnapshot<AppModelType, DbModelType>,
        );
      }
    });

    return {deletes, adds, updates};
  }

  /**
   * Helper to clear the docs on RESET or filter mismatch.
   * @private
   * @internal
   */
  private resetDocs(): void {
    logger('Watch.resetDocs', this.requestTag, 'Resetting documents');
    this.changeMap.clear();
    this.resumeToken = undefined;

    this.docTree.forEach((snapshot: QueryDocumentSnapshot) => {
      // Mark each document as deleted. If documents are not deleted, they
      // will be send again by the server.
      this.changeMap.set(
        snapshot.ref.path,
        REMOVED as DocumentSnapshotBuilder<AppModelType, DbModelType>,
      );
    });

    this.current = false;
  }

  /**
   * Closes the stream and calls onError() if the stream is still active.
   * @private
   * @internal
   */
  private closeStream(err: GoogleError): void {
    if (this.isActive) {
      logger('Watch.closeStream', this.requestTag, 'Invoking onError: ', err);
      this.onError(err);
    }
    this.shutdown();
  }

  /**
   * Re-opens the stream unless the specified error is considered permanent.
   * Clears the change map.
   * @private
   * @internal
   */
  private maybeReopenStream(err: GoogleError): void {
    if (this.isActive && !this.isPermanentWatchError(err)) {
      logger(
        'Watch.maybeReopenStream',
        this.requestTag,
        'Stream ended, re-opening after retryable error:',
        err,
      );
      this.changeMap.clear();

      if (this.isResourceExhaustedError(err)) {
        this.backoff.resetToMax();
      }

      this.initStream();
    } else {
      this.closeStream(err);
    }
  }

  /**
   * Cancels the current idle timeout and reschedules a new timer.
   *
   * @private
   * @internal
   */
  private resetIdleTimeout(): void {
    if (this.idleTimeoutHandle) {
      clearTimeout(this.idleTimeoutHandle);
    }

    this.idleTimeoutHandle = delayExecution(() => {
      logger(
        'Watch.resetIdleTimeout',
        this.requestTag,
        'Resetting stream after idle timeout',
      );
      this.currentStream?.end();
      this.currentStream = null;

      const error = new GoogleError('Watch stream idle timeout');
      error.code = Status.UNKNOWN;
      this.maybeReopenStream(error);
    }, WATCH_IDLE_TIMEOUT_MS);
  }

  /**
   * Helper to restart the outgoing stream to the backend.
   * @private
   * @internal
   */
  private resetStream(): void {
    logger('Watch.resetStream', this.requestTag, 'Restarting stream');
    if (this.currentStream) {
      this.currentStream.end();
      this.currentStream = null;
    }
    this.initStream();
  }

  /**
   * Initializes a new stream to the backend with backoff.
   * @private
   * @internal
   */
  private initStream(): void {
    this.backoff
      .backoffAndWait()
      .then(async () => {
        if (!this.isActive) {
          logger(
            'Watch.initStream',
            this.requestTag,
            'Not initializing inactive stream',
          );
          return;
        }

        await this.firestore.initializeIfNeeded(this.requestTag);

        const request: api.IListenRequest = {};
        request.database = this.firestore.formattedName;
        request.addTarget = this.getTarget(this.resumeToken);

        // Note that we need to call the internal _listen API to pass additional
        // header values in readWriteStream.
        return this.firestore
          .requestStream(
            'listen',
            /* bidirectional= */ true,
            request,
            this.requestTag,
          )
          .then(backendStream => {
            if (!this.isActive) {
              logger(
                'Watch.initStream',
                this.requestTag,
                'Closing inactive stream',
              );
              backendStream.emit('end');
              backendStream.on('error', () => {
                // Note that emitting 'end' above does not prevent the Duplex
                // from receiving potential errors from the backend. Since the
                // stream is no longer active (`isActive` is false), we
                // swallow / ignore any errors it may receive.
              });
              return;
            }
            logger('Watch.initStream', this.requestTag, 'Opened new stream');
            this.currentStream = backendStream;
            this.resetIdleTimeout();

            this.currentStream!.on('data', (proto: api.IListenResponse) => {
              this.resetIdleTimeout();
              this.onData(proto);
            })
              .on('error', err => {
                if (this.currentStream === backendStream) {
                  this.currentStream = null;
                  this.maybeReopenStream(err);
                }
              })
              .on('end', () => {
                if (this.currentStream === backendStream) {
                  this.currentStream = null;

                  const err = new GoogleError('Stream ended unexpectedly');
                  err.code = Status.UNKNOWN;
                  this.maybeReopenStream(err);
                }
              });
            this.currentStream!.resume();
          });
      })
      .catch(err => {
        this.closeStream(err);
      });
  }

  /**
   * Handles 'data' events and closes the stream if the response type is
   * invalid.
   * @private
   * @internal
   */
  private onData(proto: api.IListenResponse): void {
    if (proto.targetChange) {
      logger('Watch.onData', this.requestTag, 'Processing target change');
      const change = proto.targetChange;
      const noTargetIds = !change.targetIds || change.targetIds.length === 0;
      if (change.targetChangeType === 'NO_CHANGE') {
        if (noTargetIds && change.readTime && this.current) {
          // This means everything is up-to-date, so emit the current
          // set of docs as a snapshot, if there were changes.
          this.pushSnapshot(
            Timestamp.fromProto(change.readTime),
            change.resumeToken!,
          );
        }
      } else if (change.targetChangeType === 'ADD') {
        if (WATCH_TARGET_ID !== change.targetIds![0]) {
          this.closeStream(Error('Unexpected target ID sent by server'));
        }
      } else if (change.targetChangeType === 'REMOVE') {
        let code = Status.INTERNAL;
        let message = 'internal error';
        if (change.cause) {
          code = change.cause.code!;
          message = change.cause.message!;
        }
        // @todo: Surface a .code property on the exception.
        this.closeStream(new Error('Error ' + code + ': ' + message));
      } else if (change.targetChangeType === 'RESET') {
        // Whatever changes have happened so far no longer matter.
        this.resetDocs();
      } else if (change.targetChangeType === 'CURRENT') {
        this.current = true;
      } else {
        this.closeStream(
          new Error('Unknown target change type: ' + JSON.stringify(change)),
        );
      }

      if (
        change.resumeToken &&
        this.affectsTarget(change.targetIds!, WATCH_TARGET_ID)
      ) {
        this.backoff.reset();
      }
    } else if (proto.documentChange) {
      logger('Watch.onData', this.requestTag, 'Processing change event');

      // No other targetIds can show up here, but we still need to see
      // if the targetId was in the added list or removed list.
      const targetIds = proto.documentChange.targetIds || [];
      const removedTargetIds = proto.documentChange.removedTargetIds || [];
      let changed = false;
      let removed = false;
      for (let i = 0; i < targetIds.length; i++) {
        if (targetIds[i] === WATCH_TARGET_ID) {
          changed = true;
        }
      }
      for (let i = 0; i < removedTargetIds.length; i++) {
        if (removedTargetIds[i] === WATCH_TARGET_ID) {
          removed = true;
        }
      }

      const document = proto.documentChange.document!;
      const name = document.name!;
      const relativeName =
        QualifiedResourcePath.fromSlashSeparatedString(name).relativeName;

      if (changed) {
        logger('Watch.onData', this.requestTag, 'Received document change');
        const ref = this.firestore.doc(relativeName);
        const snapshot = new DocumentSnapshotBuilder<AppModelType, DbModelType>(
          ref.withConverter(this._converter),
        );
        snapshot.fieldsProto = document.fields || {};
        snapshot.createTime = Timestamp.fromProto(document.createTime!);
        snapshot.updateTime = Timestamp.fromProto(document.updateTime!);
        this.changeMap.set(relativeName, snapshot);
      } else if (removed) {
        logger('Watch.onData', this.requestTag, 'Received document remove');
        this.changeMap.set(
          relativeName,
          REMOVED as DocumentSnapshotBuilder<AppModelType, DbModelType>,
        );
      }
    } else if (proto.documentDelete || proto.documentRemove) {
      logger('Watch.onData', this.requestTag, 'Processing remove event');
      const name = (proto.documentDelete || proto.documentRemove)!.document!;
      const relativeName =
        QualifiedResourcePath.fromSlashSeparatedString(name).relativeName;
      this.changeMap.set(
        relativeName,
        REMOVED as DocumentSnapshotBuilder<AppModelType, DbModelType>,
      );
    } else if (proto.filter) {
      logger('Watch.onData', this.requestTag, 'Processing filter update');
      if (proto.filter.count !== this.currentSize()) {
        // We need to remove all the current results.
        this.resetDocs();
        // The filter didn't match, so re-issue the query.
        this.resetStream();
      }
    } else {
      this.closeStream(
        new Error('Unknown listen response type: ' + JSON.stringify(proto)),
      );
    }
  }

  /**
   * Checks if the current target id is included in the list of target ids.
   * If no targetIds are provided, returns true.
   * @private
   * @internal
   */
  private affectsTarget(
    targetIds: number[] | undefined,
    currentId: number,
  ): boolean {
    if (targetIds === undefined || targetIds.length === 0) {
      return true;
    }

    for (const targetId of targetIds) {
      if (targetId === currentId) {
        return true;
      }
    }

    return false;
  }

  /**
   * Assembles a new snapshot from the current set of changes and invokes the
   * user's callback. Clears the current changes on completion.
   * @private
   * @internal
   */
  private pushSnapshot(
    readTime: Timestamp,
    nextResumeToken?: Uint8Array,
  ): void {
    const appliedChanges = this.computeSnapshot(readTime);

    if (!this.hasPushed || appliedChanges.length > 0) {
      logger(
        'Watch.pushSnapshot',
        this.requestTag,
        'Sending snapshot with %d changes and %d documents',
        String(appliedChanges.length),
        this.docTree.length,
      );
      // We pass the current set of changes, even if `docTree` is modified later.
      const currentTree = this.docTree;
      this.onNext(
        readTime,
        currentTree.length,
        () => currentTree.keys,
        () => appliedChanges,
      );
      this.hasPushed = true;
    }

    this.changeMap.clear();
    this.resumeToken = nextResumeToken;
  }

  /**
   * Applies a document delete to the document tree and the document map.
   * Returns the corresponding DocumentChange event.
   * @private
   * @internal
   */
  private deleteDoc(name: string): DocumentChange<AppModelType, DbModelType> {
    assert(this.docMap.has(name), 'Document to delete does not exist');
    const oldDocument = this.docMap.get(name)!;
    const existing = this.docTree.find(oldDocument);
    const oldIndex = existing.index;
    this.docTree = existing.remove();
    this.docMap.delete(name);
    return new DocumentChange(ChangeType.removed, oldDocument, oldIndex, -1);
  }

  /**
   * Applies a document add to the document tree and the document map. Returns
   * the corresponding DocumentChange event.
   * @private
   * @internal
   */
  private addDoc(
    newDocument: QueryDocumentSnapshot<AppModelType, DbModelType>,
  ): DocumentChange<AppModelType, DbModelType> {
    const name = newDocument.ref.path;
    assert(!this.docMap.has(name), 'Document to add already exists');
    this.docTree = this.docTree.insert(newDocument, null);
    const newIndex = this.docTree.find(newDocument).index;
    this.docMap.set(name, newDocument);
    return new DocumentChange(ChangeType.added, newDocument, -1, newIndex);
  }

  /**
   * Applies a document modification to the document tree and the document map.
   * Returns the DocumentChange event for successful modifications.
   * @private
   * @internal
   */
  private modifyDoc(
    newDocument: QueryDocumentSnapshot<AppModelType, DbModelType>,
  ): DocumentChange<AppModelType, DbModelType> | null {
    const name = newDocument.ref.path;
    assert(this.docMap.has(name), 'Document to modify does not exist');
    const oldDocument = this.docMap.get(name)!;
    if (!oldDocument.updateTime.isEqual(newDocument.updateTime)) {
      const removeChange = this.deleteDoc(name);
      const addChange = this.addDoc(newDocument);
      return new DocumentChange(
        ChangeType.modified,
        newDocument,
        removeChange.oldIndex,
        addChange.newIndex,
      );
    }
    return null;
  }

  /**
   * Applies the mutations in changeMap to both the document tree and the
   * document lookup map. Modified docMap in-place and returns the updated
   * state.
   * @private
   * @internal
   */
  private computeSnapshot(
    readTime: Timestamp,
  ): Array<DocumentChange<AppModelType, DbModelType>> {
    const changeSet = this.extractCurrentChanges(readTime);
    const appliedChanges: Array<DocumentChange<AppModelType, DbModelType>> = [];

    // Process the sorted changes in the order that is expected by our clients
    // (removals, additions, and then modifications). We also need to sort the
    // individual changes to assure that oldIndex/newIndex keep incrementing.
    changeSet.deletes.sort((name1, name2) => {
      // Deletes are sorted based on the order of the existing document.
      return this.getComparator()(
        this.docMap.get(name1)!,
        this.docMap.get(name2)!,
      );
    });
    changeSet.deletes.forEach(name => {
      const change = this.deleteDoc(name);
      appliedChanges.push(change);
    });

    changeSet.adds.sort(this.getComparator());
    changeSet.adds.forEach(snapshot => {
      const change = this.addDoc(snapshot);
      appliedChanges.push(change);
    });

    changeSet.updates.sort(this.getComparator());
    changeSet.updates.forEach(snapshot => {
      const change = this.modifyDoc(snapshot);
      if (change) {
        appliedChanges.push(change);
      }
    });

    assert(
      this.docTree.length === this.docMap.size,
      'The update document ' +
        'tree and document map should have the same number of entries.',
    );

    return appliedChanges;
  }

  /**
   * Determines whether a watch error is considered permanent and should not be
   * retried. Errors that don't provide a GRPC error code are always considered
   * transient in this context.
   *
   * @private
   * @internal
   * @param error An error object.
   * @returns Whether the error is permanent.
   */
  private isPermanentWatchError(error: GoogleError): boolean {
    if (error.code === undefined) {
      logger(
        'Watch.isPermanentError',
        this.requestTag,
        'Unable to determine error code: ',
        error,
      );
      return false;
    }

    switch (error.code) {
      case Status.ABORTED:
      case Status.CANCELLED:
      case Status.UNKNOWN:
      case Status.DEADLINE_EXCEEDED:
      case Status.RESOURCE_EXHAUSTED:
      case Status.INTERNAL:
      case Status.UNAVAILABLE:
      case Status.UNAUTHENTICATED:
        return false;
      default:
        return true;
    }
  }

  /**
   * Determines whether we need to initiate a longer backoff due to system
   * overload.
   *
   * @private
   * @internal
   * @param error A GRPC Error object that exposes an error code.
   * @returns Whether we need to back off our retries.
   */
  private isResourceExhaustedError(error: GoogleError): boolean {
    return error.code === Status.RESOURCE_EXHAUSTED;
  }

  /** Closes the stream and clears all timeouts. */
  private shutdown(): void {
    if (this.isActive) {
      this.isActive = false;
      if (this.idleTimeoutHandle) {
        clearTimeout(this.idleTimeoutHandle);
        this.idleTimeoutHandle = undefined;
      }
      this.firestore.unregisterListener();
    }

    this.currentStream?.end();
    this.currentStream = null;
  }
}

/**
 * Creates a new Watch instance to listen on DocumentReferences.
 *
 * @private
 * @internal
 */
export class DocumentWatch<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> extends Watch<AppModelType, DbModelType> {
  constructor(
    firestore: Firestore,
    private readonly ref: DocumentReference<AppModelType, DbModelType>,
  ) {
    super(firestore, ref._converter);
  }

  getComparator(): DocumentComparator<AppModelType, DbModelType> {
    return DOCUMENT_WATCH_COMPARATOR;
  }

  getTarget(resumeToken?: Uint8Array): google.firestore.v1.ITarget {
    const formattedName = this.ref.formattedName;
    return {
      documents: {
        documents: [formattedName],
      },
      targetId: WATCH_TARGET_ID,
      resumeToken,
    };
  }
}

/**
 * Creates a new Watch instance to listen on Queries.
 *
 * @private
 * @internal
 */
export class QueryWatch<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> extends Watch<AppModelType, DbModelType> {
  private comparator: DocumentComparator<AppModelType, DbModelType>;

  constructor(
    firestore: Firestore,
    private readonly query: Query<AppModelType, DbModelType>,
    converter?: firestore.FirestoreDataConverter<AppModelType, DbModelType>,
  ) {
    super(firestore, converter);
    this.comparator = query.comparator();
  }

  getComparator(): DocumentComparator<AppModelType, DbModelType> {
    return this.query.comparator();
  }

  getTarget(resumeToken?: Uint8Array): google.firestore.v1.ITarget {
    const query = this.query.toProto();
    return {query, targetId: WATCH_TARGET_ID, resumeToken};
  }
}
