'use strict';

class Account {
  constructor(balance) {
    this._balance = (typeof balance === 'undefined' ? 0 : balance);
  }
  getBalance() {
    return this._balance;
  }
  deposit(amount) {
    if (amount == 0) {
      throw new Error(`${amount}: you cannot deposit zero!`);
    } else if (amount < 0) {
      throw new Error(`${amount}: you cannot deposit a negative amount!`);
    } else {
      return this._balance += amount;
    }
  }
}

exports.Account = Account;
