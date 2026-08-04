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

/**
 * Type declarations for custom Firestore bundle persistence protocol (bundle.proto).
 * This specification is independent of the standard GAPIC client API.
 */
export namespace firestore {
  export interface BundleElement {
    metadata?: BundleMetadata | null;
    namedQuery?: NamedQuery | null;
    documentMetadata?: BundledDocumentMetadata | null;
    document?: any | null;
  }
  export interface BundleMetadata {
    id?: string | null;
    createTime?: any | null;
    version?: number | null;
    totalDocuments?: number | null;
    totalBytes?: number | null;
  }
  export interface NamedQuery {
    name?: string | null;
    bundledQuery?: BundledQuery | null;
    readTime?: any | null;
  }
  export interface BundledDocumentMetadata {
    name?: string | null;
    readTime?: any | null;
    exists?: boolean | null;
    queries?: string[] | null;
  }
  export interface BundledQuery {
    parent?: string | null;
    structuredQuery?: any | null;
    limitType?: string | null;
  }
  export type IBundleElement = BundleElement;
  export type IBundleMetadata = BundleMetadata;
  export type INamedQuery = NamedQuery;
  export type IBundledDocumentMetadata = BundledDocumentMetadata;
  export type IBundledQuery = BundledQuery;
}
