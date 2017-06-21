'use strict';

const expect = require("chai").expect;
const Statement = require('../app/Statement');

describe('Statement', function() {
  it('is instantiated with an empty transactions list', function() {
    var statement = new Statement.Statement();
    expect(statement.transactions).to.be.empty;
  });
});
