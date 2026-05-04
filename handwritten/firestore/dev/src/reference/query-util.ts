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
import {GoogleError} from 'google-gax';
import {Duplex, Transform} from 'stream';

import {Serializer} from '../serializer';
import {Timestamp} from '../timestamp';
import {DocumentSnapshotBuilder, QueryDocumentSnapshot} from '../document';
import {
  Deferred,
  getTotalTimeout,
  isPermanentRpcError,
  requestTag,
  wrapError,
} from '../util';
import {DocumentChange} from '../document-change';
import {ExplainMetrics} from '../query-profile';
import {logger} from '../logger';
import {VectorQuery} from './vector-query';
import {Query} from './query';
import Firestore from '../index';
import {QueryOptions} from './query-options';
import {LimitType, QueryResponse, QueryStreamElement} from './types';
import {NOOP_MESSAGE} from './constants';

import * as protos from '../../protos/firestore_v1_proto_api';
import api = protos.google.firestore.v1;
import {
  ATTRIBUTE_KEY_IS_RETRY_WITH_CURSOR,
  ATTRIBUTE_KEY_IS_TRANSACTIONAL,
  SPAN_NAME_RUN_QUERY,
} from '../telemetry/trace-util';

export class QueryUtil<
  AppModelType,
  DbModelType extends firestore.DocumentData,
  Template extends
    | Query<AppModelType, DbModelType>
    | VectorQuery<AppModelType, DbModelType>,
