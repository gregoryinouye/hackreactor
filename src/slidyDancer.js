var SlidyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step.bind(this);
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
};

SlidyDancer.prototype = Object.create(Dancer.prototype);
SlidyDancer.prototype.constructor = SlidyDancer;

SlidyDancer.prototype.step = function() {
  this.oldStep();

  // var slideLeft = function() {
  //   this.$node.animate({left: '+= 250px'}, {complete: slideRight.bind(this)});
  // };

  // var slideRight = function() {
  //   this.$node.animate({left: '-=250px'});
  // }

  //make dancer slide
  // this.$node.animate({left: '+= 250px'}).fadeOut().fadeIn();animate({right: '+=250px'});
  this.$node.animate({left: '+=20px'}).animate({right: '-=20px'}).animate({top: '+=10px'});

  // this.$node.slideToggle('fast', 'swing');

  //this.$node.fadeOut().fadeIn();
};