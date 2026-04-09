// Copyright 2025 Google LLC
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

import {GetRowsOptions} from '../table';
import {Row} from '../row';
import * as is from 'is';
import {Filter, BoundData} from '../filter';
import {Mutation} from '../mutation';
import {AbortableDuplex} from '../index';
import {
  ChunkPushData,
  ChunkPushLastScannedRowData,
  ChunkTransformer,
  DataEvent,
} from '../chunktransformer';
import {TableUtils} from './table';
import {Duplex, PassThrough, Transform} from 'stream';
import {google} from '../../protos/protos';
const pumpify = require('pumpify');
import {grpc, ServiceError} from 'google-gax';
import {
  DEFAULT_BACKOFF_SETTINGS,
  getNextDelay,
  IGNORED_STATUS_CODES,
  populateAttemptHeader,
  RETRYABLE_STATUS_CODES,
  TabularApiSurface,
} from '../tabular-api-surface';
import {OperationMetricsCollector} from '../client-side-metrics/operation-metrics-collector';
import {TimedStream} from '../timed-stream';

/**
 * Creates a readable stream of rows from a Bigtable table or authorized view.
 *
 * This internal method handles the core logic for streaming rows from a Bigtable
 * table. It supports various filtering, limiting, and retry mechanisms. It can
 * be used to create a stream for either a whole table or an authorized view.
 *
 * @param {Table} table The Table instance to read rows from.
 * @param metricsCollector
 * @param {GetRowsOptions} [opts] Optional configuration for the read operation.
 * @param {boolean} [opts.decode=true] If set to `false` it will not decode
 *     Buffer values returned from Bigtable.
 * @param {boolean} [opts.encoding] The encoding to use when converting
 *     Buffer values to a string.
 * @param {string} [opts.end] End value for key range.
 * @param {Filter} [opts.filter] Row filters allow you to
 *     both make advanced queries and format how the data is returned.
 * @param {object} [opts.gaxOptions] Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {string[]} [opts.keys] A list of row keys.
 * @param {number} [opts.limit] Maximum number of rows to be returned.
 * @param {string} [opts.prefix] Prefix that the row key must match.
 * @param {string[]} [opts.prefixes] List of prefixes that a row key must
 *     match.
 * @param {object[]} [opts.ranges] A list of key ranges.
 * @param {string} [opts.start] Start value for key range.
 * @returns {stream} A readable stream of {@link Row} objects.
 *
 */
