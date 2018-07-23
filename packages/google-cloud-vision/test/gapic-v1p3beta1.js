// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const visionModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ProductSearchClient', () => {
  describe('createProductSet', () => {
    it('invokes createProductSet without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var productSet = {};
      var productSetId = 'productSetId4216680';
      var request = {
        parent: formattedParent,
        productSet: productSet,
        productSetId: productSetId,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProductSet with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var productSet = {};
      var productSetId = 'productSetId4216680';
      var request = {
        parent: formattedParent,
        productSet: productSet,
        productSetId: productSetId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listProductSets', () => {
    it('invokes listProductSets without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var productSetsElement = {};
      var productSets = [productSetsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        productSets: productSets,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductSets = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.productSets);
      };

      client.listProductSets(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.productSets);
        done();
      });
    });

    it('invokes listProductSets with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductSets = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listProductSets(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getProductSet', () => {
    it('invokes getProductSet without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProductSet with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateProductSet', () => {
    it('invokes updateProductSet without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var productSet = {};
      var updateMask = {};
      var request = {
        productSet: productSet,
        updateMask: updateMask,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProductSet with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var productSet = {};
      var updateMask = {};
      var request = {
        productSet: productSet,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteProductSet', () => {
    it('invokes deleteProductSet without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProductSet = mockSimpleGrpcMethod(request);

      client.deleteProductSet(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteProductSet with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteProductSet(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createProduct', () => {
    it('invokes createProduct without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var product = {};
      var productId = 'productId1753008747';
      var request = {
        parent: formattedParent,
        product: product,
        productId: productId,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var productCategory = 'productCategory-1607451058';
      var expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        productCategory: productCategory,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createProduct(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProduct with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var product = {};
      var productId = 'productId1753008747';
      var request = {
        parent: formattedParent,
        product: product,
        productId: productId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createProduct(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listProducts', () => {
    it('invokes listProducts without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var productsElement = {};
      var products = [productsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        products: products,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProducts = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.products);
      };

      client.listProducts(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.products);
        done();
      });
    });

    it('invokes listProducts with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProducts = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listProducts(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getProduct', () => {
    it('invokes getProduct without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var productCategory = 'productCategory-1607451058';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
        productCategory: productCategory,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getProduct(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProduct with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getProduct(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateProduct', () => {
    it('invokes updateProduct without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var product = {};
      var updateMask = {};
      var request = {
        product: product,
        updateMask: updateMask,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var productCategory = 'productCategory-1607451058';
      var expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        productCategory: productCategory,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateProduct(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProduct with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var product = {};
      var updateMask = {};
      var request = {
        product: product,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateProduct(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteProduct', () => {
    it('invokes deleteProduct without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProduct = mockSimpleGrpcMethod(request);

      client.deleteProduct(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteProduct with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteProduct(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createReferenceImage', () => {
    it('invokes createReferenceImage without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var referenceImage = {};
      var referenceImageId = 'referenceImageId1946713331';
      var request = {
        parent: formattedParent,
        referenceImage: referenceImage,
        referenceImageId: referenceImageId,
      };

      // Mock response
      var name = 'name3373707';
      var uri = 'uri116076';
      var expectedResponse = {
        name: name,
        uri: uri,
      };

      // Mock Grpc layer
      client._innerApiCalls.createReferenceImage = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createReferenceImage(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createReferenceImage with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var referenceImage = {};
      var referenceImageId = 'referenceImageId1946713331';
      var request = {
        parent: formattedParent,
        referenceImage: referenceImage,
        referenceImageId: referenceImageId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createReferenceImage(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteReferenceImage', () => {
    it('invokes deleteReferenceImage without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteReferenceImage = mockSimpleGrpcMethod(
        request
      );

      client.deleteReferenceImage(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteReferenceImage with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteReferenceImage(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listReferenceImages', () => {
    it('invokes listReferenceImages without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var pageSize = 883849137;
      var nextPageToken = '';
      var referenceImagesElement = {};
      var referenceImages = [referenceImagesElement];
      var expectedResponse = {
        pageSize: pageSize,
        nextPageToken: nextPageToken,
        referenceImages: referenceImages,
      };

      // Mock Grpc layer
      client._innerApiCalls.listReferenceImages = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.referenceImages);
      };

      client.listReferenceImages(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.referenceImages);
        done();
      });
    });

    it('invokes listReferenceImages with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listReferenceImages = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listReferenceImages(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getReferenceImage', () => {
    it('invokes getReferenceImage without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var uri = 'uri116076';
      var expectedResponse = {
        name: name2,
        uri: uri,
      };

      // Mock Grpc layer
      client._innerApiCalls.getReferenceImage = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getReferenceImage(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getReferenceImage with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getReferenceImage(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('addProductToProductSet', () => {
    it('invokes addProductToProductSet without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var product = 'product-309474065';
      var request = {
        name: formattedName,
        product: product,
      };

      // Mock Grpc layer
      client._innerApiCalls.addProductToProductSet = mockSimpleGrpcMethod(
        request
      );

      client.addProductToProductSet(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes addProductToProductSet with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var product = 'product-309474065';
      var request = {
        name: formattedName,
        product: product,
      };

      // Mock Grpc layer
      client._innerApiCalls.addProductToProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.addProductToProductSet(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('removeProductFromProductSet', () => {
    it('invokes removeProductFromProductSet without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var product = 'product-309474065';
      var request = {
        name: formattedName,
        product: product,
      };

      // Mock Grpc layer
      client._innerApiCalls.removeProductFromProductSet = mockSimpleGrpcMethod(
        request
      );

      client.removeProductFromProductSet(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes removeProductFromProductSet with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var product = 'product-309474065';
      var request = {
        name: formattedName,
        product: product,
      };

      // Mock Grpc layer
      client._innerApiCalls.removeProductFromProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.removeProductFromProductSet(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listProductsInProductSet', () => {
    it('invokes listProductsInProductSet without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var nextPageToken = '';
      var productsElement = {};
      var products = [productsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        products: products,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductsInProductSet = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.products);
      };

      client.listProductsInProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.products);
        done();
      });
    });

    it('invokes listProductsInProductSet with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductsInProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listProductsInProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('importProductSets', function() {
    it('invokes importProductSets without error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var inputConfig = {};
      var request = {
        parent: formattedParent,
        inputConfig: inputConfig,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.importProductSets = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .importProductSets(request)
        .then(responses => {
          var operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes importProductSets with error', done => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var inputConfig = {};
      var request = {
        parent: formattedParent,
        inputConfig: inputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.importProductSets = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .importProductSets(request)
        .then(responses => {
          var operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      var client = new visionModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.importProductSets
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.importProductSets
          .metadataDecoder instanceof Function
      );
    });
  });
});
describe('ImageAnnotatorClient', () => {
  describe('batchAnnotateImages', () => {
    it('invokes batchAnnotateImages without error', done => {
      var client = new visionModule.v1p3beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var requests = [];
      var request = {
        requests: requests,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchAnnotateImages = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.batchAnnotateImages(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchAnnotateImages with error', done => {
      var client = new visionModule.v1p3beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var requests = [];
      var request = {
        requests: requests,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchAnnotateImages = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchAnnotateImages(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('asyncBatchAnnotateFiles', function() {
    it('invokes asyncBatchAnnotateFiles without error', done => {
      var client = new visionModule.v1p3beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var requests = [];
      var request = {
        requests: requests,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.asyncBatchAnnotateFiles = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .asyncBatchAnnotateFiles(request)
        .then(responses => {
          var operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes asyncBatchAnnotateFiles with error', done => {
      var client = new visionModule.v1p3beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var requests = [];
      var request = {
        requests: requests,
      };

      // Mock Grpc layer
      client._innerApiCalls.asyncBatchAnnotateFiles = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .asyncBatchAnnotateFiles(request)
        .then(responses => {
          var operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      var client = new visionModule.v1p3beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.asyncBatchAnnotateFiles
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.asyncBatchAnnotateFiles
          .metadataDecoder instanceof Function
      );
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    var mockOperation = {
      promise: function() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
