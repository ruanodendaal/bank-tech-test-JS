# Bank tech test [![Build Status](https://travis-ci.org/ruanodendaal/bank-tech-test-JS.svg?branch=master)](https://travis-ci.org/ruanodendaal/bank-tec)
[![Coverage Status](https://coveralls.io/repos/github/ruanodendaal/bank-tech-test-JS/badge.svg?branch=master)](https://coveralls.io/github/ruanodendaal/bank-tech-test-JS?branch=master)

## Specification

Write a simple banking program that satisfy the below conditions.

### Requirements

* You should be able to interact with the your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawals.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database).

### User Stories
```
As a customer
I want to be able to open an account
so that I can bank
```
```
As a customer
I want to deposit money into my account
so that I increase my balance
```
```
As a customer
I want to withdraw money from my account
so that I can by goods
```
```
As a customer
I want an account statement
so that I can keep track of my account usage
```


### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Instructions

To run:
`node index.js`

### Technologies
- JavaScript
- Mocha & Chai testing
