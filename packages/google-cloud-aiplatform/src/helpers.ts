// Copyright 2020 Google LLC
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
//
import {
  googleProtobufValueFromObject,
  googleProtobufValueToObject,
  ValueType,
} from './value-converter';

interface ToValueFunction {
  toValue(): null | object | undefined;
  // Add these two members so that we can convert to Message objects more easily.
  $type: unknown;
  toJson(): string;
}

// Assigns the toValue() function as a member of an enhanced class.
export function addToValue() {
  const methods: ToValueFunction = {} as unknown as ToValueFunction;

  methods.toValue = function () {
    return toValue(this as unknown as protobuf.Message);
  };

  return methods;
}

/**
 * Converts a protobuf.Message to a protobuf.Value object.
 * @param message Message to convert
 * @returns a Value-formatted object
 */
export function toValue(
  message: protobuf.Message
): null | object | undefined | protobuf.common.IValue {
  if (message === undefined) {
    return undefined;
  }

  const value = googleProtobufValueFromObject(
    message as unknown as ValueType,
    (val: object) => {
      return val;
    }
  );
  return value;
}

/**
 * Creates instance of class from a protobuf.Value object.
 * @param value Value to convert
 * @returns a Message
 */
export function fromValue(
  value: protobuf.common.IValue
): object | null | undefined | string | number | ValueType | boolean {
  if (!value) {
    return undefined;
  }

  if (!value.structValue || !value.structValue.fields) {
    throw new Error(
      'ERROR: fromValue() was provided a malformed protobuf object'
    );
  }

  return googleProtobufValueToObject(value);
}
