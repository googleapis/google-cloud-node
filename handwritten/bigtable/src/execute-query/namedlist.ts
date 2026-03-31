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

/**
 * Represents how field names correspond to field indexes in a NamedList.
 */
export type FieldMapping = {
  validFieldNames: Map<string, number>;
  duplicateFieldNames: Map<string, number[]>;
  fieldNames: (string | null)[];
};

function constructFieldMapping(values: (string | null)[]): FieldMapping {
  const fieldMapping: Map<string, number[]> = new Map();
  for (let i = 0; i < values.length; i++) {
    const name = values[i];
    if (name) {
      if (!fieldMapping.has(name)) {
        fieldMapping.set(name, []);
      }
      fieldMapping.get(name)!.push(i);
    }
  }
  const validFieldNames = new Map<string, number>();
  const duplicateFieldNames = new Map<string, number[]>();
  for (const [name, indexes] of fieldMapping.entries()) {
    if (indexes.length > 1) {
      duplicateFieldNames.set(name, indexes);
    } else {
      validFieldNames.set(name, indexes[0]);
    }
  }
  return {
    validFieldNames,
    duplicateFieldNames,
    fieldNames: values,
  };
}

/**
 * Class representing a list which allows retrieving elements both by index
 * and by name. If multiple elements have the same name, they have to be
 * retrieved by index. Otherwise an error is thrown.
 */
export class NamedList<T> {
  values: Array<T>;
  fieldMapping: FieldMapping;

  constructor(values: Array<T>, fieldMapping: FieldMapping) {
    this.values = values;
    this.fieldMapping = fieldMapping;
  }

  protected static _fromTuples<R extends NamedList<T>, T>(
    type: {new (values: Array<T>, fieldMapping: FieldMapping): R},
    tuples: [string | null, T][],
  ): R {
    return new type(
      tuples.map(tuple => tuple[1]),
      constructFieldMapping(tuples.map(tuple => tuple[0])),
    );
  }

  get(indexOrName: string | number): T {
    let index;
    if (typeof indexOrName === 'string') {
      if (this.fieldMapping.duplicateFieldNames.has(indexOrName)) {
        throw new Error(
          `Cannot access ${indexOrName} by name because it is available on multiple indexes: ${this.fieldMapping.duplicateFieldNames
            .get(indexOrName)!
            .join(', ')}`,
        );
      }
      index = this.fieldMapping.validFieldNames.get(indexOrName);
      if (index === undefined) {
        throw new Error(`Unknown field name '${indexOrName}'.`);
      }
    } else {
      index = indexOrName;
    }
    return this.values[index];
  }

  getFieldNameAtIndex(index: number): string | null {
    return this.fieldMapping.fieldNames[index];
  }
}
