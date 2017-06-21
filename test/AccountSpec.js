'use strict';

const expect = require("chai").expect;
const Account = require('../app/Account');

describe('Account', function() {

  describe('Account opening', function() {
    it('open a new account with zero balance', function() {
      var acc = new Account.Account();
      expect(acc.getBalance()).to.equal(0);
    });

    it('open a new account with £500 balance', function() {
      var acc = new Account.Account(500);
      expect(acc.getBalance()).to.equal(500);
    });
  });

  describe('Making deposits', function() {
    var acc;

    beforeEach(function() {
      acc = new Account.Account();
    });

    it('make a £100 deposit', function() {
      acc.makeTransaction("deposit", 100);
      expect(acc.getBalance()).to.equal(100);
    });

    it('does not allow zero deposits', function() {
      expect(acc.makeTransaction.bind(acc, "deposit", 0)).to.throw('0: you cannot deposit zero!');
    })

    it('does not allow negative deposits', function() {
      expect(acc.makeTransaction.bind(acc, "deposit", -10)).to.throw('-10: you cannot deposit a negative amount!');
    });
  });

  describe('Making withdrawal', function() {
    var acc;

    beforeEach(function() {
      acc = new Account.Account(500);
    });

    it('make a £100 withdrawal', function() {
      acc.makeTransaction("withdraw", 100);
      expect(acc.getBalance()).to.equal(400);
    });

    it('does not allow zero withdrawal', function() {
      expect(acc.makeTransaction.bind(acc, "withdraw", 0)).to.throw('0: you cannot withdraw zero!');
    })

    it('does not allow negative deposits', function() {
      expect(acc.makeTransaction.bind(acc, "withdraw", -10)).to.throw('-10: you cannot withdraw a negative amount!');
    });
  });

  describe('Invalid transaction type', function() {
    it('throws an error if not a deposit or withdrawal', function() {
      var acc = new Account.Account(500);
      expect(acc.makeTransaction.bind(acc, "bla", 20)).to.throw('bla: not recognised');
    });
  });
});
