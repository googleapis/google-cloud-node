function Query(datasetId, namespace, kind) {
  this.datasetId = datasetId;
  this.namespace = namespace;
  this.kind = kind;
}

Query.prototype.filter = function(fieldName, op, value) {
  throw new Error("not yet implemented")
};

Query.prototype.order = function(order) {
  throw new Error("not yet implemented")
};

Query.prototype.groupBy = function(fieldNames) {
  throw new Error("not yet implemented")
};

Query.prototype.project = function(fieldNames) {
  throw new Error("not yet implemented")
};

Query.prototype.limit = function(n) {
  throw new Error("not yet implemented")
};

Query.prototype.offset = function(n) {
  throw new Error("not yet implemented")
};

/**
 * Exports Query.
 */
module.exports.Query = Query;