# @google-cloud/language ([Beta][versioning])
> Cloud Natural Language Client Library for Node.js

*Looking for more Google APIs than just Natural Language? You might want to check out [`google-cloud`][google-cloud].*

- [API Documentation][gcloud-language-docs]
- [Official Documentation][cloud-language-docs]


```sh
$ npm install --save @google-cloud/language
```
```js
var language = require('@google-cloud/language')({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Get the entities from a sentence.
language.detectEntities('Stephen of Michigan!', function(err, entities) {
  // entities = [
  //   {
  //     name: 'Stephen',
  //     type: 'PERSON',
  //     metadata: {
  //       mid: '/m/05d8y4q'
  //     },
  //     salience: 0.7309288382530212,
  //     mentions: [
  //       {
  //         text: {
  //           content: 'Stephen',
  //           beginOffset: -1
  //         },
  //         type: 'PROPER'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Michigan',
  //     type: 'LOCATION',
  //     metadata: {
  //       mid: '/m/04rrx',
  //       wikipedia_url: 'http://en.wikipedia.org/wiki/Michigan'
  //     },
  //     salience: 0.26907116174697876,
  //     mentions: [
  //       {
  //         text: {
  //           content: 'Michigan',
  //           beginOffset: -1
  //         },
  //         type: 'PROPER'
  //       }
  //     ]
  //   }
  // ]
});

// Create a document if you plan to run multiple detections.
var document = language.document('Contributions welcome!');

// Analyze the sentiment of the document.
document.detectSentiment(function(err, sentiment) {
  // sentiment = {
  //   magnitude: 0.30000001192092896,
  //   score: 0.30000001192092896
  // }
});

// Parse the syntax of the document.
document.annotate(function(err, annotations) {
  // annotations = {
  //   language: 'en',
  //   sentiment: {
  //     magnitude: 0.30000001192092896,
  //     score: 0.30000001192092896
  //   },
  //   entities: [
  //     {
  //       name: 'Contributions',
  //       type: 'OTHER',
  //       metadata: {},
  //       salience: 1,
  //       mentions: [
  //         {
  //           text: {
  //             content: 'Contributions',
  //             beginOffset: -1
  //           },
  //           type: 'COMMON'
  //         }
  //       ]
  //     }
  //   ],
  //   sentences: [
  //     {
  //       text: {
  //         content: 'Contributions welcome!',
  //         beginOffset: -1
  //       },
  //       sentiment: {
  //         magnitude: 0.30000001192092896,
  //         score: 0.30000001192092896
  //       }
  //     }
  //   ],
  //   tokens: [
  //     {
  //       text: {
  //         content: 'Contributions',
  //         beginOffset: -1
  //       },
  //       partOfSpeech: {
  //         tag: 'NOUN',
  //         aspect: 'ASPECT_UNKNOWN',
  //         case: 'CASE_UNKNOWN',
  //         form: 'FORM_UNKNOWN',
  //         gender: 'GENDER_UNKNOWN',
  //         mood: 'MOOD_UNKNOWN',
  //         number: 'PLURAL',
  //         person: 'PERSON_UNKNOWN',
  //         proper: 'PROPER_UNKNOWN',
  //         reciprocity: 'RECIPROCITY_UNKNOWN',
  //         tense: 'TENSE_UNKNOWN',
  //         voice: 'VOICE_UNKNOWN'
  //       },
  //       dependencyEdge: {
  //         headTokenIndex: 1,
  //         label: 'NSUBJ'
  //       },
  //       lemma: 'contribution'
  //     },
  //     {
  //       text: {
  //         content: 'welcome',
  //         beginOffset: -1
  //       },
  //       partOfSpeech: {
  //         tag: 'VERB',
  //         aspect: 'ASPECT_UNKNOWN',
  //         case: 'CASE_UNKNOWN',
  //         form: 'FORM_UNKNOWN',
  //         gender: 'GENDER_UNKNOWN',
  //         mood: 'INDICATIVE',
  //         number: 'NUMBER_UNKNOWN',
  //         person: 'PERSON_UNKNOWN',
  //         proper: 'PROPER_UNKNOWN',
  //         reciprocity: 'RECIPROCITY_UNKNOWN',
  //         tense: 'PRESENT',
  //         voice: 'VOICE_UNKNOWN'
  //       },
  //       dependencyEdge: {
  //         headTokenIndex: 1,
  //         label: 'ROOT'
  //       },
  //       lemma: 'welcome'
  //     },
  //     {
  //       text: {
  //         content: '!',
  //         beginOffset: -1
  //       },
  //       partOfSpeech: {
  //         tag: 'PUNCT',
  //         aspect: 'ASPECT_UNKNOWN',
  //         case: 'CASE_UNKNOWN',
  //         form: 'FORM_UNKNOWN',
  //         gender: 'GENDER_UNKNOWN',
  //         mood: 'MOOD_UNKNOWN',
  //         number: 'NUMBER_UNKNOWN',
  //         person: 'PERSON_UNKNOWN',
  //         proper: 'PROPER_UNKNOWN',
  //         reciprocity: 'RECIPROCITY_UNKNOWN',
  //         tense: 'TENSE_UNKNOWN',
  //         voice: 'VOICE_UNKNOWN'
  //       },
  //       dependencyEdge: {
  //         headTokenIndex: 1,
  //         label: 'P'
  //       },
  //       lemma: '!'
  //     }
  //   ]
  // }
});

// Promises are also supported by omitting callbacks.
document.annotate().then(function(data) {
  var annotations = data[0];
});

// It's also possible to integrate with third-party Promise libraries.
var language = require('@google-cloud/language')({
  promise: require('bluebird')
});
```


## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var language = require('@google-cloud/language')();
// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Google Cloud Natural Language API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

var language = require('@google-cloud/language')({
  projectId: projectId,

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')
});

// ...you're good to go!
```


[versioning]: https://github.com/GoogleCloudPlatform/google-cloud-node#versioning
[google-cloud]: https://github.com/GoogleCloudPlatform/google-cloud-node/
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[dev-console]: https://console.developers.google.com/project
[gcloud-language-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/language
[cloud-language-docs]: https://cloud.google.com/natural-language/docs
