'use strict';

const expect = require("chai").expect;
const Account = require('../app/Account');

describe('Account', function() {
  describe('Account opening', function() {

    it('open a new account with zero balance', function() {
      var acc = new Account.Account();
      expect(acc.getBalance()).to.equal(0);
    });

    it('opens a new account with 500 balance', function() {
      var acc = new Account.Account(500);
      expect(acc.getBalance()).to.equal(500);
    });
  });
});
