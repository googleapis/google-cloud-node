# Showcase resumable upload harness

This directory contains a small end-to-end example of the resumable upload
support added in `google-gax`:

* `fixtures/` — a generated `ResumableUploadServiceClient` for the real
  [gapic-showcase](https://github.com/googleapis/gapic-showcase)
  `ResumableUploadService`, produced by the generator in this repo with
  `--resumable_upload_methods=ResumableUploadService.UploadMedia`.
* `sample.ts` — end-to-end test scenarios exercising `client.uploadMedia()`,
  `client.getResumableSource()`, `session.start()`, and all `gapic-showcase`
  `X-Goog-Test-Scenario` / `X-Goog-Test-Scenario-Config` failure-injection modes:
  1. **Multi-block upload**: Uploads a payload spanning multiple `256 KiB`
     blocks plus a partial final block, verifying per-block progress updates and
     final size.
  2. **Smaller than one block upload**: Uploads a `64 KiB` payload in a single
     `upload, finalize` command when `chunkSize` is larger than the payload.
  3. **Start error scenarios (`non_fatal_error_on_start` & `fatal_error_on_start`)**:
     Injects transient `HTTP 503` errors on `start` (isolated via `client_uuid`)
     to verify retry with backoff, and fatal `HTTP 403` errors on `start` to
     verify immediate rejection without retry.
  4. **Chunk upload failure scenarios (`non_fatal_error_on_chunk_upload`)**:
     Injects server-side Category 1 (`HTTP 503`), Category 2 (`HTTP 412` ->
     `query` recovery), and `action_after_failures: "terminate"` (`HTTP 500`)
     responses via `X-Goog-Test-Scenario-Config`.
  5. **Partial commit on chunk upload (`partial_commit_on_chunk_upload`)**:
     Injects a partial server commit (`partial_bytes`) followed by `HTTP 503`
     and `HTTP 409 Conflict`, verifying that the client queries the server
     offset and transmits only the uncommitted tail of the chunk.
  6. **Query retry & chunk granularity scenarios (`non_fatal_error_on_query` & `chunk_granularity`)**:
     Injects transient `HTTP 503` failures on `query` during session recovery,
     and tests server-enforced `256`-byte chunk granularity rounding when an
     unaligned `chunkSize` is supplied.
  7. **Cross-process / new-object resumption**: Emulates a process crash after
     committing `512 KiB`, then resumes and completes the upload using a brand
     new client, session, and `ResumableSource` via `resumeUrl`.
  8. **Timeout and resume (`delay_ms` & `globalDeadlineMs`)**: Tests both
     server-injected upload delay (`delay_ms`) exceeding `stallTimeoutMs` with
     automatic recovery/stream re-opening and global deadline timeout
     (`globalDeadlineMs`) with manual session resumption via `resumeUrl`.
  9. **Client transport modes (`fallback: true` & `sslCreds` guard)**: Verifies
     that `ResumableUploadServiceClient` uploads payloads in `fallback: true`
     mode and rejects `uploadMedia()` with a `GoogleError` when `sslCreds` is
     configured without `fallback: true`.
* `run.sh` — downloads/starts a gapic-showcase server, builds the local
  google-gax checkout and the generated client, then runs `sample.ts`.

Run it from anywhere:

```sh
core/packages/gax/test/showcase-resumable-upload/run.sh
```

It assumes the monorepo dependencies have been installed (so `google-gax` and
`gapic-tools` can be compiled locally) and requires network access the first
time it downloads the showcase server binary.

The default showcase version is `0.44.0`, which includes the resumable upload
service middleware, partial commit fault injection, and server-side delay
injection. Set `SHOWCASE_VERSION`, `SHOWCASE_BIN` (to reuse an
already-downloaded binary), `SHOWCASE_PORT`, or `UPLOAD_FILE` to override
pieces of the run.
