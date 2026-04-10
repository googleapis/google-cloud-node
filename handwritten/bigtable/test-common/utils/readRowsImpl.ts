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

import {protos} from '../../src';
import {GoogleError, Status} from 'google-gax';
import {
  ChunkGeneratorParameters,
  DebugLog,
  ReadRowsServiceParameters,
  ReadRowsWritableStream,
} from '../../test/utils/readRowsServiceParameters';
import {google} from '../../protos/protos';
import IRowRange = google.bigtable.v2.IRowRange;

// Generate documentation for this function
/** Pretty prints the request object.
 * @param request The request object to pretty print.
 * @param debugLog A function that logs debug messages.
 */
function prettyPrintRequest(
  request: protos.google.bigtable.v2.IReadRowsRequest,
  debugLog: DebugLog,
) {
  // pretty-printing important parts of the request.
  // doing it field by field because we want to apply .toString() to all key fields
  debugLog('received request: {');
  debugLog(`  tableName: "${request.tableName}",`);
  if (request.rows) {
    debugLog('  rows: {');
    if (request.rows.rowKeys) {
      debugLog('    rowKeys: [');
      for (const key of request.rows.rowKeys) {
        debugLog(`      "${key.toString()}",`);
      }
      debugLog('    ],');
    }
    if (request.rows.rowRanges) {
      debugLog('    rowRanges: [');
      for (const range of request.rows.rowRanges) {
        debugLog('      {');
        if (range.startKeyOpen) {
          debugLog(`        startKeyOpen: "${range.startKeyOpen.toString()}",`);
        }
        if (range.startKeyClosed) {
          debugLog(
            `        startKeyClosed: "${range.startKeyClosed.toString()}",`,
          );
        }
        if (range.endKeyOpen) {
          debugLog(`        endKeyOpen: "${range.endKeyOpen.toString()}",`);
        }
        if (range.endKeyClosed) {
          debugLog(`        endKeyClosed: "${range.endKeyClosed.toString()}",`);
        }
        debugLog('      },');
      }
      debugLog('    ],');
    }
    debugLog('  },');
  }
  debugLog('}');
}

/** Generates chunks for rows in a fake table that match the provided RowSet.
 * The fake table contains monotonically increasing zero padded rows
 * in the range [keyFrom, keyTo).
 * @param chunkGeneratorParameters The parameters for generating chunks.
 * @param debugLog The logging function for printing test output.
 * @returns {protos.google.bigtable.v2.ReadRowsResponse.ICellChunk[]} The generated chunks.
 */
function generateChunks(
  chunkGeneratorParameters: ChunkGeneratorParameters,
  debugLog: DebugLog,
): protos.google.bigtable.v2.ReadRowsResponse.ICellChunk[] {
  const keyFrom = chunkGeneratorParameters.keyFrom;
  const keyTo = chunkGeneratorParameters.keyTo;
  debugLog(`generating chunks from ${keyFrom} to ${keyTo}`);

  const chunks: protos.google.bigtable.v2.ReadRowsResponse.ICellChunk[] = [];
  for (let key = keyFrom; key < keyTo; ++key) {
    // the keys must be increasing, but we also want to keep them readable,
    // so we'll use keys 00000000, 00000001, 00000002, etc. stored as Buffers
    const binaryKey = Buffer.from(key.toString().padStart(8, '0'));
    debugLog(`generating chunks for ${key}`);
    const rowKey = binaryKey.toString('base64');
    let remainingBytes = chunkGeneratorParameters.valueSize;
    let chunkCounter = 0;
    while (remainingBytes > 0) {
      debugLog(`  remaining bytes: ${remainingBytes}`);
      const chunk: protos.google.bigtable.v2.ReadRowsResponse.ICellChunk = {};
      if (chunkCounter === 0) {
        chunk.rowKey = rowKey;
        chunk.familyName = {
          value: 'family',
        };
        chunk.qualifier = {
          value: Buffer.from('qualifier').toString('base64'),
        };
      }
      const thisChunkSize = Math.min(
        chunkGeneratorParameters.chunkSize,
        remainingBytes,
      );
      remainingBytes -= thisChunkSize;
      const value = Buffer.from('a'.repeat(remainingBytes)).toString('base64');
      chunk.value = value;
      if (remainingBytes === 0) {
        debugLog(`  setting commit flag for rowKey ${key}`);
        chunk.commitRow = true;
      }
      chunks.push(chunk);
      ++chunkCounter;
    }
  }
  debugLog(`generated ${chunks.length} chunks between ${keyFrom} and ${keyTo}`);
  return chunks;
}

