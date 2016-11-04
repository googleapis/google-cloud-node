/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

/**
 * @type {module:common/grpcOperation}
 * @private
 */
exports.GrpcOperation = require('./grpc-operation.js');

/**
 * @type {module:common/grpcService}
 * @private
 */
exports.GrpcService = require('./grpc-service.js');

/**
 * @type {module:common/grpcServiceObject}
 * @private
 */
exports.GrpcServiceObject = require('./grpc-service-object.js');

/**
 * @type {module:common/operation}
 * @private
 */
exports.Operation = require('./operation.js');

/**
 * @type {module:common/paginator}
 * @private
 */
exports.paginator = require('./paginator.js');

/**
 * @type {module:common/service}
 * @private
 */
exports.Service = require('./service.js');

/**
 * @type {module:common/serviceObject}
 * @private
 */
exports.ServiceObject = require('./service-object.js');

/**
 * @type {module:common/util}
 * @private
 */
exports.util = require('./util.js');
