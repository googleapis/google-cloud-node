/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var assert = require('assert');
var extend = require('extend');
var proxyquire = require('proxyquire');

function createFakeApi() {
  return function FakeApi() {
    if (!(this instanceof FakeApi)) {
      var instance = new FakeApi();
      FakeApi.apply(instance, arguments);
      return instance;
    }

    this.calledWith_ = [].slice.call(arguments);
  };
}

var FakeBigQuery = createFakeApi();
var FakeBigtable = createFakeApi();
var FakeCompute = createFakeApi();
var FakeDatastore = createFakeApi();
var FakeDLP = createFakeApi();
var FakeDNS = createFakeApi();
var FakeLanguage = createFakeApi();
var FakeLogging = createFakeApi();
var FakeMonitoring = createFakeApi();
var FakePrediction = createFakeApi();
var FakePubSub = createFakeApi();
var FakeResource = createFakeApi();
var FakeSpanner = createFakeApi();
var FakeSpeech = createFakeApi();
var FakeStorage = createFakeApi();
var FakeTranslate = createFakeApi();
var FakeVideoIntelligence = createFakeApi();
var FakeVision = createFakeApi();

describe('gcloud', function() {
  var gcloud;

  before(function() {
    gcloud = proxyquire('../', {
      '@google-cloud/bigquery': FakeBigQuery,
      '@google-cloud/bigtable': FakeBigtable,
      '@google-cloud/compute': FakeCompute,
      '@google-cloud/datastore': FakeDatastore,
      '@google-cloud/dlp': FakeDLP,
      '@google-cloud/dns': FakeDNS,
      '@google-cloud/language': FakeLanguage,
      '@google-cloud/logging': FakeLogging,
      '@google-cloud/monitoring': FakeMonitoring,
      '@google-cloud/prediction': FakePrediction,
      '@google-cloud/pubsub': FakePubSub,
      '@google-cloud/resource': FakeResource,
      '@google-cloud/spanner': FakeSpanner,
      '@google-cloud/speech': FakeSpeech,
      '@google-cloud/storage': FakeStorage,
      '@google-cloud/translate': FakeTranslate,
      '@google-cloud/video-intelligence': FakeVideoIntelligence,
      '@google-cloud/vision': FakeVision
    });
  });

  it('should export a function', function() {
    assert.strictEqual(typeof gcloud, 'function');
  });

  it('should export static bigquery', function() {
    assert.strictEqual(gcloud.bigquery, FakeBigQuery);
  });

  it('should export static bigtable', function() {
    assert.strictEqual(gcloud.bigtable, FakeBigtable);
  });

  it('should export static compute', function() {
    assert.strictEqual(gcloud.compute, FakeCompute);
  });

  it('should export static datastore', function() {
    assert.strictEqual(gcloud.datastore, FakeDatastore);
  });

  it('should export static dlp', function() {
    assert.strictEqual(gcloud.dlp, FakeDLP);
  });

  it('should export static dns', function() {
    assert.strictEqual(gcloud.dns, FakeDNS);
  });

  it('should export static language', function() {
    assert.strictEqual(gcloud.language, FakeLanguage);
  });

  it('should export static logging', function() {
    assert.strictEqual(gcloud.logging, FakeLogging);
  });

  it('should export static monitoring', function() {
    assert.strictEqual(gcloud.monitoring, FakeMonitoring);
  });

  it('should export static prediction', function() {
    assert.strictEqual(gcloud.prediction, FakePrediction);
  });

  it('should export static pubsub', function() {
    assert.strictEqual(gcloud.pubsub, FakePubSub);
  });

  it('should export static resource', function() {
    assert.strictEqual(gcloud.resource, FakeResource);
  });

  it('should export static spanner', function() {
    assert.strictEqual(gcloud.spanner, FakeSpanner);
  });

  it('should export static speech', function() {
    assert.strictEqual(gcloud.speech, FakeSpeech);
  });

  it('should export static storage', function() {
    assert.strictEqual(gcloud.storage, FakeStorage);
  });

  it('should export static translate', function() {
    assert.strictEqual(gcloud.translate, FakeTranslate);
  });

  it('should export static video-intelligence', function() {
    assert.strictEqual(gcloud.videoIntelligence, FakeVideoIntelligence);
  });

  it('should export static vision', function() {
    assert.strictEqual(gcloud.vision, FakeVision);
  });

  describe('localized configuration', function() {
    var localGcloud;
    var config = { a: 'b', c: 'd' };
    var options = { e: 'f', g: 'h' };

    var expectedConfig = extend({}, config, {
      interceptors_: []
    });

    beforeEach(function() {
      localGcloud = gcloud(config);
    });

    describe('initialization', function() {
      it('should persist the provided configuration', function() {
        assert.notStrictEqual(localGcloud.config_, config);
        assert.deepEqual(localGcloud.config_, expectedConfig);
      });

      it('should define an empty interceptors array', function() {
        assert.deepEqual(localGcloud.interceptors, []);
      });

      it('should link interceptors to the persisted config object', function() {
        assert.strictEqual(
          localGcloud.interceptors,
          localGcloud.config_.interceptors_
        );
      });
    });

    describe('bigquery', function() {
      it('should create a new BigQuery', function() {
        var bigquery = localGcloud.bigquery(options);

        assert(bigquery instanceof FakeBigQuery);
        assert.strictEqual(bigquery.calledWith_[0], options);
      });
    });

    describe('bigtable', function() {
      it('should create a new Bigtable', function() {
        var bigtable = localGcloud.bigtable(options);

        assert(bigtable instanceof FakeBigtable);
        assert.strictEqual(bigtable.calledWith_[0], options);
      });
    });

    describe('compute', function() {
      it('should create a new Compute', function() {
        var compute = localGcloud.compute(options);

        assert(compute instanceof FakeCompute);
        assert.strictEqual(compute.calledWith_[0], options);
      });
    });

    describe('datastore', function() {
      it('should create a new Datastore', function() {
        var datastore = localGcloud.datastore(options);

        assert(datastore instanceof FakeDatastore);
        assert.strictEqual(datastore.calledWith_[0], options);
      });
    });

    describe('dns', function() {
      it('should create a new DNS', function() {
        var dns = localGcloud.dns(options);

        assert(dns instanceof FakeDNS);
        assert.strictEqual(dns.calledWith_[0], options);
      });
    });

    describe('language', function() {
      it('should create a new Language', function() {
        var language = localGcloud.language(options);

        assert(language instanceof FakeLanguage);
        assert.strictEqual(language.calledWith_[0], options);
      });
    });

    describe('logging', function() {
      it('should create a new Logging', function() {
        var logging = localGcloud.logging(options);

        assert(logging instanceof FakeLogging);
        assert.strictEqual(logging.calledWith_[0], options);
      });
    });

    describe('monitoring', function() {
      it('should create a new Monitoring', function() {
        var monitoring = localGcloud.monitoring(options);

        assert(monitoring instanceof FakeMonitoring);
        assert.strictEqual(monitoring.calledWith_[0], options);
      });
    });

    describe('prediction', function() {
      it('should create a new Prediction', function() {
        var prediction = localGcloud.prediction(options);

        assert(prediction instanceof FakePrediction);
        assert.strictEqual(prediction.calledWith_[0], options);
      });
    });

    describe('pubsub', function() {
      it('should create a new PubSub', function() {
        var pubsub = localGcloud.pubsub(options);

        assert(pubsub instanceof FakePubSub);
        assert.strictEqual(pubsub.calledWith_[0], options);
      });
    });

    describe('resource', function() {
      it('should create a new Prediction', function() {
        var resource = localGcloud.resource(options);

        assert(resource instanceof FakeResource);
        assert.strictEqual(resource.calledWith_[0], options);
      });
    });

    describe('speech', function() {
      it('should create a new Speech', function() {
        var speech = localGcloud.speech(options);

        assert(speech instanceof FakeSpeech);
        assert.strictEqual(speech.calledWith_[0], options);
      });
    });

    describe('storage', function() {
      it('should create a new Storage', function() {
        var storage = localGcloud.storage(options);

        assert(storage instanceof FakeStorage);
        assert.strictEqual(storage.calledWith_[0], options);
      });
    });

    describe('translate', function() {
      it('should create a new Translate', function() {
        var translate = localGcloud.translate(options);

        assert(translate instanceof FakeTranslate);
        assert.strictEqual(translate.calledWith_[0], options);
      });
    });

    describe('vision', function() {
      it('should create a new Vision', function() {
        var vision = localGcloud.vision(options);

        assert(vision instanceof FakeVision);
        assert.strictEqual(vision.calledWith_[0], options);
      });
    });
  });
});
