import React, { Component } from 'react'
import TimeElapsed from './timeElapsed'

class Stopwatch extends Component {
    constructor(props) {
      super(props);
  
      this.state = this.initialState = {
        isRunning: false,
        timeElapsed: 0,
      };
    }
    toggle = () => {
      this.setState({isRunning: !this.state.isRunning}, () => {
        this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
      });
    }

    reset = () => {
      clearInterval(this.timer);
      this.setState(this.initialState);
    }
    startTimer = () => {
      this.startTime = Date.now();
      this.timer = setInterval(this.update, 10);
    }
    update = () => {
      const delta = Date.now() - this.startTime;
      this.setState({timeElapsed: this.state.timeElapsed + delta});
      this.startTime = Date.now();
    }
    render() {
      const {isRunning, timeElapsed} = this.state;
      return (
        <div className="clock-bg">
        <div>
          <TimeElapsed id="timer" timeElapsed={timeElapsed} />
          <button onClick={this.toggle}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          {!isRunning  && <button
            onClick={isRunning ? this.lap : this.reset}
            disabled={!isRunning && !timeElapsed}
           >
            Reset
          </button>}
        </div>
        </div>
      );
    }
  }

  export default Stopwatch