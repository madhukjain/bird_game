let Sparrow = function(){
  this.topMargin = 0;
}

Sparrow.prototype={

  moveUp:function(){
    if(this.topMargin == 0){
      this.topMargin = 0;
    }else {
      this.topMargin -= 55;
    }
  },

  moveDown:function(){
    if(this.topMargin == 560){
      this.topMargin = 560;
    }else {
      this.topMargin +=55;
    }
  }
}
