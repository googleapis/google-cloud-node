var util = require('../common/util.js');

function Query(datasetId, kinds) {
  // TODO(jbd): Add namespace support
  this.datasetId = datasetId;
  this.kinds = kinds;

  this.filters = [];
  this.orders = [];
  this.groupByVal = [];
  this.selectVal = [];

  // pagination
  this.startVal = null;
  this.limitVal = -1;
  this.offsetVal = -1;
}

Query.prototype.filter = function(filter, value) {
  var q = util.extend(this, new Query());
  throw new Error("not yet implemented");
  return q;
};

Query.prototype.order = function(order) {
  throw new Error("not yet implemented")
};

Query.prototype.groupBy = function(fieldNames) {
  var q = util.extend(this, new Query());
  q.groupByVal = fieldNames;
  return q;
};

Query.prototype.select = function(fieldNames) {
  var q = util.extend(this, new Query());
  q.selectVal = fieldNames;
  return q;
};

Query.prototype.start = function(start) {
  var q = util.extend(this, new Query());
  q.startVal = start;
  return q;
}

Query.prototype.limit = function(n) {
  var q = util.extend(this, new Query());
  q.limitVal = n;
  return q;
};

Query.prototype.offset = function(n) {
  var q = util.extend(this, new Query());
  q.offsetVal = n;
  return q;
};

/**
 * Exports Query.
 */
module.exports.Query = Query;