> {
  constructor(
    /** @private */
    readonly _firestore: Firestore,
    /** @private */
    readonly _queryOptions: QueryOptions<AppModelType, DbModelType>,
    /** @private */
    readonly _serializer: Serializer,
  ) {}

  _getResponse(
    query: Template,
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    retryWithCursor = true,
    explainOptions?: firestore.ExplainOptions,
  ): Promise<QueryResponse<ReturnType<Template['_createSnapshot']>>> {
    // Capture the error stack to preserve stack tracing across async calls.
    const stack = Error().stack!;

    return new Promise((resolve, reject) => {
      const docs: Array<QueryDocumentSnapshot<AppModelType, DbModelType>> = [];
      const output: Omit<QueryResponse<never>, 'result'> & {
        readTime?: Timestamp;
      } = {};

      this._stream(
        query,
        transactionOrReadTime,
        retryWithCursor,
        explainOptions,
      )
        .on('error', err => {
          reject(wrapError(err, stack));
        })
        .on('data', (data: QueryStreamElement<AppModelType, DbModelType>) => {
          if (data.transaction) {
            output.transaction = data.transaction;
          }
          if (data.readTime) {
            output.readTime = data.readTime;
          }
          if (data.explainMetrics) {
            output.explainMetrics = data.explainMetrics;
          }
          if (data.document) {
            docs.push(data.document);
          }
        })
        .on('end', () => {
          if (this._queryOptions.limitType === LimitType.Last) {
            // The results for limitToLast queries need to be flipped since
            // we reversed the ordering constraints before sending the query
            // to the backend.
            docs.reverse();
          }

          // Only return a snapshot when we have a readTime
          // explain queries with analyze !== true will return no documents and no read time
          const result = output.readTime
            ? (query._createSnapshot(
                output.readTime,
                docs.length,
                () => docs,
                () => {
                  const changes: Array<
                    DocumentChange<AppModelType, DbModelType>
                  > = [];
                  for (let i = 0; i < docs.length; ++i) {
                    changes.push(new DocumentChange('added', docs[i], -1, i));
                  }
                  return changes;
                },
              ) as ReturnType<Template['_createSnapshot']>)
            : undefined;

          resolve({
            transaction: output.transaction,
            explainMetrics: output.explainMetrics,
            result,
          });
        });
    });
  }

  // This method exists solely to enable unit tests to mock it.
  _isPermanentRpcError(err: GoogleError, methodName: string): boolean {
    return isPermanentRpcError(err, methodName);
  }

  _hasRetryTimedOut(methodName: string, startTime: number): boolean {
    const totalTimeout = getTotalTimeout(methodName);
    if (totalTimeout === 0) {
      return false;
    }

    return Date.now() - startTime >= totalTimeout;
  }

  stream(query: Template): NodeJS.ReadableStream {
    if (this._queryOptions.limitType === LimitType.Last) {
      throw new Error(
        'Query results for queries that include limitToLast() ' +
          'constraints cannot be streamed. Use Query.get() instead.',
      );
    }

    const responseStream = this._stream(query);
    const transform = new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        callback(undefined, chunk.document);
      },
    });

    responseStream.pipe(transform);
    responseStream.on('error', e => transform.destroy(e));
    return transform;
  }

  _stream(
    query: Template,
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    retryWithCursor = true,
    explainOptions?: firestore.ExplainOptions,
  ): NodeJS.ReadableStream {
    const tag = requestTag();
    const startTime = Date.now();
    const isExplain = explainOptions !== undefined;
    const methodName = 'runQuery';

    let numDocumentsReceived = 0;
    let lastReceivedDocument: QueryDocumentSnapshot<
      AppModelType,
      DbModelType
    > | null = null;

    let backendStream: Duplex;
    const stream = new Transform({
      objectMode: true,
      transform: (
        proto: api.RunQueryResponse | typeof NOOP_MESSAGE,
        enc,
        callback,
      ) => {
        if (proto === NOOP_MESSAGE) {
          callback(undefined);
          return;
        }

        const output: QueryStreamElement<AppModelType, DbModelType> = {};

        // Proto comes with zero-length buffer by default
        if (proto.transaction?.length) {
          output.transaction = proto.transaction;
        }

        if (proto.readTime) {
          output.readTime = Timestamp.fromProto(proto.readTime);
        }

        if (proto.document) {
          const document = this._firestore.snapshot_(
            proto.document,
            proto.readTime!,
          );
          const finalDoc = new DocumentSnapshotBuilder<
            AppModelType,
            DbModelType
          >(document.ref.withConverter(this._queryOptions.converter));
          // Recreate the QueryDocumentSnapshot with the DocumentReference
          // containing the original converter.
          finalDoc.fieldsProto = document._fieldsProto;
          finalDoc.readTime = document.readTime;
          finalDoc.createTime = document.createTime;
          finalDoc.updateTime = document.updateTime;
          lastReceivedDocument = finalDoc.build() as QueryDocumentSnapshot<
            AppModelType,
            DbModelType
          >;
          output.document = lastReceivedDocument;
        }

        if (proto.explainMetrics) {
          output.explainMetrics = ExplainMetrics._fromProto(
            proto.explainMetrics,
            this._serializer,
          );
        }

        ++numDocumentsReceived;
        callback(undefined, output);

        if (proto.done) {
          logger('QueryUtil._stream', tag, 'Trigger Logical Termination.');
          this._firestore._traceUtil
            .currentSpan()
            .addEvent(
              `Firestore.${methodName}: Received RunQueryResponse.Done.`,
            );
          backendStream.unpipe(stream);
          backendStream.resume();
          backendStream.end();
          stream.end();
        }
      },
    });

    this._firestore
      .initializeIfNeeded(tag)
      .then(async () => {
        // `toProto()` might throw an exception. We rely on the behavior of an
        // async function to convert this exception into the rejected Promise we
        // catch below.
        let request = query.toProto(transactionOrReadTime, explainOptions);

        let isRetryRequestWithCursor = false;
        let streamActive: Deferred<boolean>;
        do {
          streamActive = new Deferred<boolean>();

          this._firestore._traceUtil
            .currentSpan()
            .addEvent(SPAN_NAME_RUN_QUERY, {
              [ATTRIBUTE_KEY_IS_TRANSACTIONAL]: !!request.transaction,
              [ATTRIBUTE_KEY_IS_RETRY_WITH_CURSOR]: isRetryRequestWithCursor,
            });

          backendStream = await this._firestore.requestStream(
            methodName,
            /* bidirectional= */ false,
            request,
            tag,
          );
          backendStream.on('error', err => {
            backendStream.unpipe(stream);

            // If a non-transactional query failed, attempt to restart.
            // Transactional queries are retried via the transaction runner.
            // Explain queries are not retried with a cursor. That would produce
            // incorrect/partial profiling results.
            if (
              !isExplain &&
              !transactionOrReadTime &&
              !this._isPermanentRpcError(err, methodName)
            ) {
              logger(
                'QueryUtil._stream',
                tag,
                'Query failed with retryable stream error:',
                err,
              );

              this._firestore._traceUtil
                .currentSpan()
                .addEvent(`${SPAN_NAME_RUN_QUERY}: Retryable Error.`, {
                  'error.message': err.message,
                });

              // Enqueue a "no-op" write into the stream and wait for it to be
              // read by the downstream consumer. This ensures that all enqueued
              // results in the stream are consumed, which will give us an accurate
              // value for `lastReceivedDocument`.
              stream.write(NOOP_MESSAGE, () => {
                if (this._hasRetryTimedOut(methodName, startTime)) {
                  logger(
                    'QueryUtil._stream',
                    tag,
                    'Query failed with retryable stream error but the total retry timeout has exceeded.',
                  );
                  stream.destroy(err);
                  streamActive.resolve(/* active= */ false);
                } else if (lastReceivedDocument && retryWithCursor) {
                  if (query instanceof VectorQuery) {
                    throw new Error(
                      'Unimplemented: Vector query does not support cursors yet.',
                    );
                  }

                  logger(
                    'Query._stream',
                    tag,
                    'Query failed with retryable stream error and progress was made receiving ' +
                      'documents, so the stream is being retried.',
                  );

                  isRetryRequestWithCursor = true;

                  // Restart the query but use the last document we received as
                  // the query cursor. Note that we do not use backoff here. The
                  // call to `requestStream()` will backoff should the restart
                  // fail before delivering any results.
                  let newQuery: Query<AppModelType, DbModelType>;
                  if (this._queryOptions.limit === undefined) {
                    newQuery = query;
                  } else {
                    const newLimit =
                      this._queryOptions.limit - numDocumentsReceived;
                    if (
                      this._queryOptions.limitType === undefined ||
                      this._queryOptions.limitType === LimitType.First
                    ) {
                      newQuery = query.limit(newLimit);
                    } else {
                      newQuery = query.limitToLast(newLimit);
                    }
                  }

                  if (this._queryOptions.requireConsistency) {
                    request = newQuery
                      .startAfter(lastReceivedDocument)
                      .toProto(lastReceivedDocument.readTime);
                  } else {
                    request = newQuery
                      .startAfter(lastReceivedDocument)
                      .toProto();
                  }

                  // Set lastReceivedDocument to null before each retry attempt to ensure the retry makes progress
                  lastReceivedDocument = null;

                  streamActive.resolve(/* active= */ true);
                } else {
                  logger(
                    'QueryUtil._stream',
                    tag,
                    `Query failed with retryable stream error however either retryWithCursor="${retryWithCursor}", or ` +
                      'no progress was made receiving documents, so the stream is being closed.',
                  );
                  stream.destroy(err);
                  streamActive.resolve(/* active= */ false);
                }
              });
            } else {
              logger(
                'QueryUtil._stream',
                tag,
                'Query failed with stream error:',
                err,
              );

              this._firestore._traceUtil
                .currentSpan()
                .addEvent(`${SPAN_NAME_RUN_QUERY}: Error.`, {
                  'error.message': err.message,
                });

              stream.destroy(err);
              streamActive.resolve(/* active= */ false);
            }
          });
          backendStream.on('end', () => {
            streamActive.resolve(/* active= */ false);
          });
          backendStream.resume();
          backendStream.pipe(stream);
        } while (await streamActive.promise);
      })
      .catch(e => stream.destroy(e));

    return stream;
  }
}
