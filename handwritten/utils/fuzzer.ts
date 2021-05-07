// Copyright 2016 Google LLC
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

function _random(a: number, b: number) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

export class Fuzzer {
  generate = {
    types() {
      return [
        'object',
        'array',
        'string',
        'number',
        'null',
        'undefined',
        'function',
        'boolean',
      ];
    },

    string(len?: number) {
      const lenChecked = (typeof len === 'number' ? len : 10)!;
      const chars: string[] = [];

      for (let i = 0; i < lenChecked; i++) {
        chars.push(String.fromCharCode(_random(32, 126)));
      }

      return chars.join('');
    },

    boolean() {
      return !!_random(0, 1);
    },

    alphaNumericString(len?: number) {
      const lenChecked = (typeof len === 'number' ? len : 10)!;
      const chars: string[] = [];
      let thisRange: number[] = [];
      const ranges = [
        [48, 57],
        [65, 90],
        [97, 122],
      ];

      for (let i = 0; i < lenChecked; i++) {
        thisRange = ranges[_random(0, 2)];
        chars.push(String.fromCharCode(_random(thisRange[0], thisRange[1])));
      }

      return chars.join('');
    },

    function(this: {[key: string]: () => void; types: () => string[]}) {
      const availableTypes = this.types().filter(i => i !== 'function');
      const typeToGen = this.types()[_random(0, availableTypes.length - 1)];
      const fnToCall = this[typeToGen];

      return () => {
        return fnToCall();
      };
    },

    number(lower?: number, upper?: number) {
      const lowerChecked = (typeof lower === 'number' ? lower : 0)!;
      const upperChecked = (typeof upper === 'number' ? upper : 100)!;

      return _random(lowerChecked, upperChecked);
    },

    null() {
      return null;
    },

    undefined() {
      return undefined;
    },

    array(
      len?: number,
      ofOneType?: string,
      currentDepth?: number,
      allowedDepth?: number
    ) {
      const lenChecked = (typeof len === 'number' ? len : _random(1, 10))!;
      let availableTypes = (typeof ofOneType === 'string' &&
      this.types().indexOf(ofOneType!) > -1
        ? [ofOneType]
        : this.types())!;
      let currentDepthChecked = (typeof currentDepth === 'number'
        ? currentDepth
        : 0)!;
      const allowedDepthChecked = (typeof allowedDepth === 'number'
        ? allowedDepth
        : 3)!;
      const arr: Array<{}> = [];
      let currentTypeBeingGenerated: string | undefined = '';
      currentDepthChecked += 1;

      // Deny the ability to nest more objects
      if (currentDepthChecked >= allowedDepthChecked) {
        availableTypes = this.types().filter(
          i => i !== 'object' && i !== 'array'
        );
      }

      for (let i = 0; i < lenChecked; i++) {
        currentTypeBeingGenerated =
          availableTypes[_random(0, availableTypes.length - 1)];

        if (currentTypeBeingGenerated === 'object') {
          arr.push(
            this[currentTypeBeingGenerated](
              null!,
              currentDepthChecked,
              allowedDepthChecked
            )
          );
        } else if (currentTypeBeingGenerated === 'array') {
          arr.push(
            this[currentTypeBeingGenerated](
              null!,
              ofOneType,
              currentDepthChecked,
              allowedDepthChecked
            )
          );
        } else {
          arr.push(
            (this as {[key: string]: Function})[currentTypeBeingGenerated!]()
          );
        }
      }

      return arr;
    },

    object(
      numProperties?: number,
      currentDepth?: number,
      allowedDepth?: number
    ) {
      const numPropertiesChecked = (typeof numProperties === 'number'
        ? numProperties
        : _random(1, 10))!;
      let currentDepthChecked = (typeof currentDepth === 'number'
        ? currentDepth
        : 0)!;
      const allowedDepthChecked = (typeof allowedDepth === 'number'
        ? allowedDepth
        : 3)!;
      const obj: {[key: string]: {}} = {};
      currentDepthChecked += 1;

      let availableTypes = this.types();

      // Deny the ability to nest more objects
      if (currentDepth! >= allowedDepth!) {
        availableTypes = availableTypes.filter(
          i => i !== 'object' && i !== 'array'
        );
      }

      let currentTypeBeingGenerated: string | number = 0;
      let currentKey = '';

      for (let i = 0; i < numPropertiesChecked; i++) {
        currentTypeBeingGenerated =
          availableTypes[_random(0, availableTypes.length - 1)];
        currentKey = this.alphaNumericString(_random(1, 10));

        if (currentTypeBeingGenerated === 'object') {
          obj[currentKey] = this[currentTypeBeingGenerated](
            null!,
            currentDepthChecked,
            allowedDepthChecked
          );
        } else if (currentTypeBeingGenerated === 'array') {
          obj[currentKey] = this[currentTypeBeingGenerated](
            null!,
            null!,
            currentDepthChecked,
            allowedDepthChecked
          );
        } else {
          obj[currentKey] = (this as {[key: string]: Function})[
            currentTypeBeingGenerated
          ]();
        }
      }

      return obj;
    },
  };

