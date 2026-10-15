/*!
 * Copyright 2026 Google LLC
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

import {ResourceStream} from '@google-cloud/paginator';
import * as path from 'path';
import type {RecordBatch, Schema} from 'apache-arrow';
import type {
  BigQuery,
  JobsQueryCallback,
  Query,
  QueryOptions,
} from './bigquery';
import type bigquery from './types';

type ArrowModule = typeof import('apache-arrow');

/**
 * Internal BigQuery members accessed by the Arrow execution pipeline.
 */
interface BigQueryInternal {
  buildQueryRequest_(
    query: string | Query,
    options: QueryOptions,
  ): bigquery.IQueryRequest | undefined;
  runJobsQuery(
    req: bigquery.IQueryRequest,
    callback?: JobsQueryCallback,
  ): void | Promise<unknown>;
}

/**
 * A stream of Apache Arrow `RecordBatch` objects returned by
 * {@link BigQuery#createQueryArrowStream}.
 *
 * `queryId` and `jobReference` are set once BigQuery responds to the query,
 * before the first batch is emitted.
 */
export type ArrowRecordBatchStream = ResourceStream<RecordBatch> & {
  /** The query ID, when the query runs through `jobs.query`. */
  queryId?: string;
  /** The job reference, when BigQuery creates a job for the query. */
  jobReference?: bigquery.IJobReference;
};

/**
 * Loads `package.json` for an installed module, falling back to resolving the
 * package root directory when package `exports` block `./package.json`.
 *
 * @private
 */
function loadPackageJson(
  requireFn: NodeRequire,
  pkgName: string,
): {version?: string} {
  try {
    return requireFn(`${pkgName}/package.json`);
  } catch {
    const entryPath = (requireFn.resolve || require.resolve)(pkgName);
    return requireFn(path.join(path.dirname(entryPath), 'package.json'));
  }
}

/**
 * Requires a dependency and verifies its minimum major.minor version.
 *
 * @private
 */
function requireWithMinVersion<T = unknown>(
  requireFn: NodeRequire,
  pkgName: string,
  minMajor: number,
  minMinor = 0,
): T {
  const minVersion = `${minMajor}.${minMinor}.0`;
  let mod: T;
  let pkg: {version?: string};
  try {
    mod = requireFn(pkgName);
    pkg = loadPackageJson(requireFn, pkgName);
  } catch (err) {
    throw new Error(
      `Arrow support requires the "${pkgName}" package (>= ${minVersion}), ` +
        `but it could not be loaded: ${(err as Error).message}. ` +
        `Please install it using: npm install ${pkgName}`,
      {cause: err},
    );
  }

  const [majorStr, minorStr] = (pkg.version || '0.0.0').split('.');
  const major = Number.parseInt(majorStr, 10);
  const minor = Number.parseInt(minorStr, 10);
  const versionOk =
    !Number.isNaN(major) &&
    (major > minMajor ||
      (major === minMajor && !Number.isNaN(minor) && minor >= minMinor));

  if (!versionOk) {
    throw new Error(
      `Arrow support requires "${pkgName}" >= ${minVersion} (found ${pkg.version || 'unknown'}). ` +
        `Please upgrade using: npm install ${pkgName}@latest`,
    );
  }
  return mod;
}

/**
 * Verifies that `apache-arrow` (>= 21.0.0) and the optional
 * `@google-cloud/bigquery-storage` (>= 6.1.0) package are installed and meet
 * minimum version requirements.
 *
 * @private
 */
export function checkArrowDependencies(
  requireFn: NodeRequire = require,
): ArrowModule {
  const arrow = requireWithMinVersion<ArrowModule>(
    requireFn,
    'apache-arrow',
    21,
  );
  // TODO: Bump minimum version (here and in package.json) once
  // @google-cloud/bigquery-storage is released with
  // @google-cloud/bigquery-storage-api >= 0.5.0.
  requireWithMinVersion(requireFn, '@google-cloud/bigquery-storage', 6, 1);
  return arrow;
}

/**
 * Converts a serialized Arrow IPC payload (base64 string or Uint8Array) to a Buffer.
 *
 * @private
 */
function toBuffer(serialized: Uint8Array | string): Buffer {
  if (typeof serialized === 'string') {
    return Buffer.from(serialized, 'base64');
  }
  return Buffer.from(
    serialized.buffer,
    serialized.byteOffset,
    serialized.byteLength,
  );
}

/**
 * Creates a 0-row `RecordBatch` that preserves the provided Arrow `Schema`.
 *
 * @private
 */
export function createEmptyRecordBatch(
  arrow: ArrowModule,
  schema: Schema,
): RecordBatch {
  // Use makeBuilder so apache-arrow allocates valid 0-length typed array
  // buffers for every column (including nested Struct and List fields).
  const structData = arrow
    .makeBuilder({type: new arrow.Struct(schema.fields)})
    .finish()
    .flush();
  return new arrow.RecordBatch(schema, structData);
}

