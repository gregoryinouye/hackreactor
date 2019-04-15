var RollingDancer = function(top, left, timeBetweenSteps) {
  var oldStep = this.step;
};

RollingDancer.prototype.step = function() {
  oldStep();
  // do rolling animation
};