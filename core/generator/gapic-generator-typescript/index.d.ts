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

interface String {
  capitalize(): string;
  words(protobufJsStyle?: boolean): string[];
  toCamelCase(protobufJsStyle?: boolean): string;
  toPascalCase(protobufJsStyle?: boolean): string;
  toKebabCase(protobufJsStyle?: boolean): string;
  toSnakeCase(protobufJsStyle?: boolean): string;
  replaceAll(this: string, search: string, replacement: string): string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Array<T> {
  toCamelCaseString(this: string[], joiner: string): string;
  toSnakeCaseString(this: string[], joiner: string): string;
}
