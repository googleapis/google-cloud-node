# Showcase resumable upload harness

This directory contains a small end-to-end example of the resumable upload
support added in the `scotty-1` work:

* `client/` — a generated `ResumableUploadServiceClient` for the real
  [gapic-showcase](https://github.com/googleapis/gapic-showcase)
  `ResumableUploadService`, produced by the generator in this repo with
  `--resumable_upload_methods=ResumableUploadService.UploadMedia`.
* `sample.js` — example code using `client.uploadMedia()`,
  `client.getResumableSource()`, and `session.start()`.
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
