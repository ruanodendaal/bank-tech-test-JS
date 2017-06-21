'use strict';
const Statement = require('./Statement');

class Account {
  constructor(balance) {
    this._balance = (typeof balance === 'undefined' ? 0 : balance);
    this.statement = new Statement.Statement();
  }
  getBalance() {
    return this._balance;
  }
  makeTransaction(type, amount) {
    switch (type) {
      case "deposit":
        isValid(type, amount)
        return this._balance += amount;
        break;
      case "withdraw":
        isValid(type, amount)
        return this._balance -= amount;
        break;
      default:
        throw new Error(`${type}: not recognised`);
    }
  }
};

function isValid(type, amount) {
  if (amount == 0) {
    throw new Error(`${amount}: you cannot ${type} zero!`);
  } else if (amount < 0) {
    throw new Error(`${amount}: you cannot ${type} a negative amount!`);
  }
};

exports.Account = Account;