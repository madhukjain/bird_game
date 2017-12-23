Game = function(){
  this.score = 0;
  this.sticks = [];
  this.Sparrow = new Sparrow();
}

Game.prototype = {

  makeSticks:function(number,topMargin){
    if (number==0) {
      return this.sticks;
    }
    this.sticks.push(new Stick(topMargin));
    this.makeSticks(number-1,topMargin+55);
  },

  increaseScore:function(){
    this.score += 10;
  }
}