/**
 * Decodes serialized Arrow IPC schema and record batch bytes into `RecordBatch`
 * objects, emitting a single 0-row `RecordBatch` (preserving `schema` when
 * present) if no record batches are present.
 *
 * @private
 */
export function decodeArrowPayload(
  arrow: ArrowModule,
  serializedSchema?: Uint8Array | string,
  serializedRecordBatch?: Uint8Array | string,
): RecordBatch[] {
  if (!serializedSchema) {
    return [createEmptyRecordBatch(arrow, new arrow.Schema([]))];
  }
  // BigQuery returns the Arrow IPC Schema message and RecordBatch message as
  // separate fields; concatenate them into a single IPC stream for the reader.
  const schemaBuf = toBuffer(serializedSchema);
  const ipcBuf = serializedRecordBatch
    ? Buffer.concat([schemaBuf, toBuffer(serializedRecordBatch)])
    : schemaBuf;
  const reader = arrow.RecordBatchReader.from(ipcBuf);
  reader.open();
  const schema = reader.schema;
  const batches = [...reader];
  return batches.length > 0 ? batches : [createEmptyRecordBatch(arrow, schema)];
}

/**
 * Executes a query and returns a stream of `apache-arrow` `RecordBatch` objects.
 *
 * @private
 */
export function createQueryArrowStream_(
  bq: BigQuery,
  query?: Query | string,
): ArrowRecordBatchStream {
  const bqInternal = bq as unknown as BigQueryInternal;
  const stream = new ResourceStream<RecordBatch>(
    {},
    () => {},
  ) as ArrowRecordBatchStream;

  let started = false;
  stream._read = () => {
    if (started) {
      return;
    }
    started = true;

    let arrow: ArrowModule;
    try {
      arrow = checkArrowDependencies();
    } catch (err) {
      stream.destroy(err as Error);
      return;
    }

    if (!query || (typeof query === 'object' && !query.query)) {
      stream.destroy(new Error('A SQL query string is required.'));
      return;
    }

    const queryObj: Query = typeof query === 'string' ? {query} : {...query};

    if (queryObj.writeDisposition === 'WRITE_APPEND') {
      stream.destroy(
        new Error(
          'WRITE_APPEND is not supported with Arrow query results because reading ' +
            'the destination table via the Storage Read API would include pre-existing rows.',
        ),
      );
      return;
    }

    if (queryObj.destination) {
      // TODO: Support explicit destination tables via CreateReadSession.
      stream.destroy(
        new Error(
          'Explicit destination tables are not yet supported in createQueryArrowStream.',
        ),
      );
      return;
    }

    const queryReq = bqInternal.buildQueryRequest_(queryObj, {});
    if (!queryReq) {
      // TODO: Route queries that cannot use jobs.query through jobs.insert (createQueryJob).
      stream.destroy(
        new Error('Query configuration cannot be executed via jobs.query.'),
      );
      return;
    }

    // Default to JOB_CREATION_OPTIONAL unless overridden on the query or client.
    if (!queryReq.jobCreationMode) {
      queryReq.jobCreationMode = 'JOB_CREATION_OPTIONAL';
    }
    queryReq.queryResultsFormat = 'ARROW';

    void bqInternal.runJobsQuery(queryReq, (err, job, res) => {
      if (err) {
        stream.destroy(err);
        return;
      }

      if (res?.queryId) {
        stream.queryId = res.queryId;
      }
      if (res?.jobReference && job) {
        stream.jobReference = res.jobReference;
        stream.emit('job', job);
      }

      if (res?.jobComplete === false) {
        // TODO: Wait for unfinished jobs before streaming Arrow results.
        stream.destroy(
          new Error('Query did not complete within the jobs.query timeout.'),
        );
        return;
      }

      // pageRowCount and totalRows are returned as uint64 strings in REST JSON.
      // Also check pageToken: on cached multi-page results, jobs.query can
      // return totalRows "0" and omit pageRowCount while setting pageToken.
      if (
        Boolean(res?.pageToken) ||
        BigInt(res?.pageRowCount ?? 0) < BigInt(res?.totalRows ?? 0)
      ) {
        // TODO: Stream remaining rows via @google-cloud/bigquery-storage (streams/_default).
        stream.destroy(
          new Error(
            'Query results were not returned inline in the jobs.query response.',
          ),
        );
        return;
      }

      try {
        const batches = decodeArrowPayload(
          arrow,
          res?.arrowSchema?.serializedSchema,
          res?.arrowRecordBatch?.serializedRecordBatch,
        );
        for (const batch of batches) {
          if (stream._ended || stream.destroyed) {
            return;
          }
          stream.push(batch);
        }
        if (!stream._ended && !stream.destroyed) {
          stream.end();
        }
      } catch (parseErr) {
        stream.destroy(parseErr as Error);
      }
    });
  };

  return stream;
}
