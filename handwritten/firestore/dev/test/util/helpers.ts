// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  DocumentData,
  Settings,
  SetOptions,
  PartialWithFieldValue,
} from '@google-cloud/firestore';

import {expect} from 'chai';
import * as extend from 'extend';
import {JSONStreamIterator} from 'length-prefixed-json-stream';
import {Duplex, PassThrough} from 'stream';
import * as through2 from 'through2';
import {firestore} from '../../protos/firestore_v1_proto_api';
import type {grpc} from 'google-gax';
import * as proto from '../../protos/firestore_v1_proto_api';
import * as v1 from '../../src/v1';
import {Firestore, QueryDocumentSnapshot} from '../../src';
import {ClientPool} from '../../src/pool';
import {GapicClient} from '../../src/types';

import api = proto.google.firestore.v1;

let SSL_CREDENTIALS: grpc.ChannelCredentials | null = null;
if (!isPreferRest()) {
  const grpc = require('google-gax').grpc;
  SSL_CREDENTIALS = grpc.credentials.createInsecure();
}

export const PROJECT_ID = 'test-project';
export const DATABASE_ROOT = `projects/${PROJECT_ID}/databases/(default)`;
export const COLLECTION_ROOT = `${DATABASE_ROOT}/documents/collectionId`;
export const DOCUMENT_NAME = `${COLLECTION_ROOT}/documentId`;

// Allow invalid API usage to test error handling.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InvalidApiUsage = any;

/** Defines the request handlers used by Firestore. */
export type ApiOverride = Partial<GapicClient>;

/**
 * Creates a new Firestore instance for testing. Request handlers can be
 * overridden by providing `apiOverrides`.
 *
 * @param apiOverrides An object with request handlers to override.
 * @param firestoreSettings Firestore Settings to configure the client.
 * @returns A Promise that resolves with the new Firestore client.
 */
export function createInstance(
  apiOverrides?: ApiOverride,
  firestoreSettings?: Settings,
): Promise<Firestore> {
  const initializationOptions = {
    ...{projectId: PROJECT_ID, sslCreds: SSL_CREDENTIALS!},
    ...firestoreSettings,
  };

  const firestore = new Firestore();
  firestore.settings(initializationOptions);

  firestore['_clientPool'] = new ClientPool<GapicClient>(
    /* concurrentRequestLimit= */ 1,
    /* maxIdleClients= */ 0,
    () =>
      ({
        ...new v1.FirestoreClient(initializationOptions),
        ...apiOverrides,
      }) as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  );

  return Promise.resolve(firestore);
}

/**
 * Verifies that all streams have been properly shutdown at the end of a test
 * run.
 */
export function verifyInstance(firestore: Firestore): Promise<void> {
  // Allow the setTimeout() call in _initializeStream to run before
  // verifying that all operations have finished executing.
  return new Promise<void>((resolve, reject) => {
    if (firestore['_clientPool'].opCount === 0) {
      resolve();
    } else {
      setTimeout(() => {
        const opCount = firestore['_clientPool'].opCount;
        if (opCount === 0) {
          resolve();
        } else {
          reject(
            new Error(
              `Firestore has ${opCount} unfinished operations executing.`,
            ),
          );
        }
      }, 10);
    }
  });
}

function write(
  document: api.IDocument,
  mask: api.IDocumentMask | null,
  transforms: api.DocumentTransform.IFieldTransform[] | null,
  precondition: api.IPrecondition | null,
): api.ICommitRequest {
  const writes: api.IWrite[] = [];
  const update = Object.assign({}, document);
  delete update.updateTime;
  delete update.createTime;
  writes.push({update});

  if (mask) {
    writes[0].updateMask = mask;
  }

  if (transforms) {
    writes[0].updateTransforms = transforms;
  }

  if (precondition) {
    writes[0].currentDocument = precondition;
  }

  return {writes};
}

export function updateMask(...fieldPaths: string[]): api.IDocumentMask {
  return fieldPaths.length === 0 ? {} : {fieldPaths};
}

export function set(opts: {
  document: api.IDocument;
  transforms?: api.DocumentTransform.IFieldTransform[];
  mask?: api.IDocumentMask;
}): api.ICommitRequest {
  return write(
    opts.document,
    opts.mask || null,
    opts.transforms || null,
    /* precondition= */ null,
  );
}

