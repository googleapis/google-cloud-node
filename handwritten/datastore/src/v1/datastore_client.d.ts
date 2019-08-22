/*!
 * Copyright 2019 Google LLC.
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

import {CallOptions, GrpcClientOptions} from 'google-gax';
import {ServiceError} from '@grpc/grpc-js';
import {common as protobuf} from 'protobufjs';

declare class DatastoreClient {
  static servicePath: string;
  static port: number;
  static scopes: string[];

  constructor(opts?: GrpcClientOptions);

  getProjectId(callback: DatastoreClient.GetProjectIdCallback): void;

  lookup(request: DatastoreClient.LookupRequest, options?: CallOptions): DatastoreClient.CancelablePromise<[DatastoreClient.LookupResponse]>;
  lookup(request: DatastoreClient.LookupRequest, callback: DatastoreClient.LookupCallback): void;
  lookup(request: DatastoreClient.LookupRequest, options: CallOptions, callback: DatastoreClient.LookupCallback): void;

  runQuery(request: DatastoreClient.RunQueryRequest, options?: CallOptions): DatastoreClient.CancelablePromise<[DatastoreClient.RunQueryResponse]>;
  runQuery(request: DatastoreClient.RunQueryRequest, callback: DatastoreClient.RunQueryCallback): void;
  runQuery(request: DatastoreClient.RunQueryRequest, options: CallOptions, callback: DatastoreClient.RunQueryCallback): void;

  beginTransaction(request: DatastoreClient.BeginTransactionRequest, options?: CallOptions): DatastoreClient.CancelablePromise<[DatastoreClient.BeginTransactionResponse]>;
  beginTransaction(request: DatastoreClient.BeginTransactionRequest, callback: DatastoreClient.BeginTransactionCallback): void;
  beginTransaction(request: DatastoreClient.BeginTransactionRequest, options: CallOptions, callback: DatastoreClient.BeginTransactionCallback): void;

  commit(request: DatastoreClient.CommitRequest, options?: CallOptions): DatastoreClient.CancelablePromise<[DatastoreClient.CommitResponse]>;
  commit(request: DatastoreClient.CommitRequest, callback: DatastoreClient.CommitCallback): void;
  commit(request: DatastoreClient.CommitRequest, options: CallOptions, callback: DatastoreClient.CommitCallback): void;

  rollback(request: DatastoreClient.RollbackRequest, options?: CallOptions): DatastoreClient.CancelablePromise<[DatastoreClient.RollbackResponse]>;
  rollback(request: DatastoreClient.RollbackRequest, callback: DatastoreClient.RollbackCallback): void;
  rollback(request: DatastoreClient.RollbackRequest, options: CallOptions, callback: DatastoreClient.RollbackCallback): void;

  allocateIds(request: DatastoreClient.AllocateIdsRequest, options?: CallOptions): DatastoreClient.CancelablePromise<[DatastoreClient.AllocateIdsResponse]>;
  allocateIds(request: DatastoreClient.AllocateIdsRequest, callback: DatastoreClient.AllocateIdsCallback): void;
  allocateIds(request: DatastoreClient.AllocateIdsRequest, options: CallOptions, callback: DatastoreClient.AllocateIdsCallback): void;

  reserveIds(request: DatastoreClient.ReserveIdsRequest, options?: CallOptions): DatastoreClient.CancelablePromise<[DatastoreClient.ReserveIdsResponse]>;
  reserveIds(request: DatastoreClient.ReserveIdsRequest, callback: DatastoreClient.ReserveIdsCallback): void;
  reserveIds(request: DatastoreClient.ReserveIdsRequest, options: CallOptions, callback: DatastoreClient.ReserveIdsCallback): void;
}

declare namespace DatastoreClient {
  interface CancelablePromise <T> extends Promise<T> {
    cancel(): void;
  }

  interface GetProjectIdCallback {
    (error: null|Error, projectId: string): void;
  }

  interface LookupRequest {
    projectId: string;
    readOptions?: ReadOptions;
    keys: Key[];
  }

  interface LookupResponse {
    found: EntityResult[];
    missing: EntityResult[];
    deferred: Key[];
  }

  interface LookupCallback {
    (err: null|ServiceError, response: LookupResponse): void;
  }

  interface RunQueryRequest {
    projectId: string;
    partitionId?: PartitionId;
    readOptions?: ReadOptions;
    queryType?: string;
    query?: Query;
    gqlQuery?: GqlQuery;
  }

  interface RunQueryResponse {
    batch: QueryResultBatch;
    query: Query;
  }

  interface RunQueryCallback {
    (err: null|ServiceError, response: RunQueryResponse): void;
  }

  interface BeginTransactionRequest {
    projectId: string;
    transactionOptions?: TransactionOptions;
  }

  interface BeginTransactionResponse {
    transaction: string|Buffer;
  }

  interface BeginTransactionCallback {
    (err: null|ServiceError, response: BeginTransactionResponse): void;
  }

  const enum CommitRequestMode {
    MODE_UNSPECIFIED = 'MODE_UNSPECIFIED',
    TRANSACTIONAL = 'TRANSACTIONAL',
    NON_TRANSACTIONAL = 'NON_TRANSACTIONAL'
  }

  interface CommitRequest {
    projectId: string;
    mode: CommitRequestMode;
    transactionSelector?: string;
    transaction?: string|Buffer;
    mutations: Mutation[];
  }

  interface CommitResponse {
    mutationResults: MutationResult[];
    indexUpdates: number;
  }

  interface CommitCallback {
    (err: null|ServiceError, response: CommitResponse): void;
  }

  interface RollbackRequest {
    projectId: string;
    transaction: string|Buffer;
  }

  interface RollbackResponse {}

  interface RollbackCallback {
    (err: null|ServiceError, response: RollbackResponse): void;
  }

  interface AllocateIdsRequest {
    projectId: string;
    keys: Key[];
  }

  interface AllocateIdsResponse {
    keys: Key[];
  }

  interface AllocateIdsCallback {
    (err: null|ServiceError, response: AllocateIdsResponse): void;
  }

  interface ReserveIdsRequest {
    projectId: string;
    databaseId?: string;
    keys: Key[];
  }

  interface ReserveIdsResponse {}

  interface ReserveIdsCallback {
    (err: null|ServiceError, response: ReserveIdsResponse): void;
  }

  interface Mutation {
    insert?: Entity;
    update?: Entity;
    upsert?: Entity;
    delete?: Key;
    operation?: string;
    conflictDetectionStrategy?: string;
    baseVersion?: number;
  }

  interface MutationResult {
    key: null|Key;
    version: number;
    conflictDetected: boolean;
  }

  const enum ReadConsistency {
    READ_CONSISTENCY_UNSPECIFIED = 'READ_CONSISTENCY_UNSPECIFIED',
    STRONG = 'STRONG',
    EVENTUAL = 'EVENTUAL'
  }

  interface ReadOptions {
    consistencyType?: string;
    readConsistency?: ReadConsistency;
    transaction?: string|Buffer;
  }

  interface ReadWrite {
    previousTransaction?: string|Buffer;
  }

  interface ReadOnly {}

  interface TransactionOptions {
    mode?: string;
    readWrite?: ReadWrite;
    readOnly?: ReadOnly;
  }

  interface PartitionId {
    projectId: string;
    namespaceId?: string;
  }

  interface PathElement {
    kind: string;
    id?: number;
    name?: string;
    idType?: string;
  }

  interface Key {
    partitionId?: PartitionId;
    path: PathElement[];
  }

  interface ArrayValue {
    values: Value[];
  }

  interface Value {
    nullValue?: 0;
    booleanValue?: boolean;
    integerValue?: number;
    doubleValue?: number;
    timestampValue?: protobuf.ITimestamp;
    keyValue?: Key;
    stringValue?: string;
    blobValue?: string|Buffer;
    geoPointValue?: LatLng;
    entityValue?: Entity;
    arrayValue?: ArrayValue;
    valueType?: string;
    meaning?: number;
    excludeFromIndexes?: boolean;
  }

  interface Entity {
    key: null|Key;
    properties: {[name: string]: Value};
  }

  const enum ResultType {
    RESULT_TYPE_UNSPECIFIED = 'RESULT_TYPE_UNSPECIFIED',
    FULL = 'FULL',
    PROJECTION = 'PROJECTION',
    KEY_ONLY = 'KEY_ONLY'
  }

  interface EntityResult {
    entity: Entity;
    version: number;
    cursor: string|Buffer;
  }

  interface Query {
    projection: Projection[];
    kind: KindExpression[];
    filter?: Filter;
    order: PropertyOrder[];
    distinctOn: PropertyReference[];
    startCursor?: string|Buffer;
    endCursor?: string|Buffer;
    offset?: number;
    limit?: protobuf.IInt32Value;
  }

  interface KindExpression {
    name: string;
  }

  interface PropertyReference {
    name: string;
  }

  interface Projection {
    property: PropertyReference;
  }

  const enum Direction {
    DIRECTION_UNSPECIFIED = 'DIRECTION_UNSPECIFIED',
    ASCENDING = 'ASCENDING',
    DESCENDING = 'DESCENDING'
  }

  interface PropertyOrder {
    property: PropertyReference;
    direction: Direction;
  }

  interface Filter {
    filterType?: string;
    compositeFilter?: CompositeFilter;
    propertyFilter?: PropertyFilter;
  }

  const enum CompositeFilterOperator {
    OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED',
    AND = 'AND'
  }

  interface CompositeFilter {
    op: CompositeFilterOperator;
    filters: Filter[];
  }

  const enum PropertyFilterOperator {
    OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED',
    LESS_THAN = 'LESS_THAN',
    LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
    GREATER_THAN = 'GREATER_THAN',
    GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
    EQUAL = 'EQUAL',
    HAS_ANCESTOR = 'HAS_ANCESTOR'
  }

  interface PropertyFilter {
    property: PropertyReference;
    op: PropertyFilterOperator;
    value: Value;
  }

  interface GqlQuery {
    queryString: string;
    allowLiterals?: boolean;
    namedBindings?: {[name: string]: GqlQueryParameter};
    positionalBindings?: GqlQueryParameter[];
  }

  interface GqlQueryParameter {
    parameterType?: string;
    value?: Value;
    cursor?: string|Buffer;
  }

  const enum MoreResultsType {
    MORE_RESULTS_TYPE_UNSPECIFIED = 'MORE_RESULTS_TYPE_UNSPECIFIED',
    NOT_FINISHED = 'NOT_FINISHED',
    MORE_RESULTS_AFTER_LIMIT = 'MORE_RESULTS_AFTER_LIMIT',
    NO_MORE_RESULTS = 'NO_MORE_RESULTS',
    MORE_RESULTS_AFTER_CURSOR = 'MORE_RESULTS_AFTER_CURSOR'
  }

  interface QueryResultBatch {
    skippedResults: number;
    skippedCursor: string|Buffer;
    entityResultType: ResultType;
    entityResults: EntityResult[];
    endCursor: string|Buffer;
    moreResults: MoreResultsType;
    snapshotVersion: number;
  }

  interface LatLng {
    latitude: number;
    longitude: number;
  }
}
