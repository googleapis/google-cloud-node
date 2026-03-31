# Test Proxy

This is a **Test Proxy** implementation meant to be used in conjuction with the
[Test Framework for Cloud Bigtable Client Libraries](https://github.com/googleapis/cloud-bigtable-clients-test).

## Setup

Dependencies are installed as part of the main project using **npm**:

```console
$ npm install
```

## Running

In order to start the **Test Proxy** server, run:

```console
$ npm run testproxy
```

This will start the proxy server that will listen to port `9999` by default
and enable [running tests from the main go mock test implementation](https://github.com/googleapis/cloud-bigtable-clients-test#test-execution)
against the JavaScript library implementation.

## Options

### Using a different port

By default the **Test Proxy** will listen to port `9999`, in order to change
the value use the `PORT` environment variable, e.g:

```console
$ PORT=1337 npm run testproxy
```

## Exclusions

Some tests are testing things that the library doesn't support; these would require feature work, and are in `known_unsupported.txt`. Some of them are simply known failures that need to be fixed, but are not vital to the operation of the library, and are in `known_failures.txt`. Ideally these would all be complete, but until they are, they're listed in those files. Items in both files are excluded during "mandatory conformance", and items unsupported items are excluded during "conformance".
