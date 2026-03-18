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

import type * as protos from '../../../protos/index.js';
import {getResourceNameByPattern} from '../util.js';

export interface ResourceDescriptor
  extends protos.google.api.IResourceDescriptor {
  name: string;
  params: string[];
}

export class ResourceDatabase {
  patterns: {[pattern: string]: ResourceDescriptor};
  types: {[type: string]: ResourceDescriptor};

  constructor() {
    this.patterns = {};
    this.types = {};
  }

  registerResource(
    resource: protos.google.api.IResourceDescriptor | undefined,
    errorLocation?: string,
  ) {
    if (!resource) {
      return;
    }

    if (!resource.type) {
      if (errorLocation) {
        console.warn(
          `Warning: ${errorLocation} refers to a resource which does not have a type: ${resource}`,
        );
      }
      return;
    }

    const arr = resource.type.match(/\/([^.]+)$/);
    if (!arr?.[1]) {
      if (errorLocation) {
        console.warn(
          `Warning: ${errorLocation} refers to a resource which does not have a proper name: ${resource}`,
        );
      }
      return;
    }
    const patterns = resource.pattern;
    if (!patterns?.[0]) {
      if (errorLocation) {
        console.warn(
          `Warning: ${errorLocation} refers to a resource which does not have a proper pattern: ${resource}`,
        );
      }
      return;
    }
    const multiPattern = patterns!.length > 1;
    // only one pattern exists for the resource.
    if (!multiPattern) {
      const name = arr![1];
      const params = this.getParams(patterns![0]);
      const resourceDescriptor = this.getResourceDescriptor(
        name,
        params,
        resource,
      );
      // We ignore resources with no parameters (e.g. pattern = '*').
      if (params.length > 0) {
        this.patterns[patterns?.[0]] = resourceDescriptor;
        this.types[resourceDescriptor.type!] = resourceDescriptor;
      }
    }
    // resource: {name, type, pattern: [p1, p2]}
    // register resource does: in type map {type: { name, type, pattern: [p1, p2]} }
    //                         in pattern map {p1: { name1, type, p1} , p2: { name2, type, p2}}
    else {
      for (const pattern of patterns!) {
        const params = this.getParams(pattern);
        // We ignore resources with no parameters (e.g. pattern = '*').
        if (params.length === 0) {
          continue;
        }
        const name = getResourceNameByPattern(pattern, resource);
        let resourceDescriptor: ResourceDescriptor = {
          name,
          params,
          pattern: [pattern],
          type: resource.type,
        };
        this.patterns[pattern] = resourceDescriptor;
        resourceDescriptor = this.getResourceDescriptor(name, params, resource);
        if (!this.types[resource.type]) {
          this.types[resource.type] = resourceDescriptor;
        }
      }
    }
  }

  getResourceByType(
    type: string | null | undefined,
    errorLocation?: string,
  ): ResourceDescriptor | undefined {
    if (!type) {
      return undefined;
    }
    if (!this.types[type]) {
      if (errorLocation) {
        console.warn(
          `Warning: ${errorLocation} refers to an unknown resource: ${type}`,
        );
      }
      return undefined;
    }
    return this.types[type];
  }

  getResourceByPattern(
    pattern: string | null | undefined,
    errorLocation?: string,
  ): ResourceDescriptor | undefined {
    if (!pattern) {
      return undefined;
    }
    if (!this.patterns[pattern]) {
      if (errorLocation) {
        console.warn(
          `Warning: ${errorLocation} refers to an unknown resource: ${pattern}`,
        );
      }
      return undefined;
    }
    return this.patterns[pattern];
  }

  getParentResourcesByChildType(
    childType: string | null | undefined,
    errorLocation?: string,
  ): ResourceDescriptor[] {
    // childType looks like "datacatalog.googleapis.com/EntryGroup"
    // its pattern would be like "projects/{project}/locations/{location}/entryGroups/{entry_group}"
    const result: ResourceDescriptor[] = [];

    if (!childType) {
      return result;
    }

    const childResource = this.getResourceByType(childType, errorLocation);
    if (!childResource) {
      return result;
    }

    const childPattern = childResource.pattern?.[0];
    if (!childPattern) {
      return result;
    }

    let pattern = '';
    for (const segment of childPattern.split('/')) {
      if (pattern !== '') {
        pattern += '/';
      }
      pattern += segment;
      const parent = this.getResourceByPattern(pattern);
      if (parent) {
        result.push(parent);
      }
    }

    return result;
  }

  private getParams(pattern: string): string[] {
    const params = pattern.match(/{[a-zA-Z_]+(?:=.*?)?}/g) || [];
    const result = params.map(p => p.replace(/{([a-zA-Z_]+).*/, '$1'));
    return result;
  }

  private getResourceDescriptor(
    name: string,
    params: string[],
    resource: protos.google.api.IResourceDescriptor,
  ): ResourceDescriptor {
    const resourceDescriptor = Object.assign(
      {
        name,
        params,
      },
      resource,
    );
    return resourceDescriptor;
  }
}
