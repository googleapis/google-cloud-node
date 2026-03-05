// Copyright 2020 Google LLC
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
  CollectionGroup,
  DocumentData,
  QueryPartition,
} from '@google-cloud/firestore';

import {afterEach, beforeEach, describe, it} from 'mocha';
import {expect, use} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as extend from 'extend';

import {google} from '../protos/firestore_v1_proto_api';
import {DocumentReference, Firestore} from '../src';
import {setTimeoutHandler} from '../src/backoff';
import {
  ApiOverride,
  createInstance,
  emptyQueryStream,
  stream,
  verifyInstance,
} from './util/helpers';

use(chaiAsPromised);

import api = google.firestore.v1;

const PROJECT_ID = 'test-project';
const DATABASE_ROOT = `projects/${PROJECT_ID}/databases/(default)`;
const DOC1 = `${DATABASE_ROOT}/documents/coll/doc1`;
const DOC2 = `${DATABASE_ROOT}/documents/coll/doc2`;

export function partitionQueryEquals(
  actual: api.IPartitionQueryRequest | undefined,
  partitionCount: number,
) {
  expect(actual).to.not.be.undefined;

  const query: api.IPartitionQueryRequest = {
    parent: DATABASE_ROOT + '/documents',
    structuredQuery: {
      from: [
        {
          allDescendants: true,
          collectionId: 'collectionId',
        },
      ],
      orderBy: [
        {
          direction: 'ASCENDING',
          field: {
            fieldPath: '__name__',
          },
        },
      ],
    },
    partitionCount,
  };

  // 'extend' removes undefined fields in the request object. The backend
  // ignores these fields, but we need to manually strip them before we compare
  // the expected and the actual request.
  actual = extend(true, {}, actual);
  expect(actual).to.deep.eq(query);
}

