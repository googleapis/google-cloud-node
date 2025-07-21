// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace managedkafka. */
        namespace managedkafka {

            /** Namespace schemaregistry. */
            namespace schemaregistry {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a ManagedSchemaRegistry */
                    class ManagedSchemaRegistry extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ManagedSchemaRegistry service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ManagedSchemaRegistry service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ManagedSchemaRegistry;

                        /**
                         * Calls GetSchemaRegistry.
                         * @param request GetSchemaRegistryRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaRegistry
                         */
                        public getSchemaRegistry(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRegistryRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetSchemaRegistryCallback): void;

                        /**
                         * Calls GetSchemaRegistry.
                         * @param request GetSchemaRegistryRequest message or plain object
                         * @returns Promise
                         */
                        public getSchemaRegistry(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRegistryRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry>;

                        /**
                         * Calls ListSchemaRegistries.
                         * @param request ListSchemaRegistriesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListSchemaRegistriesResponse
                         */
                        public listSchemaRegistries(request: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListSchemaRegistriesCallback): void;

                        /**
                         * Calls ListSchemaRegistries.
                         * @param request ListSchemaRegistriesRequest message or plain object
                         * @returns Promise
                         */
                        public listSchemaRegistries(request: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse>;

                        /**
                         * Calls CreateSchemaRegistry.
                         * @param request CreateSchemaRegistryRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaRegistry
                         */
                        public createSchemaRegistry(request: google.cloud.managedkafka.schemaregistry.v1.ICreateSchemaRegistryRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.CreateSchemaRegistryCallback): void;

                        /**
                         * Calls CreateSchemaRegistry.
                         * @param request CreateSchemaRegistryRequest message or plain object
                         * @returns Promise
                         */
                        public createSchemaRegistry(request: google.cloud.managedkafka.schemaregistry.v1.ICreateSchemaRegistryRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry>;

                        /**
                         * Calls DeleteSchemaRegistry.
                         * @param request DeleteSchemaRegistryRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteSchemaRegistry(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaRegistryRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.DeleteSchemaRegistryCallback): void;

                        /**
                         * Calls DeleteSchemaRegistry.
                         * @param request DeleteSchemaRegistryRequest message or plain object
                         * @returns Promise
                         */
                        public deleteSchemaRegistry(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaRegistryRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls GetContext.
                         * @param request GetContextRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Context
                         */
                        public getContext(request: google.cloud.managedkafka.schemaregistry.v1.IGetContextRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetContextCallback): void;

                        /**
                         * Calls GetContext.
                         * @param request GetContextRequest message or plain object
                         * @returns Promise
                         */
                        public getContext(request: google.cloud.managedkafka.schemaregistry.v1.IGetContextRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.Context>;

                        /**
                         * Calls ListContexts.
                         * @param request ListContextsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public listContexts(request: google.cloud.managedkafka.schemaregistry.v1.IListContextsRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListContextsCallback): void;

                        /**
                         * Calls ListContexts.
                         * @param request ListContextsRequest message or plain object
                         * @returns Promise
                         */
                        public listContexts(request: google.cloud.managedkafka.schemaregistry.v1.IListContextsRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls GetSchema.
                         * @param request GetSchemaRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Schema
                         */
                        public getSchema(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetSchemaCallback): void;

                        /**
                         * Calls GetSchema.
                         * @param request GetSchemaRequest message or plain object
                         * @returns Promise
                         */
                        public getSchema(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.Schema>;

                        /**
                         * Calls GetRawSchema.
                         * @param request GetSchemaRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public getRawSchema(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetRawSchemaCallback): void;

                        /**
                         * Calls GetRawSchema.
                         * @param request GetSchemaRequest message or plain object
                         * @returns Promise
                         */
                        public getRawSchema(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls ListSchemaVersions.
                         * @param request ListSchemaVersionsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public listSchemaVersions(request: google.cloud.managedkafka.schemaregistry.v1.IListSchemaVersionsRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListSchemaVersionsCallback): void;

                        /**
                         * Calls ListSchemaVersions.
                         * @param request ListSchemaVersionsRequest message or plain object
                         * @returns Promise
                         */
                        public listSchemaVersions(request: google.cloud.managedkafka.schemaregistry.v1.IListSchemaVersionsRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls ListSchemaTypes.
                         * @param request ListSchemaTypesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public listSchemaTypes(request: google.cloud.managedkafka.schemaregistry.v1.IListSchemaTypesRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListSchemaTypesCallback): void;

                        /**
                         * Calls ListSchemaTypes.
                         * @param request ListSchemaTypesRequest message or plain object
                         * @returns Promise
                         */
                        public listSchemaTypes(request: google.cloud.managedkafka.schemaregistry.v1.IListSchemaTypesRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls ListSubjects.
                         * @param request ListSubjectsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public listSubjects(request: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListSubjectsCallback): void;

                        /**
                         * Calls ListSubjects.
                         * @param request ListSubjectsRequest message or plain object
                         * @returns Promise
                         */
                        public listSubjects(request: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls ListSubjectsBySchemaId.
                         * @param request ListSubjectsBySchemaIdRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public listSubjectsBySchemaId(request: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsBySchemaIdRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListSubjectsBySchemaIdCallback): void;

                        /**
                         * Calls ListSubjectsBySchemaId.
                         * @param request ListSubjectsBySchemaIdRequest message or plain object
                         * @returns Promise
                         */
                        public listSubjectsBySchemaId(request: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsBySchemaIdRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls DeleteSubject.
                         * @param request DeleteSubjectRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public deleteSubject(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSubjectRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.DeleteSubjectCallback): void;

                        /**
                         * Calls DeleteSubject.
                         * @param request DeleteSubjectRequest message or plain object
                         * @returns Promise
                         */
                        public deleteSubject(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSubjectRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls LookupVersion.
                         * @param request LookupVersionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaVersion
                         */
                        public lookupVersion(request: google.cloud.managedkafka.schemaregistry.v1.ILookupVersionRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.LookupVersionCallback): void;

                        /**
                         * Calls LookupVersion.
                         * @param request LookupVersionRequest message or plain object
                         * @returns Promise
                         */
                        public lookupVersion(request: google.cloud.managedkafka.schemaregistry.v1.ILookupVersionRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaVersion>;

                        /**
                         * Calls GetVersion.
                         * @param request GetVersionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaVersion
                         */
                        public getVersion(request: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetVersionCallback): void;

                        /**
                         * Calls GetVersion.
                         * @param request GetVersionRequest message or plain object
                         * @returns Promise
                         */
                        public getVersion(request: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaVersion>;

                        /**
                         * Calls GetRawSchemaVersion.
                         * @param request GetVersionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public getRawSchemaVersion(request: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetRawSchemaVersionCallback): void;

                        /**
                         * Calls GetRawSchemaVersion.
                         * @param request GetVersionRequest message or plain object
                         * @returns Promise
                         */
                        public getRawSchemaVersion(request: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls ListVersions.
                         * @param request ListVersionsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public listVersions(request: google.cloud.managedkafka.schemaregistry.v1.IListVersionsRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListVersionsCallback): void;

                        /**
                         * Calls ListVersions.
                         * @param request ListVersionsRequest message or plain object
                         * @returns Promise
                         */
                        public listVersions(request: google.cloud.managedkafka.schemaregistry.v1.IListVersionsRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls CreateVersion.
                         * @param request CreateVersionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CreateVersionResponse
                         */
                        public createVersion(request: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.CreateVersionCallback): void;

                        /**
                         * Calls CreateVersion.
                         * @param request CreateVersionRequest message or plain object
                         * @returns Promise
                         */
                        public createVersion(request: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse>;

                        /**
                         * Calls DeleteVersion.
                         * @param request DeleteVersionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public deleteVersion(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteVersionRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.DeleteVersionCallback): void;

                        /**
                         * Calls DeleteVersion.
                         * @param request DeleteVersionRequest message or plain object
                         * @returns Promise
                         */
                        public deleteVersion(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteVersionRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls ListReferencedSchemas.
                         * @param request ListReferencedSchemasRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and HttpBody
                         */
                        public listReferencedSchemas(request: google.cloud.managedkafka.schemaregistry.v1.IListReferencedSchemasRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.ListReferencedSchemasCallback): void;

                        /**
                         * Calls ListReferencedSchemas.
                         * @param request ListReferencedSchemasRequest message or plain object
                         * @returns Promise
                         */
                        public listReferencedSchemas(request: google.cloud.managedkafka.schemaregistry.v1.IListReferencedSchemasRequest): Promise<google.api.HttpBody>;

                        /**
                         * Calls CheckCompatibility.
                         * @param request CheckCompatibilityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CheckCompatibilityResponse
                         */
                        public checkCompatibility(request: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.CheckCompatibilityCallback): void;

                        /**
                         * Calls CheckCompatibility.
                         * @param request CheckCompatibilityRequest message or plain object
                         * @returns Promise
                         */
                        public checkCompatibility(request: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse>;

                        /**
                         * Calls GetSchemaConfig.
                         * @param request GetSchemaConfigRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaConfig
                         */
                        public getSchemaConfig(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaConfigRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetSchemaConfigCallback): void;

                        /**
                         * Calls GetSchemaConfig.
                         * @param request GetSchemaConfigRequest message or plain object
                         * @returns Promise
                         */
                        public getSchemaConfig(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaConfigRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaConfig>;

                        /**
                         * Calls UpdateSchemaConfig.
                         * @param request UpdateSchemaConfigRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaConfig
                         */
                        public updateSchemaConfig(request: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaConfigRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.UpdateSchemaConfigCallback): void;

                        /**
                         * Calls UpdateSchemaConfig.
                         * @param request UpdateSchemaConfigRequest message or plain object
                         * @returns Promise
                         */
                        public updateSchemaConfig(request: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaConfigRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaConfig>;

                        /**
                         * Calls DeleteSchemaConfig.
                         * @param request DeleteSchemaConfigRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaConfig
                         */
                        public deleteSchemaConfig(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaConfigRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.DeleteSchemaConfigCallback): void;

                        /**
                         * Calls DeleteSchemaConfig.
                         * @param request DeleteSchemaConfigRequest message or plain object
                         * @returns Promise
                         */
                        public deleteSchemaConfig(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaConfigRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaConfig>;

                        /**
                         * Calls GetSchemaMode.
                         * @param request GetSchemaModeRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaMode
                         */
                        public getSchemaMode(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaModeRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.GetSchemaModeCallback): void;

                        /**
                         * Calls GetSchemaMode.
                         * @param request GetSchemaModeRequest message or plain object
                         * @returns Promise
                         */
                        public getSchemaMode(request: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaModeRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaMode>;

                        /**
                         * Calls UpdateSchemaMode.
                         * @param request UpdateSchemaModeRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaMode
                         */
                        public updateSchemaMode(request: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaModeRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.UpdateSchemaModeCallback): void;

                        /**
                         * Calls UpdateSchemaMode.
                         * @param request UpdateSchemaModeRequest message or plain object
                         * @returns Promise
                         */
                        public updateSchemaMode(request: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaModeRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaMode>;

                        /**
                         * Calls DeleteSchemaMode.
                         * @param request DeleteSchemaModeRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SchemaMode
                         */
                        public deleteSchemaMode(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaModeRequest, callback: google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry.DeleteSchemaModeCallback): void;

                        /**
                         * Calls DeleteSchemaMode.
                         * @param request DeleteSchemaModeRequest message or plain object
                         * @returns Promise
                         */
                        public deleteSchemaMode(request: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaModeRequest): Promise<google.cloud.managedkafka.schemaregistry.v1.SchemaMode>;
                    }

                    namespace ManagedSchemaRegistry {

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getSchemaRegistry}.
                         * @param error Error, if any
                         * @param [response] SchemaRegistry
                         */
                        type GetSchemaRegistryCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listSchemaRegistries}.
                         * @param error Error, if any
                         * @param [response] ListSchemaRegistriesResponse
                         */
                        type ListSchemaRegistriesCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|createSchemaRegistry}.
                         * @param error Error, if any
                         * @param [response] SchemaRegistry
                         */
                        type CreateSchemaRegistryCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|deleteSchemaRegistry}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteSchemaRegistryCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getContext}.
                         * @param error Error, if any
                         * @param [response] Context
                         */
                        type GetContextCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.Context) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listContexts}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type ListContextsCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getSchema}.
                         * @param error Error, if any
                         * @param [response] Schema
                         */
                        type GetSchemaCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.Schema) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getRawSchema}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type GetRawSchemaCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listSchemaVersions}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type ListSchemaVersionsCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listSchemaTypes}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type ListSchemaTypesCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listSubjects}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type ListSubjectsCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listSubjectsBySchemaId}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type ListSubjectsBySchemaIdCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|deleteSubject}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type DeleteSubjectCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|lookupVersion}.
                         * @param error Error, if any
                         * @param [response] SchemaVersion
                         */
                        type LookupVersionCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaVersion) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getVersion}.
                         * @param error Error, if any
                         * @param [response] SchemaVersion
                         */
                        type GetVersionCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaVersion) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getRawSchemaVersion}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type GetRawSchemaVersionCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listVersions}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type ListVersionsCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|createVersion}.
                         * @param error Error, if any
                         * @param [response] CreateVersionResponse
                         */
                        type CreateVersionCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|deleteVersion}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type DeleteVersionCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|listReferencedSchemas}.
                         * @param error Error, if any
                         * @param [response] HttpBody
                         */
                        type ListReferencedSchemasCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|checkCompatibility}.
                         * @param error Error, if any
                         * @param [response] CheckCompatibilityResponse
                         */
                        type CheckCompatibilityCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getSchemaConfig}.
                         * @param error Error, if any
                         * @param [response] SchemaConfig
                         */
                        type GetSchemaConfigCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaConfig) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|updateSchemaConfig}.
                         * @param error Error, if any
                         * @param [response] SchemaConfig
                         */
                        type UpdateSchemaConfigCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaConfig) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|deleteSchemaConfig}.
                         * @param error Error, if any
                         * @param [response] SchemaConfig
                         */
                        type DeleteSchemaConfigCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaConfig) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|getSchemaMode}.
                         * @param error Error, if any
                         * @param [response] SchemaMode
                         */
                        type GetSchemaModeCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaMode) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|updateSchemaMode}.
                         * @param error Error, if any
                         * @param [response] SchemaMode
                         */
                        type UpdateSchemaModeCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaMode) => void;

                        /**
                         * Callback as used by {@link google.cloud.managedkafka.schemaregistry.v1.ManagedSchemaRegistry|deleteSchemaMode}.
                         * @param error Error, if any
                         * @param [response] SchemaMode
                         */
                        type DeleteSchemaModeCallback = (error: (Error|null), response?: google.cloud.managedkafka.schemaregistry.v1.SchemaMode) => void;
                    }

                    /** Properties of a GetSchemaRegistryRequest. */
                    interface IGetSchemaRegistryRequest {

                        /** GetSchemaRegistryRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetSchemaRegistryRequest. */
                    class GetSchemaRegistryRequest implements IGetSchemaRegistryRequest {

                        /**
                         * Constructs a new GetSchemaRegistryRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRegistryRequest);

                        /** GetSchemaRegistryRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetSchemaRegistryRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSchemaRegistryRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRegistryRequest): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRegistryRequest;

                        /**
                         * Encodes the specified GetSchemaRegistryRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaRegistryRequest.verify|verify} messages.
                         * @param message GetSchemaRegistryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRegistryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSchemaRegistryRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaRegistryRequest.verify|verify} messages.
                         * @param message GetSchemaRegistryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRegistryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSchemaRegistryRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSchemaRegistryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRegistryRequest;

                        /**
                         * Decodes a GetSchemaRegistryRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSchemaRegistryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRegistryRequest;

                        /**
                         * Verifies a GetSchemaRegistryRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSchemaRegistryRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSchemaRegistryRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRegistryRequest;

                        /**
                         * Creates a plain object from a GetSchemaRegistryRequest message. Also converts values to other types if specified.
                         * @param message GetSchemaRegistryRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.GetSchemaRegistryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSchemaRegistryRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetSchemaRegistryRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListSchemaRegistriesRequest. */
                    interface IListSchemaRegistriesRequest {

                        /** ListSchemaRegistriesRequest parent */
                        parent?: (string|null);
                    }

                    /** Represents a ListSchemaRegistriesRequest. */
                    class ListSchemaRegistriesRequest implements IListSchemaRegistriesRequest {

                        /**
                         * Constructs a new ListSchemaRegistriesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesRequest);

                        /** ListSchemaRegistriesRequest parent. */
                        public parent: string;

                        /**
                         * Creates a new ListSchemaRegistriesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSchemaRegistriesRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesRequest): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesRequest;

                        /**
                         * Encodes the specified ListSchemaRegistriesRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesRequest.verify|verify} messages.
                         * @param message ListSchemaRegistriesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSchemaRegistriesRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesRequest.verify|verify} messages.
                         * @param message ListSchemaRegistriesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSchemaRegistriesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSchemaRegistriesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesRequest;

                        /**
                         * Decodes a ListSchemaRegistriesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSchemaRegistriesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesRequest;

                        /**
                         * Verifies a ListSchemaRegistriesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSchemaRegistriesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSchemaRegistriesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesRequest;

                        /**
                         * Creates a plain object from a ListSchemaRegistriesRequest message. Also converts values to other types if specified.
                         * @param message ListSchemaRegistriesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSchemaRegistriesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSchemaRegistriesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListSchemaRegistriesResponse. */
                    interface IListSchemaRegistriesResponse {

                        /** ListSchemaRegistriesResponse schemaRegistries */
                        schemaRegistries?: (google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry[]|null);
                    }

                    /** Represents a ListSchemaRegistriesResponse. */
                    class ListSchemaRegistriesResponse implements IListSchemaRegistriesResponse {

                        /**
                         * Constructs a new ListSchemaRegistriesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesResponse);

                        /** ListSchemaRegistriesResponse schemaRegistries. */
                        public schemaRegistries: google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry[];

                        /**
                         * Creates a new ListSchemaRegistriesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSchemaRegistriesResponse instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesResponse): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse;

                        /**
                         * Encodes the specified ListSchemaRegistriesResponse message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse.verify|verify} messages.
                         * @param message ListSchemaRegistriesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSchemaRegistriesResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse.verify|verify} messages.
                         * @param message ListSchemaRegistriesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaRegistriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSchemaRegistriesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSchemaRegistriesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse;

                        /**
                         * Decodes a ListSchemaRegistriesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSchemaRegistriesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse;

                        /**
                         * Verifies a ListSchemaRegistriesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSchemaRegistriesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSchemaRegistriesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse;

                        /**
                         * Creates a plain object from a ListSchemaRegistriesResponse message. Also converts values to other types if specified.
                         * @param message ListSchemaRegistriesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListSchemaRegistriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSchemaRegistriesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSchemaRegistriesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateSchemaRegistryRequest. */
                    interface ICreateSchemaRegistryRequest {

                        /** CreateSchemaRegistryRequest parent */
                        parent?: (string|null);

                        /** CreateSchemaRegistryRequest schemaRegistryId */
                        schemaRegistryId?: (string|null);

                        /** CreateSchemaRegistryRequest schemaRegistry */
                        schemaRegistry?: (google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry|null);
                    }

                    /** Represents a CreateSchemaRegistryRequest. */
                    class CreateSchemaRegistryRequest implements ICreateSchemaRegistryRequest {

                        /**
                         * Constructs a new CreateSchemaRegistryRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ICreateSchemaRegistryRequest);

                        /** CreateSchemaRegistryRequest parent. */
                        public parent: string;

                        /** CreateSchemaRegistryRequest schemaRegistryId. */
                        public schemaRegistryId: string;

                        /** CreateSchemaRegistryRequest schemaRegistry. */
                        public schemaRegistry?: (google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry|null);

                        /**
                         * Creates a new CreateSchemaRegistryRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateSchemaRegistryRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ICreateSchemaRegistryRequest): google.cloud.managedkafka.schemaregistry.v1.CreateSchemaRegistryRequest;

                        /**
                         * Encodes the specified CreateSchemaRegistryRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CreateSchemaRegistryRequest.verify|verify} messages.
                         * @param message CreateSchemaRegistryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ICreateSchemaRegistryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateSchemaRegistryRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CreateSchemaRegistryRequest.verify|verify} messages.
                         * @param message CreateSchemaRegistryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ICreateSchemaRegistryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateSchemaRegistryRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateSchemaRegistryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.CreateSchemaRegistryRequest;

                        /**
                         * Decodes a CreateSchemaRegistryRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateSchemaRegistryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.CreateSchemaRegistryRequest;

                        /**
                         * Verifies a CreateSchemaRegistryRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateSchemaRegistryRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateSchemaRegistryRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.CreateSchemaRegistryRequest;

                        /**
                         * Creates a plain object from a CreateSchemaRegistryRequest message. Also converts values to other types if specified.
                         * @param message CreateSchemaRegistryRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.CreateSchemaRegistryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateSchemaRegistryRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateSchemaRegistryRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteSchemaRegistryRequest. */
                    interface IDeleteSchemaRegistryRequest {

                        /** DeleteSchemaRegistryRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteSchemaRegistryRequest. */
                    class DeleteSchemaRegistryRequest implements IDeleteSchemaRegistryRequest {

                        /**
                         * Constructs a new DeleteSchemaRegistryRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaRegistryRequest);

                        /** DeleteSchemaRegistryRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteSchemaRegistryRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteSchemaRegistryRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaRegistryRequest): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaRegistryRequest;

                        /**
                         * Encodes the specified DeleteSchemaRegistryRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaRegistryRequest.verify|verify} messages.
                         * @param message DeleteSchemaRegistryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaRegistryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteSchemaRegistryRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaRegistryRequest.verify|verify} messages.
                         * @param message DeleteSchemaRegistryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaRegistryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteSchemaRegistryRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteSchemaRegistryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaRegistryRequest;

                        /**
                         * Decodes a DeleteSchemaRegistryRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteSchemaRegistryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaRegistryRequest;

                        /**
                         * Verifies a DeleteSchemaRegistryRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteSchemaRegistryRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteSchemaRegistryRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaRegistryRequest;

                        /**
                         * Creates a plain object from a DeleteSchemaRegistryRequest message. Also converts values to other types if specified.
                         * @param message DeleteSchemaRegistryRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaRegistryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteSchemaRegistryRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteSchemaRegistryRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetContextRequest. */
                    interface IGetContextRequest {

                        /** GetContextRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetContextRequest. */
                    class GetContextRequest implements IGetContextRequest {

                        /**
                         * Constructs a new GetContextRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetContextRequest);

                        /** GetContextRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetContextRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetContextRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetContextRequest): google.cloud.managedkafka.schemaregistry.v1.GetContextRequest;

                        /**
                         * Encodes the specified GetContextRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetContextRequest.verify|verify} messages.
                         * @param message GetContextRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IGetContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetContextRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetContextRequest.verify|verify} messages.
                         * @param message GetContextRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IGetContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetContextRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetContextRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.GetContextRequest;

                        /**
                         * Decodes a GetContextRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetContextRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.GetContextRequest;

                        /**
                         * Verifies a GetContextRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetContextRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetContextRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.GetContextRequest;

                        /**
                         * Creates a plain object from a GetContextRequest message. Also converts values to other types if specified.
                         * @param message GetContextRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.GetContextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetContextRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetContextRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListContextsRequest. */
                    interface IListContextsRequest {

                        /** ListContextsRequest parent */
                        parent?: (string|null);
                    }

                    /** Represents a ListContextsRequest. */
                    class ListContextsRequest implements IListContextsRequest {

                        /**
                         * Constructs a new ListContextsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListContextsRequest);

                        /** ListContextsRequest parent. */
                        public parent: string;

                        /**
                         * Creates a new ListContextsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListContextsRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListContextsRequest): google.cloud.managedkafka.schemaregistry.v1.ListContextsRequest;

                        /**
                         * Encodes the specified ListContextsRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListContextsRequest.verify|verify} messages.
                         * @param message ListContextsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListContextsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListContextsRequest.verify|verify} messages.
                         * @param message ListContextsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListContextsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListContextsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListContextsRequest;

                        /**
                         * Decodes a ListContextsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListContextsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListContextsRequest;

                        /**
                         * Verifies a ListContextsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListContextsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListContextsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListContextsRequest;

                        /**
                         * Creates a plain object from a ListContextsRequest message. Also converts values to other types if specified.
                         * @param message ListContextsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListContextsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListContextsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListContextsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetSchemaRequest. */
                    interface IGetSchemaRequest {

                        /** GetSchemaRequest name */
                        name?: (string|null);

                        /** GetSchemaRequest subject */
                        subject?: (string|null);
                    }

                    /** Represents a GetSchemaRequest. */
                    class GetSchemaRequest implements IGetSchemaRequest {

                        /**
                         * Constructs a new GetSchemaRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest);

                        /** GetSchemaRequest name. */
                        public name: string;

                        /** GetSchemaRequest subject. */
                        public subject?: (string|null);

                        /**
                         * Creates a new GetSchemaRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSchemaRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRequest;

                        /**
                         * Encodes the specified GetSchemaRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaRequest.verify|verify} messages.
                         * @param message GetSchemaRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSchemaRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaRequest.verify|verify} messages.
                         * @param message GetSchemaRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSchemaRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSchemaRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRequest;

                        /**
                         * Decodes a GetSchemaRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSchemaRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRequest;

                        /**
                         * Verifies a GetSchemaRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSchemaRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSchemaRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.GetSchemaRequest;

                        /**
                         * Creates a plain object from a GetSchemaRequest message. Also converts values to other types if specified.
                         * @param message GetSchemaRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.GetSchemaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSchemaRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetSchemaRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListSchemaTypesRequest. */
                    interface IListSchemaTypesRequest {

                        /** ListSchemaTypesRequest parent */
                        parent?: (string|null);
                    }

                    /** Represents a ListSchemaTypesRequest. */
                    class ListSchemaTypesRequest implements IListSchemaTypesRequest {

                        /**
                         * Constructs a new ListSchemaTypesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaTypesRequest);

                        /** ListSchemaTypesRequest parent. */
                        public parent: string;

                        /**
                         * Creates a new ListSchemaTypesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSchemaTypesRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaTypesRequest): google.cloud.managedkafka.schemaregistry.v1.ListSchemaTypesRequest;

                        /**
                         * Encodes the specified ListSchemaTypesRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaTypesRequest.verify|verify} messages.
                         * @param message ListSchemaTypesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSchemaTypesRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaTypesRequest.verify|verify} messages.
                         * @param message ListSchemaTypesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSchemaTypesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSchemaTypesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListSchemaTypesRequest;

                        /**
                         * Decodes a ListSchemaTypesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSchemaTypesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListSchemaTypesRequest;

                        /**
                         * Verifies a ListSchemaTypesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSchemaTypesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSchemaTypesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListSchemaTypesRequest;

                        /**
                         * Creates a plain object from a ListSchemaTypesRequest message. Also converts values to other types if specified.
                         * @param message ListSchemaTypesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListSchemaTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSchemaTypesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSchemaTypesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListSchemaVersionsRequest. */
                    interface IListSchemaVersionsRequest {

                        /** ListSchemaVersionsRequest parent */
                        parent?: (string|null);

                        /** ListSchemaVersionsRequest subject */
                        subject?: (string|null);

                        /** ListSchemaVersionsRequest deleted */
                        deleted?: (boolean|null);
                    }

                    /** Represents a ListSchemaVersionsRequest. */
                    class ListSchemaVersionsRequest implements IListSchemaVersionsRequest {

                        /**
                         * Constructs a new ListSchemaVersionsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaVersionsRequest);

                        /** ListSchemaVersionsRequest parent. */
                        public parent: string;

                        /** ListSchemaVersionsRequest subject. */
                        public subject?: (string|null);

                        /** ListSchemaVersionsRequest deleted. */
                        public deleted?: (boolean|null);

                        /**
                         * Creates a new ListSchemaVersionsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSchemaVersionsRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSchemaVersionsRequest): google.cloud.managedkafka.schemaregistry.v1.ListSchemaVersionsRequest;

                        /**
                         * Encodes the specified ListSchemaVersionsRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaVersionsRequest.verify|verify} messages.
                         * @param message ListSchemaVersionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSchemaVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSchemaVersionsRequest.verify|verify} messages.
                         * @param message ListSchemaVersionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListSchemaVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSchemaVersionsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSchemaVersionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListSchemaVersionsRequest;

                        /**
                         * Decodes a ListSchemaVersionsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSchemaVersionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListSchemaVersionsRequest;

                        /**
                         * Verifies a ListSchemaVersionsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSchemaVersionsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSchemaVersionsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListSchemaVersionsRequest;

                        /**
                         * Creates a plain object from a ListSchemaVersionsRequest message. Also converts values to other types if specified.
                         * @param message ListSchemaVersionsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListSchemaVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSchemaVersionsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSchemaVersionsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListSubjectsRequest. */
                    interface IListSubjectsRequest {

                        /** ListSubjectsRequest parent */
                        parent?: (string|null);

                        /** ListSubjectsRequest subjectPrefix */
                        subjectPrefix?: (string|null);

                        /** ListSubjectsRequest deleted */
                        deleted?: (boolean|null);
                    }

                    /** Represents a ListSubjectsRequest. */
                    class ListSubjectsRequest implements IListSubjectsRequest {

                        /**
                         * Constructs a new ListSubjectsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsRequest);

                        /** ListSubjectsRequest parent. */
                        public parent: string;

                        /** ListSubjectsRequest subjectPrefix. */
                        public subjectPrefix?: (string|null);

                        /** ListSubjectsRequest deleted. */
                        public deleted?: (boolean|null);

                        /**
                         * Creates a new ListSubjectsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSubjectsRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsRequest): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsRequest;

                        /**
                         * Encodes the specified ListSubjectsRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSubjectsRequest.verify|verify} messages.
                         * @param message ListSubjectsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSubjectsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSubjectsRequest.verify|verify} messages.
                         * @param message ListSubjectsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSubjectsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSubjectsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsRequest;

                        /**
                         * Decodes a ListSubjectsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSubjectsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsRequest;

                        /**
                         * Verifies a ListSubjectsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSubjectsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSubjectsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsRequest;

                        /**
                         * Creates a plain object from a ListSubjectsRequest message. Also converts values to other types if specified.
                         * @param message ListSubjectsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListSubjectsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSubjectsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSubjectsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListSubjectsBySchemaIdRequest. */
                    interface IListSubjectsBySchemaIdRequest {

                        /** ListSubjectsBySchemaIdRequest parent */
                        parent?: (string|null);

                        /** ListSubjectsBySchemaIdRequest subject */
                        subject?: (string|null);

                        /** ListSubjectsBySchemaIdRequest deleted */
                        deleted?: (boolean|null);
                    }

                    /** Represents a ListSubjectsBySchemaIdRequest. */
                    class ListSubjectsBySchemaIdRequest implements IListSubjectsBySchemaIdRequest {

                        /**
                         * Constructs a new ListSubjectsBySchemaIdRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsBySchemaIdRequest);

                        /** ListSubjectsBySchemaIdRequest parent. */
                        public parent: string;

                        /** ListSubjectsBySchemaIdRequest subject. */
                        public subject?: (string|null);

                        /** ListSubjectsBySchemaIdRequest deleted. */
                        public deleted?: (boolean|null);

                        /**
                         * Creates a new ListSubjectsBySchemaIdRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSubjectsBySchemaIdRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsBySchemaIdRequest): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsBySchemaIdRequest;

                        /**
                         * Encodes the specified ListSubjectsBySchemaIdRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSubjectsBySchemaIdRequest.verify|verify} messages.
                         * @param message ListSubjectsBySchemaIdRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsBySchemaIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSubjectsBySchemaIdRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListSubjectsBySchemaIdRequest.verify|verify} messages.
                         * @param message ListSubjectsBySchemaIdRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListSubjectsBySchemaIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSubjectsBySchemaIdRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSubjectsBySchemaIdRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsBySchemaIdRequest;

                        /**
                         * Decodes a ListSubjectsBySchemaIdRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSubjectsBySchemaIdRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsBySchemaIdRequest;

                        /**
                         * Verifies a ListSubjectsBySchemaIdRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSubjectsBySchemaIdRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSubjectsBySchemaIdRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListSubjectsBySchemaIdRequest;

                        /**
                         * Creates a plain object from a ListSubjectsBySchemaIdRequest message. Also converts values to other types if specified.
                         * @param message ListSubjectsBySchemaIdRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListSubjectsBySchemaIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSubjectsBySchemaIdRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSubjectsBySchemaIdRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListVersionsRequest. */
                    interface IListVersionsRequest {

                        /** ListVersionsRequest parent */
                        parent?: (string|null);

                        /** ListVersionsRequest deleted */
                        deleted?: (boolean|null);
                    }

                    /** Represents a ListVersionsRequest. */
                    class ListVersionsRequest implements IListVersionsRequest {

                        /**
                         * Constructs a new ListVersionsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListVersionsRequest);

                        /** ListVersionsRequest parent. */
                        public parent: string;

                        /** ListVersionsRequest deleted. */
                        public deleted?: (boolean|null);

                        /**
                         * Creates a new ListVersionsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListVersionsRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListVersionsRequest): google.cloud.managedkafka.schemaregistry.v1.ListVersionsRequest;

                        /**
                         * Encodes the specified ListVersionsRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListVersionsRequest.verify|verify} messages.
                         * @param message ListVersionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListVersionsRequest.verify|verify} messages.
                         * @param message ListVersionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListVersionsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListVersionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListVersionsRequest;

                        /**
                         * Decodes a ListVersionsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListVersionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListVersionsRequest;

                        /**
                         * Verifies a ListVersionsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListVersionsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListVersionsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListVersionsRequest;

                        /**
                         * Creates a plain object from a ListVersionsRequest message. Also converts values to other types if specified.
                         * @param message ListVersionsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListVersionsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListVersionsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteSubjectRequest. */
                    interface IDeleteSubjectRequest {

                        /** DeleteSubjectRequest name */
                        name?: (string|null);

                        /** DeleteSubjectRequest permanent */
                        permanent?: (boolean|null);
                    }

                    /** Represents a DeleteSubjectRequest. */
                    class DeleteSubjectRequest implements IDeleteSubjectRequest {

                        /**
                         * Constructs a new DeleteSubjectRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSubjectRequest);

                        /** DeleteSubjectRequest name. */
                        public name: string;

                        /** DeleteSubjectRequest permanent. */
                        public permanent?: (boolean|null);

                        /**
                         * Creates a new DeleteSubjectRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteSubjectRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSubjectRequest): google.cloud.managedkafka.schemaregistry.v1.DeleteSubjectRequest;

                        /**
                         * Encodes the specified DeleteSubjectRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSubjectRequest.verify|verify} messages.
                         * @param message DeleteSubjectRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSubjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteSubjectRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSubjectRequest.verify|verify} messages.
                         * @param message DeleteSubjectRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSubjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteSubjectRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteSubjectRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.DeleteSubjectRequest;

                        /**
                         * Decodes a DeleteSubjectRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteSubjectRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.DeleteSubjectRequest;

                        /**
                         * Verifies a DeleteSubjectRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteSubjectRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteSubjectRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.DeleteSubjectRequest;

                        /**
                         * Creates a plain object from a DeleteSubjectRequest message. Also converts values to other types if specified.
                         * @param message DeleteSubjectRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.DeleteSubjectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteSubjectRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteSubjectRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetVersionRequest. */
                    interface IGetVersionRequest {

                        /** GetVersionRequest name */
                        name?: (string|null);

                        /** GetVersionRequest deleted */
                        deleted?: (boolean|null);
                    }

                    /** Represents a GetVersionRequest. */
                    class GetVersionRequest implements IGetVersionRequest {

                        /**
                         * Constructs a new GetVersionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest);

                        /** GetVersionRequest name. */
                        public name: string;

                        /** GetVersionRequest deleted. */
                        public deleted?: (boolean|null);

                        /**
                         * Creates a new GetVersionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetVersionRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest): google.cloud.managedkafka.schemaregistry.v1.GetVersionRequest;

                        /**
                         * Encodes the specified GetVersionRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetVersionRequest.verify|verify} messages.
                         * @param message GetVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetVersionRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetVersionRequest.verify|verify} messages.
                         * @param message GetVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetVersionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.GetVersionRequest;

                        /**
                         * Decodes a GetVersionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.GetVersionRequest;

                        /**
                         * Verifies a GetVersionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetVersionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetVersionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.GetVersionRequest;

                        /**
                         * Creates a plain object from a GetVersionRequest message. Also converts values to other types if specified.
                         * @param message GetVersionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.GetVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetVersionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetVersionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateVersionRequest. */
                    interface ICreateVersionRequest {

                        /** CreateVersionRequest parent */
                        parent?: (string|null);

                        /** CreateVersionRequest version */
                        version?: (number|null);

                        /** CreateVersionRequest id */
                        id?: (number|null);

                        /** CreateVersionRequest schemaType */
                        schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** CreateVersionRequest schema */
                        schema?: (string|null);

                        /** CreateVersionRequest references */
                        references?: (google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[]|null);

                        /** CreateVersionRequest normalize */
                        normalize?: (boolean|null);
                    }

                    /** Represents a CreateVersionRequest. */
                    class CreateVersionRequest implements ICreateVersionRequest {

                        /**
                         * Constructs a new CreateVersionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionRequest);

                        /** CreateVersionRequest parent. */
                        public parent: string;

                        /** CreateVersionRequest version. */
                        public version?: (number|null);

                        /** CreateVersionRequest id. */
                        public id?: (number|null);

                        /** CreateVersionRequest schemaType. */
                        public schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** CreateVersionRequest schema. */
                        public schema: string;

                        /** CreateVersionRequest references. */
                        public references: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[];

                        /** CreateVersionRequest normalize. */
                        public normalize?: (boolean|null);

                        /**
                         * Creates a new CreateVersionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateVersionRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionRequest): google.cloud.managedkafka.schemaregistry.v1.CreateVersionRequest;

                        /**
                         * Encodes the specified CreateVersionRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CreateVersionRequest.verify|verify} messages.
                         * @param message CreateVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateVersionRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CreateVersionRequest.verify|verify} messages.
                         * @param message CreateVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateVersionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.CreateVersionRequest;

                        /**
                         * Decodes a CreateVersionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.CreateVersionRequest;

                        /**
                         * Verifies a CreateVersionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateVersionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateVersionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.CreateVersionRequest;

                        /**
                         * Creates a plain object from a CreateVersionRequest message. Also converts values to other types if specified.
                         * @param message CreateVersionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.CreateVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateVersionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateVersionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateVersionResponse. */
                    interface ICreateVersionResponse {

                        /** CreateVersionResponse id */
                        id?: (number|null);
                    }

                    /** Represents a CreateVersionResponse. */
                    class CreateVersionResponse implements ICreateVersionResponse {

                        /**
                         * Constructs a new CreateVersionResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionResponse);

                        /** CreateVersionResponse id. */
                        public id: number;

                        /**
                         * Creates a new CreateVersionResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateVersionResponse instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionResponse): google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse;

                        /**
                         * Encodes the specified CreateVersionResponse message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse.verify|verify} messages.
                         * @param message CreateVersionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateVersionResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse.verify|verify} messages.
                         * @param message CreateVersionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ICreateVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateVersionResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateVersionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse;

                        /**
                         * Decodes a CreateVersionResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateVersionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse;

                        /**
                         * Verifies a CreateVersionResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateVersionResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateVersionResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse;

                        /**
                         * Creates a plain object from a CreateVersionResponse message. Also converts values to other types if specified.
                         * @param message CreateVersionResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.CreateVersionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateVersionResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateVersionResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LookupVersionRequest. */
                    interface ILookupVersionRequest {

                        /** LookupVersionRequest parent */
                        parent?: (string|null);

                        /** LookupVersionRequest schemaType */
                        schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** LookupVersionRequest schema */
                        schema?: (string|null);

                        /** LookupVersionRequest references */
                        references?: (google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[]|null);

                        /** LookupVersionRequest normalize */
                        normalize?: (boolean|null);

                        /** LookupVersionRequest deleted */
                        deleted?: (boolean|null);
                    }

                    /** Represents a LookupVersionRequest. */
                    class LookupVersionRequest implements ILookupVersionRequest {

                        /**
                         * Constructs a new LookupVersionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ILookupVersionRequest);

                        /** LookupVersionRequest parent. */
                        public parent: string;

                        /** LookupVersionRequest schemaType. */
                        public schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** LookupVersionRequest schema. */
                        public schema: string;

                        /** LookupVersionRequest references. */
                        public references: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[];

                        /** LookupVersionRequest normalize. */
                        public normalize?: (boolean|null);

                        /** LookupVersionRequest deleted. */
                        public deleted?: (boolean|null);

                        /**
                         * Creates a new LookupVersionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LookupVersionRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ILookupVersionRequest): google.cloud.managedkafka.schemaregistry.v1.LookupVersionRequest;

                        /**
                         * Encodes the specified LookupVersionRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.LookupVersionRequest.verify|verify} messages.
                         * @param message LookupVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ILookupVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LookupVersionRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.LookupVersionRequest.verify|verify} messages.
                         * @param message LookupVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ILookupVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LookupVersionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LookupVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.LookupVersionRequest;

                        /**
                         * Decodes a LookupVersionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LookupVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.LookupVersionRequest;

                        /**
                         * Verifies a LookupVersionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LookupVersionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LookupVersionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.LookupVersionRequest;

                        /**
                         * Creates a plain object from a LookupVersionRequest message. Also converts values to other types if specified.
                         * @param message LookupVersionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.LookupVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LookupVersionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LookupVersionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteVersionRequest. */
                    interface IDeleteVersionRequest {

                        /** DeleteVersionRequest name */
                        name?: (string|null);

                        /** DeleteVersionRequest permanent */
                        permanent?: (boolean|null);
                    }

                    /** Represents a DeleteVersionRequest. */
                    class DeleteVersionRequest implements IDeleteVersionRequest {

                        /**
                         * Constructs a new DeleteVersionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteVersionRequest);

                        /** DeleteVersionRequest name. */
                        public name: string;

                        /** DeleteVersionRequest permanent. */
                        public permanent?: (boolean|null);

                        /**
                         * Creates a new DeleteVersionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteVersionRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteVersionRequest): google.cloud.managedkafka.schemaregistry.v1.DeleteVersionRequest;

                        /**
                         * Encodes the specified DeleteVersionRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteVersionRequest.verify|verify} messages.
                         * @param message DeleteVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteVersionRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteVersionRequest.verify|verify} messages.
                         * @param message DeleteVersionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteVersionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.DeleteVersionRequest;

                        /**
                         * Decodes a DeleteVersionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteVersionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.DeleteVersionRequest;

                        /**
                         * Verifies a DeleteVersionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteVersionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteVersionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.DeleteVersionRequest;

                        /**
                         * Creates a plain object from a DeleteVersionRequest message. Also converts values to other types if specified.
                         * @param message DeleteVersionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.DeleteVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteVersionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteVersionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReferencedSchemasRequest. */
                    interface IListReferencedSchemasRequest {

                        /** ListReferencedSchemasRequest parent */
                        parent?: (string|null);
                    }

                    /** Represents a ListReferencedSchemasRequest. */
                    class ListReferencedSchemasRequest implements IListReferencedSchemasRequest {

                        /**
                         * Constructs a new ListReferencedSchemasRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IListReferencedSchemasRequest);

                        /** ListReferencedSchemasRequest parent. */
                        public parent: string;

                        /**
                         * Creates a new ListReferencedSchemasRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReferencedSchemasRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IListReferencedSchemasRequest): google.cloud.managedkafka.schemaregistry.v1.ListReferencedSchemasRequest;

                        /**
                         * Encodes the specified ListReferencedSchemasRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListReferencedSchemasRequest.verify|verify} messages.
                         * @param message ListReferencedSchemasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IListReferencedSchemasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReferencedSchemasRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.ListReferencedSchemasRequest.verify|verify} messages.
                         * @param message ListReferencedSchemasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IListReferencedSchemasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReferencedSchemasRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReferencedSchemasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.ListReferencedSchemasRequest;

                        /**
                         * Decodes a ListReferencedSchemasRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReferencedSchemasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.ListReferencedSchemasRequest;

                        /**
                         * Verifies a ListReferencedSchemasRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReferencedSchemasRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReferencedSchemasRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.ListReferencedSchemasRequest;

                        /**
                         * Creates a plain object from a ListReferencedSchemasRequest message. Also converts values to other types if specified.
                         * @param message ListReferencedSchemasRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.ListReferencedSchemasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReferencedSchemasRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReferencedSchemasRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CheckCompatibilityRequest. */
                    interface ICheckCompatibilityRequest {

                        /** CheckCompatibilityRequest name */
                        name?: (string|null);

                        /** CheckCompatibilityRequest schemaType */
                        schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** CheckCompatibilityRequest schema */
                        schema?: (string|null);

                        /** CheckCompatibilityRequest references */
                        references?: (google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[]|null);

                        /** CheckCompatibilityRequest verbose */
                        verbose?: (boolean|null);
                    }

                    /** Represents a CheckCompatibilityRequest. */
                    class CheckCompatibilityRequest implements ICheckCompatibilityRequest {

                        /**
                         * Constructs a new CheckCompatibilityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityRequest);

                        /** CheckCompatibilityRequest name. */
                        public name: string;

                        /** CheckCompatibilityRequest schemaType. */
                        public schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** CheckCompatibilityRequest schema. */
                        public schema: string;

                        /** CheckCompatibilityRequest references. */
                        public references: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[];

                        /** CheckCompatibilityRequest verbose. */
                        public verbose?: (boolean|null);

                        /**
                         * Creates a new CheckCompatibilityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CheckCompatibilityRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityRequest): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityRequest;

                        /**
                         * Encodes the specified CheckCompatibilityRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityRequest.verify|verify} messages.
                         * @param message CheckCompatibilityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CheckCompatibilityRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityRequest.verify|verify} messages.
                         * @param message CheckCompatibilityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CheckCompatibilityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CheckCompatibilityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityRequest;

                        /**
                         * Decodes a CheckCompatibilityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CheckCompatibilityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityRequest;

                        /**
                         * Verifies a CheckCompatibilityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CheckCompatibilityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CheckCompatibilityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityRequest;

                        /**
                         * Creates a plain object from a CheckCompatibilityRequest message. Also converts values to other types if specified.
                         * @param message CheckCompatibilityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CheckCompatibilityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CheckCompatibilityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CheckCompatibilityResponse. */
                    interface ICheckCompatibilityResponse {

                        /** CheckCompatibilityResponse isCompatible */
                        isCompatible?: (boolean|null);

                        /** CheckCompatibilityResponse messages */
                        messages?: (string[]|null);
                    }

                    /** Represents a CheckCompatibilityResponse. */
                    class CheckCompatibilityResponse implements ICheckCompatibilityResponse {

                        /**
                         * Constructs a new CheckCompatibilityResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityResponse);

                        /** CheckCompatibilityResponse isCompatible. */
                        public isCompatible: boolean;

                        /** CheckCompatibilityResponse messages. */
                        public messages: string[];

                        /**
                         * Creates a new CheckCompatibilityResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CheckCompatibilityResponse instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityResponse): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse;

                        /**
                         * Encodes the specified CheckCompatibilityResponse message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse.verify|verify} messages.
                         * @param message CheckCompatibilityResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CheckCompatibilityResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse.verify|verify} messages.
                         * @param message CheckCompatibilityResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ICheckCompatibilityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CheckCompatibilityResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CheckCompatibilityResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse;

                        /**
                         * Decodes a CheckCompatibilityResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CheckCompatibilityResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse;

                        /**
                         * Verifies a CheckCompatibilityResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CheckCompatibilityResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CheckCompatibilityResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse;

                        /**
                         * Creates a plain object from a CheckCompatibilityResponse message. Also converts values to other types if specified.
                         * @param message CheckCompatibilityResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.CheckCompatibilityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CheckCompatibilityResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CheckCompatibilityResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetSchemaConfigRequest. */
                    interface IGetSchemaConfigRequest {

                        /** GetSchemaConfigRequest name */
                        name?: (string|null);

                        /** GetSchemaConfigRequest defaultToGlobal */
                        defaultToGlobal?: (boolean|null);
                    }

                    /** Represents a GetSchemaConfigRequest. */
                    class GetSchemaConfigRequest implements IGetSchemaConfigRequest {

                        /**
                         * Constructs a new GetSchemaConfigRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaConfigRequest);

                        /** GetSchemaConfigRequest name. */
                        public name: string;

                        /** GetSchemaConfigRequest defaultToGlobal. */
                        public defaultToGlobal?: (boolean|null);

                        /**
                         * Creates a new GetSchemaConfigRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSchemaConfigRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaConfigRequest): google.cloud.managedkafka.schemaregistry.v1.GetSchemaConfigRequest;

                        /**
                         * Encodes the specified GetSchemaConfigRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaConfigRequest.verify|verify} messages.
                         * @param message GetSchemaConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSchemaConfigRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaConfigRequest.verify|verify} messages.
                         * @param message GetSchemaConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSchemaConfigRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSchemaConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.GetSchemaConfigRequest;

                        /**
                         * Decodes a GetSchemaConfigRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSchemaConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.GetSchemaConfigRequest;

                        /**
                         * Verifies a GetSchemaConfigRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSchemaConfigRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSchemaConfigRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.GetSchemaConfigRequest;

                        /**
                         * Creates a plain object from a GetSchemaConfigRequest message. Also converts values to other types if specified.
                         * @param message GetSchemaConfigRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.GetSchemaConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSchemaConfigRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetSchemaConfigRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateSchemaConfigRequest. */
                    interface IUpdateSchemaConfigRequest {

                        /** UpdateSchemaConfigRequest name */
                        name?: (string|null);

                        /** UpdateSchemaConfigRequest compatibility */
                        compatibility?: (google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|null);

                        /** UpdateSchemaConfigRequest normalize */
                        normalize?: (boolean|null);
                    }

                    /** Represents an UpdateSchemaConfigRequest. */
                    class UpdateSchemaConfigRequest implements IUpdateSchemaConfigRequest {

                        /**
                         * Constructs a new UpdateSchemaConfigRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaConfigRequest);

                        /** UpdateSchemaConfigRequest name. */
                        public name: string;

                        /** UpdateSchemaConfigRequest compatibility. */
                        public compatibility?: (google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|null);

                        /** UpdateSchemaConfigRequest normalize. */
                        public normalize?: (boolean|null);

                        /**
                         * Creates a new UpdateSchemaConfigRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateSchemaConfigRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaConfigRequest): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaConfigRequest;

                        /**
                         * Encodes the specified UpdateSchemaConfigRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaConfigRequest.verify|verify} messages.
                         * @param message UpdateSchemaConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateSchemaConfigRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaConfigRequest.verify|verify} messages.
                         * @param message UpdateSchemaConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateSchemaConfigRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateSchemaConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaConfigRequest;

                        /**
                         * Decodes an UpdateSchemaConfigRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateSchemaConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaConfigRequest;

                        /**
                         * Verifies an UpdateSchemaConfigRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateSchemaConfigRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateSchemaConfigRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaConfigRequest;

                        /**
                         * Creates a plain object from an UpdateSchemaConfigRequest message. Also converts values to other types if specified.
                         * @param message UpdateSchemaConfigRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateSchemaConfigRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateSchemaConfigRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteSchemaConfigRequest. */
                    interface IDeleteSchemaConfigRequest {

                        /** DeleteSchemaConfigRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteSchemaConfigRequest. */
                    class DeleteSchemaConfigRequest implements IDeleteSchemaConfigRequest {

                        /**
                         * Constructs a new DeleteSchemaConfigRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaConfigRequest);

                        /** DeleteSchemaConfigRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteSchemaConfigRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteSchemaConfigRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaConfigRequest): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaConfigRequest;

                        /**
                         * Encodes the specified DeleteSchemaConfigRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaConfigRequest.verify|verify} messages.
                         * @param message DeleteSchemaConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteSchemaConfigRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaConfigRequest.verify|verify} messages.
                         * @param message DeleteSchemaConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteSchemaConfigRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteSchemaConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaConfigRequest;

                        /**
                         * Decodes a DeleteSchemaConfigRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteSchemaConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaConfigRequest;

                        /**
                         * Verifies a DeleteSchemaConfigRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteSchemaConfigRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteSchemaConfigRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaConfigRequest;

                        /**
                         * Creates a plain object from a DeleteSchemaConfigRequest message. Also converts values to other types if specified.
                         * @param message DeleteSchemaConfigRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteSchemaConfigRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteSchemaConfigRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetSchemaModeRequest. */
                    interface IGetSchemaModeRequest {

                        /** GetSchemaModeRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetSchemaModeRequest. */
                    class GetSchemaModeRequest implements IGetSchemaModeRequest {

                        /**
                         * Constructs a new GetSchemaModeRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaModeRequest);

                        /** GetSchemaModeRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetSchemaModeRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSchemaModeRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaModeRequest): google.cloud.managedkafka.schemaregistry.v1.GetSchemaModeRequest;

                        /**
                         * Encodes the specified GetSchemaModeRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaModeRequest.verify|verify} messages.
                         * @param message GetSchemaModeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSchemaModeRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.GetSchemaModeRequest.verify|verify} messages.
                         * @param message GetSchemaModeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IGetSchemaModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSchemaModeRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSchemaModeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.GetSchemaModeRequest;

                        /**
                         * Decodes a GetSchemaModeRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSchemaModeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.GetSchemaModeRequest;

                        /**
                         * Verifies a GetSchemaModeRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSchemaModeRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSchemaModeRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.GetSchemaModeRequest;

                        /**
                         * Creates a plain object from a GetSchemaModeRequest message. Also converts values to other types if specified.
                         * @param message GetSchemaModeRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.GetSchemaModeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSchemaModeRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetSchemaModeRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateSchemaModeRequest. */
                    interface IUpdateSchemaModeRequest {

                        /** UpdateSchemaModeRequest name */
                        name?: (string|null);

                        /** UpdateSchemaModeRequest mode */
                        mode?: (google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType|null);
                    }

                    /** Represents an UpdateSchemaModeRequest. */
                    class UpdateSchemaModeRequest implements IUpdateSchemaModeRequest {

                        /**
                         * Constructs a new UpdateSchemaModeRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaModeRequest);

                        /** UpdateSchemaModeRequest name. */
                        public name: string;

                        /** UpdateSchemaModeRequest mode. */
                        public mode: (google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType);

                        /**
                         * Creates a new UpdateSchemaModeRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateSchemaModeRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaModeRequest): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaModeRequest;

                        /**
                         * Encodes the specified UpdateSchemaModeRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaModeRequest.verify|verify} messages.
                         * @param message UpdateSchemaModeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateSchemaModeRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaModeRequest.verify|verify} messages.
                         * @param message UpdateSchemaModeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IUpdateSchemaModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateSchemaModeRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateSchemaModeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaModeRequest;

                        /**
                         * Decodes an UpdateSchemaModeRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateSchemaModeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaModeRequest;

                        /**
                         * Verifies an UpdateSchemaModeRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateSchemaModeRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateSchemaModeRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaModeRequest;

                        /**
                         * Creates a plain object from an UpdateSchemaModeRequest message. Also converts values to other types if specified.
                         * @param message UpdateSchemaModeRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.UpdateSchemaModeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateSchemaModeRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateSchemaModeRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteSchemaModeRequest. */
                    interface IDeleteSchemaModeRequest {

                        /** DeleteSchemaModeRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteSchemaModeRequest. */
                    class DeleteSchemaModeRequest implements IDeleteSchemaModeRequest {

                        /**
                         * Constructs a new DeleteSchemaModeRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaModeRequest);

                        /** DeleteSchemaModeRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteSchemaModeRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteSchemaModeRequest instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaModeRequest): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaModeRequest;

                        /**
                         * Encodes the specified DeleteSchemaModeRequest message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaModeRequest.verify|verify} messages.
                         * @param message DeleteSchemaModeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteSchemaModeRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaModeRequest.verify|verify} messages.
                         * @param message DeleteSchemaModeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IDeleteSchemaModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteSchemaModeRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteSchemaModeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaModeRequest;

                        /**
                         * Decodes a DeleteSchemaModeRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteSchemaModeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaModeRequest;

                        /**
                         * Verifies a DeleteSchemaModeRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteSchemaModeRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteSchemaModeRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaModeRequest;

                        /**
                         * Creates a plain object from a DeleteSchemaModeRequest message. Also converts values to other types if specified.
                         * @param message DeleteSchemaModeRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.DeleteSchemaModeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteSchemaModeRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteSchemaModeRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SchemaRegistry. */
                    interface ISchemaRegistry {

                        /** SchemaRegistry name */
                        name?: (string|null);

                        /** SchemaRegistry contexts */
                        contexts?: (string[]|null);
                    }

                    /** Represents a SchemaRegistry. */
                    class SchemaRegistry implements ISchemaRegistry {

                        /**
                         * Constructs a new SchemaRegistry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry);

                        /** SchemaRegistry name. */
                        public name: string;

                        /** SchemaRegistry contexts. */
                        public contexts: string[];

                        /**
                         * Creates a new SchemaRegistry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchemaRegistry instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry): google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry;

                        /**
                         * Encodes the specified SchemaRegistry message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry.verify|verify} messages.
                         * @param message SchemaRegistry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchemaRegistry message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry.verify|verify} messages.
                         * @param message SchemaRegistry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaRegistry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchemaRegistry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchemaRegistry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry;

                        /**
                         * Decodes a SchemaRegistry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchemaRegistry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry;

                        /**
                         * Verifies a SchemaRegistry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchemaRegistry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchemaRegistry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry;

                        /**
                         * Creates a plain object from a SchemaRegistry message. Also converts values to other types if specified.
                         * @param message SchemaRegistry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.SchemaRegistry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchemaRegistry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SchemaRegistry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Context. */
                    interface IContext {

                        /** Context name */
                        name?: (string|null);

                        /** Context subjects */
                        subjects?: (string[]|null);
                    }

                    /** Represents a Context. */
                    class Context implements IContext {

                        /**
                         * Constructs a new Context.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.IContext);

                        /** Context name. */
                        public name: string;

                        /** Context subjects. */
                        public subjects: string[];

                        /**
                         * Creates a new Context instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Context instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.IContext): google.cloud.managedkafka.schemaregistry.v1.Context;

                        /**
                         * Encodes the specified Context message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.Context.verify|verify} messages.
                         * @param message Context message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Context message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.Context.verify|verify} messages.
                         * @param message Context message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Context message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Context
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.Context;

                        /**
                         * Decodes a Context message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Context
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.Context;

                        /**
                         * Verifies a Context message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Context message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Context
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.Context;

                        /**
                         * Creates a plain object from a Context message. Also converts values to other types if specified.
                         * @param message Context
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.Context, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Context to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Context
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Schema. */
                    interface ISchema {

                        /** Schema schemaType */
                        schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** Schema schemaPayload */
                        schemaPayload?: (string|null);

                        /** Schema references */
                        references?: (google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[]|null);
                    }

                    /** Represents a Schema. */
                    class Schema implements ISchema {

                        /**
                         * Constructs a new Schema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchema);

                        /** Schema schemaType. */
                        public schemaType: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType);

                        /** Schema schemaPayload. */
                        public schemaPayload: string;

                        /** Schema references. */
                        public references: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[];

                        /**
                         * Creates a new Schema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Schema instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchema): google.cloud.managedkafka.schemaregistry.v1.Schema;

                        /**
                         * Encodes the specified Schema message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.Schema.verify|verify} messages.
                         * @param message Schema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Schema message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.Schema.verify|verify} messages.
                         * @param message Schema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Schema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Schema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.Schema;

                        /**
                         * Decodes a Schema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Schema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.Schema;

                        /**
                         * Verifies a Schema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Schema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Schema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.Schema;

                        /**
                         * Creates a plain object from a Schema message. Also converts values to other types if specified.
                         * @param message Schema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.Schema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Schema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Schema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Schema {

                        /** Properties of a SchemaReference. */
                        interface ISchemaReference {

                            /** SchemaReference name */
                            name?: (string|null);

                            /** SchemaReference subject */
                            subject?: (string|null);

                            /** SchemaReference version */
                            version?: (number|null);
                        }

                        /** Represents a SchemaReference. */
                        class SchemaReference implements ISchemaReference {

                            /**
                             * Constructs a new SchemaReference.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference);

                            /** SchemaReference name. */
                            public name: string;

                            /** SchemaReference subject. */
                            public subject: string;

                            /** SchemaReference version. */
                            public version: number;

                            /**
                             * Creates a new SchemaReference instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SchemaReference instance
                             */
                            public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference): google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaReference;

                            /**
                             * Encodes the specified SchemaReference message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaReference.verify|verify} messages.
                             * @param message SchemaReference message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SchemaReference message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaReference.verify|verify} messages.
                             * @param message SchemaReference message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SchemaReference message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SchemaReference
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaReference;

                            /**
                             * Decodes a SchemaReference message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SchemaReference
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaReference;

                            /**
                             * Verifies a SchemaReference message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SchemaReference message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SchemaReference
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaReference;

                            /**
                             * Creates a plain object from a SchemaReference message. Also converts values to other types if specified.
                             * @param message SchemaReference
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SchemaReference to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SchemaReference
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** SchemaType enum. */
                        enum SchemaType {
                            SCHEMA_TYPE_UNSPECIFIED = 0,
                            AVRO = 1,
                            JSON = 2,
                            PROTOBUF = 3
                        }
                    }

                    /** Properties of a SchemaSubject. */
                    interface ISchemaSubject {

                        /** SchemaSubject name */
                        name?: (string|null);

                        /** SchemaSubject versions */
                        versions?: (string[]|null);
                    }

                    /** Represents a SchemaSubject. */
                    class SchemaSubject implements ISchemaSubject {

                        /**
                         * Constructs a new SchemaSubject.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaSubject);

                        /** SchemaSubject name. */
                        public name: string;

                        /** SchemaSubject versions. */
                        public versions: string[];

                        /**
                         * Creates a new SchemaSubject instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchemaSubject instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaSubject): google.cloud.managedkafka.schemaregistry.v1.SchemaSubject;

                        /**
                         * Encodes the specified SchemaSubject message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaSubject.verify|verify} messages.
                         * @param message SchemaSubject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaSubject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchemaSubject message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaSubject.verify|verify} messages.
                         * @param message SchemaSubject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaSubject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchemaSubject message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchemaSubject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.SchemaSubject;

                        /**
                         * Decodes a SchemaSubject message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchemaSubject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.SchemaSubject;

                        /**
                         * Verifies a SchemaSubject message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchemaSubject message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchemaSubject
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.SchemaSubject;

                        /**
                         * Creates a plain object from a SchemaSubject message. Also converts values to other types if specified.
                         * @param message SchemaSubject
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.SchemaSubject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchemaSubject to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SchemaSubject
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SchemaVersion. */
                    interface ISchemaVersion {

                        /** SchemaVersion subject */
                        subject?: (string|null);

                        /** SchemaVersion versionId */
                        versionId?: (number|null);

                        /** SchemaVersion schemaId */
                        schemaId?: (number|null);

                        /** SchemaVersion schemaType */
                        schemaType?: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|null);

                        /** SchemaVersion schemaPayload */
                        schemaPayload?: (string|null);

                        /** SchemaVersion references */
                        references?: (google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[]|null);
                    }

                    /** Represents a SchemaVersion. */
                    class SchemaVersion implements ISchemaVersion {

                        /**
                         * Constructs a new SchemaVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaVersion);

                        /** SchemaVersion subject. */
                        public subject: string;

                        /** SchemaVersion versionId. */
                        public versionId: number;

                        /** SchemaVersion schemaId. */
                        public schemaId: number;

                        /** SchemaVersion schemaType. */
                        public schemaType: (google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.Schema.SchemaType);

                        /** SchemaVersion schemaPayload. */
                        public schemaPayload: string;

                        /** SchemaVersion references. */
                        public references: google.cloud.managedkafka.schemaregistry.v1.Schema.ISchemaReference[];

                        /**
                         * Creates a new SchemaVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchemaVersion instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaVersion): google.cloud.managedkafka.schemaregistry.v1.SchemaVersion;

                        /**
                         * Encodes the specified SchemaVersion message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaVersion.verify|verify} messages.
                         * @param message SchemaVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchemaVersion message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaVersion.verify|verify} messages.
                         * @param message SchemaVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchemaVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchemaVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.SchemaVersion;

                        /**
                         * Decodes a SchemaVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchemaVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.SchemaVersion;

                        /**
                         * Verifies a SchemaVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchemaVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchemaVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.SchemaVersion;

                        /**
                         * Creates a plain object from a SchemaVersion message. Also converts values to other types if specified.
                         * @param message SchemaVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.SchemaVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchemaVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SchemaVersion
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SchemaConfig. */
                    interface ISchemaConfig {

                        /** SchemaConfig compatibility */
                        compatibility?: (google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|null);

                        /** SchemaConfig normalize */
                        normalize?: (boolean|null);

                        /** SchemaConfig alias */
                        alias?: (string|null);
                    }

                    /** Represents a SchemaConfig. */
                    class SchemaConfig implements ISchemaConfig {

                        /**
                         * Constructs a new SchemaConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaConfig);

                        /** SchemaConfig compatibility. */
                        public compatibility?: (google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.CompatibilityType|null);

                        /** SchemaConfig normalize. */
                        public normalize?: (boolean|null);

                        /** SchemaConfig alias. */
                        public alias: string;

                        /**
                         * Creates a new SchemaConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchemaConfig instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaConfig): google.cloud.managedkafka.schemaregistry.v1.SchemaConfig;

                        /**
                         * Encodes the specified SchemaConfig message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.verify|verify} messages.
                         * @param message SchemaConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchemaConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaConfig.verify|verify} messages.
                         * @param message SchemaConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchemaConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchemaConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.SchemaConfig;

                        /**
                         * Decodes a SchemaConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchemaConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.SchemaConfig;

                        /**
                         * Verifies a SchemaConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchemaConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchemaConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.SchemaConfig;

                        /**
                         * Creates a plain object from a SchemaConfig message. Also converts values to other types if specified.
                         * @param message SchemaConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.SchemaConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchemaConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SchemaConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SchemaConfig {

                        /** CompatibilityType enum. */
                        enum CompatibilityType {
                            NONE = 0,
                            BACKWARD = 1,
                            BACKWARD_TRANSITIVE = 2,
                            FORWARD = 3,
                            FORWARD_TRANSITIVE = 4,
                            FULL = 5,
                            FULL_TRANSITIVE = 6
                        }
                    }

                    /** Properties of a SchemaMode. */
                    interface ISchemaMode {

                        /** SchemaMode mode */
                        mode?: (google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType|null);
                    }

                    /** Represents a SchemaMode. */
                    class SchemaMode implements ISchemaMode {

                        /**
                         * Constructs a new SchemaMode.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaMode);

                        /** SchemaMode mode. */
                        public mode: (google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType|keyof typeof google.cloud.managedkafka.schemaregistry.v1.SchemaMode.ModeType);

                        /**
                         * Creates a new SchemaMode instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchemaMode instance
                         */
                        public static create(properties?: google.cloud.managedkafka.schemaregistry.v1.ISchemaMode): google.cloud.managedkafka.schemaregistry.v1.SchemaMode;

                        /**
                         * Encodes the specified SchemaMode message. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaMode.verify|verify} messages.
                         * @param message SchemaMode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaMode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchemaMode message, length delimited. Does not implicitly {@link google.cloud.managedkafka.schemaregistry.v1.SchemaMode.verify|verify} messages.
                         * @param message SchemaMode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.schemaregistry.v1.ISchemaMode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchemaMode message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchemaMode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.schemaregistry.v1.SchemaMode;

                        /**
                         * Decodes a SchemaMode message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchemaMode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.schemaregistry.v1.SchemaMode;

                        /**
                         * Verifies a SchemaMode message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchemaMode message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchemaMode
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.schemaregistry.v1.SchemaMode;

                        /**
                         * Creates a plain object from a SchemaMode message. Also converts values to other types if specified.
                         * @param message SchemaMode
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.schemaregistry.v1.SchemaMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchemaMode to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SchemaMode
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SchemaMode {

                        /** ModeType enum. */
                        enum ModeType {
                            NONE = 0,
                            READONLY = 1,
                            READWRITE = 2,
                            IMPORT = 3
                        }
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a HttpBody. */
        interface IHttpBody {

            /** HttpBody contentType */
            contentType?: (string|null);

            /** HttpBody data */
            data?: (Uint8Array|Buffer|string|null);

            /** HttpBody extensions */
            extensions?: (google.protobuf.IAny[]|null);
        }

        /** Represents a HttpBody. */
        class HttpBody implements IHttpBody {

            /**
             * Constructs a new HttpBody.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpBody);

            /** HttpBody contentType. */
            public contentType: string;

            /** HttpBody data. */
            public data: (Uint8Array|Buffer|string);

            /** HttpBody extensions. */
            public extensions: google.protobuf.IAny[];

            /**
             * Creates a new HttpBody instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpBody instance
             */
            public static create(properties?: google.api.IHttpBody): google.api.HttpBody;

            /**
             * Encodes the specified HttpBody message. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpBody message, length delimited. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpBody message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpBody;

            /**
             * Decodes a HttpBody message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpBody;

            /**
             * Verifies a HttpBody message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpBody message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpBody
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpBody;

            /**
             * Creates a plain object from a HttpBody message. Also converts values to other types if specified.
             * @param message HttpBody
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpBody to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpBody
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|Buffer|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|Buffer|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|Buffer|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
