// Copyright 2026 Google LLC
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

import {DocumentData} from '@google-cloud/firestore';
import * as extend from 'extend';

import {firestore, google} from '../../protos/firestore_v1_proto_api';
import {DocumentReference, Timestamp} from '../../src';
import {DocumentSnapshot, DocumentSnapshotBuilder} from '../../src/document';
import {QualifiedResourcePath} from '../../src/path';
import {createInstance, document} from './helpers';

import api = google.firestore.v1;
import protobuf = google.protobuf;

const PROJECT_ID = 'test-project';
const DATABASE_ROOT = `projects/${PROJECT_ID}/databases/(default)`;

export async function snapshot(
  relativePath: string,
  data: DocumentData,
): Promise<DocumentSnapshot> {
  const firestore = await createInstance();
  const path = QualifiedResourcePath.fromSlashSeparatedString(
    `${DATABASE_ROOT}/documents/${relativePath}`,
  );
  const ref = new DocumentReference(firestore, path);
  const snapshot = new DocumentSnapshotBuilder(ref);
  snapshot.fieldsProto = firestore['_serializer']!.encodeFields(data);
  snapshot.readTime = Timestamp.fromMillis(0);
  snapshot.createTime = Timestamp.fromMillis(0);
  snapshot.updateTime = Timestamp.fromMillis(0);
  return snapshot.build();
}

export function where(
  filter: api.StructuredQuery.IFilter,
): api.IStructuredQuery {
  return {
    where: filter,
  };
}

export function fieldFiltersQuery(
  fieldPath: string,
  op: api.StructuredQuery.FieldFilter.Operator,
  value: string | api.IValue,
  ...fieldPathOpAndValues: Array<
    string | api.StructuredQuery.FieldFilter.Operator | string | api.IValue
  >
): api.IStructuredQuery {
  return {
    where: fieldFilters(fieldPath, op, value, ...fieldPathOpAndValues),
  };
}

export function fieldFilters(
  fieldPath: string,
  op: api.StructuredQuery.FieldFilter.Operator,
  value: string | api.IValue,
  ...fieldPathOpAndValues: Array<
    string | api.StructuredQuery.FieldFilter.Operator | string | api.IValue
  >
): api.StructuredQuery.IFilter {
  const filters: api.StructuredQuery.IFilter[] = [];

  fieldPathOpAndValues = [fieldPath, op, value, ...fieldPathOpAndValues];

  for (let i = 0; i < fieldPathOpAndValues.length; i += 3) {
    fieldPath = fieldPathOpAndValues[i] as string;
    op = fieldPathOpAndValues[
      i + 1
    ] as api.StructuredQuery.FieldFilter.Operator;
    value = fieldPathOpAndValues[i + 2] as string | api.IValue;

    const filter: api.StructuredQuery.IFieldFilter = {
      field: {
        fieldPath,
      },
      op,
    };

    if (typeof value === 'string') {
      filter.value = {stringValue: value};
    } else {
      filter.value = value;
    }

    filters.push({fieldFilter: filter});
  }

  if (filters.length === 1) {
    return {
      fieldFilter: filters[0].fieldFilter,
    };
  } else {
    return {
      compositeFilter: {
        op: 'AND',
        filters,
      },
    };
  }
}

export function fieldFilter(
  fieldPath: string,
  op: api.StructuredQuery.FieldFilter.Operator,
  value: string | api.IValue,
): api.StructuredQuery.IFilter {
  return fieldFilters(fieldPath, op, value);
}

export function compositeFilter(
  op: api.StructuredQuery.CompositeFilter.Operator,
  ...filters: api.StructuredQuery.IFilter[]
): api.StructuredQuery.IFilter {
  return {
    compositeFilter: {
      op: op,
      filters,
    },
  };
}

export function orFilter(
  op: api.StructuredQuery.CompositeFilter.Operator,
  ...filters: api.StructuredQuery.IFilter[]
): api.StructuredQuery.IFilter {
  return compositeFilter('OR', ...filters);
}

export function andFilter(
  op: api.StructuredQuery.CompositeFilter.Operator,
  ...filters: api.StructuredQuery.IFilter[]
): api.StructuredQuery.IFilter {
  return compositeFilter('AND', ...filters);
}

export function unaryFiltersQuery(
  fieldPath: string,
  equals: 'IS_NAN' | 'IS_NULL' | 'IS_NOT_NAN' | 'IS_NOT_NULL',
  ...fieldPathsAndEquals: string[]
): api.IStructuredQuery {
  return {
    where: unaryFilters(fieldPath, equals, ...fieldPathsAndEquals),
  };
}

export function unaryFilters(
  fieldPath: string,
  equals: 'IS_NAN' | 'IS_NULL' | 'IS_NOT_NAN' | 'IS_NOT_NULL',
  ...fieldPathsAndEquals: string[]
): api.StructuredQuery.IFilter {
  const filters: api.StructuredQuery.IFilter[] = [];

  fieldPathsAndEquals.unshift(fieldPath, equals);

  for (let i = 0; i < fieldPathsAndEquals.length; i += 2) {
    const fieldPath = fieldPathsAndEquals[i];
    const equals = fieldPathsAndEquals[i + 1];

    expect(['IS_NAN', 'IS_NULL', 'IS_NOT_NAN', 'IS_NOT_NULL']).toContain(
      equals,
    );

    filters.push({
      unaryFilter: {
        field: {
          fieldPath,
        },
        op: equals as 'IS_NAN' | 'IS_NULL' | 'IS_NOT_NAN' | 'IS_NOT_NULL',
      },
    });
  }

  if (filters.length === 1) {
    return {
      unaryFilter: filters[0].unaryFilter,
    };
  } else {
    return {
      compositeFilter: {
        op: 'AND',
        filters,
      },
    };
  }
}

