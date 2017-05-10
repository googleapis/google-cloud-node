/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// jscs:disable
// jshint ignore: start

var assert = require('assert');
var ErrorMessage = require('../../../src/classes/error-message.js');

describe('Instantiating a new ErrorMessage', function() {
  var em;
  beforeEach(function() {em = new ErrorMessage();});

  it('Should have a default service context', function() {
    assert.deepEqual(
      em.serviceContext,
      { service: 'node', version: undefined }
   );
  });
  it('Should have a default message', function() {
    assert.strictEqual(em.message, '');
  });
  it('Should have a default http context', function() {
    assert.deepEqual(
      em.context.httpRequest,
      {
        method: '',
        url: '',
        userAgent: '',
        referrer: '',
        responseStatusCode: 0,
        remoteIp: ''
      }
   );
  });
  it('Should have a default reportLocation', function() {
    assert.deepEqual(
      em.context.reportLocation,
      {
        filePath: '',
        lineNumber: 0,
        functionName: ''
      }
   );
  })
});

describe('Calling against setEventTimeToNow', function() {
  var em;
  beforeEach(function() {em = new ErrorMessage()});
  it('Should set the eventTime property', function() {
    em.setEventTimeToNow();
    assert((typeof em.eventTime) === 'string');
  });
});

describe('Fuzzing against setServiceContext', function() {
  var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  var DEFAULT_TEST_VALUE = 'DEFAULT';
  var DEFAULT_VERSION_VALUE = undefined;
  var DEFAULT_SERVICE_VALUE = 'node';
  var em;
  beforeEach(function() {em = new ErrorMessage()});

  it('Should set the value for service context', function() {
    em.setServiceContext(AFFIRMATIVE_TEST_VALUE, AFFIRMATIVE_TEST_VALUE);
    assert.deepEqual(
      em.serviceContext
      , {
        service: AFFIRMATIVE_TEST_VALUE
        , version: AFFIRMATIVE_TEST_VALUE
      }
      , [
        'In the affirmative case the value should be settable to a valid string'
        , 'and by setting this value this should mutate the instance'
      ].join(' ')
   );
  });
  it('Should set the default values', function() {
    em.setServiceContext(DEFAULT_TEST_VALUE, DEFAULT_TEST_VALUE);
    assert.deepEqual(
      em.serviceContext
      , {
        service: DEFAULT_TEST_VALUE
        , version: DEFAULT_TEST_VALUE
      }
      , [
        'In resetting to default valid values the instance should reflect the'
        , 'value update'
      ].join(' ')
   );
  });
  it('Should still set version with affirmative value', function() {
    em.setServiceContext(null, AFFIRMATIVE_TEST_VALUE);
    assert.deepEqual(
      em.serviceContext
      , {
        service: DEFAULT_SERVICE_VALUE
        , version: AFFIRMATIVE_TEST_VALUE
      }
      , [
        'Providing only a valid value to the second argument of'
        , 'setServiceContext should set the service property as an empty string'
        , 'but set the version property to the affirmative value.'
      ].join(' ')
   );
  });
  it('Should still set service with affirmative value', function() {
    em.setServiceContext(AFFIRMATIVE_TEST_VALUE, null);
    assert.deepEqual(
      em.serviceContext
      , {
        service: AFFIRMATIVE_TEST_VALUE
        , version: DEFAULT_VERSION_VALUE
      }
      , [
        'Providing only a valid value to the first argument of'
        , 'setServiceContext should set the version property as an empty string'
        , 'but set the service property to the affirmative value.'
      ].join(' ')
   );
  });
  it('Should set default values on both', function() {
    em.setServiceContext(null, null);
    assert.deepEqual(
      em.serviceContext
      , {
        service: DEFAULT_SERVICE_VALUE
        , version: DEFAULT_VERSION_VALUE
      }
      , [
        'Providing null as the value to both arguments should set both'
        , 'properties as empty strings.'
      ].join(' ')
   );
  });
  it('Should set default values on both', function() {
    em.setServiceContext(2, 1.3);
    assert.deepEqual(
      em.serviceContext
      , {
        service: DEFAULT_SERVICE_VALUE
        , version: DEFAULT_VERSION_VALUE
      }
      , [
        'Providing numbers as the value to both arguments should set both'
        , 'properties as empty strings.'
      ].join(' ')
   );
  });
  it('Should set as default', function() {
    em.setServiceContext({ test: 'true' }, []);
    assert.deepEqual(
      em.serviceContext
      , {
        service: DEFAULT_SERVICE_VALUE
        , version: DEFAULT_VERSION_VALUE
      }
      , [
        'Providing arrays or objects as the value to both arguments'
        , 'should set both properties as empty strings.'
      ].join(' ')
   );
  });
  it('Should set as default', function() {
    em.setServiceContext();
    assert.deepEqual(
      em.serviceContext
      , {
        service: DEFAULT_SERVICE_VALUE
        , version: DEFAULT_VERSION_VALUE
      }
      , 'Providing no arguments should set both properties as empty strings'
   );
  })
});

