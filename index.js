const Account = require('./app/Account');

var acc = new Account.Account();
acc.makeTransaction("deposit", 1000);
acc.makeTransaction("deposit", 2000);
acc.makeTransaction("withdraw", 500);

console.log(acc.statement.print());
