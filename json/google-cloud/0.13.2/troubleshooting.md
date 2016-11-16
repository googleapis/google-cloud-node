## I'm using a key from the Developer's Console, but getting: `Your private key is in an unexpected format and cannot be used. Please try again with another private key.`

There are many types of keys that can be created through the Developer's Console. The one gcloud expects is one for a "Service account".

See "I'm not using Compute Engine. What do I need to do?" from the [FAQ](https://googlecloudplatform.github.io/gcloud-node/#/faq) for detailed steps on how to create and obtain a JSON key.

Reference Issue: [#261](https://github.com/GoogleCloudPlatform/gcloud-node/issues/261)

## I'm using the correct key, but receiving a "Backend Error"

Please see [#294](https://github.com/GoogleCloudPlatform/gcloud-node/issues/294).
