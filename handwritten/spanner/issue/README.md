# Insert benchmark issue repro

Build and push all three images:

```sh
IMAGE_REPO=us-central1-docker.pkg.dev/span-cloud-testing/gargsurbhi-images \
SPANNER_VERSION=8.7.1 \
BUILD_CURRENT=true \
./issue/build-images.sh
```

Run jobs:

Connect to Kubernetes cluster
```sh
gcloud container clusters get-credentials cluster-1 --region us-central1 --project span-cloud-testing
```

Release baseline uses `issue-insert-node:latest` from npm `SPANNER_VERSION`. Current branch uses `issue-insert-node:current`. Release cluster uses `issue-insert-node-cluster:release-8.6.0`; current cluster uses `issue-insert-node-cluster:current`.

```sh
kubectl apply -f issue/k8s/go-insert-benchmark.yaml
kubectl apply -f issue/k8s/node-insert-benchmark.yaml
kubectl apply -f issue/k8s/node-current-insert-benchmark.yaml
kubectl apply -f issue/k8s/node-cluster-insert-benchmark.yaml
kubectl apply -f issue/k8s/node-current-cluster-insert-benchmark.yaml
```

Watch logs:

```sh
kubectl -n spanner-ns logs -f job/issue-insert-go
kubectl -n spanner-ns logs -f job/issue-insert-node
kubectl -n spanner-ns logs -f job/issue-insert-node-current
kubectl -n spanner-ns logs -f job/issue-insert-node-cluster
kubectl -n spanner-ns logs -f job/issue-insert-node-current-cluster
```

Defaults match the customer repro shape:

- `INSERT_COUNT=1000`
- `INSERT_CONCURRENCY=110`
- `BATCH_COUNT=1`
- 3 CPU request/limit

Node cluster job uses `CLUSTER_WORKERS=3`. It splits total work across workers:

- total batches stays `1000`
- total concurrency stays about `110` (`37 + 37 + 36`)
- each worker has a separate Node event loop and Spanner client

Use `VERBOSE_BATCH_LOGS=false` to remove per-batch logging overhead.

## Reference table setup for Go benchmark

`issue/go/main.go` samples IDs from these tables before inserting into `DeviceRecentActivityLog`:

- `tracking.Devices(deviceRecordId)`
- `tracking.DeviceDetails(deviceDetailsId)`
- `tracking.HttpRequestDetails(httpRequestDetailsId)`
- `tracking.HttpRequestLocations(httpRequestLocationId)`

The insert target table does not require these rows unless you add foreign keys. They are only needed by the Go benchmark script. Minimum to run: 1 row in the first 3 tables; locations can be empty. Recommended for default `SAMPLE_SIZE=10000`: seed 10000 rows in each table.

DDL:

```sh
gcloud spanner databases ddl update jack_henry_db \
  --instance=gargsurbhi-testing1 \
  --project=span-cloud-testing \
  --ddl-file=issue/create-reference.sql
```

Seed 10000 rows per reference table:

```sh
node issue/seed-reference-data.js
```

Use env overrides if needed:

```sh
DB_PROJECT_ID=span-cloud-testing \
DB_INSTANCE=gargsurbhi-testing1 \
DB_DATABASE=jack_henry_db \
DB_SCHEMA=tracking \
SAMPLE_SIZE=10000 \
node issue/seed-reference-data.js
```
