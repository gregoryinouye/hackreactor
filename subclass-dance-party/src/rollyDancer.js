var RollyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step.bind(this);
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
  this.$node = $('<img src="alien.png" class="dancer rollydancer">');
  this.setPosition(top, left);
};

RollyDancer.prototype = Object.create(Dancer.prototype);
RollyDancer.prototype.constructor = RollyDancer;

RollyDancer.prototype.step = function() {
  this.oldStep();
};