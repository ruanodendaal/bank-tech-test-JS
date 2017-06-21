'use strict';

class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }
};

exports.Transaction = Transaction;
