const startGame = function() {
  Game = new Game();
  Game.makeSticks(11, 80);
  getSticksPosition();
  document.addEventListener('keydown', moveSparrow);
}

let sticks = document.getElementsByClassName('stick');
let moveSparrow = function(event) {
  let sparrow = document.getElementById("sparrow");
  if (event.keyCode == 38) {
    Game.Sparrow.moveUp();
    sparrow.style.top = `${Game.Sparrow.topMargin}px`
  }
  if (event.keyCode == 40) {
    Game.Sparrow.moveDown();
    sparrow.style.top = `${Game.Sparrow.topMargin}px`
  }
}

let mainFunction = function() {
  moveEvenNumSticks(100);
  moveOddNumSticks(450);
  moveSparrow(event);
}

getSticksPosition = function() {
  for (var index = 0; index < sticks.length; index++) {
    topPosition = Game.sticks[index].topMargin;
    sticks[index].style.top = `${topPosition}px`;
  }
}

moveEvenNumSticks = function(time) {
  for (let index = 0; index < Game.sticks.length; index += 2) {
    setInterval(function() {
      stick = Game.sticks[index];
      if (stick.isLeftMarginMoreThan()) {
        stick.resetLeftMargin()
      } else {
        stick.increaseLeftMargin();
        sticks[index].style.left = `${stick.leftMargin}px`;
      }
    }, time)
    time += 150;
  }
}

moveOddNumSticks = function(time) {
  for (let index = 1; index < Game.sticks.length; index += 2) {
    setInterval(function() {
      stick = Game.sticks[index];
      if (stick.isLeftMarginMoreThan()) {
        stick.resetLeftMargin();
      } else {
        stick.increaseLeftMargin();
        sticks[index].style.left = `${stick.leftMargin}px`;
      }
    }, time)
    time -= 100;
  }
}

let stopGame = function() {
  alert('GAME OVER' + '\n' + 'Your Score is ' + score);
  location.reload();
}

window.onload = startGame;