describe(
  'Fuzzing against setMessage',
  function() {
    var em;
    beforeEach(function() {em = new ErrorMessage()});
    var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
    var NEGATIVE_TEST_VALUE = '';

    it('Should set the message', function() {
      em.setMessage(AFFIRMATIVE_TEST_VALUE);
      assert(
        em.message === AFFIRMATIVE_TEST_VALUE
        , [
          'In the affirmative case the value should be settable to a valid string'
          , 'and by setting this value this should mutate the instance'
        ].join(' ')
     );
    });
    it('Should default', function() {
      em.setMessage();
      assert(
        em.message === NEGATIVE_TEST_VALUE
        , [
          'By providing no argument (undefined) to setMessage the property'
          , 'message should be set to an empty string on the instance'
        ].join(' ')
     );
    });
  }
);

describe(
  'Fuzzing against setHttpMethod',
  function() {
    var em;
    var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
    var NEGATIVE_TEST_VALUE = '';
    beforeEach(function() {em = new ErrorMessage()});
    it('Should set the method', function() {
      em.setHttpMethod(AFFIRMATIVE_TEST_VALUE);
      assert(
        em.context.httpRequest.method === AFFIRMATIVE_TEST_VALUE
        , [
          'In the affirmative case the value should be settable to a valid string'
          , 'and by setting this value this should mutate the instance'
        ].join(' ')
     );
    });
    it('Should default', function() {
      em.setHttpMethod();
      assert(
        em.context.httpRequest.method === NEGATIVE_TEST_VALUE
        , [
          'By providing no argument (undefined) to setHttpMethod the property'
          , 'message should be set to an empty string on the instance'
        ].join(' ')
     );
    });
  }
);

describe(
  'Fuzzing against setUrl',
  function() {
    var em;
    var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
    var NEGATIVE_TEST_VALUE = '';
    beforeEach(function() {em = new ErrorMessage()});
    it('Should set url', function() {
      em.setUrl(AFFIRMATIVE_TEST_VALUE);
      assert(
        em.context.httpRequest.url === AFFIRMATIVE_TEST_VALUE
        , [
          'In the affirmative case the value should be settable to a valid string'
          , 'and by setting this value this should mutate the instance'
        ].join(' ')
     );
    });
    it('Should default', function() {
      em.setUrl();
      assert(
        em.context.httpRequest.url === NEGATIVE_TEST_VALUE
        , [
          'By providing no argument (undefined) to setUrl the property'
          , 'message should be set to an empty string on the instance'
        ].join(' ')
     );
    });
  }
);


