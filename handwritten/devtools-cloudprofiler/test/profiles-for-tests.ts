/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import {perftools} from '../src/profile';
import {TimeProfile, TimeProfileNode} from '../src/v8-types';

const timeLeaf1 = {
  name: 'function1',
  scriptName: 'script1',
  scriptId: 1,
  lineNumber: 10,
  columnNumber: 5,
  hitCount: 1,
  children: []
};

const timeLeaf2 = {
  name: 'function1',
  scriptName: 'script2',
  scriptId: 2,
  lineNumber: 15,
  columnNumber: 3,
  hitCount: 2,
  children: []
};

const timeLeaf3 = {
  name: 'function1',
  scriptName: 'script1',
  scriptId: 1,
  lineNumber: 5,
  columnNumber: 3,
  hitCount: 1,
  children: []
};

const timeNode1 = {
  name: 'function1',
  scriptName: 'script1',
  scriptId: 1,
  lineNumber: 5,
  columnNumber: 3,
  hitCount: 3,
  children: [timeLeaf1, timeLeaf2]
};

const timeNode2 = {
  name: 'function2',
  scriptName: 'script2',
  scriptId: 2,
  lineNumber: 1,
  columnNumber: 5,
  hitCount: 0,
  children: [timeLeaf3]
};

const timeRoot = {
  name: '(root)',
  scriptName: 'root',
  scriptId: 0,
  lineNumber: 0,
  columnNumber: 0,
  hitCount: 0,
  children: [timeNode1, timeNode2]
};

export const v8TimeProfile: TimeProfile = {
  startTime: 0,
  endTime: 10 * 1000,
  topDownRoot: timeRoot,
};

const timeLines = [
  {functionId: 1, line: 1},
  {functionId: 2, line: 5},
  {functionId: 3, line: 15},
  {functionId: 2, line: 10},
];

const timeFunctions = [
  new perftools.profiles.Function({id: 1, name: 5, systemName: 5, filename: 6}),
  new perftools.profiles.Function({id: 2, name: 7, systemName: 7, filename: 8}),
  new perftools.profiles.Function({id: 3, name: 7, systemName: 7, filename: 6}),
];

const timeLocations = [
  new perftools.profiles.Location({
    line: [timeLines[0]],
    id: 1,
  }),
  new perftools.profiles.Location({
    line: [timeLines[1]],
    id: 2,
  }),
  new perftools.profiles.Location({
    line: [timeLines[2]],
    id: 3,
  }),
  new perftools.profiles.Location({
    line: [timeLines[3]],
    id: 4,
  }),
];

export const timeProfile: perftools.profiles.IProfile = {
  sampleType: [
    new perftools.profiles.ValueType({type: 1, unit: 2}),
    new perftools.profiles.ValueType({type: 3, unit: 4}),
  ],
  sample: [
    new perftools.profiles.Sample(
        {locationId: [2, 1], value: [1, 1000], label: []}),
    new perftools.profiles.Sample(
        {locationId: [2], value: [3, 3000], label: []}),
    new perftools.profiles.Sample(
        {locationId: [3, 2], value: [2, 2000], label: []}),
    new perftools.profiles.Sample(
        {locationId: [4, 2], value: [1, 1000], label: []}),

  ],
  location: timeLocations,
  function: timeFunctions,
  stringTable: [
    '',
    'samples',
    'count',
    'time',
    'microseconds',
    'function2',
    'script2',
    'function1',
    'script1',
  ],
  timeNanos: 0,
  durationNanos: 10 * 1000 * 1000 * 1000,
  periodType: new perftools.profiles.ValueType({type: 3, unit: 4}),
  period: 1000,
};


const heapLeaf1 = {
  name: 'function2',
  scriptName: 'script1',
  scriptId: 1,
  lineNumber: 8,
  columnNumber: 5,
  allocations: [{count: 5, sizeBytes: 1024}],
  children: []
};

const heapLeaf2 = {
  name: 'function3',
  scriptName: 'script1',
  scriptId: 1,
  lineNumber: 10,
  columnNumber: 5,
  allocations: [{count: 8, sizeBytes: 10}, {count: 15, sizeBytes: 72}],
  children: []
};

const heapNode2 = {
  name: 'function1',
  scriptName: 'script1',
  scriptId: 1,
  lineNumber: 5,
  columnNumber: 5,
  allocations: [],
  children: [heapLeaf1, heapLeaf2]
};

const heapNode1 = {
  name: 'main',
  scriptName: 'main',
  scriptId: 0,
  lineNumber: 1,
  columnNumber: 5,
  allocations: [{count: 1, sizeBytes: 5}, {count: 3, sizeBytes: 7}],
  children: [heapNode2]
};

export const v8HeapProfile = {
  name: '(root)',
  scriptName: '(root)',
  scriptId: 10000,
  lineNumber: 0,
  columnNumber: 5,
  allocations: [],
  children: [heapNode1]
};

const heapLines = [
  {functionId: 1, line: 1}, {functionId: 2, line: 5}, {functionId: 3, line: 10},
  {functionId: 4, line: 8}
];

const heapFunctions = [
  new perftools.profiles.Function({id: 1, name: 5, systemName: 5, filename: 5}),
  new perftools.profiles.Function({id: 2, name: 6, systemName: 6, filename: 7}),
  new perftools.profiles.Function({id: 3, name: 8, systemName: 8, filename: 7}),
  new perftools.profiles.Function(
      {id: 4, name: 9, systemName: 9, filename: 7})
];

const heapLocations = [
  new perftools.profiles.Location({line: [heapLines[0]], id: 1}),
  new perftools.profiles.Location({line: [heapLines[1]], id: 2}),
  new perftools.profiles.Location({line: [heapLines[2]], id: 3}),
  new perftools.profiles.Location({line: [heapLines[3]], id: 4}),
];

export const heapProfile: perftools.profiles.IProfile = {
  sampleType: [
    new perftools.profiles.ValueType({type: 1, unit: 2}),
    new perftools.profiles.ValueType({type: 3, unit: 4}),
  ],
  sample: [
    new perftools.profiles.Sample({locationId: [1], value: [1, 5], label: []}),
    new perftools.profiles.Sample({locationId: [1], value: [3, 21], label: []}),
    new perftools.profiles.Sample(
        {locationId: [3, 2, 1], value: [8, 80], label: []}),
    new perftools.profiles.Sample(
        {locationId: [3, 2, 1], value: [15, 15 * 72], label: []}),
    new perftools.profiles.Sample(
        {locationId: [4, 2, 1], value: [5, 5 * 1024], label: []}),
  ],
  location: heapLocations,
  function: heapFunctions,
  stringTable: [
    '',
    'samples',
    'count',
    'space',
    'bytes',
    'main',
    'function1',
    'script1',
    'function3',
    'function2',
  ],
  timeNanos: 0,
  durationNanos: 10 * 1000 * 1000 * 1000,
  periodType: new perftools.profiles.ValueType({type: 3, unit: 4}),
  period: 524288
};
