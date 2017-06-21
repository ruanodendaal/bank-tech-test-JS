'use strict';

const expect = require("chai").expect;
const Account = require('../app/Account');
const today = require('../app/DateToday');

describe('FeatureSpec', function() {

  it('transactions are added to the account statement', function() {
    let acc = new Account.Account();
    acc.makeTransaction("deposit", 100);
    acc.makeTransaction("withdraw", 50);
    let trans = [ { date: today.DateToday(), type: 'deposit', amount: 100, currentBalance: 100 }, { date: today.DateToday(), type: 'withdraw', amount: 50, currentBalance: 50 } ]
    expect(acc.statement.transactions).to.eql(trans);
  });

  it('prints full statement', function() {
    let acc = new Account.Account();
    acc.makeTransaction("deposit", 1000);
    acc.makeTransaction("deposit", 2000);
    acc.makeTransaction("withdraw", 500);
    expect(acc.statement.print()).to.equal("date || credit || debit || balance\n" +
                                      `${today.DateToday()} || || 500 || 2500\n` +
                                      `${today.DateToday()} || 2000 || || 3000\n` +
                                      `${today.DateToday()} || 1000 || || 1000\n`);
  });
});
