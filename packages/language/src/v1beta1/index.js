'use strict';

var languageServiceApi = require('./language_service_api');

function v1beta1(options) {
  return languageServiceApi(options);
}

v1beta1.SERVICE_ADDRESS = languageServiceApi.SERVICE_ADDRESS;
v1beta1.ALL_SCOPES = languageServiceApi.ALL_SCOPES;
module.exports = v1beta1;
