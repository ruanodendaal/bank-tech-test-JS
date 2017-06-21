'use strict';

const expect = require("chai").expect;
const Account = require('../app/Account');
const today = require('../app/DateToday');

describe('FeatureSpec', function() {

  it('transactions are added to the account statement', function() {
    var acc = new Account.Account();
    acc.makeTransaction("deposit", 100);
    acc.makeTransaction("withdraw", 50);
    let trans = [ { date: today.DateToday(), type: 'deposit', amount: 100 }, { date: today.DateToday(), type: 'withdraw', amount: 50 } ]
    expect(acc.statement.transactions).to.eql(trans);
  });
});
