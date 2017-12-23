const Stick = function(topMargin){
  this.leftMargin = 0;
  this.topMargin = topMargin;
}

Stick.prototype = {

  increaseLeftMargin:function(){
    this.leftMargin += 50;
  },

  resetLeftMargin:function(){
    this.leftMargin = 0;
  },

  isLeftMarginLessThan:function(){
    return this.leftMargin<950;
  },

  isLeftMarginMoreThan:function(){
    return this.leftMargin>950;
  }
}