export function update(opts: {
  document: api.IDocument;
  transforms?: api.DocumentTransform.IFieldTransform[];
  mask?: api.IDocumentMask;
  precondition?: api.IPrecondition;
}): api.ICommitRequest {
  const precondition = opts.precondition || {exists: true};
  const mask = opts.mask || updateMask();
  return write(opts.document, mask, opts.transforms || null, precondition);
}

export function create(opts: {
  document: api.IDocument;
  transforms?: api.DocumentTransform.IFieldTransform[];
  mask?: api.IDocumentMask;
}): api.ICommitRequest {
  return write(opts.document, /* updateMask= */ null, opts.transforms || null, {
    exists: false,
  });
}

function value(value: string | api.IValue): api.IValue {
  if (typeof value === 'string') {
    return {
      stringValue: value,
    };
  } else {
    return value;
  }
}

export function retrieve(id: string): api.IBatchGetDocumentsRequest {
  return {documents: [`${DATABASE_ROOT}/documents/collectionId/${id}`]};
}

export function remove(
  id: string,
  precondition?: api.IPrecondition,
): api.ICommitRequest {
  const writes: api.IWrite[] = [
    {delete: `${DATABASE_ROOT}/documents/collectionId/${id}`},
  ];

  if (precondition) {
    writes[0].currentDocument = precondition;
  }

  return {writes};
}

export function found(
  dataOrId: api.IDocument | string,
): api.IBatchGetDocumentsResponse {
  return {
    found: typeof dataOrId === 'string' ? document(dataOrId) : dataOrId,
    readTime: {seconds: 5, nanos: 6},
  };
}

export function missing(id: string): api.IBatchGetDocumentsResponse {
  return {
    missing: `${DATABASE_ROOT}/documents/collectionId/${id}`,
    readTime: {seconds: 5, nanos: 6},
  };
}

export function document(
  id: string,
  field?: string,
  value?: string | api.IValue,
  ...fieldOrValues: Array<string | api.IValue>
): api.IDocument {
  const document: api.IDocument = {
    name: `${DATABASE_ROOT}/documents/collectionId/${id}`,
    fields: {},
    createTime: {seconds: 1, nanos: 2},
    updateTime: {seconds: 3, nanos: 4},
  };

  if (field !== undefined) {
    fieldOrValues = [field, value!].concat(fieldOrValues);

    for (let i = 0; i < fieldOrValues.length; i += 2) {
      const field = fieldOrValues[i] as string;
      const value = fieldOrValues[i + 1];

      if (typeof value === 'string') {
        document.fields![field] = {
          stringValue: value,
        };
      } else {
        document.fields![field] = value;
      }
    }
  }

  return document;
}

export function serverTimestamp(
  field: string,
): api.DocumentTransform.IFieldTransform {
  return {fieldPath: field, setToServerValue: 'REQUEST_TIME'};
}

export function incrementTransform(
  field: string,
  n: number,
): api.DocumentTransform.IFieldTransform {
  return {
    fieldPath: field,
    increment: Number.isInteger(n) ? {integerValue: n} : {doubleValue: n},
  };
}

export function minimumTransform(
  field: string,
  n: number
): api.DocumentTransform.IFieldTransform {
  return {
    fieldPath: field,
    minimum: Number.isInteger(n) ? {integerValue: n} : {doubleValue: n},
  };
}

export function maximumTransform(
  field: string,
  n: number
): api.DocumentTransform.IFieldTransform {
  return {
    fieldPath: field,
    maximum: Number.isInteger(n) ? {integerValue: n} : {doubleValue: n},
  };
}

export function arrayTransform(
  field: string,
  transform: 'appendMissingElements' | 'removeAllFromArray',
  ...values: Array<string | api.IValue>
): api.DocumentTransform.IFieldTransform {
  const fieldTransform: api.DocumentTransform.IFieldTransform = {
    fieldPath: field,
  };

  fieldTransform[transform] = {values: values.map(val => value(val))};

  return fieldTransform;
}

export function writeResult(count: number): api.IWriteResponse {
  const response: api.IWriteResponse = {
    commitTime: {
      nanos: 0,
      seconds: 1,
    },
  };

  if (count > 0) {
    response.writeResults = [];

    for (let i = 1; i <= count; ++i) {
      response.writeResults.push({
        updateTime: {
          nanos: i * 2,
          seconds: i * 2 + 1,
        },
      });
    }
  }

  return response;
}

