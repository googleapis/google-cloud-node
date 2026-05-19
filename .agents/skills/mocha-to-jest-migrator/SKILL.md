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
   transform: { '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }] }
   ```
2. Syntax Transformation (Cheat Sheet)
 * Structure: Jest supports describe, it, beforeEach, etc., natively. No changes are needed to the block structure.
 * Assertions: 
     * assert.strictEqual(a, b) → expect(a).toBe(b)
     * assert.deepStrictEqual(a, b) → expect(a).toEqual(b)
     * assert.ifError(err) → expect(err).toBeNull()
 * Mocking:
     * sinon.stub(obj, 'meth') → jest.spyOn(obj, 'meth').mockImplementation(...)
     * sinon.fn() → jest.fn()
     * proxyquire(path, { 'dep': mock }) → jest.mock('dep', () => mock)
3. Advanced Patterns
 * Private/Protected Access: When tests access internal members, use a temporary internal interface or (instance as any) to
   satisfy TypeScript without losing type context for the rest of the file.
 * Top-Level Mocking: If a dependency uses ESM dynamic imports (like import('node-fetch')) that trigger TypeError in Jest,
   mock that dependency at the top level of the test file using jest.mock(). This bypasses the need for the
   --experimental-vm-modules flag.
 * Async Robustness: For tests using done(), always wrap expectations in try-catch blocks and pass the error to done(e) to
   prevent tests from hanging on failure.
4. Cleanup Workflow
 * Config Deletion: Remove .mocharc.js, .nycrc, and old .coverage or .nyc_output directories.
 * Directory Purge: Remove obsolete CI directories (like .kokoro/) if they are no longer used by the new infrastructure.
 * Git: Update .gitignore to track coverage/ and ignore old Istanbul artifacts.
