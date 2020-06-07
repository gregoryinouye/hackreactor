class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  forage = function() {
    return 'I am too old, let me play cards instead';
  }

  gamble = function(treasure) {
    this.treasureChest.push(treasure);
  }
};