/** Checks if the given key is in the provided RowSet.
 * @param stringKey The key to check.
 * @param rowSet The RowSet to check against.
 * @returns {boolean} True if the key is in the RowSet, false otherwise.
 */
function isKeyInRowSet(
  stringKey: string,
  rowSet?: protos.google.bigtable.v2.IRowSet | null,
): boolean {
  if (!rowSet) {
    return true;
  }
  // primitive support for row ranges
  if (rowSet.rowRanges || rowSet.rowKeys) {
    for (const requestKey of rowSet.rowKeys ?? []) {
      if (stringKey === requestKey.toString()) {
        return true;
      }
    }
    for (const range of rowSet.rowRanges ?? []) {
      let startOk = true;
      let endOk = true;
      if (range.startKeyOpen && range.startKeyOpen.toString() >= stringKey) {
        startOk = false;
      }
      if (range.startKeyClosed && range.startKeyClosed.toString() > stringKey) {
        startOk = false;
      }
      if (range.endKeyOpen && range.endKeyOpen.toString() <= stringKey) {
        endOk = false;
      }
      if (range.endKeyClosed && range.endKeyClosed.toString() < stringKey) {
        endOk = false;
      }
      if (startOk && endOk) {
        return true;
      }
    }
    return false;
  }
  return true;
}

/** Gets the key value for the given property specified in the request.
 * @param request The request object to get the key value from.
 * @param property The property from the request to get the value from.
 * @returns {string | undefined} The key value from the request.
 */
function getKeyValue(
  request: protos.google.bigtable.v2.IReadRowsRequest,
  property: keyof IRowRange,
) {
  if (
    request?.rows?.rowRanges &&
    request?.rows?.rowRanges[0] &&
    request?.rows?.rowRanges[0][property]?.toString()
  ) {
    return request?.rows?.rowRanges[0][property]?.toString();
  }
  return undefined;
}

/** Gets the key from the request object.
 * @param stream The stream object to get the key from.
 * @param keySelectionParameters The parameters for selecting the key.
 * @returns {number} The selected key for generating chunks
 */
function getSelectedKey(
  request: protos.google.bigtable.v2.IReadRowsRequest,
  keySelectionParameters: {
    keyOpenProperty: keyof IRowRange;
    keyClosedProperty: keyof IRowRange;
    defaultKey?: number;
  },
) {
  const keyRequestOpen = getKeyValue(
    request,
    keySelectionParameters.keyOpenProperty,
  );
  const keyRequestClosed = getKeyValue(
    request,
    keySelectionParameters.keyClosedProperty,
  );
  const defaultKey = keySelectionParameters.defaultKey;
  return defaultKey === undefined
    ? keyRequestClosed === undefined
      ? parseInt(keyRequestOpen as string) + 1
      : parseInt(keyRequestClosed as string)
    : defaultKey;
}

/** Generates chunks for rows in a fake table that match the provided RowSet.
 * The fake table contains monotonically increasing zero padded rows
 * in the range [keyFrom, keyTo).
 * @param request The request object to generate chunks from.
 * @param serviceParameters The parameters for generating chunks.
 * @param debugLog A function that logs debug messages.
 * @returns {protos.google.bigtable.v2.ReadRowsResponse.ICellChunk[]} The generated chunks.
 */
