class HoneyMakerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.color = 'yellow';
    this.honeyPot = 0;
  }

  makeHoney = function() {
    this.honeyPot++;
  }

  giveHoney = function() {
    this.honeyPot--;
  }
};