describe(
  'Fuzzing against setUserAgent',
  function() {
    var em;
    var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
    var NEGATIVE_TEST_VALUE = '';
    beforeEach(function() {em = new ErrorMessage()});
    it('Should set userAgent', function() {
      em.setUserAgent(AFFIRMATIVE_TEST_VALUE);
      assert(
        em.context.httpRequest.userAgent === AFFIRMATIVE_TEST_VALUE
        , [
          'In the affirmative case the value should be settable to a valid string'
          , 'and by setting this value this should mutate the instance'
        ].join(' ')
     );
    });
    it('Should default', function() {
      em.setUserAgent();
      assert(
        em.context.httpRequest.userAgent === NEGATIVE_TEST_VALUE
        , [
          'By providing no argument (undefined) to setUserAgent the property'
          , 'message should be set to an empty string on the instance'
        ].join(' ')
     );
    });
  }
);

describe('Fuzzing against setReferrer', function() {
  var em;
  var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  var NEGATIVE_TEST_VALUE = '';
  beforeEach(function() {em = new ErrorMessage()});
  it('Should set referrer', function() {
    em.setReferrer(AFFIRMATIVE_TEST_VALUE);
    assert(
      em.context.httpRequest.referrer === AFFIRMATIVE_TEST_VALUE
      , [
        'In the affirmative case the value should be settable to a valid string'
        , 'and by setting this value this should mutate the instance'
      ].join(' ')
   );
  });
  it('Should default', function() {
    em.setReferrer();
    assert(
      em.context.httpRequest.referrer === NEGATIVE_TEST_VALUE
      , [
        'By providing no argument (undefined) to setReferrer the property'
        , 'message should be set to an empty string on the instance'
      ].join(' ')
   );
  });
});

describe('Fuzzing against setResponseStatusCode', function() {
  var em;
  var AFFIRMATIVE_TEST_VALUE = 200;
  var NEGATIVE_TEST_VALUE = 0;
  beforeEach(function() {em = new ErrorMessage()});
  it('Should set responseStatusCode', function() {
    em.setResponseStatusCode(AFFIRMATIVE_TEST_VALUE);
    assert(
      em.context.httpRequest.responseStatusCode === AFFIRMATIVE_TEST_VALUE
      , [
        'In the affirmative case the value should be settable to a valid string'
        , 'and by setting this value this should mutate the instance'
      ].join(' ')
   );
  });
  it('Should default', function() {
    em.setResponseStatusCode();
    assert(
      em.context.httpRequest.responseStatusCode === NEGATIVE_TEST_VALUE
      , [
        'By providing no argument (undefined) to setResponseStatusCode the property'
        , 'message should be set to an empty string on the instance'
      ].join(' ')
   );
  });
});

describe('Fuzzing against setRemoteIp', function() {
  var em;
  var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  var NEGATIVE_TEST_VALUE = '';
  beforeEach(function() {em = new ErrorMessage()});
  it('Should set remoteIp', function() {
    em.setRemoteIp(AFFIRMATIVE_TEST_VALUE);
    assert(
      em.context.httpRequest.remoteIp === AFFIRMATIVE_TEST_VALUE
      , [
        'In the affirmative case the value should be settable to a valid string'
        , 'and by setting this value this should mutate the instance'
      ].join(' ')
   );
  });
  it('Should default', function() {
    em.setRemoteIp();
    assert(
      em.context.httpRequest.remoteIp === NEGATIVE_TEST_VALUE
      , [
        'By providing no argument (undefined) to setRemoteIp the property'
        , 'message should be set to an empty string on the instance'
      ].join(' ')
   );
  });
});

describe(
  'Fuzzing against setUser',
  function() {
    var em;
    var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
    var NEGATIVE_TEST_VALUE = '';
    beforeEach(function() {em = new ErrorMessage()});
    it('Should set user', function() {
      em.setUser(AFFIRMATIVE_TEST_VALUE);
      assert(
        em.context.user === AFFIRMATIVE_TEST_VALUE
        , [
          'In the affirmative case the value should be settable to a valid string'
          , 'and by setting this value this should mutate the instance'
        ].join(' ')
     );
    });
    it('Should default', function() {
      em.setUser();
      assert(
        em.context.user === NEGATIVE_TEST_VALUE
        , [
          'By providing no argument (undefined) to setUser the property'
          , 'user should be set to an empty string on the instance'
        ].join(' ')
     );
    });
  }
);

