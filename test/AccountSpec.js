var expect = require("chai").expect;

describe('Account', function() {
  describe('Account opening', function() {

    it('open a new account with zero balance', function() {
      let acc = new Account();
      expect(acc.getBalance()).to.equal(0);
    });

    it('opens a new account with 500 balance', function() {
      let acc = new Account(500);
      expect(acc.getBalance()).to.equal(500);
    });
  });
});
