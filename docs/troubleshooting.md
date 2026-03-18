## I'm using a key from the Developer's Console, but getting: `Your private key is in an unexpected format and cannot be used. Please try again with another private key.`

There are many types of keys that can be created through the Developer's Console. The one google-cloud-node expects is one for a "Service account".

See "I'm not using Compute Engine. What do I need to do?" from the [FAQ](https://googlecloudplatform.github.io/google-cloud-node/#/faq) for detailed steps on how to create and obtain a JSON key.

Reference Issue: [#261](https://github.com/GoogleCloudPlatform/google-cloud-node/issues/261)


## The app crashes with an error: "The system cannot find the path specified"

Windows users may face this issue when using npm modules such as `google-cloud-node`, see ["Node's nested node_modules approach is basically incompatible with Windows"](https://github.com/nodejs/node-v0.x-archive/issues/6960#issuecomment-46704998). There are 3 solutions you should try:

  1. Install npm version 3 or greater, which [dedupes](https://docs.npmjs.com/cli/dedupe) by default
  1. Manually run `npm dedupe` from inside your project directory
  1. Move your project to the `C:\` directory

Reference Issue: [#1162](https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1162)


## Is the `google-cloud` module on npm *really* 800 MB?

Old versions of npm won't automatically run [dedupe](https://docs.npmjs.com/cli/dedupe) for you. This is a command which finds compatible ranges of dependencies between your dependencies, and removes them from disk. Since npm version 3, dedupe is run before downloading any dependencies, so no extra disk space or download time is wasted.

For example, on npm 3, `npm install google-cloud` results in a ~45MB download. With npm 2, you get the larger download size, upwards of 700 MB. If you run `npm dedupe` from the command line, you should end up around the npm 3 size.

For best results,

  1. Upgrade npm to version 3.x
  1. If that's not possible, run `npm dedupe` after installing

As of this writing, Google App Engine's Node.js flexible environment runs Node.js v4.x with npm v2.x installed by default. To override this, specify an [`engines`](https://docs.npmjs.com/files/package.json#engines) field in your package.json:

```json
{
  "name": "your-app",
  "version": "...",
  "dependencies": {},
  "engines": {
    "npm": "^3.0.0"
  }
}
```

Reference Issue: [#1535](https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1535)
Reference Tweet: [@mluggy's Tweet on 8/29/16](https://twitter.com/mluggy/status/770221258533380096)


## My requests are returning errors instructing me to retry the request.

If you ever see an error like this, you might be pinging the API too rapidly, hitting a rate limit:

```sh
ApiError: The service was unable to fulfill your request. Please try again.
```

Each API call might have its own requirements for what constitutes reaching the rate limit. We solve this across most of the requests we make by using an exponential backoff retry strategy. However, if you make several requests at once, you will inevitably reach that limit.

As an example, if you need to delete multiple Pub/Sub subscriptions at a time, you might do something like:

```js
subscriptions.forEach(function(subscription) {
  subscription.delete();
});
```

Assuming you had 50 subscriptions, this would make 50 simultaneous requests to the API. That's likely to cause the rate limit to be reached.

Instead, consider using a library like [async](http://gitnpm.com/async) to throttle your requests:

```js
var async = require('async');
var PARALLEL_LIMIT = 10;

function deleteSubscription(subscription, callback) {
  subscription.delete(callback);
}

async.eachLimit(subscriptions, PARALLEL_LIMIT, deleteSubscription, function(err) {
  if (!err) {
    // Subscriptions deleted.
  }
});
```

This will only allow 10 at a time to go through, making it easier on the API to keep up with your requests.

Reference Issue: [#1101](https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1101)


## gRPC received a message exceeding the max size.

If you're seeing an error message saying that your gRPC request is exceeding the max size, you may need to send smaller individual requests. Request bodies should not exceed 4MB.