export function generateChunksFromRequest(
  request: protos.google.bigtable.v2.IReadRowsRequest,
  serviceParameters: ReadRowsServiceParameters,
) {
  return generateChunks(
    {
      keyFrom: getSelectedKey(request, {
        keyOpenProperty: 'startKeyOpen',
        keyClosedProperty: 'startKeyClosed',
        defaultKey: serviceParameters.keyFrom,
      }),
      keyTo: getSelectedKey(request, {
        keyOpenProperty: 'endKeyOpen',
        keyClosedProperty: 'endKeyClosed',
        defaultKey: serviceParameters.keyTo,
      }),
      chunkSize: serviceParameters.chunkSize,
      valueSize: serviceParameters.valueSize,
    },
    serviceParameters.debugLog,
  );
}

/** A class that handles the ReadRows request.
 * @param stream The stream object that is passed into the request.
 * @param debugLog A function that logs debug messages.
 */
class ReadRowsRequestHandler {
  public cancelled: boolean;
  public stopWaiting: () => void;
  constructor(
    readonly stream: ReadRowsWritableStream,
    readonly debugLog: DebugLog,
  ) {
    this.cancelled = false;
    this.stopWaiting = () => {};
  }

  /** Sends the response object to the stream.
   * @param response The response object to send.
   */
  async sendResponse(
    response: protos.google.bigtable.v2.IReadRowsResponse,
  ): Promise<void> {
    // an asynchronous function to write a response object to stream, reused several times below.
    // captures `cancelled` variable
    return new Promise<void>(resolve => {
      const debugLog = this.debugLog;
      const stream = this.stream;
      setTimeout(async () => {
        if (this.cancelled) {
          resolve();
          return;
        }
        const canSendMore = stream.write(response);
        if (response.chunks && response.chunks.length > 0) {
          debugLog(`sent ${response.chunks.length} chunks`);
        }
        // Log a message if the lastScannedRowKey is provided.
        if (response.lastScannedRowKey) {
          const binaryKey = Buffer.from(
            response.lastScannedRowKey as string,
            'base64',
          );
          const stringKey = binaryKey.toString();
          debugLog(`sent lastScannedRowKey = ${stringKey}`);
        }
        if (!canSendMore) {
          // Before doing any more writing with the stream, drain the stream.
          debugLog('awaiting for back pressure');
          await new Promise<void>(resolve => {
            this.stopWaiting = resolve;
            stream.once('drain', resolve);
          });
        }
        resolve();
      }, 0);
    });
  }
}

/** Implementation of the server streaming ReadRows call.
 * The implementation returns monotonically increasing zero padded rows
 * in the range [keyFrom, keyTo) if they are provided. Instances of this object
 * are used to store data that needs to be shared between multiple requests.
 * For instance, the service ignores the errorAfterChunkNo value after the
 * service has already emitted an error.
 *
 * @param serviceParameters The parameters for the implementation.
 */
export class ReadRowsImpl {
  private errorAfterChunkNo?: number;

  /**
   * Constructor for creating the ReadRows service. Constructor is private to
   * encourage use of createService with the factory pattern to restrict the
   * way that the service is created for better encapsulation.
   *
   * @param serviceParameters The parameters for creating the service
   * @private
   */
  private constructor(readonly serviceParameters: ReadRowsServiceParameters) {
    this.errorAfterChunkNo = serviceParameters.errorAfterChunkNo;
  }

  /**
    Factory method that returns an implementation of the server handling streaming
    ReadRows calls that would return monotonically increasing zero padded rows
    in the range [keyFrom, keyTo). The returned implementation can be passed to
    gRPC server.
    @param serviceParameters The parameters for creating the service
  */
  static createService(serviceParameters: ReadRowsServiceParameters) {
    return async (stream: ReadRowsWritableStream): Promise<void> => {
      await new ReadRowsImpl(serviceParameters).handleRequest(stream);
    };
  }

