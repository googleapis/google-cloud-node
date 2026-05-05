// Copyright 2025 Google LLC
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

import {NamedList} from './namedlist';

export type ArrayType = {type: 'array'; elementType: Type};
export type MapType = {type: 'map'; keyType: Type; valueType: Type};
export type FieldType = {name: string | null; type: Type};
export class StructType extends NamedList<Type> {
  type: 'struct' = 'struct' as const;

  static fromTuples(tuples: [string | null, Type][]): StructType {
    return NamedList._fromTuples(StructType, tuples);
  }
}

export type Int64Type = ReturnType<typeof Int64>;
export type Float64Type = ReturnType<typeof Float64>;
export type Float32Type = ReturnType<typeof Float32>;
export type BytesType = ReturnType<typeof Bytes>;
export type StringType = ReturnType<typeof String>;
export type BoolType = ReturnType<typeof Bool>;
export type TimestampType = ReturnType<typeof Timestamp>;
export type DateType = ReturnType<typeof Date>;

/**
 * Factory functions are provided instead of constants
 * for all types for coherence and for extensibility
 * (we need parameters at least for arrays, structs and maps)
 */
export const Int64 = () => ({type: 'int64' as const});
export const Float64 = () => ({type: 'float64' as const});
export const Float32 = () => ({type: 'float32' as const});
export const Bytes = () => ({type: 'bytes' as const});
export const String = () => ({type: 'string' as const});
export const Bool = () => ({type: 'bool' as const});
export const Timestamp = () => ({type: 'timestamp' as const});
export const Date = () => ({type: 'date' as const});
export const Struct = (...fields: FieldType[]): StructType =>
  StructType.fromTuples(fields.map(value => [value.name, value.type]));
export const Array = (elementType: Type): ArrayType => ({
  type: 'array' as const,
  elementType,
});
export const Map = (keyType: Type, valueType: Type): MapType => ({
  type: 'map' as const,
  keyType,
  valueType,
});

export type Type =
  | Int64Type
  | Float32Type
  | Float64Type
  | BytesType
  | StringType
  | BoolType
  | TimestampType
  | DateType
  | ArrayType
  | StructType
  | MapType;

export class ResultSetMetadata extends NamedList<Type> {
  get columns(): Array<Type> {
    return this.values;
  }

  static fromTuples(tuples: [string | null, Type][]): ResultSetMetadata {
    return NamedList._fromTuples(ResultSetMetadata, tuples);
  }
}
