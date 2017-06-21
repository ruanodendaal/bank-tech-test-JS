'use strict';
const Statement = require('./Statement');
const Transaction = require('./Transaction');

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
        isValid(type, amount);
        this._balance += amount;
        addTransaction(this.statement, type, amount, this._balance);
        return this._balance;
        break;
      case "withdraw":
        isValid(type, amount);
        this._balance -= amount;
        addTransaction(this.statement, type, amount, this._balance);
        return this._balance;
        break;
      default:
        throw new Error(`${type}: not recognised`);
    }
  }
};

function addTransaction(statement, type, amount, balance) {
  let trans = new Transaction.Transaction(type, amount, balance);
  statement.transactions.push(trans);
}

function isValid(type, amount) {
  if (amount == 0) {
    throw new Error(`${amount}: you cannot ${type} zero!`);
  } else if (amount < 0) {
    throw new Error(`${amount}: you cannot ${type} a negative amount!`);
  }
};

exports.Account = Account;
