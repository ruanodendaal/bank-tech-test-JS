'use strict';

class Account {
  constructor(balance) {
    this._balance = (typeof balance === 'undefined' ? 0 : balance);
  }
  getBalance() {
    return this._balance;
  }
  deposit(amount) {
    if (amount > 0) {
      return this._balance += amount;
    } else {
      throw new Error(`${amount} does not conform to the allowed amount`);
    }

  }
}

exports.Account = Account;