export function requestEquals(
  actual: object | undefined,
  expected: object,
): void {
  expect(actual).to.not.be.undefined;

  // 'extend' removes undefined fields in the request object. The backend
  // ignores these fields, but we need to manually strip them before we compare
  // the expected and the actual request.
  actual = extend(true, {}, actual);
  const proto = Object.assign({database: DATABASE_ROOT}, expected);
  expect(actual).to.deep.eq(proto);
}

export function stream<T>(...elements: Array<T | Error>): Duplex {
  const stream = through2.obj();

  setImmediate(() => {
    for (const el of elements) {
      if (el instanceof Error) {
        stream.destroy(el);
        return;
      }
      stream.push(el);
    }
    stream.push(null);
  });

  return stream;
}

/**
 * Query streams with no results always at least emit a read time.
 */
export function emptyQueryStream(readTime = {seconds: 5, nanos: 6}) {
  return stream({readTime});
}

export function streamWithoutEnd<T>(...elements: Array<T | Error>): Duplex {
  const stream = through2.obj();

  setImmediate(() => {
    for (const el of elements) {
      if (el instanceof Error) {
        stream.destroy(el);
        return;
      }
      stream.push(el);
    }
  });

  return stream;
}

/** Creates a response as formatted by the GAPIC request methods.  */
export function response<T>(result: T): Promise<[T, unknown, unknown]> {
  return Promise.resolve([result, undefined, undefined]);
}

/** Sample user object class used in tests. */
export class Post {
  constructor(
    readonly title: string,
    readonly author: string,
  ) {}
  toString(): string {
    return this.title + ', by ' + this.author;
  }
}

/** Converts Post objects to and from Firestore in tests. */
export const postConverter = {
  toFirestore(post: Post): DocumentData {
    return {title: post.title, author: post.author};
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Post {
    const data = snapshot.data();
    return new Post(data.title, data.author);
  },
};

export const postConverterMerge = {
  toFirestore(
    post: PartialWithFieldValue<Post>,
    options?: SetOptions,
  ): DocumentData {
    if (options) {
      expect(post).to.not.be.an.instanceOf(Post);
    } else {
      expect(post).to.be.an.instanceof(Post);
    }
    const result: DocumentData = {};
    if (post.title) result.title = post.title;
    if (post.author) result.author = post.author;
    return result;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Post {
    const data = snapshot.data();
    return new Post(data.title, data.author);
  },
};

export async function bundleToElementArray(
  bundle: Buffer,
): Promise<Array<firestore.IBundleElement>> {
  const result: Array<firestore.IBundleElement> = [];
  const readable = new PassThrough();
  readable.end(bundle);
  const streamIterator = new JSONStreamIterator(readable);
  for await (const value of streamIterator) {
    result.push(value as firestore.IBundleElement);
  }
  return result;
}

/**
 * Reads the elements of an AsyncIterator.
 *
 * Example:
 *
 * const query = firestore.collection('collectionId');
 * const iterator = query.stream()[Symbol.asyncIterator]()
 *   as AsyncIterator<QueryDocumentSnapshot>;
 * return collect(iterator).then(snapshots => {
 *   expect(snapshots).to.have.length(2);
 * });
 *
 * @param iterator the iterator whose elements over which to iterate.
 * @returns a Promise that is fulfilled with the elements that were produced, or
 * is rejected with the cause of the first failed iteration.
 */
export async function collect<T, TReturn, TNext>(
  iterator: AsyncIterator<T, TReturn, TNext>,
): Promise<Array<T>> {
  const values: Array<T> = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const {done, value} = await iterator.next();
    if (done) {
      break;
    }
    values.push(value);
  }
  return values;
}

/**
 * Returns a value indicating whether preferRest is enabled
 * via the environment variable `FIRESTORE_PREFER_REST`.
 *
 * @returns `true` if preferRest is enabled via the environment variable `FIRESTORE_PREFER_REST`.
 */
export function isPreferRest(): boolean {
  return (
    process.env.FIRESTORE_PREFER_REST === '1' ||
    process.env.FIRESTORE_PREFER_REST === 'true'
  );
}

/**
 * Returns a value indicating whether the tests are running against an Enterprise edition DB
 */
export function isEnterprise(): boolean {
  return !!process.env.RUN_ENTERPRISE_TESTS;
}
