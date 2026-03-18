/*!
 * Copyright 2021 Google LLC. All Rights Reserved.
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

import {DocumentSnapshot, DocumentSnapshotBuilder} from './document';
import {DocumentReference} from './reference/document-reference';
import {FieldPath} from './path';
import {isPermanentRpcError} from './util';
import {google} from '../protos/firestore_v1_proto_api';
import {logger} from './logger';
import {Firestore} from './index';
import {Timestamp} from './timestamp';
import {DocumentData} from '@google-cloud/firestore';
import api = google.firestore.v1;

interface BatchGetResponse<AppModelType, DbModelType extends DocumentData> {
  result: Array<DocumentSnapshot<AppModelType, DbModelType>>;
  /**
   * The transaction that was started as part of this request. Will only be if
   * `DocumentReader.transactionIdOrNewTransaction` was `api.ITransactionOptions`.
   */
  transaction?: Uint8Array;
}

/**
 * A wrapper around BatchGetDocumentsRequest that retries request upon stream
 * failure and returns ordered results.
 *
 * @private
 * @internal
 */
export class DocumentReader<AppModelType, DbModelType extends DocumentData> {
  private readonly outstandingDocuments = new Set<string>();
  private readonly retrievedDocuments = new Map<string, DocumentSnapshot>();
  private retrievedTransactionId?: Uint8Array;

  /**
   * Creates a new DocumentReader that fetches the provided documents (via
   * `get()`).
   *
   * @param firestore The Firestore instance to use.
   * @param allDocuments The documents to get.
   * @param fieldMask An optional field mask to apply to this read
   * @param transactionOrReadTime An optional transaction ID to use for this
   * read or options for beginning a new transaction with this read
   */
  constructor(
    private readonly firestore: Firestore,
    private readonly allDocuments: ReadonlyArray<
      DocumentReference<AppModelType, DbModelType>
    >,
    private readonly fieldMask?: FieldPath[],
    private readonly transactionOrReadTime?:
      | Uint8Array
      | api.ITransactionOptions
      | Timestamp,
  ) {
    for (const docRef of this.allDocuments) {
      this.outstandingDocuments.add(docRef.formattedName);
    }
  }

  /**
   * Invokes the BatchGetDocuments RPC and returns the results as an array of
   * documents.
   *
   * @param requestTag A unique client-assigned identifier for this request.
   */
  async get(
    requestTag: string,
  ): Promise<Array<DocumentSnapshot<AppModelType, DbModelType>>> {
    const {result} = await this._get(requestTag);
    return result;
  }

  /**
   * Invokes the BatchGetDocuments RPC and returns the results with transaction
   * metadata.
   *
   * @param requestTag A unique client-assigned identifier for this request.
   */
  async _get(
    requestTag: string,
  ): Promise<BatchGetResponse<AppModelType, DbModelType>> {
    await this.fetchDocuments(requestTag);

    // BatchGetDocuments doesn't preserve document order. We use the request
    // order to sort the resulting documents.
    const orderedDocuments: Array<DocumentSnapshot<AppModelType, DbModelType>> =
      [];

    for (const docRef of this.allDocuments) {
      const document = this.retrievedDocuments.get(docRef.formattedName);
      if (document !== undefined) {
        // Recreate the DocumentSnapshot with the DocumentReference
        // containing the original converter.
        const finalDoc = new DocumentSnapshotBuilder(
          docRef as DocumentReference<AppModelType, DbModelType>,
        );
        finalDoc.fieldsProto = document._fieldsProto;
        finalDoc.readTime = document.readTime;
        finalDoc.createTime = document.createTime;
        finalDoc.updateTime = document.updateTime;
        orderedDocuments.push(finalDoc.build());
      } else {
        throw new Error(`Did not receive document for "${docRef.path}".`);
      }
    }

    return {
      result: orderedDocuments,
      transaction: this.retrievedTransactionId,
    };
  }

  private async fetchDocuments(requestTag: string): Promise<void> {
    if (!this.outstandingDocuments.size) {
      return;
    }

    const request: api.IBatchGetDocumentsRequest = {
      database: this.firestore.formattedName,
      documents: Array.from(this.outstandingDocuments),
    };
    if (this.transactionOrReadTime instanceof Uint8Array) {
      request.transaction = this.transactionOrReadTime;
    } else if (this.transactionOrReadTime instanceof Timestamp) {
      request.readTime = this.transactionOrReadTime.toProto().timestampValue;
    } else if (this.transactionOrReadTime) {
      request.newTransaction = this.transactionOrReadTime;
    }

    if (this.fieldMask) {
      const fieldPaths = this.fieldMask.map(
        fieldPath => fieldPath.formattedName,
      );
      request.mask = {fieldPaths};
    }

    let resultCount = 0;

    try {
      const stream = await this.firestore.requestStream(
        'batchGetDocuments',
        /* bidirectional= */ false,
        request,
        requestTag,
      );
      stream.resume();

      for await (const response of stream) {
        // Proto comes with zero-length buffer by default
        if (response.transaction?.length) {
          this.retrievedTransactionId = response.transaction;
        }

        let snapshot: DocumentSnapshot<DocumentData> | undefined;
        if (response.found) {
          logger(
            'DocumentReader.fetchDocuments',
            requestTag,
            'Received document: %s',
            response.found.name!,
          );
          snapshot = this.firestore.snapshot_(
            response.found,
            response.readTime!,
          );
        } else if (response.missing) {
          logger(
            'DocumentReader.fetchDocuments',
            requestTag,
            'Document missing: %s',
            response.missing,
          );
          snapshot = this.firestore.snapshot_(
            response.missing,
            response.readTime!,
          );
        }

        if (snapshot) {
          const path = snapshot.ref.formattedName;
          this.outstandingDocuments.delete(path);
          this.retrievedDocuments.set(path, snapshot);
          ++resultCount;
        }
      }
    } catch (error) {
      const shouldRetry =
        // Transactional reads are retried via the transaction runner.
        !request.transaction &&
        !request.newTransaction &&
        // Only retry if we made progress.
        resultCount > 0 &&
        // Don't retry permanent errors.
        error.code !== undefined &&
        !isPermanentRpcError(error, 'batchGetDocuments');

      logger(
        'DocumentReader.fetchDocuments',
        requestTag,
        'BatchGetDocuments failed with error: %s. Retrying: %s',
        error,
        shouldRetry,
      );
      if (shouldRetry) {
        return this.fetchDocuments(requestTag);
      } else {
        throw error;
      }
    } finally {
      logger(
        'DocumentReader.fetchDocuments',
        requestTag,
        'Received %d results',
        resultCount,
      );
    }
  }
}
