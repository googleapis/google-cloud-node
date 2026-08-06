// Copyright 2026 Google LLC
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

import {google} from '@google-cloud/firestore-api/build/protos/protos';

/**
 * Type declarations for custom Firestore bundle persistence protocol (bundle.proto).
 * This specification is independent of the standard GAPIC client API.
 */
export namespace firestore {
  export interface BundleElement {
    metadata?: BundleMetadata | null;
    namedQuery?: NamedQuery | null;
    documentMetadata?: BundledDocumentMetadata | null;
    document?: google.firestore.v1.IDocument | null;
  }
  export interface BundleMetadata {
    id?: string | null;
    createTime?: google.protobuf.ITimestamp | null;
    version?: number | null;
    totalDocuments?: number | null;
    totalBytes?: number | string | null;
  }
  export interface NamedQuery {
    name?: string | null;
    bundledQuery?: BundledQuery | null;
    readTime?: google.protobuf.ITimestamp | null;
  }
  export interface BundledDocumentMetadata {
    name?: string | null;
    readTime?: google.protobuf.ITimestamp | null;
    exists?: boolean | null;
    queries?: string[] | null;
  }
  export interface BundledQuery {
    parent?: string | null;
    structuredQuery?: google.firestore.v1.IStructuredQuery | null;
    limitType?: 'FIRST' | 'LAST' | null;
  }
  export type IBundleElement = BundleElement;
  export type IBundleMetadata = BundleMetadata;
  export type INamedQuery = NamedQuery;
  export type IBundledDocumentMetadata = BundledDocumentMetadata;
  export type IBundledQuery = BundledQuery;
}
