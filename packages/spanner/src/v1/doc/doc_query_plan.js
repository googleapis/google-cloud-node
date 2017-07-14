/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * Node information for nodes appearing in a {@link QueryPlan.plan_nodes}.
 *
 * @property {number} index
 *   The `PlanNode`'s index in {@link node list}.
 *
 * @property {number} kind
 *   Used to determine the type of node. May be needed for visualizing
 *   different kinds of nodes differently. For example, If the node is a
 *   {@link SCALAR} node, it will have a condensed representation
 *   which can be used to directly embed a description of the node in its
 *   parent.
 *
 *   The number should be among the values of [Kind]{@link Kind}
 *
 * @property {string} displayName
 *   The display name for the node.
 *
 * @property {Object[]} childLinks
 *   List of child node `index`es and their relationship to this parent.
 *
 *   This object should have the same structure as [ChildLink]{@link ChildLink}
 *
 * @property {Object} shortRepresentation
 *   Condensed representation for {@link SCALAR} nodes.
 *
 *   This object should have the same structure as [ShortRepresentation]{@link ShortRepresentation}
 *
 * @property {Object} metadata
 *   Attributes relevant to the node contained in a group of key-value pairs.
 *   For example, a Parameter Reference node could have the following
 *   information in its metadata:
 *
 *       {
 *         "parameter_reference": "param1",
 *         "parameter_type": "array"
 *       }
 *
 *   This object should have the same structure as [google.protobuf.Struct]{@link external:"google.protobuf.Struct"}
 *
 * @property {Object} executionStats
 *   The execution statistics associated with the node, contained in a group of
 *   key-value pairs. Only present if the plan was returned as a result of a
 *   profile query. For example, number of executions, number of rows/time per
 *   execution etc.
 *
 *   This object should have the same structure as [google.protobuf.Struct]{@link external:"google.protobuf.Struct"}
 *
 * @class
 * @see [google.spanner.v1.PlanNode definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/query_plan.proto}
 */
var PlanNode = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Metadata associated with a parent-child relationship appearing in a
   * {@link PlanNode}.
   *
   * @property {number} childIndex
   *   The node to which the link points.
   *
   * @property {string} type
   *   The type of the link. For example, in Hash Joins this could be used to
   *   distinguish between the build child and the probe child, or in the case
   *   of the child being an output variable, to represent the tag associated
   *   with the output variable.
   *
   * @property {string} variable
   *   Only present if the child node is {@link SCALAR} and corresponds
   *   to an output variable of the parent node. The field carries the name of
   *   the output variable.
   *   For example, a `TableScan` operator that reads rows from a table will
   *   have child links to the `SCALAR` nodes representing the output variables
   *   created for each column that is read by the operator. The corresponding
   *   `variable` fields will be set to the variable names assigned to the
   *   columns.
   *
   * @class
   * @see [google.spanner.v1.PlanNode.ChildLink definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/query_plan.proto}
   */
  ChildLink: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Condensed representation of a node and its subtree. Only present for
   * `SCALAR` {@link PlanNode(s)}.
   *
   * @property {string} description
   *   A string representation of the expression subtree rooted at this node.
   *
   * @property {Object.<string, number>} subqueries
   *   A mapping of (subquery variable name) -> (subquery node id) for cases
   *   where the `description` string of this node references a `SCALAR`
   *   subquery contained in the expression subtree rooted at this node. The
   *   referenced `SCALAR` subquery may not necessarily be a direct child of
   *   this node.
   *
   * @class
   * @see [google.spanner.v1.PlanNode.ShortRepresentation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/query_plan.proto}
   */
  ShortRepresentation: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * The kind of {@link PlanNode}. Distinguishes between the two different kinds of
   * nodes that can appear in a query plan.
   *
   * @enum {number}
   */
  Kind: {

    /**
     * Not specified.
     */
    KIND_UNSPECIFIED: 0,

    /**
     * Denotes a Relational operator node in the expression tree. Relational
     * operators represent iterative processing of rows during query execution.
     * For example, a `TableScan` operation that reads rows from a table.
     */
    RELATIONAL: 1,

    /**
     * Denotes a Scalar node in the expression tree. Scalar nodes represent
     * non-iterable entities in the query plan. For example, constants or
     * arithmetic operators appearing inside predicate expressions or references
     * to column names.
     */
    SCALAR: 2
  }
};

/**
 * Contains an ordered list of nodes appearing in the query plan.
 *
 * @property {Object[]} planNodes
 *   The nodes in the query plan. Plan nodes are returned in pre-order starting
 *   with the plan root. Each {@link PlanNode}'s `id` corresponds to its index in
 *   `plan_nodes`.
 *
 *   This object should have the same structure as [PlanNode]{@link PlanNode}
 *
 * @class
 * @see [google.spanner.v1.QueryPlan definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/query_plan.proto}
 */
var QueryPlan = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};