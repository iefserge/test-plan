// Original author
// http://dailyjs.com/2013/11/14/mocha-assertion-counting/

var assert = require('assert');

function Plan(count, done) {
  this.done = done;
  this.count = count;

  if (0 === count) {
    done();
  }
}

Plan.prototype.ok = function(expression) {
  assert(expression);

  if (this.count === 0) {
    assert(false, 'Too many assertions called');
  } else {
    this.count--;
  }

  if (this.count === 0) {
    this.done();
  }
};

module.exports = Plan;
