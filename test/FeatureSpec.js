'use strict';

const expect = require("chai").expect;
const Account = require('../app/Account');

describe('FeatureSpec', function() {

  it('transactions are added to the account statement', function() {
    var acc = new Account.Account();
    acc.makeTransaction("deposit", 100);
    acc.makeTransaction("withdraw", 50);
    let trans = [ { type: 'deposit', amount: 100 }, { type: 'withdraw', amount: 50 } ]
    expect(acc.statement.transactions).to.eql(trans);
  });
});
