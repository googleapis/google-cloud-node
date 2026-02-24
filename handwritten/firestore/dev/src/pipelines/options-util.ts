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

import {ObjectValue, Serializer} from '../serializer';
import {ObjectValueFieldPath} from '../path';
import {ApiMapValue} from '../types';
import {isPlainObject, mapToArray} from '../util';
import {google} from '../../protos/firestore_v1_proto_api';
import IValue = google.firestore.v1.IValue;
export type OptionsDefinitions = Record<string, OptionDefinition>;
export type OptionDefinition = {
  serverName: string;
  nestedOptions?: OptionsDefinitions;
};

/**
 * A utility class for formatting known and raw options into the
 * proto structure utilized by Pipelines.
 *
 * @example
 * ```
 * myUtil = new OptionsUtil({
 *     someFoo: {
 *       serverName: 'some_foo',
 *     },
 *     aBar: {
 *       serverName: 'a_bar',
 *       nestedOptions: {
 *         baz: {
 *           serverName: 'baz',
 *         }
 *       },
 *     },
 *   });
 *
 * optionsProto = myUtil.getOptionsProto(
 *    serializer,
 *    {
 *      someFoo: 1
 *    },
 *    {
 *      aBar.another_unknown_option: "yep"
 *    });
 *
 * // Resulting optionsProto:
 * // {
 * //    'some_foo': { integerValue: 1 },
 * //    'a_bar': { mapValue: { fields: { 'another_unknown_option': {stringValue: 'yep' }}}}
 * // }
 * ```
 */
export class OptionsUtil {
  constructor(private optionDefinitions: OptionsDefinitions) {}

  /**
   * Serialize known options to ObjectValue
   * @param options - Serialize these options.
   * @param serializer - Use this serializer to serialize primitives to proto.
   * @private
   */
  private _getKnownOptions(
    options: Record<string, unknown>,
    serializer: Serializer,
  ): ObjectValue {
    const knownOptions: ObjectValue = ObjectValue.empty();

    // SERIALIZE KNOWN OPTIONS
    for (const knownOptionKey in this.optionDefinitions) {
      const optionDefinition: OptionDefinition =
        this.optionDefinitions[knownOptionKey];

      if (knownOptionKey in options) {
        const optionValue: unknown = options[knownOptionKey];
        let protoValue: IValue | undefined = undefined;

        if (optionDefinition.nestedOptions && isPlainObject(optionValue)) {
          const nestedUtil = new OptionsUtil(optionDefinition.nestedOptions);
          protoValue = {
            mapValue: {
              fields: nestedUtil.getOptionsProto(serializer, optionValue),
            },
          };
        } else if (optionValue) {
          protoValue = serializer.encodeValue(optionValue) ?? undefined;
        }

        if (protoValue) {
          knownOptions.set(
            new ObjectValueFieldPath(optionDefinition.serverName),
            protoValue,
          );
        }
      }
    }

    return knownOptions;
  }

  /**
   * Serialize known and raw options to a proto object.
   *  - Renames knownOptions from the SDK name (camel case) to server name (snake case)
   *  - Serializes values provided for each option to a proto value, using the provided serializer.
   *  - Overlays optionsOverrides (which represent raw options) onto the result proto.
   *  - Supports nested objects (`{optionA: { optionB: true }}`) and dot notation (`{optionA.optionB: true}`).
   * @param serializer
   * @param knownOptions
   * @param optionsOverride
   */
  getOptionsProto(
    serializer: Serializer,
    knownOptions: Record<string, unknown>,
    optionsOverride?: Record<string, unknown>,
  ): ApiMapValue | undefined {
    const result: ObjectValue = this._getKnownOptions(knownOptions, serializer);

    // APPLY OPTIONS OVERRIDES
    if (optionsOverride) {
      const optionsMap = new Map(
        mapToArray(optionsOverride, (value, key) => [
          ObjectValueFieldPath.fromDotNotation(key),
          value !== undefined ? serializer.encodeValue(value) : null,
        ]),
      );
      result.setAll(optionsMap);
    }

    // Return IMapValue from `result`
    return result.value.mapValue.fields ?? {};
  }
}
