// Copyright 2020 Google LLC
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

import {expect} from 'chai';
import * as extend from 'extend';
import {afterEach, beforeEach, describe, it} from 'mocha';
import {firestore, google} from '../protos/firestore_v1_proto_api';
import {Firestore, QuerySnapshot, Timestamp} from '../src';
import {
  bundleToElementArray,
  createInstance,
  DATABASE_ROOT,
  verifyInstance,
} from './util/helpers';

import IBundleElement = firestore.IBundleElement;
import IBundleMetadata = firestore.IBundleMetadata;
import ITimestamp = google.protobuf.ITimestamp;

export const TEST_BUNDLE_ID = 'test-bundle';
const TEST_BUNDLE_VERSION = 1;

export function verifyMetadata(
  meta: IBundleMetadata,
  createTime: ITimestamp,
  totalDocuments: number,
  expectEmptyContent = false,
): void {
  if (!expectEmptyContent) {
    expect(parseInt(meta.totalBytes!.toString())).greaterThan(0);
  } else {
    expect(parseInt(meta.totalBytes!.toString())).to.equal(0);
  }
  expect(meta.id).to.equal(TEST_BUNDLE_ID);
  expect(meta.version).to.equal(TEST_BUNDLE_VERSION);
  expect(meta.totalDocuments).to.equal(totalDocuments);
  expect(meta.createTime).to.deep.equal(createTime);
}

