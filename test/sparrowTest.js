const assert = require('assert');
let Sparrow = require('../src/sparrow.js');
let test = {};
exports.test=test;

test['moveUp() should move sparrow up'] = function(){
  let sparrow = new Sparrow();
  sparrow.moveUp();
  sparrow.moveUp();
  expectedMargin = sparrow.topMargin;
  assert.deepEqual(expectedMargin,0);
};

test['moveDown() should move sparrow down'] = function(){
  let sparrow = new Sparrow();
  sparrow.moveDown();
  sparrow.moveDown();
  expectedMargin = sparrow.topMargin;
  assert.deepEqual(expectedMargin,40);
};
