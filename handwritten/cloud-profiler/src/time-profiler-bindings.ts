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
import {performance} from 'perf_hooks';
import {TimeProfile, TimeProfileNode} from './v8-types';

let session: inspector.Session | undefined;
let samplingIntervalMicros = 1000;
let activeProfiler = false;
let startWallMicros = 0;

function getSession(): inspector.Session {
  if (!session) {
    session = new inspector.Session();
    try {
      session.connect();
      session.post('Profiler.enable', () => {});
    } catch {
      // Ignore if already enabled or unsupported.
    }
  }
  return session;
}

function createTimeNode(
  name: string,
  scriptName: string,
  scriptId: number,
  lineNumber: number,
  columnNumber: number,
  hitCount: number,
  children: TimeProfileNode[]
): TimeProfileNode {
  return {
    name,
    scriptName,
    scriptId,
    lineNumber,
    columnNumber,
    hitCount,
    children,
  };
}

function getLineNumberTimeProfileChildren(
  nodeMap: Map<number, inspector.Profiler.ProfileNode>,
  parent: inspector.Profiler.ProfileNode,
  node: inspector.Profiler.ProfileNode
): TimeProfileNode[] {
  const children: TimeProfileNode[] = [];
  const hitLineCount = node.positionTicks ? node.positionTicks.length : 0;
  const hitCount = node.hitCount || 0;
  if (hitLineCount > 0 && node.positionTicks) {
    for (const entry of node.positionTicks) {
      children.push(
        createTimeNode(
          node.callFrame.functionName,
          node.callFrame.url,
          Number(node.callFrame.scriptId) || 0,
          entry.line,
          0,
          entry.ticks,
          []
        )
      );
    }
  } else if (hitCount > 0) {
    children.push(
      createTimeNode(
        node.callFrame.functionName,
        node.callFrame.url,
        Number(node.callFrame.scriptId) || 0,
        node.callFrame.lineNumber >= 0 ? node.callFrame.lineNumber + 1 : 0,
        node.callFrame.columnNumber >= 0 ? node.callFrame.columnNumber + 1 : 0,
        hitCount,
        []
      )
    );
  }

  if (node.children) {
    for (const childId of node.children) {
      const child = nodeMap.get(childId);
      if (child) {
        children.push(
          translateLineNumbersTimeProfileNode(nodeMap, node, child)
        );
      }
    }
  }
  return children;
}

function translateLineNumbersTimeProfileNode(
  nodeMap: Map<number, inspector.Profiler.ProfileNode>,
  parent: inspector.Profiler.ProfileNode,
  node: inspector.Profiler.ProfileNode
): TimeProfileNode {
  return createTimeNode(
    parent.callFrame.functionName,
    parent.callFrame.url,
    Number(parent.callFrame.scriptId) || 0,
    parent.callFrame.lineNumber >= 0 ? parent.callFrame.lineNumber + 1 : 0,
    parent.callFrame.columnNumber >= 0 ? parent.callFrame.columnNumber + 1 : 0,
    0,
    getLineNumberTimeProfileChildren(nodeMap, parent, node)
  );
}

function translateLineNumbersTimeProfileRoot(
  nodeMap: Map<number, inspector.Profiler.ProfileNode>,
  root: inspector.Profiler.ProfileNode
): TimeProfileNode {
  const children: TimeProfileNode[] = [];
  if (root.children) {
    for (const childId of root.children) {
      const child = nodeMap.get(childId);
      if (child) {
        children.push(
          ...getLineNumberTimeProfileChildren(nodeMap, root, child)
        );
      }
    }
  }
  return createTimeNode(
    root.callFrame.functionName,
    root.callFrame.url,
    Number(root.callFrame.scriptId) || 0,
    root.callFrame.lineNumber >= 0 ? root.callFrame.lineNumber + 1 : 0,
    root.callFrame.columnNumber >= 0 ? root.callFrame.columnNumber + 1 : 0,
    0,
    children
  );
}

function translateTimeProfileNode(
  nodeMap: Map<number, inspector.Profiler.ProfileNode>,
  node: inspector.Profiler.ProfileNode
): TimeProfileNode {
  const children: TimeProfileNode[] = [];
  if (node.children) {
    for (const childId of node.children) {
      const child = nodeMap.get(childId);
      if (child) {
        children.push(translateTimeProfileNode(nodeMap, child));
      }
    }
  }
  return createTimeNode(
    node.callFrame.functionName,
    node.callFrame.url,
    Number(node.callFrame.scriptId) || 0,
    node.callFrame.lineNumber >= 0 ? node.callFrame.lineNumber + 1 : 0,
    node.callFrame.columnNumber >= 0 ? node.callFrame.columnNumber + 1 : 0,
    node.hitCount || 0,
    children
  );
}

