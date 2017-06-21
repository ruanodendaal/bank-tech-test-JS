'use strict';

class Statement {
  constructor() {
    this.transactions = [];
  }
  print() {
    let columns = "date || credit || debit || balance\n"
    console.log(columns)
    for (let trans in this.transactions) {
      if (this.transactions[trans].type == "deposit") {
        var output = `${this.transactions[trans].date} || ${this.transactions[trans].amount} || || ${this.transactions[trans].currentBalance}\n`;
      } else if (this.transactions[trans].type == "withdraw") {
        var output = `${this.transactions[trans].date} || || ${this.transactions[trans].amount} || ${this.transactions[trans].currentBalance}\n`;
      }
     return columns + output;
    }
  }
};

exports.Statement = Statement;
