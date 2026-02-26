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

// We deliberately use `any` in the external API to not impose type-checking
// on end users.
/* eslint-disable @typescript-eslint/no-explicit-any */

// Declare a global (ambient) namespace
// (used when not using import statement, but just script include).

import './firestore';

declare module '@google-cloud/firestore/pipelines' {
  export = FirebaseFirestore.Pipelines;
}
