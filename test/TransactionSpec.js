'use strict';

const expect = require("chai").expect;
const Transaction = require('../app/Transaction');

describe('Transaction', function() {
  var trans;

  describe('New transaction', function() {
    beforeEach(function() {
      trans = new Transaction.Transaction("deposit", 100);
    });

    it('creates a single transaction with an amount', function() {
      expect(trans.amount).to.equal(100);
    });

    it('creates a single transaction with transaction type', function() {
      expect(trans.type).to.equal("deposit");
    });
  });
});