  /** Handles the ReadRows request.
   * @param stream The stream object that is passed into the request.
   */
  private async handleRequest(stream: ReadRowsWritableStream) {
    const debugLog = this.serviceParameters.debugLog;
    const hook = this.serviceParameters.hook;
    if (hook) {
      hook(stream.request);
    }

    prettyPrintRequest(stream.request, debugLog);
    const readRowsRequestHandler = new ReadRowsRequestHandler(stream, debugLog);
    stream.on('cancelled', () => {
      debugLog('gRPC server received cancel()');
      readRowsRequestHandler.cancelled = true;
      readRowsRequestHandler.stopWaiting();
      stream.emit('error', new Error('Cancelled'));
    });
    const chunks = generateChunksFromRequest(
      stream.request,
      this.serviceParameters,
    );
    await this.sendAllChunks(readRowsRequestHandler, chunks);
  }

  /** Sends all chunks to the stream.
   * @param readRowsRequestHandler The handler for the request.
   * @param chunks The chunks to send.
   */
  private async sendAllChunks(
    readRowsRequestHandler: ReadRowsRequestHandler,
    chunks: protos.google.bigtable.v2.ReadRowsResponse.ICellChunk[],
  ) {
    const stream = readRowsRequestHandler.stream;
    const debugLog = readRowsRequestHandler.debugLog;
    const deadlineExceededError = this.serviceParameters.deadlineExceededError;

    let chunksSent = 0;
    let lastScannedRowKey: string | undefined;
    let currentResponseChunks: protos.google.bigtable.v2.ReadRowsResponse.ICellChunk[] =
      [];
    let chunkIdx = 0;
    let skipThisRow = false;

    for (const chunk of chunks) {
      if (readRowsRequestHandler.cancelled) {
        break;
      }

      if (chunk.rowKey) {
        const binaryKey = Buffer.from(chunk.rowKey as string, 'base64');
        const stringKey = binaryKey.toString();

        debugLog(`starting row with key ${stringKey}`);
        if (isKeyInRowSet(stringKey, stream.request.rows)) {
          skipThisRow = false;
        } else {
          debugLog(
            `skipping row with key ${stringKey} because it's out of requested range or keys`,
          );
          skipThisRow = true;
          lastScannedRowKey = chunk.rowKey as string;
        }
      }

      if (chunk.commitRow) {
        debugLog('commit row');
      }

      if (!skipThisRow) {
        currentResponseChunks.push(chunk);
        ++chunkIdx;
      }

      if (
        currentResponseChunks.length ===
          this.serviceParameters.chunksPerResponse ||
        chunkIdx === this.errorAfterChunkNo ||
        // if we skipped a row and set lastScannedRowKey, dump everything and send a separate message with lastScannedRowKey
        lastScannedRowKey ||
        deadlineExceededError
      ) {
        const response: protos.google.bigtable.v2.IReadRowsResponse = {
          chunks: currentResponseChunks,
        };
        chunksSent += currentResponseChunks.length;
        await readRowsRequestHandler.sendResponse(response);
        currentResponseChunks = [];

        if (chunkIdx === this.errorAfterChunkNo) {
          debugLog(`sending error after chunk #${chunkIdx}`);
          this.errorAfterChunkNo = undefined; // do not send error for the second time
          const error = new GoogleError('Uh oh');
          error.code = Status.ABORTED;
          stream.emit('error', error);
          readRowsRequestHandler.cancelled = true;
          break;
        }

        if (deadlineExceededError) {
          debugLog('sending deadline exceeded error');
          const error = new GoogleError('Deadline exceeded');
          error.code = Status.DEADLINE_EXCEEDED;
          stream.emit('error', error);
          readRowsRequestHandler.cancelled = true;
          break;
        }
      }

      if (lastScannedRowKey) {
        const response: protos.google.bigtable.v2.IReadRowsResponse = {
          lastScannedRowKey,
        };
        await readRowsRequestHandler.sendResponse(response);
        lastScannedRowKey = undefined;
      }
    }
    if (!readRowsRequestHandler.cancelled && currentResponseChunks.length > 0) {
      const response: protos.google.bigtable.v2.IReadRowsResponse = {
        chunks: currentResponseChunks,
        lastScannedRowKey,
      };
      chunksSent += currentResponseChunks.length;
      await readRowsRequestHandler.sendResponse(response);
    }
    debugLog(`in total, sent ${chunksSent} chunks`);
    stream.end();
  }
}