describe('Fuzzing against setFilePath', function() {
  var em;
  var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  var NEGATIVE_TEST_VALUE = '';
  beforeEach(function() {em = new ErrorMessage()});
  it('Should set filePath', function() {
    em.setFilePath(AFFIRMATIVE_TEST_VALUE);
    assert(
      em.context.reportLocation.filePath === AFFIRMATIVE_TEST_VALUE
      , [
        'In the affirmative case the value should be settable to a valid string'
        , 'and by setting this value this should mutate the instance'
      ].join(' ')
   );
  });
  it('Should default', function() {
    em.setFilePath();
    assert(
      em.context.reportLocation.filePath === NEGATIVE_TEST_VALUE
      , [
        'By providing no argument (undefined) to setFilePath the property'
        , 'filePath should be set to an empty string on the instance'
      ].join(' ')
   );
  });
});

describe('Fuzzing against setLineNumber', function() {
  var em;
  var AFFIRMATIVE_TEST_VALUE = 27;
  var NEGATIVE_TEST_VALUE = 0;
  beforeEach(function() {em = new ErrorMessage()});
  it('Should set lineNumber', function() {
    em.setLineNumber(AFFIRMATIVE_TEST_VALUE);
    assert(
      em.context.reportLocation.lineNumber === AFFIRMATIVE_TEST_VALUE
      , [
        'In the affirmative case the value should be settable to a valid string'
        , 'and by setting this value this should mutate the instance'
      ].join(' ')
   );
  });
  it('Should default', function() {
    em.setLineNumber();
    assert(
      em.context.reportLocation.lineNumber === NEGATIVE_TEST_VALUE
      , [
        'By providing no argument (undefined) to setLineNumber the property'
        , 'lineNumber should be set to an empty string on the instance'
      ].join(' ')
   );
  });
});

describe('Fuzzing against setFunctionName', function() {
  var em;
  var AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  var NEGATIVE_TEST_VALUE = '';
  beforeEach(function() {em = new ErrorMessage()});
  it('Should set functionName', function() {
    em.setFunctionName(AFFIRMATIVE_TEST_VALUE);
    assert(
      em.context.reportLocation.functionName === AFFIRMATIVE_TEST_VALUE
      , [
        'In the affirmative case the value should be settable to a valid string'
        , 'and by setting this value this should mutate the instance'
      ].join(' ')
   );
  });
  it('Should default', function() {
    em.setFunctionName();
    assert(
      em.context.reportLocation.functionName === NEGATIVE_TEST_VALUE
      , [
        'By providing no argument (undefined) to setFunctionName the property'
        , 'functionName should be set to an empty string on the instance'
      ].join(' ')
   );
  });
});

