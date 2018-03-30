/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
// jscs:disable
// jshint ignore: start

import indexOf = require('lodash.indexof');
import without = require('lodash.without');
import maxBy = require('lodash.maxby');
import random = require('lodash.random');
import * as is from 'is';

const isNumber = is.number;
const isString = is.string;
const isArray = is.array;
const isFunction = is.function;


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

    string(len) {
      const lenChecked = isNumber(len) ? len : 10;
      const chars: string[] = [];

      for (let i = 0; i < lenChecked; i++) {
        chars.push(String.fromCharCode(random(32, 126)));
      }

      return chars.join('');
    },

    boolean() {
      return !!random(0, 1);
    },

    alphaNumericString(len) {
      const lenChecked = isNumber(len) ? len : 10;
      const chars: string[] = [];
      let thisRange: number[] = [];
      const ranges = [[48, 57], [65, 90], [97, 122]];

      for (let i = 0; i < lenChecked; i++) {
        thisRange = ranges[random(0, 2)];
        chars.push(String.fromCharCode(random(thisRange[0], thisRange[1])));
      }

      return chars.join('');
    },

    function() {
      const availableTypes = without(this.types(), 'function');
      const typeToGen = this.types()[random(0, availableTypes.length - 1)];
      const fnToCall = this[typeToGen];

      return () => {
        return fnToCall();
      };
    },

    number(lower, upper) {
      const lowerChecked = isNumber(lower) ? lower : 0;
      const upperChecked = isNumber(upper) ? upper : 100;

      return random(lowerChecked, upperChecked);
    },

    null() {
      return null;
    },

    undefined() {
      return undefined;
    },

    array(len, ofOneType, currentDepth, allowedDepth) {
      const lenChecked = isNumber(len) ? len : random(1, 10);
      let availableTypes =
          isString(ofOneType) && indexOf(this.types(), ofOneType) > -1 ?
          [ofOneType] :
          this.types();
      let currentDepthChecked = isNumber(currentDepth) ? currentDepth : 0;
      const allowedDepthChecked = isNumber(allowedDepth) ? allowedDepth : 3;
      const arr: Array<{}> = [];
      let currentTypeBeingGenerated = '';
      currentDepthChecked += 1;

      // Deny the ability to nest more objects
      if (currentDepthChecked >= allowedDepthChecked) {
        availableTypes = without(this.types(), 'object', 'array');
      }

      for (let i = 0; i < lenChecked; i++) {
        currentTypeBeingGenerated =
            availableTypes[random(0, availableTypes.length - 1)];

        if (currentTypeBeingGenerated === 'object') {
          arr.push(this[currentTypeBeingGenerated](
              null, currentDepthChecked, allowedDepthChecked));
        } else if (currentTypeBeingGenerated === 'array') {
          arr.push(this[currentTypeBeingGenerated](
              null, ofOneType, currentDepthChecked, allowedDepthChecked));
        } else {
          arr.push(this[currentTypeBeingGenerated]());
        }
      }

      return arr;
    },

    object(numProperties, currentDepth, allowedDepth) {
      const numPropertiesChecked =
          isNumber(numProperties) ? numProperties : random(1, 10);
      let currentDepthChecked = isNumber(currentDepth) ? currentDepth : 0;
      const allowedDepthChecked = isNumber(allowedDepth) ? allowedDepth : 3;
      const obj = {};
      currentDepthChecked += 1;

      let availableTypes = this.types();

      // Deny the ability to nest more objects
      if (currentDepth >= allowedDepth) {
        availableTypes = without(availableTypes, 'object', 'array');
      }

      let currentTypeBeingGenerated: string|number = 0;
      let currentKey = '';

      for (let i = 0; i < numPropertiesChecked; i++) {
        currentTypeBeingGenerated =
            availableTypes[random(0, availableTypes.length - 1)];
        currentKey = this.alphaNumericString(random(1, 10));

        if (currentTypeBeingGenerated === 'object') {
          obj[currentKey] = this[currentTypeBeingGenerated](
              null, currentDepthChecked, allowedDepthChecked);
        } else if (currentTypeBeingGenerated === 'array') {
          obj[currentKey] = this[currentTypeBeingGenerated](
              null, null, currentDepthChecked, allowedDepthChecked);
        } else {
          obj[currentKey] = this[currentTypeBeingGenerated]();
        }
      }

      return obj;
    }
  };

  _backFillUnevenTypesArrays(argsTypesArray) {
    const largestLength = maxBy(argsTypesArray, o => {
                            return o.length;
                          }).length;

    for (let i = 0; i < argsTypesArray.length; i++) {
      if (argsTypesArray[i].length !== largestLength) {
        while (argsTypesArray[i].length < largestLength) {
          argsTypesArray[i].push(
              argsTypesArray[i][random(0, argsTypesArray[i].length - 1)]);
        }
      }
    }

    return argsTypesArray;
  }

  _normalizeTypesArrayLengths(argsTypesArray) {
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

  _generateTypesToFuzzWith(expectsArgTypes) {
    let argsTypesArray: Array<Array<{}>> = [];
    let tmpArray = this.generate.types();

    for (let i = 0; i < expectsArgTypes.length; i++) {
      if (!isArray(expectsArgTypes[i])) {
        argsTypesArray.push(without(this.generate.types(), expectsArgTypes[i]));
      } else {
        for (let j = 0; j < expectsArgTypes[i].length; j++) {
          tmpArray = without(tmpArray, expectsArgTypes[i][j]);
        }

        argsTypesArray.push(([] as Array<{}>).concat(tmpArray));
        tmpArray = this.generate.types();
      }
    }

    argsTypesArray = this._normalizeTypesArrayLengths(argsTypesArray);
    return argsTypesArray;
  }

  _generateValuesForFuzzTyping(typesToFuzzOnEach, index) {
    const args: Array<{}> = [];
    let typeToGen = '';

    for (let i = 0; i < typesToFuzzOnEach.length; i++) {
      typeToGen = typesToFuzzOnEach[i][index];

      args.push(this.generate[typeToGen]());
    }

    return args;
  }

  fuzzFunctionForTypes(
      fnToFuzz, expectsArgTypes?: {}, cb?: Function, withContext?: {}) {
    const expectsArgTypesChecked =
        isArray(expectsArgTypes) ? expectsArgTypes : [];
    const typesToFuzzOnEach =
        this._generateTypesToFuzzWith(expectsArgTypesChecked);

    let returnValue = undefined;

    for (let i = 0; i < typesToFuzzOnEach[0].length; i++) {
      returnValue = fnToFuzz.apply(
          withContext, this._generateValuesForFuzzTyping(typesToFuzzOnEach, i));

      if (isFunction(cb)) {
        cb!(returnValue);
      }
    }

    return true;
  }
}