export function createReadStreamInternal(
  table: TabularApiSurface,
  metricsCollector: OperationMetricsCollector,
  opts?: GetRowsOptions,
) {
  const options = opts || {};
  const maxRetries = is.number(table.maxRetries) ? table.maxRetries! : 10;
  let activeRequestStream: AbortableDuplex | null;
  let rowKeys: string[];
  let filter: {} | null;
  const rowsLimit = options.limit || 0;
  const hasLimit = rowsLimit !== 0;

  const viewName = table.viewName;

  let numConsecutiveErrors = 0;
  let numRequestsMade = 0;
  let retryTimer: NodeJS.Timeout | null;

  rowKeys = options.keys || [];

  /*
  The following line of code sets the timeout if it was provided while
  creating the client. This will be used to determine if the client should
  retry on DEADLINE_EXCEEDED errors. Eventually, this will be handled
  downstream in google-gax.
   */
  const timeout =
    opts?.gaxOptions?.timeout ||
    (table?.bigtable?.options?.BigtableClient?.clientConfig?.interfaces &&
      table?.bigtable?.options?.BigtableClient?.clientConfig?.interfaces[
        'google.bigtable.v2.Bigtable'
      ]?.methods['ReadRows']?.timeout_millis);
  const callTimeMillis = new Date().getTime();

  const ranges = TableUtils.getRanges(options);

  // If rowKeys and ranges are both empty, the request is a full table scan.
  // Add an empty range to simplify the resumption logic.
  if (rowKeys.length === 0 && ranges.length === 0) {
    ranges.push({});
  }

  if (options.filter) {
    filter = Filter.parse(options.filter);
  }

  let chunkTransformer: ChunkTransformer;
  let rowStream: Duplex;

  let userCanceled = false;
  // The key of the last row that was emitted by the per attempt pipeline
  // Note: this must be updated from the operation level userStream to avoid referencing buffered rows that will be
  // discarded in the per attempt subpipeline (rowStream)
  let lastRowKey = '';
  let rowsRead = 0;
  const userStream = new TimedStream({
    transformHook(event, _encoding, callback) {
      if (userCanceled) {
        callback();
        return;
      }
      if (event.eventType === DataEvent.LAST_ROW_KEY_UPDATE) {
        /**
         * This code will run when receiving an event containing
         * lastScannedRowKey data that the chunk transformer sent. When the
         * chunk transformer gets lastScannedRowKey data, this code
         * updates the lastRowKey to ensure row ids with the lastScannedRowKey
         * aren't re-requested in retries. The lastRowKey needs to be updated
         * here and not in the chunk transformer to ensure the update is
         * queued behind all events that deliver data to the user stream
         * first.
         */
        lastRowKey = event.lastScannedRowKey;
        callback();
        return;
      }
      const row = event;
      if (TableUtils.lessThanOrEqualTo(row.id, lastRowKey)) {
        /*
        Sometimes duplicate rows reach this point. To avoid delivering
        duplicate rows to the user, rows are thrown away if they don't exceed
        the last row key. We can expect each row to reach this point and rows
        are delivered in order so if the last row key equals or exceeds the
        row id then we know data for this row has already reached this point
        and been delivered to the user. In this case we want to throw the row
        away and we do not want to deliver this row to the user again.
         */
        callback();
        return;
      }
      lastRowKey = row.id;
      rowsRead++;
      callback(null, row);
    },
  });

  // The caller should be able to call userStream.end() to stop receiving
  // more rows and cancel the stream prematurely. But also, the 'end' event
  // will be emitted if the stream ended normally. To tell these two
  // situations apart, we'll save the "original" end() function, and
  // will call it on rowStream.on('end').
  const originalEnd = userStream.end.bind(userStream);

  // Taking care of this extra listener when piping and unpiping userStream:
  const rowStreamPipe = (rowStream: Duplex, userStream: PassThrough) => {
    rowStream.pipe(userStream, {end: false});
    rowStream.on('end', originalEnd);
  };
  const rowStreamUnpipe = (rowStream: Duplex, userStream: PassThrough) => {
    rowStream?.unpipe(userStream);
    rowStream?.removeListener('end', originalEnd);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userStream.end = (chunk?: any, encoding?: any, cb?: () => void) => {
    rowStreamUnpipe(rowStream, userStream);
    userCanceled = true;
    if (activeRequestStream) {
      activeRequestStream.abort();
    }
    if (retryTimer) {
      clearTimeout(retryTimer);
    }
    return originalEnd(chunk, encoding, cb);
  };
  metricsCollector.onOperationStart();
  const makeNewRequest = () => {
    metricsCollector.onAttemptStart();

    // Avoid cancelling an expired timer if user
    // cancelled the stream in the middle of a retry
    retryTimer = null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chunkTransformer = new ChunkTransformer({
      decode: options.decode,
    } as any);

    // If the viewName is provided then request will be made for an
    // authorized view. Otherwise, the request is made for a table.
    const reqOpts = (
      viewName
        ? {
            authorizedViewName: `${table.name}/authorizedViews/${viewName}`,
            appProfileId: table.bigtable.appProfileId,
          }
        : {
            tableName: table.name,
            appProfileId: table.bigtable.appProfileId,
          }
    ) as google.bigtable.v2.IReadRowsRequest;

    const retryOpts = {
      currentRetryAttempt: 0, // was numConsecutiveErrors
      // Handling retries in this client. Specify the retry options to
      // make sure nothing is retried in retry-request.
      noResponseRetries: 0,
      shouldRetryFn: (_: any) => {
        return false;
      },
    };

    if (lastRowKey) {
      // Readjust and/or remove ranges based on previous valid row reads.
      // Iterate backward since items may need to be removed.
      for (let index = ranges.length - 1; index >= 0; index--) {
        const range = ranges[index];
        const startValue = is.object(range.start)
          ? (range.start as BoundData).value
          : range.start;
        const endValue = is.object(range.end)
          ? (range.end as BoundData).value
          : range.end;
        const startKeyIsRead =
          !startValue ||
          TableUtils.lessThanOrEqualTo(
            startValue as string,
            lastRowKey as string,
          );
        const endKeyIsNotRead =
          !endValue ||
          (endValue as Buffer).length === 0 ||
          TableUtils.lessThan(lastRowKey as string, endValue as string);
        if (startKeyIsRead) {
          if (endKeyIsNotRead) {
            // EndKey is not read, reset the range to start from lastRowKey open
            range.start = {
              value: lastRowKey,
              inclusive: false,
            };
          } else {
            // EndKey is read, remove this range
            ranges.splice(index, 1);
          }
        }
      }

      // Remove rowKeys already read.
      rowKeys = rowKeys.filter(rowKey =>
        TableUtils.greaterThan(rowKey, lastRowKey as string),
      );

      // If there was a row limit in the original request and
      // we've already read all the rows, end the stream and
      // do not retry.
      if (hasLimit && rowsLimit === rowsRead) {
        userStream.end();
        return;
      }
      // If all the row keys and ranges are read, end the stream
      // and do not retry.
      if (rowKeys.length === 0 && ranges.length === 0) {
        userStream.end();
        return;
      }
    }

    // Create the new reqOpts
    reqOpts.rows = {};

    // TODO: preprocess all the keys and ranges to Bytes
    reqOpts.rows.rowKeys = rowKeys.map(
      Mutation.convertToBytes,
    ) as {} as Uint8Array[];

    reqOpts.rows.rowRanges = ranges.map(range =>
      Filter.createRange(
        range.start as BoundData,
        range.end as BoundData,
        'Key',
      ),
    );

    if (filter) {
      reqOpts.filter = filter;
    }

    if (hasLimit) {
      reqOpts.rowsLimit = rowsLimit - rowsRead;
    }

    const gaxOpts = populateAttemptHeader(numRequestsMade, options.gaxOptions);

    const requestStream = table.bigtable.request({
      client: 'BigtableClient',
      method: 'readRows',
      reqOpts,
      gaxOpts,
      retryOpts,
    });
    requestStream.on('data', () => {
      // This handler is necessary for recording firstResponseLatencies.
      metricsCollector.onResponse();
    });

    activeRequestStream = requestStream!;

    const toRowStream = new Transform({
      transform: (rowData: ChunkPushData, _, next) => {
        if (
          userCanceled ||
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (userStream as any)._writableState.ended
        ) {
          return next();
        }
        if (
          (rowData as ChunkPushLastScannedRowData).eventType ===
          DataEvent.LAST_ROW_KEY_UPDATE
        ) {
          /**
           * If the data is the chunk transformer communicating that the
           * lastScannedRow was received then this message is passed along
           * to the user stream to update the lastRowKey.
           */
          next(null, rowData);
        } else {
          /**
           * If the data is just regular rows being pushed from the
           * chunk transformer then the rows are encoded so that they
           * can be consumed by the user stream.
           */
          const row = table.row((rowData as Row).key as string);
          row.data = (rowData as Row).data;
          next(null, row);
        }
      },
      objectMode: true,
    });

    rowStream = pumpify.obj([requestStream, chunkTransformer, toRowStream]);

    metricsCollector.wrapRequest(requestStream);
    rowStream
      .on('error', (error: ServiceError) => {
        rowStreamUnpipe(rowStream, userStream);
        activeRequestStream = null;
        if (IGNORED_STATUS_CODES.has(error.code)) {
          // We ignore the `cancelled` "error", since we are the ones who cause
          // it when the user calls `.abort()`.
          userStream.end();
          metricsCollector.onOperationComplete(
            error.code,
            userStream.getTotalDurationMs(),
          );
          return;
        }
        numConsecutiveErrors++;
        numRequestsMade++;
        if (
          numConsecutiveErrors <= maxRetries &&
          (RETRYABLE_STATUS_CODES.has(error.code) || isRstStreamError(error)) &&
          !(timeout && timeout < new Date().getTime() - callTimeMillis)
        ) {
          const backOffSettings =
            options.gaxOptions?.retry?.backoffSettings ||
            DEFAULT_BACKOFF_SETTINGS;
          const nextRetryDelay = getNextDelay(
            numConsecutiveErrors,
            backOffSettings,
          );
          metricsCollector.onAttemptComplete(error.code);
          retryTimer = setTimeout(makeNewRequest, nextRetryDelay);
        } else {
          if (
            !error.code &&
            error.message === 'The client has already been closed.'
          ) {
            //
            // The TestReadRows_Generic_CloseClient conformance test requires
            // a grpc code to be present when the client is closed. The
            // appropriate code for a closed client is CANCELLED since the
            // user actually cancelled the call by closing the client.
            //
            error.code = grpc.status.CANCELLED;
          }
          metricsCollector.onOperationComplete(
            error.code,
            userStream.getTotalDurationMs(),
          );
          userStream.emit('error', error);
        }
      })
      .on('data', _ => {
        // Reset error count after a successful read so the backoff
        // time won't keep increasing when as stream had multiple errors
        numConsecutiveErrors = 0;
      })
      .on('end', () => {
        activeRequestStream = null;
        metricsCollector.onOperationComplete(
          grpc.status.OK,
          userStream.getTotalDurationMs(),
        );
      });
    rowStreamPipe(rowStream, userStream);
  };

  makeNewRequest();
  return userStream;
}

// Retry on "received rst stream" errors
export function isRstStreamError(error: ServiceError): boolean {
  if (error.code === 13 && error.message) {
    const error_message = (error.message || '').toLowerCase();
    return (
      error.code === 13 &&
      (error_message.includes('rst_stream') ||
        error_message.includes('rst stream'))
    );
  }
  return false;
}