  _maxBy(arr: Array<Array<{}>>) {
    const max = Math.max(...arr.map(o => o.length));
    return arr.find(item => item.length === max);
  }

  _backFillUnevenTypesArrays(argsTypesArray: Array<Array<{}>>) {
    const largestLength = this._maxBy(argsTypesArray)!.length;

    for (let i = 0; i < argsTypesArray.length; i++) {
      if (argsTypesArray[i].length !== largestLength) {
        while (argsTypesArray[i].length < largestLength) {
          argsTypesArray[i].push(
            argsTypesArray[i][_random(0, argsTypesArray[i].length - 1)]
          );
        }
      }
    }

    return argsTypesArray;
  }

  _normalizeTypesArrayLengths(argsTypesArray: Array<Array<{}>>) {
    let allAreTheSameLength = true;
    const lastLength = argsTypesArray[0].length;

    for (let i = 1; i < argsTypesArray.length; i++) {
      if (argsTypesArray[i].length !== lastLength) {
        allAreTheSameLength = false;
        break;
      }
    }

    if (allAreTheSameLength) {
      return argsTypesArray;
    }

    return this._backFillUnevenTypesArrays(argsTypesArray);
  }

  _generateTypesToFuzzWith(expectsArgTypes: Array<string | string[]>) {
    let argsTypesArray: Array<Array<{}>> = [];
    let tmpArray = this.generate.types();

    for (let i = 0; i < expectsArgTypes.length; i++) {
      if (!Array.isArray(expectsArgTypes[i])) {
        argsTypesArray.push(
          this.generate.types().filter(item => item !== expectsArgTypes[i])
        );
      } else {
        for (let j = 0; j < expectsArgTypes[i].length; j++) {
          tmpArray = tmpArray.filter(arg => arg !== expectsArgTypes[i][j]);
        }

        argsTypesArray.push(([] as Array<{}>).concat(tmpArray));
        tmpArray = this.generate.types();
      }
    }

    argsTypesArray = this._normalizeTypesArrayLengths(argsTypesArray);
    return argsTypesArray;
  }

  _generateValuesForFuzzTyping(typesToFuzzOnEach: string[][], index: number) {
    const args: Array<{}> = [];
    let typeToGen = '';
    const gen = this.generate as {[key: string]: Function};

    for (let i = 0; i < typesToFuzzOnEach.length; i++) {
      typeToGen = typesToFuzzOnEach[i][index];

      args.push(gen[typeToGen]());
    }

    return args;
  }

  fuzzFunctionForTypes(
    fnToFuzz: Function,
    expectsArgTypes?: string[],
    cb?: Function,
    withContext?: {}
  ) {
    const expectsArgTypesChecked = (Array.isArray(expectsArgTypes)
      ? expectsArgTypes
      : [])!;
    const typesToFuzzOnEach = this._generateTypesToFuzzWith(
      expectsArgTypesChecked
    ) as string[][];

    let returnValue = undefined;

    for (let i = 0; i < typesToFuzzOnEach[0].length; i++) {
      returnValue = fnToFuzz.apply(
        withContext,
        this._generateValuesForFuzzTyping(typesToFuzzOnEach, i)
      );

      if (typeof cb === 'function') {
        cb!(returnValue);
      }
    }

    return true;
  }
}