export function translateCpuProfile(
  profile: inspector.Profiler.Profile,
  includeLineInfo?: boolean,
  elapsedWallMicros?: number
): TimeProfile {
  const nodeMap = new Map<number, inspector.Profiler.ProfileNode>();
  let hasIdleNode = false;
  let totalHits = 0;

  for (const node of profile.nodes || []) {
    nodeMap.set(node.id, node);
    if (node.callFrame.functionName === '(idle)') {
      hasIdleNode = true;
    }
    totalHits += node.hitCount || 0;
  }

  const root =
    nodeMap.get(1) ||
    (profile.nodes && profile.nodes.length > 0 ? profile.nodes[0] : undefined);

  const topDownRoot: TimeProfileNode = root
    ? includeLineInfo
      ? translateLineNumbersTimeProfileRoot(nodeMap, root)
      : translateTimeProfileNode(nodeMap, root)
    : createTimeNode('(root)', '', 0, 0, 0, 0, []);

  if (
    !hasIdleNode &&
    elapsedWallMicros !== undefined &&
    elapsedWallMicros > 0 &&
    samplingIntervalMicros > 0
  ) {
    const activeMicros = totalHits * samplingIntervalMicros;
    const idleMicros = elapsedWallMicros - activeMicros;
    if (idleMicros >= samplingIntervalMicros) {
      const idleHits = Math.floor(idleMicros / samplingIntervalMicros);
      topDownRoot.children.push(
        createTimeNode('(idle)', '', 0, 0, 0, idleHits, [])
      );
    }
  }

  const startTime = Math.round(profile.startTime || 0);
  const rawEndTime = Math.round(profile.endTime || 0);
  const endTime =
    elapsedWallMicros !== undefined &&
    rawEndTime - startTime < elapsedWallMicros
      ? startTime + elapsedWallMicros
      : rawEndTime;

  return {
    startTime,
    endTime,
    topDownRoot,
  };
}

export function startProfiling(
  runName?: string,
  includeLineInfo?: boolean
): void {
  void runName;
  void includeLineInfo;
  if (activeProfiler) {
    throw new Error('CPU profiler is already started.');
  }
  activeProfiler = true;
  startWallMicros = performance.now() * 1000;
  const s = getSession();
  try {
    s.post(
      'Profiler.setSamplingInterval',
      {interval: samplingIntervalMicros},
      () => {}
    );
    s.post('Profiler.start', () => {});
  } catch {
    // Ignore inspector errors on runtimes without Profiler domain.
  }
}

export function stopProfiling(
  _runName: string,
  includeLineInfo?: boolean
): TimeProfile | Promise<TimeProfile> {
  if (!activeProfiler) {
    throw new Error('StopProfiling called without an active CPU profiler.');
  }
  activeProfiler = false;
  const elapsedWallMicros = Math.max(
    0,
    Math.round(performance.now() * 1000 - startWallMicros)
  );
  const s = getSession();

  let syncResult: TimeProfile | undefined;
  let syncError: Error | undefined;
  let isSync = true;

  let resolveAsync: ((value: TimeProfile) => void) | undefined;
  let rejectAsync: ((reason?: unknown) => void) | undefined;

  try {
    s.post('Profiler.stop', (err, params) => {
      let result: TimeProfile | undefined;
      let error: Error | undefined;

      if (err || !params || !params.profile) {
        error = err || new Error('No profile returned from Profiler.stop');
      } else {
        result = translateCpuProfile(
          params.profile,
          includeLineInfo,
          elapsedWallMicros
        );
      }

      if (isSync) {
        syncResult = result;
        syncError = error;
      } else {
        if (error) {
          rejectAsync!(error);
        } else {
          resolveAsync!(result!);
        }
      }
    });
  } catch {
    syncResult = {
      startTime: 0,
      endTime: elapsedWallMicros,
      topDownRoot: createTimeNode('(root)', '', 0, 0, 0, 0, []),
    };
  }

  isSync = false;

  if (syncError) {
    throw syncError;
  }
  if (syncResult !== undefined) {
    return syncResult;
  }

  return new Promise<TimeProfile>((resolve, reject) => {
    resolveAsync = resolve;
    rejectAsync = reject;
  });
}

export function setSamplingInterval(intervalMicros: number): void {
  samplingIntervalMicros = intervalMicros;
  const s = getSession();
  try {
    s.post(
      'Profiler.setSamplingInterval',
      {interval: intervalMicros},
      () => {}
    );
  } catch {
    // Ignore if profiler is currently active or unsupported.
  }
}
