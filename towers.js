"use strict";
var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame(){
  this.stacks = [ [1, 2, 3], [], [] ];
};

HanoiGame.prototype.isWon = function(){
  var endDisks = "1,2,3"
  if (this.stacks[2].toString() === endDisks) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  if (this.stacks[endTowerIdx].toString() === [].toString() || (this.stacks[startTowerIdx][0] < this.stacks[endTowerIdx][0])) {
    return true;
  }
  else{
    return false;
  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx){

  var valid = this.isValidMove(startTowerIdx, endTowerIdx);

  if (valid){
    var disc1 = this.stacks[startTowerIdx].shift();
    this.stacks[endTowerIdx].unshift(disc1);
    return true;
  } else {
    return false;
  }
}

HanoiGame.prototype.print = function(){
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback){

  reader.question("Select tower to move from: ", function (fromTower) {
    reader.question("Select tower to move to: ", function (toTower) {
      var startTowerIdx = parseInt(fromTower);
      var endTowerIdx = parseInt(toTower);

      callback(startTowerIdx, endTowerIdx);
    });
  });
}

HanoiGame.prototype.run = function (completionCallback) {
  this.print();
  this.promptMove(function (startTowerIdx, endTowerIdx) {
    var validMove = this.move(startTowerIdx, endTowerIdx);
    if (validMove) {

      if (this.isWon()){
        this.print();
        completionCallback();
      } else {
        this.run(completionCallback);
      }

    } else {
      console.log("cannot do.");
      this.run(completionCallback);
    }
  }.bind(this));
};

var game = new HanoiGame();
game.run( function(){

console.log("congrats, you are winnar");
reader.close();

})
