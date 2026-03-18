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
import {ResourceDatabase} from '../../src/schema/resource-database.js';
import {describe, it, beforeEach, afterEach} from 'mocha';
import assert from 'assert';

describe('src/schema/resource-database.ts', () => {
  let warnings: string[] = [];
  const savedWarn = console.warn;
  const errorLocation = 'ERROR LOCATION';
  const resourceName = 'Example';
  const resourceType = 'examples.googleapis.com/Example';
  const resourcePattern = 'locations/{location}/examples/{example}';
  const resourcePattern2 = 'project/{project}/examples/{example}';
  const resourcePatternSpecial1 = 'location/{location}/profile/case/{case_id}';
  const resourcePatternSpecial2 = 'organization/{organization=**}/case';
  const resourcePatternSpecial3 = '{organization=**}/tasks/{task}/result';
  const nonSlashPatternSpecial =
    'organization/{organization}/tasks/{taskId}-{taskName}/result';
  const nonSlashPatternSpecial2 =
    'organization/{organization}/tasks/{taskId=*}.{taskName}/result';
  const resourceParameters = ['location', 'example'];
  const parentResourceName = 'Location';
  const parentResourceType = 'locations.googleapis.com/Location';
  const parentResourcePattern = 'locations/{location}';

  beforeEach(() => {
    warnings = [];
    console.warn = (message: string) => {
      warnings.push(message);
    };
  });

  afterEach(() => {
    console.warn = savedWarn;
  });

  it('warns when registering resource with no type', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: '',
      pattern: [resourcePattern],
    };

    rdb.registerResource(resource, errorLocation);
    assert(warnings.filter(w => w.includes(errorLocation)).length > 0);
  });

  it('warns when registering resource with malformed type', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: 'examples.googleapis.com',
      pattern: [resourcePattern],
    };

    rdb.registerResource(resource, errorLocation);
    assert(warnings.filter(w => w.includes(errorLocation)).length > 0);
  });

  it('warns when registering resource with no pattern', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceType,
      pattern: [],
    };

    rdb.registerResource(resource, errorLocation);
    assert(warnings.filter(w => w.includes(errorLocation)).length > 0);
  });

  it('can register multi-pattern resource properly', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceType,
      pattern: [resourcePattern, resourcePattern2],
    };
    rdb.registerResource(resource, errorLocation);
    const resourceByType = rdb.getResourceByType(resourceType);
    assert.deepStrictEqual(resourceByType!.pattern, [
      resourcePattern,
      resourcePattern2,
    ]);
    const registeredResource1 = rdb.getResourceByPattern(resourcePattern);
    assert(registeredResource1);
    const registeredResource2 = rdb.getResourceByPattern(resourcePattern2);
    assert(registeredResource2);
    assert.strictEqual(registeredResource1!.type, resourceType);
    assert.strictEqual(registeredResource2!.type, resourceType);
    assert.strictEqual(registeredResource1!.name, 'location_example');
    assert.strictEqual(registeredResource2!.name, 'project_example');
    assert.strictEqual(warnings.length, 0);
  });

  it('can register multi-pattern resource properly when it supports both singular and plural resource', () => {
    const rdb = new ResourceDatabase();
    const resourceTypeSingularPluralExample =
      'discoveryengine.googleapis.com/CmekConfig';
    const resourcePatternSingular =
      'projects/{project}/locations/{location}/cmekConfig';
    const resourcePatternPlural =
      'projects/{project}/locations/{location}/cmekConfigs/{cmek_config}';
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceTypeSingularPluralExample,
      pattern: [resourcePatternSingular, resourcePatternPlural],
      plural: 'cmekConfigs',
      singular: 'cmekConfig',
    };
    rdb.registerResource(resource, errorLocation);
    const resourceByType = rdb.getResourceByType(
      resourceTypeSingularPluralExample,
    );
    assert.deepStrictEqual(resourceByType!.pattern, [
      resourcePatternSingular,
      resourcePatternPlural,
    ]);
    const registeredResource1 = rdb.getResourceByPattern(
      resourcePatternSingular,
    );
    assert(registeredResource1);
    const registeredResource2 = rdb.getResourceByPattern(resourcePatternPlural);
    assert(registeredResource2);
    assert.strictEqual(
      registeredResource1!.type,
      resourceTypeSingularPluralExample,
    );
    assert.strictEqual(
      registeredResource2!.type,
      resourceTypeSingularPluralExample,
    );
    assert.strictEqual(
      registeredResource1!.name,
      'project_location_cmekConfig',
    );
    assert.strictEqual(
      registeredResource2!.name,
      'project_location_cmekConfigs',
    );
    assert.strictEqual(warnings.length, 0);
  });

  it('get correct resource name for special patterns', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: 'examples.googleapis.com/Case',
      pattern: [
        resourcePatternSpecial1,
        resourcePatternSpecial2,
        resourcePatternSpecial3,
        nonSlashPatternSpecial,
        nonSlashPatternSpecial2,
      ],
    };
    rdb.registerResource(resource, errorLocation);
    const registeredResource = rdb.getResourceByType(
      'examples.googleapis.com/Case',
    );
    assert(registeredResource);
    assert.strictEqual(
      registeredResource!.type,
      'examples.googleapis.com/Case',
    );
    const registeredResourceByPattern = rdb.getResourceByPattern(
      resourcePatternSpecial1,
    );
    assert(registeredResourceByPattern);
    assert.strictEqual(
      registeredResourceByPattern!.name,
      'location_profile_case_id',
    );
    const registeredResourceByPattern2 = rdb.getResourceByPattern(
      resourcePatternSpecial2,
    );
    assert(registeredResourceByPattern2);
    assert.strictEqual(registeredResourceByPattern2!.name, 'organization_case');

    const registeredResourceByPattern3 = rdb.getResourceByPattern(
      resourcePatternSpecial3,
    );
    assert(registeredResourceByPattern3);
    assert.strictEqual(registeredResourceByPattern3!.name, 'task_result');

    const registeredNonSlashResource = rdb.getResourceByPattern(
      nonSlashPatternSpecial,
    );
    assert(registeredNonSlashResource);
    assert.strictEqual(
      registeredNonSlashResource!.name,
      'organization_taskId_taskName_result',
    );

    const registeredNonSlashResource2 = rdb.getResourceByPattern(
      nonSlashPatternSpecial2,
    );
    assert(registeredNonSlashResource2);
    assert.strictEqual(
      registeredNonSlashResource2!.name,
      'organization_taskId_taskName_result',
    );
  });

  it('get correct resource name for single non-slash pattern resource', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: 'examples.googleapis.com/Case',
      pattern: [nonSlashPatternSpecial],
    };
    rdb.registerResource(resource, errorLocation);
    const registeredResource = rdb.getResourceByType(
      'examples.googleapis.com/Case',
    );
    assert(registeredResource);
    assert.strictEqual(
      registeredResource!.type,
      'examples.googleapis.com/Case',
    );

    const registeredNonSlashResource = rdb.getResourceByPattern(
      nonSlashPatternSpecial,
    );
    assert(registeredNonSlashResource);
    assert.strictEqual(registeredNonSlashResource!.name, 'Case');
  });

  it('can get registered resource by type', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceType,
      pattern: [resourcePattern],
    };

    rdb.registerResource(resource, errorLocation);
    const registeredResource = rdb.getResourceByType(resourceType);
    assert(registeredResource);
    assert.strictEqual(registeredResource!.type, resourceType);
    assert.strictEqual(registeredResource!.name, resourceName);
    assert.deepStrictEqual(registeredResource!.pattern, [resourcePattern]);
    assert.strictEqual(warnings.length, 0);
  });

  it('can get registered resource by pattern', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceType,
      pattern: [resourcePattern],
    };

    rdb.registerResource(resource, errorLocation);
    const registeredResource = rdb.getResourceByPattern(resourcePattern);
    assert(registeredResource);
    assert.strictEqual(registeredResource!.type, resourceType);
    assert.strictEqual(registeredResource!.name, resourceName);
    assert.deepStrictEqual(registeredResource!.pattern, [resourcePattern]);
    assert.strictEqual(warnings.length, 0);
  });

  it('extracts parameters from pattern', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceType,
      pattern: [resourcePattern],
    };

    rdb.registerResource(resource, errorLocation);
    const registeredResource = rdb.getResourceByType(resourceType);
    assert(registeredResource);
    assert.deepStrictEqual(registeredResource!.params, resourceParameters);
    assert.strictEqual(warnings.length, 0);
  });

  it('warns if cannot find resource by name', () => {
    const rdb = new ResourceDatabase();

    const notFoundResource = rdb.getResourceByType(resourceType, errorLocation);
    assert.strictEqual(notFoundResource, undefined);
    assert(warnings.filter(w => w.includes(errorLocation)).length > 0);
  });

  it('warns if cannot find resource by type', () => {
    const rdb = new ResourceDatabase();

    const notFoundResource = rdb.getResourceByType(resourceType, errorLocation);
    assert.strictEqual(notFoundResource, undefined);
    assert(warnings.filter(w => w.includes(errorLocation)).length > 0);
  });

  it('warns if cannot find resource by pattern', () => {
    const rdb = new ResourceDatabase();

    const notFoundResource = rdb.getResourceByPattern(
      resourcePattern,
      errorLocation,
    );
    assert.strictEqual(notFoundResource, undefined);
    assert(warnings.filter(w => w.includes(errorLocation)).length > 0);
  });

  it('returns known parent resources', () => {
    const rdb = new ResourceDatabase();
    const parentResource: protos.google.api.IResourceDescriptor = {
      type: parentResourceType,
      pattern: [parentResourcePattern],
    };
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceType,
      pattern: [resourcePattern],
    };
    rdb.registerResource(parentResource);
    rdb.registerResource(resource);

    const parentResources = rdb.getParentResourcesByChildType(resourceType);
    assert.strictEqual(parentResources.length, 2);
    assert.strictEqual(parentResources[0].name, parentResourceName);
    assert.strictEqual(parentResources[1].name, resourceName);
    assert.strictEqual(warnings.length, 0);
  });

  it('can parse different patterns into parameters', () => {
    const rdb = new ResourceDatabase();
    const resource: protos.google.api.IResourceDescriptor = {
      type: resourceType,
      pattern: [
        'lettersdigits/{abc123}/underscores/{snake_case}/trailing/{trailing=**}',
      ],
    };

    rdb.registerResource(resource, errorLocation);
    const registeredResource = rdb.getResourceByType(resourceType);
    assert(registeredResource);
    assert.deepStrictEqual(registeredResource!.params, [
      'snake_case',
      'trailing',
    ]);
    assert.strictEqual(warnings.length, 0);
  });
});
