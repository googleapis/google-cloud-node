var util = require('../common/util.js');

function Query(datasetId, namespace, kind) {
  this.datasetId = datasetId;
  this.namespace = namespace;
  this.kind = kind;

  this.filters = [];
  this.orders = [];
  this.groupBy = [];
  this.select = [];

  this.limit = -1;
  this.offset = -1;
}

Query.prototype.filter = function(fieldName, op, value) {
  var q = util.extend(new Query(), this);
  return q;
};

Query.prototype.order = function(order) {
  throw new Error("not yet implemented")
};

Query.prototype.groupBy = function(fieldNames) {
  var q = util.extend(new Query(), this);
  q.groupBy = fieldNames;
  return q;
};

Query.prototype.select = function(fieldNames) {
  var q = util.extend(new Query(), this);
  q.select = fieldNames;
  return q;
};

Query.prototype.limit = function(n) {
  var q = util.extend(new Query(), this);
  q.limit = n;
  return q;
};

Query.prototype.offset = function(n) {
  var q = util.extend(new Query(), this);
  q.offset = n;
  return q;
};

/**
 * Exports Query.
 */
module.exports.Query = Query;