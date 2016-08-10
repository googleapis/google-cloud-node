'use strict';

var languageServiceApi = require('./language_service_api');

exports.grpc = function(optGrpc) {
  return languageServiceApi.grpc(optGrpc).google.cloud.language.v1beta1;
};
exports.LanguageServiceApi = languageServiceApi.LanguageServiceApi;
