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
      acc.deposit(100);
      expect(acc.getBalance()).to.equal(100);
    });

    it('does not allow negative deposits', function() {
      expect(acc.deposit.bind(acc, -10)).to.throw('-10 does not conform to the allowed amount');
    })
  });
});
