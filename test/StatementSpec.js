'use strict';

const expect = require("chai").expect;
const Statement = require('../app/Statement');

describe('Statement', function() {
  var statement;

  beforeEach(function() {
    statement = new Statement.Statement();
  });

  it('is instantiated with an empty transactions list', function() {
    expect(statement.transactions).to.be.empty;
  });

  it('prints a statement', function() {
    statement.transactions.push({ date: `today.DateToday()`, type: 'deposit', amount: 100 });
    expect(statement.print()).to.equal("date || credit || debit || balance\n" +
                                      `${today.DateToday()} || 100.00 || || 3000.00\n`);
  });
});
