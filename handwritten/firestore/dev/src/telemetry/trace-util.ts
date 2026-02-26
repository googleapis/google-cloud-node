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

import {Span} from './span';

/**
 * @private
 * @internal
 */
export interface Attributes {
  [attributeKey: string]: AttributeValue | undefined;
}

/**
 * @private
 * @internal
 */
export declare type AttributeValue =
  | string
  | number
  | boolean
  | Array<string>
  | Array<number>
  | Array<boolean>;

/**
 * Span names for instrumented operations.
 */
export const SERVICE = 'google.firestore.v1.Firestore/';
export const SPAN_NAME_BATCH_GET_DOCUMENTS = 'BatchGetDocuments';
export const SPAN_NAME_RUN_QUERY = 'RunQuery';
export const SPAN_NAME_RUN_AGGREGATION_QUERY = 'RunAggregationQuery';
export const SPAN_NAME_DOC_REF_CREATE = 'DocumentReference.Create';
export const SPAN_NAME_DOC_REF_SET = 'DocumentReference.Set';
export const SPAN_NAME_DOC_REF_UPDATE = 'DocumentReference.Update';
export const SPAN_NAME_DOC_REF_DELETE = 'DocumentReference.Delete';
export const SPAN_NAME_DOC_REF_GET = 'DocumentReference.Get';
export const SPAN_NAME_DOC_REF_LIST_COLLECTIONS =
  'DocumentReference.ListCollections';
export const SPAN_NAME_COL_REF_ADD = 'CollectionReference.Add';
export const SPAN_NAME_COL_REF_LIST_DOCUMENTS =
  'CollectionReference.ListDocuments';
export const SPAN_NAME_QUERY_GET = 'Query.Get';
export const SPAN_NAME_AGGREGATION_QUERY_GET = 'AggregationQuery.Get';
export const SPAN_NAME_TRANSACTION_RUN = 'Transaction.Run';
export const SPAN_NAME_TRANSACTION_GET_QUERY = 'Transaction.Get.Query';
export const SPAN_NAME_TRANSACTION_GET_AGGREGATION_QUERY =
  'Transaction.Get.AggregationQuery';
export const SPAN_NAME_TRANSACTION_GET_DOCUMENT = 'Transaction.Get.Document';
export const SPAN_NAME_TRANSACTION_GET_DOCUMENTS = 'Transaction.Get.Documents';
export const SPAN_NAME_TRANSACTION_ROLLBACK = 'Transaction.Rollback';
export const SPAN_NAME_TRANSACTION_COMMIT = 'Transaction.Commit';
export const SPAN_NAME_BATCH_COMMIT = 'Batch.Commit';
export const SPAN_NAME_PARTITION_QUERY = 'PartitionQuery';
export const SPAN_NAME_BULK_WRITER_COMMIT = 'BulkWriter.Commit';
export const ATTRIBUTE_SERVICE_PREFIX = 'gcp.firestore';
export const ATTRIBUTE_SETTINGS_PREFIX = `${ATTRIBUTE_SERVICE_PREFIX}.settings`;
export const ATTRIBUTE_KEY_DOC_COUNT = 'doc_count';
export const ATTRIBUTE_KEY_IS_TRANSACTIONAL = 'transactional';
export const ATTRIBUTE_KEY_NUM_RESPONSES = 'response_count';
export const ATTRIBUTE_KEY_IS_RETRY_WITH_CURSOR = 'retry_query_with_cursor';
export const ATTRIBUTE_KEY_TRANSACTION_TYPE = 'transaction_type';
export const ATTRIBUTE_KEY_ATTEMPTS_ALLOWED = 'attempts_allowed';
export const ATTRIBUTE_KEY_ATTEMPTS_REMAINING = 'attempts_remaining';
export const ATTRIBUTE_GCP_RESOURCE_NAME = 'gcp.resource.name';

/**
 * @private
 * @internal
 */
export interface TraceUtil {
  startActiveSpan<F extends (span: Span) => unknown>(
    name: string,
    fn: F,
    attributes?: Attributes,
  ): ReturnType<F>;
  startSpan(name: string): Span;

  currentSpan(): Span;

  recordProjectIdAndResourceName(projectId: string, databaseId: string): void;
}
