'use strict';

class Account {
  constructor(balance) {
    this.balance = (typeof balance === 'undefined' ? 0 : balance);
  }
  getBalance() {
    return this.balance;
  }
}

exports.Account = Account;
