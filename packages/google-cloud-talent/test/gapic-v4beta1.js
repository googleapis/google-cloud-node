// Copyright 2019 Google LLC
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

const talentModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('CompanyServiceClient', () => {
  describe('createCompany', () => {
    it('invokes createCompany without error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const company = {};
      const request = {
        parent: formattedParent,
        company: company,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const externalId = 'externalId-1153075697';
      const headquartersAddress = 'headquartersAddress-1879520036';
      const hiringAgency = false;
      const eeoText = 'eeoText-1652097123';
      const websiteUri = 'websiteUri-2118185016';
      const careerSiteUri = 'careerSiteUri1223331861';
      const imageUri = 'imageUri-877823864';
      const suspended = false;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        externalId: externalId,
        headquartersAddress: headquartersAddress,
        hiringAgency: hiringAgency,
        eeoText: eeoText,
        websiteUri: websiteUri,
        careerSiteUri: careerSiteUri,
        imageUri: imageUri,
        suspended: suspended,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCompany = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createCompany(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createCompany with error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const company = {};
      const request = {
        parent: formattedParent,
        company: company,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCompany = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createCompany(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCompany', () => {
    it('invokes getCompany without error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.companyPath('[PROJECT]', '[COMPANY]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const externalId = 'externalId-1153075697';
      const headquartersAddress = 'headquartersAddress-1879520036';
      const hiringAgency = false;
      const eeoText = 'eeoText-1652097123';
      const websiteUri = 'websiteUri-2118185016';
      const careerSiteUri = 'careerSiteUri1223331861';
      const imageUri = 'imageUri-877823864';
      const suspended = false;
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        externalId: externalId,
        headquartersAddress: headquartersAddress,
        hiringAgency: hiringAgency,
        eeoText: eeoText,
        websiteUri: websiteUri,
        careerSiteUri: careerSiteUri,
        imageUri: imageUri,
        suspended: suspended,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCompany = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCompany(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCompany with error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.companyPath('[PROJECT]', '[COMPANY]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCompany = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCompany(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCompany', () => {
    it('invokes updateCompany without error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const company = {};
      const request = {
        company: company,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const externalId = 'externalId-1153075697';
      const headquartersAddress = 'headquartersAddress-1879520036';
      const hiringAgency = false;
      const eeoText = 'eeoText-1652097123';
      const websiteUri = 'websiteUri-2118185016';
      const careerSiteUri = 'careerSiteUri1223331861';
      const imageUri = 'imageUri-877823864';
      const suspended = false;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        externalId: externalId,
        headquartersAddress: headquartersAddress,
        hiringAgency: hiringAgency,
        eeoText: eeoText,
        websiteUri: websiteUri,
        careerSiteUri: careerSiteUri,
        imageUri: imageUri,
        suspended: suspended,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCompany = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCompany(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCompany with error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const company = {};
      const request = {
        company: company,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCompany = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCompany(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteCompany', () => {
    it('invokes deleteCompany without error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.companyPath('[PROJECT]', '[COMPANY]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCompany = mockSimpleGrpcMethod(request);

      client.deleteCompany(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteCompany with error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.companyPath('[PROJECT]', '[COMPANY]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCompany = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteCompany(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listCompanies', () => {
    it('invokes listCompanies without error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const companiesElement = {};
      const companies = [companiesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        companies: companies,
      };

      // Mock Grpc layer
      client._innerApiCalls.listCompanies = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.companies);
      };

      client.listCompanies(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.companies);
        done();
      });
    });

    it('invokes listCompanies with error', done => {
      const client = new talentModule.v4beta1.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listCompanies = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listCompanies(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('CompletionClient', () => {
  describe('completeQuery', () => {
    it('invokes completeQuery without error', done => {
      const client = new talentModule.v4beta1.CompletionClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const query = 'query107944136';
      const pageSize = 883849137;
      const request = {
        name: formattedName,
        query: query,
        pageSize: pageSize,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.completeQuery = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.completeQuery(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes completeQuery with error', done => {
      const client = new talentModule.v4beta1.CompletionClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const query = 'query107944136';
      const pageSize = 883849137;
      const request = {
        name: formattedName,
        query: query,
        pageSize: pageSize,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeQuery = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.completeQuery(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('EventServiceClient', () => {
  describe('createClientEvent', () => {
    it('invokes createClientEvent without error', done => {
      const client = new talentModule.v4beta1.EventServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const clientEvent = {};
      const request = {
        parent: formattedParent,
        clientEvent: clientEvent,
      };

      // Mock response
      const requestId = 'requestId37109963';
      const eventId = 'eventId278118624';
      const expectedResponse = {
        requestId: requestId,
        eventId: eventId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createClientEvent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createClientEvent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createClientEvent with error', done => {
      const client = new talentModule.v4beta1.EventServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const clientEvent = {};
      const request = {
        parent: formattedParent,
        clientEvent: clientEvent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createClientEvent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createClientEvent(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('JobServiceClient', () => {
  describe('createJob', () => {
    it('invokes createJob without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const job = {};
      const request = {
        parent: formattedParent,
        job: job,
      };

      // Mock response
      const name = 'name3373707';
      const companyName = 'companyName1429880077';
      const requisitionId = 'requisitionId980224926';
      const title = 'title110371416';
      const description = 'description-1724546052';
      const department = 'department848184146';
      const incentives = 'incentives-1262874520';
      const languageCode = 'languageCode-412800396';
      const promotionValue = 353413845;
      const qualifications = 'qualifications1903501412';
      const responsibilities = 'responsibilities-926952660';
      const companyDisplayName = 'companyDisplayName1982424170';
      const expectedResponse = {
        name: name,
        companyName: companyName,
        requisitionId: requisitionId,
        title: title,
        description: description,
        department: department,
        incentives: incentives,
        languageCode: languageCode,
        promotionValue: promotionValue,
        qualifications: qualifications,
        responsibilities: responsibilities,
        companyDisplayName: companyDisplayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createJob with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const job = {};
      const request = {
        parent: formattedParent,
        job: job,
      };

      // Mock Grpc layer
      client._innerApiCalls.createJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getJob', () => {
    it('invokes getJob without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[JOBS]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const companyName = 'companyName1429880077';
      const requisitionId = 'requisitionId980224926';
      const title = 'title110371416';
      const description = 'description-1724546052';
      const department = 'department848184146';
      const incentives = 'incentives-1262874520';
      const languageCode = 'languageCode-412800396';
      const promotionValue = 353413845;
      const qualifications = 'qualifications1903501412';
      const responsibilities = 'responsibilities-926952660';
      const companyDisplayName = 'companyDisplayName1982424170';
      const expectedResponse = {
        name: name2,
        companyName: companyName,
        requisitionId: requisitionId,
        title: title,
        description: description,
        department: department,
        incentives: incentives,
        languageCode: languageCode,
        promotionValue: promotionValue,
        qualifications: qualifications,
        responsibilities: responsibilities,
        companyDisplayName: companyDisplayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getJob with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[JOBS]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getJob = mockSimpleGrpcMethod(request, null, error);

      client.getJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateJob', () => {
    it('invokes updateJob without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const job = {};
      const request = {
        job: job,
      };

      // Mock response
      const name = 'name3373707';
      const companyName = 'companyName1429880077';
      const requisitionId = 'requisitionId980224926';
      const title = 'title110371416';
      const description = 'description-1724546052';
      const department = 'department848184146';
      const incentives = 'incentives-1262874520';
      const languageCode = 'languageCode-412800396';
      const promotionValue = 353413845;
      const qualifications = 'qualifications1903501412';
      const responsibilities = 'responsibilities-926952660';
      const companyDisplayName = 'companyDisplayName1982424170';
      const expectedResponse = {
        name: name,
        companyName: companyName,
        requisitionId: requisitionId,
        title: title,
        description: description,
        department: department,
        incentives: incentives,
        languageCode: languageCode,
        promotionValue: promotionValue,
        qualifications: qualifications,
        responsibilities: responsibilities,
        companyDisplayName: companyDisplayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateJob with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const job = {};
      const request = {
        job: job,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteJob', () => {
    it('invokes deleteJob without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[JOBS]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(request);

      client.deleteJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteJob with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[JOBS]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteJob(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listJobs', () => {
    it('invokes listJobs without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock response
      const nextPageToken = '';
      const jobsElement = {};
      const jobs = [jobsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        jobs: jobs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listJobs = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.jobs);
      };

      client.listJobs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.jobs);
        done();
      });
    });

    it('invokes listJobs with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock Grpc layer
      client._innerApiCalls.listJobs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listJobs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('batchDeleteJobs', () => {
    it('invokes batchDeleteJobs without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteJobs = mockSimpleGrpcMethod(request);

      client.batchDeleteJobs(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes batchDeleteJobs with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteJobs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchDeleteJobs(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('searchJobs', () => {
    it('invokes searchJobs without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const requestMetadata = {};
      const request = {
        parent: formattedParent,
        requestMetadata: requestMetadata,
      };

      // Mock response
      const nextPageToken = '';
      const estimatedTotalSize = 1882144769;
      const totalSize = 705419236;
      const broadenedQueryJobsCount = 1432104658;
      const matchingJobsElement = {};
      const matchingJobs = [matchingJobsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        estimatedTotalSize: estimatedTotalSize,
        totalSize: totalSize,
        broadenedQueryJobsCount: broadenedQueryJobsCount,
        matchingJobs: matchingJobs,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchJobs = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.matchingJobs);
      };

      client.searchJobs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.matchingJobs);
        done();
      });
    });

    it('invokes searchJobs with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const requestMetadata = {};
      const request = {
        parent: formattedParent,
        requestMetadata: requestMetadata,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchJobs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchJobs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchJobsForAlert', () => {
    it('invokes searchJobsForAlert without error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const requestMetadata = {};
      const request = {
        parent: formattedParent,
        requestMetadata: requestMetadata,
      };

      // Mock response
      const nextPageToken = '';
      const estimatedTotalSize = 1882144769;
      const totalSize = 705419236;
      const broadenedQueryJobsCount = 1432104658;
      const matchingJobsElement = {};
      const matchingJobs = [matchingJobsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        estimatedTotalSize: estimatedTotalSize,
        totalSize: totalSize,
        broadenedQueryJobsCount: broadenedQueryJobsCount,
        matchingJobs: matchingJobs,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchJobsForAlert = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.matchingJobs);
      };

      client.searchJobsForAlert(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.matchingJobs);
        done();
      });
    });

    it('invokes searchJobsForAlert with error', done => {
      const client = new talentModule.v4beta1.JobServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const requestMetadata = {};
      const request = {
        parent: formattedParent,
        requestMetadata: requestMetadata,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchJobsForAlert = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchJobsForAlert(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('ProfileServiceClient', () => {
  describe('listProfiles', () => {
    it('invokes listProfiles without error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const profilesElement = {};
      const profiles = [profilesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        profiles: profiles,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProfiles = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.profiles);
      };

      client.listProfiles(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.profiles);
        done();
      });
    });

    it('invokes listProfiles with error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProfiles = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listProfiles(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createProfile', () => {
    it('invokes createProfile without error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
      const profile = {};
      const request = {
        parent: formattedParent,
        profile: profile,
      };

      // Mock response
      const name = 'name3373707';
      const externalId = 'externalId-1153075697';
      const source = 'source-896505829';
      const uri = 'uri116076';
      const groupId = 'groupId506361563';
      const resumeHrxml = 'resumeHrxml1834730555';
      const processed = true;
      const keywordSnippet = 'keywordSnippet1325317319';
      const expectedResponse = {
        name: name,
        externalId: externalId,
        source: source,
        uri: uri,
        groupId: groupId,
        resumeHrxml: resumeHrxml,
        processed: processed,
        keywordSnippet: keywordSnippet,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createProfile(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProfile with error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
      const profile = {};
      const request = {
        parent: formattedParent,
        profile: profile,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createProfile(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getProfile', () => {
    it('invokes getProfile without error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.profilePath(
        '[PROJECT]',
        '[TENANT]',
        '[PROFILE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const externalId = 'externalId-1153075697';
      const source = 'source-896505829';
      const uri = 'uri116076';
      const groupId = 'groupId506361563';
      const resumeHrxml = 'resumeHrxml1834730555';
      const processed = true;
      const keywordSnippet = 'keywordSnippet1325317319';
      const expectedResponse = {
        name: name2,
        externalId: externalId,
        source: source,
        uri: uri,
        groupId: groupId,
        resumeHrxml: resumeHrxml,
        processed: processed,
        keywordSnippet: keywordSnippet,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getProfile(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProfile with error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.profilePath(
        '[PROJECT]',
        '[TENANT]',
        '[PROFILE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getProfile(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateProfile', () => {
    it('invokes updateProfile without error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const profile = {};
      const request = {
        profile: profile,
      };

      // Mock response
      const name = 'name3373707';
      const externalId = 'externalId-1153075697';
      const source = 'source-896505829';
      const uri = 'uri116076';
      const groupId = 'groupId506361563';
      const resumeHrxml = 'resumeHrxml1834730555';
      const processed = true;
      const keywordSnippet = 'keywordSnippet1325317319';
      const expectedResponse = {
        name: name,
        externalId: externalId,
        source: source,
        uri: uri,
        groupId: groupId,
        resumeHrxml: resumeHrxml,
        processed: processed,
        keywordSnippet: keywordSnippet,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateProfile(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProfile with error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const profile = {};
      const request = {
        profile: profile,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateProfile(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteProfile', () => {
    it('invokes deleteProfile without error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.profilePath(
        '[PROJECT]',
        '[TENANT]',
        '[PROFILE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProfile = mockSimpleGrpcMethod(request);

      client.deleteProfile(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteProfile with error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.profilePath(
        '[PROJECT]',
        '[TENANT]',
        '[PROFILE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteProfile(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('searchProfiles', () => {
    it('invokes searchProfiles without error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
      const requestMetadata = {};
      const request = {
        parent: formattedParent,
        requestMetadata: requestMetadata,
      };

      // Mock response
      const estimatedTotalSize = 1882144769;
      const nextPageToken = '';
      const histogramQueryResultsElement = {};
      const histogramQueryResults = [histogramQueryResultsElement];
      const expectedResponse = {
        estimatedTotalSize: estimatedTotalSize,
        nextPageToken: nextPageToken,
        histogramQueryResults: histogramQueryResults,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchProfiles = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.histogramQueryResults);
      };

      client.searchProfiles(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(
          response,
          expectedResponse.histogramQueryResults
        );
        done();
      });
    });

    it('invokes searchProfiles with error', done => {
      const client = new talentModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
      const requestMetadata = {};
      const request = {
        parent: formattedParent,
        requestMetadata: requestMetadata,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchProfiles = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchProfiles(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('ResumeServiceClient', () => {
  describe('parseResume', () => {
    it('invokes parseResume without error', done => {
      const client = new talentModule.v4beta1.ResumeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const resume = '45';
      const request = {
        parent: formattedParent,
        resume: resume,
      };

      // Mock response
      const rawText = 'rawText503586532';
      const expectedResponse = {
        rawText: rawText,
      };

      // Mock Grpc layer
      client._innerApiCalls.parseResume = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.parseResume(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes parseResume with error', done => {
      const client = new talentModule.v4beta1.ResumeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const resume = '45';
      const request = {
        parent: formattedParent,
        resume: resume,
      };

      // Mock Grpc layer
      client._innerApiCalls.parseResume = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.parseResume(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('TenantServiceClient', () => {
  describe('createTenant', () => {
    it('invokes createTenant without error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const tenant = {};
      const request = {
        parent: formattedParent,
        tenant: tenant,
      };

      // Mock response
      const name = 'name3373707';
      const externalId = 'externalId-1153075697';
      const expectedResponse = {
        name: name,
        externalId: externalId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTenant = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createTenant(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTenant with error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const tenant = {};
      const request = {
        parent: formattedParent,
        tenant: tenant,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTenant = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTenant(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getTenant', () => {
    it('invokes getTenant without error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tenantPath('[PROJECT]', '[TENANT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const externalId = 'externalId-1153075697';
      const expectedResponse = {
        name: name2,
        externalId: externalId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTenant = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getTenant(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getTenant with error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tenantPath('[PROJECT]', '[TENANT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTenant = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getTenant(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateTenant', () => {
    it('invokes updateTenant without error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tenant = {};
      const request = {
        tenant: tenant,
      };

      // Mock response
      const name = 'name3373707';
      const externalId = 'externalId-1153075697';
      const expectedResponse = {
        name: name,
        externalId: externalId,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTenant = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateTenant(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateTenant with error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tenant = {};
      const request = {
        tenant: tenant,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTenant = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateTenant(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTenant', () => {
    it('invokes deleteTenant without error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tenantPath('[PROJECT]', '[TENANT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTenant = mockSimpleGrpcMethod(request);

      client.deleteTenant(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTenant with error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tenantPath('[PROJECT]', '[TENANT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTenant = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTenant(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTenants', () => {
    it('invokes listTenants without error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const tenantsElement = {};
      const tenants = [tenantsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        tenants: tenants,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTenants = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.tenants);
      };

      client.listTenants(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.tenants);
        done();
      });
    });

    it('invokes listTenants with error', done => {
      const client = new talentModule.v4beta1.TenantServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTenants = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTenants(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
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
