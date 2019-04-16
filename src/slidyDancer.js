var SlidyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step.bind(this);
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
  this.$node.addClass('slidydancer');
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
  this.$node.animate({left: '+=50px'}).animate({right: '-=50px'}).animate({top: '+=20px'});

  // this.$node.stop(true,true).animate({left: 500}, 5000, function() {
  //   this.$node.stop(true,true).animate({left: 100}, 5000);
  // });

//window.length
//window offsets


  // this.$node.slideToggle('fast', 'swing');

  //this.$node.fadeOut().fadeIn();
};