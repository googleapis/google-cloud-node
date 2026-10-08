/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import {Readable} from 'stream';
import {PreciseDate} from '@google-cloud/precise-date';
import {
  DataType,
  Field,
  RecordBatch,
  RecordBatchReader,
  Schema as ArrowSchema,
  Table as ArrowTable,
  TimeUnit,
  Type,
  Vector,
} from 'apache-arrow';
import * as Big from 'big.js';
import {
  BigQuery,
  BigQueryRange,
  convertSchemaFieldValue,
  type IntegerTypeCastOptions,
  type Query,
  type QueryOptions,
  type QueryRowsCallback,
} from './bigquery';
import type {Job} from './job';
import type {RowMetadata} from './table';
import bigquery from './types';

export type ArrowQueryResponse = [ArrowTable, null, bigquery.IQueryResponse];

export interface ArrowDecodeOptions {
  wrapIntegers?: boolean | IntegerTypeCastOptions;
  parseJSON?: boolean;
}

export interface ArrowStreamContext {
  response?: bigquery.IQueryResponse;
  schema?: bigquery.ITableSchema;
  cleanups?: Array<() => void>;
}

type CellDecoder = (rowIndex: number) => unknown;

const toBytes = (data: string | Uint8Array): Uint8Array =>
  typeof data === 'string' ? Buffer.from(data, 'base64') : data;

export function parseArrowSchema(
  serializedSchema: string | Uint8Array,
): ArrowSchema {
  return RecordBatchReader.from(toBytes(serializedSchema)).open().schema!;
}

export function parseArrowRecordBatches(
  serializedSchema: string | Uint8Array,
  serializedRecordBatch?: string | Uint8Array | null,
): RecordBatch[] {
  const batch = serializedRecordBatch ? toBytes(serializedRecordBatch) : null;
  return batch?.byteLength
    ? [...RecordBatchReader.from([toBytes(serializedSchema), batch])]
    : [];
}

const ARROW_TYPE_MAP: Record<number, string> = {
  [Type.Date]: 'DATE',
  [Type.Time]: 'TIME',
  [Type.Binary]: 'BYTES',
  [Type.Int]: 'INT64',
};

function resolveBigQueryType(
  arrowField?: Field,
  bqField?: bigquery.ITableFieldSchema,
): string | undefined {
  if (bqField?.type) return bqField.type.toUpperCase();
  if (!arrowField) return undefined;

  const ext =
    arrowField.metadata.get('ARROW:extension:name') ||
    arrowField.metadata.get('google:sqlType');
  if (ext?.startsWith('google:sqlType:')) {
    const sqlType = ext.slice(15).toUpperCase();
    return sqlType === 'TIMESTAMP_PICOS' ? 'TIMESTAMP' : sqlType;
  }
  if (ext === 'range') return 'RANGE';

  const dt = arrowField.type;
  if (DataType.isTimestamp(dt)) return dt.timezone ? 'TIMESTAMP' : 'DATETIME';
  if (DataType.isDecimal(dt))
    return dt.bitWidth === 256 ? 'BIGNUMERIC' : 'NUMERIC';
  return ARROW_TYPE_MAP[dt.typeId];
}

const decodeSignedDecimalWords = (words: Uint32Array): bigint =>
  BigInt.asIntN(
    words.length * 32,
    words.reduceRight((acc, w) => (acc << 32n) + BigInt(w), 0n),
  );

const formatMicrosIso = (micros: bigint, isTimeOnly: boolean): string =>
  new PreciseDate(micros * 1000n)
    .toISOString()
    .slice(isTimeOnly ? 11 : 0, 26)
    .replace(/\.?0+$/, '');

