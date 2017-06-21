'use strict';

class Statement {
  constructor() {
    this.transactions = [];
  }
  print() {
    let output = "date || credit || debit || balance\n"
    this.transactions.reverse();
    for (let trans in this.transactions) {
      if (this.transactions[trans].type == "deposit") {
        output += `${this.transactions[trans].date} || ${this.transactions[trans].amount} || || ${this.transactions[trans].currentBalance}\n`;
      } else if (this.transactions[trans].type == "withdraw") {
        output += `${this.transactions[trans].date} || || ${this.transactions[trans].amount} || ${this.transactions[trans].currentBalance}\n`;
      }
    }
    return output;
  }
};

exports.Statement = Statement;
