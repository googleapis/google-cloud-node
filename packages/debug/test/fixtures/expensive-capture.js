'use strict';
var a = new Array(50).map(function() { return ','; });
module.exports.rec = function rec(n) {
  if (n === 0) {
    return 5;
  } else {
    return rec(n - 1);
  }
};