describe('Fuzzing against consumeRequestInformation', function() {
  var em = new ErrorMessage();
  var A_VALID_STRING = 'A_VALID_STRING';
  var A_VALID_NUMBER = 201;
  var NEGATIVE_STRING_CASE = '';
  var NEGATIVE_NUMBER_CASE = 0;

  var AFFIRMATIVE_TEST_VALUE = {
    method: A_VALID_STRING
    , url: A_VALID_STRING
    , userAgent: A_VALID_STRING
    , referrer: A_VALID_STRING
    , statusCode: A_VALID_NUMBER
    , remoteAddress: A_VALID_STRING
  };
  var NEGATIVE_TEST_VALUE = {
    method: null
    , url: A_VALID_NUMBER
    , userAgent: {}
    , referrer: []
    , statusCode: A_VALID_STRING
    , remoteAddress: undefined
  };
  it('Should consume the stubbed request object', function() {
    em.consumeRequestInformation(AFFIRMATIVE_TEST_VALUE);
    assert(
      em.context.httpRequest.method === A_VALID_STRING
      , [
        'The error messages method, given a valid string, should be'
        , 'set to that value'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.url === A_VALID_STRING
      , [
        'The error messages url, given a valid string, should be'
        , 'set to that value'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.userAgent === A_VALID_STRING
      , [
        'The error messages userAgent, given a valid string, should be'
        , 'set to that value'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.referrer === A_VALID_STRING
      , [
        'The error messages referrer, given a valid string, should be'
        , 'set to that value'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.responseStatusCode === A_VALID_NUMBER
      , [
        'The error messages responseStatusCode, given a valid number, should be'
        , 'set to that value'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.remoteIp === A_VALID_STRING
      , [
        'The error messages remoteAddress, given a valid string, should be'
        , 'set to that value'
      ].join(' ')
   );
  });
  it('Should default when consuming a malformed request object', function() {
    em.consumeRequestInformation(null);
    assert(
      em.context.httpRequest.method === A_VALID_STRING
      , [
        'The error messages method, given an invalid type a the top-level'
        , 'should remain untouched'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.url === A_VALID_STRING
      , [
        'The error messages url, given an invalid type a the top-level'
        , 'should remain untouched'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.userAgent === A_VALID_STRING
      , [
        'The error messages userAgent, given an invalid type a the top-level'
        , 'should remain untouched'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.referrer === A_VALID_STRING
      , [
        'The error messages referrer, given an invalid type a the top-level'
        , 'should remain untouched'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.responseStatusCode === A_VALID_NUMBER
      , [
        'The error messages responseStatusCode, given an invalid type a the top-level'
        , 'should remain untouched'
      ].join(' ')
   );
    assert(
      em.context.httpRequest.remoteIp === A_VALID_STRING
      , [
        'The error messages remoteAddress, given an invalid type a the top-level'
        , 'should remain untouched'
      ].join(' ')
   );
  });
  it('Should default when consuming mistyped response object properties',
    function() {
      em.consumeRequestInformation(NEGATIVE_TEST_VALUE);
      assert(
        em.context.httpRequest.method === NEGATIVE_STRING_CASE
        , [
          'The error messages method, given an invalid input should default to'
          , 'the negative value'
        ].join(' ')
     );
      assert(
        em.context.httpRequest.url === NEGATIVE_STRING_CASE
        , [
          'The error messages url, given an invalid input should default to'
          , 'the negative value'
        ].join(' ')
     );
      assert(
        em.context.httpRequest.userAgent === NEGATIVE_STRING_CASE
        , [
          'The error messages userAgent, ggiven an invalid input should default to'
          , 'the negative value'
        ].join(' ')
     );
      assert(
        em.context.httpRequest.referrer === NEGATIVE_STRING_CASE
        , [
          'The error messages referrer, given an invalid input should default to'
          , 'the negative value'
        ].join(' ')
     );
      assert(
        em.context.httpRequest.responseStatusCode === NEGATIVE_NUMBER_CASE
        , [
          'The error messages responseStatusCode, given an invalid input should default to'
          , 'the negative value'
        ].join(' ')
     );
      assert(
        em.context.httpRequest.remoteIp === NEGATIVE_STRING_CASE
        , [
          'The error messages remoteAddress, given an invalid input should default to'
          , 'the negative value'
        ].join(' ')
     );
    }
 );
  it('Should return the instance on calling consumeRequestInformation',
    function() {
      assert(
        em.consumeRequestInformation(AFFIRMATIVE_TEST_VALUE) instanceof ErrorMessage
        , [
            'Calling consumeRequestInformation with valid input should return'
            , 'the ErrorMessage instance'
          ].join(' ')
     );
      assert(
        em.consumeRequestInformation() instanceof ErrorMessage
        , [
            'Calling consumeRequestInformation with invalid input should return'
            , 'the ErrorMessage instance'
          ].join(' ')
     );
    }
 );
});