function createColumnDecoder(
  vec: Vector,
  options?: ArrowDecodeOptions,
  arrowField?: Field,
  bqField?: bigquery.ITableFieldSchema,
): CellDecoder {
  const arrowType = arrowField?.type || vec.type;
  const chunk = vec.data[0];

  if (DataType.isList(arrowType)) {
    const childVec = vec.getChildAt(0);
    const decodeElem = childVec
      ? createColumnDecoder(
          childVec,
          options,
          arrowType.children[0],
          bqField && {...bqField, mode: 'NULLABLE'},
        )
      : () => null;
    const offsets = chunk?.valueOffsets;
    return r => {
      if (!vec.isValid(r) || !offsets) return null;
      const start = offsets[chunk.offset + r];
      return Array.from(
        {length: offsets[chunk.offset + r + 1] - start},
        (_, i) => decodeElem(start + i),
      );
    };
  }

  const bqType = resolveBigQueryType(arrowField, bqField);

  if (DataType.isStruct(arrowType)) {
    const children = (arrowType.children || []).flatMap((f, i) =>
      vec.getChildAt(i) && f?.name
        ? [
            [
              f.name,
              createColumnDecoder(
                vec.getChildAt(i)!,
                options,
                f,
                bqField?.fields?.[i],
              ),
            ] as const,
          ]
        : [],
    );
    const elemType =
      bqType === 'RANGE'
        ? bqField?.rangeElementType?.type ||
          resolveBigQueryType(arrowType.children?.[0]) ||
          'DATE'
        : undefined;
    return r => {
      if (!vec.isValid(r)) return null;
      const obj: Record<string, unknown> = {};
      for (let i = 0; i < children.length; i++) {
        obj[children[i][0]] = children[i][1](r);
      }
      return elemType ? new BigQueryRange(obj, elemType) : obj;
    };
  }

  if (bqType === 'TIMESTAMP') {
    const unit = DataType.isTimestamp(arrowType)
      ? arrowType.unit
      : TimeUnit.MICROSECOND;
    const scale =
      unit === TimeUnit.NANOSECOND
        ? 1n
        : unit === TimeUnit.MILLISECOND
          ? 1_000_000n
          : unit === TimeUnit.SECOND
            ? 1_000_000_000n
            : 1_000n;
    return r => {
      if (!vec.isValid(r)) return null;
      const raw = chunk?.values?.[chunk.offset + r];
      if (typeof raw === 'bigint') {
        return BigQuery.timestamp(new PreciseDate(raw * scale));
      }
      const val = vec.get(r);
      return BigQuery.timestamp(
        typeof val === 'string' ? new PreciseDate(val) : Number(val) / 1000,
      );
    };
  }

  if (bqType === 'BYTES') {
    return r => (vec.isValid(r) ? Buffer.from(vec.get(r)) : null);
  }

  if (bqType) {
    const field = {name: bqField?.name || arrowField?.name, type: bqType};
    const convOpts = {
      wrapIntegers: options?.wrapIntegers ?? false,
      parseJSON: options?.parseJSON,
    };
    const scale = DataType.isDecimal(arrowType)
      ? arrowType.scale
      : bqType === 'BIGNUMERIC'
        ? 38
        : 9;
    const divisor =
      (bqType === 'NUMERIC' || bqType === 'BIGNUMERIC') && scale > 0
        ? new Big(10).pow(scale)
        : null;

    return r => {
      if (!vec.isValid(r)) return null;
      let val = vec.get(r);
      if (bqType === 'DATETIME') {
        const raw = chunk?.values?.[chunk.offset + r];
        val =
          typeof raw === 'bigint' ? formatMicrosIso(raw, false) : String(val);
      } else if (bqType === 'TIME') {
        val =
          typeof val === 'bigint' ? formatMicrosIso(val, true) : String(val);
      } else if (bqType === 'DATE') {
        val =
          typeof val === 'number' || val instanceof Date
            ? new Date(val).toISOString().slice(0, 10)
            : String(val);
      } else if (bqType === 'NUMERIC' || bqType === 'BIGNUMERIC') {
        val =
          val instanceof Uint32Array
            ? decodeSignedDecimalWords(val).toString()
            : String(val);
      } else if (bqType !== 'JSON') {
        val = String(val);
      }
      const converted = convertSchemaFieldValue(field, val, convOpts);
      return divisor ? converted.div(divisor) : converted;
    };
  }

  return r => {
    const val = vec.get(r);
    return val === undefined ? null : val;
  };
}

