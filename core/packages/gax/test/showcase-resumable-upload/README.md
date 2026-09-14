# Showcase resumable upload harness

This directory contains an end-to-end test suite for the resumable upload
support added in the `scotty-1` work, executed against a live `gapic-showcase`
server:

* `client/` — a generated `ResumableUploadServiceClient` for the real
  [gapic-showcase](https://github.com/googleapis/gapic-showcase)
  `ResumableUploadService`, produced by the generator in this repo with
  `--resumable_upload_methods=ResumableUploadService.UploadMedia`.
* `sample.js` — end-to-end test scenarios exercising `client.uploadMedia()`,
  `client.getResumableSource()`, and `session.start()`:
  1. **Multi-block upload**: Uploads a payload spanning multiple `256 KiB`
     blocks plus a partial final block, verifying per-block progress updates and
     final size.
  2. **Smaller than one block upload**: Uploads a `64 KiB` payload in a single
     `upload, finalize` command when `chunkSize` is larger than the payload.
  3. **Upload with failure and retry**: Injects a Category 1 transient failure
     (`HTTP 503`) to verify exponential backoff retry, and a Category 2 state
     mismatch (`HTTP 412`) to verify `query` command recovery against
     `gapic-showcase`.
  4. **Cross-process / new-object resumption**: Emulates a process crash after
     committing `512 KiB`, then resumes and completes the upload using a brand
     new client, session, and `ResumableSource` via `resumeUrl`.
  5. **Timeout and resume**: Tests both in-flight stall timeout (`stallTimeoutMs`)
     with automatic recovery/stream re-opening and global deadline timeout
     (`globalDeadlineMs`) with manual session resumption via `resumeUrl`.
* `run.sh` — downloads/starts a gapic-showcase server, builds the local
  google-gax checkout and the generated client, then runs `sample.js`.

Run it from anywhere:

```sh
core/packages/gax/test/showcase-resumable-upload/run.sh
```

It assumes the monorepo dependencies have been installed (so `google-gax` and
`gapic-tools` can be compiled locally) and requires network access the first
time it downloads the showcase server binary.

The default showcase version is `0.43.1`, the first release line that includes
the resumable upload service middleware. Set `SHOWCASE_VERSION`, `SHOWCASE_BIN`
(to reuse an already-downloaded binary), `SHOWCASE_PORT`, or `UPLOAD_FILE` to
override pieces of the run.
