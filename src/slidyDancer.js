var SlidyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step.bind(this);
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
  this.$node = $('<img src="poo.png" class="dancer slidydancer">');
  this.setPosition(top, left);
};

SlidyDancer.prototype = Object.create(Dancer.prototype);
SlidyDancer.prototype.constructor = SlidyDancer;

SlidyDancer.prototype.step = function() {
  this.oldStep();
};