describe('Bundle Builder', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(() => verifyInstance(firestore));

  // Tests the testing helper function bundleToElementArray works as expected.
  it('succeeds to read length prefixed json with testing function', async () => {
    const bundleString =
      '20{"a":"string value"}9{"b":123}26{"c":{"d":"nested value"}}';
    const elements = await bundleToElementArray(Buffer.from(bundleString));
    expect(elements).to.deep.equal([
      {a: 'string value'},
      {b: 123},
      {c: {d: 'nested value'}},
    ]);
  });

  it('succeeds with document snapshots', async () => {
    const bundle = firestore.bundle(TEST_BUNDLE_ID);
    const snap1 = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId/doc1`,
        fields: {foo: {stringValue: 'value'}, bar: {integerValue: '42'}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      // This should be the bundle read time.
      '2020-01-01T00:00:05.000000006Z',
      'json',
    );
    // Same document but older read time.
    const snap2 = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId/doc1`,
        fields: {foo: {stringValue: 'value'}, bar: {integerValue: '-42'}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      '1970-01-01T00:00:05.000000006Z',
      'json',
    );

    bundle.add(snap1);
    bundle.add(snap2);
    // Bundle is expected to be [bundleMeta, snap2Meta, snap2] because `snap1` is newer.
    const elements = await bundleToElementArray(bundle.build());
    expect(elements.length).to.equal(3);

    const meta = (elements[0] as IBundleElement).metadata;
    verifyMetadata(
      meta!,
      // `snap1.readTime` is the bundle createTime, because it is larger than `snap2.readTime`.
      snap1.readTime.toProto().timestampValue!,
      1,
    );

    // Verify doc1Meta and doc1Snap
    const docMeta = (elements[1] as IBundleElement).documentMetadata;
    const docSnap = (elements[2] as IBundleElement).document;
    expect(docMeta).to.deep.equal({
      name: snap1.toDocumentProto().name,
      readTime: snap1.readTime.toProto().timestampValue,
      exists: true,
    });
    expect(docSnap).to.deep.equal(snap1.toDocumentProto());
  });

  it('succeeds with query snapshots', async () => {
    const bundle = firestore.bundle(TEST_BUNDLE_ID);
    const snap = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId/doc1`,
        fields: {foo: {stringValue: 'value'}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      // This should be the bundle read time.
      '2020-01-01T00:00:05.000000006Z',
      'json',
    );
    const query = firestore
      .collection('collectionId')
      .where('value', '==', 'string');
    const querySnapshot = new QuerySnapshot(
      query,
      snap.readTime,
      1,
      () => [snap],
      () => [],
    );

    const newQuery = firestore.collection('collectionId');
    const newQuerySnapshot = new QuerySnapshot(
      newQuery,
      snap.readTime,
      1,
      () => [snap],
      () => [],
    );

    bundle.add('test-query', querySnapshot);
    bundle.add('test-query-new', newQuerySnapshot);
    // Bundle is expected to be [bundleMeta, namedQuery, newNamedQuery, snapMeta, snap]
    const elements = await bundleToElementArray(bundle.build());
    expect(elements.length).to.equal(5);

    const meta = (elements[0] as IBundleElement).metadata;
    verifyMetadata(
      meta!,
      // `snap.readTime` is the bundle createTime, because it is larger than `snap2.readTime`.
      snap.readTime.toProto().timestampValue!,
      1,
    );

    // Verify named query
    const namedQuery = elements.find(
      e => e.namedQuery?.name === 'test-query',
    )!.namedQuery;
    const newNamedQuery = elements.find(
      e => e.namedQuery?.name === 'test-query-new',
    )!.namedQuery;
    expect(namedQuery).to.deep.equal({
      name: 'test-query',
      readTime: snap.readTime.toProto().timestampValue,
      bundledQuery: extend(
        true,
        {},
        {
          parent: query.toProto().parent,
          structuredQuery: query.toProto().structuredQuery,
        },
      ),
    });
    expect(newNamedQuery).to.deep.equal({
      name: 'test-query-new',
      readTime: snap.readTime.toProto().timestampValue,
      bundledQuery: extend(
        true,
        {},
        {
          parent: newQuery.toProto().parent,
          structuredQuery: newQuery.toProto().structuredQuery,
        },
      ),
    });

    // Verify docMeta and docSnap
    const docMeta = (elements[3] as IBundleElement).documentMetadata;
    const docSnap = (elements[4] as IBundleElement).document;
    docMeta?.queries?.sort();
    expect(docMeta).to.deep.equal({
      name: snap.toDocumentProto().name,
      readTime: snap.readTime.toProto().timestampValue,
      exists: true,
      queries: ['test-query', 'test-query-new'],
    });
    expect(docSnap).to.deep.equal(snap.toDocumentProto());
  });

  it('succeeds with multiple calls to build()', async () => {
    const bundle = firestore.bundle(TEST_BUNDLE_ID);
    const snap1 = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId/doc1`,
        fields: {foo: {stringValue: 'value'}, bar: {integerValue: '42'}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      // This should be the bundle read time.
      '2020-01-01T00:00:05.000000006Z',
      'json',
    );
    bundle.add(snap1);
    // Bundle is expected to be [bundleMeta, doc1Meta, doc1Snap].
    const elements = await bundleToElementArray(bundle.build());

    expect(elements.length).to.equal(3);

    const meta = (elements[0] as IBundleElement).metadata;
    verifyMetadata(
      meta!,
      // `snap1.readTime` is the bundle createTime, because it is larger than `snap2.readTime`.
      snap1.readTime.toProto().timestampValue!,
      1,
    );

    // Verify doc1Meta and doc1Snap
    const doc1Meta = (elements[1] as IBundleElement).documentMetadata;
    const doc1Snap = (elements[2] as IBundleElement).document;
    expect(doc1Meta).to.deep.equal({
      name: snap1.toDocumentProto().name,
      readTime: snap1.readTime.toProto().timestampValue,
      exists: true,
    });
    expect(doc1Snap).to.deep.equal(snap1.toDocumentProto());

    // Add another document
    const snap2 = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId/doc2`,
        fields: {foo: {stringValue: 'value'}, bar: {integerValue: '-42'}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      '1970-01-01T00:00:05.000000006Z',
      'json',
    );
    bundle.add(snap2);

    // Bundle is expected to be [bundleMeta, doc1Meta, doc1Snap, doc2Meta, doc2Snap].
    const newElements = await bundleToElementArray(bundle.build());

    expect(newElements.length).to.equal(5);
    const newMeta = (newElements[0] as IBundleElement).metadata;
    verifyMetadata(
      newMeta!,
      // `snap1.readTime` is the bundle createTime, because it is larger than `snap2.readTime`.
      snap1.readTime.toProto().timestampValue!,
      2,
    );
    expect(newElements.slice(1, 3)).to.deep.equal(elements.slice(1));

    // Verify doc2Meta and doc2Snap
    const doc2Meta = (newElements[3] as IBundleElement).documentMetadata;
    const doc2Snap = (newElements[4] as IBundleElement).document;
    expect(doc2Meta).to.deep.equal({
      name: snap2.toDocumentProto().name,
      readTime: snap2.readTime.toProto().timestampValue,
      exists: true,
    });
    expect(doc2Snap).to.deep.equal(snap2.toDocumentProto());
  });

  it('succeeds when nothing is added', async () => {
    const bundle = firestore.bundle(TEST_BUNDLE_ID);

    // `elements` is expected to be [bundleMeta].
    const elements = await bundleToElementArray(bundle.build());
    expect(elements.length).to.equal(1);

    const meta = (elements[0] as IBundleElement).metadata;
    verifyMetadata(
      meta!,
      new Timestamp(0, 0).toProto().timestampValue!,
      0,
      true,
    );
  });

  it('handles identical document id from different collections', async () => {
    const bundle = firestore.bundle(TEST_BUNDLE_ID);
    const snap1 = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId_A/doc1`,
        fields: {foo: {stringValue: 'value'}, bar: {integerValue: '42'}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      // This should be the bundle read time.
      '2020-01-01T00:00:05.000000006Z',
      'json',
    );
    // Same document id but different collection
    const snap2 = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId_B/doc1`,
        fields: {foo: {stringValue: 'value'}, bar: {integerValue: '-42'}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      '1970-01-01T00:00:05.000000006Z',
      'json',
    );

    bundle.add(snap1);
    bundle.add(snap2);
    // Bundle is expected to be [bundleMeta, snap1Meta, snap1, snap2Meta, snap2] because `snap1` is newer.
    const elements = await bundleToElementArray(bundle.build());
    expect(elements.length).to.equal(5);

    const meta = (elements[0] as IBundleElement).metadata;
    verifyMetadata(
      meta!,
      // `snap1.readTime` is the bundle createTime, because it is larger than `snap2.readTime`.
      snap1.readTime.toProto().timestampValue!,
      2,
    );

    // Verify doc1Meta and doc1Snap
    let docMeta = (elements[1] as IBundleElement).documentMetadata;
    let docSnap = (elements[2] as IBundleElement).document;
    expect(docMeta).to.deep.equal({
      name: snap1.toDocumentProto().name,
      readTime: snap1.readTime.toProto().timestampValue,
      exists: true,
    });
    expect(docSnap).to.deep.equal(snap1.toDocumentProto());

    // Verify doc2Meta and doc2Snap
    docMeta = (elements[3] as IBundleElement).documentMetadata;
    docSnap = (elements[4] as IBundleElement).document;
    expect(docMeta).to.deep.equal({
      name: snap2.toDocumentProto().name,
      readTime: snap2.readTime.toProto().timestampValue,
      exists: true,
    });
    expect(docSnap).to.deep.equal(snap2.toDocumentProto());
  });
});

describe('Bundle Builder using BigInt', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance(undefined, {useBigInt: true}).then(
      firestoreInstance => {
        firestore = firestoreInstance;
      },
    );
  });

  it('succeeds with document snapshots with BigInt field', async () => {
    const bundle = firestore.bundle(TEST_BUNDLE_ID);
    const bigIntValue =
      BigInt(Number.MAX_SAFE_INTEGER) + BigInt(Number.MAX_SAFE_INTEGER);
    const snap = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId/doc1`,
        fields: {foo: {integerValue: bigIntValue.toString()}},
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      // This should be the bundle read time.
      '2020-01-01T00:00:05.000000006Z',
      'json',
    );
    bundle.add(snap);

    // Bundle is expected to be [bundleMeta, snapMeta, snap]
    const elements = await bundleToElementArray(bundle.build());
    // The point is to make sure BigInt gets encoded correctly into a string without losing
    // precision.
    expect(elements[2].document?.fields).to.deep.equal({
      foo: {integerValue: bigIntValue.toString()},
    });
  });

  afterEach(() => verifyInstance(firestore));
});
