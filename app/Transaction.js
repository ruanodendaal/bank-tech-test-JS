'use strict';
const today = require('../app/DateToday');

class Transaction {
  constructor(type, amount, balance) {
    this.type = type;
    this.amount = amount;
    this.date = today.DateToday();
    this.currentBalance = balance;
  }
};

exports.Transaction = Transaction;
