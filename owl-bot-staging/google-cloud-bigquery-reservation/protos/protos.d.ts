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

        /** Namespace bigquery. */
        namespace bigquery {

            /** Namespace reservation. */
            namespace reservation {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a ReservationService */
                    class ReservationService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ReservationService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ReservationService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReservationService;

                        /**
                         * Calls CreateReservation.
                         * @param request CreateReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Reservation
                         */
                        public createReservation(request: google.cloud.bigquery.reservation.v1.ICreateReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.CreateReservationCallback): void;

                        /**
                         * Calls CreateReservation.
                         * @param request CreateReservationRequest message or plain object
                         * @returns Promise
                         */
                        public createReservation(request: google.cloud.bigquery.reservation.v1.ICreateReservationRequest): Promise<google.cloud.bigquery.reservation.v1.Reservation>;

                        /**
                         * Calls ListReservations.
                         * @param request ListReservationsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListReservationsResponse
                         */
                        public listReservations(request: google.cloud.bigquery.reservation.v1.IListReservationsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.ListReservationsCallback): void;

                        /**
                         * Calls ListReservations.
                         * @param request ListReservationsRequest message or plain object
                         * @returns Promise
                         */
                        public listReservations(request: google.cloud.bigquery.reservation.v1.IListReservationsRequest): Promise<google.cloud.bigquery.reservation.v1.ListReservationsResponse>;

                        /**
                         * Calls GetReservation.
                         * @param request GetReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Reservation
                         */
                        public getReservation(request: google.cloud.bigquery.reservation.v1.IGetReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetReservationCallback): void;

                        /**
                         * Calls GetReservation.
                         * @param request GetReservationRequest message or plain object
                         * @returns Promise
                         */
                        public getReservation(request: google.cloud.bigquery.reservation.v1.IGetReservationRequest): Promise<google.cloud.bigquery.reservation.v1.Reservation>;

                        /**
                         * Calls DeleteReservation.
                         * @param request DeleteReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteReservation(request: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.DeleteReservationCallback): void;

                        /**
                         * Calls DeleteReservation.
                         * @param request DeleteReservationRequest message or plain object
                         * @returns Promise
                         */
                        public deleteReservation(request: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls UpdateReservation.
                         * @param request UpdateReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Reservation
                         */
                        public updateReservation(request: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.UpdateReservationCallback): void;

                        /**
                         * Calls UpdateReservation.
                         * @param request UpdateReservationRequest message or plain object
                         * @returns Promise
                         */
                        public updateReservation(request: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest): Promise<google.cloud.bigquery.reservation.v1.Reservation>;

                        /**
                         * Calls FailoverReservation.
                         * @param request FailoverReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Reservation
                         */
                        public failoverReservation(request: google.cloud.bigquery.reservation.v1.IFailoverReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.FailoverReservationCallback): void;

                        /**
                         * Calls FailoverReservation.
                         * @param request FailoverReservationRequest message or plain object
                         * @returns Promise
                         */
                        public failoverReservation(request: google.cloud.bigquery.reservation.v1.IFailoverReservationRequest): Promise<google.cloud.bigquery.reservation.v1.Reservation>;

                        /**
                         * Calls CreateCapacityCommitment.
                         * @param request CreateCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public createCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.CreateCapacityCommitmentCallback): void;

                        /**
                         * Calls CreateCapacityCommitment.
                         * @param request CreateCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public createCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls ListCapacityCommitments.
                         * @param request ListCapacityCommitmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListCapacityCommitmentsResponse
                         */
                        public listCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.ListCapacityCommitmentsCallback): void;

                        /**
                         * Calls ListCapacityCommitments.
                         * @param request ListCapacityCommitmentsRequest message or plain object
                         * @returns Promise
                         */
                        public listCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest): Promise<google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse>;

                        /**
                         * Calls GetCapacityCommitment.
                         * @param request GetCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public getCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetCapacityCommitmentCallback): void;

                        /**
                         * Calls GetCapacityCommitment.
                         * @param request GetCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public getCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls DeleteCapacityCommitment.
                         * @param request DeleteCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.DeleteCapacityCommitmentCallback): void;

                        /**
                         * Calls DeleteCapacityCommitment.
                         * @param request DeleteCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public deleteCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls UpdateCapacityCommitment.
                         * @param request UpdateCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public updateCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.UpdateCapacityCommitmentCallback): void;

                        /**
                         * Calls UpdateCapacityCommitment.
                         * @param request UpdateCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public updateCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls SplitCapacityCommitment.
                         * @param request SplitCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SplitCapacityCommitmentResponse
                         */
                        public splitCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.SplitCapacityCommitmentCallback): void;

                        /**
                         * Calls SplitCapacityCommitment.
                         * @param request SplitCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public splitCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse>;

                        /**
                         * Calls MergeCapacityCommitments.
                         * @param request MergeCapacityCommitmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public mergeCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.MergeCapacityCommitmentsCallback): void;

                        /**
                         * Calls MergeCapacityCommitments.
                         * @param request MergeCapacityCommitmentsRequest message or plain object
                         * @returns Promise
                         */
                        public mergeCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls CreateAssignment.
                         * @param request CreateAssignmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Assignment
                         */
                        public createAssignment(request: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.CreateAssignmentCallback): void;

                        /**
                         * Calls CreateAssignment.
                         * @param request CreateAssignmentRequest message or plain object
                         * @returns Promise
                         */
                        public createAssignment(request: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest): Promise<google.cloud.bigquery.reservation.v1.Assignment>;

                        /**
                         * Calls ListAssignments.
                         * @param request ListAssignmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListAssignmentsResponse
                         */
                        public listAssignments(request: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.ListAssignmentsCallback): void;

                        /**
                         * Calls ListAssignments.
                         * @param request ListAssignmentsRequest message or plain object
                         * @returns Promise
                         */
                        public listAssignments(request: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest): Promise<google.cloud.bigquery.reservation.v1.ListAssignmentsResponse>;

                        /**
                         * Calls DeleteAssignment.
                         * @param request DeleteAssignmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteAssignment(request: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.DeleteAssignmentCallback): void;

                        /**
                         * Calls DeleteAssignment.
                         * @param request DeleteAssignmentRequest message or plain object
                         * @returns Promise
                         */
                        public deleteAssignment(request: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls SearchAssignments.
                         * @param request SearchAssignmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SearchAssignmentsResponse
                         */
                        public searchAssignments(request: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.SearchAssignmentsCallback): void;

                        /**
                         * Calls SearchAssignments.
                         * @param request SearchAssignmentsRequest message or plain object
                         * @returns Promise
                         */
                        public searchAssignments(request: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest): Promise<google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse>;

                        /**
                         * Calls SearchAllAssignments.
                         * @param request SearchAllAssignmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SearchAllAssignmentsResponse
                         */
                        public searchAllAssignments(request: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.SearchAllAssignmentsCallback): void;

                        /**
                         * Calls SearchAllAssignments.
                         * @param request SearchAllAssignmentsRequest message or plain object
                         * @returns Promise
                         */
                        public searchAllAssignments(request: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsRequest): Promise<google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse>;

                        /**
                         * Calls MoveAssignment.
                         * @param request MoveAssignmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Assignment
                         */
                        public moveAssignment(request: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.MoveAssignmentCallback): void;

                        /**
                         * Calls MoveAssignment.
                         * @param request MoveAssignmentRequest message or plain object
                         * @returns Promise
                         */
                        public moveAssignment(request: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest): Promise<google.cloud.bigquery.reservation.v1.Assignment>;

                        /**
                         * Calls UpdateAssignment.
                         * @param request UpdateAssignmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Assignment
                         */
                        public updateAssignment(request: google.cloud.bigquery.reservation.v1.IUpdateAssignmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.UpdateAssignmentCallback): void;

                        /**
                         * Calls UpdateAssignment.
                         * @param request UpdateAssignmentRequest message or plain object
                         * @returns Promise
                         */
                        public updateAssignment(request: google.cloud.bigquery.reservation.v1.IUpdateAssignmentRequest): Promise<google.cloud.bigquery.reservation.v1.Assignment>;

                        /**
                         * Calls GetBiReservation.
                         * @param request GetBiReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BiReservation
                         */
                        public getBiReservation(request: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetBiReservationCallback): void;

                        /**
                         * Calls GetBiReservation.
                         * @param request GetBiReservationRequest message or plain object
                         * @returns Promise
                         */
                        public getBiReservation(request: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest): Promise<google.cloud.bigquery.reservation.v1.BiReservation>;

                        /**
                         * Calls UpdateBiReservation.
                         * @param request UpdateBiReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BiReservation
                         */
                        public updateBiReservation(request: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.UpdateBiReservationCallback): void;

                        /**
                         * Calls UpdateBiReservation.
                         * @param request UpdateBiReservationRequest message or plain object
                         * @returns Promise
                         */
                        public updateBiReservation(request: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest): Promise<google.cloud.bigquery.reservation.v1.BiReservation>;

                        /**
                         * Calls GetIamPolicy.
                         * @param request GetIamPolicyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Policy
                         */
                        public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetIamPolicyCallback): void;

                        /**
                         * Calls GetIamPolicy.
                         * @param request GetIamPolicyRequest message or plain object
                         * @returns Promise
                         */
                        public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                        /**
                         * Calls SetIamPolicy.
                         * @param request SetIamPolicyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Policy
                         */
                        public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.SetIamPolicyCallback): void;

                        /**
                         * Calls SetIamPolicy.
                         * @param request SetIamPolicyRequest message or plain object
                         * @returns Promise
                         */
                        public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                        /**
                         * Calls TestIamPermissions.
                         * @param request TestIamPermissionsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                         */
                        public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.TestIamPermissionsCallback): void;

                        /**
                         * Calls TestIamPermissions.
                         * @param request TestIamPermissionsRequest message or plain object
                         * @returns Promise
                         */
                        public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                        /**
                         * Calls CreateReservationGroup.
                         * @param request CreateReservationGroupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReservationGroup
                         */
                        public createReservationGroup(request: google.cloud.bigquery.reservation.v1.ICreateReservationGroupRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.CreateReservationGroupCallback): void;

                        /**
                         * Calls CreateReservationGroup.
                         * @param request CreateReservationGroupRequest message or plain object
                         * @returns Promise
                         */
                        public createReservationGroup(request: google.cloud.bigquery.reservation.v1.ICreateReservationGroupRequest): Promise<google.cloud.bigquery.reservation.v1.ReservationGroup>;

                        /**
                         * Calls GetReservationGroup.
                         * @param request GetReservationGroupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReservationGroup
                         */
                        public getReservationGroup(request: google.cloud.bigquery.reservation.v1.IGetReservationGroupRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetReservationGroupCallback): void;

                        /**
                         * Calls GetReservationGroup.
                         * @param request GetReservationGroupRequest message or plain object
                         * @returns Promise
                         */
                        public getReservationGroup(request: google.cloud.bigquery.reservation.v1.IGetReservationGroupRequest): Promise<google.cloud.bigquery.reservation.v1.ReservationGroup>;

                        /**
                         * Calls DeleteReservationGroup.
                         * @param request DeleteReservationGroupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteReservationGroup(request: google.cloud.bigquery.reservation.v1.IDeleteReservationGroupRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.DeleteReservationGroupCallback): void;

                        /**
                         * Calls DeleteReservationGroup.
                         * @param request DeleteReservationGroupRequest message or plain object
                         * @returns Promise
                         */
                        public deleteReservationGroup(request: google.cloud.bigquery.reservation.v1.IDeleteReservationGroupRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListReservationGroups.
                         * @param request ListReservationGroupsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListReservationGroupsResponse
                         */
                        public listReservationGroups(request: google.cloud.bigquery.reservation.v1.IListReservationGroupsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.ListReservationGroupsCallback): void;

                        /**
                         * Calls ListReservationGroups.
                         * @param request ListReservationGroupsRequest message or plain object
                         * @returns Promise
                         */
                        public listReservationGroups(request: google.cloud.bigquery.reservation.v1.IListReservationGroupsRequest): Promise<google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse>;
                    }

                    namespace ReservationService {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|createReservation}.
                         * @param error Error, if any
                         * @param [response] Reservation
                         */
                        type CreateReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Reservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|listReservations}.
                         * @param error Error, if any
                         * @param [response] ListReservationsResponse
                         */
                        type ListReservationsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ListReservationsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|getReservation}.
                         * @param error Error, if any
                         * @param [response] Reservation
                         */
                        type GetReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Reservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|deleteReservation}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteReservationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|updateReservation}.
                         * @param error Error, if any
                         * @param [response] Reservation
                         */
                        type UpdateReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Reservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|failoverReservation}.
                         * @param error Error, if any
                         * @param [response] Reservation
                         */
                        type FailoverReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Reservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|createCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type CreateCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|listCapacityCommitments}.
                         * @param error Error, if any
                         * @param [response] ListCapacityCommitmentsResponse
                         */
                        type ListCapacityCommitmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|getCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type GetCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|deleteCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteCapacityCommitmentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|updateCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type UpdateCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|splitCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] SplitCapacityCommitmentResponse
                         */
                        type SplitCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|mergeCapacityCommitments}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type MergeCapacityCommitmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|createAssignment}.
                         * @param error Error, if any
                         * @param [response] Assignment
                         */
                        type CreateAssignmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Assignment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|listAssignments}.
                         * @param error Error, if any
                         * @param [response] ListAssignmentsResponse
                         */
                        type ListAssignmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ListAssignmentsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|deleteAssignment}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteAssignmentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|searchAssignments}.
                         * @param error Error, if any
                         * @param [response] SearchAssignmentsResponse
                         */
                        type SearchAssignmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|searchAllAssignments}.
                         * @param error Error, if any
                         * @param [response] SearchAllAssignmentsResponse
                         */
                        type SearchAllAssignmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|moveAssignment}.
                         * @param error Error, if any
                         * @param [response] Assignment
                         */
                        type MoveAssignmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Assignment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|updateAssignment}.
                         * @param error Error, if any
                         * @param [response] Assignment
                         */
                        type UpdateAssignmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Assignment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|getBiReservation}.
                         * @param error Error, if any
                         * @param [response] BiReservation
                         */
                        type GetBiReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.BiReservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|updateBiReservation}.
                         * @param error Error, if any
                         * @param [response] BiReservation
                         */
                        type UpdateBiReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.BiReservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|getIamPolicy}.
                         * @param error Error, if any
                         * @param [response] Policy
                         */
                        type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|setIamPolicy}.
                         * @param error Error, if any
                         * @param [response] Policy
                         */
                        type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|testIamPermissions}.
                         * @param error Error, if any
                         * @param [response] TestIamPermissionsResponse
                         */
                        type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|createReservationGroup}.
                         * @param error Error, if any
                         * @param [response] ReservationGroup
                         */
                        type CreateReservationGroupCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ReservationGroup) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|getReservationGroup}.
                         * @param error Error, if any
                         * @param [response] ReservationGroup
                         */
                        type GetReservationGroupCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ReservationGroup) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|deleteReservationGroup}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteReservationGroupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService|listReservationGroups}.
                         * @param error Error, if any
                         * @param [response] ListReservationGroupsResponse
                         */
                        type ListReservationGroupsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse) => void;
                    }

                    /** Properties of a Reservation. */
                    interface IReservation {

                        /** Reservation name */
                        name?: (string|null);

                        /** Reservation slotCapacity */
                        slotCapacity?: (number|Long|string|null);

                        /** Reservation ignoreIdleSlots */
                        ignoreIdleSlots?: (boolean|null);

                        /** Reservation autoscale */
                        autoscale?: (google.cloud.bigquery.reservation.v1.Reservation.IAutoscale|null);

                        /** Reservation concurrency */
                        concurrency?: (number|Long|string|null);

                        /** Reservation creationTime */
                        creationTime?: (google.protobuf.ITimestamp|null);

                        /** Reservation updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Reservation multiRegionAuxiliary */
                        multiRegionAuxiliary?: (boolean|null);

                        /** Reservation edition */
                        edition?: (google.cloud.bigquery.reservation.v1.Edition|keyof typeof google.cloud.bigquery.reservation.v1.Edition|null);

                        /** Reservation primaryLocation */
                        primaryLocation?: (string|null);

                        /** Reservation secondaryLocation */
                        secondaryLocation?: (string|null);

                        /** Reservation originalPrimaryLocation */
                        originalPrimaryLocation?: (string|null);

                        /** Reservation maxSlots */
                        maxSlots?: (number|Long|string|null);

                        /** Reservation scalingMode */
                        scalingMode?: (google.cloud.bigquery.reservation.v1.Reservation.ScalingMode|keyof typeof google.cloud.bigquery.reservation.v1.Reservation.ScalingMode|null);

                        /** Reservation labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Reservation reservationGroup */
                        reservationGroup?: (string|null);

                        /** Reservation replicationStatus */
                        replicationStatus?: (google.cloud.bigquery.reservation.v1.Reservation.IReplicationStatus|null);

                        /** Reservation schedulingPolicy */
                        schedulingPolicy?: (google.cloud.bigquery.reservation.v1.ISchedulingPolicy|null);
                    }

                    /** Represents a Reservation. */
                    class Reservation implements IReservation {

                        /**
                         * Constructs a new Reservation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IReservation);

                        /** Reservation name. */
                        public name: string;

                        /** Reservation slotCapacity. */
                        public slotCapacity: (number|Long|string);

                        /** Reservation ignoreIdleSlots. */
                        public ignoreIdleSlots: boolean;

                        /** Reservation autoscale. */
                        public autoscale?: (google.cloud.bigquery.reservation.v1.Reservation.IAutoscale|null);

                        /** Reservation concurrency. */
                        public concurrency: (number|Long|string);

                        /** Reservation creationTime. */
                        public creationTime?: (google.protobuf.ITimestamp|null);

                        /** Reservation updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Reservation multiRegionAuxiliary. */
                        public multiRegionAuxiliary: boolean;

                        /** Reservation edition. */
                        public edition: (google.cloud.bigquery.reservation.v1.Edition|keyof typeof google.cloud.bigquery.reservation.v1.Edition);

                        /** Reservation primaryLocation. */
                        public primaryLocation: string;

                        /** Reservation secondaryLocation. */
                        public secondaryLocation: string;

                        /** Reservation originalPrimaryLocation. */
                        public originalPrimaryLocation: string;

                        /** Reservation maxSlots. */
                        public maxSlots?: (number|Long|string|null);

                        /** Reservation scalingMode. */
                        public scalingMode: (google.cloud.bigquery.reservation.v1.Reservation.ScalingMode|keyof typeof google.cloud.bigquery.reservation.v1.Reservation.ScalingMode);

                        /** Reservation labels. */
                        public labels: { [k: string]: string };

                        /** Reservation reservationGroup. */
                        public reservationGroup: string;

                        /** Reservation replicationStatus. */
                        public replicationStatus?: (google.cloud.bigquery.reservation.v1.Reservation.IReplicationStatus|null);

                        /** Reservation schedulingPolicy. */
                        public schedulingPolicy?: (google.cloud.bigquery.reservation.v1.ISchedulingPolicy|null);

                        /**
                         * Creates a new Reservation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Reservation instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IReservation): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Encodes the specified Reservation message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.verify|verify} messages.
                         * @param message Reservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Reservation message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.verify|verify} messages.
                         * @param message Reservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Reservation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Reservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Decodes a Reservation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Reservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Verifies a Reservation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Reservation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Reservation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Creates a plain object from a Reservation message. Also converts values to other types if specified.
                         * @param message Reservation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.Reservation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Reservation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Reservation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Reservation {

                        /** Properties of an Autoscale. */
                        interface IAutoscale {

                            /** Autoscale currentSlots */
                            currentSlots?: (number|Long|string|null);

                            /** Autoscale maxSlots */
                            maxSlots?: (number|Long|string|null);
                        }

                        /** Represents an Autoscale. */
                        class Autoscale implements IAutoscale {

                            /**
                             * Constructs a new Autoscale.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.reservation.v1.Reservation.IAutoscale);

                            /** Autoscale currentSlots. */
                            public currentSlots: (number|Long|string);

                            /** Autoscale maxSlots. */
                            public maxSlots: (number|Long|string);

                            /**
                             * Creates a new Autoscale instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Autoscale instance
                             */
                            public static create(properties?: google.cloud.bigquery.reservation.v1.Reservation.IAutoscale): google.cloud.bigquery.reservation.v1.Reservation.Autoscale;

                            /**
                             * Encodes the specified Autoscale message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.Autoscale.verify|verify} messages.
                             * @param message Autoscale message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.reservation.v1.Reservation.IAutoscale, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Autoscale message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.Autoscale.verify|verify} messages.
                             * @param message Autoscale message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.Reservation.IAutoscale, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Autoscale message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Autoscale
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.Reservation.Autoscale;

                            /**
                             * Decodes an Autoscale message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Autoscale
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.Reservation.Autoscale;

                            /**
                             * Verifies an Autoscale message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Autoscale message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Autoscale
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.Reservation.Autoscale;

                            /**
                             * Creates a plain object from an Autoscale message. Also converts values to other types if specified.
                             * @param message Autoscale
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.reservation.v1.Reservation.Autoscale, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Autoscale to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Autoscale
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** ScalingMode enum. */
                        enum ScalingMode {
                            SCALING_MODE_UNSPECIFIED = 0,
                            AUTOSCALE_ONLY = 1,
                            IDLE_SLOTS_ONLY = 2,
                            ALL_SLOTS = 3
                        }

                        /** Properties of a ReplicationStatus. */
                        interface IReplicationStatus {

                            /** ReplicationStatus error */
                            error?: (google.rpc.IStatus|null);

                            /** ReplicationStatus lastErrorTime */
                            lastErrorTime?: (google.protobuf.ITimestamp|null);

                            /** ReplicationStatus lastReplicationTime */
                            lastReplicationTime?: (google.protobuf.ITimestamp|null);

                            /** ReplicationStatus softFailoverStartTime */
                            softFailoverStartTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a ReplicationStatus. */
                        class ReplicationStatus implements IReplicationStatus {

                            /**
                             * Constructs a new ReplicationStatus.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.reservation.v1.Reservation.IReplicationStatus);

                            /** ReplicationStatus error. */
                            public error?: (google.rpc.IStatus|null);

                            /** ReplicationStatus lastErrorTime. */
                            public lastErrorTime?: (google.protobuf.ITimestamp|null);

                            /** ReplicationStatus lastReplicationTime. */
                            public lastReplicationTime?: (google.protobuf.ITimestamp|null);

                            /** ReplicationStatus softFailoverStartTime. */
                            public softFailoverStartTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new ReplicationStatus instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ReplicationStatus instance
                             */
                            public static create(properties?: google.cloud.bigquery.reservation.v1.Reservation.IReplicationStatus): google.cloud.bigquery.reservation.v1.Reservation.ReplicationStatus;

                            /**
                             * Encodes the specified ReplicationStatus message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.ReplicationStatus.verify|verify} messages.
                             * @param message ReplicationStatus message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.reservation.v1.Reservation.IReplicationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ReplicationStatus message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.ReplicationStatus.verify|verify} messages.
                             * @param message ReplicationStatus message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.Reservation.IReplicationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ReplicationStatus message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ReplicationStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.Reservation.ReplicationStatus;

                            /**
                             * Decodes a ReplicationStatus message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ReplicationStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.Reservation.ReplicationStatus;

                            /**
                             * Verifies a ReplicationStatus message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ReplicationStatus message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ReplicationStatus
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.Reservation.ReplicationStatus;

                            /**
                             * Creates a plain object from a ReplicationStatus message. Also converts values to other types if specified.
                             * @param message ReplicationStatus
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.reservation.v1.Reservation.ReplicationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ReplicationStatus to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ReplicationStatus
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a SchedulingPolicy. */
                    interface ISchedulingPolicy {

                        /** SchedulingPolicy concurrency */
                        concurrency?: (number|Long|string|null);

                        /** SchedulingPolicy maxSlots */
                        maxSlots?: (number|Long|string|null);
                    }

                    /** Represents a SchedulingPolicy. */
                    class SchedulingPolicy implements ISchedulingPolicy {

                        /**
                         * Constructs a new SchedulingPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISchedulingPolicy);

                        /** SchedulingPolicy concurrency. */
                        public concurrency?: (number|Long|string|null);

                        /** SchedulingPolicy maxSlots. */
                        public maxSlots?: (number|Long|string|null);

                        /**
                         * Creates a new SchedulingPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchedulingPolicy instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISchedulingPolicy): google.cloud.bigquery.reservation.v1.SchedulingPolicy;

                        /**
                         * Encodes the specified SchedulingPolicy message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SchedulingPolicy.verify|verify} messages.
                         * @param message SchedulingPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISchedulingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchedulingPolicy message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SchedulingPolicy.verify|verify} messages.
                         * @param message SchedulingPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISchedulingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchedulingPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchedulingPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SchedulingPolicy;

                        /**
                         * Decodes a SchedulingPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchedulingPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SchedulingPolicy;

                        /**
                         * Verifies a SchedulingPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchedulingPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchedulingPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SchedulingPolicy;

                        /**
                         * Creates a plain object from a SchedulingPolicy message. Also converts values to other types if specified.
                         * @param message SchedulingPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SchedulingPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchedulingPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SchedulingPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReservationGroup. */
                    interface IReservationGroup {

                        /** ReservationGroup name */
                        name?: (string|null);
                    }

                    /** Represents a ReservationGroup. */
                    class ReservationGroup implements IReservationGroup {

                        /**
                         * Constructs a new ReservationGroup.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IReservationGroup);

                        /** ReservationGroup name. */
                        public name: string;

                        /**
                         * Creates a new ReservationGroup instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReservationGroup instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IReservationGroup): google.cloud.bigquery.reservation.v1.ReservationGroup;

                        /**
                         * Encodes the specified ReservationGroup message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ReservationGroup.verify|verify} messages.
                         * @param message ReservationGroup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IReservationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReservationGroup message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ReservationGroup.verify|verify} messages.
                         * @param message ReservationGroup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IReservationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReservationGroup message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReservationGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ReservationGroup;

                        /**
                         * Decodes a ReservationGroup message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReservationGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ReservationGroup;

                        /**
                         * Verifies a ReservationGroup message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReservationGroup message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReservationGroup
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ReservationGroup;

                        /**
                         * Creates a plain object from a ReservationGroup message. Also converts values to other types if specified.
                         * @param message ReservationGroup
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ReservationGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReservationGroup to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReservationGroup
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CapacityCommitment. */
                    interface ICapacityCommitment {

                        /** CapacityCommitment name */
                        name?: (string|null);

                        /** CapacityCommitment slotCount */
                        slotCount?: (number|Long|string|null);

                        /** CapacityCommitment plan */
                        plan?: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|null);

                        /** CapacityCommitment state */
                        state?: (google.cloud.bigquery.reservation.v1.CapacityCommitment.State|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.State|null);

                        /** CapacityCommitment commitmentStartTime */
                        commitmentStartTime?: (google.protobuf.ITimestamp|null);

                        /** CapacityCommitment commitmentEndTime */
                        commitmentEndTime?: (google.protobuf.ITimestamp|null);

                        /** CapacityCommitment failureStatus */
                        failureStatus?: (google.rpc.IStatus|null);

                        /** CapacityCommitment renewalPlan */
                        renewalPlan?: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|null);

                        /** CapacityCommitment multiRegionAuxiliary */
                        multiRegionAuxiliary?: (boolean|null);

                        /** CapacityCommitment edition */
                        edition?: (google.cloud.bigquery.reservation.v1.Edition|keyof typeof google.cloud.bigquery.reservation.v1.Edition|null);

                        /** CapacityCommitment isFlatRate */
                        isFlatRate?: (boolean|null);
                    }

                    /** Represents a CapacityCommitment. */
                    class CapacityCommitment implements ICapacityCommitment {

                        /**
                         * Constructs a new CapacityCommitment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICapacityCommitment);

                        /** CapacityCommitment name. */
                        public name: string;

                        /** CapacityCommitment slotCount. */
                        public slotCount: (number|Long|string);

                        /** CapacityCommitment plan. */
                        public plan: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan);

                        /** CapacityCommitment state. */
                        public state: (google.cloud.bigquery.reservation.v1.CapacityCommitment.State|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.State);

                        /** CapacityCommitment commitmentStartTime. */
                        public commitmentStartTime?: (google.protobuf.ITimestamp|null);

                        /** CapacityCommitment commitmentEndTime. */
                        public commitmentEndTime?: (google.protobuf.ITimestamp|null);

                        /** CapacityCommitment failureStatus. */
                        public failureStatus?: (google.rpc.IStatus|null);

                        /** CapacityCommitment renewalPlan. */
                        public renewalPlan: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan);

                        /** CapacityCommitment multiRegionAuxiliary. */
                        public multiRegionAuxiliary: boolean;

                        /** CapacityCommitment edition. */
                        public edition: (google.cloud.bigquery.reservation.v1.Edition|keyof typeof google.cloud.bigquery.reservation.v1.Edition);

                        /** CapacityCommitment isFlatRate. */
                        public isFlatRate: boolean;

                        /**
                         * Creates a new CapacityCommitment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CapacityCommitment instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICapacityCommitment): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Encodes the specified CapacityCommitment message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CapacityCommitment.verify|verify} messages.
                         * @param message CapacityCommitment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICapacityCommitment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CapacityCommitment message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CapacityCommitment.verify|verify} messages.
                         * @param message CapacityCommitment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICapacityCommitment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CapacityCommitment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CapacityCommitment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Decodes a CapacityCommitment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CapacityCommitment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Verifies a CapacityCommitment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CapacityCommitment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CapacityCommitment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Creates a plain object from a CapacityCommitment message. Also converts values to other types if specified.
                         * @param message CapacityCommitment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CapacityCommitment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CapacityCommitment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CapacityCommitment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CapacityCommitment {

                        /** CommitmentPlan enum. */
                        enum CommitmentPlan {
                            COMMITMENT_PLAN_UNSPECIFIED = 0,
                            FLEX = 3,
                            FLEX_FLAT_RATE = 7,
                            TRIAL = 5,
                            MONTHLY = 2,
                            MONTHLY_FLAT_RATE = 8,
                            ANNUAL = 4,
                            ANNUAL_FLAT_RATE = 9,
                            THREE_YEAR = 10,
                            NONE = 6
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            ACTIVE = 2,
                            FAILED = 3
                        }
                    }

                    /** Properties of a CreateReservationRequest. */
                    interface ICreateReservationRequest {

                        /** CreateReservationRequest parent */
                        parent?: (string|null);

                        /** CreateReservationRequest reservationId */
                        reservationId?: (string|null);

                        /** CreateReservationRequest reservation */
                        reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);
                    }

                    /** Represents a CreateReservationRequest. */
                    class CreateReservationRequest implements ICreateReservationRequest {

                        /**
                         * Constructs a new CreateReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICreateReservationRequest);

                        /** CreateReservationRequest parent. */
                        public parent: string;

                        /** CreateReservationRequest reservationId. */
                        public reservationId: string;

                        /** CreateReservationRequest reservation. */
                        public reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);

                        /**
                         * Creates a new CreateReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICreateReservationRequest): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Encodes the specified CreateReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateReservationRequest.verify|verify} messages.
                         * @param message CreateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICreateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateReservationRequest.verify|verify} messages.
                         * @param message CreateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICreateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Decodes a CreateReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Verifies a CreateReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Creates a plain object from a CreateReservationRequest message. Also converts values to other types if specified.
                         * @param message CreateReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CreateReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateReservationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReservationsRequest. */
                    interface IListReservationsRequest {

                        /** ListReservationsRequest parent */
                        parent?: (string|null);

                        /** ListReservationsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListReservationsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListReservationsRequest. */
                    class ListReservationsRequest implements IListReservationsRequest {

                        /**
                         * Constructs a new ListReservationsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListReservationsRequest);

                        /** ListReservationsRequest parent. */
                        public parent: string;

                        /** ListReservationsRequest pageSize. */
                        public pageSize: number;

                        /** ListReservationsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListReservationsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReservationsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListReservationsRequest): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Encodes the specified ListReservationsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsRequest.verify|verify} messages.
                         * @param message ListReservationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListReservationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReservationsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsRequest.verify|verify} messages.
                         * @param message ListReservationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListReservationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReservationsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReservationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Decodes a ListReservationsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReservationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Verifies a ListReservationsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReservationsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReservationsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Creates a plain object from a ListReservationsRequest message. Also converts values to other types if specified.
                         * @param message ListReservationsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListReservationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReservationsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReservationsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReservationsResponse. */
                    interface IListReservationsResponse {

                        /** ListReservationsResponse reservations */
                        reservations?: (google.cloud.bigquery.reservation.v1.IReservation[]|null);

                        /** ListReservationsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListReservationsResponse. */
                    class ListReservationsResponse implements IListReservationsResponse {

                        /**
                         * Constructs a new ListReservationsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListReservationsResponse);

                        /** ListReservationsResponse reservations. */
                        public reservations: google.cloud.bigquery.reservation.v1.IReservation[];

                        /** ListReservationsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListReservationsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReservationsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListReservationsResponse): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Encodes the specified ListReservationsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsResponse.verify|verify} messages.
                         * @param message ListReservationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListReservationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReservationsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsResponse.verify|verify} messages.
                         * @param message ListReservationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListReservationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReservationsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReservationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Decodes a ListReservationsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReservationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Verifies a ListReservationsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReservationsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReservationsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Creates a plain object from a ListReservationsResponse message. Also converts values to other types if specified.
                         * @param message ListReservationsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListReservationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReservationsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReservationsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetReservationRequest. */
                    interface IGetReservationRequest {

                        /** GetReservationRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetReservationRequest. */
                    class GetReservationRequest implements IGetReservationRequest {

                        /**
                         * Constructs a new GetReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IGetReservationRequest);

                        /** GetReservationRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IGetReservationRequest): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Encodes the specified GetReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetReservationRequest.verify|verify} messages.
                         * @param message GetReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IGetReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetReservationRequest.verify|verify} messages.
                         * @param message GetReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IGetReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Decodes a GetReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Verifies a GetReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Creates a plain object from a GetReservationRequest message. Also converts values to other types if specified.
                         * @param message GetReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.GetReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetReservationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteReservationRequest. */
                    interface IDeleteReservationRequest {

                        /** DeleteReservationRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteReservationRequest. */
                    class DeleteReservationRequest implements IDeleteReservationRequest {

                        /**
                         * Constructs a new DeleteReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest);

                        /** DeleteReservationRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Encodes the specified DeleteReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteReservationRequest.verify|verify} messages.
                         * @param message DeleteReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteReservationRequest.verify|verify} messages.
                         * @param message DeleteReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Decodes a DeleteReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Verifies a DeleteReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Creates a plain object from a DeleteReservationRequest message. Also converts values to other types if specified.
                         * @param message DeleteReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.DeleteReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteReservationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateReservationRequest. */
                    interface IUpdateReservationRequest {

                        /** UpdateReservationRequest reservation */
                        reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);

                        /** UpdateReservationRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateReservationRequest. */
                    class UpdateReservationRequest implements IUpdateReservationRequest {

                        /**
                         * Constructs a new UpdateReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest);

                        /** UpdateReservationRequest reservation. */
                        public reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);

                        /** UpdateReservationRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Encodes the specified UpdateReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateReservationRequest.verify|verify} messages.
                         * @param message UpdateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateReservationRequest.verify|verify} messages.
                         * @param message UpdateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Decodes an UpdateReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Verifies an UpdateReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Creates a plain object from an UpdateReservationRequest message. Also converts values to other types if specified.
                         * @param message UpdateReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.UpdateReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateReservationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FailoverReservationRequest. */
                    interface IFailoverReservationRequest {

                        /** FailoverReservationRequest name */
                        name?: (string|null);

                        /** FailoverReservationRequest failoverMode */
                        failoverMode?: (google.cloud.bigquery.reservation.v1.FailoverMode|keyof typeof google.cloud.bigquery.reservation.v1.FailoverMode|null);
                    }

                    /** Represents a FailoverReservationRequest. */
                    class FailoverReservationRequest implements IFailoverReservationRequest {

                        /**
                         * Constructs a new FailoverReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IFailoverReservationRequest);

                        /** FailoverReservationRequest name. */
                        public name: string;

                        /** FailoverReservationRequest failoverMode. */
                        public failoverMode: (google.cloud.bigquery.reservation.v1.FailoverMode|keyof typeof google.cloud.bigquery.reservation.v1.FailoverMode);

                        /**
                         * Creates a new FailoverReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FailoverReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IFailoverReservationRequest): google.cloud.bigquery.reservation.v1.FailoverReservationRequest;

                        /**
                         * Encodes the specified FailoverReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.FailoverReservationRequest.verify|verify} messages.
                         * @param message FailoverReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IFailoverReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FailoverReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.FailoverReservationRequest.verify|verify} messages.
                         * @param message FailoverReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IFailoverReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FailoverReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FailoverReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.FailoverReservationRequest;

                        /**
                         * Decodes a FailoverReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FailoverReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.FailoverReservationRequest;

                        /**
                         * Verifies a FailoverReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FailoverReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FailoverReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.FailoverReservationRequest;

                        /**
                         * Creates a plain object from a FailoverReservationRequest message. Also converts values to other types if specified.
                         * @param message FailoverReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.FailoverReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FailoverReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FailoverReservationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateReservationGroupRequest. */
                    interface ICreateReservationGroupRequest {

                        /** CreateReservationGroupRequest parent */
                        parent?: (string|null);

                        /** CreateReservationGroupRequest reservationGroupId */
                        reservationGroupId?: (string|null);

                        /** CreateReservationGroupRequest reservationGroup */
                        reservationGroup?: (google.cloud.bigquery.reservation.v1.IReservationGroup|null);
                    }

                    /** Represents a CreateReservationGroupRequest. */
                    class CreateReservationGroupRequest implements ICreateReservationGroupRequest {

                        /**
                         * Constructs a new CreateReservationGroupRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICreateReservationGroupRequest);

                        /** CreateReservationGroupRequest parent. */
                        public parent: string;

                        /** CreateReservationGroupRequest reservationGroupId. */
                        public reservationGroupId: string;

                        /** CreateReservationGroupRequest reservationGroup. */
                        public reservationGroup?: (google.cloud.bigquery.reservation.v1.IReservationGroup|null);

                        /**
                         * Creates a new CreateReservationGroupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateReservationGroupRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICreateReservationGroupRequest): google.cloud.bigquery.reservation.v1.CreateReservationGroupRequest;

                        /**
                         * Encodes the specified CreateReservationGroupRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateReservationGroupRequest.verify|verify} messages.
                         * @param message CreateReservationGroupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICreateReservationGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateReservationGroupRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateReservationGroupRequest.verify|verify} messages.
                         * @param message CreateReservationGroupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICreateReservationGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateReservationGroupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateReservationGroupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CreateReservationGroupRequest;

                        /**
                         * Decodes a CreateReservationGroupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateReservationGroupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CreateReservationGroupRequest;

                        /**
                         * Verifies a CreateReservationGroupRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateReservationGroupRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateReservationGroupRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CreateReservationGroupRequest;

                        /**
                         * Creates a plain object from a CreateReservationGroupRequest message. Also converts values to other types if specified.
                         * @param message CreateReservationGroupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CreateReservationGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateReservationGroupRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateReservationGroupRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetReservationGroupRequest. */
                    interface IGetReservationGroupRequest {

                        /** GetReservationGroupRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetReservationGroupRequest. */
                    class GetReservationGroupRequest implements IGetReservationGroupRequest {

                        /**
                         * Constructs a new GetReservationGroupRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IGetReservationGroupRequest);

                        /** GetReservationGroupRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetReservationGroupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetReservationGroupRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IGetReservationGroupRequest): google.cloud.bigquery.reservation.v1.GetReservationGroupRequest;

                        /**
                         * Encodes the specified GetReservationGroupRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetReservationGroupRequest.verify|verify} messages.
                         * @param message GetReservationGroupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IGetReservationGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetReservationGroupRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetReservationGroupRequest.verify|verify} messages.
                         * @param message GetReservationGroupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IGetReservationGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetReservationGroupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetReservationGroupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.GetReservationGroupRequest;

                        /**
                         * Decodes a GetReservationGroupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetReservationGroupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.GetReservationGroupRequest;

                        /**
                         * Verifies a GetReservationGroupRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetReservationGroupRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetReservationGroupRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.GetReservationGroupRequest;

                        /**
                         * Creates a plain object from a GetReservationGroupRequest message. Also converts values to other types if specified.
                         * @param message GetReservationGroupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.GetReservationGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetReservationGroupRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetReservationGroupRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReservationGroupsRequest. */
                    interface IListReservationGroupsRequest {

                        /** ListReservationGroupsRequest parent */
                        parent?: (string|null);

                        /** ListReservationGroupsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListReservationGroupsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListReservationGroupsRequest. */
                    class ListReservationGroupsRequest implements IListReservationGroupsRequest {

                        /**
                         * Constructs a new ListReservationGroupsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListReservationGroupsRequest);

                        /** ListReservationGroupsRequest parent. */
                        public parent: string;

                        /** ListReservationGroupsRequest pageSize. */
                        public pageSize: number;

                        /** ListReservationGroupsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListReservationGroupsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReservationGroupsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListReservationGroupsRequest): google.cloud.bigquery.reservation.v1.ListReservationGroupsRequest;

                        /**
                         * Encodes the specified ListReservationGroupsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationGroupsRequest.verify|verify} messages.
                         * @param message ListReservationGroupsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListReservationGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReservationGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationGroupsRequest.verify|verify} messages.
                         * @param message ListReservationGroupsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListReservationGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReservationGroupsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReservationGroupsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListReservationGroupsRequest;

                        /**
                         * Decodes a ListReservationGroupsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReservationGroupsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListReservationGroupsRequest;

                        /**
                         * Verifies a ListReservationGroupsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReservationGroupsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReservationGroupsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListReservationGroupsRequest;

                        /**
                         * Creates a plain object from a ListReservationGroupsRequest message. Also converts values to other types if specified.
                         * @param message ListReservationGroupsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListReservationGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReservationGroupsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReservationGroupsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReservationGroupsResponse. */
                    interface IListReservationGroupsResponse {

                        /** ListReservationGroupsResponse reservationGroups */
                        reservationGroups?: (google.cloud.bigquery.reservation.v1.IReservationGroup[]|null);

                        /** ListReservationGroupsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListReservationGroupsResponse. */
                    class ListReservationGroupsResponse implements IListReservationGroupsResponse {

                        /**
                         * Constructs a new ListReservationGroupsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListReservationGroupsResponse);

                        /** ListReservationGroupsResponse reservationGroups. */
                        public reservationGroups: google.cloud.bigquery.reservation.v1.IReservationGroup[];

                        /** ListReservationGroupsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListReservationGroupsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReservationGroupsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListReservationGroupsResponse): google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse;

                        /**
                         * Encodes the specified ListReservationGroupsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse.verify|verify} messages.
                         * @param message ListReservationGroupsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListReservationGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReservationGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse.verify|verify} messages.
                         * @param message ListReservationGroupsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListReservationGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReservationGroupsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReservationGroupsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse;

                        /**
                         * Decodes a ListReservationGroupsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReservationGroupsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse;

                        /**
                         * Verifies a ListReservationGroupsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReservationGroupsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReservationGroupsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse;

                        /**
                         * Creates a plain object from a ListReservationGroupsResponse message. Also converts values to other types if specified.
                         * @param message ListReservationGroupsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListReservationGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReservationGroupsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReservationGroupsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteReservationGroupRequest. */
                    interface IDeleteReservationGroupRequest {

                        /** DeleteReservationGroupRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteReservationGroupRequest. */
                    class DeleteReservationGroupRequest implements IDeleteReservationGroupRequest {

                        /**
                         * Constructs a new DeleteReservationGroupRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IDeleteReservationGroupRequest);

                        /** DeleteReservationGroupRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteReservationGroupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteReservationGroupRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IDeleteReservationGroupRequest): google.cloud.bigquery.reservation.v1.DeleteReservationGroupRequest;

                        /**
                         * Encodes the specified DeleteReservationGroupRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteReservationGroupRequest.verify|verify} messages.
                         * @param message DeleteReservationGroupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IDeleteReservationGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteReservationGroupRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteReservationGroupRequest.verify|verify} messages.
                         * @param message DeleteReservationGroupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IDeleteReservationGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteReservationGroupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteReservationGroupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.DeleteReservationGroupRequest;

                        /**
                         * Decodes a DeleteReservationGroupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteReservationGroupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.DeleteReservationGroupRequest;

                        /**
                         * Verifies a DeleteReservationGroupRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteReservationGroupRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteReservationGroupRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.DeleteReservationGroupRequest;

                        /**
                         * Creates a plain object from a DeleteReservationGroupRequest message. Also converts values to other types if specified.
                         * @param message DeleteReservationGroupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.DeleteReservationGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteReservationGroupRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteReservationGroupRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateCapacityCommitmentRequest. */
                    interface ICreateCapacityCommitmentRequest {

                        /** CreateCapacityCommitmentRequest parent */
                        parent?: (string|null);

                        /** CreateCapacityCommitmentRequest capacityCommitment */
                        capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** CreateCapacityCommitmentRequest enforceSingleAdminProjectPerOrg */
                        enforceSingleAdminProjectPerOrg?: (boolean|null);

                        /** CreateCapacityCommitmentRequest capacityCommitmentId */
                        capacityCommitmentId?: (string|null);
                    }

                    /** Represents a CreateCapacityCommitmentRequest. */
                    class CreateCapacityCommitmentRequest implements ICreateCapacityCommitmentRequest {

                        /**
                         * Constructs a new CreateCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest);

                        /** CreateCapacityCommitmentRequest parent. */
                        public parent: string;

                        /** CreateCapacityCommitmentRequest capacityCommitment. */
                        public capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** CreateCapacityCommitmentRequest enforceSingleAdminProjectPerOrg. */
                        public enforceSingleAdminProjectPerOrg: boolean;

                        /** CreateCapacityCommitmentRequest capacityCommitmentId. */
                        public capacityCommitmentId: string;

                        /**
                         * Creates a new CreateCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Encodes the specified CreateCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message CreateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message CreateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Decodes a CreateCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Verifies a CreateCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a CreateCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message CreateCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateCapacityCommitmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCapacityCommitmentsRequest. */
                    interface IListCapacityCommitmentsRequest {

                        /** ListCapacityCommitmentsRequest parent */
                        parent?: (string|null);

                        /** ListCapacityCommitmentsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListCapacityCommitmentsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListCapacityCommitmentsRequest. */
                    class ListCapacityCommitmentsRequest implements IListCapacityCommitmentsRequest {

                        /**
                         * Constructs a new ListCapacityCommitmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest);

                        /** ListCapacityCommitmentsRequest parent. */
                        public parent: string;

                        /** ListCapacityCommitmentsRequest pageSize. */
                        public pageSize: number;

                        /** ListCapacityCommitmentsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListCapacityCommitmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCapacityCommitmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Encodes the specified ListCapacityCommitmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message ListCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCapacityCommitmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message ListCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCapacityCommitmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Decodes a ListCapacityCommitmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Verifies a ListCapacityCommitmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCapacityCommitmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCapacityCommitmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Creates a plain object from a ListCapacityCommitmentsRequest message. Also converts values to other types if specified.
                         * @param message ListCapacityCommitmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCapacityCommitmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCapacityCommitmentsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCapacityCommitmentsResponse. */
                    interface IListCapacityCommitmentsResponse {

                        /** ListCapacityCommitmentsResponse capacityCommitments */
                        capacityCommitments?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment[]|null);

                        /** ListCapacityCommitmentsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListCapacityCommitmentsResponse. */
                    class ListCapacityCommitmentsResponse implements IListCapacityCommitmentsResponse {

                        /**
                         * Constructs a new ListCapacityCommitmentsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse);

                        /** ListCapacityCommitmentsResponse capacityCommitments. */
                        public capacityCommitments: google.cloud.bigquery.reservation.v1.ICapacityCommitment[];

                        /** ListCapacityCommitmentsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListCapacityCommitmentsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCapacityCommitmentsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Encodes the specified ListCapacityCommitmentsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse.verify|verify} messages.
                         * @param message ListCapacityCommitmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCapacityCommitmentsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse.verify|verify} messages.
                         * @param message ListCapacityCommitmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCapacityCommitmentsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCapacityCommitmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Decodes a ListCapacityCommitmentsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCapacityCommitmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Verifies a ListCapacityCommitmentsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCapacityCommitmentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCapacityCommitmentsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Creates a plain object from a ListCapacityCommitmentsResponse message. Also converts values to other types if specified.
                         * @param message ListCapacityCommitmentsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCapacityCommitmentsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCapacityCommitmentsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetCapacityCommitmentRequest. */
                    interface IGetCapacityCommitmentRequest {

                        /** GetCapacityCommitmentRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetCapacityCommitmentRequest. */
                    class GetCapacityCommitmentRequest implements IGetCapacityCommitmentRequest {

                        /**
                         * Constructs a new GetCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest);

                        /** GetCapacityCommitmentRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Encodes the specified GetCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest.verify|verify} messages.
                         * @param message GetCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest.verify|verify} messages.
                         * @param message GetCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Decodes a GetCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Verifies a GetCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a GetCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message GetCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetCapacityCommitmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteCapacityCommitmentRequest. */
                    interface IDeleteCapacityCommitmentRequest {

                        /** DeleteCapacityCommitmentRequest name */
                        name?: (string|null);

                        /** DeleteCapacityCommitmentRequest force */
                        force?: (boolean|null);
                    }

                    /** Represents a DeleteCapacityCommitmentRequest. */
                    class DeleteCapacityCommitmentRequest implements IDeleteCapacityCommitmentRequest {

                        /**
                         * Constructs a new DeleteCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest);

                        /** DeleteCapacityCommitmentRequest name. */
                        public name: string;

                        /** DeleteCapacityCommitmentRequest force. */
                        public force: boolean;

                        /**
                         * Creates a new DeleteCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Encodes the specified DeleteCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest.verify|verify} messages.
                         * @param message DeleteCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest.verify|verify} messages.
                         * @param message DeleteCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Decodes a DeleteCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Verifies a DeleteCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a DeleteCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message DeleteCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteCapacityCommitmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateCapacityCommitmentRequest. */
                    interface IUpdateCapacityCommitmentRequest {

                        /** UpdateCapacityCommitmentRequest capacityCommitment */
                        capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** UpdateCapacityCommitmentRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateCapacityCommitmentRequest. */
                    class UpdateCapacityCommitmentRequest implements IUpdateCapacityCommitmentRequest {

                        /**
                         * Constructs a new UpdateCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest);

                        /** UpdateCapacityCommitmentRequest capacityCommitment. */
                        public capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** UpdateCapacityCommitmentRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Encodes the specified UpdateCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message UpdateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message UpdateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Decodes an UpdateCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Verifies an UpdateCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from an UpdateCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message UpdateCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateCapacityCommitmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SplitCapacityCommitmentRequest. */
                    interface ISplitCapacityCommitmentRequest {

                        /** SplitCapacityCommitmentRequest name */
                        name?: (string|null);

                        /** SplitCapacityCommitmentRequest slotCount */
                        slotCount?: (number|Long|string|null);
                    }

                    /** Represents a SplitCapacityCommitmentRequest. */
                    class SplitCapacityCommitmentRequest implements ISplitCapacityCommitmentRequest {

                        /**
                         * Constructs a new SplitCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest);

                        /** SplitCapacityCommitmentRequest name. */
                        public name: string;

                        /** SplitCapacityCommitmentRequest slotCount. */
                        public slotCount: (number|Long|string);

                        /**
                         * Creates a new SplitCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Encodes the specified SplitCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest.verify|verify} messages.
                         * @param message SplitCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest.verify|verify} messages.
                         * @param message SplitCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Decodes a SplitCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Verifies a SplitCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a SplitCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message SplitCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SplitCapacityCommitmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SplitCapacityCommitmentResponse. */
                    interface ISplitCapacityCommitmentResponse {

                        /** SplitCapacityCommitmentResponse first */
                        first?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** SplitCapacityCommitmentResponse second */
                        second?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);
                    }

                    /** Represents a SplitCapacityCommitmentResponse. */
                    class SplitCapacityCommitmentResponse implements ISplitCapacityCommitmentResponse {

                        /**
                         * Constructs a new SplitCapacityCommitmentResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse);

                        /** SplitCapacityCommitmentResponse first. */
                        public first?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** SplitCapacityCommitmentResponse second. */
                        public second?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /**
                         * Creates a new SplitCapacityCommitmentResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitCapacityCommitmentResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Encodes the specified SplitCapacityCommitmentResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse.verify|verify} messages.
                         * @param message SplitCapacityCommitmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitCapacityCommitmentResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse.verify|verify} messages.
                         * @param message SplitCapacityCommitmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitCapacityCommitmentResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitCapacityCommitmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Decodes a SplitCapacityCommitmentResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitCapacityCommitmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Verifies a SplitCapacityCommitmentResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitCapacityCommitmentResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitCapacityCommitmentResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Creates a plain object from a SplitCapacityCommitmentResponse message. Also converts values to other types if specified.
                         * @param message SplitCapacityCommitmentResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitCapacityCommitmentResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SplitCapacityCommitmentResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MergeCapacityCommitmentsRequest. */
                    interface IMergeCapacityCommitmentsRequest {

                        /** MergeCapacityCommitmentsRequest parent */
                        parent?: (string|null);

                        /** MergeCapacityCommitmentsRequest capacityCommitmentIds */
                        capacityCommitmentIds?: (string[]|null);

                        /** MergeCapacityCommitmentsRequest capacityCommitmentId */
                        capacityCommitmentId?: (string|null);
                    }

                    /** Represents a MergeCapacityCommitmentsRequest. */
                    class MergeCapacityCommitmentsRequest implements IMergeCapacityCommitmentsRequest {

                        /**
                         * Constructs a new MergeCapacityCommitmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest);

                        /** MergeCapacityCommitmentsRequest parent. */
                        public parent: string;

                        /** MergeCapacityCommitmentsRequest capacityCommitmentIds. */
                        public capacityCommitmentIds: string[];

                        /** MergeCapacityCommitmentsRequest capacityCommitmentId. */
                        public capacityCommitmentId: string;

                        /**
                         * Creates a new MergeCapacityCommitmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MergeCapacityCommitmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Encodes the specified MergeCapacityCommitmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message MergeCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MergeCapacityCommitmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message MergeCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MergeCapacityCommitmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MergeCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Decodes a MergeCapacityCommitmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MergeCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Verifies a MergeCapacityCommitmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MergeCapacityCommitmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MergeCapacityCommitmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Creates a plain object from a MergeCapacityCommitmentsRequest message. Also converts values to other types if specified.
                         * @param message MergeCapacityCommitmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MergeCapacityCommitmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MergeCapacityCommitmentsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Assignment. */
                    interface IAssignment {

                        /** Assignment name */
                        name?: (string|null);

                        /** Assignment assignee */
                        assignee?: (string|null);

                        /** Assignment jobType */
                        jobType?: (google.cloud.bigquery.reservation.v1.Assignment.JobType|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.JobType|null);

                        /** Assignment state */
                        state?: (google.cloud.bigquery.reservation.v1.Assignment.State|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.State|null);

                        /** Assignment enableGeminiInBigquery */
                        enableGeminiInBigquery?: (boolean|null);

                        /** Assignment schedulingPolicy */
                        schedulingPolicy?: (google.cloud.bigquery.reservation.v1.ISchedulingPolicy|null);
                    }

                    /** Represents an Assignment. */
                    class Assignment implements IAssignment {

                        /**
                         * Constructs a new Assignment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IAssignment);

                        /** Assignment name. */
                        public name: string;

                        /** Assignment assignee. */
                        public assignee: string;

                        /** Assignment jobType. */
                        public jobType: (google.cloud.bigquery.reservation.v1.Assignment.JobType|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.JobType);

                        /** Assignment state. */
                        public state: (google.cloud.bigquery.reservation.v1.Assignment.State|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.State);

                        /** Assignment enableGeminiInBigquery. */
                        public enableGeminiInBigquery: boolean;

                        /** Assignment schedulingPolicy. */
                        public schedulingPolicy?: (google.cloud.bigquery.reservation.v1.ISchedulingPolicy|null);

                        /**
                         * Creates a new Assignment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Assignment instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IAssignment): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Encodes the specified Assignment message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Assignment.verify|verify} messages.
                         * @param message Assignment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Assignment message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Assignment.verify|verify} messages.
                         * @param message Assignment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Assignment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Assignment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Decodes an Assignment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Assignment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Verifies an Assignment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Assignment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Assignment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Creates a plain object from an Assignment message. Also converts values to other types if specified.
                         * @param message Assignment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.Assignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Assignment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Assignment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Assignment {

                        /** JobType enum. */
                        enum JobType {
                            JOB_TYPE_UNSPECIFIED = 0,
                            PIPELINE = 1,
                            QUERY = 2,
                            ML_EXTERNAL = 3,
                            BACKGROUND = 4,
                            CONTINUOUS = 6,
                            BACKGROUND_CHANGE_DATA_CAPTURE = 7,
                            BACKGROUND_COLUMN_METADATA_INDEX = 8,
                            BACKGROUND_SEARCH_INDEX_REFRESH = 9
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            ACTIVE = 2
                        }
                    }

                    /** Properties of a CreateAssignmentRequest. */
                    interface ICreateAssignmentRequest {

                        /** CreateAssignmentRequest parent */
                        parent?: (string|null);

                        /** CreateAssignmentRequest assignment */
                        assignment?: (google.cloud.bigquery.reservation.v1.IAssignment|null);

                        /** CreateAssignmentRequest assignmentId */
                        assignmentId?: (string|null);
                    }

                    /** Represents a CreateAssignmentRequest. */
                    class CreateAssignmentRequest implements ICreateAssignmentRequest {

                        /**
                         * Constructs a new CreateAssignmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest);

                        /** CreateAssignmentRequest parent. */
                        public parent: string;

                        /** CreateAssignmentRequest assignment. */
                        public assignment?: (google.cloud.bigquery.reservation.v1.IAssignment|null);

                        /** CreateAssignmentRequest assignmentId. */
                        public assignmentId: string;

                        /**
                         * Creates a new CreateAssignmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateAssignmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Encodes the specified CreateAssignmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateAssignmentRequest.verify|verify} messages.
                         * @param message CreateAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateAssignmentRequest.verify|verify} messages.
                         * @param message CreateAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateAssignmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Decodes a CreateAssignmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Verifies a CreateAssignmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateAssignmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Creates a plain object from a CreateAssignmentRequest message. Also converts values to other types if specified.
                         * @param message CreateAssignmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CreateAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateAssignmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateAssignmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListAssignmentsRequest. */
                    interface IListAssignmentsRequest {

                        /** ListAssignmentsRequest parent */
                        parent?: (string|null);

                        /** ListAssignmentsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListAssignmentsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListAssignmentsRequest. */
                    class ListAssignmentsRequest implements IListAssignmentsRequest {

                        /**
                         * Constructs a new ListAssignmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest);

                        /** ListAssignmentsRequest parent. */
                        public parent: string;

                        /** ListAssignmentsRequest pageSize. */
                        public pageSize: number;

                        /** ListAssignmentsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListAssignmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssignmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Encodes the specified ListAssignmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsRequest.verify|verify} messages.
                         * @param message ListAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssignmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsRequest.verify|verify} messages.
                         * @param message ListAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssignmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Decodes a ListAssignmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Verifies a ListAssignmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssignmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssignmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Creates a plain object from a ListAssignmentsRequest message. Also converts values to other types if specified.
                         * @param message ListAssignmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListAssignmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssignmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAssignmentsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListAssignmentsResponse. */
                    interface IListAssignmentsResponse {

                        /** ListAssignmentsResponse assignments */
                        assignments?: (google.cloud.bigquery.reservation.v1.IAssignment[]|null);

                        /** ListAssignmentsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListAssignmentsResponse. */
                    class ListAssignmentsResponse implements IListAssignmentsResponse {

                        /**
                         * Constructs a new ListAssignmentsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse);

                        /** ListAssignmentsResponse assignments. */
                        public assignments: google.cloud.bigquery.reservation.v1.IAssignment[];

                        /** ListAssignmentsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListAssignmentsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssignmentsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Encodes the specified ListAssignmentsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsResponse.verify|verify} messages.
                         * @param message ListAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssignmentsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsResponse.verify|verify} messages.
                         * @param message ListAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssignmentsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Decodes a ListAssignmentsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Verifies a ListAssignmentsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssignmentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssignmentsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Creates a plain object from a ListAssignmentsResponse message. Also converts values to other types if specified.
                         * @param message ListAssignmentsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListAssignmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssignmentsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAssignmentsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteAssignmentRequest. */
                    interface IDeleteAssignmentRequest {

                        /** DeleteAssignmentRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteAssignmentRequest. */
                    class DeleteAssignmentRequest implements IDeleteAssignmentRequest {

                        /**
                         * Constructs a new DeleteAssignmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest);

                        /** DeleteAssignmentRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteAssignmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteAssignmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Encodes the specified DeleteAssignmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest.verify|verify} messages.
                         * @param message DeleteAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest.verify|verify} messages.
                         * @param message DeleteAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteAssignmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Decodes a DeleteAssignmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Verifies a DeleteAssignmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteAssignmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Creates a plain object from a DeleteAssignmentRequest message. Also converts values to other types if specified.
                         * @param message DeleteAssignmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteAssignmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteAssignmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchAssignmentsRequest. */
                    interface ISearchAssignmentsRequest {

                        /** SearchAssignmentsRequest parent */
                        parent?: (string|null);

                        /** SearchAssignmentsRequest query */
                        query?: (string|null);

                        /** SearchAssignmentsRequest pageSize */
                        pageSize?: (number|null);

                        /** SearchAssignmentsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a SearchAssignmentsRequest. */
                    class SearchAssignmentsRequest implements ISearchAssignmentsRequest {

                        /**
                         * Constructs a new SearchAssignmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest);

                        /** SearchAssignmentsRequest parent. */
                        public parent: string;

                        /** SearchAssignmentsRequest query. */
                        public query: string;

                        /** SearchAssignmentsRequest pageSize. */
                        public pageSize: number;

                        /** SearchAssignmentsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new SearchAssignmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchAssignmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Encodes the specified SearchAssignmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest.verify|verify} messages.
                         * @param message SearchAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchAssignmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest.verify|verify} messages.
                         * @param message SearchAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchAssignmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Decodes a SearchAssignmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Verifies a SearchAssignmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchAssignmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchAssignmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Creates a plain object from a SearchAssignmentsRequest message. Also converts values to other types if specified.
                         * @param message SearchAssignmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchAssignmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchAssignmentsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchAllAssignmentsRequest. */
                    interface ISearchAllAssignmentsRequest {

                        /** SearchAllAssignmentsRequest parent */
                        parent?: (string|null);

                        /** SearchAllAssignmentsRequest query */
                        query?: (string|null);

                        /** SearchAllAssignmentsRequest pageSize */
                        pageSize?: (number|null);

                        /** SearchAllAssignmentsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a SearchAllAssignmentsRequest. */
                    class SearchAllAssignmentsRequest implements ISearchAllAssignmentsRequest {

                        /**
                         * Constructs a new SearchAllAssignmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsRequest);

                        /** SearchAllAssignmentsRequest parent. */
                        public parent: string;

                        /** SearchAllAssignmentsRequest query. */
                        public query: string;

                        /** SearchAllAssignmentsRequest pageSize. */
                        public pageSize: number;

                        /** SearchAllAssignmentsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new SearchAllAssignmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchAllAssignmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsRequest): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsRequest;

                        /**
                         * Encodes the specified SearchAllAssignmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAllAssignmentsRequest.verify|verify} messages.
                         * @param message SearchAllAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchAllAssignmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAllAssignmentsRequest.verify|verify} messages.
                         * @param message SearchAllAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchAllAssignmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchAllAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsRequest;

                        /**
                         * Decodes a SearchAllAssignmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchAllAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsRequest;

                        /**
                         * Verifies a SearchAllAssignmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchAllAssignmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchAllAssignmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsRequest;

                        /**
                         * Creates a plain object from a SearchAllAssignmentsRequest message. Also converts values to other types if specified.
                         * @param message SearchAllAssignmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SearchAllAssignmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchAllAssignmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchAllAssignmentsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchAssignmentsResponse. */
                    interface ISearchAssignmentsResponse {

                        /** SearchAssignmentsResponse assignments */
                        assignments?: (google.cloud.bigquery.reservation.v1.IAssignment[]|null);

                        /** SearchAssignmentsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a SearchAssignmentsResponse. */
                    class SearchAssignmentsResponse implements ISearchAssignmentsResponse {

                        /**
                         * Constructs a new SearchAssignmentsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse);

                        /** SearchAssignmentsResponse assignments. */
                        public assignments: google.cloud.bigquery.reservation.v1.IAssignment[];

                        /** SearchAssignmentsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new SearchAssignmentsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchAssignmentsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Encodes the specified SearchAssignmentsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse.verify|verify} messages.
                         * @param message SearchAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchAssignmentsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse.verify|verify} messages.
                         * @param message SearchAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchAssignmentsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Decodes a SearchAssignmentsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Verifies a SearchAssignmentsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchAssignmentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchAssignmentsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Creates a plain object from a SearchAssignmentsResponse message. Also converts values to other types if specified.
                         * @param message SearchAssignmentsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchAssignmentsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchAssignmentsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchAllAssignmentsResponse. */
                    interface ISearchAllAssignmentsResponse {

                        /** SearchAllAssignmentsResponse assignments */
                        assignments?: (google.cloud.bigquery.reservation.v1.IAssignment[]|null);

                        /** SearchAllAssignmentsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a SearchAllAssignmentsResponse. */
                    class SearchAllAssignmentsResponse implements ISearchAllAssignmentsResponse {

                        /**
                         * Constructs a new SearchAllAssignmentsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsResponse);

                        /** SearchAllAssignmentsResponse assignments. */
                        public assignments: google.cloud.bigquery.reservation.v1.IAssignment[];

                        /** SearchAllAssignmentsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new SearchAllAssignmentsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchAllAssignmentsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsResponse): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse;

                        /**
                         * Encodes the specified SearchAllAssignmentsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse.verify|verify} messages.
                         * @param message SearchAllAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchAllAssignmentsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse.verify|verify} messages.
                         * @param message SearchAllAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISearchAllAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchAllAssignmentsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchAllAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse;

                        /**
                         * Decodes a SearchAllAssignmentsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchAllAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse;

                        /**
                         * Verifies a SearchAllAssignmentsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchAllAssignmentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchAllAssignmentsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse;

                        /**
                         * Creates a plain object from a SearchAllAssignmentsResponse message. Also converts values to other types if specified.
                         * @param message SearchAllAssignmentsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SearchAllAssignmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchAllAssignmentsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchAllAssignmentsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MoveAssignmentRequest. */
                    interface IMoveAssignmentRequest {

                        /** MoveAssignmentRequest name */
                        name?: (string|null);

                        /** MoveAssignmentRequest destinationId */
                        destinationId?: (string|null);

                        /** MoveAssignmentRequest assignmentId */
                        assignmentId?: (string|null);
                    }

                    /** Represents a MoveAssignmentRequest. */
                    class MoveAssignmentRequest implements IMoveAssignmentRequest {

                        /**
                         * Constructs a new MoveAssignmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest);

                        /** MoveAssignmentRequest name. */
                        public name: string;

                        /** MoveAssignmentRequest destinationId. */
                        public destinationId: string;

                        /** MoveAssignmentRequest assignmentId. */
                        public assignmentId: string;

                        /**
                         * Creates a new MoveAssignmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MoveAssignmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Encodes the specified MoveAssignmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MoveAssignmentRequest.verify|verify} messages.
                         * @param message MoveAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MoveAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MoveAssignmentRequest.verify|verify} messages.
                         * @param message MoveAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MoveAssignmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MoveAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Decodes a MoveAssignmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MoveAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Verifies a MoveAssignmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MoveAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MoveAssignmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Creates a plain object from a MoveAssignmentRequest message. Also converts values to other types if specified.
                         * @param message MoveAssignmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.MoveAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MoveAssignmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MoveAssignmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateAssignmentRequest. */
                    interface IUpdateAssignmentRequest {

                        /** UpdateAssignmentRequest assignment */
                        assignment?: (google.cloud.bigquery.reservation.v1.IAssignment|null);

                        /** UpdateAssignmentRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateAssignmentRequest. */
                    class UpdateAssignmentRequest implements IUpdateAssignmentRequest {

                        /**
                         * Constructs a new UpdateAssignmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IUpdateAssignmentRequest);

                        /** UpdateAssignmentRequest assignment. */
                        public assignment?: (google.cloud.bigquery.reservation.v1.IAssignment|null);

                        /** UpdateAssignmentRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateAssignmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateAssignmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IUpdateAssignmentRequest): google.cloud.bigquery.reservation.v1.UpdateAssignmentRequest;

                        /**
                         * Encodes the specified UpdateAssignmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateAssignmentRequest.verify|verify} messages.
                         * @param message UpdateAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IUpdateAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateAssignmentRequest.verify|verify} messages.
                         * @param message UpdateAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IUpdateAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateAssignmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.UpdateAssignmentRequest;

                        /**
                         * Decodes an UpdateAssignmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.UpdateAssignmentRequest;

                        /**
                         * Verifies an UpdateAssignmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateAssignmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.UpdateAssignmentRequest;

                        /**
                         * Creates a plain object from an UpdateAssignmentRequest message. Also converts values to other types if specified.
                         * @param message UpdateAssignmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.UpdateAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateAssignmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateAssignmentRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TableReference. */
                    interface ITableReference {

                        /** TableReference projectId */
                        projectId?: (string|null);

                        /** TableReference datasetId */
                        datasetId?: (string|null);

                        /** TableReference tableId */
                        tableId?: (string|null);
                    }

                    /** Represents a TableReference. */
                    class TableReference implements ITableReference {

                        /**
                         * Constructs a new TableReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ITableReference);

                        /** TableReference projectId. */
                        public projectId: string;

                        /** TableReference datasetId. */
                        public datasetId: string;

                        /** TableReference tableId. */
                        public tableId: string;

                        /**
                         * Creates a new TableReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableReference instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ITableReference): google.cloud.bigquery.reservation.v1.TableReference;

                        /**
                         * Encodes the specified TableReference message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.TableReference.verify|verify} messages.
                         * @param message TableReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ITableReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableReference message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.TableReference.verify|verify} messages.
                         * @param message TableReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ITableReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.TableReference;

                        /**
                         * Decodes a TableReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.TableReference;

                        /**
                         * Verifies a TableReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.TableReference;

                        /**
                         * Creates a plain object from a TableReference message. Also converts values to other types if specified.
                         * @param message TableReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.TableReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TableReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BiReservation. */
                    interface IBiReservation {

                        /** BiReservation name */
                        name?: (string|null);

                        /** BiReservation updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** BiReservation size */
                        size?: (number|Long|string|null);

                        /** BiReservation preferredTables */
                        preferredTables?: (google.cloud.bigquery.reservation.v1.ITableReference[]|null);
                    }

                    /** Represents a BiReservation. */
                    class BiReservation implements IBiReservation {

                        /**
                         * Constructs a new BiReservation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IBiReservation);

                        /** BiReservation name. */
                        public name: string;

                        /** BiReservation updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** BiReservation size. */
                        public size: (number|Long|string);

                        /** BiReservation preferredTables. */
                        public preferredTables: google.cloud.bigquery.reservation.v1.ITableReference[];

                        /**
                         * Creates a new BiReservation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BiReservation instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IBiReservation): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Encodes the specified BiReservation message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.BiReservation.verify|verify} messages.
                         * @param message BiReservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IBiReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BiReservation message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.BiReservation.verify|verify} messages.
                         * @param message BiReservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IBiReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BiReservation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BiReservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Decodes a BiReservation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BiReservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Verifies a BiReservation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BiReservation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BiReservation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Creates a plain object from a BiReservation message. Also converts values to other types if specified.
                         * @param message BiReservation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.BiReservation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BiReservation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BiReservation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetBiReservationRequest. */
                    interface IGetBiReservationRequest {

                        /** GetBiReservationRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetBiReservationRequest. */
                    class GetBiReservationRequest implements IGetBiReservationRequest {

                        /**
                         * Constructs a new GetBiReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest);

                        /** GetBiReservationRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetBiReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBiReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Encodes the specified GetBiReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetBiReservationRequest.verify|verify} messages.
                         * @param message GetBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBiReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetBiReservationRequest.verify|verify} messages.
                         * @param message GetBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBiReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Decodes a GetBiReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Verifies a GetBiReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetBiReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetBiReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Creates a plain object from a GetBiReservationRequest message. Also converts values to other types if specified.
                         * @param message GetBiReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.GetBiReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetBiReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetBiReservationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateBiReservationRequest. */
                    interface IUpdateBiReservationRequest {

                        /** UpdateBiReservationRequest biReservation */
                        biReservation?: (google.cloud.bigquery.reservation.v1.IBiReservation|null);

                        /** UpdateBiReservationRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateBiReservationRequest. */
                    class UpdateBiReservationRequest implements IUpdateBiReservationRequest {

                        /**
                         * Constructs a new UpdateBiReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest);

                        /** UpdateBiReservationRequest biReservation. */
                        public biReservation?: (google.cloud.bigquery.reservation.v1.IBiReservation|null);

                        /** UpdateBiReservationRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateBiReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateBiReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Encodes the specified UpdateBiReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest.verify|verify} messages.
                         * @param message UpdateBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateBiReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest.verify|verify} messages.
                         * @param message UpdateBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateBiReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Decodes an UpdateBiReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Verifies an UpdateBiReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateBiReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateBiReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Creates a plain object from an UpdateBiReservationRequest message. Also converts values to other types if specified.
                         * @param message UpdateBiReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateBiReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateBiReservationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Edition enum. */
                    enum Edition {
                        EDITION_UNSPECIFIED = 0,
                        STANDARD = 1,
                        ENTERPRISE = 2,
                        ENTERPRISE_PLUS = 3
                    }

                    /** FailoverMode enum. */
                    enum FailoverMode {
                        FAILOVER_MODE_UNSPECIFIED = 0,
                        SOFT = 1,
                        HARD = 2
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

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldMask
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

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
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
    }

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy auditConfigs */
                auditConfigs?: (google.iam.v1.IAuditConfig[]|null);

                /** Policy etag */
                etag?: (Uint8Array|Buffer|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy auditConfigs. */
                public auditConfigs: google.iam.v1.IAuditConfig[];

                /** Policy etag. */
                public etag: (Uint8Array|Buffer|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Policy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Binding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditConfig. */
            interface IAuditConfig {

                /** AuditConfig service */
                service?: (string|null);

                /** AuditConfig auditLogConfigs */
                auditLogConfigs?: (google.iam.v1.IAuditLogConfig[]|null);
            }

            /** Represents an AuditConfig. */
            class AuditConfig implements IAuditConfig {

                /**
                 * Constructs a new AuditConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfig);

                /** AuditConfig service. */
                public service: string;

                /** AuditConfig auditLogConfigs. */
                public auditLogConfigs: google.iam.v1.IAuditLogConfig[];

                /**
                 * Creates a new AuditConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfig): google.iam.v1.AuditConfig;

                /**
                 * Encodes the specified AuditConfig message. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfig;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfig;

                /**
                 * Verifies an AuditConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfig;

                /**
                 * Creates a plain object from an AuditConfig message. Also converts values to other types if specified.
                 * @param message AuditConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditLogConfig. */
            interface IAuditLogConfig {

                /** AuditLogConfig logType */
                logType?: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType|null);

                /** AuditLogConfig exemptedMembers */
                exemptedMembers?: (string[]|null);
            }

            /** Represents an AuditLogConfig. */
            class AuditLogConfig implements IAuditLogConfig {

                /**
                 * Constructs a new AuditLogConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditLogConfig);

                /** AuditLogConfig logType. */
                public logType: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType);

                /** AuditLogConfig exemptedMembers. */
                public exemptedMembers: string[];

                /**
                 * Creates a new AuditLogConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditLogConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditLogConfig): google.iam.v1.AuditLogConfig;

                /**
                 * Encodes the specified AuditLogConfig message. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditLogConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditLogConfig;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditLogConfig;

                /**
                 * Verifies an AuditLogConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditLogConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditLogConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditLogConfig;

                /**
                 * Creates a plain object from an AuditLogConfig message. Also converts values to other types if specified.
                 * @param message AuditLogConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditLogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditLogConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditLogConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditLogConfig {

                /** LogType enum. */
                enum LogType {
                    LOG_TYPE_UNSPECIFIED = 0,
                    ADMIN_READ = 1,
                    DATA_WRITE = 2,
                    DATA_READ = 3
                }
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BindingDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfigDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Expr
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
