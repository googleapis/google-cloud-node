// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {[key: string]: JSONValue};

export interface JSONObject {
  [key: string]: JSONValue;
}

export type FromObjectValue =
  | string
  | number
  | boolean
  | null
  | FromObjectValue[]
  | Buffer
  | Uint8Array
  | {[key: string]: FromObjectValue};

// We don't want to import long here, we only need .toString() from it
export interface LongStub {
  toString: () => string;
}
