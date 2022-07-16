function StopWatch() {
  this.isRunning = false;
  this.timeBefore = 0;
  this.timeNow = 0;
  this.duration = 0;

  this.start = () => {
    if (this.isRunning === true) {
      throw new Error("Stop watch is already started!");
    } else {
      let date = new Date();
      this.timeBefore = date.getTime();
      this.isRunning = true;
      console.log("Stop watch has been started!");
    }
  };

  this.stop = () => {
    if (this.isRunning === false) {
      throw new Error("Stop watch is not running!");
    } else {
      let date = new Date();
      this.timeNow = date.getTime();
      this.isRunning = false;
      this.getDuration();
      console.log("Stop watch has been stopped!");
    }
  };

  this.getDuration = () => {
    //Convert time to seconds
    this.duration = (this.timeNow - this.timeBefore) / 1000;
    //convert duration to mininutes if greator than 60sec
    if (this.duration > 60) {
      this.duration /= 60;
      //Duration in minutes to 2 decimal places
      return (this.duration = `${this.duration.toFixed(2)} Minutes`);
    } else {
      //Duration in seconds to 2 decimal place
      return (this.duration = `${this.duration.toFixed(2)} Seconds`);
    }
  };

  this.reset = () => {
    if (this.isRunning === false) {
      throw new Error("Stop watch not started!");
    } else {
      this.duration = this.timeBefore = this.timeNow = 0;
      this.isRunning = false;
      console.log("Stop watch has been reset!");
    }
  };
}

let stopWatch = new StopWatch();
