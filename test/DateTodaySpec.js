'use strict';
const expect = require("chai").expect;
const today = require('../app/DateToday');
var tk = require('timekeeper');

describe('DateToday', function() {
  it('formats the date to dd/mm/yyy', function() {
    var time = new Date(2017, 5, 20);
    tk.freeze(time);
    expect(today.DateToday()).to.equal("20/06/2017");
    tk.reset();
  });
});
