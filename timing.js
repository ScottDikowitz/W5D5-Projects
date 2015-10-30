function Clock(currentTime) {
  //currentTime is date Object
  this.currentTime = -1;
}

Clock.prototype.printTime = function() {
  timeString = this.currentTime.getHours() + ":" + this.currentTime.getMinutes() + ":" + this.currentTime.getSeconds();
  console.log(timeString);
}

Clock.prototype.run = function() {
  this.currentTime = new Date();
  this.printTime();
    setInterval(this._tick.bind(this), 5000);
  }

Clock.prototype._tick = function() {
  var curSeconds = this.currentTime.getSeconds();
  this.currentTime.setSeconds(curSeconds + 5);
  this.printTime();
}

var clock = new Clock();
clock.run();
