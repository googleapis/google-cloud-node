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

// eslint-disable-next-line n/no-unsupported-features/node-builtins
import * as inspector from 'inspector';
import {Allocation, AllocationProfileNode} from './v8-types';

let heapSession: inspector.Session | undefined;

interface RawSamplingHeapProfileSample {
  size: number;
  nodeId: number;
  ordinal?: number;
}

interface RawSamplingHeapProfileNode
  extends inspector.HeapProfiler.SamplingHeapProfileNode {
  id?: number;
  children: RawSamplingHeapProfileNode[];
}

interface RawSamplingHeapProfile
  extends inspector.HeapProfiler.SamplingHeapProfile {
  head: RawSamplingHeapProfileNode;
  samples?: RawSamplingHeapProfileSample[];
}

export function translateSamplingHeapProfile(
  profile: RawSamplingHeapProfile
): AllocationProfileNode {
  const samplesByNodeId = new Map<number, Map<number, number>>();
  if (Array.isArray(profile.samples)) {
    for (const sample of profile.samples) {
      let sizeMap = samplesByNodeId.get(sample.nodeId);
      if (!sizeMap) {
        sizeMap = new Map<number, number>();
        samplesByNodeId.set(sample.nodeId, sizeMap);
      }
      sizeMap.set(sample.size, (sizeMap.get(sample.size) || 0) + 1);
    }
  }

  function translateNode(
    node: RawSamplingHeapProfileNode
  ): AllocationProfileNode {
    const allocations: Allocation[] = [];
    const nodeSamples =
      node.id !== undefined ? samplesByNodeId.get(node.id) : undefined;
    if (nodeSamples && nodeSamples.size > 0) {
      for (const [sizeBytes, count] of nodeSamples.entries()) {
        allocations.push({sizeBytes, count});
      }
    } else if (node.selfSize > 0) {
      allocations.push({sizeBytes: node.selfSize, count: 1});
    }

    return {
      name: node.callFrame.functionName,
      scriptName: node.callFrame.url,
      scriptId: Number(node.callFrame.scriptId) || 0,
      lineNumber:
        node.callFrame.lineNumber >= 0 ? node.callFrame.lineNumber + 1 : 0,
      columnNumber:
        node.callFrame.columnNumber >= 0 ? node.callFrame.columnNumber + 1 : 0,
      allocations,
      children: (node.children || []).map(translateNode),
    };
  }

  return translateNode(profile.head);
}

export function startSamplingHeapProfiler(
  heapIntervalBytes: number,
  heapStackDepth?: number
): void {
  void heapStackDepth;
  if (!heapSession) {
    const session = new inspector.Session();
    try {
      session.connect();
      heapSession = session;
    } catch {
      // Ignore connection errors on unsupported runtimes.
      return;
    }
  }
  try {
    heapSession.post('HeapProfiler.enable', () => {});
    heapSession.post(
      'HeapProfiler.startSampling',
      {samplingInterval: heapIntervalBytes},
      () => {}
    );
  } catch {
    // Non-V8 runtimes (such as Bun/JavaScriptCore) do not expose HeapProfiler
    // over node:inspector; getAllocationProfile() falls back to an empty root.
  }
}

export function stopSamplingHeapProfiler(): void {
  if (heapSession) {
    try {
      heapSession.post('HeapProfiler.stopSampling', () => {});
      heapSession.post('HeapProfiler.disable', () => {});
    } catch {
      // Ignore if HeapProfiler is unsupported.
    }
    try {
      heapSession.disconnect();
    } catch {
      // Ignore disconnect errors.
    }
    heapSession = undefined;
  }
}

function createEmptyRoot(): AllocationProfileNode {
  return {
    name: '(root)',
    scriptName: '(root)',
    scriptId: 0,
    lineNumber: 0,
    columnNumber: 0,
    allocations: [],
    children: [],
  };
}

export function getAllocationProfile(): Promise<AllocationProfileNode> {
  return new Promise(resolve => {
    if (heapSession) {
      try {
        heapSession.post('HeapProfiler.getSamplingProfile', (err, params) => {
          if (!err && params && params.profile) {
            resolve(
              translateSamplingHeapProfile(
                params.profile as RawSamplingHeapProfile
              )
            );
          } else {
            resolve(createEmptyRoot());
          }
        });
        return;
      } catch {
        // Fall through to empty root node.
      }
    }
    resolve(createEmptyRoot());
  });
}
