var RollyDancer = function(top, left, timeBetweenSteps) {
  var oldStep = this.step;
};

RollyDancer.prototype.step = function() {
  oldStep();
  // do rolling animation
};