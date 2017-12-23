const assert = require('assert');
let Stick = require('../src/stick.js');
let test = {}
exports.test = test;

test['increaseLeftMargin() should increase left margin of stick']=function(){
  let stick = new Stick(50);
  stick.increaseLeftMargin();
  stick.increaseLeftMargin();
  let expected=stick.leftMargin;
  assert.equal(expected,100);
};

test['resetLeftMargin() should reset left margin at 0']=function(){
  let stick = new Stick(50);
  stick.increaseLeftMargin();
  stick.increaseLeftMargin();
  stick.resetLeftMargin();
  let expected = stick.leftMargin;
  assert.equal(expected,0);
};

test['isLeftMarginLessThan() should return left margin is less than thousand fifty']
=function(){
  let stick = new Stick(50);
  assert.ok(stick.isLeftMarginLessThan());
};

test['isLeftMarginMoreThan() should return left margin is more than thousand fifty']
=function(){
  let stick = new Stick(50);
  assert.ok(!stick.isLeftMarginMoreThan());
};
