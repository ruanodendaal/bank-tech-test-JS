'use strict';

const expect = require("chai").expect;
const Statement = require('../app/Statement');
const today = require('../app/DateToday');

describe('Statement', function() {
  var statement;

  beforeEach(function() {
    statement = new Statement.Statement();
  });

  it('is instantiated with an empty transactions list', function() {
    expect(statement.transactions).to.be.empty;
  });

  it('prints deposit on statement', function() {
    let trans = { date: `${today.DateToday()}`, type: 'deposit', amount: 100, currentBalance: 500 }
    statement.transactions.push(trans);
    expect(statement.print()).to.equal("date || credit || debit || balance\n" +
                                      `${today.DateToday()} || 100 || || 500\n`);
  });

  it('prints withdrawl on statement', function() {
    let trans = { date: `${today.DateToday()}`, type: 'withdraw', amount: 10, currentBalance: 490 }
    statement.transactions.push(trans);
    expect(statement.print()).to.equal("date || credit || debit || balance\n" +
                                      `${today.DateToday()} || || 10 || 490\n`);
  });
});
