---
name: Verify Local Changes
description: Verifies local Google Cloud Node SDK changes.
---

# Verify Local Changes (Node.js)

This skill documents how to verify local code changes for the Google Cloud Node.js Firestore SDK.

## Prerequisites

Ensure you have Node.js installed and are in the `google-cloud-node` directory.

---

## Step 0: Install Dependencies

```bash
npm install
```

---

## Step 1: Format and Lint

Run the formatter to ensure formatting checks pass:

```bash
npm run fix
```

---

## Step 2: Unit Testing

Run the tests for the entire monorepo or navigate to the firestore package:

```bash
# From root
npm test

# Or specifically for Firestore
cd packages/google-cloud-firestore
npm test
```

---

## Step 3: Integration Testing

Integration tests require `GOOGLE_APPLICATION_CREDENTIALS` to be set.

```bash
npm run system-test
```

---

> [!TIP]
> Always check the package-specific `package.json` for additional scripts like `lint` or `compile`.