describe('Partition Query', () => {
  let firestore: Firestore;

  beforeEach(() => {
    setTimeoutHandler(setImmediate);
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(async () => {
    await verifyInstance(firestore);
    setTimeoutHandler(setTimeout);
  });

  async function getPartitions(
    collectionGroup: CollectionGroup<DocumentData>,
    desiredPartitionsCount: number,
  ): Promise<QueryPartition<DocumentData>[]> {
    const partitions: QueryPartition<DocumentData>[] = [];
    for await (const partition of collectionGroup.getPartitions(
      desiredPartitionsCount,
    )) {
      partitions.push(partition);
    }
    return partitions;
  }

  function verifyPartition(
    partition: FirebaseFirestore.QueryPartition,
    startAt: string | null,
    endBefore: string | null,
  ) {
    if (startAt) {
      expect(
        partition.startAt?.map(value => (value as DocumentReference).path),
      ).to.have.members([startAt]);
    } else {
      expect(partition.startAt).to.be.undefined;
    }

    if (endBefore) {
      expect(
        partition.endBefore?.map(value => (value as DocumentReference).path),
      ).to.have.members([endBefore]);
    } else {
      expect(partition.endBefore).to.be.undefined;
    }
  }

  it('requests one less than desired partitions', () => {
    const desiredPartitionsCount = 2;
    const cursorValue = {
      values: [{referenceValue: DOC1}],
    };

    const overrides: ApiOverride = {
      partitionQueryStream: request => {
        partitionQueryEquals(
          request,
          /* partitionCount= */ desiredPartitionsCount - 1,
        );

        return stream(cursorValue);
      },
    };
    return createInstance(overrides).then(async firestore => {
      const query = firestore.collectionGroup('collectionId');

      const result = await getPartitions(query, desiredPartitionsCount);
      expect(result.length).to.equal(2);
      expect(result[0].startAt).to.be.undefined;
      expect(result[0].endBefore).to.deep.equal(result[1].startAt);
      expect(result[1].endBefore).to.be.undefined;
    });
  });

  it('does not issue RPC if only a single partition is requested', () => {
    const desiredPartitionsCount = 1;

    return createInstance().then(async firestore => {
      const query = firestore.collectionGroup('collectionId');

      const result = await getPartitions(query, desiredPartitionsCount);
      expect(result.length).to.equal(1);
      expect(result[0].startAt).to.be.undefined;
      expect(result[0].endBefore).to.be.undefined;
    });
  });

  it('validates partition count', () => {
    return createInstance().then(firestore => {
      const query = firestore.collectionGroup('collectionId');
      return expect(getPartitions(query, 0)).to.eventually.be.rejectedWith(
        'Value for argument "desiredPartitionCount" must be within [1, Infinity] inclusive, but was: 0',
      );
    });
  });

  it('converts partitions to queries', () => {
    const desiredPartitionsCount = 3;

    const expectedStartAt: Array<undefined | api.IValue> = [
      undefined,
      {referenceValue: DOC1},
      {referenceValue: DOC2},
    ];
    const expectedEndBefore: Array<undefined | api.IValue> = [
      {referenceValue: DOC1},
      {referenceValue: DOC2},
      undefined,
    ];

    const overrides: ApiOverride = {
      partitionQueryStream: request => {
        partitionQueryEquals(
          request,
          /* partitionCount= */ desiredPartitionsCount - 1,
        );

        return stream<api.ICursor>(
          {
            values: [{referenceValue: DOC1}],
          },
          {
            values: [{referenceValue: DOC2}],
          },
        );
      },
      runQuery: request => {
        const startAt = expectedStartAt.shift();
        if (startAt) {
          expect(request!.structuredQuery!.startAt).to.deep.equal({
            before: true,
            values: [startAt],
          });
        } else {
          expect(request!.structuredQuery!.startAt).to.be.undefined;
        }

        const endBefore = expectedEndBefore.shift();
        if (endBefore) {
          expect(request!.structuredQuery!.endAt).to.deep.equal({
            before: true,
            values: [endBefore],
          });
        } else {
          expect(request!.structuredQuery!.endAt).to.be.undefined;
        }
        return emptyQueryStream();
      },
    };
    return createInstance(overrides).then(async firestore => {
      const query = firestore.collectionGroup('collectionId');

      const partitions = await getPartitions(query, desiredPartitionsCount);
      expect(partitions.length).to.equal(3);

      for (const partition of partitions) {
        await partition.toQuery().get();
      }
    });
  });

  it("doesn't truncate large numbers", () => {
    // JavaScript by default truncates large numbers. If partition data were
    // to include truncated numbers, using them as cursors could skip or
    // duplicate results. Note that the backend API currently only returns
    // DocumentReferences as partitions, but this may change in the future.
    const bigIntValue = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
    const desiredPartitionsCount = 2;

    const overrides: ApiOverride = {
      partitionQueryStream: request => {
        partitionQueryEquals(
          request,
          /* partitionCount= */ desiredPartitionsCount - 1,
        );

        return stream<api.ICursor>({
          values: [{integerValue: bigIntValue.toString()}],
        });
      },
      runQuery: request => {
        expect(
          request!.structuredQuery!.endAt!.values![0].integerValue,
        ).to.equal(bigIntValue.toString());
        return emptyQueryStream();
      },
    };
    return createInstance(overrides).then(async firestore => {
      const query = firestore.collectionGroup('collectionId');

      const result = await getPartitions(query, desiredPartitionsCount);
      expect(result.length).to.equal(2);

      // If the user uses the cursor directly, we follow the `useBigInt`
      // setting. By default, we return a truncated number.
      expect(result[0].endBefore![0]).to.be.a('number');
      expect(result[1].startAt![0]).to.be.a('number');
      return result[0].toQuery().get();
    });
  });

  it('sorts partitions', () => {
    const desiredPartitionsCount = 3;

    const overrides: ApiOverride = {
      partitionQueryStream: () => {
        return stream<api.ICursor>(
          {
            values: [{referenceValue: DOC2}],
          },
          {
            values: [{referenceValue: DOC1}],
          },
        );
      },
    };

    return createInstance(overrides).then(async firestore => {
      const query = firestore.collectionGroup('collectionId');

      const partitions = await getPartitions(query, desiredPartitionsCount);
      expect(partitions.length).to.equal(3);

      verifyPartition(partitions[0], null, 'coll/doc1');
      verifyPartition(partitions[1], 'coll/doc1', 'coll/doc2');
      verifyPartition(partitions[2], 'coll/doc2', null);
    });
  });
});