export function deserializeArrowRows(
  batches: RecordBatch[],
  bqSchema?: bigquery.ITableSchema,
  options?: ArrowDecodeOptions,
): RowMetadata[] {
  const fields = bqSchema?.fields || [];
  return batches.flatMap(batch => {
    const cols = batch.schema.fields.map(
      (f, i) =>
        [
          f.name,
          createColumnDecoder(batch.getChildAt(i)!, options, f, fields[i]),
        ] as const,
    );
    return Array.from({length: batch.numRows}, (_, r) => {
      const row: RowMetadata = {};
      for (let i = 0; i < cols.length; i++) {
        row[cols[i][0]] = cols[i][1](r);
      }
      return row;
    });
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storageClients = new WeakMap<BigQuery, any>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getOrCreateStorageReadClient(bq: BigQuery): any {
  let client = storageClients.get(bq);
  if (!client) {
    let BigQueryReadClient;
    try {
      const pkg = require('@google-cloud/bigquery-storage');
      BigQueryReadClient = pkg.v1?.BigQueryReadClient || pkg.BigQueryReadClient;
    } catch (err) {
      throw new Error(
        'Multi-page Apache Arrow queries require "@google-cloud/bigquery-storage". ' +
          `Please install it with "npm install @google-cloud/bigquery-storage". (${(err as Error).message})`,
      );
    }
    client = new BigQueryReadClient({
      auth: bq.authClient,
      universeDomain: bq.universeDomain,
    });
    storageClients.set(bq, client);
  }
  return client;
}

export async function* iterateArrowBatches(
  bq: BigQuery,
  queryOrOptions?: Query | string,
  options: QueryOptions = {},
  ctx: ArrowStreamContext = {},
): AsyncGenerator<RecordBatch> {
  const baseQuery: Query =
    typeof queryOrOptions === 'string'
      ? {query: queryOrOptions}
      : {...queryOrOptions};
  const arrowQuery: Query = {
    ...baseQuery,
    queryResultsFormat: 'ARROW',
  };

  let job: Job | undefined;
  let offset = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queryReq = (bq as any).buildQueryRequest_(arrowQuery, options);
  if (queryReq) {
    const res: bigquery.IQueryResponse = await new Promise(
      (resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (bq as any).runJobsQuery(
          queryReq,
          (err: Error | null, j: Job, r: bigquery.IQueryResponse) => {
            if (err) {
              reject(err);
              return;
            }
            job = j;
            resolve(r);
          },
        );
      },
    );
    ctx.response = res;
    ctx.schema = res.schema;

    if (res.jobComplete) {
      if (res.arrowSchema?.serializedSchema) {
        const page1Batches = parseArrowRecordBatches(
          res.arrowSchema.serializedSchema,
          res.arrowRecordBatch?.serializedRecordBatch,
        );
        const page1RowCount = Number(
          (res as bigquery.IQueryResponse & {pageRowCount?: string | number})
            .pageRowCount ??
            page1Batches.reduce((sum, b) => sum + b.numRows, 0),
        );
        for (const batch of page1Batches) {
          yield batch;
        }
        if (!res.pageToken) {
          return;
        }
        offset = page1RowCount;
      } else if (!res.pageToken) {
        return;
      }
    } else if (queryReq.timeoutMs) {
      throw new Error(
        `The query did not complete before ${queryReq.timeoutMs}ms`,
      );
    }
  } else {
    const [createdJob, resp] = await new Promise<[Job, bigquery.IJob]>(
      (resolve, reject) => {
        bq.createQueryJob(arrowQuery, (err, j, r) => {
          if (err) {
            reject(err);
            return;
          }
          resolve([j!, r!]);
        });
      },
    );
    job = createdJob;
    ctx.response = (job.metadata || resp) as bigquery.IQueryResponse;
    if (arrowQuery.dryRun) {
      return;
    }
  }

  const projectId =
    bq.projectId && bq.projectId !== '{{projectId}}'
      ? bq.projectId
      : await bq.getProjectId();
  const arrowSerializationOptions =
    arrowQuery.arrowSerializationOptions ||
    (options as Query).arrowSerializationOptions;
  const grpcStream = getOrCreateStorageReadClient(bq).readRows({
    readStream: `projects/${projectId}/locations/${job!.location || bq.location || 'US'}/jobs/${job!.id}/streams/_default`,
    offset,
    ...(arrowSerializationOptions && {arrowSerializationOptions}),
  });
  ctx.cleanups?.push(() => grpcStream?.cancel?.());

  let serializedSchema: Uint8Array | string | undefined;
  let rowsRead = offset;
  const responseMeta = (ctx.response ||= {});

  try {
    for await (const item of grpcStream) {
      if (item.totalRowCount !== undefined && item.totalRowCount !== null) {
        responseMeta.totalRows = String(item.totalRowCount);
      }
      serializedSchema ||= item.arrowSchema?.serializedSchema;
      if (item.arrowSchema && !responseMeta.arrowSchema) {
        responseMeta.arrowSchema = item.arrowSchema;
      }
      const rawBatch = item.arrowRecordBatch?.serializedRecordBatch;
      const batches =
        serializedSchema && rawBatch
          ? parseArrowRecordBatches(serializedSchema, rawBatch)
          : [];
      for (const batch of batches) {
        rowsRead += batch.numRows;
        if (Number(responseMeta.totalRows || 0) < rowsRead) {
          responseMeta.totalRows = String(rowsRead);
        }
        yield batch;
      }
    }
  } finally {
    grpcStream?.cancel?.();
  }
}

function attachStreamCleanups(
  stream: Readable,
  ctx: ArrowStreamContext,
): Readable {
  const origDestroy = stream._destroy.bind(stream);
  stream._destroy = (err, cb) => {
    ctx.cleanups?.forEach(fn => {
      try {
        fn();
      } catch {
        // Ignore cleanup errors so all registered cleanups run.
      }
    });
    origDestroy(err, cb);
  };
  return stream;
}

export function createArrowBatchStream(
  bq: BigQuery,
  options?: Query | string,
): Readable {
  const queryObj =
    typeof options === 'string' ? {query: options} : {...options};
  const ctx: ArrowStreamContext = {cleanups: []};
  const stream = Readable.from(
    iterateArrowBatches(
      bq,
      {
        ...queryObj,
        jobCreationMode: queryObj.jobCreationMode ?? 'JOB_CREATION_OPTIONAL',
      },
      {},
      ctx,
    ),
  );
  return attachStreamCleanups(stream, ctx);
}

export async function* iterateArrowRows(
  bq: BigQuery,
  query: string | Query,
  options: QueryOptions = {},
  ctx: ArrowStreamContext = {},
): AsyncGenerator<RowMetadata> {
  const decodeOpts: ArrowDecodeOptions =
    query && typeof query === 'object'
      ? {
          wrapIntegers: options.wrapIntegers ?? query.wrapIntegers,
          parseJSON: options.parseJSON ?? query.parseJSON,
        }
      : options;
  for await (const batch of iterateArrowBatches(bq, query, options, ctx)) {
    yield* deserializeArrowRows([batch], ctx.schema, decodeOpts);
  }
}

export function createArrowRowStream(
  bq: BigQuery,
  query: string | Query,
): Readable {
  const ctx: ArrowStreamContext = {cleanups: []};
  const stream = Readable.from(iterateArrowRows(bq, query, {}, ctx));
  return attachStreamCleanups(stream, ctx);
}

export function executeArrowRowsQuery(
  bq: BigQuery,
  query: string | Query,
  options: QueryOptions,
  callback: QueryRowsCallback,
): void {
  (async () => {
    const ctx: ArrowStreamContext = {};
    const rows: RowMetadata[] = [];
    for await (const row of iterateArrowRows(bq, query, options, ctx)) {
      rows.push(row);
    }
    const apiResponse = ctx.response || {};
    if (!Number(apiResponse.totalRows)) {
      apiResponse.totalRows = String(rows.length);
    }
    return {rows, apiResponse};
  })()
    .then(
      ({rows, apiResponse}) => callback(null, rows, null, apiResponse),
      err => callback(err as Error, null, null, null),
    )
    .catch(() => {});
}

export function executeQueryArrow(
  bq: BigQuery,
  optionsOrCallback?:
    Query | string | ((err: Error | null, ...args: unknown[]) => void),
  cb?: (
    err: Error | null,
    table?: ArrowTable,
    nextQuery?: null,
    apiResponse?: bigquery.IQueryResponse,
  ) => void,
): void {
  const options =
    typeof optionsOrCallback === 'function' ? undefined : optionsOrCallback;
  const callback = (
    typeof optionsOrCallback === 'function' ? optionsOrCallback : cb
  )!;

  (async () => {
    const queryObj =
      typeof options === 'string' ? {query: options} : {...options};
    const ctx: ArrowStreamContext = {};
    const batches: RecordBatch[] = [];
    for await (const batch of iterateArrowBatches(
      bq,
      {
        ...queryObj,
        jobCreationMode: queryObj.jobCreationMode ?? 'JOB_CREATION_OPTIONAL',
      },
      {},
      ctx,
    )) {
      batches.push(batch);
    }

    const apiResponse = ctx.response || {};
    const schema =
      batches[0]?.schema ??
      (apiResponse.arrowSchema?.serializedSchema
        ? parseArrowSchema(apiResponse.arrowSchema.serializedSchema)
        : undefined);
    const table = schema
      ? new ArrowTable(
          schema,
          batches.map(b => new RecordBatch(schema, b.data)),
        )
      : new ArrowTable();
    if (!Number(apiResponse.totalRows)) {
      apiResponse.totalRows = String(table.numRows);
    }
    return {table, apiResponse};
  })()
    .then(
      ({table, apiResponse}) => callback(null, table, null, apiResponse),
      err => callback(err as Error),
    )
    .catch(() => {});
}
