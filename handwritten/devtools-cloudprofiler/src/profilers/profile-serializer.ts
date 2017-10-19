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

import {perftools} from '../profile';
import {getIndexOrAdd} from '../util';
import {TimeProfile, TimeProfileNode} from '../v8-types';
// A stack of function UIDs.
type Stack = Array<number>;
interface Entry {
  node: TimeProfileNode;
  stack: Stack;
}

/**
 * Converts v8 Profile into profile with profile format used by Stackdriver
 * Profiler.
 *
 * @param prof - profile to be converted.
 * @param intervalMicros - average time (microseconds) between samples.
 */
export function serializeTimeProfile(
    prof: TimeProfile, intervalMicros: number) {
  let samples: Array<perftools.profiles.Sample> = [];
  let locations: Array<perftools.profiles.Location> = [];
  let functions: Array<perftools.profiles.Function> = [];
  let locationMap: Map<number, perftools.profiles.Location> = new Map();
  let functionMap: Map<number, perftools.profiles.Function> = new Map();
  let strings = [''];

  let sampleValueType = createSampleValueType();
  let timeValueType = createTimeValueType();

  serializeNode(prof.topDownRoot);

  return {
    sampleType: [sampleValueType, timeValueType],
    sample: samples,
    location: locations,
    function: functions,
    stringTable: strings,
    // opt drop_frames
    // opt keep_frames
    timeNanos: 1000 * 1000 * prof.endTime,                         // Nanos
    durationNanos: 1000 * 1000 * (prof.endTime - prof.startTime),  // Nanos

    periodType: timeValueType,
    period: intervalMicros
  };

  /**
   * Adds samples from a node and it's children to the fields tracking
   * profile serialization.
   *
   * @param node - the node which is serialized
   * @param stack - the stack trace to the current node.
   */
  function serializeNode(root: TimeProfileNode) {
    let entries: Entry[] = [];
    // don't include root node in serialized profile, start with it's children.
    for (let child of root.children) {
      entries.push({node: child, stack: []});
    }
    while (entries.length > 0) {
      let entry = entries.pop();
      if (entry !== undefined) {
        let node = entry.node;
        let stack = entry.stack;
        let location = getLocation(node);
        stack.unshift(location.id as number);
        if (node.hitCount > 0) {
          const sample = new perftools.profiles.Sample({
            locationId: stack,
            value: [node.hitCount, node.hitCount * intervalMicros]
          });
          samples.push(sample);
        }
        for (let child of node.children) {
          entries.push({node: child, stack: stack.slice(0)});
        }
      }
    }
  }

  function getLocation(node: TimeProfileNode): perftools.profiles.Location {
    const id = node.callUid;
    let location = locationMap.get(id);
    if (location !== undefined) {
      return location;
    }
    location = new perftools.profiles.Location({id: id, line: [getLine(node)]});
    locations.push(location);
    locationMap.set(id, location);
    return location;
  }

  function getLine(node: TimeProfileNode): perftools.profiles.Line {
    return new perftools.profiles.Line(
        {functionId: getFunction(node).id, line: node.lineNumber});
  }

  function getFunction(node: TimeProfileNode): perftools.profiles.Function {
    const id = node.callUid;
    let f = functionMap.get(id);
    if (f !== undefined) {
      return f;
    }
    const name = getIndexOrAdd(node.functionName || '(anonymous)', strings);
    f = new perftools.profiles.Function({
      id: id,
      name: name,
      systemName: name,
      filename: getIndexOrAdd(node.scriptResourceName || '(unknown)', strings)
      // start_line
    });
    functions.push(f);
    functionMap.set(id, f);
    return f;
  }

  function createSampleValueType(): perftools.profiles.ValueType {
    return new perftools.profiles.ValueType({
      type: getIndexOrAdd('samples', strings),
      unit: getIndexOrAdd('count', strings)
    });
  }

  function createTimeValueType(): perftools.profiles.ValueType {
    return new perftools.profiles.ValueType({
      type: getIndexOrAdd('time', strings),
      unit: getIndexOrAdd('microseconds', strings)
    });
  }
}