export function orderBy(
  fieldPath: string,
  direction: api.StructuredQuery.Direction,
  ...fieldPathAndOrderBys: Array<string | api.StructuredQuery.Direction>
): api.IStructuredQuery {
  const orderBy: api.StructuredQuery.IOrder[] = [];

  fieldPathAndOrderBys.unshift(fieldPath, direction);

  for (let i = 0; i < fieldPathAndOrderBys.length; i += 2) {
    const fieldPath = fieldPathAndOrderBys[i] as string;
    const direction = fieldPathAndOrderBys[
      i + 1
    ] as api.StructuredQuery.Direction;
    orderBy.push({
      field: {
        fieldPath,
      },
      direction,
    });
  }

  return {orderBy};
}

export function limit(n: number): api.IStructuredQuery {
  return {
    limit: {
      value: n,
    },
  };
}

export function offset(n: number): api.IStructuredQuery {
  return {
    offset: n,
  };
}

export function allDescendants(kindless = false): api.IStructuredQuery {
  if (kindless) {
    return {from: [{allDescendants: true}]};
  }
  return {from: [{collectionId: 'collectionId', allDescendants: true}]};
}

export function select(...fields: string[]): api.IStructuredQuery {
  const select: api.StructuredQuery.IProjection = {
    fields: [],
  };

  for (const field of fields) {
    select.fields!.push({fieldPath: field});
  }

  return {select};
}

export function startAt(
  before: boolean,
  ...values: Array<string | api.IValue>
): api.IStructuredQuery {
  const cursor: api.ICursor = {
    values: [],
  };

  if (before) {
    cursor.before = true;
  }

  for (const value of values) {
    if (typeof value === 'string') {
      cursor.values!.push({
        stringValue: value,
      });
    } else {
      cursor.values!.push(value);
    }
  }

  return {startAt: cursor};
}

export function endAt(
  before: boolean,
  ...values: Array<string | api.IValue>
): api.IStructuredQuery {
  const cursor: api.ICursor = {
    values: [],
  };

  if (before) {
    cursor.before = true;
  }

  for (const value of values) {
    if (typeof value === 'string') {
      cursor.values!.push({
        stringValue: value,
      });
    } else {
      cursor.values!.push(value);
    }
  }

  return {endAt: cursor};
}

/**
 * Returns the timestamp value for the provided readTimes, or the default
 * readTime value used in tests if no values are provided.
 */
export function readTime(
  seconds?: number,
  nanos?: number,
): protobuf.ITimestamp {
  if (seconds === undefined && nanos === undefined) {
    return {seconds: '5', nanos: 6};
  }
  return {seconds: String(seconds), nanos: nanos};
}

export function queryEqualsWithParent(
  actual: api.IRunQueryRequest | undefined,
  parent: string,
  ...protoComponents: api.IStructuredQuery[]
): void {
  expect(actual).not.toBeUndefined();

  if (parent !== '') {
    parent = '/' + parent;
  }

  const query: api.IRunQueryRequest = {
    parent: DATABASE_ROOT + '/documents' + parent,
    structuredQuery: {},
  };

  for (const protoComponent of protoComponents) {
    extend(true, query.structuredQuery, protoComponent);
  }

  // We add the `from` selector here in order to avoid setting collectionId on
  // kindless queries.
  if (query.structuredQuery!.from === undefined) {
    query.structuredQuery!.from = [
      {
        collectionId: 'collectionId',
      },
    ];
  }

  // 'extend' removes undefined fields in the request object. The backend
  // ignores these fields, but we need to manually strip them before we compare
  // the expected and the actual request.
  actual = extend(true, {}, actual);
  expect(actual).toEqual(query);
}

export function queryEquals(
  actual: api.IRunQueryRequest | undefined,
  ...protoComponents: api.IStructuredQuery[]
): void {
  queryEqualsWithParent(actual, /* parent= */ '', ...protoComponents);
}

export function bundledQueryEquals(
  actual: firestore.IBundledQuery | undefined,
  limitType: firestore.BundledQuery.LimitType | undefined,
  ...protoComponents: api.IStructuredQuery[]
): void {
  expect(actual).not.toBeUndefined();

  const query: firestore.IBundledQuery = {
    parent: DATABASE_ROOT + '/documents',
    structuredQuery: {
      from: [
        {
          collectionId: 'collectionId',
        },
      ],
    },
    limitType,
  };

  for (const protoComponent of protoComponents) {
    extend(true, query.structuredQuery, protoComponent);
  }

  // 'extend' removes undefined fields in the request object. The backend
  // ignores these fields, but we need to manually strip them before we compare
  // the expected and the actual request.
  actual = extend(true, {}, actual);
  expect(actual).toEqual(query);
}

export function result(
  documentId: string,
  setDone?: boolean,
): api.IRunQueryResponse {
  if (setDone) {
    return {
      document: document(documentId),
      readTime: {seconds: 5, nanos: 6},
      done: setDone,
    };
  } else {
    return {document: document(documentId), readTime: {seconds: 5, nanos: 6}};
  }
}

export function heartbeat(count: number): api.IRunQueryResponse {
  return {
    document: null,
    readTime: {seconds: 5, nanos: 6},
    skippedResults: count,
  };
}
