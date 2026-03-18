# Client Libraries HOWTO

This document shows how to use client libraries that use
[google-gax](https://www.npmjs.com/package/google-gax) as their transport layer
(most of the Google Cloud client TypeScript libraries do).

In all the examples below, we'll use `@google-cloud/library` as a library being
used (e.g. `@google-cloud/speech`, `@google-cloud/text-to-speech`, etc.), so you
can assume it's imported like this:

JavaScript:
```js
const library = require('@google-cloud/library');
```

TypeScript:
```ts
import * as library from '@google-cloud/library';
```

We'll also assume that the library defines a `SampleClient`
(e.g. `SpeechClient`, `TextToSpeechClient`, etc.)

## Creating the client instance

For the majority of use cases, it should just work without any parameters:
```ts
const client = new library.SampleClient();
```
The library will figure out what kind of credentials to use, and will
instantiate the client using gRPC transport with the default settings.

Please make sure you create the client instance once and then reuse it. Do not
create a separate client instance for every call.

Please note that the created instance is not authenticated until the first
actual request to the service is made. In most cases, it does not make any
difference since authentication happens under the hood, but it can slow down the
very first request to the API. If you want to make sure the client is
authenticated, you can force its initialization right after it's created:

```ts
const client = new library.SampleClient();
await client.initialize(); // performs auth
```

### Constructor options

You can pass additional options to the constructor:
```ts
const options = {};
// set options
const client = new library.SampleClient(options);
```

#### Authentication options

Please take a look at `GoogleAuthOptions` in [`google-auth-library`
documentation](https://googleapis.dev/nodejs/google-auth-library/latest/interfaces/GoogleAuthOptions.html)
for a complete list.

- `options.credentials`: credentials object:
  - `options.credentials.client_email`
  - `options.credentials.private_key`
- `options.email`: account email address. Required when using a `.pem` or .`p12`
  `keyFilename`.
- `options.keyFilename`: full path to the a `.json`, `.pem`, or `.p12` key
  downloaded from the Google Developers Console. If you provide a path to a JSON
  file, the `projectId` option below is not necessary.\
   Note: `.pem` and `.p12` require you to specify `options.email` as well.
- `options.projectId`: the project ID from the Google Developer's Console, e.g.
   `grape-spaceship-123`. We will also check the environment variable
   `GCLOUD_PROJECT` for your project ID. If your app is running in an
   environment which supports [Application Default
   Credentials](https://developers.google.com/identity/protocols/application-default-credentials),
   your project ID will be detected automatically.

#### Service options

For most use cases, default values for the following options work pretty well.

The following two options are useful if you need to connect to a different
endpoint than the default one:

- `options.port`: the port on which to connect to the remote host.
- `options.apiEndpoint`: the domain name of the API remote host.

The following option can be used to override client configuration, such as
various timeouts. The default configuration can be found in the JSON file
`src/v*/*_client_config.json`. You can pass any subset of that JSON and the
corresponding default settings will be overridden.

- `options.clientConfig`: client configuration override.\

By default, the client library will use [gRPC](https://grpc.io), which is a
binary tranport based on HTTP/2. It's Node.js implementation,
[`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js), uses Node.js
`http2` module.

#### HTTP/1.1 REST API mode

- `options.fallback`: `true` or `false`, use HTTP fallback mode.
  Default value is `false`, unless the `window` object is defined.
  For compatibility, you can pass any non-empty string, it will be considered
  a `true` value.

If you need to use the client library in non-Node.js environment or when gRPC
cannot be used for any reason, you can use the HTTP/1.1 fallback mode. In this
mode, a special browser-compatible transport implementation is used instead of
gRPC transport. It will send and receive JSONs over HTTP.

In browser context (if the `window` object is defined) the fallback mode is
enabled automatically; set `options.fallback` to `false` if you need to override
this behavior.

## Calling API methods

In all examples below we assume that `client` is an instance of the client
library class:
```ts
const client = new library.SampleClient();
```

### Regular methods

Recommended usage with `async` / `await`:
```ts
const [response] = await client.sampleMethod(request);
```

Using promises:
```ts
client.doStuff(request).then([response] => { /* handle response */ });
```

If you need to be able to cancel the API call that is currently running, use the
`.cancel()` method of the returned promise:
```ts
const promise = client.sampleMethod(request);
// the returned promise can be canceled:
promise.cancel();
```

You can override the default call options (such as retry settings or timeouts)
for the given call by passing an object of type
[`CallOptions`](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
in the second parameter:
```ts
const [response] = await client.sampleMethod(request, options);
```

### Long-running operations

Some methods are expected to run longer. They return an object of type
[`Operation`](https://googleapis.dev/nodejs/google-gax/latest/classes/Operation.html)
that contains unique name of the operation and allows to track its status.

```ts
const [operation] = await client.sampleLongRunningMethod(request);
```

To get the result of the operation, just `await` for its promise to resolve:
```ts
const [response] = await operation.promise(); // polls the operation until complete
```

To check the operation status (is it completed or not) and metadata (e.g. is
progress):
```ts
console.log(operation.name);     // unique name
console.log(operation.done);     // true or false
console.log(operation.metadata); // current value of the metadata (often contains progress %)
console.log(operation.result);   // only if operation is completed
```

To cancel the running operation:
```ts
operation.cancel();
```

You can override the default call options (such as retry settings or timeouts)
for the given call by passing an object of type
[`CallOptions`](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
in the second parameter:
```ts
const [operation] = await client.sampleLongRunningMethod(request, options);
```

In some cases you might need to be able to track the operation status and result by its name
(e.g. if you are running in a [Google Cloud Function](https://cloud.google.com/functions) and
you don't want to execute the function while the operation is running). To do that, use the
`check...Progress` method (e.g. for `longRunningRecognize` method in Speech-To-Text API, the
method will be called `checkLongRunningRecognizeProgress`).
```ts
const operation = await checkSampleLongRunningMethodProgress(operationName);
// now check `operation.done`, `operation.metadata`, `operation.result`
```

### Streaming methods

#### Server streaming

In server streaming methods, the result of the API call is an `EventEmitter`
which will emit `data` event every time the new response is available.
```ts
const stream = client.sampleServerStreamingMethod(request);
stream.on('data', (response) => { /* handle response */ });
stream.on('error', (err) => { /* handle error */ });
stream.on('end', () => { /* API call completed */ });
```

You can cancel the running API call:
```ts
stream.cancel();
```

You can override the default call options (such as retry settings or timeouts)
for the given call by passing an object of type
[`CallOptions`](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
in the second parameter:
```ts
const stream = client.sampleServerStreamingMethod(request, options);
```

#### Bi-directional streaming

Bi-directional streaming calls return a stream that is both readable and writable.
It accepts object of the correct request type for its `.write()` method, and emits
responses in its `data` event.
```ts
const stream = client.sampleBidiStreamingMethod();
stream.on('data', (response) => { /* process response */ });
stream.on('error', (err) => { /* handle error */ });
stream.on('end', () => { /* API call completed */ });

stream.write(request1);
stream.write(request2);
stream.end();
```

You can cancel the running API call:
```ts
stream.cancel();
```

You can override the default call options (such as retry settings or timeouts)
for the given call by passing an object of type
[`CallOptions`](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
as the only parameter:
```ts
const stream = client.sampleBidiStreamingMethod(options);
```

#### Client streaming

Client streaming call return a writable stream. The API call is executed and its
result is returned using a callback function.
```ts
const stream = client.sampleClientStreamingMethod(callback);
stream.write(request1);
stream.write(request2);
stream.end();
// callback(err, response) will be called
```

You can override the default call options (such as retry settings or timeouts)
for the given call by passing an object of type
[`CallOptions`](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
in the _first_ parameter:
```ts
const stream = client.sampleClientStreamingMethod(options, callback);
```

### Auto-pagination

Some API calls (e.g. the `List*` calls) return paginated results. For such
calls, the client library will perform the page polling for you by default.

The recommended way of working with API that provides paging is to call `*Async`
method that returns an asynchronous iterator that can be iterated using `for
await` loop. E.g. for a method called `samplePaginatedMethod` the client library
provides a method called `samplePaginatedMethodAsync` which can be used like this:
```ts
const iterable = client.samplePaginagedMethodAsync(request);
for await (const response of iterable) {
  // process response
}
```
The `*Async` method will fetch new pages as needed.

If you want to receive the content of all the pages at once, just call the
method without the `Async` suffix. The resulting array will contain responses
from all the pages, merged in one array. Please note that if your query returns
a lot of results, the library will send many single page requests under the hood
and those requests will hit your quota.
```ts
const [resultArray] = await client.samplePaginatedMethod(request);
```
If you want to specify the `pageSize` parameter in the request, it should be done along
with disabling auto-pagination. The auto-pagination functionality can be disabled by 
passing `autoPaginate: false` as a request option (the second parameter). In this case, 
the resulting promise will resolve to an array:
```ts

const request = {request, pageSize: 50}
const [resultArray, nextPageRequest, rawResponse] =
  await client.samplePaginatedMethod(request, {autoPaginate: false});
```
Here `resultArray` contains the responses from the given page, `nextPageRequest`
is the request object that can be used to retrieve the next page of the
responses, and `rawResponse` is the actual response received from the server
(before it was converted to an array of responses).

An alternative method of using the paginated API is to use `*Stream` method
that will return an `EventEmitter` that will emit `data` event for each response element:
```ts
const stream = await client.samplePaginatedMethodStream(request);
stream.on('data', (response) => { /* process response */ });
stream.on('error', (err) => { /* handle error */ });
stream.on('end', () => { /* API call completed */ });
```

You can override the default call options (such as retry settings or timeouts)
for the given call by passing an object of type
[`CallOptions`](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
in the second parameter:
```ts
const stream = client.sampleServerStreamingMethod(request, options);
```

## Closing the client

To close the connection, call `close()`:
```ts
client.close();
```
After the client instance is closed, it cannot be used anymore.
