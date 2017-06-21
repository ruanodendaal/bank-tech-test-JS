'use strict';
const today = require('../app/DateToday');

class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.date = today.DateToday();
  }
};

exports.Transaction = Transaction;
