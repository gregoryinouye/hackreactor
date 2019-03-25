/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isFalse) {
    if (!isFalse) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var assert = chai.assert;
  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011123412341234') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011123412341234123') === 'Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    assert(detectNetwork('6441123412341234') === 'Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    assert(detectNetwork('6441123412341234123') === 'Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    assert(detectNetwork('6451123412341234') === 'Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    assert(detectNetwork('6451123412341234123') === 'Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    assert(detectNetwork('6461123412341234') === 'Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    assert(detectNetwork('6461123412341234123') === 'Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    assert(detectNetwork('6471123412341234') === 'Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    assert(detectNetwork('6471123412341234123') === 'Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    assert(detectNetwork('6481123412341234') === 'Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    assert(detectNetwork('6481123412341234123') === 'Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    assert(detectNetwork('6491123412341234') === 'Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    assert(detectNetwork('6491123412341234123') === 'Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6501123412341234') === 'Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6501123412341234123') === 'Discover');
  });
});

describe('Maestro', function() {
  var assert = chai.assert;
  it('has a prefix of 5018 and a length of 12', function() {
    assert(detectNetwork('501812341234') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    assert(detectNetwork('5018123412345') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    assert(detectNetwork('50181234123456') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    assert(detectNetwork('501812341234567') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    assert(detectNetwork('5018123412345678') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    assert(detectNetwork('50181234123456789') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    assert(detectNetwork('501812341234567890') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    assert(detectNetwork('5018123412345678901') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 12', function() {
    assert(detectNetwork('502012341234') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    assert(detectNetwork('5020123412345') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    assert(detectNetwork('50201234123456') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    assert(detectNetwork('502012341234567') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    assert(detectNetwork('5020123412345678') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    assert(detectNetwork('50201234123456789') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    assert(detectNetwork('502012341234567890') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    assert(detectNetwork('5020123412345678901') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 12', function() {
    assert(detectNetwork('503812341234') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    assert(detectNetwork('5038123412345') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    assert(detectNetwork('50381234123456') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    assert(detectNetwork('503812341234567') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    assert(detectNetwork('5038123412345678') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    assert(detectNetwork('50381234123456789') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    assert(detectNetwork('503812341234567890') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    assert(detectNetwork('5038123412345678901') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 12', function() {
    assert(detectNetwork('630412341234') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    assert(detectNetwork('6304123412345') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    assert(detectNetwork('63041234123456') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    assert(detectNetwork('630412341234567') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    assert(detectNetwork('6304123412345678') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    assert(detectNetwork('63041234123456789') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    assert(detectNetwork('630412341234567890') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    assert(detectNetwork('6304123412345678901') === 'Maestro');
  });
});

describe('China UnionPay', function() {
  var assert = chai.assert;
  it('has a prefix of 622126 and a length of 16', function() {
    assert(detectNetwork('6221260123456789') === 'China UnionPay');
  });
  it('has a prefix of 622126 and a length of 17', function() {
    assert(detectNetwork('62212601234567890') === 'China UnionPay');
  });
  it('has a prefix of 622126 and a length of 18', function() {
    assert(detectNetwork('622126012345678901') === 'China UnionPay');
  });
  it('has a prefix of 622126 and a length of 19', function() {
    assert(detectNetwork('6221260123456789012') === 'China UnionPay');
  });
  it('has a prefix of 622127 and a length of 16', function() {
    assert(detectNetwork('6221270123456789') === 'China UnionPay');
  });
  it('has a prefix of 622127 and a length of 17', function() {
    assert(detectNetwork('62212701234567890') === 'China UnionPay');
  });
  it('has a prefix of 622127 and a length of 18', function() {
    assert(detectNetwork('622127012345678901') === 'China UnionPay');
  });
  it('has a prefix of 622127 and a length of 19', function() {
    assert(detectNetwork('6221270123456789012') === 'China UnionPay');
  });
  it('has a prefix of 622128 and a length of 16', function() {
    assert(detectNetwork('6221280123456789') === 'China UnionPay');
  });
  it('has a prefix of 622128 and a length of 17', function() {
    assert(detectNetwork('62212801234567890') === 'China UnionPay');
  });
  it('has a prefix of 622128 and a length of 18', function() {
    assert(detectNetwork('622128012345678901') === 'China UnionPay');
  });
  it('has a prefix of 622128 and a length of 19', function() {
    assert(detectNetwork('6221280123456789012') === 'China UnionPay');
  });
  it('has a prefix of 622220 and a length of 16', function() {
    assert(detectNetwork('6222200123456789') === 'China UnionPay');
  });
  it('has a prefix of 622220 and a length of 17', function() {
    assert(detectNetwork('62222001234567890') === 'China UnionPay');
  });
  it('has a prefix of 622220 and a length of 18', function() {
    assert(detectNetwork('622220012345678901') === 'China UnionPay');
  });
  it('has a prefix of 622220 and a length of 19', function() {
    assert(detectNetwork('6222200123456789012') === 'China UnionPay');
  });
  it('has a prefix of 622925 and a length of 16', function() {
    assert(detectNetwork('6229250123456789') === 'China UnionPay');
  });
  it('has a prefix of 622925 and a length of 17', function() {
    assert(detectNetwork('62292501234567890') === 'China UnionPay');
  });
  it('has a prefix of 622925 and a length of 18', function() {
    assert(detectNetwork('622925012345678901') === 'China UnionPay');
  });
  it('has a prefix of 622925 and a length of 19', function() {
    assert(detectNetwork('6229250123456789012') === 'China UnionPay');
  });
  it('has a prefix of 624012 and a length of 16', function() {
    assert(detectNetwork('6240120123456789') === 'China UnionPay');
  });
  it('has a prefix of 624012 and a length of 17', function() {
    assert(detectNetwork('62401201234567890') === 'China UnionPay');
  });
  it('has a prefix of 624012 and a length of 18', function() {
    assert(detectNetwork('624012012345678901') === 'China UnionPay');
  });
  it('has a prefix of 624012 and a length of 19', function() {
    assert(detectNetwork('6240120123456789012') === 'China UnionPay');
  });
  it('has a prefix of 625012 and a length of 16', function() {
    assert(detectNetwork('6250120123456789') === 'China UnionPay');
  });
  it('has a prefix of 625012 and a length of 17', function() {
    assert(detectNetwork('62501201234567890') === 'China UnionPay');
  });
  it('has a prefix of 625012 and a length of 18', function() {
    assert(detectNetwork('625012012345678901') === 'China UnionPay');
  });
  it('has a prefix of 625012 and a length of 19', function() {
    assert(detectNetwork('6250120123456789012') === 'China UnionPay');
  });
  it('has a prefix of 626012 and a length of 16', function() {
    assert(detectNetwork('6260120123456789') === 'China UnionPay');
  });
  it('has a prefix of 626012 and a length of 17', function() {
    assert(detectNetwork('62601201234567890') === 'China UnionPay');
  });
  it('has a prefix of 626012 and a length of 18', function() {
    assert(detectNetwork('626012012345678901') === 'China UnionPay');
  });
  it('has a prefix of 626012 and a length of 19', function() {
    assert(detectNetwork('6260120123456789012') === 'China UnionPay');
  });
  it('has a prefix of 628201 and a length of 16', function() {
    assert(detectNetwork('6282010123456789') === 'China UnionPay');
  });
  it('has a prefix of 628201 and a length of 17', function() {
    assert(detectNetwork('62820101234567890') === 'China UnionPay');
  });
  it('has a prefix of 628201 and a length of 18', function() {
    assert(detectNetwork('628201012345678901') === 'China UnionPay');
  });
  it('has a prefix of 628201 and a length of 19', function() {
    assert(detectNetwork('6282010123456789012') === 'China UnionPay');
  });
  it('has a prefix of 628301 and a length of 16', function() {
    assert(detectNetwork('6283010123456789') === 'China UnionPay');
  });
  it('has a prefix of 628301 and a length of 17', function() {
    assert(detectNetwork('62830101234567890') === 'China UnionPay');
  });
  it('has a prefix of 628301 and a length of 18', function() {
    assert(detectNetwork('628301012345678901') === 'China UnionPay');
  });
  it('has a prefix of 628301 and a length of 19', function() {
    assert(detectNetwork('6283010123456789012') === 'China UnionPay');
  });
  it('has a prefix of 628401 and a length of 16', function() {
    assert(detectNetwork('6284010123456789') === 'China UnionPay');
  });
  it('has a prefix of 628401 and a length of 17', function() {
    assert(detectNetwork('62840101234567890') === 'China UnionPay');
  });
  it('has a prefix of 628401 and a length of 18', function() {
    assert(detectNetwork('628401012345678901') === 'China UnionPay');
  });
  it('has a prefix of 628401 and a length of 19', function() {
    assert(detectNetwork('6284010123456789012') === 'China UnionPay');
  });
  it('has a prefix of 628701 and a length of 16', function() {
    assert(detectNetwork('6287010123456789') === 'China UnionPay');
  });
  it('has a prefix of 628701 and a length of 17', function() {
    assert(detectNetwork('62870101234567890') === 'China UnionPay');
  });
  it('has a prefix of 628701 and a length of 18', function() {
    assert(detectNetwork('628701012345678901') === 'China UnionPay');
  });
  it('has a prefix of 628701 and a length of 19', function() {
    assert(detectNetwork('6287010123456789012') === 'China UnionPay');
  });
  it('has a prefix of 628801 and a length of 16', function() {
    assert(detectNetwork('6288010123456789') === 'China UnionPay');
  });
  it('has a prefix of 628801 and a length of 17', function() {
    assert(detectNetwork('62880101234567890') === 'China UnionPay');
  });
  it('has a prefix of 628801 and a length of 18', function() {
    assert(detectNetwork('628801012345678901') === 'China UnionPay');
  });
  it('has a prefix of 628801 and a length of 19', function() {
    assert(detectNetwork('6288010123456789012') === 'China UnionPay');
  });
});

describe('Switch', function() {
  var assert = chai.assert;
  it('has a prefix of 4903 and a length of 16', function() {
    assert(detectNetwork('4903012345678901') === 'Switch');
  });
  it('has a prefix of 4903 and a length of 18', function() {
    assert(detectNetwork('490301234567890123') === 'Switch');
  });
  it('has a prefix of 4903 and a length of 19', function() {
    assert(detectNetwork('4903012345678901234') === 'Switch');
  });
  it('has a prefix of 4905 and a length of 16', function() {
    assert(detectNetwork('4905012345678901') === 'Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    assert(detectNetwork('490501234567890123') === 'Switch');
  });
  it('has a prefix of 4905 and a length of 19', function() {
    assert(detectNetwork('4905012345678901234') === 'Switch');
  });
  it('has a prefix of 4911 and a length of 16', function() {
    assert(detectNetwork('4911012345678901') === 'Switch');
  });
  it('has a prefix of 4911 and a length of 18', function() {
    assert(detectNetwork('491101234567890123') === 'Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    assert(detectNetwork('4911012345678901234') === 'Switch');
  });
  it('has a prefix of 4936 and a length of 16', function() {
    assert(detectNetwork('4936012345678901') === 'Switch');
  });
  it('has a prefix of 4936 and a length of 18', function() {
    assert(detectNetwork('493601234567890123') === 'Switch');
  });
  it('has a prefix of 4936 and a length of 19', function() {
    assert(detectNetwork('4936012345678901234') === 'Switch');
  });
  it('has a prefix of 564182 and a length of 16', function() {
    assert(detectNetwork('5641820123456789') === 'Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    assert(detectNetwork('564182012345678901') === 'Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    assert(detectNetwork('5641820123456789012') === 'Switch');
  });
  it('has a prefix of 633110 and a length of 16', function() {
    assert(detectNetwork('6331100123456789') === 'Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    assert(detectNetwork('633110012345678901') === 'Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    assert(detectNetwork('6331100123456789012') === 'Switch');
  });
  it('has a prefix of 633301 and a length of 16', function() {
    assert(detectNetwork('6333010123456789') === 'Switch');
  });
  it('has a prefix of 633301 and a length of 18', function() {
    assert(detectNetwork('633301012345678901') === 'Switch');
  });
  it('has a prefix of 633301 and a length of 19', function() {
    assert(detectNetwork('6333010123456789012') === 'Switch');
  });
  it('has a prefix of 675901 and a length of 16', function() {
    assert(detectNetwork('6759010123456789') === 'Switch');
  });
  it('has a prefix of 675901 and a length of 18', function() {
    assert(detectNetwork('675901012345678901') === 'Switch');
  });
  it('has a prefix of 675901 and a length of 19', function() {
    assert(detectNetwork('6759010123456789012') === 'Switch');
  });
});