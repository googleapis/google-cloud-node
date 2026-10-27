# Running Firebase & Google Cloud Node.js SDKs on Bun

## Overview & Managed Cloud Functions Limitation

Managed **Cloud Functions for Firebase** (`firebase deploy --only functions`) only supports managed Node.js (V8) runtimes (`"runtime": "nodejs20"` or `"runtime": "nodejs22"` in `firebase.json`) and cannot execute the Bun (`JavaScriptCore`) runtime directly.

To run **`firebase-admin`** and **`@google-cloud/*`** client libraries (`@google-cloud/firestore`, `@google-cloud/storage`, `@google-cloud/secret-manager`, `@google-cloud/pubsub`, etc.) on the **Bun** runtime in a Firebase project:

1. Package your Bun application in an `oven/bun` OCI container and deploy it to **Google Cloud Run**.
2. Configure **Firebase Hosting `rewrites`** in `firebase.json` to route incoming requests from your Firebase Hosting domain directly to your Cloud Run service.

---

## 1. Reference `Dockerfile` (`oven/bun:1`)

```dockerfile
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY src ./src

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["bun", "run", "src/index.ts"]
```

---

## 2. Reference `firebase.json` (`hosting.rewrites` -> Cloud Run)

Route traffic from Firebase Hosting to your `oven/bun` Cloud Run service using a `run` rewrite rule in `firebase.json`:

```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "/api/**",
        "run": {
          "serviceId": "firebase-bun-backend",
          "region": "us-central1"
        }
      }
    ]
  }
}
```

---

## 3. Reference `src/index.ts` (`Bun.serve()` + `firebase-admin`)

Configure `idleTimeout: 120` in `Bun.serve()` (instead of Bun's 10-second default) so Cloud Run cold starts and multi-RPC Firestore/Storage operations do not trigger `502 Bad Gateway` / `ECONNRESET`:

```typescript
import {initializeApp, applicationDefault} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import {getStorage} from 'firebase-admin/storage';

const app = initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore(app);
const storage = getStorage(app);

const server = Bun.serve({
  port: Number(process.env.PORT) || 8080,
  idleTimeout: 120,
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/api/health') {
      const docRef = db.collection('diagnostics').doc('bun-runtime');
      await docRef.set({
        runtime: `Bun ${Bun.version}`,
        updatedAt: new Date().toISOString(),
      });
      const snap = await docRef.get();
      return Response.json({
        status: 'ok',
        data: snap.data(),
        bucket: storage.bucket().name,
      });
    }
    return new Response('Not Found', {status: 404});
  },
});

process.on('SIGTERM', () => {
  server.stop();
});
```

---

## 4. Deploying to Cloud Run and Firebase Hosting

> **Tip:** When passing `FIREBASE_CONFIG` JSON via `gcloud run deploy --set-env-vars`, use the custom `@` delimiter syntax (`^@^...`) so commas inside the JSON string are preserved.

```bash
export PROJECT_ID="your-firebase-project-id"
export REGION="us-central1"
export SERVICE="firebase-bun-backend"

# 1. Build and push the oven/bun container image
gcloud builds submit --tag "gcr.io/${PROJECT_ID}/${SERVICE}" --project "${PROJECT_ID}" .

# 2. Deploy the container to Cloud Run
gcloud run deploy "${SERVICE}" \
  --image "gcr.io/${PROJECT_ID}/${SERVICE}" \
  --region "${REGION}" \
  --project "${PROJECT_ID}" \
  --no-cpu-throttling \
  --set-env-vars='^@^GCLOUD_PROJECT='"${PROJECT_ID}"'@FIREBASE_CONFIG={"projectId":"'"${PROJECT_ID}"'","storageBucket":"'"${PROJECT_ID}"'.firebasestorage.app"}'

# 3. Deploy Firebase Hosting rewrites
firebase deploy --only hosting --project "${PROJECT_ID}"
```
