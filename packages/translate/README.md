# @google-cloud/translate
> Google Translate API Client Library for Node.js

*Looking for more Google APIs than just Translate? You might want to check out [`google-cloud`][google-cloud].*

- [API Documentation][gcloud-translate-docs]
- [Official Documentation][cloud-translate-docs]

**An API key is required for Translate.** See [Identifying your application to Google][api-key-howto].


```sh
$ npm install --save @google-cloud/translate
```
```js
var translate = require('@google-cloud/translate')({
  key: 'API Key'
});

// Translate a string of text.
translate.translate('Hello', 'es', function(err, translation) {
  if (!err) {
    // translation = 'Hola'
  }
});

// Detect a language from a string of text.
translate.detect('Hello', function(err, results) {
  if (!err) {
    // results = {
    //   language: 'en',
    //   confidence: 1,
    //   input: 'Hello'
    // }
  }
});

// Get a list of supported languages.
translate.getLanguages(function(err, languages) {
  if (!err) {
    // languages = [
    //   'af',
    //   'ar',
    //   'az',
    //   ...
    // ]
  }
});
```


[google-cloud]: https://github.com/GoogleCloudPlatform/google-cloud-node/
[api-key-howto]: https://cloud.google.com/translate/v2/using_rest#auth
[gcloud-translate-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/translate
[cloud-translate-docs]: https://cloud.google.com/translate/docs
