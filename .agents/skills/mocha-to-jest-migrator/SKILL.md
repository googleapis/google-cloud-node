---
name: mocha-to-jest-migrator
description: Specialized guidance for migrating Node.js packages from the legacy Mocha, Sinon, and Istanbul/c8 ecosystem to Jest. It focuses on surgical test transformation, type safety, and resolving ESM/CommonJS interoperability issues.
---

1. Infrastructure Migration
 * Dependency Swap: Remove mocha, @types/mocha, sinon, @types/sinon, c8, codecov, proxyquire, and @types/proxyquire. Install
   jest, ts-jest, and @types/jest.
 * Script Alignment: Update package.json to use jest for the test and system-test commands. Avoid NODE_OPTIONS or
   experimental flags if possible by using mocking.
 * Config Generation: Create a jest.config.js using the modern transform block for ts-jest:
   ```javascript
   transform: { '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
   clearMocks: true
   ```
     * In the config file, include this license header:
     ```javascript
    // Copyright 2026 Google LLC
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //      https://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
     ```
2. Syntax Transformation (Cheat Sheet)
 * Structure: Jest supports describe, it, beforeEach, etc., natively. No changes are needed to the block structure.
 * Assertions: 
     * assert.strictEqual(a, b) → expect(a).toBe(b)
     * assert.deepStrictEqual(a, b) → expect(a).toEqual(b)
     * assert.ifError(err) → expect(err).toBeNull()
     * somePromise.then(result => assert.deepStrictEqual(result, expected)) → expect(somePromise).resolves.toEqual(expected)
 * Mocking:
     * sinon.stub(obj, 'meth') → jest.spyOn(obj, 'meth').mockImplementation(...)
     * sinon.fn() → jest.fn()
     * proxyquire(path, { 'dep': mock }) → jest.mock('dep', () => mock)
3. Advanced Patterns
 * Strong Typing: If possible without adding to much complexity, remove the use of `any` from the tests as you go. 
 * Top-Level Mocking: If a dependency uses ESM dynamic imports (like import('node-fetch')) that trigger TypeError in Jest,
   mock that dependency at the top level of the test file using jest.mock(). This bypasses the need for the
   --experimental-vm-modules flag.
 * Async Robustness: For tests using done(), always wrap expectations in try-catch blocks and pass the error to done(e) to
   prevent tests from hanging on failure.
4. Cleanup Workflow
 * Config Deletion: Remove .mocharc.js, .nycrc, and old .coverage or .nyc_output directories.
 * Git: Update .gitignore to ignore `coverage/`.
