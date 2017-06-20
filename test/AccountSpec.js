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
      expect(acc.balance).to.equal(100);
    });
  });
});
